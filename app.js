const yeastStrains = [
    // --- DINA 20 FÖRSTA ---
    { id: "us-05", name: "SafAle US-05", origin: "USA", temp: "12-25°C", tags: ["Clean", "Crisp"], desc: "Världens mest populära IPA-jäst. Neutral och pålitlig.", styles: "IPA, APA, Stout" },
    { id: "s-04", name: "SafAle S-04", origin: "UK", temp: "15-20°C", tags: ["Fruity", "Fast"], desc: "Klassisk brittisk ale-jäst. Snabb jäsning och bra flockning.", styles: "English Pale Ale, Porter" },
    { id: "w-34-70", name: "Saflager W-34/70", origin: "Germany", temp: "9-15°C", tags: ["Clean", "Lager"], desc: "Den berömda Weihenstephan-stammen för krispiga lageröl.", styles: "Pilsner, Helles, Märzen" },
    { id: "be-256", name: "SafAle BE-256", origin: "Belgium", temp: "15-25°C", tags: ["Spicy", "High ABV"], desc: "För starka belgiska öl. Ger estrar av torkad frukt.", styles: "Abbey, Dubbel, Tripel" },
    { id: "wb-06", name: "SafAle WB-06", origin: "Germany", temp: "18-24°C", tags: ["Banana", "Clove"], desc: "Specialjäst för veteöl. Framhäver fenoliska toner.", styles: "Hefeweizen, Witbier" },
    { id: "verdant", name: "Lallemand Verdant", origin: "UK", temp: "18-23°C", tags: ["Apricot", "Hazy"], desc: "Perfekt för NEIPA. Ger toner av aprikos och fyllig munkänsla.", styles: "NEIPA, Hazy IPA" },
    { id: "voss", name: "Lallemand Voss Kveik", origin: "Norway", temp: "25-40°C", tags: ["High Temp", "Orange"], desc: "Traditionell kveik. Kan jäsa extremt varmt utan bismaker.", styles: "Farmhouse, IPA, Pale Ale" },
    { id: "nottingham", name: "Lallemand Nottingham", origin: "UK", temp: "10-22°C", tags: ["Versatile", "Dry"], desc: "Hög utjäsning och mycket neutral profil. En riktig arbetshäst.", styles: "All Ales, Cider" },
    { id: "wlp001", name: "WLP001 California Ale", origin: "USA", temp: "20-23°C", tags: ["Classic", "IPA"], desc: "White Labs flaggskepp. Mycket ren profil som låter humlen tala.", styles: "West Coast IPA" },
    { id: "wlp300", name: "WLP300 Hefeweizen", origin: "Germany", temp: "18-21°C", tags: ["Classic", "Wheat"], desc: "Den ultimata veteölsjästen för banankänsla.", styles: "Weissbier" },
    { id: "belle-saison", name: "Lallemand Belle Saison", origin: "Belgium", temp: "15-35°C", tags: ["Dry", "Spicy"], desc: "Skapar mycket torra och peppriga Saison-öl.", styles: "Saison, Farmhouse" },
    { id: "t-58", name: "SafAle T-58", origin: "Belgium", temp: "15-24°C", tags: ["Peppery", "Ester"], desc: "Känd för sina peppriga och kryddiga estrar.", styles: "Belgian Ale" },
    { id: "s-23", name: "Saflager S-23", origin: "Germany", temp: "9-15°C", tags: ["Fruity", "Lager"], desc: "En lagerjäst som ger lite mer fruktiga toner än 34/70.", styles: "Lager, Bock" },
    { id: "wlp002", name: "WLP002 English Ale", origin: "UK", temp: "18-20°C", tags: ["Sweet", "Malty"], desc: "Lämnar lite restsötma och flockar som sten.", styles: "Bitter, Stout" },
    { id: "wlp500", name: "WLP500 Trappist", origin: "Belgium", temp: "18-22°C", tags: ["Fruity", "Abbey", "Belgian"], desc: "Från ett av de sex belgiska trappistbryggerierna.", styles: "Tripel, Quad" },
    { id: "diamond", name: "Lallemand Diamond", origin: "Germany", temp: "10-15°C", tags: ["Pilsner", "Clean"], desc: "Klassisk tysk lagerjäst för eleganta profil.", styles: "German Pilsner" },
    { id: "wlp066", name: "WLP066 London Fog", origin: "UK", temp: "18-22°C", tags: ["Juicy", "Creamy"], desc: "Standardjästen för juice-liknande NEIPA.", styles: "NEIPA" },
    { id: "s-33", name: "SafAle S-33", origin: "UK", temp: "15-22°C", tags: ["Robust", "All-round"], desc: "Ger en robust och stabil jäsning.", styles: "Trappist, Stout" },
    { id: "wlp800", name: "WLP800 Pilsner Lager", origin: "Czech", temp: "10-13°C", tags: ["Crisp", "Floral"], desc: "Traditionell tjeckisk jäst för äkta pilsner.", styles: "Bohemian Pilsner" },
    { id: "novalager", name: "Lallemand NovaLager", origin: "Modern", temp: "10-20°C", tags: ["Hybrid", "Fast"], desc: "En modern hybrid-lagerjäst som jäser snabbare.", styles: "Modern Lager" },
    { id: "wyeast-1968", name: "Wyeast 1968", origin: "UK", temp: "18-22°C", tags: ["ESB", "High Flocc"], desc: "London ESB Ale. Extrem flockulering och grym maltprofil.", styles: "ESB, English Pale Ale" },
    { id: "wlp920", name: "WLP920", origin: "Germany", temp: "10-13°C", tags: ["Lager", "Malty"], desc: "Old Bavarian Lager. Perfekt för maltiga sydtyska lagers.", styles: "Oktoberfest, Bock" },
    { id: "imperial-b45", name: "Imperial B45", origin: "Belgium", temp: "20-25.5°C", tags: ["Fruity", "Spicy"], desc: "Gnome! Päronestrar och klassisk belgisk värme.", styles: "Belgian Strong Ale" },
    { id: "wyeast-1084", name: "Wyeast 1084", origin: "Ireland", temp: "17-22°C", tags: ["Malty", "Dry"], desc: "Irish Ale. Arbetshästen från Dublin. Fantastisk till mörka öl.", styles: "Dry Stout, Red Ale" },
    { id: "wyeast-3944", name: "Wyeast 3944", origin: "Belgium", temp: "16-24°C", tags: ["Wheat", "Citrus"], desc: "Belgian Witbier. Disig med toner av nejlika och apelsin.", styles: "Witbier" },
    { id: "wlp833", name: "WLP833", origin: "Germany", temp: "9-13°C", tags: ["Lager", "Bock"], desc: "German Bock Lager. Kungen av maltighet från Ayinger.", styles: "Bock, Doppelbock" },
    { id: "wlp007", name: "WLP007", origin: "UK", temp: "18-21°C", tags: ["Dry", "Fast"], desc: "Dry English Ale. Målsökande missil som jäser ut torrt och snabbt.", styles: "IPA, Stout" },
    { id: "wyeast-1318", name: "Wyeast 1318", origin: "UK", temp: "18-22°C", tags: ["Juicy", "Hazy"], desc: "London Ale III. Originalet för disiga och moderna NEIPAs.", styles: "NEIPA, Pale Ale" },
    { id: "wyeast-2565", name: "Wyeast 2565", origin: "Germany", temp: "13-21°C", tags: ["Kölsch", "Crisp"], desc: "Kölsch. Hybrid-jäst som ger extremt ren och vinös profil.", styles: "Kölsch, Altbier" },
    { id: "wlp095", name: "WLP095", origin: "USA", temp: "19-21°C", tags: ["Peach", "Juicy"], desc: "Burlington Ale (Conan). Maxar stenfrukt, persika och aprikos.", styles: "NEIPA, IPA" }
];

document.addEventListener('DOMContentLoaded', () => {
    // Om vi inte vet statusen än, visa login-vyn som default
    if (!activeDeviceId) showView('login');
});

// --- KONFIGURATION ---
let activeDeviceId = null;
const API_BASE = "https://soulofbeer-live.onrender.com/api";
const firebaseConfig = {
  apiKey: "AIzaSyBjxNijHivEY4u4bBIiXCR1hbUBdMxrq0Q",
  authDomain: "yeastmaster-cloud.firebaseapp.com",
  projectId: "yeastmaster-cloud",
  storageBucket: "yeastmaster-cloud.firebasestorage.app",
  messagingSenderId: "395831218175",
  appId: "1:395831218175:web:66bd69450b8325c9f361ca",
  measurementId: "G-LFNPE9EHXB"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(); // Se till att Firebase är länkat i index.html!



// --- KONFIGURATION FÖR VYER & ANIMATIONER ---
// Flyttad upp hit så att appen har stenkoll på ordningen från start!
const viewOrder = ['soul', 'library', 'librarian', 'lab', 'dashboard', 'settings'];

// Vi skapar en variabel för att hålla koll på var vi VAR någonstans
let currentActiveView = 'soul'; 

function showView(viewName) {
const views = {
        login: document.getElementById('login-container'),
        claim: document.getElementById('claim-container'),
        soul: document.getElementById('view-soul'),
        library: document.getElementById('view-library'),
        librarian: document.getElementById('view-librarian'),
        lab: document.getElementById('view-lab'),
        dashboard: document.getElementById('view-dashboard'), // <-- Fixat!
        settings: document.getElementById('view-settings'),
        about: document.getElementById('view-about')
    };

    if (!views[viewName]) return;

    // --- LOGIK FÖR ANIMATIONSRIKTNING ---
    const oldIndex = viewOrder.indexOf(currentActiveView);
    const newIndex = viewOrder.indexOf(viewName);
    
    let animClass = '';
    // Kollar om vi flyttar oss i huvudmenyn
    if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
        // Går vi till höger i menyn (t.ex. Home -> Library) så ska bilden komma IN från höger
        animClass = (newIndex > oldIndex) ? 'slide-in-right' : 'slide-in-left';
    }

    // Växla vyer
    Object.keys(views).forEach(key => {
        if (views[key]) {
            // 1. Ta bort de gamla animationsklasserna
            views[key].classList.remove('slide-in-right', 'slide-in-left');
            
            if (key === viewName) {
                const isFlexView = (key === 'login' || key === 'claim');
                views[key].style.display = isFlexView ? 'flex' : 'block';
                
                // 2. DET MAGISKA HACKET: Tvinga webbläsaren att registrera att vi tagit bort klassen
                // Genom att be om offsetWidth, tvingar vi fram en "Reflow" (omritning)
                void views[key].offsetWidth; 
                
                // 3. Lägg på animationen igen – nu är webbläsaren med på noterna!
                if (animClass) {
                    views[key].classList.add(animClass);
                }
            } else {
                views[key].style.display = 'none';
            }
        }
    });

 // --- MAGI: FYLL PÅ GLASET AUTOMATISKT NÄR VI GÅR TILL HOME ---
    if (viewName === 'soul') {
        const glass = document.getElementById('interactive-beer-glass');
        if (glass) {
            // 1. Töm glaset och ta bort gamla animationer direkt
            glass.classList.remove('anim-drain', 'anim-fill');
            void glass.offsetWidth; 
            
            // 2. VÄNTA 800ms (medan "YEAST"-texten tonar in) och fyll sedan på!
            setTimeout(() => {
                glass.classList.add('anim-fill');
            }, 800);
        }
    }

    // Uppdatera vilken vy som är aktiv nu för nästa gång vi klickar
    currentActiveView = viewName;

    // --- UPPDATERA MENYN ---
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        const clickEvent = item.getAttribute('onclick');
        if (clickEvent && clickEvent.includes(`'${viewName}'`)) {
            item.classList.add('active');
        }
    });
    // Scrolla mjukt och snyggt högst upp på sidan
    window.scrollTo({ top: 0, behavior: 'smooth' });

}

// --- VISA CLAIM-RUTAN FÖR NYA ENHETER ---
function showAddDevice() {
    // Gömmer alla vanliga vyer (Dashboard, Lab, Settings etc)
    document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
    
    // Visar Claim-rutan
    const claimContainer = document.getElementById('claim-container');
    if (claimContainer) claimContainer.style.display = 'flex';
    
    // Sätter en avvikande färg på knappen som en liten detalj
    const claimBtn = document.getElementById('btn-claim');
    if (claimBtn) {
        claimBtn.innerText = "AKTIVERA NY ENHET";
    }
}

// Och se till att denna finns för att tända ikonerna!
function setActive(clickedElement) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    clickedElement.classList.add('active');
}

// --- 2. INLOGGNINGS-VAKT & SÄKERHET ---
auth.onAuthStateChanged(async (user) => {
    const soulLoginPrompt = document.getElementById('soul-login-prompt');
    
    if (user) {
        // --- ANVÄNDARE ÄR INLOGGAD ---
        if (soulLoginPrompt) soulLoginPrompt.style.display = 'none';

        // Här kör vi din befintliga logik för att hämta enheter (till synk-funktionen)
        populateSyncDevices(user.uid); 

        try {
            const res = await fetch(`${API_BASE}/my-devices?uid=${user.uid}`);
            const devices = await res.json();
            
            if (devices.length > 0) {
                // Sätter den första enheten som aktiv från start
                activeDeviceId = devices[0].device_id; 
                
                // --- NYTT: Fyll rullistan i Settings (Multi-device) ---
                const deviceSelect = document.getElementById('setting-active-device');
                if (deviceSelect) {
                    deviceSelect.innerHTML = ""; // Rensa gamla alternativ
                    devices.forEach(dev => {
                        const opt = document.createElement('option');
                        opt.value = dev.device_id;
                        // Kolla om vi har ett sparat lokalt namn, annars ta server-namnet eller MAC-id
                        const localName = typeof getSavedNickname === 'function' ? getSavedNickname(dev.device_id) : "MIN YEASTMASTER";
                        opt.textContent = localName !== "MIN YEASTMASTER" 
                                          ? localName 
                                          : (dev.name || dev.device_id);
                        deviceSelect.appendChild(opt);
                    });
                    // Se till att rätt enhet är vald i rullistan
                    deviceSelect.value = activeDeviceId;
                }
                
                // --- NYTT: Ladda namnet för den valda enheten på Dashboarden ---
                const nickInput = document.getElementById('setting-nickname');
                const currentNick = typeof getSavedNickname === 'function' ? getSavedNickname(activeDeviceId) : "MIN YEASTMASTER";
                
                if (nickInput) nickInput.value = currentNick !== "MIN YEASTMASTER" ? currentNick : "";
                if (typeof updateDashboardNickname === 'function') updateDashboardNickname(currentNick);

                showView('dashboard');
                updateDashboard(); // Din funktion körs precis som vanligt!
            } else {
                showView('claim');
            }
        } catch (err) {
            console.error("Auth fetch error:", err);
        }
    } else {
        // --- ANVÄNDARE ÄR UTLOGGAD ---
        // Viktigt: Rensa ID så att updateDashboard slutar hämta data
        activeDeviceId = null; 
        selectedStrains = []; 

        if (soulLoginPrompt) soulLoginPrompt.style.display = 'block';
        
        // Tvinga till login-vyn så man inte kan tjuvlyssna på Dashboarden
        showView('login');
        console.log("Säkerhetsvakt: Ingen användare, visar login.");
    }
});

// Denna behövs för att slutföra inloggningen efter en redirect (på mobil)
auth.getRedirectResult().catch((error) => {
    console.error("Redirect-fel:", error);
});


async function updateDashboard() {
    if (!activeDeviceId) return; 

    try {
        const response = await fetch(`${API_BASE}/data?device_id=${activeDeviceId}`);
        const data = await response.json();

        if (data.length > 0) {
            const latest = data[data.length - 1];
            console.log("Här är senaste datan från servern:");
            console.log(latest);

            // 1. Temperaturer
     // 1. Temperaturer (NU MED C/F STÖD)
            const displayTemp = convertTemp(latest.temp).toFixed(1) + '°' + currentTempUnit;
            document.getElementById('temp-beer-val').innerText = displayTemp;
            document.querySelector('.beer-temp').setAttribute('data-text', displayTemp);
            
            document.getElementById('air-temp-val').innerText = convertTemp(latest.air_temp).toFixed(1) + '°' + currentTempUnit;

            // 2. Höger kolumn (Hierarki enligt din OLED)
            document.getElementById('strain-val').innerText = (latest.strain || "IRISH ALE").toUpperCase();
            document.getElementById('profile-val').innerText = latest.profile || "LOW ESTER";
            
            const action = (latest.action || "IDLE").toUpperCase();
            document.getElementById('action-val').innerText = action;

// 3. Pil-logik (Vänster om texten, färg och riktning)
const arrow = document.getElementById('status-arrow');
if (action === "COOLING") {
    arrow.innerText = "▼";
    arrow.style.color = "#0088ff"; 
    arrow.style.visibility = "visible";  // Visa den
    arrow.classList.add('blink-active'); // Starta blinket
} else if (action === "HEATING") {
    arrow.innerText = "▲";
    arrow.style.color = "#ff4444"; 
    arrow.style.visibility = "visible";  // Visa den
    arrow.classList.add('blink-active'); // Starta blinket
} else {
    // IDLE-LÄGE
    arrow.style.visibility = "hidden";      // Göm den helt men behåll platsen
    arrow.classList.remove('blink-active'); // Döda animationen så den inte blinkar vitt
}

// 4. Statusrad (Fas)
            document.getElementById('status-text').innerText = latest.status.toUpperCase();
            
            // --- DAGAR I FAS ---
            // Vi försöker först hämta det riktiga värdet från servern (t.ex. latest.phase_day).
            // Finns inte det, kör vi din uträkning som en nöd-backup (som maxar ut på historikens längd).
            let phaseDay = 0;
            
            if (latest.phase_day !== undefined) {
                phaseDay = latest.phase_day; // Det perfekta sättet!
            } else {
                // Nöd-uträkning om servern inte skickar phase_day
                let phaseStartTime = latest.time; 
                for (let i = data.length - 1; i >= 0; i--) {
                    if (data[i].status !== latest.status) {
                        phaseStartTime = data[i + 1].time;
                        break;
                    }
                    if (i === 0) {
                        phaseStartTime = data[0].time;
                    }
                }
                const msInADay = 1000 * 60 * 60 * 24;
                phaseDay = (latest.time && phaseStartTime) ? (new Date(latest.time) - new Date(phaseStartTime)) / msInADay : 0;
            }

            // 5. Dag och Progress-mätare (Logiken för den orangea mätaren)
            const currentDay = latest.day || 0;
            const targetDays = 14; // Här sätter vi målet för mätaren (t.ex. 14 dagar)
            
            // Räkna ut procenten (0-100%)
            const percent = Math.min((currentDay / targetDays) * 100, 100).toFixed(0);

            // Uppdatera värdena i HTML
    // NY KOD - KLISTRA IN:
const dayValEl = document.getElementById('day-val');
const phaseDayValEl = document.getElementById('phase-day-val');

if (dayValEl) dayValEl.innerText = formatDaysToHuman(currentDay);
if (phaseDayValEl) phaseDayValEl.innerText = formatDaysToHuman(phaseDay);
            document.getElementById('progress-percent').innerText = percent + "%";
            document.getElementById('progress-fill').style.width = percent + "%";

        // --- NY KOD FÖR MÅLTEMPERATUR ---
            const targetTemp = latest.target_temp || 0; 
            const targetTempElement = document.getElementById('target-temp-val');
            if (targetTempElement) {
                targetTempElement.innerText = convertTemp(targetTemp).toFixed(1) + '°' + currentTempUnit;
            }
            
            updateChart(data);
        }
    } catch (error) {
        console.error("Kunde inte hämta data:", error);
    }
}

//Grafen
let beerChart;
function updateChart(data) {
    const canvas = document.getElementById('beer-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Hämtar färgen från CSS, om den inte hittas används orange som reserv!
    let themeAccent = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
    if (!themeAccent) themeAccent = '#f39c12'; 

    // TYDLIGARE GRÅ GRADIENT
    const gradient = ctx.createLinearGradient(0, 0, 0, 120);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)'); 
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');   

    // Säkerställ att vi bara försöker plotta riktiga siffror, annars kraschar hela Chart.js
    const labels = data.map(d => new Date(d.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const temps = data.map(d => convertTemp(Number(d.temp) || 0));

    if (beerChart) {
        beerChart.data.labels = labels;
        beerChart.data.datasets[0].data = temps;
        beerChart.data.datasets[0].borderColor = themeAccent; 
        beerChart.update('none');
    } else {
        beerChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Beer Temp',
                    data: temps,
                    borderColor: themeAccent, 
                    borderWidth: 2,
                    fill: true, 
                    backgroundColor: gradient, 
                    tension: 0.3,
                    pointRadius: 0 
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                resizeDelay: 10, 
                layout: { padding: 0 },
                scales: {
                    x: { 
                        ticks: { color: '#666', maxTicksLimit: 5, font: { family: 'Lexend', size: 10 } },
                        grid: { display: false } 
                    },
                    y: { 
                        ticks: { 
                            color: '#bbbbbb', 
                           font: { family: 'Lexend', size: 10 },
                            // <-- NYTT: Här är skyddet som förhindrar att funktionen kraschar
                            callback: function(value) {
                                return Number(value).toFixed(1) + '°';
                            }
                        }, 
                        grid: { color: 'rgba(255, 255, 255, 0.2)' } 
                    }
                },
                plugins: { 
                    legend: { display: false },
                    tooltip: { enabled: true }
                }
            }
        });
    }
}

// --- 5. BUBBEL-MOTOR (Startar automatiskt) ---
function startBubbles() {
    const stream = document.getElementById('bubble-stream');
    if (!stream) {
        setTimeout(startBubbles, 1000); 
        return;
    }

    let bubbles = [];
    let lastSpawn = 0;

    function animate(timestamp) {
        const statusElement = document.getElementById('status-text');
        const statusText = statusElement ? statusElement.innerText.toUpperCase() : '';
        
        // Hämta hur länge vi varit i den aktuella fasen (avläst från din mätare)
        const phaseDayElement = document.getElementById('phase-day-val');
        const phaseDays = phaseDayElement ? parseFloat(phaseDayElement.innerText) || 0 : 0;
        
        // 1. Bestäm spawn-hastighet och ANTAL bubblor baserat på status
        let spawnInterval = 250; 
        let spawnCount = 1; // Standard: 1 bubbla åt gången

        if (statusText.includes('CRASH')) {
            // COLD CRASH: 2 bubblor var 15:e sekund
            spawnInterval = 10000; 
            spawnCount = 2; 
        } 
        else if (statusText.includes('CONDITIONING') || statusText === 'FINISHED') {
            // CONDITIONING: Helt dött
            spawnInterval = 9999999; 
        } 
        else if (statusText.includes('CLEAN')) {
            // CLEANING UP: Mycket aktivt (som det var förut)
            spawnInterval = 250; 
        } 
        else if (statusText.includes('PRIMARY') || statusText === '--' || statusText.includes('FERM')) {
            // PRIMARY / DEFAULT: Stegrande aktivitet!
            // 6 timmar = 0.25 dagar. 12 timmar = 0.5 dagar.
            
            if (phaseDays < 0) {
                // Första 6 timmarna (Lag phase): Ingen aktivitet alls
                spawnInterval = 9999999; 
            } 
            else if (phaseDays >= 0 && phaseDays < 0.5) {
                // 6 till 12 timmar: Stegrande aktivitet
                // Räkna ut hur långt vi har kommit i denna "uppstarts-fas" (ger ett värde mellan 0 och 1)
                let progress = (phaseDays - 0.25) / 0.25; 
                
                // Går från en bubbla var 5:e sekund ner till en bubbla var 0.15 sekund
                spawnInterval = 5000 - (progress * (5000 - 150)); 
            } 
            else {
                // Efter 12 timmar (High Krausen): Fullt ös! Snäppet snabbare än Cleaning Up
                spawnInterval = 150; 
            }
        }

        // 2. Skapa nya bubblor om det är dags
        if (timestamp - lastSpawn > spawnInterval) {
            for (let i = 0; i < spawnCount; i++) {
                const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                const size = Math.random() * 0.7 + 0.5; 
                const startX = 50 + (Math.random() * 12 - 6); 
                
                // Om vi släpper flera bubblor (som i Cold Crash), lägg dem på lite olika djup
                const startY = 85 + (i * Math.random() * 4);

                circle.setAttribute("r", size);
                circle.setAttribute("fill", "rgba(255, 255, 255, 0.7)");
                stream.appendChild(circle);
                
                bubbles.push({ 
                    element: circle, 
                    x: startX, 
                    y: startY, 
                    speed: Math.random() * 0.2 + 0.3, 
                    wobbleOffset: Math.random() * Math.PI * 2 
                });
            }
            lastSpawn = timestamp;
        }

        // 3. Flytta existerande bubblor
        for (let i = bubbles.length - 1; i >= 0; i--) {
            let b = bubbles[i];
            b.y -= b.speed;
            let currentX = b.x + Math.sin((b.y * 0.05) + b.wobbleOffset) * 0.4;
            b.element.setAttribute("cx", currentX);
            b.element.setAttribute("cy", b.y);
            
            // Ta bort bubblan precis under vätskeytan
            if (b.y < 39) { 
                b.element.remove(); 
                bubbles.splice(i, 1); 
            }
        }

        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}

// Starta bubblorna
startBubbles();

// --- 6. KNAPPAR FÖR LOGIN/LOGOUT (Viktigt!) ---
// --- KNAPPAR FÖR LOGIN ---
const loginBtn = document.getElementById('btn-login');

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        
        // Försök med Popup först, men fånga upp om mobilen blockerar den
        auth.signInWithPopup(provider).catch((error) => {
            if (error.code === 'auth/popup-blocked' || error.code === 'auth/cancelled-popup-request') {
                // Om popup blockeras (vanligt på mobil), kör redirect istället
                auth.signInWithRedirect(provider);
            } else {
                console.error("Inloggningsfel:", error);
                alert("Kunde inte logga in: " + error.message);
            }
        });
    });
}

// --- 7. KOPPLA ENHET (CLAIM) ---
if(document.getElementById('btn-claim')) {
    document.getElementById('btn-claim').addEventListener('click', async () => {
       const macInput = document.getElementById('input-mac').value.trim().toUpperCase();
const nicknameInput = document.getElementById('input-nickname').value.trim() || "Min YeastMaster";
        const user = auth.currentUser;

        if (macInput.length < 12 || !user) {
            alert("Ange ett giltigt ID!");
            return;
        }

        try {
            const res = await fetch(`${API_BASE}/claim-device`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
    uid: user.uid,
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

// LOGGA UT (DEN SÄKRA VERSIONEN)
if(document.getElementById('btn-logout')) {
    document.getElementById('btn-logout').addEventListener('click', () => {
        auth.signOut().then(() => {
            // Nollställ allt lokalt direkt
            activeDeviceId = null;
            selectedStrains = [];
            showView('login');
            console.log("Utloggning bekräftad och ID nollställt.");
        }).catch((error) => {
            console.error("Logout-fel:", error);
            alert("Kunde inte logga ut: " + error.message);
        });
    });
}

let selectedStrains = []; // Här sparar vi ID:n på de 10 utvalda

function renderYeastLibrary(filter = "") {
    const grid = document.getElementById('yeast-grid');
    const tooltip = document.getElementById('yeast-tooltip');
    if (!grid) return; // Felsäkring
    
    grid.innerHTML = "";
    const searchTerm = filter.toLowerCase();

    // Här är den lagade fixen: Vi kollar namn, tags OCH styles!
    const filtered = yeastStrains.filter(s => {
        const nameMatch = s.name.toLowerCase().includes(searchTerm);
        const tagMatch = s.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        const styleMatch = s.styles && s.styles.toLowerCase().includes(searchTerm);
        
        return nameMatch || tagMatch || styleMatch;
    });

filtered.forEach(yeast => {
        const isSelected = selectedStrains.includes(yeast.id);
        const isCustom = yeast.isCustom ? 'custom-profile' : ''; 
        
        const card = document.createElement('div');
        card.className = `yeast-card ${isCustom} ${isSelected ? 'selected' : ''}`;
        
        const deleteBtn = yeast.isCustom ? 
            `<div class="delete-custom-btn" onclick="event.stopPropagation(); deleteCustomProfile('${yeast.name}')">×</div>` 
            : '';

        card.innerHTML = `
            ${deleteBtn}
            <h3>${yeast.name}</h3>
            <div class="favorite-star" onclick="event.stopPropagation(); toggleFavorite('${yeast.id}')">
                ${isSelected ? '★' : '☆'}
            </div>
        `;

        // --- TIMERS ---
        let clickTimer = null;
        let touchTimer = null;

        // 1. HOVER (PC - Tooltip)
        const tooltip = document.getElementById('yeast-tooltip');
        card.onmousemove = (e) => {
            if (tooltip) {
                tooltip.style.display = "block";
                tooltip.style.left = (e.clientX + 15) + "px";
                tooltip.style.top = (e.clientY + 15) + "px";
                tooltip.innerHTML = `<strong>${yeast.name}</strong><br>${formatTempText(yeast.temp)}<br>${yeast.tags.join(', ')}`;
            }
        };
        card.onmouseleave = () => { if(tooltip) tooltip.style.display = "none"; };

        // 2. ENKELKLICK (Detaljvy)
        card.onclick = () => {
            if (clickTimer) clearTimeout(clickTimer);
            clickTimer = setTimeout(() => {
                openYeastDetail(yeast);
            }, 250); 
        };

        // 3. DUBBELKLICK (PC - Modal)
        card.ondblclick = () => {
            clearTimeout(clickTimer); 
            openYeastModal(yeast);
        };

        // 4. LÅNGKLICK (Mobil - Originalversionen)
        card.addEventListener('touchstart', () => {
            touchTimer = setTimeout(() => {
                openYeastModal(yeast);
            }, 600); 
        }, {passive: true});

        card.addEventListener('touchend', () => clearTimeout(touchTimer));
        card.addEventListener('touchmove', () => clearTimeout(touchTimer));

        // Lägg till kortet i gridet
        grid.appendChild(card);
    }); // <--- Här stängs forEach-loopen korrekt!
}

function openYeastDetail(yeast) {
    const detail = document.getElementById('yeast-detail-view');
    const content = document.getElementById('yeast-detail-content');
    
    content.innerHTML = `
        <h1 style="color:var(--accent-color)">${yeast.name}</h1>
        <p style="opacity:0.6; font-size:1.1rem;">${yeast.origin} | ${yeast.temp}</p>
        <hr style="border:0; border-top:1px solid #222; margin:20px 0;">
        <div style="background:#111; padding:20px; border-radius:10px;">
            <h3>Beskrivning</h3>
            <p>${yeast.desc}</p>
            <h3 style="margin-top:20px;">Passar till</h3>
            <p>${yeast.styles}</p>
        </div>
        <button class="btn-primary" style="margin-top:30px;" onclick="toggleFavorite('${yeast.id}'); closeYeastDetail();">
            ${selectedStrains.includes(yeast.id) ? 'TA BORT FRÅN MINA 10' : 'VÄLJ DENNA JÄST'}
        </button>
    `;
    history.pushState({ view: 'yeast-detail' }, "");
    detail.style.display = "block";
}

function closeYeastDetail() {
    document.getElementById('yeast-detail-view').style.display = "none";
}

function toggleFavorite(id) {
    const index = selectedStrains.indexOf(id);
    if (index > -1) {
        selectedStrains.splice(index, 1); // Ta bort om den redan fanns
    } else {
        if (selectedStrains.length < 10) {
            selectedStrains.push(id); // Lägg till om vi inte nått 10
        } else {
            alert("Du kan bara synka 10 stammar åt gången!");
        }
    }
    document.getElementById('fav-count').innerText = selectedStrains.length;
    renderYeastLibrary(document.getElementById('yeast-search').value);
}

// Koppla sökfältet
document.getElementById('yeast-search').addEventListener('input', (e) => {
    renderYeastLibrary(e.target.value);
});

// Initiera biblioteket när sidan laddas
renderYeastLibrary();

window.onpopstate = function(event) {
    // Om användaren trycker bakåt och detaljvyn är öppen -> stäng den
    const detail = document.getElementById('yeast-detail-view');
    if (detail.style.display === "block") {
        // Vi döljer vyn utan att trigga history.back() igen
        detail.style.display = "none";
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

function setAccent(color) {
    document.documentElement.style.setProperty('--accent-color', color);
    localStorage.setItem('accentColor', color);
    
    // VIKTIGT: Uppdatera grafen direkt så linjen byter färg
    if (beerChart) {
        beerChart.data.datasets[0].borderColor = color;
        beerChart.update();
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
// THE ARCANE LAB (Interaktiv Profilbyggare)
// ==========================================

let labChart;

// Vi har nu 6 punkter för att bygga perfekta platta linjer och rampar!
let profilePoints = [
    { x: 0, y: 19 },    // Punkt 0: Start Primary
    { x: 3, y: 19 },    // Punkt 1: Slut Primary (Platt linje hit)
    { x: 4, y: 22 },    // Punkt 2: Slut Uppvärmning (Streckad ramp upp hit)
    { x: 6, y: 22 },    // Punkt 3: Slut Cleanup (Platt linje hit)
    { x: 8, y: 3 },     // Punkt 4: Start Cold Crash (Streckad ramp NER hit)
    { x: 14, y: 3 }     // Punkt 5: Slut Cold Crash / Condition (Platt linje hit)
];

// Data-tillstånd för torrhumlingen
let dryHopData = {
    enabled: false,
    day: 5.0,
    isDragging: false,
    color: '#8CC63F'
};

// --- CHART.JS PLUGIN: Torrhumlingslinjen ---
const dryHopPlugin = {
    id: 'dryHopLine',
    afterDraw: (chart) => {
        // 1. Spärr för att inte rita i live-dashboarden
        if (chart.canvas.closest('#view-dashboard')) return;

        // 2. Kolla om dry hop är aktiverat
        if (!dryHopData.enabled) return;

        const {ctx, chartArea: {top, bottom, left, right}, scales: {x}} = chart;
        const xPix = x.getPixelForValue(dryHopData.day);

        // 3. Rita inte om linjen hamnar utanför grafens x-axel
        if (xPix < left || xPix > right) return;

        ctx.save();
        
        ctx.strokeStyle = dryHopData.color;
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 6]);
        ctx.beginPath();
        ctx.moveTo(xPix, top);
        ctx.lineTo(xPix, bottom);
        ctx.stroke();
        
        ctx.setLineDash([]);
        ctx.fillStyle = dryHopData.color;
        ctx.font = 'bold 10px Lexend';
        ctx.textAlign = 'center';
        ctx.fillText('DRY HOP', xPix, top - 5);

        ctx.beginPath();
        ctx.arc(xPix, (top + bottom) / 2, 6, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
    }
};

Chart.register(dryHopPlugin);

function toggleDryHopLine() {
    dryHopData.enabled = !dryHopData.enabled;
    const btn = document.getElementById('btn-add-hops');
    const textInfo = document.getElementById('hop-schedule-text');
    
    if (dryHopData.enabled) {
        btn.innerText = "- REMOVE DRY HOPS";
        btn.classList.add('active');
        textInfo.style.display = 'block';
        updateSummaryText();
    } else {
        btn.innerText = "+ ADD DRY HOPS";
        btn.classList.remove('active');
        textInfo.style.display = 'none';
        if(labChart) labChart.canvas.style.cursor = 'default';
    }
    if (labChart) labChart.update('none');
}

function updateSummaryText() {
    // Uppdatera Temperaturer
   document.getElementById('val-t1').innerText = profilePoints[0].y.toFixed(1) + '°' + currentTempUnit;
    document.getElementById('val-t3').innerText = profilePoints[2].y.toFixed(1) + '°' + currentTempUnit;
    document.getElementById('val-t4').innerText = profilePoints[4].y.toFixed(1) + '°' + currentTempUnit;
    
    // HÄR VAR FELET! Den hämtade temp från fel punkt. Nu hämtar den från punkt 4 (Cold Crash)
    document.getElementById('val-t4').innerText = profilePoints[4].y.toFixed(1); 

    // Uppdatera Dagar
    document.getElementById('val-d2').innerText = Math.round(profilePoints[1].x); // Slut Primary
    document.getElementById('val-d3').innerText = Math.round(profilePoints[2].x); // Start Cleanup
    document.getElementById('val-d4').innerText = Math.round(profilePoints[4].x); // Slut Cold Crash
    
    // Slut Condition är nu punkt 5
    const conditionElement = document.getElementById('val-d5');
    if (conditionElement) conditionElement.innerText = Math.round(profilePoints[5].x);

    // Torrhumling
    if (typeof dryHopData !== 'undefined' && dryHopData.enabled) {
        const hopVal = document.getElementById('hop-day-val');
        if (hopVal) hopVal.innerText = dryHopData.day.toFixed(1);
    }
}

// --- INITIALISERAR GRAFEN OCH DRAG-LOGIKEN ---
function initLabChart() {
    if (profilePoints && profilePoints.length < 6) {
        const p0 = profilePoints[0] || {x: 0, y: 19};
        const p1 = profilePoints[1] || {x: 5, y: 22};
        const p2 = profilePoints[2] || {x: 8, y: 3};
        const p3 = profilePoints[3] || {x: 14, y: 3};

        profilePoints = [
            { x: p0.x, y: p0.y },
            { x: Math.max(p0.x + 0.5, p1.x - 1.5), y: p0.y },
            { x: p1.x, y: p1.y },
            { x: Math.max(p1.x + 0.5, p2.x - 1.0), y: p1.y },
            { x: p2.x, y: p2.y },
            { x: p3.x, y: p3.y }
        ];
    }

    const canvas = document.getElementById('lab-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    if (labChart) {
        labChart.destroy();
    }

    const isLightMode = document.body.classList.contains('light-mode');
    const isMobile = window.innerWidth <= 768;
    
    const themeAccent = '#f4c95d'; 
    const pointFill = '#888888';   
    
    const lineWidth = isLightMode ? 2 : 3; 
    
    const dotSize = isMobile ? 8 : 5;         
    const hoverSize = isMobile ? 12 : 8;      
    const touchMagnet = isMobile ? 25 : 10;   

    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, isLightMode ? 'rgba(244, 201, 93, 0.15)' : 'rgba(244, 201, 93, 0.4)'); 
    gradient.addColorStop(1, 'rgba(244, 201, 93, 0.0)');

    labChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Profile Target Temp',
                data: profilePoints,
                borderColor: themeAccent,
                backgroundColor: gradient,
                borderWidth: lineWidth,            
                pointBackgroundColor: pointFill,  
                pointBorderColor: themeAccent,    
                pointRadius: dotSize,             
                pointHoverRadius: hoverSize,      
                pointHitRadius: touchMagnet,      
                showLine: true,
                tension: 0.1, 
                clip: false,
                fill: true,
                segment: {
                    borderDash: ctx => (ctx.p0DataIndex === 1 || ctx.p0DataIndex === 3) ? [6, 6] : undefined,
                    lineWidth: 1.5,
                    borderColor: ctx => (ctx.p0DataIndex === 1 || ctx.p0DataIndex === 3) ? (isLightMode ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.3)') : themeAccent
                }
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: { top: 30, right: 30, bottom: 10, left: 10 }
            },
            scales: {
                x: {
                    type: 'linear',
                    min: 0,
                    max: Math.max(10, profilePoints[profilePoints.length - 1].x + 2),
                    grid: { color: isLightMode ? 'rgba(0, 0, 0, 0.04)' : '#222' },
                    ticks: { color: isLightMode ? '#666' : '#888', font: { family: 'Lexend', weight: '600' } },
                    title: { display: true, text: 'Days', color: isLightMode ? '#666' : '#888', font: { family: 'Lexend', weight: '800' } }
                },
                // --- NYTT: Y-axeln som anpassar sig efter Fahrenheit/Celsius ---
                y: {
                    type: 'linear',
                    min: currentTempUnit === 'F' ? 28 : -2,
                    max: currentTempUnit === 'F' ? 104 : 40,
                    grid: { color: isLightMode ? 'rgba(0, 0, 0, 0.04)' : '#222' },
                    ticks: { color: isLightMode ? '#666' : '#888', font: { family: 'Lexend', weight: '600' } },
                    title: { display: true, text: `Temp (°${currentTempUnit})`, color: isLightMode ? '#666' : '#888', font: { family: 'Lexend', weight: '800' } }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            },
            animation: { duration: 0 }
        },
        plugins: [{
            id: 'customCanvasDrawing',
            afterDatasetsDraw(chart) {
                const ctx = chart.ctx;
                const meta = chart.getDatasetMeta(0);
                if (!meta || !meta.data || meta.data.length < 6) return;

                ctx.save();
                ctx.font = '800 10px "Lexend", sans-serif';
                ctx.fillStyle = isLightMode ? '#333333' : 'rgba(255, 255, 255, 0.5)'; 
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';

                function drawText(text, p1, p2, offsetX = 0, offsetY = -12) {
                    const x1 = meta.data[p1].x;
                    const y1 = meta.data[p1].y;
                    const x2 = meta.data[p2].x;
                    const y2 = meta.data[p2].y;

                    const midX = ((x1 + x2) / 2) + offsetX;
                    const midY = ((y1 + y2) / 2) + offsetY; 

                    ctx.fillText(text, midX, midY);
                }

                drawText('PRIM', 0, 1);    
                drawText('CLEAN', 2, 3);   
                drawText('COLD CRASH', 3, 4, 15, 5);      
                drawText('COND', 4, 5);

                ctx.restore();
            }
        }]
    });

    let isDragging = false;
    let dragIndex = -1;
    let isDraggingDryHop = false; 

    canvas.addEventListener('pointerdown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const xPos = e.clientX - rect.left;
        let xVal = labChart.scales.x.getValueForPixel(xPos);

        const hopMagnet = isMobile ? 1.5 : 0.6; 
        
        if (typeof dryHopData !== 'undefined' && dryHopData.enabled) {
            if (Math.abs(xVal - dryHopData.day) < hopMagnet) {
                isDraggingDryHop = true;
                canvas.style.cursor = 'ew-resize'; 
                return; 
            }
        }

        const points = labChart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false);
        if (points.length > 0) {
            isDragging = true;
            dragIndex = points[0].index;
            canvas.style.cursor = 'grabbing';
        }
    });

    canvas.addEventListener('touchstart', (e) => {
        if (isDragging || isDraggingDryHop) e.preventDefault();
        const points = labChart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false);
        if (points.length > 0 || isDraggingDryHop) e.preventDefault(); 
    }, { passive: false });

window.addEventListener('pointermove', (e) => {
        if (isDraggingDryHop) {
            const rect = canvas.getBoundingClientRect();
            const xPos = e.clientX - rect.left;
            let xVal = labChart.scales.x.getValueForPixel(xPos);
            xVal = Math.max(0, Math.round(xVal * 2) / 2);
            dryHopData.day = xVal;
            labChart.update('none');
            if (typeof updateSummaryText === 'function') updateSummaryText();
            return; 
        }

        if (isDragging && dragIndex !== -1) {
            const rect = canvas.getBoundingClientRect();
            const xPos = e.clientX - rect.left;
            const yPos = e.clientY - rect.top;

            let xVal = labChart.scales.x.getValueForPixel(xPos);
            let yVal = labChart.scales.y.getValueForPixel(yPos);

            // Grundinställningar
            xVal = Math.max(0, Math.round(xVal * 2) / 2);
            const yMin = currentTempUnit === 'F' ? 28 : -2;
            const yMax = currentTempUnit === 'F' ? 104 : 40;
            yVal = Math.max(yMin, Math.min(yMax, Math.round(yVal)));

            // ==========================================
            // --- FRYS-SPÄRR: MIN 0.5 DAGAR RAMP ---
            // ==========================================
            const minGap = 0.5; // Vår ramptid (12 timmar)

            if (dragIndex === 0) {
                xVal = 0; // Start kan aldrig flyttas i X
            } 
            else if (dragIndex === 1) {
                // Slut PRIM: Kan flyttas, men måste lämna 0.5 d till punkt 2
                xVal = Math.max(0, Math.min(xVal, profilePoints[2].x - minGap));
            } 
            else if (dragIndex === 2) {
                // Start CLEAN: Måste vara minst 0.5 d efter punkt 1 OCH före punkt 3
                xVal = Math.max(profilePoints[1].x + minGap, Math.min(xVal, profilePoints[3].x));
            } 
            else if (dragIndex === 3) {
                // Slut CLEAN: Måste vara efter punkt 2 OCH minst 0.5 d före punkt 4
                xVal = Math.max(profilePoints[2].x, Math.min(xVal, profilePoints[4].x - minGap));
            } 
            else if (dragIndex === 4) {
                // Start COLD CRASH: Måste vara minst 0.5 d efter punkt 3 OCH före punkt 5
                xVal = Math.max(profilePoints[3].x + minGap, Math.min(xVal, profilePoints[5].x));
            } 
            else if (dragIndex === 5) {
                // Slut COND: Måste vara efter punkt 4
                xVal = Math.max(profilePoints[4].x, xVal);
            }

            // --- Y-AXELNS DÖRRVAKT (Biologiska skyddsräcken) ---
            if (dragIndex === 0 || dragIndex === 1) {
                yVal = Math.min(yVal, profilePoints[2].y);
                yVal = Math.max(yVal, profilePoints[4].y);
            } 
            else if (dragIndex === 2 || dragIndex === 3) {
                yVal = Math.max(yVal, profilePoints[0].y);
            }
            else if (dragIndex === 4 || dragIndex === 5) {
                yVal = Math.min(yVal, profilePoints[0].y);
            }

            // Uppdatera punkten
            profilePoints[dragIndex] = { x: xVal, y: yVal };

            // --- TEMPERATURLÄNKNING (Håll linjerna flata) ---
            if (dragIndex === 0) profilePoints[1].y = yVal;
            if (dragIndex === 1) profilePoints[0].y = yVal;
            if (dragIndex === 2) profilePoints[3].y = yVal;
            if (dragIndex === 3) profilePoints[2].y = yVal;
            if (dragIndex === 4) profilePoints[5].y = yVal;
            if (dragIndex === 5) profilePoints[4].y = yVal;

            const lastPointX = profilePoints[profilePoints.length - 1].x;
            labChart.options.scales.x.max = Math.max(16, lastPointX + 1);

            labChart.update('none'); 
            if (typeof updateSummaryText === 'function') updateSummaryText();
        }
    });

    window.addEventListener('pointerup', () => {
        if (isDraggingDryHop) {
            isDraggingDryHop = false;
            canvas.style.cursor = 'default';
            if (typeof updateSummaryText === 'function') updateSummaryText();
        }
        if (isDragging) {
            isDragging = false;
            dragIndex = -1;
            canvas.style.cursor = 'default';
            if (typeof updateSummaryText === 'function') updateSummaryText();
        }
    });
}

// --- 1. FYLL RULLISTAN MED BASJÄSTER ---
function populateBaseYeastDropdown() {
    const dropdown = document.getElementById('custom-base-yeast');
    if (!dropdown) return;

    // Plocka fram alla vanliga jäster (inte dina egengjorda)
    const baseStrains = yeastStrains.filter(y => !y.isCustom).map(y => y.name);
    
    // Fyll rullistan
    baseStrains.sort().forEach(strain => {
        const option = document.createElement('option');
        option.value = strain;
        option.textContent = strain;
        dropdown.appendChild(option);
    });

    // --- NY LOGIK: Lyssna på när du väljer en jäst ---
    dropdown.addEventListener('change', function() {
        const placeholder = document.getElementById('chart-placeholder');
        const chartArea = document.getElementById('chart-scroll-area');
        const zoomBtn = document.getElementById('btn-zoom');
        
        if (this.value !== "") {
            // En jäst är vald -> Göm texten och tona in grafen!
            if (placeholder) placeholder.style.display = 'none';
            if (chartArea) {
                chartArea.style.opacity = '1';
                chartArea.style.pointerEvents = 'auto'; // Slå på drag-funktionen
            }
            if (zoomBtn) zoomBtn.style.display = 'block';
        } else {
            // Inget är valt (eller man ångrade sig) -> Visa texten igen
            if (placeholder) placeholder.style.display = 'flex';
            if (chartArea) {
                chartArea.style.opacity = '0';
                chartArea.style.pointerEvents = 'none'; // Stäng av drag-funktionen
            }
            if (zoomBtn) zoomBtn.style.display = 'none';
        }
    });
}

// --- 2. SPARA TILL BIBLIOTEK (Städad version utan JSON-export) ---
function saveProfileToLibrary() {
    let rawName = document.getElementById('custom-profile-name').value.trim().toUpperCase();
    const profileName = rawName !== "" ? rawName : "CUSTOM_1";
    
    let baseYeast = document.getElementById('custom-base-yeast').value;
    if(baseYeast === "") baseYeast = "Unknown Base";

    // Skapa maskin-objektet
    const profileData = {
        s: profileName,             
        p: `Custom (${baseYeast})`, 
        dryHopDay: dryHopData.enabled ? dryHopData.day : null, 
      steps: [
            [profilePoints[0].x, profilePoints[0].y],
            [profilePoints[1].x, profilePoints[1].y],
            [profilePoints[2].x, profilePoints[2].y],
            [profilePoints[3].x, profilePoints[3].y],
            [profilePoints[4].x, profilePoints[4].y]
        ]
    };

    // Spara ner det i enhetens minne (localStorage)
    let savedProfiles = JSON.parse(localStorage.getItem('customYeastProfiles') || '[]');
    savedProfiles.push(profileData);
    localStorage.setItem('customYeastProfiles', JSON.stringify(savedProfiles));

    // Magisk Knapp-animation
    const btn = document.getElementById('btn-save-profile');
    const originalText = btn.innerText;
    btn.innerText = "SAVED TO LIBRARY! ✓";
    btn.style.backgroundColor = "#b142ff"; // Lila succéfärg
    btn.style.borderColor = "#b142ff";
    btn.style.color = "#fff";

    // Ladda om sidan efter 1.2 sekunder så att allt synkas in i biblioteket
// --- NYTT: Byt vy snyggt utan omladdning ---
    setTimeout(() => {
        // 1. Ladda in den nya profilen i dina listor direkt
        loadCustomProfiles();
        
        // 2. Byt skärm till Yeast Library
        showView('library');
        
        // 3. Uppdatera ikonen i bottenmenyn så att Library lyser (istället för Lab)
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        const libIcon = document.querySelector('.nav-item[onclick*="library"]');
        if (libIcon) libIcon.classList.add('active');
        
        // 4. Återställ knappen och töm textfältet utifall man går tillbaka till labbet
        btn.innerText = originalText;
        btn.style.backgroundColor = ""; 
        btn.style.borderColor = "";
        btn.style.color = "";
        document.getElementById('custom-profile-name').value = '';
        
    }, 1200);
}

// --- 3. LADDA IN DINA EGNA JÄSTER I BÅDA DATABASERNA ---
function loadCustomProfiles() {
    let savedProfiles = JSON.parse(localStorage.getItem('customYeastProfiles') || '[]');
    
    savedProfiles.reverse().forEach(profile => {
        // A) Säkerhetskoll: Om maskin-databasen (yeastDatabase) finns, smuggla in den där!
        if (typeof yeastDatabase !== 'undefined' && yeastDatabase.yeasts) {
            if (!yeastDatabase.yeasts.some(y => y.s === profile.s && y.p === profile.p)) {
                yeastDatabase.yeasts.unshift(profile);
            }
        }

        // B) Smuggla in i UI-databasen (yeastStrains) så den ritas som ett kort!
        const customId = "custom-" + profile.s.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (!yeastStrains.some(y => y.id === customId)) {
            yeastStrains.unshift({
                id: customId,
                name: profile.s,
                origin: "Custom",
                temp: "User Defined",
                tags: ["Custom", profile.p],
                desc: "Din egenhändigt skapade jästprofil. Denna är baserad på: " + profile.p,
                styles: "Any",
                isCustom: true // Flagga så vi vet att den är egengjord
            });
        }
    });

    // C) SUPERVIKTIGT: Rita om biblioteket nu när dina egna jäster ligger i listan!
    if (typeof renderYeastLibrary === 'function') {
        const searchBox = document.getElementById('yeast-search');
        renderYeastLibrary(searchBox ? searchBox.value : "");
    }
}



// ==========================================
// PITCH CALCULATOR
// ==========================================
// ... (Din calculatePitch() funktion ligger kvar här nere precis som förut) ...

function calculatePitch() {
    const vol = parseFloat(document.getElementById('pitch-vol').value) || 0;
    const og = parseFloat(document.getElementById('pitch-og').value) || 1.000;
    const rate = parseFloat(document.getElementById('pitch-rate').value) || 0.75;
    const harvestDate = document.getElementById('pitch-date').value;

    // 1. Konvertera OG till Plato (Approximation)
    const plato = (og - 1) * 250;

    // 2. Räkna ut cellbehov (i miljarder)
    // Formel: (ml vätska * plato * rate) / 1000
    const cellsNeeded = Math.round((vol * 1000 * plato * rate) / 1000);
    document.getElementById('res-needed').innerText = cellsNeeded;

    // 3. Räkna ut Viability
    if (harvestDate) {
        const start = new Date(harvestDate);
        const now = new Date();
        const diffDays = Math.floor((now - start) / (1000 * 60 * 60 * 24));
        
        // Enkel modell: tappar 0.7% livskraft per dag i kylen
        let viability = Math.max(0, 100 - (diffDays * 0.7));
        document.getElementById('res-viability').innerText = Math.round(viability) + "%";
        document.getElementById('res-days-old').innerText = diffDays + " days old";
        
        // Varna om viability är låg
        document.getElementById('pitch-warning').style.display = (viability < 50) ? 'block' : 'none';
    } else {
        document.getElementById('res-viability').innerText = "100%";
        document.getElementById('res-days-old').innerText = "Fresh/New";
    }
}

// Sätt dagens datum som default i kalkylatorn
window.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('pitch-date');
    if(dateInput) dateInput.valueAsDate = new Date();
    calculatePitch();
});

// Registrera Service Worker för att möjliggöra PWA-installation
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker registrerad!', reg))
      .catch(err => console.log('Service Worker fel:', err));
  });
}

// --- JÄST-DATABASEN MED BESKRIVNINGAR ---
// --- JÄST-DATABASEN MED BESKRIVNINGAR (100% ENGELSKA & ID-MATCHADE) ---
const yeastDescriptions = {
    "us-05": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle US-05 (American Ale)</h3>
        <p>The uncrowned king of the brewing world when it comes to clean, crisp American Ales and West Coast IPAs. It is an extremely reliable workhorse that puts malt and hops in the driver's seat.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Temperature Range (15-22 °C)</h4>
        <p>To get that iconic, razor-sharp American profile, we want to start around 18 °C. If we go too hot, it can throw off peach esters, which we usually want to avoid in a clean IPA.</p>
        <h4 style="margin-top: 15px; color: #ccc;">2. Medium Flocculation (Patience!)</h4>
        <p>US-05 likes to hover in the beer for quite a while. This is great for fermentation (it finishes dry and efficient), but it means the beer can remain hazy for a long time if we don't crash it hard at the end.</p>
        <h4 style="margin-top: 15px; color: #ccc;">Brewer's Profile:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Day 0-4:</strong> Nail the temp at 18 °C. Extremely clean job without burning off hop aromas.</li>
            <li><strong style="color: #fff;">Day 4-7 (Diacetyl Rest):</strong> Roll up to 21 °C. Forces the yeast to eat the last, most difficult sugars for a crisp finish.</li>
            <li><strong style="color: #fff;">Day 7+:</strong> Hard Cold Crash. Drop quickly towards zero to force the yeast to the bottom.</li>
        </ul>
    `,

    "s-04": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle S-04 (English Ale)</h3>
        <p>The British sprinter! Loved for its ability to build fantastic fruity esters and its brutal speed. The first choice for Bitters, Porters, Stouts, and fast Pale Ales.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Temperature Range (15-20 °C)</h4>
        <p>S-04 loves to create esters (marmalade, dark berries). But if allowed to go too hot initially, it turns into an uncontrolled fruit bomb. Start strictly at 18 °C for elegance.</p>
        <h4 style="margin-top: 15px; color: #ccc;">2. Extreme Flocculation (The Brick)</h4>
        <p>When S-04 considers itself done, it falls to the bottom and forms a yeast cake so firm you can almost cut it. We must heat it up before it goes to sleep!</p>
        <h4 style="margin-top: 15px; color: #ccc;">Brewer's Profile:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Day 0-3:</strong> Hold 18 °C. It starts like a freight train and creates controlled fruitiness.</li>
            <li><strong style="color: #fff;">Day 3-6 (Cleanup):</strong> Raise to 21 °C when bubbling subsides. This heat bump wakes the yeast to clean up butterscotch and green apples.</li>
            <li><strong style="color: #fff;">Day 6+:</strong> Cold Crash. The beer becomes crystal clear almost instantly.</li>
        </ul>
    `,

    "w-34-70": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Saflager W-34/70 (German Lager)</h3>
        <p>The king of bottom-fermenting! This famous strain from the Weihenstephan brewery in Germany is probably the most used lager yeast in the world. It delivers that iconic, crisp, and clean flavor profile we love in a Pilsner or Helles.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The cold is your friend (9-15 °C)</h4>
        <p>W-34/70 is a true winter swimmer. By fermenting it at the bottom of its tolerance (around 10-12 °C), you suppress the production of fruity esters and sulfur, giving the beer its clean character.</p>
        <h4 style="margin-top: 15px; color: #ccc;">2. Butterscotch warning (Diacetyl)</h4>
        <p>Because it works cold and slow, lager yeast is notorious for leaving diacetyl (tastes like butter/butterscotch) behind. A significant temperature increase at the end is not a tip – it's a requirement!</p>
        <h4 style="margin-top: 15px; color: #ccc;">Brewer's Profile:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Day 0-7:</strong> Hold firmly at 11 °C. Let the yeast work undisturbed in the dark and cold.</li>
            <li><strong style="color: #fff;">Day 7-12 (D-Rest):</strong> Throw the temp up to 16 °C. We force the yeast to clean up the butterscotch before it goes dormant.</li>
            <li><strong style="color: #fff;">Day 12-28 (Lagering):</strong> Drop to 2 °C. Store cold for a long time. Proteins and yeast slowly sink, the beer clears, and flavors mature.</li>
        </ul>
    `,

    "be-256": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle BE-256 (The Abbey Machine)</h3>
        <p>Formerly known as "Abbaye". This is a fast and brutal Belgian yeast that loves high-gravity worts. Perfect for dark, malty Belgians like Dubbel, Tripel, and Quadrupel. It attenuates quickly and creates a fantastic symphony of dark fruit.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Fast and strong (15-25 °C)</h4>
        <p>It tolerates very high alcohol (up to 11%). But if you start it too hot, it can throw off unwanted solvent notes (fusels). The key is a strict start that is later let loose.</p>
        <h4 style="margin-top: 15px; color: #ccc;">2. Esters of dried fruit</h4>
        <p>It is known for bringing out plum, fig, and raisin, which marries incredibly well with caramel malts and Belgian candi syrup.</p>
        <h4 style="margin-top: 15px; color: #ccc;">Brewer's Profile:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Day 0-3:</strong> Start cool at 18 °C. The yeast is aggressive initially. Hold the beast back!</li>
            <li><strong style="color: #fff;">Day 3-8 (Belgian Ramp):</strong> Let the machine ramp up towards 23-24 °C to stress out the complex Belgian esters.</li>
            <li><strong style="color: #fff;">Day 8+:</strong> Cold crash to clear the beer before conditioning.</li>
        </ul>
    `,

    "wb-06": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle WB-06 (The Wheat Beer Master)</h3>
        <p>The classic German Weissbier yeast in dry form! Do you want a cloudy, golden Hefeweizen smelling of foam banana and clove? Then this is the one to use.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. You are behind the wheel (18-24 °C)</h4>
        <p>In wheat beers, the yeast IS the flavor. Low temperatures (18-19 °C) yield lots of phenols (pepper and clove). High temperatures (22-24 °C) yield extreme amounts of isoamyl acetate (banana). You choose!</p>
        <h4 style="margin-top: 15px; color: #ccc;">2. It refuses to flocculate</h4>
        <p>A German Weissbier *should* be cloudy. WB-06 is designed to remain in suspension, giving that nice, milky appearance in the glass.</p>
        <h4 style="margin-top: 15px; color: #ccc;">Brewer's Profile:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Day 0-5:</strong> Nail 20 °C for a perfect, classic balance between banana and clove.</li>
            <li><strong style="color: #fff;">Day 5-10:</strong> Raise to 22 °C to clean up any diacetyl and ensure complete attenuation.</li>
        </ul>
    `,

    "verdant": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Verdant IPA (The Juice Machine)</h3>
        <p>Developed alongside Verdant Brewing Co., this is the ultimate yeast for NEIPA and Hazy IPA. It produces massive amounts of apricot and vanilla esters that back up modern hops perfectly.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Master of Biotransformation</h4>
        <p>This yeast is phenomenal at taking dry hops during active fermentation and chemically rebuilding the hop oils into even fruitier flavors.</p>
        <h4 style="margin-top: 15px; color: #ccc;">Brewer's Profile:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Day 0-3:</strong> Start at 19 °C to build a solid, fruity base without fusel alcohols. (Pitch your first dry hop here!)</li>
            <li><strong style="color: #fff;">Day 3-7:</strong> Let the temperature wander up to 22 °C to stress out the final juicy esters and ensure good attenuation.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: It flocculates rather poorly, which is EXACTLY what we want to retain "The Haze".</i></p>
    `,

    "voss": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Voss Kveik (The Viking)</h3>
        <p>The Norwegian powerhouse that breaks absolutely all rules we learned about brewing. It ferments scorching hot, furiously fast, and leaves clean, light orange notes behind.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Extreme Heat (30-40 °C)</h4>
        <p>While other yeasts would have died or created undrinkable rocket fuel at 38 °C, Voss thrives there. It needs no fridge, just a heat mat and lots of yeast nutrients!</p>
        <h4 style="margin-top: 15px; color: #ccc;">Brewer's Profile:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Day 0-3:</strong> Nail it at 38 °C. Fermentation is often extremely violent and completely done in just 2-3 days.</li>
            <li><strong style="color: #fff;">Day 4+:</strong> Chill directly to serving temp. It flocculates hard and fast. You can drink the beer the same week!</li>
        </ul>
    `,

    "nottingham": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Nottingham (The Workhorse)</h3>
        <p>Perhaps the most versatile yeast ever cultivated. "Notty" doesn't care what you throw at it. Imperial Stout? Yep. Cider? Absolutely. IPA? No problem. It is extremely neutral, reliable, and cleans up after itself exemplary.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Temperature Chameleon (10-22 °C)</h4>
        <p>In the upper range, it behaves like a clean ale yeast. Pull it down to 12-14 °C? Then it basically becomes a cheat-code lager yeast for incredibly crisp pseudo-lagers!</p>
        <h4 style="margin-top: 15px; color: #ccc;">Brewer's Profile (Ale Mode):</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Day 0-4:</strong> Hold 18 °C for a clean and fast primary fermentation.</li>
            <li><strong style="color: #fff;">Day 4-7:</strong> Ramp up to 21 °C. Even workhorses need a Diacetyl Rest to hide the butterscotch.</li>
        </ul>
    `,

    "wlp001": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP001 California Ale (The West Coast King)</h3>
        <p>White Labs' crown jewel! This is the original strain that started the American craft beer revolution. Praised for its unparalleled cleanliness.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Letting the hops sing (20-23 °C)</h4>
        <p>This yeast has one single job: to ferment away the sugar and then step into the background so your expensive American hops can take the lead.</p>
        <h4 style="margin-top: 15px; color: #ccc;">Brewer's Profile:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Day 0-5:</strong> Start crisp around 19.5 °C. We want zero esters and zero fusels.</li>
            <li><strong style="color: #fff;">Day 5-8:</strong> Release up to 22 °C for a Diacetyl Rest. WLP001 is good at cleaning, but a little heat helps.</li>
        </ul>
    `,

    "wlp300": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP300 Hefeweizen (The Banana Bomb)</h3>
        <p>This is the liquid gold standard for German wheat beer. Unlike dry wheat yeasts, this one is famous for producing massive, luscious amounts of banana aroma.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Temperament and Temperature (20-22 °C)</h4>
        <p>Pushing WLP300 above the 20-mark is the trick to unlocking the fruity isoamyl acetate (banana) esters and suppressing the clove.</p>
        <h4 style="margin-top: 15px; color: #ccc;">Brewer's Profile:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Day 0-7:</strong> Ferment warm! Lock the temp at 21 °C and let the banana party begin.</li>
            <li><strong style="color: #fff;">Day 7-14 (Conditioning):</strong> Drop to serving temp (approx. 6 °C).</li>
        </ul>
    `,

    "belle-saison": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Belle Saison (The Dry Belgian)</h3>
        <p>Saison yeast is wild, untamed, and fantastic. Designed to eat up every single sugar it finds and leave a bone-dry, peppery beer behind.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Diastaticus (Eats everything)</h4>
        <p>This yeast carries a gene (STA1) that allows it to break down complex sugars. The result? A beer that can ferment down to 1.000 FG.</p>
        <h4 style="margin-top: 15px; color: #ccc;">Brewer's Profile:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Day 0-3:</strong> Start around 20 °C so fermentation takes hold without becoming solvent-like.</li>
            <li><strong style="color: #fff;">Day 3-10:</strong> Take the limiters off! Free-rise the temperature all the way up to 26-28 °C to build max flavor profile.</li>
        </ul>
    `,

    "t-58": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle T-58 (The Peppery Companion)</h3>
        <p>A truly unique, ester- and phenol-driven yeast. If BE-256 is dark fruit, then T-58 is black pepper and spice. Often used in complex Belgian ales or Trappist beers.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Leaves residual sweetness (15-24 °C)</h4>
        <p>T-58 doesn't attenuate as hard as many other Belgians. This leaves some residual sweetness and body in the beer, balancing the sharp, peppery notes.</p>
        <h4 style="margin-top: 15px; color: #ccc;">Brewer's Profile:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Day 0-4:</strong> Start at 18 °C. The phenols will be produced in masses anyway.</li>
            <li><strong style="color: #fff;">Day 4-8:</strong> Ramp up slowly to 22 °C to round off the flavors and ensure fermentation doesn't stall too early.</li>
        </ul>
    `,

"wyeast-1968": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1968 (London ESB Ale)</h3>
        <p>The legendary Fuller’s strain! This yeast is famous for leaving a wonderful, malty residual sweetness, and dropping out of suspension so fast it looks like cottage cheese.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. Extreme Flocculation (Crucial!)</h4>
        <p>Because it drops like a stone the second it feels "done", you have to actively fight to keep it awake. If it goes to sleep too early, your beer will taste like a butterscotch candy (Diacetyl).</p>

        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">"Standard" & "ESB Clean":</strong> Starts cooler (18.5-19 °C) to keep the yeast focused on maltiness without throwing too much fruit. A solid diacetyl rest at 21 °C cleans up the butterscotch.</li>
            <li><strong style="color: #fff;">"High Ester" & "ESB Fruity":</strong> For a true British fruit-bomb! We pitch warm (21-22 °C) and let it ramp to 23 °C. Expect massive notes of marmalade and jam.</li>
            <li><strong style="color: #fff;">"Low Ester":</strong> The cheat-code for a super clean profile. Ferments low at 18 °C and crashes gently to avoid stressing the yeast.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: This yeast clears the beer so fast during the Cold Crash that you rarely need fining agents!</i></p>
    `,

    "wlp920": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP920 (Old Bavarian Lager)</h3>
        <p>A classic from southern Germany, known for a malty profile with a light touch of esters, making it perfect for Oktoberfest beers, Bocks, and dark lagers.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. The Malt Preserver</h4>
        <p>By keeping the fermentation cold and steady, we prevent the yeast from producing byproducts that would otherwise mask the delicate toasted and caramel notes from the Munich and Vienna malts.</p>

        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">"Lager" (Traditional):</strong> The old-school way. Starts low at 10.5 °C for 10 full days, followed by a slow D-rest and a massive 28-day cold lagering phase.</li>
            <li><strong style="color: #fff;">"Quick Lager":</strong> The modern approach. Pitches at 12.5 °C for faster yeast growth, finishes the cleanup by day 10, and cuts the lagering time in half.</li>
            <li><strong style="color: #fff;">"Brulosophy":</strong> The warm-fermented lager hack! Runs at ale temperatures (19 °C). Surprisingly clean, but done in a fraction of the time.</li>
        </ul>
    `,

    "imperial-b45": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Imperial Yeast B45 (Gnome)</h3>
        <p>An amazing classic Belgian yeast renowned for producing beautiful pear and peach esters paired with a light, peppery spiciness (phenols).</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. The Belgian Ramp</h4>
        <p>Belgian monks historically didn't use chillers. They pitched the yeast and let the natural exothermic heat of fermentation drive the temperature up. We want to mimic this to unlock the true Belgian character!</p>

        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">"Classic":</strong> Starts at 20 °C and free-rises to 23.5 °C. This is the sweet spot for balancing the pear esters with the peppery phenols.</li>
            <li><strong style="color: #fff;">"Spicy" & "High Ester":</strong> We push the yeast hard and hot! Starting at 21-22 °C and ramping to 25 °C forces the yeast to throw massive amounts of complex flavors. Perfect for a Belgian Strong.</li>
            <li><strong style="color: #fff;">"Standard" & "Low Ester":</strong> Restrained (18-19 °C). Keeps the yeast calm for a more subtle Belgian blonde.</li>
        </ul>
    `,

    "wyeast-1084": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1084 (Irish Ale)</h3>
        <p>The Guinness strain! A true workhorse from Dublin that is incredibly versatile. It provides a rich, malty profile with a subtle hint of dark fruit and a touch of diacetyl that works perfectly in dark beers.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. Loving the Dark Malts</h4>
        <p>This yeast was literally born to ferment roasted barley. It leaves just enough residual body to make a dry stout feel creamy rather than thin.</p>

        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">"Dry Stout":</strong> Starts at a crisp 18 °C and ramps to 20 °C. This suppresses fruitiness and lets the coffee and chocolate notes from the malt take center stage.</li>
            <li><strong style="color: #fff;">"Red/Malty" & "High Ester":</strong> Runs warmer (20-21.5 °C) to coax out those lovely jammy, dark berry esters that make an Irish Red Ale so special.</li>
            <li><strong style="color: #fff;">"Standard" & "Low Ester":</strong> A fantastic, neutral base if you want to use this yeast for American styles or Porters.</li>
        </ul>
    `,

    "wyeast-3944": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 3944 (Belgian Witbier)</h3>
        <p>The king of wheat beers! Known for immense character, producing a complex blend of spicy phenols (pepper/clove) and fruity esters (banana/citrus).</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. Keep it Cloudy</h4>
        <p>This yeast refuses to drop, and that's exactly what we want! We want the yeast and wheat proteins to stay in suspension for that milky, white appearance.</p>

        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">"Classic Wit":</strong> A balanced 18 °C start, ramping to 21.5 °C. Notice the "Condition" phase sits at 6 °C instead of near freezing? This prevents the beer from clearing up too much!</li>
            <li><strong style="color: #fff;">"Summer Wit" & "High Ester":</strong> Pushed warmer (20-23 °C). Expect massive amounts of citrus, orange peel, and banana.</li>
            <li><strong style="color: #fff;">"Standard" & "Low Ester":</strong> Kept strictly under 20 °C. The fruitiness takes a back seat, and the clove/pepper phenols become the star of the show.</li>
        </ul>
    `,

    "wlp833": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP833 (German Bock Lager)</h3>
        <p>The heavyweight from Ayinger! The absolute king of maltiness. It leaves a fantastic malty sweetness and body, making it the obvious choice for Bocks, Doppelbocks, and Märzens.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. The Long Slumber</h4>
        <p>Bock yeast can be stubborn and slow. It needs time to properly attenuate high-gravity worts without creating rocket-fuel fusel alcohols.</p>

        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">"Trad. Bock":</strong> The authentic approach. A chilly 10 °C primary fermentation, a solid D-rest at 16 °C, and then a grueling 35-day lagering phase to achieve liquid perfection.</li>
            <li><strong style="color: #fff;">"Fast Bock":</strong> When you can't wait. Pitched at 12 °C, warming to 17 °C. It finishes the job in just over three weeks but still delivers a massive malt backbone.</li>
        </ul>
    `,

    "wlp007": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP007 (Dry English Ale)</h3>
        <p>A heat-seeking missile! Known as the "Workhorse" yeast. It's incredibly fast, attenuates very dry, and drops like a rock when it's done.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. Taming the Beast</h4>
        <p>Because 007 ferments so violently, it creates intense internal heat. Your fridge will work hard the first 48 hours to hold the temperature down to prevent solvent-like flavors.</p>

        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">"West Coast" & "Standard":</strong> Locks the beast in at 18.5-19 °C. At these cooler temperatures, WLP007 acts almost exactly like a clean American Ale yeast, making it perfect for dry IPAs.</li>
            <li><strong style="color: #fff;">"Monster" & "High Ester":</strong> Start at 20-21 °C. If you are brewing a massive Imperial Stout or Barleywine, this profile gives the yeast the heat it needs to survive the high alcohol while throwing beautiful dark fruit esters.</li>
        </ul>
    `,

    "wyeast-1318": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1318 (London Ale III)</h3>
        <p>The very foundation of the NEIPA revolution. This is the yeast that gave the world "Juice". It leaves a velvety mouthfeel and throws off beautiful esters of pineapple and grapefruit.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. Biotransformation</h4>
        <p>Low flocculation helps keep the beer hazy, and its unique enzymes are fantastic at chemically altering your dry hops into even juicier compounds.</p>

        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">"Standard" & "Low Ester":</strong> Kept at 18-19 °C. This provides a clean fermentation where the biotransformation of your massive dry hop additions takes center stage.</li>
            <li><strong style="color: #fff;">"High Ester":</strong> Pitched at 21 °C and ramped to 23 °C. The added heat forces the yeast to produce more of its own tropical esters (peach/apricot) to blend with the hops.</li>
        </ul>
    `,

    "wyeast-2565": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 2565 (Kölsch)</h3>
        <p>A true "hybrid" – technically an ale yeast, but it prefers working at near-lager temperatures. Known for an extremely crisp, clean, and almost vinous (white wine) profile.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. The Dusty Yeast</h4>
        <p>Wyeast 2565 is notoriously powdery. It refuses to clear up on its own. A long, cold lagering phase is absolutely mandatory to achieve that brilliant, golden Kölsch clarity.</p>

        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">"Authentic":</strong> The Cologne way! A chilly 14.5 °C primary fermentation, a slow D-rest at 18 °C, and a strict 2-week cold lagering. Tastes exactly like a German lager, but brewed with ale yeast.</li>
            <li><strong style="color: #fff;">"Hybrid" & "Standard":</strong> Faster ale-like fermentation (18-19 °C). Still very clean, but finishes much quicker. Great for crisp Blonde Ales.</li>
        </ul>
    `,

    "s-23": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Saflager S-23 (The Fruity Bohemian)</h3>
        <p>Originating from the famous VLB institute in Berlin, this is the wild child of lager yeasts. While W-34/70 is laser-focused and clean, S-23 is loved for producing slightly more fruity and estery notes, making it fantastic for Bohemian Pilsners or Baltic Porters.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. The Ester Profile (9-15 °C)</h4>
        <p>If you ferment this at the warmer end of the lager spectrum (13-15 °C), it will give off beautiful, subtle notes of apple and pear that play incredibly well with spicy Saaz hops.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">Brewer's Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">"Crisp German" (10 °C):</strong> Keep it cold and steady for a traditional, clean profile. D-rest at 15 °C on Day 10.</li>
            <li><strong style="color: #fff;">"Bohemian Fruit" (13 °C):</strong> Start slightly warmer to unlock those unique S-23 esters. Perfect for a malt-forward Czech amber.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: S-23 can sometimes struggle to finish the last gravity points. A solid, warm Diacetyl Rest is crucial to help it cross the finish line.</i></p>
    `,

    "wlp002": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP002 English Ale (The Brick)</h3>
        <p>The legendary Fuller’s strain! This yeast is famous for two things: leaving a wonderful, malty residual sweetness, and dropping out of suspension so fast it looks like cottage cheese.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. Extreme Flocculation</h4>
        <p>Because it drops like a stone the second it feels "done", you have to actively fight to keep it awake. If it goes to sleep too early, your beer will taste like a butterscotch candy (Diacetyl).</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">Brewer's Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">"Classic ESB" (19 °C):</strong> Hold at 19 °C for 3 days to build the fruitiness, then aggressively ramp up to 21 °C to keep the yeast swimming and cleaning.</li>
            <li><strong style="color: #fff;">"Sweet Stout" (18 °C):</strong> Keep it slightly cooler to retain even more unfermented sugars, giving your dark beers a massive, silky mouthfeel.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: When you Cold Crash this, the beer will become brilliantly clear almost overnight. No need for fining agents!</i></p>
    `,

    "wlp500": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP500 Trappist (The Monk's Madness)</h3>
        <p>Sourced directly from the Chimay monastery. This is the yeast you want when brewing massive, complex Belgian Quads or fruity Tripels. It produces an explosion of plum, raisin, and distinct bubblegum notes.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. Let it ride (18-22 °C... and beyond)</h4>
        <p>Belgian monks historically didn't use chillers. They pitched the yeast and let the natural exothermic heat of fermentation drive the temperature up. We want to mimic this!</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">Brewer's Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">"Trappist Gold" (Balanced):</strong> Start at 18 °C to suppress fusel alcohols, then slowly let it free-rise to 22 °C by Day 5 for an elegant fruit profile.</li>
            <li><strong style="color: #fff;">"Monk's Madness" (High Ester):</strong> Pitch at 20 °C and ramp it aggressively to 25 °C! This stresses the yeast into throwing massive dark fruit and bubblegum flavors.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: It has very low flocculation. You will need a long, cold conditioning phase to drop this stubborn yeast out of the beer.</i></p>
    `,

    "diamond": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Diamond (The Munich Master)</h3>
        <p>A true German lager yeast originating from the Doemens Institute in Munich. Diamond is renowned for its robust nature and ability to produce incredibly clean, crisp, and authentic German lagers without the fuss.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. Pristine and Professional</h4>
        <p>While some lager yeasts can throw sulfur (rhino farts) during fermentation, Diamond is generally very well-behaved and produces a highly polished beer that lets the Pilsner malt shine.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">Brewer's Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">"Munich Crisp" (10 °C):</strong> The traditional way. Hold 10 °C for 7-10 days, followed by a strict Diacetyl Rest at 16 °C.</li>
            <li><strong style="color: #fff;">"Fast Helles" (14 °C):</strong> Diamond handles slightly warmer temperatures remarkably well. Run it at 14 °C to cut your fermentation time in half!</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: Diamond has fantastic attenuation. It will dry out a Pilsner beautifully, making it extremely refreshing.</i></p>
    `,

    "wlp066": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP066 London Fog (The Haze Craze)</h3>
        <p>This is the liquid magic behind some of the best NEIPAs in the world. It leaves a velvety, creamy mouthfeel and throws off beautiful esters of pineapple and ruby red grapefruit.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. The Body Builder</h4>
        <p>Unlike West Coast yeasts, London Fog doesn't ferment all the complex sugars. It leaves a higher Final Gravity, which provides that thick, juice-like body that modern hazy IPAs require.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">Brewer's Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">"Smooth Juice" (19 °C):</strong> Keep it locked at 19 °C. This provides a clean fermentation where the biotransformation of your dry hops takes center stage.</li>
            <li><strong style="color: #fff;">"Tropical Punch" (21 °C):</strong> Start at 19 °C, but ramp to 21.5 °C by Day 3. The added heat forces the yeast to produce more of its own tropical esters to blend with the hops.</li>
        </ul>
    `,

    "s-33": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle S-33 (The Body Booster)</h3>
        <p>Often misunderstood, S-33 is a secret weapon. It is incapable of eating complex malt sugars (maltotriose negative), which means it will ALWAYS leave your beer thick, full-bodied, and slightly sweet.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. Not just for Belgians</h4>
        <p>Despite being labeled a Belgian ale yeast, it produces very little phenols (spice). Instead, it's increasingly used in Hazy IPAs and Milk Stouts purely for its ability to build an incredible mouthfeel.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">Brewer's Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">"Thick Stout" (18 °C):</strong> Keep it cool to minimize esters. You will end up with a luscious, thick dark beer with great foam retention.</li>
            <li><strong style="color: #fff;">"Haze Cheat Code" (20 °C):</strong> Use it in a NEIPA! The unfermented sugars will make your IPA taste exactly like a glass of tropical breakfast juice.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: Don't panic if your Final Gravity is high (e.g., 1.020). S-33 simply cannot ferment it any further. It's done!</i></p>
    `,

    "wlp800": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP800 Pilsner Lager (The Czech Legend)</h3>
        <p>The famous Pilsner Urquell strain. If you want to brew an authentic Bohemian Pilsner, look no further. It provides a rich, complex maltiness and a very smooth, rounded profile.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. The Diacetyl Debate</h4>
        <p>Historically, Czech Pilsners have a tiny, tiny hint of diacetyl (butter) in the background. If you want to be 100% true to style, you actually do a slightly shorter Diacetyl Rest than with German lagers!</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">Brewer's Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">"Bohemian Rhapsody" (10 °C):</strong> Ferment low and slow. Ramp up to 15 °C for just 48 hours to clean up *most* of the butterscotch, then drop to lagering.</li>
            <li><strong style="color: #fff;">"Modern Crisp" (11 °C):</strong> Run it slightly warmer and do a full 4-day D-rest at 16 °C for a completely clean, modern interpretation of a Pilsner.</li>
        </ul>
    `,

    "novalager": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand NovaLager (The Bio-Engineered Miracle)</h3>
        <p>A true game-changer. NovaLager is a modern hybrid yeast (a novel Saccharomyces pastorianus lineage) designed to ferment like an ale, but taste exactly like a clean lager.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. Breaking the rules (10-20 °C)</h4>
        <p>You no longer need 5 weeks and a dedicated lager fridge. NovaLager ferments cleanly at 18-20 °C with low ester production, no sulfur (H2S), and very low diacetyl.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">Brewer's Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">"The Cheat Code" (18 °C):</strong> Treat it like an ale! Primary at 18 °C for 5 days, ramp to 20 °C for 2 days to finish up, and crash. A clean lager in a week!</li>
            <li><strong style="color: #fff;">"Modern Cold" (14 °C):</strong> If you want absolute pristine perfection, ferment it at 14 °C. It's still significantly faster than traditional strains but delivers award-winning crispness.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: It has very high attenuation. Be prepared for your beer to dry out significantly, making the hop bitterness feel sharper.</i></p>
    `,

   "wlp095": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP095 (Burlington Ale)</h3>
        <p>The legendary "Conan" strain! The yeast that originally put the Vermont style (Hazy IPA) on the map. Famous for producing intense notes of ripe peach and apricot.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. The Original Juice</h4>
        <p>Unlike London III, Burlington tends to attenuate slightly more, yielding a beer that is drier on the finish but still exceptionally "juicy" in its aroma.</p>

        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">"Conan IPA" & "Standard":</strong> 19-21 °C. The classic Vermont curve. Gives a perfect balance between hop bitterness and stone-fruit esters.</li>
            <li><strong style="color: #fff;">"Hazy" & "High Ester":</strong> Pushed to 20 °C and ramping up to 22-23 °C. This stresses the yeast to maximize the peach and apricot notes.</li>
            <li><strong style="color: #fff;">"Low Ester":</strong> Fermented cool (18 °C) to tame the fruitiness, making it behave more like a standard West Coast IPA yeast.</li>
        </ul>
    `
};



// --- POPUP-FUNKTIONER (MODAL) ---
function openYeastModal(yeast) {
    const modal = document.getElementById('yeast-info-modal');
    const modalTitle = document.getElementById('modal-yeast-name');
    const modalDesc = document.getElementById('modal-yeast-desc');

    if (!modal || !modalTitle || !modalDesc) return;

    modalTitle.innerText = yeast.name;
    let detailedText = "";

    // 1. KOLLA OM DET ÄR EN EGEN PROFIL
    if (yeast.isCustom) {
        const savedProfiles = JSON.parse(localStorage.getItem('customYeastProfiles') || '[]');
        const profileData = savedProfiles.find(p => p.s === yeast.name);

        if (profileData) {
            const s = profileData.steps;
            const baseYeast = profileData.p.replace('Custom (', '').replace(')', '');

            detailedText = `
                <div style="line-height: 1.6;">
                    <p style="color: var(--accent-color); font-weight: 800; margin-bottom: 15px;">Created by you!</p>
                    <p>This profile is used with <strong>${baseYeast}</strong> and these are the profile steps:</p>
                    <ul style="list-style: none; padding: 0; margin-top: 15px; display: flex; flex-direction: column; gap: 8px;">
                        <li><strong style="color: #fff;">Pitch:</strong> Start at ${s[0][1]}°C.</li>
                        <li><strong style="color: #fff;">Primary:</strong> Hold until Day ${s[1][0]}.</li>
                        <li><strong style="color: #fff;">Cleanup:</strong> Rise to ${s[2][1]}°C on Day ${s[2][0]}.</li>
                        <li><strong style="color: #fff;">Cold Crash:</strong> Drop to ${s[3][1]}°C on Day ${s[3][0]}.</li>
                        <li><strong style="color: #fff;">Condition:</strong> Hold at ${s[4][1]}°C until Day ${s[4][0]}.</li>
                    </ul>
                    ${profileData.dryHopDay ? `<p style="margin-top: 15px; color: #8CC63F;"><strong>Dry Hop:</strong> Scheduled for Day ${profileData.dryHopDay}</p>` : ''}
                </div>
            `;
        } else {
            detailedText = `<p>Custom profile data not found.</p>`;
        }
    } else {
        // 2. VANLIG JÄST FRÅN BESKRIVNINGARNA
        detailedText = yeastDescriptions[yeast.id] || yeastDescriptions[yeast.name];
        if (!detailedText) {
            detailedText = `<p>${yeast.desc}</p><h3 style="margin-top:20px; color: #fff;">Passar till:</h3><p>${yeast.styles}</p>`;
        }

        // 3. LÄGG TILL INKLUDERADE MASKINPROFILER
        const hwStrainNames = {
            "us-05": "US-05", "s-04": "S-04", "w-34-70": "W-34/70", "be-256": "BE-256",
            "wb-06": "WB-06", "verdant": "Verdant IPA", "voss": "Voss Kveik",
            "nottingham": "Nottingham", "wlp001": "California Ale", "wlp300": "Hefeweizen",
            "belle-saison": "Belle Saison", "t-58": "T-58", "s-23": "S-23",
            "wlp002": "English Ale", "wlp500": "Trappist", "diamond": "Diamond",
            "wlp066": "London Fog", "s-33": "S-33", "wlp800": "Pilsner Lager",
            "novalager": "NovaLager", "wyeast-1968": "London ESB", "wlp920": "Old Bavarian",
            "imperial-b45": "Gnome", "wyeast-1084": "Irish Ale", "wyeast-3944": "Witbier",
            "wlp833": "Bock Lager", "wlp007": "Dry English", "wyeast-1318": "London III",
            "wyeast-2565": "Kölsch", "wlp095": "Burlington"
        };

        const targetStrainName = hwStrainNames[yeast.id];
        if (targetStrainName && typeof yeastDatabase !== 'undefined' && yeastDatabase.yeasts) {
            const matchingProfiles = yeastDatabase.yeasts.filter(p => p.s === targetStrainName);
            if (matchingProfiles.length > 0) {
                let profileListHtml = `
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
                        <h4 style="color: var(--accent-color); margin-bottom: 10px;">Included Hardware Profiles:</h4>
                        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; font-size: 0.9rem;">
                `;
                matchingProfiles.forEach(prof => {
                    const startTemp = prof.steps[0][1];
                    profileListHtml += `<li><strong style="color: #fff;">${prof.p}</strong> (Starts @ ${startTemp}°C)</li>`;
                });
                profileListHtml += `</ul></div>`;
                detailedText += profileListHtml;
            }
        }
    }

    // Slutlig formatering och visning
    modalDesc.innerHTML = formatTempText(detailedText);
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Lås bakgrunden
}

window.closeYeastModal = function() {
    const modal = document.getElementById('yeast-info-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Släpp bakgrunden fri
    }
}

// Stäng vid klick utanför rutan
document.getElementById('yeast-info-modal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeYeastModal();
    }
});


// ==========================================
// MASTER STARTUP (Körs när sidan är helt redo)
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    // 1. Ladda in dina egna sparade profiler
    if (typeof loadCustomProfiles === "function") {
        loadCustomProfiles();
    }

    // 2. Fyll rullistan i Arcane Lab
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
    if (savedAccent && typeof setAccent === "function") setAccent(savedAccent);
    
if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
    }
});

// --- FUNKTION FÖR ATT RADERA EN PROFIL ---
function deleteCustomProfile(profileName) {
    if (!confirm("Are you sure you want to delete this profile? It cannot be undone.")) return;

    // 1. Hämta de sparade profilerna från enhetens minne
    let savedProfiles = JSON.parse(localStorage.getItem('customYeastProfiles') || '[]');
    
    // 2. Filtrera bort den profil vi vill radera (behåll alla som INTE heter samma sak)
    savedProfiles = savedProfiles.filter(p => p.s !== profileName);
    
    // Spara tillbaka den uppdaterade listan till minnet
    localStorage.setItem('customYeastProfiles', JSON.stringify(savedProfiles));

    // 3. Ta bort den från den visuella biblioteks-listan (yeastStrains)
    // Vi återskapar ID:t exakt så som det genererades när profilen sparades
    const customId = "custom-" + profileName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const strainIndex = yeastStrains.findIndex(y => y.id === customId);
    if (strainIndex > -1) {
        yeastStrains.splice(strainIndex, 1);
    }

    // 4. (Bonus) Om profilen råkade vara vald för synkning, avmarkera den
    const selectedIndex = selectedStrains.indexOf(customId);
    if (selectedIndex > -1) {
        selectedStrains.splice(selectedIndex, 1);
        const favCount = document.getElementById('fav-count');
        if (favCount) favCount.innerText = selectedStrains.length;
    }

    console.log("Profile deleted from local storage:", profileName);

    // 5. Stäng modalen om den är öppen
    const modal = document.getElementById('yeast-info-modal');
    if (modal) modal.style.display = 'none';

    // 6. Rita om hela biblioteket direkt (korten försvinner framför ögonen)
    const searchBox = document.getElementById('yeast-search');
    renderYeastLibrary(searchBox ? searchBox.value : "");

    // 7. Dubbelkolla att vi är på rätt flik och att ikonen lyser
    showView('library');
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    const libIcon = document.querySelector('.nav-item[onclick*="library"]');
    if (libIcon) libIcon.classList.add('active');
}


// 1. Fyll rullistan med användarens enheter (Skottsäker version)
async function populateSyncDevices(uid) {
    const dropdown = document.getElementById('sync-target-device');
    if (!dropdown) return; 

    // Säkerhetskoll
    if (!uid) {
        dropdown.innerHTML = '<option value="">Logga in för att se enheter</option>';
        return;
    }

    try {
        // Försöker hämta dina riktiga enheter
        const res = await fetch(`${API_BASE}/my-devices?uid=${uid}`);
        
        if (!res.ok) throw new Error("Servern svarade inte med 200 OK");
        
        const devices = await res.json();
        dropdown.innerHTML = ""; 
        
        if (devices.length === 0) {
            // Om API:et svarar men du inte har kopplat någon enhet, lägg in testkylen ändå!
            const testOption = document.createElement('option');
            testOption.value = "TEST:MAC:12:34:56";
            testOption.textContent = "Demokyl 1 (TEST:MAC:12:34:56)";
            dropdown.appendChild(testOption);
            return;
        }

        devices.forEach(dev => {
            const option = document.createElement('option');
            option.value = dev.device_id;
            option.textContent = `${dev.name || 'Namnlös'} (${dev.device_id})`;
            dropdown.appendChild(option);
        });

    } catch (err) {
        console.warn("Kunde inte ladda riktiga enheter, laddar in test-data. Orsak:", err);
        
        // FAKEDATA FÖR ATT TESTA GRÄNSSNITTET NÄR SERVER ÄR NERE:
        dropdown.innerHTML = ""; 
        const testOption = document.createElement('option');
        testOption.value = "TEST:MAC:12:34:56";
        testOption.textContent = "Demokyl 1 (TEST:MAC:12:34:56)";
        dropdown.appendChild(testOption);
    }
}
// ==========================================
// --- CLOUD SYNC MOTOR ---
// ==========================================
async function syncToSelectedDevice() {
    const syncBtn = document.getElementById('sync-btn');
    const syncDropdown = document.getElementById('sync-target-device');
    const targetDeviceId = syncDropdown ? syncDropdown.value : null;

    // 1. Säkerhetskontroller
    if (!targetDeviceId) {
        alert("Vänligen välj en målenhet i rullistan ovanför knappen!");
        return;
    }

    if (!selectedStrains || selectedStrains.length === 0) {
        alert("Du måste välja minst en jäst/profil (markera med stjärnan ★) för att kunna synka!");
        return;
    }

    const user = auth.currentUser;
    if (!user) {
        alert("Du måste vara inloggad för att kunna synka till molnet.");
        return;
    }

    // 2. Visuell feedback: Vi jobbar!
    const originalText = syncBtn.innerText;
    syncBtn.innerText = "SYNCING TO CLOUD... ☁️";
    syncBtn.style.opacity = "0.7";
    syncBtn.style.pointerEvents = "none";

    try {
        // 3. Bygg objektet PRECIS så som ESP32:an och C++ koden förväntar sig det
        const payloadData = {
            yeasts: selectedStrains
        };

        // 4. Skicka till din Node.js Backend
        const response = await fetch(`${API_BASE}/sync-profiles`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                uid: user.uid,
                device_id: targetDeviceId,
                yeastData: payloadData
            })
        });

        if (response.ok) {
            // 5. Visuell feedback: Succé!
            syncBtn.innerText = "SYNC SUCCESSFUL! ✓";
            syncBtn.style.backgroundColor = "rgba(140, 198, 63, 0.2)"; // Mjuk grön
            syncBtn.style.borderColor = "#8CC63F"; // YeastMaster-grön
            syncBtn.style.color = "#8CC63F";
            
            // Återställ knappen efter 3 sekunder
            setTimeout(() => {
                syncBtn.innerText = originalText;
                syncBtn.style.backgroundColor = "";
                syncBtn.style.borderColor = "";
                syncBtn.style.color = "";
                syncBtn.style.opacity = "1";
                syncBtn.style.pointerEvents = "auto";
            }, 3000);
            
            console.log(`Synkade ${selectedStrains.length} profiler till ${targetDeviceId}`);
        } else {
            throw new Error("Servern nekade synkningen.");
        }
    } catch (error) {
        console.error("Synk-fel:", error);
        
        // Visuell feedback: Fel
        syncBtn.innerText = "SYNC FAILED ✖";
        syncBtn.style.backgroundColor = "rgba(255, 68, 68, 0.2)";
        syncBtn.style.borderColor = "#ff4444";
        syncBtn.style.color = "#ff4444";
        
        setTimeout(() => {
            syncBtn.innerText = originalText;
            syncBtn.style.backgroundColor = "";
            syncBtn.style.borderColor = "";
            syncBtn.style.color = "";
            syncBtn.style.opacity = "1";
            syncBtn.style.pointerEvents = "auto";
        }, 3000);
        
        alert("Kunde inte nå molnet. Kontrollera din anslutning och försök igen.");
    }
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
    // 1. SÄKERHETSSPÄRR: Ignorera svep om du rör grafen eller sökrutan
    if (e.target.closest('.chart-container') || e.target.tagName.toLowerCase() === 'input') return;

    // 2. NY SÄKERHETSSPÄRR: Ignorera svep om Jäst-detaljvyn eller Modalen är öppen!
    const detailView = document.getElementById('yeast-detail-view');
    const infoModal = document.getElementById('yeast-info-modal');
    if (detailView && detailView.style.display === 'block') return;
    if (infoModal && infoModal.style.display === 'flex') return;

    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', e => {
    if (e.target.closest('.chart-container') || e.target.tagName.toLowerCase() === 'input') return;

    // Samma spärr här för att vara 100% säkra
    const detailView = document.getElementById('yeast-detail-view');
    const infoModal = document.getElementById('yeast-info-modal');
    if (detailView && detailView.style.display === 'block') return;
    if (infoModal && infoModal.style.display === 'flex') return;

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

// --- ZOOM-FUNKTION FÖR MOBIL (OVERVIEW / DETALJ) ---
let isZoomedIn = true; // Grafen är 600px bred från början
function toggleChartZoom() {
    const area = document.getElementById('chart-scroll-area');
    const btn = document.getElementById('btn-zoom');
    
    if (!area || !btn) return;

    if (isZoomedIn) {
        // Zooma ut: Låt grafen krympa för att få plats på skärmen
        area.style.minWidth = '100%';
        btn.innerText = '🔍 ZOOM IN';
    } else {
        // Zooma in: Tvinga grafen att bli 600px bred för scroll & precision
        area.style.minWidth = '600px';
        btn.innerText = '🔍 OVERVIEW';
    }
    
    isZoomedIn = !isZoomedIn;
}

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
    // 1. Uppdatera själva CSS-variabeln i hela appen
    document.documentElement.style.setProperty('--accent-color', color);

    // 2. Flytta .active-klassen till den klickade pricken
    document.querySelectorAll('.color-dot').forEach(dot => dot.classList.remove('active'));
    element.classList.add('active');

    // 3. Om du har en graf öppen, trigga en uppdatering så linjen byter färg direkt
    if (typeof updateChart === "function" && lastData) {
        updateChart(lastData);
    }
}

// Kolla om användaren har ett sparat tema när sidan laddas
const savedTheme = localStorage.getItem('yeastmaster-theme');
if (savedTheme) {
    setTheme(savedTheme);
}

// ==========================================
// --- TOGGLE FÖR PROFILER INFO ---
// ==========================================
function toggleProfilerInfo(btn) {
    const infoBox = document.getElementById('profiler-info-box');
    
    if (infoBox.style.display === 'none' || infoBox.style.display === '') {
        // ÖPPEN: Helt fylld, solid klargrön!
        infoBox.style.display = 'block';
        btn.style.backgroundColor = '#8CC63F'; // 100% grön bakgrund
        btn.style.borderColor = '#8CC63F';
        btn.style.color = '#111111'; // Mörkt 'i' för maximal kontrast mot det gröna
    } else {
        // STÄNGD: Dämpad och transparent
        infoBox.style.display = 'none';
        btn.style.backgroundColor = 'rgba(140, 198, 63, 0.15)'; // Dimmig bakgrund
        btn.style.borderColor = '#8CC63F';
        btn.style.color = '#8CC63F'; // Grönt 'i'
    }
}

// ==========================================
// --- TOGGLE FÖR LIBRARY INFO ---
// ==========================================
function toggleLibraryInfo(btn) {
    const infoBox = document.getElementById('library-info-box'); 
    
    if (infoBox.style.display === 'none' || infoBox.style.display === '') {
        // ÖPPEN: Helt fylld, solid klargrön!
        infoBox.style.display = 'block';
        btn.style.backgroundColor = '#8CC63F'; // 100% grön bakgrund
        btn.style.borderColor = '#8CC63F';
        btn.style.color = '#111111'; // Mörkt 'i' för maximal kontrast mot det gröna
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

// --- UPPDATERAD SPARFUNKTION (Spara alltid som Celsius) ---
function saveProfileToLibrary() {
    let rawName = document.getElementById('custom-profile-name').value.trim().toUpperCase();
    const profileName = rawName !== "" ? rawName : "CUSTOM_1";
    
    let baseYeast = document.getElementById('custom-base-yeast').value;
    if(baseYeast === "") baseYeast = "Unknown Base";

    // Intern hjälpfunktion för att tvinga ner värdet till Celsius innan lagring
    function toCelsius(val) {
        return currentTempUnit === 'F' ? (val - 32) * 5/9 : val;
    }

    const profileData = {
        s: profileName,             
        p: `Custom (${baseYeast})`, 
        dryHopDay: dryHopData.enabled ? dryHopData.day : null, 
        steps: [
            [profilePoints[0].x, parseFloat(toCelsius(profilePoints[0].y).toFixed(1))],
            [profilePoints[1].x, parseFloat(toCelsius(profilePoints[1].y).toFixed(1))],
            [profilePoints[2].x, parseFloat(toCelsius(profilePoints[2].y).toFixed(1))],
            [profilePoints[3].x, parseFloat(toCelsius(profilePoints[3].y).toFixed(1))],
            [profilePoints[4].x, parseFloat(toCelsius(profilePoints[4].y).toFixed(1))]
        ]
    };

    let savedProfiles = JSON.parse(localStorage.getItem('customYeastProfiles') || '[]');
    savedProfiles.push(profileData);
    localStorage.setItem('customYeastProfiles', JSON.stringify(savedProfiles));

    const btn = document.getElementById('btn-save-profile');
    const originalText = btn.innerText;
    btn.innerText = "SAVED TO LIBRARY! ✓";
    btn.style.backgroundColor = "#b142ff"; 
    btn.style.borderColor = "#b142ff";
    btn.style.color = "#fff";

    setTimeout(() => {
        loadCustomProfiles();
        showView('library');
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        const libIcon = document.querySelector('.nav-item[onclick*="library"]');
        if (libIcon) libIcon.classList.add('active');
        
        btn.innerText = originalText;
        btn.style.backgroundColor = ""; 
        btn.style.borderColor = "";
        btn.style.color = "";
        document.getElementById('custom-profile-name').value = '';
    }, 1200);
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
    
    // ... resten av din DOMContentLoaded-kod (loadCustomProfiles, etc) ...
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
    
    if (d === 0) return h + " h"; // Om det gått mindre än ett dygn, visa bara timmar
    if (h === 0) return d + " d"; // Om det är exakta dygn, visa bara dagar
    
    return `${d} d and ${h} h`;
}

// ==========================================
// --- MULTI-DEVICE, NICKNAME & AUTH ---
// ==========================================

// Hjälpfunktioner för "Det Smarta Arkivskåpet" (Nicknames)
function getSavedNickname(deviceId) {
    if (!deviceId) return "MIN YEASTMASTER";
    const nicknames = JSON.parse(localStorage.getItem('yeastmaster-nicknames') || '{}');
    return nicknames[deviceId] || "MIN YEASTMASTER";
}

function saveNickname(deviceId, name) {
    if (!deviceId) return;
    const nicknames = JSON.parse(localStorage.getItem('yeastmaster-nicknames') || '{}');
    nicknames[deviceId] = name;
    localStorage.setItem('yeastmaster-nicknames', JSON.stringify(nicknames));
}

function updateDashboardNickname(name) {
    const display = document.querySelector('.device-name-display');
    if (display) display.innerText = name.toUpperCase();
}

// Lyssna på Namnfältet i Settings
const nickInput = document.getElementById('setting-nickname');
if (nickInput) {
    nickInput.addEventListener('input', (e) => {
        const val = e.target.value.trim() || "MIN YEASTMASTER";
        if (activeDeviceId) {
            saveNickname(activeDeviceId, val);
            updateDashboardNickname(val);
            
            // Uppdatera namnet i rullistan direkt så det ser snyggt ut
            const activeOption = document.querySelector(`#setting-active-device option[value="${activeDeviceId}"]`);
            if(activeOption) activeOption.textContent = val;
        }
    });
}

// Lyssna på Rullistan i Settings
const deviceSelect = document.getElementById('setting-active-device');
if (deviceSelect) {
    deviceSelect.addEventListener('change', (e) => {
        activeDeviceId = e.target.value; 
        
        // Uppdatera Namnfältet
        const currentNick = getSavedNickname(activeDeviceId);
        if (nickInput) nickInput.value = currentNick !== "MIN YEASTMASTER" ? currentNick : "";
        updateDashboardNickname(currentNick);
        
        // Uppdatera Dashboarden
        if (typeof updateDashboard === 'function') updateDashboard();
    });
}

// Huvudmotorn: Inloggningsvakten
auth.onAuthStateChanged(async (user) => {
    const soulLoginPrompt = document.getElementById('soul-login-prompt');
    
    if (user) {
        if (soulLoginPrompt) soulLoginPrompt.style.display = 'none';

        try {
            // EN HÄMTNING FRÅN SERVER
            const res = await fetch(`${API_BASE}/my-devices?uid=${user.uid}`);
            const devices = await res.json();
            
            if (devices.length > 0) {
                activeDeviceId = devices[0].device_id; 
                
                // 1. FYLL RULLISTAN I SETTINGS (Dashboard Switcher)
                if (deviceSelect) {
                    deviceSelect.innerHTML = ""; 
                    devices.forEach(dev => {
                        const opt = document.createElement('option');
                        opt.value = dev.device_id;
                        const localName = getSavedNickname(dev.device_id);
                        opt.textContent = localName !== "MIN YEASTMASTER" ? localName : (dev.name || dev.device_id);
                        deviceSelect.appendChild(opt);
                    });
                    deviceSelect.value = activeDeviceId; 
                }

                // 2. FYLL RULLISTAN I BIBLIOTEKET (Sync Target)
                const syncDropdown = document.getElementById('sync-target-device');
                if (syncDropdown) {
                    syncDropdown.innerHTML = "";
                    devices.forEach(dev => {
                        const opt = document.createElement('option');
                        opt.value = dev.device_id;
                        const localName = getSavedNickname(dev.device_id);
                        opt.textContent = localName !== "MIN YEASTMASTER" ? localName : (dev.name || dev.device_id);
                        syncDropdown.appendChild(opt);
                    });
                }
                
                // 3. LADDA NAMN TILL DASHBOARD & FÄLT
                const currentNick = getSavedNickname(activeDeviceId);
                if (nickInput) nickInput.value = currentNick !== "MIN YEASTMASTER" ? currentNick : "";
                updateDashboardNickname(currentNick);

                showView('dashboard');
                updateDashboard(); 
            } else {
                showView('claim');
            }
        } catch (err) {
            console.error("Auth fetch error:", err);
            // Nödåtgärd om servern strular: Lägg till Demo-Kylen
            if (deviceSelect) deviceSelect.innerHTML = '<option value="TEST">Demo Kyl</option>';
        }
    } else {
        // --- UTLOGGAD ---
        activeDeviceId = null; 
        selectedStrains = []; 
        if (deviceSelect) deviceSelect.innerHTML = '<option value="">Logga in för att se enheter</option>';
        
        if (soulLoginPrompt) soulLoginPrompt.style.display = 'block';
        showView('soul');
    }
});

// ==========================================
// --- ARCANE LAB NAVIGATION & CONTENT ---
// ==========================================

// Innehållet för de olika modulerna
const academyModules = {
    'calc': `
        <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Pitch Calculator</h2>
        <div class="calc-container" style="margin: 0; padding: 0; background: transparent; border: none;">
            <div class="calc-inputs">
                <div class="input-group">
                    <label>Batch Volume (L)</label>
                    <input type="number" id="pitch-vol" value="20" oninput="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                </div>
                <div class="input-group">
                    <label>Gravity (OG)</label>
                    <input type="number" id="pitch-og" value="1.050" step="0.001" oninput="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                </div>
                <div class="input-group">
                    <label>Pitch Rate (M/ml/°P)</label>
                    <select id="pitch-rate" onchange="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                        <option value="0.75">0.75 (Standard Ale)</option>
                        <option value="1.0">1.0 (High Gravity Ale)</option>
                        <option value="1.5">1.5 (Standard Lager)</option>
                    </select>
                </div>
                <div class="input-group">
                    <label>Harvest Date</label>
                    <input type="date" id="pitch-date" onchange="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                </div>
            </div>

            <div class="calc-results" style="display: flex; gap: 15px; margin-top: 20px;">
                <div class="res-card" style="flex: 1; background: #111; padding: 20px; border-radius: 12px; border: 1px solid #333;">
                    <span class="res-label" style="display: block; font-size: 0.7rem; color: #888; font-weight: 800; margin-bottom: 5px;">CELLS NEEDED</span>
                    <span class="res-val" id="res-needed" style="display: block; font-size: 2rem; font-weight: 800; color: #fff;">--</span>
                    <span class="res-unit" style="font-size: 0.8rem; color: #666;">Billion cells</span>
                </div>
                <div class="res-card accent" style="flex: 1; background: #111; padding: 20px; border-radius: 12px; border: 1px solid #333; border-left: 4px solid var(--accent-color);">
                    <span class="res-label" style="display: block; font-size: 0.7rem; color: #888; font-weight: 800; margin-bottom: 5px;">EST. VIABILITY</span>
                    <span class="res-val" id="res-viability" style="display: block; font-size: 2rem; font-weight: 800; color: #fff;">--</span>
                    <span class="res-unit" id="res-days-old" style="font-size: 0.8rem; color: #666;">New</span>
                </div>
            </div>

            <div id="pitch-warning" class="warning-box" style="display:none; margin-top: 20px; background: rgba(255, 68, 68, 0.1); border: 1px solid #ff4444; color: #ff4444; padding: 15px; border-radius: 8px; font-size: 0.9rem; text-align: center; font-weight: 600;">
                ⚠️ Warning: Underpitching detected. Consider building a starter!
            </div>
        </div>
    `,
    'starters': `
        <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 5px; font-weight: 900; letter-spacing: -1px;">Yeast Starters 101</h2>
        <p style="color: var(--text-dim); margin-bottom: 30px; font-size: 0.95rem; line-height: 1.5;">Wake up your yeast and ensure a healthy, vigorous fermentation.</p>
        <p style="color: #888;"><em>Lesson content coming soon...</em></p>
    `,
    'agar': `
        <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 5px; font-weight: 900; letter-spacing: -1px;">Mastering Agar Plates</h2>
        <p style="color: var(--text-dim); margin-bottom: 30px; font-size: 0.95rem; line-height: 1.5;">Learn to pour, streak, and isolate pure yeast strains like a pro.</p>
        <div class="module-ingredients" style="margin-bottom: 30px;">
            <h3 style="color: var(--accent-color); margin-bottom: 15px; font-size: 1.1rem; font-weight: 800;">🧪 Ingredients & Gear</h3>
            <ul style="color: #ddd; line-height: 1.6; padding-left: 20px;">
                <li><strong>10g</strong> Light DME (Dry Malt Extract)</li>
                <li><strong>10g</strong> Agar-Agar powder</li>
                <li><strong>500ml</strong> Water (Distilled or RO)</li>
                <li>Borosilicate Flask (Erlenmeyer)</li>
                <li>Petri Dishes (Sterile) & Parafilm</li>
                <li>Pressure Cooker or Instant Pot</li>
            </ul>
        </div>
        <div class="module-protip" style="background: rgba(140, 198, 63, 0.1); border-left: 4px solid #8CC63F; padding: 15px; border-radius: 4px;">
            <strong style="color: #8CC63F; font-size: 1rem; display: block; margin-bottom: 5px;">💡 Pro-Tip from the Librarian:</strong>
            <span style="color: #ccc;">If you get too much condensation on the inside of the lids after pouring, try stacking the plates on top of each other while they cool. The heat from the top plates prevents condensation on the ones below!</span>
        </div>
    `,
    'wild': `
        <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 5px; font-weight: 900; letter-spacing: -1px;">Capturing Wild Yeast</h2>
        <p style="color: var(--text-dim); margin-bottom: 30px; font-size: 0.95rem; line-height: 1.5;">Hunt for local microbes and brew something truly unique.</p>
        <p style="color: #888;"><em>Lesson content coming soon...</em></p>
    `
};

function openAcademyModule(moduleId) {
    const overview = document.getElementById('lab-content-academy');
    const moduleView = document.getElementById('academy-module-view');
    const contentArea = document.getElementById('academy-module-content');

    // Kolla om modulen finns, annars visa ett felmeddelande
    contentArea.innerHTML = academyModules[moduleId] || '<p style="color: #ff4444;">Module not found.</p>';

    // Göm översikten och visa lektionen
    overview.style.display = 'none';
    moduleView.style.display = 'block';

    // Om det var kalkylatorn som öppnades, tvinga den att räkna direkt!
    if (moduleId === 'calc') {
        const dateInput = document.getElementById('pitch-date');
        if (dateInput && !dateInput.value) dateInput.valueAsDate = new Date();
        if (typeof calculatePitch === 'function') calculatePitch();
    }
}

function closeAcademyModule() {
    document.getElementById('academy-module-view').style.display = 'none';
    document.getElementById('lab-content-academy').style.display = 'block';
}

function toggleAcademyInfo(btn) {
    const infoBox = document.getElementById('academy-info-box');
    
    if (infoBox.style.display === 'none' || infoBox.style.display === '') {
        infoBox.style.display = 'block';
        btn.style.background = '#8CC63F';
        btn.style.color = '#111';
    } else {
        infoBox.style.display = 'none';
        btn.style.background = 'rgba(140, 198, 63, 0.15)';
        btn.style.color = '#8CC63F';
    }
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

// 2. Drick & Fyll på (Långtryck med symmetrisk fart och slump!)
function startDrain() {
        if (isAnimating) return;
        isAnimating = true;
        
        glass.classList.remove('anim-fill');
        
        // --- DEN MAGISKA RADEN ---
        // Tvingar webbläsaren att rita om (reflow) innan den tömmer
        void glass.offsetWidth; 
        
        glass.classList.add('anim-drain');

        // Tömningen i CSS tar nu 2000ms (2 sekunder)
        const drainDuration = 2000; 
        
        // Slumpa fram hur länge glaset ska stå tomt (mellan 0 och 5 sekunder)
        const randomEmptyWait = Math.floor(Math.random() * 5000); 
        
        // Total tid innan vi börjar hälla upp igen = tömningstid + väntetid
        const totalWaitBeforeRefill = drainDuration + randomEmptyWait;
        
        const refillAnimationDuration = 2000; // Påfyllningen tar också 2 sekunder

        // 1. Vänta tills glaset är tomt OCH den slumpmässiga pausen är över
        setTimeout(() => {
            glass.classList.remove('anim-drain');
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

// Här bestämmer vi VAD vi ska peka på, och VILKEN TEXT som ska visas
const demoSteps = [
    { selector: '.carboy-wrapper', text: 'Temp inside vessel' },
    { selector: '.air-floating', text: 'Ambient temp' },
    { selector: '.action-status', text: 'Cooling ambient temp' },
    { selector: '.progress-section', text: 'Fermentation completion' },
    { selector: '.phase-info', text: 'Current phase details' }
];

function startDemoTour() {
    const overlay = document.getElementById('demo-overlay');
    overlay.style.display = 'block';
    // Liten fördröjning för att CSS-övergången (fade in) ska triggas
    setTimeout(() => overlay.style.opacity = '1', 10); 
    
    currentDemoStep = -1;
    nextDemoStep();
}

function nextDemoStep() {
    // 1. Ta bort highlight från det förra elementet
    if (currentDemoStep >= 0 && currentDemoStep < demoSteps.length) {
        const prevEl = document.querySelector(demoSteps[currentDemoStep].selector);
        if (prevEl) prevEl.classList.remove('tour-highlight');
    }

    currentDemoStep++;

    const tooltip = document.getElementById('demo-tour-tooltip');
    const overlay = document.getElementById('demo-overlay');

    // 2. KONTROLL: Är touren slut?
    if (currentDemoStep >= demoSteps.length) {
        tooltip.style.display = 'none';
        overlay.style.opacity = '0';
        setTimeout(() => overlay.style.display = 'none', 300);
        
        // Final message (här kan vi bygga en snygg ruta senare, vi tar en alert så länge)
        setTimeout(() => {
            alert("Connect your YeastMaster unit to see your own live data!");
        }, 300);
        return;
    }

    // 3. Hitta nästa element i din HTML
    const targetEl = document.querySelector(demoSteps[currentDemoStep].selector);
    
    if (!targetEl) {
        console.warn("Tour: Hittade inte " + demoSteps[currentDemoStep].selector);
        nextDemoStep(); // Hittas den inte? Hoppa snabbt till nästa!
        return;
    }

    // 4. Lys upp elementet!
    targetEl.classList.add('tour-highlight');

    // 5. Scrolla mjukt så elementet alltid syns på mobilen
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // 6. Uppdatera texten i rutan
    document.getElementById('demo-tour-text').innerText = demoSteps[currentDemoStep].text;

    // 7. Beräkna positionen (Vänta 300ms så scrollen hinner klart först)
    setTimeout(() => {
        const rect = targetEl.getBoundingClientRect();
        
        // Räkna ut botten på elementet + 15px marginal neråt
        const topPos = rect.bottom + window.scrollY + 15; 
        
        // Hitta mitten på elementet i sidled
        const leftPos = rect.left + window.scrollX + (rect.width / 2);

        tooltip.style.display = 'block';
        tooltip.style.top = topPos + 'px';
        tooltip.style.left = leftPos + 'px';
        
        // Tvinga webbläsaren att spela inhopp-animationen igen
        tooltip.style.animation = 'none';
        void tooltip.offsetWidth; 
        tooltip.style.animation = 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
        
    }, 300); 
}

// Koppla klick-lyssnare när sidan laddas
document.addEventListener('DOMContentLoaded', () => {
    // Klicka var som helst på mörkret för att gå till nästa steg
    const overlay = document.getElementById('demo-overlay');
    if(overlay) overlay.addEventListener('click', nextDemoStep);
    
    // Klicka på "i"-knappen för att starta
    const startBtn = document.getElementById('start-demo-btn');
    if(startBtn) startBtn.addEventListener('click', startDemoTour);
});
