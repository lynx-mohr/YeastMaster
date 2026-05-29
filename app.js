// ==========================================
// --- GLOBALA VARIABLER ---
// ==========================================
let currentAlertStr = "";
let alertDismissedByUser = false;




document.addEventListener('DOMContentLoaded', () => {
    // Tvinga INGEN till login! 
    // Vi låter dem börja på SOUL-vyn (där glaset fylls) eller den flik de klickat på.
    // Berätta för mobilens bakåtknapp att "soul" är startplatsen
    history.replaceState({ view: 'soul' }, null, "");

    showView('soul', false);

    // --- STÄNG "CONNECT DEVICE"-RUTAN VID KLICK I BAKGRUNDEN ---
    const claimContainer = document.getElementById('claim-container');
    if (claimContainer) {
        claimContainer.addEventListener('click', function(event) {
            // Kontrollera att klicket var på bakgrunden och inte på den vita rutan
            if (event.target === this) {
                showView('settings'); // Skickar användaren smidigt tillbaka till inställningar
            }
        });
    }

    let editingProfileName = null; // Håller koll på om vi editerar

window.startEditingProfile = function(profileName) {
    window.editingProfileName = profileName; // <-- Använd window. här!
    if (typeof closeYeastModal === 'function') closeYeastModal();
    
    const savedProfiles = JSON.parse(localStorage.getItem('customYeastProfiles') || '[]');
    const profileData = savedProfiles.find(p => p.s === profileName);
    
    if (profileData && typeof loadProfileIntoLab === 'function') {
        loadProfileIntoLab(profileData.p.replace('Custom (', '').replace(')', ''), profileData.s, profileData.s);
    }
};

});
// --- KONFIGURATION ---
let activeDeviceId = null;
let isAuthResolved = false; // Håller koll på om Firebase har vaknat än
const API_BASE = "https://soulofbeer-live.onrender.com/api";
// Firebase-config + initializeApp + auth — definieras i auth.js





// Denna behövs för att slutföra inloggningen efter en redirect (på mobil)
auth.getRedirectResult().catch((error) => {
    console.error("Redirect-fel:", error);
});

// --- 6. KOPPLA ENHET (CLAIM) ---
if(document.getElementById('btn-claim')) {
    document.getElementById('btn-claim').addEventListener('click', async () => {
        const user = auth.currentUser;

        // 1. KONTROLL: Är du inte inloggad? Gå till Login-skärmen direkt!
        if (!user) {
            showView('login');
            return;
        }

        // 2. Om du ÄR inloggad, läs av fälten och fortsätt som vanligt
        const macInput = document.getElementById('input-mac').value.trim().toUpperCase();
        const nicknameInput = document.getElementById('input-nickname').value.trim() || "Min YeastMaster";
        
        // 3. Kolla så att MAC-adressen är tillräckligt lång
        if (macInput.length < 12) {
            alert("Ange ett giltigt ID!");
            return;
        }

        try {
            const res = await fetch(`${API_BASE}/claim-device`, {
                method: 'POST',
                headers: await getAuthHeaders(),
                body: JSON.stringify({
                    device_id: macInput,
                    name: nicknameInput
                })
            });

            if (res.ok) {
                alert("Enhet kopplad! Laddar om...");
                location.reload(); // Enkelt sätt att uppdatera vyn
            }
        } catch (err) {
            console.error("Claim failed:", err);
        }
    });
}

// Logout + delete account — hanteras i auth.js

function checkAddDeviceAccess() {
    // Kolla om vi har en inloggad användare
    const user = auth.currentUser;

    if (!user) {
        // --- GÄST: Visa ett meddelande! ---
        const lang = window.currentLang || 'en';
        // Hämtar från ordboken, eller använder en engelsk fallback
        const alertMsg = window.translations?.[lang]?.alerts?.login_add_device || "Please log in to add a YeastMaster device.";
        
        alert(alertMsg);
        
        // (Valfritt) Om du vill vara extra smidig kan du skicka dem raka vägen till inloggningen efter de klickat OK:
        // showView('login'); 
        
        return; // Avbryt här, gå inte vidare till rutan!
    }

    // --- INLOGGAD: Släpp förbi! ---
    // Beroende på hur din app är uppbyggd, anropar du funktionen som öppnar vyn.
    // Förmodligen är det någon av dessa två:
   showView('claim');
    // eller: showView('claim');
}

let selectedStrains = []; // Här sparar vi ID:n på de 10 utvalda




// ==========================================
// MASTER STARTUP (Körs när sidan är helt redo)
// ==========================================
window.addEventListener('DOMContentLoaded', () => {

    // --- NYTT: Ladda husjäster först! ---
    if (typeof loadHouseStrains === "function") {
        loadHouseStrains();
    }

    //  Ladda in dina egna sparade profiler
    if (typeof loadCustomProfiles === "function") {
        loadCustomProfiles();
    }

    // 2. Fyll rullistan i Profiler
    if (typeof populateBaseYeastDropdown === "function") {
        populateBaseYeastDropdown();
    }

    // 3. Starta Lab-grafen
    if (typeof initLabChart === "function") {
        setTimeout(initLabChart, 500);
    }
    
    // 4. Starta Pitch Calculatorn
    const dateInput = document.getElementById('pitch-date');
    if (dateInput) {
        dateInput.valueAsDate = new Date();
        if (typeof calculatePitch === "function") calculatePitch();
    }

    // 5. Tema och Färg (Ladda sparade val)
    const savedAccent = localStorage.getItem('accentColor');
    if (savedAccent && typeof setAccent === "function") {
        const matchingDot = document.querySelector(`.color-dot[style*="${savedAccent}"]`);
        if (matchingDot) {
            setAccent(savedAccent, matchingDot);
        } else {
            document.documentElement.style.setProperty('--accent-color', savedAccent);
            const savedSec = localStorage.getItem('accentSecondary');
            if(savedSec) document.documentElement.style.setProperty('--accent-secondary', savedSec);
        }
    }
    
    // HÄR ÄR RADERNA DU VAR RÄDD SKULLE FÖRSVINNA:
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
    }

    // 6. RITA BIBLIOTEKET (Denna rad lägger vi till för stjärnorna!)
    if (typeof renderYeastLibrary === "function") {
        renderYeastLibrary();
    }

    console.log("🚀 YeastMaster System Fully Initialized");
});




// ==========================================
// --- CLOUD SYNC MOTOR ---
// ==========================================
async function syncToSelectedDevice() {
    const syncBtn = document.getElementById('sync-btn');
    const syncDropdown = document.getElementById('sync-target-device');
    const targetDeviceId = syncDropdown ? syncDropdown.value : null;

    if (!targetDeviceId) {
        alert(translations[currentLang]?.alerts?.no_device || "Vänligen välj en målenhet i rullistan ovanför knappen!");
        return;
    }

    if (!selectedStrains || selectedStrains.length === 0) {
        alert(translations[currentLang]?.alerts?.no_strains || "Du måste välja minst en jäst/profil (markera med stjärnan ★) för att kunna synka!");
        return;
    }

    const user = auth.currentUser;
    if (!user) {
        alert(translations[currentLang]?.alerts?.login_sync || "Du måste vara inloggad för att kunna synka till molnet.");
        return;
    }

    const originalText = syncBtn.innerText;
    syncBtn.innerText = "VERIFYING STATUS... 🔍";
    syncBtn.style.opacity = "0.7";
    syncBtn.style.pointerEvents = "none";

    // ==========================================
    // --- NYTT: SÄKERHETSSPÄRR FÖR AKTIV JÄSNING ---
    // ==========================================
    try {
        // Hämta den absolut senaste loggen från denna specifika kyl
        const res = await fetch(`${API_BASE}/data?device_id=${targetDeviceId}`);
        const history = await res.json();

        if (history && history.length > 0) {
            // Sortera tidslinjen så vi garanterat tittar på sekunden just nu
            history.sort((a, b) => new Date(a.time) - new Date(b.time));
            const absoluteLatest = history[history.length - 1];

            const status = (absoluteLatest.status || "").toUpperCase();
            
            // Om kylen är mitt i en jäsning (ACTIVE), stoppa synken!
            if (status === "ACTIVE" || status === "COOLING" || status === "HEATING") {
                alert(translations[currentLang]?.alerts?.sync_blocked || "⚠️ SYNKNING AVBRUTEN!\n\nDin YeastMaster kör just nu en aktiv jäsning. Att synka ett nytt bibliotek nu kan skriva över den pågående profilen och förstöra jäsningen.\n\nPausa eller avsluta jäsningen på enheten först.");
                syncBtn.innerText = originalText;
                syncBtn.style.opacity = "1";
                syncBtn.style.pointerEvents = "auto";
                return; // Avbryter funktionen helt
            }
        }
    } catch (e) {
        console.error("Kunde inte verifiera maskinens status inför synk", e);
        // Tillåt synk att fortsätta om vi inte får svar, i fall historiken bara är tom
    }
    // ==========================================

    syncBtn.innerText = "PACKING PROFILES... 📦";

    try {
        let profilesToSend = [];

      
        selectedStrains.forEach(id => {
            const strainObj = yeastStrains.find(y => y.id === id);
            
            if (strainObj && strainObj.isCustom) {
                // --- CUSTOM PROFILER ("Pelle") ---
                const targetStrainName = strainObj.name; 
                
                if (typeof yeastDatabase !== 'undefined' && yeastDatabase.yeasts) {
                    const matchingProfiles = yeastDatabase.yeasts.filter(p => p.s === targetStrainName);
                    
                    matchingProfiles.forEach(profile => {
                        // Klona profilen så vi inte råkar döpa om den i webbläsaren!
                        let deviceProfile = JSON.parse(JSON.stringify(profile));
                        
                        // Kasta om variablerna för OLED-skärmen
                        let customName = deviceProfile.s; // "Pelle"
                        let baseStrainFull = deviceProfile.p; // "Wyeast 1084 Irish Ale"
                        
                        deviceProfile.s = formatOledName(baseStrainFull); // Blir "Scot. Ale"
                        deviceProfile.p = "* " + customName.substring(0, 10); // Använd vanlig asterisk för OLED!
                        
                        profilesToSend.push(deviceProfile);
                    });
                }
            } else {
                // --- STANDARD PROFILER ---
                const targetStrainName = hwStrainNames[id];
                if (targetStrainName && typeof yeastDatabase !== 'undefined' && yeastDatabase.yeasts) {
                    const matchingProfiles = yeastDatabase.yeasts.filter(p => p.s === targetStrainName);
                    
                    matchingProfiles.forEach(profile => {
                        // Klona även här
                        let deviceProfile = JSON.parse(JSON.stringify(profile));
                        // Tvätta namnet för säkerhets skull
                        deviceProfile.s = formatOledName(deviceProfile.s);
                        profilesToSend.push(deviceProfile);
                    });
                }
            }
        });

        if (profilesToSend.length === 0) {
            alert(translations[currentLang]?.alerts?.sync_empty || "Kunde inte packa profilerna! Dubbelkolla att namnen matchar databasen.");
            syncBtn.innerText = originalText;
            syncBtn.style.opacity = "1";
            syncBtn.style.pointerEvents = "auto";
            return;
        }

        const payloadData = {
            yeasts: profilesToSend
        };

        syncBtn.innerText = "SYNCING TO CLOUD... ☁️";

        const response = await fetch(`${API_BASE}/sync-profiles`, {
            method: 'POST',
            headers: await getAuthHeaders(),
            body: JSON.stringify({
                device_id: targetDeviceId,
                yeastData: payloadData
            })
        });

        if (response.ok) {
            syncBtn.innerText = "SYNC SUCCESSFUL! ✓";
            syncBtn.style.backgroundColor = "rgba(140, 198, 63, 0.2)";
            syncBtn.style.borderColor = "#8CC63F";
            syncBtn.style.color = "#8CC63F";
            
            setTimeout(() => {
                // --- NYTT: STÄDA BIBLIOTEKET NÄR SYNK ÄR KLAR ---
                if (typeof clearLibrarySelection === 'function') {
                    clearLibrarySelection(); 
                }
                
                // Återställ knappen
                syncBtn.innerText = originalText;
                syncBtn.style.backgroundColor = "";
                syncBtn.style.borderColor = "";
                syncBtn.style.color = "";
                syncBtn.style.opacity = "1";
                syncBtn.style.pointerEvents = "auto";
            }, 3000);
        } else {
            throw new Error("Servern nekade synkningen.");
        }
    } catch (error) {
        console.error("Synk-fel:", error);
        syncBtn.innerText = "SYNC FAILED ✖";
        syncBtn.style.backgroundColor = "rgba(255, 68, 68, 0.2)";
        syncBtn.style.borderColor = "#ff4444";
        syncBtn.style.color = "#ff4444";
        
        // Vid fel rensar vi INTE biblioteket, så användaren slipper välja allt igen!
        setTimeout(() => {
            syncBtn.innerText = originalText;
            syncBtn.style.backgroundColor = "";
            syncBtn.style.borderColor = "";
            syncBtn.style.color = "";
            syncBtn.style.opacity = "1";
            syncBtn.style.pointerEvents = "auto";
        }, 3000);
    }
}







// ==========================================
// --- TOGGLE FÖR IN THE LAB (ACADEMY) INFO ---
// ==========================================
function toggleAcademyInfo(btn) {
    const infoBox = document.getElementById('academy-info-box'); 
    
    if (!infoBox) return; // Felsäkring ifall HTML-id:t skulle saknas
    
    if (infoBox.style.display === 'none' || infoBox.style.display === '') {
        // ÖPPEN: Helt fylld, solid klargrön!
        infoBox.style.display = 'block';
        btn.style.backgroundColor = '#8CC63F'; // 100% grön bakgrund
        btn.style.borderColor = '#8CC63F';
        btn.style.color = '#111111'; // Mörkt 'i' för maximal kontrast
    } else {
        // STÄNGD: Dämpad och transparent
        infoBox.style.display = 'none';
        btn.style.backgroundColor = 'rgba(140, 198, 63, 0.15)'; // Dimmig bakgrund
        btn.style.borderColor = '#8CC63F';
        btn.style.color = '#8CC63F'; // Grönt 'i'
    }
}


// ==========================================
// --- TEMPERATURE UNIT MANAGER ---
// ==========================================
let currentTempUnit = 'C'; // Starta alltid som Celsius internt 

function setTempUnit(unit) {
    const oldUnit = currentTempUnit;
    currentTempUnit = unit;
    localStorage.setItem('yeastmaster-unit', unit);
    
    // Uppdatera knapparnas utseende
    if (document.getElementById('btn-unit-c')) {
        document.getElementById('btn-unit-c').classList.toggle('active', unit === 'C');
        document.getElementById('btn-unit-f').classList.toggle('active', unit === 'F');
    }

    // --- MAGIN: Konvertera BARA om vi faktiskt byter (t.ex. C -> F) ---
    if (oldUnit !== unit && typeof profilePoints !== 'undefined') {
        profilePoints.forEach(p => {
            if (unit === 'F') {
                // Konvertera punktens Celsius-värde till Fahrenheit
                p.y = (p.y * 9/5) + 32; 
            } else {
                // Konvertera punktens Fahrenheit-värde tillbaka till Celsius
                p.y = (p.y - 32) * 5/9;
            }
        });
    }

    // Rita om allt
    if (typeof renderYeastLibrary === 'function') renderYeastLibrary(document.getElementById('yeast-search')?.value || "");
    if (typeof initLabChart === 'function') initLabChart();
    if (typeof updateSummaryText === 'function') updateSummaryText();
    if (typeof updateDashboard === 'function') updateDashboard(); 
}

// Hjälpfunktion för att konvertera råa siffror från servern
function convertTemp(celsiusValue) {
    if (currentTempUnit === 'C') return celsiusValue;
    return (celsiusValue * 9/5) + 32;
}

// Hjälpfunktion för att översätta text (till Library-korten)
function formatTempText(text) {
    if (!text) return "";
    if (currentTempUnit === 'C') return text;
    return text.replace(/(\d+(?:\.\d+)?)\s*°C/g, (match, tempC) => {
        return `${Math.round((parseFloat(tempC) * 9/5) + 32)} °F`;
    });
}



// Slutligen: Kör en initiering av enheten vid start
window.addEventListener('DOMContentLoaded', () => {
    // 1. Hämta sparad enhet
    const savedUnit = localStorage.getItem('yeastmaster-unit') || 'C';
    
    // 2. Om användaren hade 'F' sparat, måste vi räkna om startpunkterna en gång
    if (savedUnit === 'F') {
        currentTempUnit = 'F'; // Sätt enheten direkt
        profilePoints.forEach(p => {
            p.y = (p.y * 9/5) + 32;
        });
    }

    // 3. Uppdatera UI:t (detta tänder rätt knappar och ritar grafen)
    setTempUnit(savedUnit);
    
});

// Hjälpfunktion för att göra decimaldagar läsbara (t.ex. 3.2 -> "3 d and 5 h")
function formatDaysToHuman(decimalDays) {
    let d = Math.floor(decimalDays);
    let h = Math.round((decimalDays - d) * 24);
    
    // Om timmarna avrundas upp till 24, lägg till en dag istället
    if (h === 24) {
        d++;
        h = 0;
    }
    
    if (d === 0) return h + " h"; // Ex: "6 h"
    if (h === 0) return d + " d"; // Ex: "14 d"
    
    // Här tar vi bort "and" och kör ett kommatecken istället.
    // Det fungerar på engelska, svenska och tyska utan att behöva översättas!
    return `${d} d, ${h} h`; 
}



// ==========================================
// --- LOGIK FÖR WIZARDEN OCH CHECKLISTAN ---
// ==========================================
let currentWizardStep = 0;
let totalWizardSteps = 0;
let stepActiveItems = {}; 

// Körs när man trycker Next eller Back
function changeWizardStep(direction, isFromPopState = false) {
    // 1. Om vi klickar "Tillbaka" via knappen, låt mobilens/webbläsarens inbyggda historik sköta det!
    if (direction === -1 && !isFromPopState) {
        history.back(); // Triggers window.onpopstate
        return;
    }

    let nextStep = currentWizardStep + direction;

    if (nextStep < 0 || nextStep >= totalWizardSteps) {
        closeAcademyModule();
        return;
    }

    // 2. Lägg till i historiken om vi går framåt (Next)
    if (direction === 1 && !isFromPopState) {
        history.pushState({ page: 'academy', step: nextStep }, null, "");
    }

    currentWizardStep = nextStep;
    updateWizardUI();
}

// Sköter bara utseendet så att den kan återanvändas säkert
function updateWizardUI() {
    if (typeof currentWizardStep === 'undefined') return;

    // 1. Uppdatera Wizarden (Text och Prickar)
    document.querySelectorAll('.wizard-step').forEach(step => {
        step.classList.remove('active');
        if (parseInt(step.getAttribute('data-step')) === currentWizardStep) {
            step.classList.add('active');
        }
    });

    document.querySelectorAll('.wizard-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentWizardStep);
    });

    // 2. Uppdatera Knappar och Översättningar
    const prevBtn = document.getElementById('wiz-prev');
    const nextBtn = document.getElementById('wiz-next');

    if (prevBtn && nextBtn) {
        prevBtn.disabled = currentWizardStep === 0;

        // --- HÄMTA ÖVERSÄTTNINGAR (Kraschsäkert) ---
        const lang = window.currentLang || 'en';
        const t = window.translations?.[lang]?.academy || window.translations?.['en']?.academy || {};
        
        const textNext = t.btn_next || "Next ➔";
        const textFinish = t.btn_finish || "Finish! ✓";

        // Välj rätt text beroende på om vi är på sista steget eller inte
        nextBtn.innerText = currentWizardStep === totalWizardSteps - 1 ? textFinish : textNext;
    } // <-- HÄR SATT DEN SAKNADE MÅSVINGEN SOM KRASCHADE APPEN!

    // 3. Den Levande Checklistan!
    document.querySelectorAll('.wizard-checklist li').forEach(li => {
        li.classList.remove('active-item');
    });

    if (typeof stepActiveItems !== 'undefined' && stepActiveItems[currentWizardStep]) {
        const itemsToHighlight = stepActiveItems[currentWizardStep];
        itemsToHighlight.forEach(itemId => {
            const element = document.getElementById(itemId);
            if (element) {
                element.classList.add('active-item');
            }
        });
    }
}

// ==========================================
// --- ÖPPNA/STÄNG MODULER ---
// ==========================================
// ==========================================
// --- ÖPPNA/STÄNG MODULER ---
// ==========================================
function openAcademyModule(moduleId) {
    const overview = document.getElementById('lab-content-academy');
    const moduleView = document.getElementById('academy-module-view');
    const contentArea = document.getElementById('academy-module-content');

    // MAGIN: Hämta "boken" från rätt språk-hylla på den globala anslagstavlan!
    const langDict = window.academyModules[window.currentLang] || window.academyModules['en'];

    // Tryck in texten
    contentArea.innerHTML = langDict[moduleId] || '<p style="color: #ff4444;">Module not found.</p>';

    overview.style.display = 'none';
    moduleView.style.display = 'block';

    // MAGIN: Berätta för webbläsaren att lektionen har börjat på steg 0!
history.pushState({ page: 'academy', step: 0 }, null, "");

    // ==========================================
    // WIZARD-LOGIKEN (Ska vara kvar exakt som förut!)
    // ==========================================
    if (moduleId === 'calc') {
        const dateInput = document.getElementById('pitch-date');
        if (dateInput && !dateInput.value) dateInput.valueAsDate = new Date();
        if (typeof calculatePitch === 'function') calculatePitch();
    } 
    else if (moduleId === 'intro') {
        currentWizardStep = 0;
        totalWizardSteps = 4;
        stepActiveItems = {
            0: ['intro-mindset'],
            1: ['intro-gear'],
            2: ['intro-rewards'],
            3: ['intro-roadmap']
        };
        setTimeout(() => changeWizardStep(0), 10);
    }
    else if (moduleId === 'starters') {
        currentWizardStep = 0;
        totalWizardSteps = 4;
        stepActiveItems = {
            0: ['item-flask'],
            1: ['item-flask', 'item-scale', 'item-dme', 'item-water'],
            2: ['item-flask', 'item-heat'],
            3: ['item-flask', 'item-yeast', 'item-stirbar', 'item-stirplate']
        };
        setTimeout(() => changeWizardStep(0), 10);
    }
    else if (moduleId === 'washing') {
        currentWizardStep = 0;
        totalWizardSteps = 5; 
        stepActiveItems = {
            0: ['item-starsan', 'item-water', 'item-cake'],
            1: ['item-cake'],
            2: ['item-cake'],
            3: ['item-jars'],
            4: ['item-jars', 'item-fridge']
        };
        setTimeout(() => changeWizardStep(0), 10);
    }
    else if (moduleId === 'counting') {
        currentWizardStep = 0;
        totalWizardSteps = 5;
        stepActiveItems = {
            0: ['item-blue', 'item-pipette'],
            1: ['item-hemo'],
            2: ['item-microscope'],
            3: ['item-microscope'],
            4: ['item-counter']
        };
        setTimeout(() => changeWizardStep(0), 10);
    }
    else if (moduleId === 'agar') {
        currentWizardStep = 0;
        totalWizardSteps = 4;
        stepActiveItems = {
            0: ['agar-powder', 'agar-dme'],
            1: ['agar-dishes', 'agar-flame'],
            2: ['agar-loop', 'agar-flame'],
            3: []
        };
        setTimeout(() => changeWizardStep(0), 10);
    }
    else if (moduleId === 'wild') {
        currentWizardStep = 0;
        totalWizardSteps = 4;
        stepActiveItems = {
            0: ['wild-jars', 'wild-wort', 'wild-hops'],
            1: ['wild-cloth', 'wild-fruit'],
            2: [],
            3: []
        };
        setTimeout(() => changeWizardStep(0), 10);
    }
    else if (moduleId === 'stirplate') {
        // Om stirplate har en wizard behöver den config, just nu verkar den vara en statisk sida?
        // Har lagt in detta som säkerhet.
    }
}

function closeAcademyModule() {
    document.getElementById('academy-module-view').style.display = 'none';
    document.getElementById('lab-content-academy').style.display = 'block';
}

// =========================================================
// ================= INTERAKTIVT ÖLGLAS (HOME) =============
// =========================================================
function initInteractiveGlass() {
    const glass = document.getElementById('interactive-beer-glass');
    if (!glass) return;

    const beerStyles = ['pilsner', 'amber', 'ipa', 'red', 'stout'];
    let currentStyleIndex = 0;
    
    let pressTimer;
    let isPressing = false;
    let isAnimating = false;
    const PRESS_DURATION = 600; // 600ms = perfekt tid för ett mobil-långtryck

    // 1. Byt Färg (Klick)
    function cycleColor() {
        if (isAnimating) return;
        currentStyleIndex = (currentStyleIndex + 1) % beerStyles.length;
        beerStyles.forEach(style => glass.classList.remove('color-' + style));
        glass.classList.add('color-' + beerStyles[currentStyleIndex]);
    }

    // 2. Drick & Fyll på (Med slumpad väntetid OCH slumpad ölsort!)
    function startDrain() {
        if (isAnimating) return;
        isAnimating = true;
        
        glass.classList.remove('anim-fill');
        
        // Tvingar webbläsaren att rita om (reflow) innan den tömmer
        void glass.offsetWidth; 
        
        glass.classList.add('anim-drain');

        const drainDuration = 2000; 
        // Slumpar ett värde mellan 0 och 4750, och plussar sedan alltid på 250.
        // Resultat: Alltid minst 250ms, och som mest 5000ms!
        const randomEmptyWait = Math.floor(Math.random() * 4750) + 250;
        const totalWaitBeforeRefill = drainDuration + randomEmptyWait;
        const refillAnimationDuration = 2000; 

        // 1. Vänta tills glaset är tomt OCH den slumpmässiga pausen är över
        setTimeout(() => {
            glass.classList.remove('anim-drain');
            
            // ==========================================
            // --- MAGI: SLUMPA FRAM EN NY ÖLSORT! ---
            // ==========================================
            const beerColors = ['color-pilsner', 'color-amber', 'color-ipa', 'color-red', 'color-stout'];
            
            // Ta bort ALLA eventuella gamla färgklasser från glaset först
            glass.classList.remove(...beerColors);
            
            // Dra en vinnare ur hatten (slumpa fram ett index mellan 0 och 4)
            const randomColor = beerColors[Math.floor(Math.random() * beerColors.length)];
            
            // Lägg på den vinnande färgen på glaset
            glass.classList.add(randomColor);
            // ==========================================

            // Nu när glaset har fått sin nya färg (medan det är tomt), börjar vi hälla!
            glass.classList.add('anim-fill');
            
            // 2. Lås upp animationen när glaset är fyllt igen
            setTimeout(() => {
                isAnimating = false;
            }, refillAnimationDuration); 

        }, totalWaitBeforeRefill);
    }

    // --- LYSSNARE FÖR DATOR (MUS) ---
    glass.addEventListener('mousedown', () => {
        isPressing = true;
        pressTimer = setTimeout(() => {
            if (isPressing) {
                isPressing = false;
                startDrain();
            }
        }, PRESS_DURATION);
    });

    glass.addEventListener('mouseup', () => {
        if (isPressing) {
            clearTimeout(pressTimer);
            isPressing = false;
            cycleColor(); // Det var ett kort klick -> Byt färg
        }
    });

    glass.addEventListener('mouseleave', () => {
        if (isPressing) {
            clearTimeout(pressTimer);
            isPressing = false;
        }
    });

    // --- LYSSNARE FÖR MOBIL (TOUCH) ---
    glass.addEventListener('touchstart', () => {
        isPressing = true;
        pressTimer = setTimeout(() => {
            if (isPressing) {
                isPressing = false;
                startDrain();
            }
        }, PRESS_DURATION);
    }, {passive: true});

    glass.addEventListener('touchend', () => {
        if (isPressing) {
            clearTimeout(pressTimer);
            isPressing = false;
            cycleColor();
        }
    });
    
    glass.addEventListener('touchcancel', () => {
        clearTimeout(pressTimer);
        isPressing = false;
    });
}

// Starta magin när sidan laddar
window.addEventListener('DOMContentLoaded', () => {
    initInteractiveGlass();
});

// =========================================
// --- LIVE DEMO TOUR LOGIK ---
// =========================================

let currentDemoStep = -1;

const demoSteps = [
    { selector: '.carboy-wrapper', i18nKey: 'step_beer', offsetY: -35, mobileOffsetY: -60 },
    { selector: '.air-floating', i18nKey: 'step_air', offsetY: -5, mobileOffsetY: 5 },
    { selector: '#strain-val', i18nKey: 'step_strain', offsetY: 0, mobileOffsetY: 0 },
    { selector: '#profile-val', i18nKey: 'step_profile', offsetY: -5, mobileOffsetY: 0, mobileOffsetX: 0 },
    { selector: '.action-status', i18nKey: 'step_action', offsetY: -10, mobileOffsetY: -10 },
    { selector: '.progress-section', i18nKey: 'step_progress', offsetY: -155, mobileOffsetY: -150 },
    { selector: '.phase-info', i18nKey: 'step_phase', offsetY: -5, mobileOffsetY: 0 },
    { selector: '#beer-chart', i18nKey: 'step_chart', offsetY: 0, mobileOffsetY: 15 }
];

function startDemoTour() {
    const overlay = document.getElementById('demo-overlay');
    if (overlay) {
        overlay.style.display = 'block';
        overlay.style.backgroundColor = 'transparent'; // Helt osynlig klick-fångare
    }
    
    currentDemoStep = -1;
    nextDemoStep();
}

function nextDemoStep() {

    if (window.isLibraryTourActive) return;

    currentDemoStep++;

    const tooltip = document.getElementById('demo-tour-tooltip');
    const overlay = document.getElementById('demo-overlay');

    // 1. KONTROLL: Är touren slut?
    if (currentDemoStep >= demoSteps.length) {
        if (tooltip) tooltip.style.display = 'none';
        if (overlay) overlay.style.display = 'none'; 
        
        setTimeout(() => {
            if (!activeDeviceId) {
                // Här kan vi också översätta alerten om du vill, men vi börjar med UI:t!
                alert("Connect your own YeastMaster unit to monitor real data!");
            }
        }, 300);
        return;
    }

    // 2. Hitta nästa element i din HTML
    const targetEl = document.querySelector(demoSteps[currentDemoStep].selector);
    
    if (!targetEl) {
        console.warn("Tour: Hittade inte " + demoSteps[currentDemoStep].selector);
        nextDemoStep(); 
        return;
    }

    // --- Göm skylten DIREKT så den inte hänger kvar med gammal text! ---
    if (tooltip) tooltip.style.display = 'none';

    // 3. Scrolla mjukt så elementet alltid syns
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // 4. Beräkna positionen (Vänta 300ms så scrollen hinner klart först)
    setTimeout(() => {
        const tourTextEl = document.getElementById('demo-tour-text');
        
        // --- HÄR ÄR MAGIN: ÖVERSÄTTNINGEN ---
        if (tourTextEl) {
            const currentLang = window.currentLang || 'en';
            // Leta i 'tour'-sektionen i ordboken (eller engelska som reserv)
            const tourDict = translations[currentLang]?.tour || translations['en'].tour;
            // Hämta nyckeln vi lade in i arrayen (t.ex. 'step_beer')
            const stepKey = demoSteps[currentDemoStep].i18nKey;
            
            // Sätt den översatta texten
            tourTextEl.innerText = tourDict[stepKey] || "Text missing";
        }

        if (tooltip) {
            tooltip.style.display = 'block';

            const rect = targetEl.getBoundingClientRect();
            const isMobile = window.innerWidth <= 768;
            
            // --- HÖJD (Y-axel) ---
            let stepOffsetY = 0;
            if (isMobile && demoSteps[currentDemoStep].mobileOffsetY !== undefined) {
                stepOffsetY = demoSteps[currentDemoStep].mobileOffsetY;
            } else {
                stepOffsetY = demoSteps[currentDemoStep].offsetY || 0;
            }
            const topPos = rect.bottom + window.scrollY + 15 + stepOffsetY; 
            
            // --- SIDLED (X-axel) ---
            let stepOffsetX = 0;
            if (isMobile && demoSteps[currentDemoStep].mobileOffsetX !== undefined) {
                stepOffsetX = demoSteps[currentDemoStep].mobileOffsetX;
            }
            
            let leftPos = rect.left + window.scrollX + (rect.width / 2) + stepOffsetX;

            // --- SÄTT POSITIONERNA ---
            tooltip.style.top = topPos + 'px';
            tooltip.style.left = leftPos + 'px';
            
            // Tvinga webbläsaren att spela inhopp-animationen
            tooltip.style.animation = 'none';
            void tooltip.offsetWidth; 
            tooltip.style.animation = 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
        }
    }, 300);

}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Klicka var som helst på mörkret för att gå till nästa pil i touren
    const overlay = document.getElementById('demo-overlay');
    if(overlay) overlay.addEventListener('click', nextDemoStep);
    
    // --- INTRO-RUTAN (PROFILER-STIL) ---
    const startBtn = document.getElementById('start-demo-btn');
    const infoBox = document.getElementById('live-info-box');
    
    if(startBtn) {
        startBtn.addEventListener('click', () => {
            if(infoBox) {
                if (infoBox.style.display === 'none') {
                    infoBox.style.display = 'block';
                } else {
                    infoBox.style.display = 'none';
                }
            }
        });
    }

    // --- KNAPPARNA INUTI RUTAN ---
    const exitBtn = document.getElementById('btn-exit-intro');
    const startTourBtn = document.getElementById('btn-start-tour');

    if(exitBtn) {
        exitBtn.addEventListener('click', () => {
            if(infoBox) infoBox.style.display = 'none';
        });
    }

    if(startTourBtn) {
        startTourBtn.addEventListener('click', () => {
            if(infoBox) infoBox.style.display = 'none';
            
            if (typeof startDemoMode === "function") {
                startDemoMode(); 
            } else {
                startDemoTour(); 
            }
        });
    }
});


// ==========================================
// --- STÄNG INFO-RUTOR VID KLICK UTANFÖR ---
// ==========================================
let lastBoxCloseTime = 0; 

function handleOutsideClick(event) {
    if (Date.now() - lastBoxCloseTime < 400) {
        event.stopPropagation();
        event.preventDefault();
        return;
    }

    if (event.target.closest('svg') || event.target.closest('.info-icon') || event.target.closest('[onclick*="toggle"]')) {
        return; 
    }

    const infoBoxes = ['library-info-box', 'profiler-info-box', 'academy-info-box'];
    let boxWasClosed = false;

    infoBoxes.forEach(boxId => {
        const box = document.getElementById(boxId);
        
        if (box && (box.style.display === 'block' || box.style.display === 'flex')) {
            if (!box.contains(event.target)) {
                
                box.style.display = 'none'; 
                boxWasClosed = true; 
                
                document.querySelectorAll('[onclick*="toggle"]').forEach(btn => {
                    if (btn.style && btn.style.backgroundColor === 'rgb(140, 198, 63)') {
                        btn.style.backgroundColor = 'rgba(140, 198, 63, 0.15)';
                        btn.style.color = '#8CC63F';
                    }
                });
            }
        }
    });

    if (boxWasClosed) {
        lastBoxCloseTime = Date.now(); 
        event.stopPropagation(); 
        event.preventDefault();  
    }
}

document.addEventListener('click', handleOutsideClick, true);





