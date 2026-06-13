---
name: project-french-i18n
description: Flerspråksstöd (fr + es) — fas 1 (UI) klar, fas 2 (jästbeskrivningar) kvar; språkväljare är dropdown
metadata:
  type: project
---

**5 språk totalt (juni 2026):** en, de, es, fr, sv. Språkväljaren i Settings är numera en **dropdown** (`#lang-select`, klass `.lang-select`) istället för knappar — visningsordning English/Deutsch/Español/Français/Svenska. `setLanguage()` synkar `langSelect.value`. Hårdkodade språkkollar (MODO DEMO / Días osv.) finns i dashboard.js, settings.js, profiler.js — lägg till nya språk på ALLA dessa ställen.

**Spanska (es):** Spanien-bryggares termer, informellt **tú** (verifierat 0 usted-tilltal). Termer: levadura, mosto, siembra/sembrar (pitch), choque frío (cold crash), maduración (conditioning), lupulado en seco (dry hop), barro de levadura (slurry), nevera (fridge), reposo de diacetilo. Att flagga för spansk granskare: `ago: "atrás"` (Spanien säger oftare "hace X"), `live: "EN VIVO"` (Spanien kanske hellre "EN DIRECTO").

---

Franska (fr) lades till som fjärde språk (efter en/sv/de).

**i18n.js har TVÅ objekt:**
1. `yeastDescriptions` (rad ~1-3304) — långa HTML-beskrivningar per jäststam. Fallback: `[currentLang] || ['en']` (helt block).
2. `translations` (rad ~3307+) — UI-strängar. Ingen per-nyckel-fallback i `updateTexts()` — saknad nyckel lämnar elementet oförändrat, så fr-blocket måste vara komplett.

**FAS 1 (KLAR):** Hela `translations.fr`-blocket översatt + FR-knapp i index.html (rad ~363). Hårdkodade språkkollar uppdaterade med fr i dashboard.js (MODE DÉMO), settings.js + profiler.js (Jours). Jästbeskrivningarna faller tillbaka till engelska automatiskt.

**FAS 2 (delvis klar):**
- ✅ Larmsträngar (no_device, no_strains, login_sync, sync_blocked, sync_empty) tillagda i `alerts` på alla 5 språk (låg tidigare som svenska inline-fallbacks i app.js).
- ✅ Akademin (`academyModules` i academy.js) översatt till fr + es — alla 8 moduler (intro, calc, starters, washing, agar, wild, stirplate, counting). openAcademyModule har nu PER-MODUL fallback till en (app.js ~595: `langDict[id] || enDict[id]`), så delvis översatta språk är säkra. Strukturen (data-step, wiz-prev/wiz-next, pitch-vol/og/rate/date-id:n, onclick/oninput) bevarad — bara text översatt.
- ❌ KVAR: `yeastDescriptions.fr` + `yeastDescriptions.es` (~1090 rader/språk, de långa jästkort-beskrivningarna). Faller tillbaka till engelska via profiler.js:1405. Sista biten.

**Tilltalston:** Franskan använder INFORMELLT "tu" (inte "vous"), för att matcha tyskans "du" och den lekfulla varumärkesrösten — som en inhemsk indie-skapare för hobbybryggare. Verifierat 0 vous/votre/vos kvar i fr-blocket. Företaget talar fortf. "nous". Om nya fr-strängar läggs till: använd tu-form (tu/ton/ta/tes, verb -es/-s, imperativ utan -ez).

**Att flagga för fransk granskare:**
- `settings.fr.ago: "auparavant"` och `status.min_ago: "min"` — fransk ordföljd ("il y a X") skiljer sig från engelskans postposition; kontrollera att heartbeat-texten läser naturligt.
- "chewing-gum" (about_lib.card2_p1) — naturlig fransk lånord för bubblegum-estern, men kompisen kan bekräfta.
- Bryggtermer använda: houblonnage à cru (dry hop), choc à froid (cold crash), maturation (condition), repos diacétyle, pied de cuve (starter), boue de levure (slurry), moût (wort), ensemencement (pitch).

**Why:** Stor hemmabryggarscen i Frankrike/Belgien; belgiska jästprofiler finns redan. [[project-modularization]] [[project-helmet-csp]]
