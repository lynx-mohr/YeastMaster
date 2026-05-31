// ==========================================
// --- UI.JS — Navigation, Tema & Animationer ---
// ==========================================
// Kräver: app.js (globala variabler), i18n.js

// --- KONFIGURATION FÖR VYER & ANIMATIONER ---
// Flyttad upp hit så att appen har stenkoll på ordningen från start!
const viewOrder = ['soul', 'library', 'librarian', 'lab', 'dashboard', 'settings'];

// Tvinga webbläsaren att sluta lägga sig i scrollningen vid bakåt-klick!
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Vi skapar en variabel för att hålla koll på var vi VAR någonstans
let currentActiveView = 'soul'; 

function showView(viewName, pushToHistory = true, forceOverride = false) { 
    // --- STÄDGUMMA: Hantera öppna popups och lektioner vid flikbyte ---
    if (!forceOverride) {
        const tourOverlay = document.getElementById('demo-overlay');
        const isTourActive = tourOverlay && (tourOverlay.style.display === 'block' || tourOverlay.classList.contains('active'));

        // 1. Touren är fortfarande helig – den blockerar flikbyten om vi inte tvingar (forceOverride)
        if (isTourActive) {
            console.log("Navigering blockerad: Guidad tour pågår!");
            return; 
        }

        // 2. Om användaren klickar på huvudmenyn, stäng ner alla öppna vyer/modaler automatiskt
        const addStrainModal = document.getElementById('add-strain-modal');
        const pitchModal = document.getElementById('pitch-calc-modal');
        const academyModule = document.getElementById('academy-module-view');
        const infoModal = document.getElementById('yeast-info-modal');
        const supportModal = document.getElementById('support-modal');

        if (academyModule && academyModule.style.display === 'block') {
            closeAcademyModule(false); // Stäng lektionen i bakgrunden utan extra history.back()
        }
        if (pitchModal && pitchModal.style.display === 'flex') closePitchCalcModal();
        if (addStrainModal && addStrainModal.style.display === 'flex') closeAddStrainModal();
        if (infoModal && infoModal.style.display === 'flex') closeYeastModal();
        if (supportModal && supportModal.style.display === 'flex') closeSupportModal();
    }
    // -------------------------------------------------------

    const views = {
        login: document.getElementById('login-container'),
        claim: document.getElementById('claim-container'),
        soul: document.getElementById('view-soul'),
        library: document.getElementById('view-library'),
        librarian: document.getElementById('view-librarian'),
        lab: document.getElementById('view-lab'),
        dashboard: document.getElementById('view-dashboard'),
        settings: document.getElementById('view-settings'),
        privacy: document.getElementById('view-privacy'),
        about: document.getElementById('view-about'),
        hardware: document.getElementById('view-hardware'),
        'about-library': document.getElementById('view-about-library'),
        'about-cloud': document.getElementById('view-about-cloud')
    };

    if (!views[viewName]) return;

    // Lägg en brödsmula i webbläsarens historik!
    if (pushToHistory) {
        history.pushState({ view: viewName }, null, "");
    }

    // --- LOGIK FÖR ANIMATIONSRIKTNING ---
    const oldIndex = viewOrder.indexOf(currentActiveView);
    const newIndex = viewOrder.indexOf(viewName);
    
    let animClass = '';
    // Kollar om vi flyttar oss i huvudmenyn
    if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
        // Går vi till höger i menyn ska bilden komma IN från höger
        animClass = (newIndex > oldIndex) ? 'slide-in-right' : 'slide-in-left';
    }

    // Växla vyer
    Object.keys(views).forEach(key => {
        if (views[key]) {
            // 1. Ta bort de gamla animationsklasserna
            views[key].classList.remove('slide-in-right', 'slide-in-left');
            
            if (key === viewName) {
                // Nollställ scroll INNAN vyn visas så animationen inte börjar nedifrån
                views[key].scrollTop = 0;
                window.scrollTo(0, 0);

                const isFlexView = (key === 'login' || key === 'claim');
                views[key].style.display = isFlexView ? 'flex' : 'block';

                // 2. DET MAGISKA HACKET: Tvinga fram en "Reflow"
                void views[key].offsetWidth;

                // 3. Lägg på animationen igen
                if (animClass) {
                    views[key].classList.add(animClass);
                }
            } else {
                views[key].style.display = 'none';
            }
        }
    });

    // --- MAGI: FYLL PÅ GLASET AUTOMATISKT NÄR WI GÅR TILL HOME ---
    if (viewName === 'soul') {
        const glass = document.getElementById('interactive-beer-glass');
        if (glass) {
            glass.classList.remove('anim-drain', 'anim-fill');
            void glass.offsetWidth; 
            
            setTimeout(() => {
                glass.classList.add('anim-fill');
            }, 800);
        }
    }

    // --- KOLLA LARM-SWITCH NÄR INSTÄLLNINGAR ÖPPNAS ---
    if (viewName === 'settings') {
        // Sätt switchen i rätt läge direkt när vyn laddas
        checkPushStatusOnLoad();
    }

    // Uppdatera vilken vy som är aktiv nu för nästa gång vi klickar
    currentActiveView = viewName;

    // --- UPPDATERA MENYN (Städad, bara en kopia nu!) ---
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        const clickEvent = item.getAttribute('onclick');
        if (clickEvent && clickEvent.includes(`'${viewName}'`)) {
            item.classList.add('active');
        }
    });

    // --- NY FIX: Brutal scroll till toppen ---
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }, 10);
}

function showAddDevice() {
    document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
    
    const claimContainer = document.getElementById('claim-container');
    if (claimContainer) {
        claimContainer.style.display = 'flex';
        // Anropa vår nya automatiska översättare
        applyTranslations();
    }
}

// Och se till att denna finns för att tända ikonerna!
function setActive(clickedElement) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    clickedElement.classList.add('active');
}

window.onpopstate = function(event) {
    // 1. Lista alla modaler vi vill kunna stänga med bakåtknappen
    const academy = document.getElementById('academy-module-view');
    const pitch = document.getElementById('pitch-calc-modal');
    const strain = document.getElementById('add-strain-modal');
    const claim = document.getElementById('claim-container');
    const info = document.getElementById('yeast-info-modal');
    const support = document.getElementById('support-modal');
    const detail = document.getElementById('yeast-detail-view'); // Om du använder den

    // 2. Kolla vilken som är öppen och stäng den / stega tillbaka
    
    // --- LOGIK FÖR AKADEMIN (Stega tillbaka eller stäng) ---
    if (academy && academy.style.display === 'block') {
        if (event.state && event.state.page === 'academy') {
            // Vi är kvar i lektionen, men backade ett steg (t.ex. steg 4 till 3)
            currentWizardStep = event.state.step;
            updateWizardUI(); // Rita om skärmen till det föregående steget
            return; 
        } else {
            // Vi backade förbi Steg 0, stäng hela lektionen!
            // (Skickar med false ifall din closeAcademyModule försöker göra en history.back)
            closeAcademyModule(false); 
            return;
        }
    }

    if (pitch && pitch.style.display === 'flex') {
        closePitchCalcModal();
        return;
    }
    if (strain && strain.style.display === 'flex') {
        closeAddStrainModal();
        return;
    }
    if (info && info.style.display === 'flex') {
        closeYeastModal();
        return;
    }
    if (support && support.style.display === 'flex') {
        closeSupportModal();
        return;
    }
    if (claim && claim.style.display === 'flex') {
        showView('settings');
        return;
    }
    if (detail && detail.style.display === "block") {
        detail.style.display = "none";
        return;
    }

    // 3. Om ingen modal var öppen, byt flik baserat på historik
    if (event.state && event.state.view) {
        showView(event.state.view, false); // false = skapa ingen ny brödsmula, vi backar ju!
    } else {
        // Fallback: Gå till startvyn
        showView('soul', false);
    }
};

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    // Spara valet i webbläsaren så det komms ihåg nästa gång
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    
    // --- NYTT: Tvinga grafen att rita om sig med rätt färger! ---
    if (typeof initLabChart === 'function') {
        initLabChart();
    }
}

function setActive(clickedElement) {
    // Ta bort 'active' klassen från alla nav-items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Lägg till 'active' på den vi just klickade på
    clickedElement.classList.add('active');
}

// ==========================================
// SWIPE NAVIGATION (Mobil)
// ==========================================

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

function handleSwipe() {
    const swipeThreshold = 50; // Hur många pixlar du måste svepa för att det ska "gälla"
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    // 1. Kolla så det är ett horisontellt svep (och inte en scrollning neråt)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > swipeThreshold) {
        
        // 2. Ta reda på vilken flik vi står på just nu
        let currentView = '';
        viewOrder.forEach(view => {
            const el = document.getElementById('view-' + view);
            if (el && (el.style.display === 'block' || el.style.display === 'flex')) {
                currentView = view;
            }
        });

        // Avbryt om vi är på inloggningen eller claim-sidan
        let currentIndex = viewOrder.indexOf(currentView);
        if (currentIndex === -1) return;

        // 3. Byt flik baserat på riktning!
        if (deltaX < 0) {
            // Svep VÄNSTER (fingret dras åt vänster) = Gå till NÄSTA vy
            if (currentIndex < viewOrder.length - 1) {
                showView(viewOrder[currentIndex + 1]);
            }
        } else {
            // Svep HÖGER (fingret dras åt höger) = Gå till FÖREGÅENDE vy
            if (currentIndex > 0) {
                showView(viewOrder[currentIndex - 1]);
            }
        }
    }
}

document.addEventListener('touchstart', e => {
    if (e.target.closest('.chart-container') || e.target.tagName.toLowerCase() === 'input') return;

    const detailView = document.getElementById('yeast-detail-view');
    const infoModal = document.getElementById('yeast-info-modal');
    const academyModule = document.getElementById('academy-module-view'); // <-- NY SPÄRR!

    if (detailView && detailView.style.display === 'block') return;
    if (infoModal && infoModal.style.display === 'flex') return;
    if (academyModule && academyModule.style.display === 'block') return; // <-- NY SPÄRR!

    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', e => {
    if (e.target.closest('.chart-container') || e.target.tagName.toLowerCase() === 'input') return;

    const detailView = document.getElementById('yeast-detail-view');
    const infoModal = document.getElementById('yeast-info-modal');
    const academyModule = document.getElementById('academy-module-view'); // <-- NY SPÄRR!

    if (detailView && detailView.style.display === 'block') return;
    if (infoModal && infoModal.style.display === 'flex') return;
    if (academyModule && academyModule.style.display === 'block') return; // <-- NY SPÄRR!

    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, { passive: true });


// ==========================================
// BEER COLOR CYCLER (Easter Egg med Kontrast-AI)
// ==========================================
const beerStyles = [
    // Neutral & Mörk: Ihålig text (insidan = vätskan) med ljus kontur
    { name: 'Neutral', fill: '#4a4a4a', inner: '#4a4a4a', stroke: 'var(--oled-color)' }, 
    
    // Ljusa ölsorter: Solitt mörk text för grym kontrast!
    { name: 'Pilsner', fill: '#f4c95d', inner: '#111111', stroke: '#111111' }, 
    { name: 'Lager',   fill: '#ffcc33', inner: '#111111', stroke: '#111111' }, 
    { name: 'Pale Ale',fill: '#f2b336', inner: '#111111', stroke: '#111111' }, 
    { name: 'Amber',   fill: '#e8992e', inner: '#111111', stroke: '#111111' }, 
    
    // Mörka ölsorter: Tillbaka till ihålig text med kritvit kontur
    { name: 'Brown',   fill: '#8b4513', inner: '#8b4513', stroke: '#ffffff' }, 
    { name: 'Stout',   fill: '#2b1500', inner: '#2b1500', stroke: '#ffffff' }  
];

let currentBeerStyleIndex = 0;

function initBeerCycler() {
    const carboyWrapper = document.querySelector('.carboy-wrapper');
    if (!carboyWrapper) return;

    // 1. Kolla om du har en sparad ölstil sedan tidigare
    const savedIndex = localStorage.getItem('myBeerStyleIndex');
    if (savedIndex !== null) {
        currentBeerStyleIndex = parseInt(savedIndex, 10);
    }
    
    // 2. Applicera färgen direkt vid start
    applyBeerStyle(currentBeerStyleIndex);

    // 3. Visa muspekare för att indikera att den är klickbar
    carboyWrapper.style.cursor = 'pointer';

    // 4. Byt färg vid varje klick!
    carboyWrapper.addEventListener('click', () => {
        currentBeerStyleIndex++;
        if (currentBeerStyleIndex >= beerStyles.length) {
            currentBeerStyleIndex = 0; // Börja om
        }
        
        applyBeerStyle(currentBeerStyleIndex);
        localStorage.setItem('myBeerStyleIndex', currentBeerStyleIndex);
    });
}

// NY FUNKTION: Applicerar alla tre färger samtidigt
function applyBeerStyle(index) {
    const style = beerStyles[index];
    document.documentElement.style.setProperty('--beer-color', style.fill);
    document.documentElement.style.setProperty('--beer-inner', style.inner);
    document.documentElement.style.setProperty('--beer-stroke', style.stroke);
}

// Starta funktionen när sidan laddas
document.addEventListener('DOMContentLoaded', () => {
    initBeerCycler();
});

        
function setTheme(mode) {
    const body = document.body;
    const btnDark = document.getElementById('btn-theme-dark');
    const btnLight = document.getElementById('btn-theme-light');

    if (mode === 'light') {
        body.classList.add('light-mode');
        btnLight.classList.add('active');
        btnDark.classList.remove('active');
    } else {
        body.classList.remove('light-mode');
        btnDark.classList.add('active');
        btnLight.classList.remove('active');
    }

    // Valfritt: Spara valet i webbläsaren så den kommer ihåg det nästa gång
    localStorage.setItem('yeastmaster-theme', mode);
}

function setAccent(color, element) {
    // 1. Sätt huvudfärgen i hela appen
    document.documentElement.style.setProperty('--accent-color', color);
    
    // 2. Para ihop med den perfekta accentfärg 2!
    let secondaryColor = color; // Fallback
    
    switch(color.toLowerCase()) {
        case '#8cc63f': // Om Huvudfärg = Grön
            secondaryColor = '#f39c12'; // Sekundär = Klar Orange
            break;
        case '#00e5ff': // Om Huvudfärg = Cyan
            secondaryColor = '#b142ff'; // Sekundär = Lila
            break;
        case '#b142ff': // Om Huvudfärg = Lila
            secondaryColor = '#00e5ff'; // Sekundär = Cyan
            break;
        case '#ff4444': // Om Huvudfärg = Röd
            secondaryColor = '#ffcc00'; // Sekundär = Klargul
            break;
        case '#ff9800': // Om Huvudfärg = Orange
            secondaryColor = '#f4c95d'; // Sekundär = Ljusgul (Pilsner-guld)
            break;
    }

    // Applicera den sekundära färgen
    document.documentElement.style.setProperty('--accent-secondary', secondaryColor);

    // Spara i LocalStorage så appen minns dina val
    localStorage.setItem('accentColor', color);
    localStorage.setItem('accentSecondary', secondaryColor);
    
    // 3. Flytta .active-klassen till den klickade pricken i Settings
    document.querySelectorAll('.color-dot').forEach(dot => dot.classList.remove('active'));
    if (element) {
        element.classList.add('active');
    }

    // ==================================================
    // 4. MAGIN: UPPDATERA GRAFERNA BLIXTSNABBT!
    // ==================================================
    
    // A) Live Dashboard-grafen (beerChart)
    if (window.beerChart) {
        window.beerChart.data.datasets[0].borderColor = color;
        
        // Bygg en ny toning i samma sekund som vi byter färg
        const isLightNow = document.body.classList.contains('light-mode');
        let ctx = window.beerChart.ctx;
        let newGradient = ctx.createLinearGradient(0, 0, 0, 150);
        newGradient.addColorStop(0, isLightNow ? color + '15' : color + '35');
        newGradient.addColorStop(1, color + '00');
        
        window.beerChart.data.datasets[0].backgroundColor = newGradient;
        window.beerChart.update('none'); 
    }

    // B) The Profiler-grafen i labbet (labChart)
    if (typeof labChart !== 'undefined' && labChart !== null) {
        labChart.data.datasets[0].borderColor = color;
        labChart.data.datasets[0].pointBorderColor = color;
        labChart.update('none');
    }
}

// Kolla om användaren har ett sparat tema när sidan laddas
const savedTheme = localStorage.getItem('yeastmaster-theme');
if (savedTheme) {
    setTheme(savedTheme);
}

function applyTranslations() {
    const lang = window.currentLang || 'en';
    const t = window.translations?.[lang] || window.translations?.['en'];

    // Hitta alla element som har data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        // Plocka ut nyckeln (t.ex. "claim.title" -> t["claim"]["title"])
        const keys = key.split('.');
        let translation = t;
        keys.forEach(k => translation = translation?.[k]);
        
        if (translation) el.innerText = translation;
    });

    // Hitta alla element som har data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const keys = key.split('.');
        let translation = t;
        keys.forEach(k => translation = translation?.[k]);
        
        if (translation) el.placeholder = translation;
    });
}
