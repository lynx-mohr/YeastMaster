---
name: project-helmet-csp
description: Helmet.js CSP-konfiguration — vilka domäner som är tillåtna och varför
metadata:
  type: project
---

Helmet lades till i server.js med en anpassad CSP (inte default). Default CSP blockerade allt.

**Konfigurerade direktiv:**
- `scriptSrc`: 'self', cdn.jsdelivr.net (Chart.js), www.gstatic.com (Firebase), www.google.com + apis.google.com (reCAPTCHA/OAuth)
- `scriptSrcAttr`: 'unsafe-inline' — krävs för onclick="showView(...)" i HTML-navigationen
- `connectSrc`: 'self', soulofbeer-live.onrender.com, cdn.jsdelivr.net, www.gstatic.com, www.google.com, apis.google.com, *.googleapis.com, *.firebaseapp.com, *.firebaseio.com, wss://*.firebaseio.com
- `frameSrc`: yeastmaster-cloud.firebaseapp.com, accounts.google.com, www.google.com, apis.google.com (Google Sign-in popup + reCAPTCHA-iframe)
- `styleSrc`: 'self', https:, 'unsafe-inline'

**VIKTIGT — Helmet bröt Firebase-inloggning i TVÅ steg (felsökt juni 2026):**

1. `auth/internal-error`: Den verkliga boven var **service workern** (sw.js) som hade `event.respondWith(fetch(event.request))` — en blank genomsläppning som dirigerade ALLA resurser genom SW:n, varvid de styrdes av CSP:ns connect-src istället för rätt direktiv. Ofarligt utan CSP (funkade i månader), men giftigt med Helmet/CSP → reCAPTCHA (www.google.com) blockerades. Fix: tog bort fetch-handlern helt i sw.js (lade till skipWaiting + clients.claim). Konsolen pekade på sw.js:9 som blockerade fonts.gstatic.com i connect-src — det avslöjade mekanismen. OBS: gammal SW måste avregistreras manuellt (F12→Application→Service Workers→Unregister) annars körs gammal kod kvar.

2. `auth/popup-closed-by-user` (efter SW-fixen): Helmets standard `Cross-Origin-Opener-Policy: same-origin` kapade postMessage mellan sidan och Google-login-popupen. Popupen loggade in men kunde inte svara tillbaka → stängdes. Fix: `crossOriginOpenerPolicy: { policy: "same-origin-allow-popups" }` i helmet-configen.

Även tillagt i CSP: www.google.com + apis.google.com (scriptSrc/connectSrc/frameSrc) för reCAPTCHA/OAuth. API-nyckeln var INTE begränsad (None). Lärdom: Helmets defaults (COOP + via SW även CSP) bryter Firebase Auth på flera subtila sätt.

**Why:** Default helmet() blockerade Firebase SDK och Chart.js CDN helt. App crashade med "firebase is not defined".

**How to apply:** Om nya CDN-beroenden läggs till → lägg till dem i scriptSrc OCH connectSrc (för source maps i DevTools).
