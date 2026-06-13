---
name: project-modularization
description: app.js modularization progress — which files exist, what they contain, load order
metadata:
  type: project
---

app.js har brutits ut i separata moduler. Ursprunglig storlek: ~5600 rader.

**Nuvarande filstruktur (laddordning i index.html):**
1. yeastdata.js (273 rader) — temperaturprofiler för hårdvaran (yeastDatabase)
2. academy.js (1240 rader) — wizard/akademi-logik (fanns redan)
3. i18n.js (4591 rader) — översättningar
4. app-tour.js (458 rader) — guidad tur
5. auth.js (263 rader) — Firebase, login/logout, onAuthStateChanged
6. dashboard.js (722 rader) — Live View, 24h-graf, bubblor, heartbeat
7. profiler.js (2289 rader) — Lab, Profiler, Pitch Calculator, fullscreen-graf
8. settings.js (640 rader) — enhetshantering, push-notiser, support-modal
9. library.js (527 rader) — yeastStrains-array, hwStrainNames, renderYeastLibrary, house bank, cloud sync
10. app.js (1507 rader) — kärnan: navigation, tema, swipe, glass, demo-tur, wizard-anrop

**Why:** app.js var ~5600 rader och svår att navigera. Varje fil testad och godkänd av användaren efter push.

**Kvar att eventuellt bryta ut från app.js (~1507 rader):**
- ui.js: showView, setActive, swipe, toggleTheme, setTheme, setAccent, applyTranslations
- Resten (glass, demo-tur, syncToSelectedDevice) — ca 900 rader kärna
