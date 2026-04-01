const yeastStrains = [
    // --- TORRJÄSTER (Dry) ---
    { id: "us-05", name: "SafAle US-05", origin: "USA", temp: "15-22°C", tags: ["Clean", "Crisp", "Dry"], desc: "Världens mest populära IPA-jäst. Neutral och pålitlig.", styles: "IPA, APA, Stout" },
    { id: "s-04", name: "SafAle S-04", origin: "UK", temp: "15-20°C", tags: ["Fruity", "Fast", "Dry"], desc: "Klassisk brittisk ale-jäst. Snabb jäsning och bra flockning.", styles: "English Pale Ale, Porter" },
    { id: "w-34-70", name: "Saflager W-34/70", origin: "Germany", temp: "9-15°C", tags: ["Clean", "Lager", "Dry"], desc: "Den berömda Weihenstephan-stammen för krispiga lageröl.", styles: "Pilsner, Helles, Märzen" },
    { id: "be-256", name: "SafAle BE-256", origin: "Belgium", temp: "15-25°C", tags: ["Spicy", "High ABV", "Dry"], desc: "För starka belgiska öl. Ger estrar av torkad frukt.", styles: "Abbey, Dubbel, Tripel" },
    { id: "wb-06", name: "SafAle WB-06", origin: "Germany", temp: "18-24°C", tags: ["Banana", "Clove", "Dry"], desc: "Specialjäst för veteöl. Framhäver fenoliska toner.", styles: "Hefeweizen, Witbier" },
    { id: "verdant", name: "Lallemand Verdant", origin: "UK", temp: "18-23°C", tags: ["Apricot", "Hazy", "Dry"], desc: "Perfekt för NEIPA. Ger toner av aprikos och fyllig munkänsla.", styles: "NEIPA, Hazy IPA" },
    { id: "voss", name: "Lallemand Voss Kveik", origin: "Norway", temp: "25-40°C", tags: ["High Temp", "Orange", "Dry"], desc: "Traditionell kveik. Kan jäsa extremt varmt utan bismaker.", styles: "Farmhouse, IPA, Pale Ale" },
    { id: "nottingham", name: "Lallemand Nottingham", origin: "UK", temp: "10-22°C", tags: ["Versatile", "Dry Finish", "Dry"], desc: "Hög utjäsning och mycket neutral profil. En riktig arbetshäst.", styles: "All Ales, Cider" },
    { id: "belle-saison", name: "Lallemand Belle Saison", origin: "Belgium", temp: "15-35°C", tags: ["Dry Finish", "Spicy", "Dry"], desc: "Skapar mycket torra och peppriga Saison-öl.", styles: "Saison, Farmhouse" },
    { id: "t-58", name: "SafAle T-58", origin: "Belgium", temp: "15-24°C", tags: ["Peppery", "Ester", "Dry"], desc: "Känd för sina peppriga och kryddiga estrar.", styles: "Belgian Ale" },
    { id: "s-23", name: "Saflager S-23", origin: "Germany", temp: "9-15°C", tags: ["Fruity", "Lager", "Dry"], desc: "En lagerjäst som ger lite mer fruktiga toner än 34/70.", styles: "Lager, Bock" },
    { id: "diamond", name: "Lallemand Diamond", origin: "Germany", temp: "10-15°C", tags: ["Pilsner", "Clean", "Dry"], desc: "Klassisk tysk lagerjäst för eleganta profil.", styles: "German Pilsner" },
    { id: "s-33", name: "SafAle S-33", origin: "UK", temp: "15-22°C", tags: ["Robust", "All-round", "Dry"], desc: "Ger en robust och stabil jäsning.", styles: "Trappist, Stout" },
    { id: "novalager", name: "Lallemand NovaLager", origin: "Modern", temp: "10-20°C", tags: ["Hybrid", "Fast", "Dry"], desc: "En modern hybrid-lagerjäst som jäser snabbare.", styles: "Modern Lager" },

    // --- FLYTANDE JÄSTER (Liquid) ---
    { id: "wlp001", name: "WLP001 California Ale", origin: "USA", temp: "20-23°C", tags: ["Classic", "IPA", "Liquid"], desc: "White Labs flaggskepp. Mycket ren profil som låter humlen tala.", styles: "West Coast IPA" },
    { id: "wlp300", name: "WLP300 Hefeweizen", origin: "Germany", temp: "18-21°C", tags: ["Classic", "Wheat", "Liquid"], desc: "Den ultimata veteölsjästen för banankänsla.", styles: "Weissbier" },
    { id: "wlp002", name: "WLP002 English Ale", origin: "UK", temp: "18-20°C", tags: ["Sweet", "Malty", "Liquid"], desc: "Lämnar lite restsötma och flockar som sten.", styles: "Bitter, Stout" },
    { id: "wlp500", name: "WLP500 Trappist", origin: "Belgium", temp: "18-22°C", tags: ["Fruity", "Abbey", "Belgian", "Liquid"], desc: "Från ett av de sex belgiska trappistbryggerierna.", styles: "Tripel, Quad" },
    { id: "wlp066", name: "WLP066 London Fog", origin: "UK", temp: "18-22°C", tags: ["Juicy", "Creamy", "Liquid"], desc: "Standardjästen för juice-liknande NEIPA.", styles: "NEIPA" },
    { id: "wlp800", name: "WLP800 Pilsner Lager", origin: "Czech", temp: "10-13°C", tags: ["Crisp", "Floral", "Liquid"], desc: "Traditionell tjeckisk jäst för äkta pilsner.", styles: "Bohemian Pilsner" },
    { id: "wyeast-1968", name: "Wyeast 1968", origin: "UK", temp: "18-22°C", tags: ["ESB", "High Flocc", "Liquid"], desc: "London ESB Ale. Extrem flockulering och grym maltprofil.", styles: "ESB, English Pale Ale" },
    { id: "wlp920", name: "WLP920", origin: "Germany", temp: "10-13°C", tags: ["Lager", "Malty", "Liquid"], desc: "Old Bavarian Lager. Perfekt för maltiga sydtyska lagers.", styles: "Oktoberfest, Bock" },
    { id: "imperial-b45", name: "Imperial B45", origin: "Belgium", temp: "20-25.5°C", tags: ["Fruity", "Spicy", "Liquid"], desc: "Gnome! Päronestrar och klassisk belgisk värme.", styles: "Belgian Strong Ale" },
    { id: "wyeast-1084", name: "Wyeast 1084", origin: "Ireland", temp: "17-22°C", tags: ["Malty", "Dry Finish", "Liquid"], desc: "Irish Ale. Arbetshästen från Dublin. Fantastisk till mörka öl.", styles: "Dry Stout, Red Ale" },
    { id: "wyeast-3944", name: "Wyeast 3944", origin: "Belgium", temp: "16-24°C", tags: ["Wheat", "Citrus", "Liquid"], desc: "Belgian Witbier. Disig med toner av nejlika och apelsin.", styles: "Witbier" },
    { id: "wlp833", name: "WLP833", origin: "Germany", temp: "9-13°C", tags: ["Lager", "Bock", "Liquid"], desc: "German Bock Lager. Kungen av maltighet från Ayinger.", styles: "Bock, Doppelbock" },
    { id: "wlp007", name: "WLP007", origin: "UK", temp: "18-21°C", tags: ["Dry Finish", "Fast", "Liquid"], desc: "Dry English Ale. Målsökande missil som jäser ut torrt och snabbt.", styles: "IPA, Stout" },
    { id: "wyeast-1318", name: "Wyeast 1318", origin: "UK", temp: "18-22°C", tags: ["Juicy", "Hazy", "Liquid"], desc: "London Ale III. Originalet för disiga och moderna NEIPAs.", styles: "NEIPA, Pale Ale" },
    { id: "wyeast-2565", name: "Wyeast 2565", origin: "Germany", temp: "13-21°C", tags: ["Kölsch", "Crisp", "Liquid"], desc: "Kölsch. Hybrid-jäst som ger extremt ren och vinös profil.", styles: "Kölsch, Altbier" },
    { id: "wlp095", name: "WLP095", origin: "USA", temp: "19-21°C", tags: ["Peach", "Juicy", "Liquid"], desc: "Burlington Ale (Conan). Maxar stenfrukt, persika och aprikos.", styles: "NEIPA, IPA" }
];

document.addEventListener('DOMContentLoaded', () => {
    // Tvinga INGEN till login! 
    // Vi låter dem börja på SOUL-vyn (där glaset fylls) eller den flik de klickat på.
 // Berätta för mobilens bakåtknapp att "soul" är startplatsen
    history.replaceState({ view: 'soul' }, null, "");
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

// Tvinga webbläsaren att sluta lägga sig i scrollningen vid bakåt-klick!
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Vi skapar en variabel för att hålla koll på var vi VAR någonstans
let currentActiveView = 'soul'; 

// Lägg till 'pushToHistory = true' i parentesen!
function showView(viewName, pushToHistory = true) {
    const views = {
        login: document.getElementById('login-container'),
        claim: document.getElementById('claim-container'),
        soul: document.getElementById('view-soul'),
        library: document.getElementById('view-library'),
        librarian: document.getElementById('view-librarian'),
        lab: document.getElementById('view-lab'),
        dashboard: document.getElementById('view-dashboard'),
        settings: document.getElementById('view-settings'),
        about: document.getElementById('view-about')
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
  // --- UPPDATERA MENYN ---
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        const clickEvent = item.getAttribute('onclick');
        if (clickEvent && clickEvent.includes(`'${viewName}'`)) {
            item.classList.add('active');
        }
    });

// --- NY FIX: Brutal scroll till toppen ---
    setTimeout(() => {
        // Hoppa direkt till toppen utan 'smooth' för att undvika konflikter
        window.scrollTo(0, 0);
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }, 10);
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

// Denna behövs för att slutföra inloggningen efter en redirect (på mobil)
auth.getRedirectResult().catch((error) => {
    console.error("Redirect-fel:", error);
});


async function updateDashboard() {
    const demoBtn = document.getElementById('start-demo-btn');
const user = auth.currentUser;


// --- NY LOGIK: VÄNTA PÅ AUTH ---
    // Om Firebase inte har bestämt sig än om användaren är inloggad, gör ingenting.
    // Det förhindrar att Demon ritas upp i onödan.
    if (user === undefined) return; 

    // Om vi INTE är inloggade alls, DÅ kör vi demo direkt
    if (!user && !activeDeviceId) {
        renderDemoDashboard();
        return; 
    }

    if (demoBtn) demoBtn.style.display = 'none';

    try {
        const response = await fetch(`${API_BASE}/data?device_id=${activeDeviceId}`);
        const data = await response.json();

        if (data && data.length > 0) {
            // --- KRITISK FIX: Sortera datan efter tid direkt ---
            const sortedData = data.sort((a, b) => new Date(a.time) - new Date(b.time));
            
            // Använd sortedData för att plocka ut det SENASTE värdet
            const latest = sortedData[sortedData.length - 1];
            console.log("Senaste sorterade datan:", latest);

            // 1. Temperaturer
            const displayTemp = convertTemp(latest.temp).toFixed(1) + '°' + currentTempUnit;
            document.getElementById('temp-beer-val').innerText = displayTemp;
            document.querySelector('.beer-temp').setAttribute('data-text', displayTemp);
            document.getElementById('air-temp-val').innerText = convertTemp(latest.air_temp).toFixed(1) + '°' + currentTempUnit;

            // 2. Info
            document.getElementById('strain-val').innerText = (latest.strain || "IRISH ALE").toUpperCase();
            document.getElementById('profile-val').innerText = latest.profile || "LOW ESTER";
            
            const action = (latest.action || "IDLE").toUpperCase();
            document.getElementById('action-val').innerText = action;

            // 3. Pil-logik
            const arrow = document.getElementById('status-arrow');
            if (action === "COOLING") {
                arrow.innerText = "▼";
                arrow.style.color = "#0088ff"; 
                arrow.style.visibility = "visible";
                arrow.classList.add('blink-active');
            } else if (action === "HEATING") {
                arrow.innerText = "▲";
                arrow.style.color = "#ff4444"; 
                arrow.style.visibility = "visible";
                arrow.classList.add('blink-active');
            } else {
                arrow.style.visibility = "hidden";
                arrow.classList.remove('blink-active');
            }

            // 4. Status & Fas-dagar
            document.getElementById('status-text').innerText = latest.status.toUpperCase();
            
            let phaseDay = 0;
            if (latest.phase_day !== undefined) {
                phaseDay = latest.phase_day;
            } else {
                let phaseStartTime = latest.time; 
                for (let i = sortedData.length - 1; i >= 0; i--) {
                    if (sortedData[i].status !== latest.status) {
                        phaseStartTime = sortedData[i + 1].time;
                        break;
                    }
                    if (i === 0) phaseStartTime = sortedData[0].time;
                }
                const msInADay = 1000 * 60 * 60 * 24;
                phaseDay = (latest.time && phaseStartTime) ? (new Date(latest.time) - new Date(phaseStartTime)) / msInADay : 0;
            }

            // 5. Progress
            const currentDay = latest.day || 0;
            const targetDays = 14; 
            const percent = Math.min((currentDay / targetDays) * 100, 100).toFixed(0);

            const dayValEl = document.getElementById('day-val');
            const phaseDayValEl = document.getElementById('phase-day-val');

            if (dayValEl) dayValEl.innerText = formatDaysToHuman(currentDay);
            if (phaseDayValEl) phaseDayValEl.innerText = formatDaysToHuman(phaseDay);
            document.getElementById('progress-percent').innerText = percent + "%";
            document.getElementById('progress-fill').style.width = percent + "%";

            const targetTemp = latest.target_temp || 0; 
            const targetTempElement = document.getElementById('target-temp-val');
            if (targetTempElement) {
                targetTempElement.innerText = convertTemp(targetTemp).toFixed(1) + '°' + currentTempUnit;
            }
            
            // Skicka den sorterade datan till grafen
            updateChart(sortedData);
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
    
    // --- MAGISKA FIXEN: Om en graf redan finns (demo eller gammal live), DÖDA DEN! ---
    if (window.beerChart && typeof window.beerChart.destroy === 'function') {
        window.beerChart.destroy();
    }

    // Sortera datan för säkerhets skull
    data.sort((a, b) => new Date(a.time) - new Date(b.time));
    
    let themeAccent = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
    if (!themeAccent) themeAccent = '#f39c12'; 

    const gradient = ctx.createLinearGradient(0, 0, 0, 120);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)'); 
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');   

    const labels = data.map(d => new Date(d.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const temps = data.map(d => convertTemp(Number(d.temp) || 0));

    // Skapa ALLTID en helt ny graf-instans
    window.beerChart = new Chart(ctx, {
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
            animation: { duration: 400 }, // Lite mjukare övergång
            scales: {
                x: { 
                    ticks: { color: '#666', maxTicksLimit: 5, font: { family: 'Lexend', size: 10 } },
                    grid: { display: false } 
                },
                y: { 
                    ticks: { 
                        color: '#bbbbbb', 
                        font: { family: 'Lexend', size: 10 },
                        callback: (value) => value.toFixed(1) + '°'
                    }, 
                    grid: { color: 'rgba(255, 255, 255, 0.1)' } 
                }
            },
            plugins: { 
                legend: { display: false },
                tooltip: { enabled: true }
            }
        }
    });
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
        const tagMatch = s.tags && s.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        const styleMatch = s.styles && s.styles.toLowerCase().includes(searchTerm);
        
        return nameMatch || tagMatch || styleMatch;
    });

    filtered.forEach(yeast => {
        const isSelected = selectedStrains.includes(yeast.id);
        const isCustom = yeast.isCustom ? 'custom-profile' : ''; 
        
        const card = document.createElement('div');
        // Lägger till "selected" om den är vald, så CSS kan rita den tjocka ramen
        card.className = `yeast-card ${isCustom} ${isSelected ? 'selected' : ''}`;
        
        const deleteBtn = yeast.isCustom ? 
            `<div class="delete-custom-btn" onclick="event.stopPropagation(); deleteCustomProfile('${yeast.name}')">×</div>` 
            : '';

        // HELT REN HTML: Ingen stjärna, bara krysset (om custom) och rubriken!
        card.innerHTML = `
            ${deleteBtn}
            <h3>${yeast.name}</h3>
        `;

        // --- TIMERS OCH LOGIK ---
        let clickTimer = null;
        let touchTimer = null;
        let isLongPress = false;

        // 1. HOVER (PC - Tooltip)
        card.onmousemove = (e) => {
            if (tooltip) {
                tooltip.style.display = "block";
                tooltip.style.left = (e.clientX + 15) + "px";
                tooltip.style.top = (e.clientY + 15) + "px";
                tooltip.innerHTML = `<strong>${yeast.name}</strong><br>${formatTempText(yeast.temp)}<br>${yeast.tags.join(', ')}`;
            }
        };
        card.onmouseleave = () => { if(tooltip) tooltip.style.display = "none"; };

        // 2. ENKELKLICK (Välj / Avvälj)
        card.onclick = () => {
            if (isLongPress) return; // Ignorera om vi just gjorde ett långtryck
            
            if (clickTimer) clearTimeout(clickTimer);
            clickTimer = setTimeout(() => {
                // Denna funktion väljer/avväljer jästen nu!
                toggleFavorite(yeast.id);
            }, 250); 
        };

        // 3. DUBBELKLICK (PC - Läs mer i Modal)
        card.ondblclick = () => {
            clearTimeout(clickTimer); // Avbryt enkelklicket
            openYeastModal(yeast);
        };

        // 4. LÅNGKLICK (Mobil - Läs mer i Modal)
        card.addEventListener('touchstart', () => {
            isLongPress = false;
            touchTimer = setTimeout(() => {
                isLongPress = true; // Flaggas som långtryck
                openYeastModal(yeast);
            }, 500); // 500ms känns oftast lite snärtigare på mobil
        }, {passive: true});

        card.addEventListener('touchend', () => clearTimeout(touchTimer));
        
        // Avbryt långtrycket (och förhindra felklick) om man börjar scrolla
        card.addEventListener('touchmove', () => {
            clearTimeout(touchTimer);
            isLongPress = true; 
        }, {passive: true});

        // Lägg till kortet i gridet
        grid.appendChild(card);
    }); 
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
    // 1. Kolla om vi har en "pop-up" öppen (Detaljvyn eller Info-modalen)
    const detail = document.getElementById('yeast-detail-view');
    const modal = document.getElementById('yeast-info-modal');
    
    // Stäng detaljvyn om den är öppen
    if (detail && detail.style.display === "block") {
        detail.style.display = "none";
        return; // Stoppa koden här så vi inte byter flik i bakgrunden
    }
    
    // Stäng modaler (inforutor) om de är öppna
    if (modal && modal.style.display === "flex") {
        modal.style.display = "none";
        document.body.style.overflow = ''; 
        return; // Stoppa koden här
    }

    // 2. Vilken huvudflik ska vi backa till? (Läs historiken/brödsmulan)
    if (event.state && event.state.view) {
        // Eftersom vi hanterar 'yeast-detail' ovanför, vill vi inte skicka det till showView
        if (event.state.view !== 'yeast-detail') {
            // False betyder: "Gör ingen NY brödsmula, vi backar ju!"
            showView(event.state.view, false);
        }
    } else {
        // Om användaren på något sätt backar förbi den allra första sidan, tvinga dem till Home
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

    // FÖRSTÖR DEN GAMLA GRAFEN INNAN VI RITAR EN NY
    if (typeof labChart !== 'undefined' && labChart !== null) {
        labChart.destroy();
    }

    // --- LIVE-KOLL AV TEMAT ---
    const isLightMode = document.body.classList.contains('light-mode');
    const isMobile = window.innerWidth <= 768;

    // --- FÄRGER OCH VARIABLER ---
    const themeAccent = '#f4c95d'; 
    const pointFill = '#888888';   
    const lineWidth = isLightMode ? 2 : 3; 
    
    const dotSize = isMobile ? 8 : 5;         
    const hoverSize = isMobile ? 12 : 8;      
    const touchMagnet = isMobile ? 25 : 10;   

    // GRADIENT (Måste definieras här inne, annars finns den inte!)
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, isLightMode ? 'rgba(244, 201, 93, 0.15)' : 'rgba(244, 201, 93, 0.4)'); 
    gradient.addColorStop(1, 'rgba(244, 201, 93, 0.0)');

    // AXEL-FÄRGER
    const gridColor = isLightMode ? '#ebebeb' : '#222222';
    const gridBorderColor = isLightMode ? '#cccccc' : '#444444'; // För den yttre ramen
    const textColor = isLightMode ? '#666666' : '#888888';

    // RITA GRAFEN
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
                    borderColor: ctx => {
                        const isLightNow = document.body.classList.contains('light-mode');
                        return (ctx.p0DataIndex === 1 || ctx.p0DataIndex === 3) ? (isLightNow ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.3)') : themeAccent;
                    }
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
                // --- NYHET: En svagare och elegantare Y-axel ---
                y: {
                    type: 'linear',
                    min: currentTempUnit === 'F' ? 28 : -2,
                    max: currentTempUnit === 'F' ? 104 : 40,
                    grid: { 
                        // BYT UT FÄRGEN: rgba(255, 255, 255, 0.08) är en extremt svag vit dimma
                        color: 'rgba(255, 255, 255, 0.08)', // 92% genomskinligt grid!
                        borderColor: gridBorderColor,
                        tickLength: 8 
                    },
                    ticks: { 
                        color: '#888888', // Gör siffrorna gråa istället för kritvita
                        font: { family: 'Lexend', weight: '600' },
                        padding: 6 
                    },
                    title: { display: true, text: `Temp (°${currentTempUnit})`, color: textColor, font: { family: 'Lexend', weight: '800' } }
                },
                // --- NYHET: Samma svaga grid även på X-axeln ---
                x: {
                    type: 'linear',
                    // ... (behåll min/max för x som förut) ...
                    grid: { 
                        color: 'rgba(255, 255, 255, 0.08)' // Samma dimmiga färg
                    },
                    ticks: { 
                        color: '#888888', // Gråa siffror här med
                        font: { family: 'Lexend', weight: '600' }
                    },
                    title: { display: true, text: 'Days', color: textColor, font: { family: 'Lexend', weight: '800' } }
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

                const isLightNow = document.body.classList.contains('light-mode');

                ctx.save();
                ctx.font = '800 10px "Lexend", sans-serif';
                ctx.fillStyle = isLightNow ? '#555555' : 'rgba(255, 255, 255, 0.5)'; 
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

    // --- DRAG LOGIKEN FORTSÄTTER HÄR NERE ---
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

            xVal = Math.max(0, Math.round(xVal * 2) / 2);
            const yMin = currentTempUnit === 'F' ? 28 : -2;
            const yMax = currentTempUnit === 'F' ? 104 : 40;
            yVal = Math.max(yMin, Math.min(yMax, Math.round(yVal)));

            const minGap = 0.5;

            if (dragIndex === 0) xVal = 0; 
            else if (dragIndex === 1) xVal = Math.max(0, Math.min(xVal, profilePoints[2].x - minGap));
            else if (dragIndex === 2) xVal = Math.max(profilePoints[1].x + minGap, Math.min(xVal, profilePoints[3].x));
            else if (dragIndex === 3) xVal = Math.max(profilePoints[2].x, Math.min(xVal, profilePoints[4].x - minGap));
            else if (dragIndex === 4) xVal = Math.max(profilePoints[3].x + minGap, Math.min(xVal, profilePoints[5].x));
            else if (dragIndex === 5) xVal = Math.max(profilePoints[4].x, xVal);

            if (dragIndex === 0 || dragIndex === 1) {
                yVal = Math.min(yVal, profilePoints[2].y);
                yVal = Math.max(yVal, profilePoints[4].y);
            } 
            else if (dragIndex === 2 || dragIndex === 3) yVal = Math.max(yVal, profilePoints[0].y);
            else if (dragIndex === 4 || dragIndex === 5) yVal = Math.min(yVal, profilePoints[0].y);

            profilePoints[dragIndex] = { x: xVal, y: yVal };

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

const yeastDescriptions = {
    // ==========================================
    // --- DRY YEASTS (Torrjäst) ---
    // ==========================================
    "us-05": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle US-05 (American Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP001 (White Labs), Wyeast 1056, M44
        </p>
        <p>The uncrowned king of the brewing world when it comes to clean, crisp American Ales and West Coast IPAs. It is an extremely reliable workhorse that puts malt and hops in the driver's seat.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Temperature Range (15-22 °C)</h4>
        <p>To get that iconic, razor-sharp American profile, we want to start around 18 °C. If we go too hot, it can throw off peach esters, which we usually want to avoid in a clean IPA.</p>
        <h4 style="margin-top: 15px; color: #ccc;">2. Medium Flocculation (Patience!)</h4>
        <p>US-05 likes to hover in the beer for quite a while. This is great for fermentation (it finishes dry and efficient), but it means the beer can remain hazy for a long time if we don't crash it hard at the end.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard / Low Ester:</strong> Nails the temp at 18 °C for an extremely clean job. Finishes off with a diacetyl rest at 21 °C to ensure every last sugar is eaten before a hard cold crash.</li>
            <li><strong style="color: #fff;">West Coast Crisp:</strong> Starts cool at 18°C for maximum cleanliness, then aggressively ramps to 22°C. Leaves a bone-dry finish where your hops will shine.</li>
            <li><strong style="color: #fff;">Pseudo-Lager:</strong> Ferments at the absolute bottom of the strain's tolerance (15°C). Suppresses all ale characteristics, making it perfect for a mock-Pilsner.</li>
        </ul>
    `,

    "s-04": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle S-04 (English Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP007 (White Labs), Wyeast 1098
        </p>
        <p>The British sprinter! Loved for its ability to build fantastic fruity esters and its brutal speed. The first choice for Bitters, Porters, Stouts, and fast Pale Ales.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Temperature Range (15-20 °C)</h4>
        <p>S-04 loves to create esters (marmalade, dark berries). But if allowed to go too hot initially, it turns into an uncontrolled fruit bomb. Start strictly at 18 °C for elegance.</p>
        <h4 style="margin-top: 15px; color: #ccc;">2. Extreme Flocculation (The Brick)</h4>
        <p>When S-04 considers itself done, it falls to the bottom and forms a yeast cake so firm you can almost cut it. We must heat it up before it goes to sleep!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard / Fruity:</strong> Starts like a freight train at 18°C to create controlled fruitiness, then raises to 21°C. This heat bump wakes the yeast to clean up butterscotch before the cold crash.</li>
            <li><strong style="color: #fff;">Dark & Malty (18°C):</strong> Locked steadily at 18°C. This suppresses the fruitier esters just enough to let coffee and chocolate notes take center stage in a Stout or Porter.</li>
        </ul>
    `,

    "w-34-70": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Saflager W-34/70 (German Lager)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP830 (White Labs), Wyeast 2124
        </p>
        <p>The king of bottom-fermenting! This famous strain from the Weihenstephan brewery in Germany is probably the most used lager yeast in the world. It delivers that iconic, crisp, and clean flavor profile we love in a Pilsner or Helles.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The cold is your friend (9-15 °C)</h4>
        <p>W-34/70 is a true winter swimmer. By fermenting it at the bottom of its tolerance (around 10-12 °C), you suppress the production of fruity esters and sulfur, giving the beer its clean character.</p>
        <h4 style="margin-top: 15px; color: #ccc;">2. Butterscotch warning (Diacetyl)</h4>
        <p>Because it works cold and slow, lager yeast is notorious for leaving diacetyl (tastes like butter/butterscotch) behind. A significant temperature increase at the end is not a tip – it's a requirement!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Traditional Lager:</strong> Holds firmly at 11°C so the yeast works undisturbed. Then pushes to 16°C to clean up the butterscotch before a massive 28-day cold lagering phase.</li>
            <li><strong style="color: #fff;">Quick Lager:</strong> The modern approach. Pitches at 13°C for faster yeast growth, finishes the cleanup with a warm Diacetyl Rest by day 10, cutting the lagering time in half.</li>
            <li><strong style="color: #fff;">Warm/Brulosophy:</strong> The infamous warm-fermented lager hack! Runs at ale temperatures (19°C). W-34/70 handles heat surprisingly well, finishing fast and clean without off-flavors.</li>
        </ul>
    `,

    "be-256": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle BE-256 (The Abbey Machine)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP530, Wyeast 3787 (Similar Trappist character)
        </p>
        <p>Formerly known as "Abbaye". This is a fast and brutal Belgian yeast that loves high-gravity worts. Perfect for dark, malty Belgians like Dubbel, Tripel, and Quadrupel. It attenuates quickly and creates a fantastic symphony of dark fruit.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Fast and strong (15-25 °C)</h4>
        <p>It tolerates very high alcohol (up to 11%). But if you start it too hot, it can throw off unwanted solvent notes (fusels). The key is a strict start that is later let loose.</p>
        <h4 style="margin-top: 15px; color: #ccc;">2. Esters of dried fruit</h4>
        <p>It is known for bringing out plum, fig, and raisin, which marries incredibly well with caramel malts and Belgian candi syrup.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Belgian Strong:</strong> Starts cool at 18 °C. The yeast is aggressive initially, so we hold the beast back! Then we let the machine ramp up towards 24 °C to stress out the complex Belgian esters before crashing.</li>
        </ul>
    `,

    "wb-06": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle WB-06 (The Wheat Beer Master)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP380, M20 (Bavarian Wheat characteristics)
        </p>
        <p>The classic German Weissbier yeast in dry form! Do you want a cloudy, golden Hefeweizen smelling of foam banana and clove? Then this is the one to use.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. You are behind the wheel (18-24 °C)</h4>
        <p>In wheat beers, the yeast IS the flavor. Low temperatures (18-19 °C) yield lots of phenols (pepper and clove). High temperatures (22-24 °C) yield extreme amounts of isoamyl acetate (banana). You choose!</p>
        <h4 style="margin-top: 15px; color: #ccc;">2. It refuses to flocculate</h4>
        <p>A German Weissbier *should* be cloudy. WB-06 is designed to remain in suspension, giving that nice, milky appearance in the glass.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Banana Bomb:</strong> Run it hot! Starts at 22°C and ramps to 23°C to unlock massive amounts of isoamyl acetate (foam banana) and ensure complete attenuation.</li>
            <li><strong style="color: #fff;">Balanced Clove:</strong> Held steadily lower (18-20°C). The banana takes a back seat, allowing the spicy clove and wheat malt character to dominate.</li>
        </ul>
    `,

    "verdant": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Verdant IPA (The Juice Machine)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1318 (London Ale III)
        </p>
        <p>Developed alongside Verdant Brewing Co., this is the ultimate yeast for NEIPA and Hazy IPA. It produces massive amounts of apricot and vanilla esters that back up modern hops perfectly.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Master of Biotransformation</h4>
        <p>This yeast is phenomenal at taking dry hops during active fermentation and chemically rebuilding the hop oils into even fruitier flavors.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Juicy NEIPA:</strong> Starts safely at 19 °C to build a solid, fruity base without fusel alcohols. Then the temperature wanders up to 22 °C to stress out the final juicy esters.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: It flocculates rather poorly, which is EXACTLY what we want to retain "The Haze".</i></p>
    `,

    "voss": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Voss Kveik (The Viking)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP4000, Omega OYL-061
        </p>
        <p>The Norwegian powerhouse that breaks absolutely all rules we learned about brewing. It ferments scorching hot, furiously fast, and leaves clean, light orange notes behind.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Extreme Heat (30-40 °C)</h4>
        <p>While other yeasts would have died or created undrinkable rocket fuel at 38 °C, Voss thrives there. It needs no fridge, just a heat mat and lots of yeast nutrients!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Hot & Fast:</strong> Ferments at a scorching 38°C! Fermentation is extremely violent, throws massive orange esters, and finishes completely in just 3-4 days before chilling.</li>
            <li><strong style="color: #fff;">Clean Pseudo:</strong> Dropped down to "normal" summer temperatures (25-28°C). Ferments slower but leaves a shockingly clean profile without the intense citrus notes.</li>
        </ul>
    `,

    "nottingham": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Nottingham (The Workhorse)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP039, M36
        </p>
        <p>Perhaps the most versatile yeast ever cultivated. "Notty" doesn't care what you throw at it. Imperial Stout? Yep. Cider? Absolutely. IPA? No problem. It is extremely neutral, reliable, and cleans up after itself exemplary.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Temperature Chameleon (10-22 °C)</h4>
        <p>In the upper range, it behaves like a clean ale yeast. Pull it down to 12-14 °C? Then it basically becomes a cheat-code lager yeast for incredibly crisp pseudo-lagers!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard Ale:</strong> Holds 18 °C for a clean and fast primary fermentation, then ramps up to 20-21 °C. Even workhorses need a Diacetyl Rest to hide the butterscotch.</li>
            <li><strong style="color: #fff;">Pseudo Lager:</strong> Pushes "Notty" to its thermal floor at 14°C. At this temperature, it stops acting like an ale yeast and produces an incredibly crisp, clean pseudo-lager without the sulfur.</li>
        </ul>
    `,

    "belle-saison": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Belle Saison (The Dry Belgian)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> Wyeast 3711 (French Saison)
        </p>
        <p>Saison yeast is wild, untamed, and fantastic. Designed to eat up every single sugar it finds and leave a bone-dry, peppery beer behind.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Diastaticus (Eats everything)</h4>
        <p>This yeast carries a gene (STA1) that allows it to break down complex sugars. The result? A beer that can ferment down to 1.000 FG.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Dry & Peppery:</strong> Starts around 20 °C so fermentation takes hold without becoming solvent-like. Then we take the limiters off! It free-rises all the way up to 28 °C to build max flavor profile.</li>
        </ul>
    `,

    "t-58": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle T-58 (The Peppery Companion)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP570 (Similar spice profile)
        </p>
        <p>A truly unique, ester- and phenol-driven yeast. If BE-256 is dark fruit, then T-58 is black pepper and spice. Often used in complex Belgian ales or Trappist beers.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Leaves residual sweetness (15-24 °C)</h4>
        <p>T-58 doesn't attenuate as hard as many other Belgians. This leaves some residual sweetness and body in the beer, balancing the sharp, peppery notes.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Spicy Belgian:</strong> Starts at 18 °C. The phenols will be produced in masses anyway. Then ramps up slowly to 22 °C to round off the flavors and ensure fermentation doesn't stall too early.</li>
        </ul>
    `,

    "s-23": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Saflager S-23 (The Fruity Bohemian)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP802, Wyeast 2278 (Czech/Bohemian roots)
        </p>
        <p>Originating from the famous VLB institute in Berlin, this is the wild child of lager yeasts. While W-34/70 is laser-focused and clean, S-23 is loved for producing slightly more fruity and estery notes, making it fantastic for Bohemian Pilsners or Baltic Porters.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Ester Profile (9-15 °C)</h4>
        <p>If you ferment this at the warmer end of the lager spectrum (13-15 °C), it will give off beautiful, subtle notes of apple and pear that play incredibly well with spicy Saaz hops.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Crisp German (10 °C):</strong> Keep it cold and steady for a traditional, clean profile. D-rest at 15 °C on Day 10.</li>
            <li><strong style="color: #fff;">Bohemian Fruit / Fruity Lager:</strong> Start slightly warmer (12-13°C) to unlock those unique S-23 esters. Perfect for a malt-forward Czech amber.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: S-23 can sometimes struggle to finish the last gravity points. A solid, warm Diacetyl Rest is crucial to help it cross the finish line.</i></p>
    `,

    "s-33": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle S-33 (The Body Booster)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP006 (Bedford British)
        </p>
        <p>Often misunderstood, S-33 is a secret weapon. It is incapable of eating complex malt sugars (maltotriose negative), which means it will ALWAYS leave your beer thick, full-bodied, and slightly sweet.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Not just for Belgians</h4>
        <p>Despite being labeled a Belgian ale yeast, it produces very little phenols (spice). Instead, it's increasingly used in Hazy IPAs and Milk Stouts purely for its ability to build an incredible mouthfeel.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Thick Ale (18 °C):</strong> Keep it cool to minimize esters. You will end up with a luscious, thick dark beer with great foam retention. Or use it as a cheat code for thick NEIPAs!</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: Don't panic if your Final Gravity is high (e.g., 1.020). S-33 simply cannot ferment it any further. It's done!</i></p>
    `,

    "diamond": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Diamond (The Munich Master)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP830, Wyeast 2124 (Weihenstephan lineage)
        </p>
        <p>A true German lager yeast originating from the Doemens Institute in Munich. Diamond is renowned for its robust nature and ability to produce incredibly clean, crisp, and authentic German lagers without the fuss.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Pristine and Professional</h4>
        <p>While some lager yeasts can throw sulfur (rhino farts) during fermentation, Diamond is generally very well-behaved and produces a highly polished beer that lets the Pilsner malt shine.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Clean Lager / Munich Crisp:</strong> The traditional way. Hold 10 °C for 7-10 days, followed by a strict Diacetyl Rest at 16 °C.</li>
            <li><strong style="color: #fff;">Fast Helles (14 °C):</strong> Diamond handles slightly warmer temperatures remarkably well. Run it at 14 °C to cut your fermentation time in half!</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: Diamond has fantastic attenuation. It will dry out a Pilsner beautifully, making it extremely refreshing.</i></p>
    `,

    "novalager": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand NovaLager (The Bio-Engineered Miracle)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> Unique Hybrid (Saccharomyces pastorianus lineage)
        </p>
        <p>A true game-changer. NovaLager is a modern hybrid yeast (a novel Saccharomyces pastorianus lineage) designed to ferment like an ale, but taste exactly like a clean lager.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Breaking the rules (10-20 °C)</h4>
        <p>You no longer need 5 weeks and a dedicated lager fridge. NovaLager ferments cleanly at 18-20 °C with low ester production, no sulfur (H2S), and very low diacetyl.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">The Cheat Code (18 °C):</strong> Treat it like an ale! Primary at 18 °C for 5 days, ramp to 20 °C for 2 days to finish up, and crash. A clean lager in a week!</li>
            <li><strong style="color: #fff;">Modern Cold (14 °C):</strong> If you want absolute pristine perfection, ferment it at 14 °C. It's still significantly faster than traditional strains but delivers award-winning crispness.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: It has very high attenuation. Be prepared for your beer to dry out significantly, making the hop bitterness feel sharper.</i></p>
    `,

// ==========================================
    // --- LIQUID YEASTS (Flytande Jäst) ---
    // ==========================================

    "wlp001": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP001 California Ale (The West Coast King)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1056, US-05
        </p>
        <p>White Labs' crown jewel! This is the original strain that started the American craft beer revolution. Praised for its unparalleled cleanliness.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Letting the hops sing (20-23 °C)</h4>
        <p>This yeast has one single job: to ferment away the sugar and then step into the background so your expensive American hops can take the lead.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> Start crisp around 19.5 °C. We want zero esters and zero fusels. Then release up to 22 °C for a Diacetyl Rest. WLP001 is good at cleaning, but a little heat helps.</li>
            <li><strong style="color: #fff;">Low Ester:</strong> Drops the temperature down to 18 °C. Fermentation takes slightly longer, but yields an impossibly clean, lager-like ale profile.</li>
        </ul>
    `,

    "wlp300": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP300 Hefeweizen (The Banana Bomb)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 3068, M20
        </p>
        <p>This is the liquid gold standard for German wheat beer. Unlike dry wheat yeasts, this one is famous for producing massive, luscious amounts of banana aroma.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Temperament and Temperature (20-22 °C)</h4>
        <p>Pushing WLP300 above the 20-mark is the trick to unlocking the fruity isoamyl acetate (banana) esters and suppressing the clove.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> Held firmly at 19 °C. Focuses on the spicy clove phenols, keeping the banana esters subtle and balanced.</li>
            <li><strong style="color: #fff;">Classic:</strong> Ferment warm! Lock the temp at 20 °C and ramp to 22°C to let the banana party begin. Drop to serving temp (approx. 4 °C) for conditioning.</li>
        </ul>
    `,

    "wyeast-1968": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1968 (London ESB Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP002 (Fuller's)
        </p>
        <p>The legendary Fuller’s strain! This yeast is famous for leaving a wonderful, malty residual sweetness, and dropping out of suspension so fast it looks like cottage cheese.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Extreme Flocculation (Crucial!)</h4>
        <p>Because it drops like a stone the second it feels "done", you have to actively fight to keep it awake. If it goes to sleep too early, your beer will taste like a butterscotch candy (Diacetyl).</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard / ESB Clean:</strong> Starts cooler (18.5-19 °C) to keep the yeast focused on maltiness without throwing too much fruit. A solid diacetyl rest at 21 °C cleans up the butterscotch.</li>
            <li><strong style="color: #fff;">High Ester / ESB Fruity:</strong> For a true British fruit-bomb! We pitch warm (21-22 °C) and let it ramp to 23 °C. Expect massive notes of marmalade and jam.</li>
            <li><strong style="color: #fff;">Low Ester:</strong> The cheat-code for a super clean profile. Ferments low at 18 °C and crashes gently to avoid stressing the yeast.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: This yeast clears the beer so fast during the Cold Crash that you rarely need fining agents!</i></p>
    `,

    "wlp920": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP920 (Old Bavarian Lager)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 2206 (Bavarian Lager)
        </p>
        <p>A classic from southern Germany, known for a malty profile with a light touch of esters, making it perfect for Oktoberfest beers, Bocks, and dark lagers.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Malt Preserver</h4>
        <p>By keeping the fermentation cold and steady, we prevent the yeast from producing byproducts that would otherwise mask the delicate toasted and caramel notes from the Munich and Vienna malts.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Traditional Lager:</strong> The old-school way. Starts low at 10.5 °C for 10 full days, followed by a slow D-rest and a massive 28-day cold lagering phase.</li>
            <li><strong style="color: #fff;">Quick Lager:</strong> The modern approach. Pitches at 12.5 °C for faster yeast growth, finishes the cleanup by day 10, and cuts the lagering time in half.</li>
            <li><strong style="color: #fff;">Brulosophy:</strong> The warm-fermented lager hack! Runs at ale temperatures (19 °C). Surprisingly clean, but done in a fraction of the time.</li>
        </ul>
    `,

    "imperial-b45": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Imperial Yeast B45 (Gnome)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP550, Wyeast 3522 (Chouffe)
        </p>
        <p>An amazing classic Belgian yeast renowned for producing beautiful pear and peach esters paired with a light, peppery spiciness (phenols).</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Belgian Ramp</h4>
        <p>Belgian monks historically didn't use chillers. They pitched the yeast and let the natural exothermic heat of fermentation drive the temperature up. We want to mimic this to unlock the true Belgian character!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Classic:</strong> Starts at 20 °C and free-rises to 23.5 °C. This is the sweet spot for balancing the pear esters with the peppery phenols.</li>
            <li><strong style="color: #fff;">Spicy & High Ester:</strong> We push the yeast hard and hot! Starting at 21-22 °C and ramping to 25 °C forces the yeast to throw massive amounts of complex flavors. Perfect for a Belgian Strong.</li>
            <li><strong style="color: #fff;">Standard & Low Ester:</strong> Restrained (18-19 °C). Keeps the yeast calm for a more subtle Belgian blonde.</li>
        </ul>
    `,

    "wyeast-1084": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1084 (Irish Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP004 (Guinness)
        </p>
        <p>The Guinness strain! A true workhorse from Dublin that is incredibly versatile. It provides a rich, malty profile with a subtle hint of dark fruit and a touch of diacetyl that works perfectly in dark beers.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Loving the Dark Malts</h4>
        <p>This yeast was literally born to ferment roasted barley. It leaves just enough residual body to make a dry stout feel creamy rather than thin.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Dry Stout:</strong> Starts at a crisp 18 °C and ramps to 20 °C. This suppresses fruitiness and lets the coffee and chocolate notes from the malt take center stage.</li>
            <li><strong style="color: #fff;">Red/Malty & High Ester:</strong> Runs warmer (20-21.5 °C) to coax out those lovely jammy, dark berry esters that make an Irish Red Ale so special.</li>
            <li><strong style="color: #fff;">Standard & Low Ester:</strong> A fantastic, neutral base if you want to use this yeast for American styles or Porters.</li>
        </ul>
    `,

    "wyeast-3944": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 3944 (Belgian Witbier)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP400 (Hoegaarden)
        </p>
        <p>The king of wheat beers! Known for immense character, producing a complex blend of spicy phenols (pepper/clove) and fruity esters (banana/citrus).</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Keep it Cloudy</h4>
        <p>This yeast refuses to drop, and that's exactly what we want! We want the yeast and wheat proteins to stay in suspension for that milky, white appearance.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> Kept strictly at 19 °C. The fruitiness takes a back seat, and the clove/pepper phenols become the star of the show.</li>
            <li><strong style="color: #fff;">Classic Wit:</strong> A balanced 18 °C start, ramping to 21.5 °C. Notice the "Condition" phase sits at 6 °C instead of near freezing? This prevents the beer from clearing up too much!</li>
            <li><strong style="color: #fff;">Summer Wit & High Ester:</strong> Pushed warmer (20-23 °C). Expect massive amounts of citrus, orange peel, and banana.</li>
        </ul>
    `,

    "wlp833": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP833 (German Bock Lager)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 2487 (Ayinger)
        </p>
        <p>The heavyweight from Ayinger! The absolute king of maltiness. It leaves a fantastic malty sweetness and body, making it the obvious choice for Bocks, Doppelbocks, and Märzens.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Long Slumber</h4>
        <p>Bock yeast can be stubborn and slow. It needs time to properly attenuate high-gravity worts without creating rocket-fuel fusel alcohols.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Traditional Lager:</strong> Runs slightly warmer at 11 °C to speed up attenuation without sacrificing the clean, malty profile.</li>
            <li><strong style="color: #fff;">Trad. Bock:</strong> The authentic approach. A chilly 10 °C primary fermentation, a solid D-rest at 16 °C, and then a grueling 35-day lagering phase to achieve liquid perfection.</li>
            <li><strong style="color: #fff;">Fast Bock:</strong> When you can't wait. Pitched at 12 °C, warming to 17 °C. It finishes the job in just over three weeks but still delivers a massive malt backbone.</li>
        </ul>
    `,

    "wlp007": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP007 (Dry English Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> S-04, Wyeast 1098 (Whitbread)
        </p>
        <p>A heat-seeking missile! Known as the "Workhorse" yeast. It's incredibly fast, attenuates very dry, and drops like a rock when it's done.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Taming the Beast</h4>
        <p>Because 007 ferments so violently, it creates intense internal heat. Your fridge will work hard the first 48 hours to hold the temperature down to prevent solvent-like flavors.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">West Coast & Standard:</strong> Locks the beast in at 18.5-19 °C. At these cooler temperatures, WLP007 acts almost exactly like a clean American Ale yeast, making it perfect for dry IPAs.</li>
            <li><strong style="color: #fff;">Monster & High Ester:</strong> Start at 20-21 °C. If you are brewing a massive Imperial Stout or Barleywine, this profile gives the yeast the heat it needs to survive the high alcohol while throwing beautiful dark fruit esters.</li>
        </ul>
    `,

    "wyeast-1318": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1318 (London Ale III)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Verdant IPA (Boddingtons)
        </p>
        <p>The very foundation of the NEIPA revolution. This is the yeast that gave the world "Juice". It leaves a velvety mouthfeel and throws off beautiful esters of pineapple and grapefruit.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Biotransformation</h4>
        <p>Low flocculation helps keep the beer hazy, and its unique enzymes are fantastic at chemically altering your dry hops into even juicier compounds.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard & Low Ester:</strong> Kept at 18-19 °C. This provides a clean fermentation where the biotransformation of your massive dry hop additions takes center stage.</li>
            <li><strong style="color: #fff;">High Ester:</strong> Pitched at 21 °C and ramped to 23 °C. The added heat forces the yeast to produce more of its own tropical esters (peach/apricot) to blend with the hops.</li>
        </ul>
    `,

    "wyeast-2565": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 2565 (Kölsch)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP029 (Cologne)
        </p>
        <p>A true "hybrid" – technically an ale yeast, but it prefers working at near-lager temperatures. Known for an extremely crisp, clean, and almost vinous (white wine) profile.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Dusty Yeast</h4>
        <p>Wyeast 2565 is notoriously powdery. It refuses to clear up on its own. A long, cold lagering phase is absolutely mandatory to achieve that brilliant, golden Kölsch clarity.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard & Low Ester:</strong> Faster ale-like fermentation (18-19 °C). Still very clean, but finishes much quicker. Great for crisp Blonde Ales.</li>
            <li><strong style="color: #fff;">Authentic:</strong> The Cologne way! A chilly 14.5 °C primary fermentation, a slow D-rest at 18 °C, and a strict 2-week cold lagering. Tastes exactly like a German lager, but brewed with ale yeast.</li>
        </ul>
    `,

    "wlp002": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP002 English Ale (The Brick)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1968 (Fuller's Strain)
        </p>
        <p>The legendary Fuller’s strain! This yeast is famous for two things: leaving a wonderful, malty residual sweetness, and dropping out of suspension so fast it looks like cottage cheese.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Extreme Flocculation</h4>
        <p>Because it drops like a stone the second it feels "done", you have to actively fight to keep it awake. If it goes to sleep too early, your beer will taste like a butterscotch candy (Diacetyl).</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> A steady 19 °C fermentation, jumping up to 21 °C at the end to keep the yeast active for cleanup.</li>
            <li><strong style="color: #fff;">Low Ester:</strong> Keep it slightly cooler (18.5 °C) to retain even more unfermented sugars, giving your dark beers a massive, silky mouthfeel.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: When you Cold Crash this, the beer will become brilliantly clear almost overnight. No need for fining agents!</i></p>
    `,

    "wlp500": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP500 Trappist (The Monk's Madness)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1214 (Chimay)
        </p>
        <p>Sourced directly from the Chimay monastery. This is the yeast you want when brewing massive, complex Belgian Quads or fruity Tripels. It produces an explosion of plum, raisin, and distinct bubblegum notes.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Let it ride (18-22 °C... and beyond)</h4>
        <p>Belgian monks historically didn't use chillers. They pitched the yeast and let the natural exothermic heat of fermentation drive the temperature up. We want to mimic this!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> Start at 19 °C to suppress fusel alcohols, then slowly let it free-rise to 21 °C by Day 3 for an elegant fruit profile.</li>
            <li><strong style="color: #fff;">Monk's Madness:</strong> Pitch at 20 °C and ramp it aggressively to 25 °C! This stresses the yeast into throwing massive dark fruit and bubblegum flavors.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: It has very low flocculation. You will need a long, cold conditioning phase to drop this stubborn yeast out of the beer.</i></p>
    `,

    "wlp066": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP066 London Fog (The Haze Craze)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1318 (Close Relative)
        </p>
        <p>This is the liquid magic behind some of the best NEIPAs in the world. It leaves a velvety, creamy mouthfeel and throws off beautiful esters of pineapple and ruby red grapefruit.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Body Builder</h4>
        <p>Unlike West Coast yeasts, London Fog doesn't ferment all the complex sugars. It leaves a higher Final Gravity, which provides that thick, juice-like body that modern hazy IPAs require.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> Keep it locked at 19 °C. This provides a clean fermentation where the biotransformation of your dry hops takes center stage.</li>
            <li><strong style="color: #fff;">Smooth Juice:</strong> Start at 19 °C, but ramp to 22 °C by Day 8. The added heat forces the yeast to produce more of its own tropical esters to blend with the hops.</li>
        </ul>
    `,

    "wlp800": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP800 Pilsner Lager (The Czech Legend)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 2001 (Pilsner Urquell)
        </p>
        <p>The famous Pilsner Urquell strain. If you want to brew an authentic Bohemian Pilsner, look no further. It provides a rich, complex maltiness and a very smooth, rounded profile.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Diacetyl Debate</h4>
        <p>Historically, Czech Pilsners have a tiny, tiny hint of diacetyl (butter) in the background. If you want to be 100% true to style, you actually do a slightly shorter Diacetyl Rest than with German lagers!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Bohemian:</strong> Ferment low and slow. Ramp up to 12 °C for just 48 hours to clean up *most* of the butterscotch, then drop to lagering.</li>
            <li><strong style="color: #fff;">Traditional Lager:</strong> Run it slightly warmer (11°C) and do a full 5-day D-rest at 16 °C for a completely clean, modern interpretation of a Pilsner.</li>
        </ul>
    `,

    "wlp095": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP095 (Burlington Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Imperial A04, Omega OYL-052, "Conan"
        </p>
        <p>The legendary "Conan" strain! The yeast that originally put the Vermont style (Hazy IPA) on the map. Famous for producing intense notes of ripe peach and apricot.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Original Juice</h4>
        <p>Unlike London III, Burlington tends to attenuate slightly more, yielding a beer that is drier on the finish but still exceptionally "juicy" in its aroma.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Conan IPA & Standard:</strong> 19-21 °C. The classic Vermont curve. Gives a perfect balance between hop bitterness and stone-fruit esters.</li>
            <li><strong style="color: #fff;">High Ester:</strong> Pushed to 21 °C and ramping up to 23 °C. This stresses the yeast to maximize the peach and apricot notes.</li>
            <li><strong style="color: #fff;">Low Ester:</strong> Fermented cool (18 °C) to tame the fruitiness, making it behave more like a standard West Coast IPA yeast.</li>
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
            "us-05": "US-05", 
            "s-04": "S-04", 
            "w-34-70": "W-34/70", 
            "be-256": "BE-256",
            "wb-06": "WB-06", 
            "verdant": "Verdant IPA", 
            "voss": "Voss Kveik",
            "nottingham": "Nottingham", 
            "wlp001": "California Ale", 
            "wlp300": "Hefeweizen",
            "belle-saison": "Belle Saison", 
            "t-58": "T-58", 
            "s-23": "S-23",
            "wlp002": "English Ale", 
            "wlp500": "Trappist", 
            "diamond": "Diamond",
            "wlp066": "London Fog", 
            "s-33": "S-33", 
            "wlp800": "Pilsner Lager",
            "novalager": "NovaLager", 
            "wyeast-1968": "London ESB", 
            "wlp920": "Old Bavarian",
            "imperial-b45": "Imp. Gnome", 
            "wyeast-1084": "Irish Ale", 
            "wyeast-3944": "Belgian Wit",
            "wlp833": "German Bock", 
            "wlp007": "Dry English", 
            "wyeast-1318": "London III",
            "wyeast-2565": "Kolsch", 
            "wlp095": "Burlington"
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

    const originalText = syncBtn.innerText;
    syncBtn.innerText = "PACKING PROFILES... 📦";
    syncBtn.style.opacity = "0.7";
    syncBtn.style.pointerEvents = "none";

    try {
        let profilesToSend = [];

        // DEN KOMPLETTA ORDBOKEN FÖR SYNK-MOTORN
        const hwStrainNames = {
            "us-05": "US-05", 
            "s-04": "S-04", 
            "w-34-70": "W-34/70", 
            "be-256": "BE-256",
            "wb-06": "WB-06", 
            "verdant": "Verdant IPA", 
            "voss": "Voss Kveik",
            "nottingham": "Nottingham", 
            "wlp001": "California Ale", 
            "wlp300": "Hefeweizen",
            "belle-saison": "Belle Saison", 
            "t-58": "T-58", 
            "s-23": "S-23",
            "wlp002": "English Ale", 
            "wlp500": "Trappist", 
            "diamond": "Diamond",
            "wlp066": "London Fog", 
            "s-33": "S-33", 
            "wlp800": "Pilsner Lager",
            "novalager": "NovaLager", 
            "wyeast-1968": "London ESB", 
            "wlp920": "Old Bavarian",
            "imperial-b45": "Imp. Gnome", 
            "wyeast-1084": "Irish Ale", 
            "wyeast-3944": "Belgian Wit",
            "wlp833": "German Bock", 
            "wlp007": "Dry English", 
            "wyeast-1318": "London III",
            "wyeast-2565": "Kolsch", 
            "wlp095": "Burlington"
        };

        selectedStrains.forEach(id => {
            const strainObj = yeastStrains.find(y => y.id === id);
            let targetStrainName = "";
            
            if (strainObj && strainObj.isCustom) {
                targetStrainName = strainObj.name;
            } else {
                targetStrainName = hwStrainNames[id];
            }

            if (targetStrainName && typeof yeastDatabase !== 'undefined' && yeastDatabase.yeasts) {
                const matchingProfiles = yeastDatabase.yeasts.filter(p => p.s === targetStrainName);
                if (matchingProfiles.length > 0) {
                    profilesToSend.push(...matchingProfiles); 
                } else {
                    console.warn("Missing profiles for:", targetStrainName);
                }
            }
        });

        if (profilesToSend.length === 0) {
            alert("Kunde inte packa profilerna! Dubbelkolla att namnen matchar databasen.");
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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                uid: user.uid,
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
    const logoutBtn = document.getElementById('btn-logout'); // <-- 1. Hämta knappen

if (user) {
        // --- ANVÄNDAREN ÄR INLOGGAD ---
        if (soulLoginPrompt) soulLoginPrompt.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'block'; // <-- 2. Visa knappen!

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
        // ==========================================
        // --- ANVÄNDARE ÄR UTLOGGAD (GÄST-LÄGE) ---
        // ==========================================
        activeDeviceId = null; 
        selectedStrains = []; 
        
        if (logoutBtn) logoutBtn.style.display = 'none'; // <--- GÖM KNAPPEN! (LÄGG TILL)
        
        // Återställ rullistor
        if (deviceSelect) deviceSelect.innerHTML = '<option value="">Logga in för att se enheter</option>';
        const syncDropdown = document.getElementById('sync-target-device');
        if (syncDropdown) syncDropdown.innerHTML = '<option value="">Logga in för att synka</option>';
        
        // Visa login-uppmaningen på startsidan
        if (soulLoginPrompt) soulLoginPrompt.style.display = 'block';
        
        // 1. VIKTIGT: Kör uppdateringen! Eftersom activeDeviceId är null, 
        // kommer din updateDashboard att direkt rendera din Demo-vy!
        if (typeof updateDashboard === 'function') updateDashboard();
        
        // 2. Tvinga dem inte till login! Om de laddar sidan på nytt, låt dem 
        // stanna på 'soul'-vyn (startsidan) eller den vy de just nu befinner sig i.
        // Vi tar bort showView('login') helt.
        
        console.log("Gäst-läge aktiverat. Full tillgång till demo och inställningar!");
    }
});

// Innehållet för de olika modulerna
const academyModules = {
    // --- 1. Kalkylatorn (Behålls som den var) ---
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

   // --- 2. YEAST STARTERS 101 (Med interaktiv checklista!) ---
    'starters': `
        <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Yeast Starters 101</h2>
        
        <div class="wizard-layout">
            
            <div class="wizard-sidebar">
                <h4>You will need:</h4>
                <ul class="wizard-checklist" id="starter-checklist">
                    <li id="item-flask">Erlenmeyer Flask</li>
                    <li id="item-scale">Precision Scale</li>
                    <li id="item-dme">Light DME</li>
                    <li id="item-water">Clean Water</li>
                    <li id="item-heat">Heat Source</li>
                    <li id="item-yeast">Yeast Pack</li>
                    <li id="item-stirbar">Stir Bar</li>
                    <li id="item-stirplate">Stir Plate</li>
                </ul>
            </div>

            <div class="wizard-container" id="starter-wizard">
                <div class="wizard-dots" id="wizard-dots">
                    <div class="wizard-dot active"></div>
                    <div class="wizard-dot"></div>
                    <div class="wizard-dot"></div>
                    <div class="wizard-dot"></div>
                </div>

                <div class="wizard-step active" data-step="0">
                    <div class="wizard-icon">🧽🧪</div>
                    <h3>1. Clean & Prepare</h3>
                    <p>Before we start, hygiene is everything. Make sure your Erlenmeyer flask is completely clean and sanitized.</p>
                </div>

                <div class="wizard-step" data-step="1">
                    <div class="wizard-icon">⚖️🌾</div>
                    <h3>2. The Golden Ratio</h3>
                    <p>Place the flask on the scale. Weigh exactly <strong>100g of DME</strong> for every <strong>1 Liter of water</strong>. This creates a perfect 1.036 specific gravity.</p>
                </div>

                <div class="wizard-step" data-step="2">
                    <div class="wizard-icon">🔥🌡️</div>
                    <h3>3. Boil & Sterilize</h3>
                    <p>Move the flask to your heat source. Boil gently for 10-15 minutes to sterilize the wort. <br><br><em>Pro-tip: Add a drop of Fermcap-S to prevent boil-overs!</em></p>
                </div>

                <div class="wizard-step" data-step="3">
                    <div class="wizard-icon">❄️🌪️</div>
                    <h3>4. Chill, Pitch & Spin</h3>
                    <p>Cool the flask to 20°C (68°F). Pitch your yeast, drop in the stir bar, and place it on the stir plate for 24-48 hours. Watch those cells multiply!</p>
                </div>

                <div class="wizard-controls">
                    <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Back</button>
                    <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Next ➔</button>
                </div>
            </div>
        </div>
    `,

    // --- 3. Agar (Behålls som den var) ---
    'agar': `
        <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 5px; font-weight: 900; letter-spacing: -1px;">Mastering Agar Plates</h2>
        <p style="color: var(--text-dim); margin-bottom: 30px; font-size: 0.95rem; line-height: 1.5;">Learn to pour, streak, and isolate pure strains like a pro.</p>
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
    `,
    'wild': `
        <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 5px; font-weight: 900; letter-spacing: -1px;">Capturing Wild Yeast</h2>
        <p style="color: var(--text-dim); margin-bottom: 30px; font-size: 0.95rem; line-height: 1.5;">Hunt for local microbes and brew something truly unique.</p>
        <p style="color: #888;"><em>Lesson content coming soon...</em></p>
    `
};

// ==========================================
// --- LOGIK FÖR WIZARDEN ---
// ==========================================
let currentWizardStep = 0;
const totalWizardSteps = 4; // Hur många steg vi har i starters-modulen

// Körs när man trycker Next eller Back
function changeWizardStep(direction) {
    currentWizardStep += direction;

    if (currentWizardStep < 0) currentWizardStep = 0;
    
    if (currentWizardStep >= totalWizardSteps) {
        closeAcademyModule();
        return;
    }

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

    const prevBtn = document.getElementById('wiz-prev');
    const nextBtn = document.getElementById('wiz-next');

    if (prevBtn && nextBtn) {
        prevBtn.disabled = currentWizardStep === 0;
        nextBtn.innerText = currentWizardStep === totalWizardSteps - 1 ? "Finish! ✓" : "Next ➔";
    }

    // ==========================================
    // --- NYTT: DEN LEVANDE CHECKLISTAN! ---
    // ==========================================
    
    // Denna karta mappar steg-nummer (0-3) till ID:n på <li> i din HTML
    const stepActiveItems = {
        0: ['item-flask'], // Steg 1: Rengöring
        1: ['item-flask', 'item-scale', 'item-dme', 'item-water'], // Steg 2: Vägning
        2: ['item-flask', 'item-heat'], // Steg 3: Kokning
        3: ['item-flask', 'item-yeast', 'item-stirbar', 'item-stirplate'] // Steg 4: Pitching
    };

    // Släck alla objekt i listan först
    document.querySelectorAll('.wizard-checklist li').forEach(li => {
        li.classList.remove('active-item');
    });

    // Tänd upp de som används i just det här steget
    const itemsToHighlight = stepActiveItems[currentWizardStep];
    if (itemsToHighlight) {
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
function openAcademyModule(moduleId) {
    const overview = document.getElementById('lab-content-academy');
    const moduleView = document.getElementById('academy-module-view');
    const contentArea = document.getElementById('academy-module-content');

    contentArea.innerHTML = academyModules[moduleId] || '<p style="color: #ff4444;">Module not found.</p>';

    overview.style.display = 'none';
    moduleView.style.display = 'block';

    // Om kalkylatorn öppnas: Tvinga den att räkna direkt
    if (moduleId === 'calc') {
        const dateInput = document.getElementById('pitch-date');
        if (dateInput && !dateInput.value) dateInput.valueAsDate = new Date();
        if (typeof calculatePitch === 'function') calculatePitch();
    }
    
    // Nollställ Wizard-räknaren om vi öppnar Yeast Starters!
    if (moduleId === 'starters') {
        currentWizardStep = 0;
        setTimeout(() => changeWizardStep(0), 10); // Uppdatera UI direkt
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
            // Lista med alla dina förberedda färger från CSS:en
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
    // --- 1. TEMPERATURERNA ---
    // 1. Temp inside vessel
    { selector: '.carboy-wrapper', text: 'Temp inside vessel', offsetY: -35, mobileOffsetY: -60 },
    
    // 2. Ambient temp 
    { selector: '.air-floating', text: 'Ambient temp', offsetY: -5, mobileOffsetY: 5 },
    
    // --- 2. JÄST & PROFIL (Uppe till höger) ---
    // 3. Yeast Strain
    { selector: '#strain-val', text: 'Yeast Strain', offsetY: 0, mobileOffsetY: 0 },
    
    // 4. Fermentation profile
{ selector: '#profile-val', text: 'Fermentation profile', offsetY: -5, mobileOffsetY: 0, mobileOffsetX: 0 },
    
    // 5. Action Status
    { selector: '.action-status', text: 'HEATING / COOLING', offsetY: -10, mobileOffsetY: -10 },
    
    // --- 3. STATUS & HISTORIK (Nedre halvan) ---
    // 6. Progress bar 
    { selector: '.progress-section', text: 'Fermentation completion', offsetY: -155, mobileOffsetY: -150 },
    
    // 7. Phase info
    { selector: '.phase-info', text: 'Current phase details', offsetY: -5, mobileOffsetY: 0 },
    
    // 8. Temp History
    { selector: '#beer-chart', text: 'Temp change over time', offsetY: 0, mobileOffsetY: 15 }
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
    currentDemoStep++;

    const tooltip = document.getElementById('demo-tour-tooltip');
    const overlay = document.getElementById('demo-overlay');
    const highlight = document.getElementById('demo-highlight'); // Kan behövas ta bort om du skippar ram

    // 1. KONTROLL: Är touren slut?
    if (currentDemoStep >= demoSteps.length) {
        if (tooltip) tooltip.style.display = 'none';
        if (overlay) overlay.style.display = 'none'; 
        
        setTimeout(() => {
            if (!activeDeviceId) {
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
        if (tourTextEl) tourTextEl.innerText = demoSteps[currentDemoStep].text;

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
                // Använd sidoförflyttning om vi är på mobil och ett värde finns
                stepOffsetX = demoSteps[currentDemoStep].mobileOffsetX;
            }
            
            // --- TILLBAKA TILL DITT ORIGINAL SOM FUNKADE PERFEKT! ---
            // Din CSS centrerar redan, så vi lägger bara till eventuell manuell knuff (stepOffsetX)
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
        // Toggla rutan när man klickar på [i]
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

    // EXIT: Göm rutan
    if(exitBtn) {
        exitBtn.addEventListener('click', () => {
            if(infoBox) infoBox.style.display = 'none';
        });
    }

    // CONTINUE: Göm rutan OCH starta demon!
    if(startTourBtn) {
        startTourBtn.addEventListener('click', () => {
            if(infoBox) infoBox.style.display = 'none';
            
            // Starta Hollywood-läget om det finns, annars direkt till pilarna
            if (typeof startDemoMode === "function") {
                startDemoMode(); 
            } else {
                startDemoTour(); 
            }
        });
    }

});

function renderDemoDashboard() {
    // 1. Fyll in all text med det nya "Ramping Uppåt"-scenariot
    const displayElement = document.querySelector('.device-name-display');
    if (displayElement) displayElement.innerHTML = "<span style='color:#ff4444;'>DEMO MODE</span>";

    document.getElementById('strain-val').innerText = "OLD BAVARIAN";
    document.getElementById('profile-val').innerText = "Brulosophy";
    
    // Eftersom vi ska UPP i temp, sätter vi action till HEATING
    document.getElementById('action-val').innerText = "HEATING";

    // Nuvarande temp är 20.1°C
    const displayTemp = currentTempUnit === 'F' ? "68.2°F" : "20.1°C";
    document.getElementById('temp-beer-val').innerText = displayTemp;
    
    const beerTempEl = document.querySelector('.beer-temp');
    if (beerTempEl) beerTempEl.setAttribute('data-text', displayTemp);
    
    // Ambient temp är lite varmare, vilket hjälper uppvärmningen
    document.getElementById('air-temp-val').innerText = currentTempUnit === 'F' ? "73.4°F" : "23.0°C";
    
    // --- NY FAS-TEXT: RAMPING ---
    document.getElementById('status-text').innerText = "RAMPING";
    
    document.getElementById('day-val').innerText = "4 d and 2 h";
    document.getElementById('phase-day-val').innerText = "0 d and 1 h";
    
    // Målet är 21.0 grader
    document.getElementById('target-temp-val').innerText = currentTempUnit === 'F' ? "69.8°F" : "21.0°C";

    // 2. Sätt progress-baren till 29%
    document.getElementById('progress-percent').innerText = "29%";
    document.getElementById('progress-fill').style.width = "29%";

    // 3. Ställ in pilen så den pekar UPPÅT och är RÖD (för heating)
    const arrow = document.getElementById('status-arrow');
    if(arrow) {
        arrow.innerText = "▲";
        arrow.style.color = "#ff4444"; // Röd färg
        arrow.style.visibility = "visible";
        arrow.classList.add('blink-active');
    }

    // 4. --- GRAFEN GÅR NU UPPÅT! ---
    // Vi säger att den låg på 19.0°C, och har nu börjat klättra mot 21.0°C.
    // Just nu slutar linjen exakt på dina 20.1°C!
    const now = Date.now();
    const fakeChartData = [
        { time: new Date(now - 4000000).toISOString(), temp: 19.0 },
        { time: new Date(now - 3000000).toISOString(), temp: 19.0 },
        { time: new Date(now - 2000000).toISOString(), temp: 19.0 },
        { time: new Date(now - 1000000).toISOString(), temp: 19.4 }, // Börjar klättra...
        { time: new Date(now).toISOString(), temp: 20.1 }            // ...och landar på 20.1!
    ];
    
    // Ritar ut den fejkade datan i grafen, (koden konverterar C till F automatiskt om det behövs)
    if (typeof updateChart === 'function') {
        updateChart(fakeChartData); 
    }
}

// ==========================================
// --- STÄNG INFO-RUTOR VID KLICK UTANFÖR ---
// ==========================================
let lastBoxCloseTime = 0; // Håller koll på exakt när vi stängde en ruta senast

function handleOutsideClick(event) {
    // 1. SPÖK-SKÖLDEN: Om vi PRECIS stängde en ruta (inom 400ms), ät upp klicket direkt!
    if (Date.now() - lastBoxCloseTime < 400) {
        event.stopPropagation();
        event.preventDefault();
        return;
    }

    // 2. Spärr för "i"-knapparna
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

    // 3. Om vi stängde rutan: Starta timer-skölden och ät upp originalklicket
    if (boxWasClosed) {
        lastBoxCloseTime = Date.now(); // Uppdatera tiden för stängningen
        event.stopPropagation(); 
        event.preventDefault();  
    }
}

// Vi behöver bara lyssna på 'click' nu, mobilen skickar ändå ett klick efter touchen.
// (Jag tog bort touchend-lyssnaren för att göra det ännu stabilare på iOS/Android)
document.addEventListener('click', handleOutsideClick, true);

// ==========================================
// --- ÖPPNA/STÄNG PITCH CALCULATOR MODAL ---
// ==========================================

function openPitchCalcModal() {
    const modal = document.getElementById('pitch-calc-modal');
    modal.style.display = 'flex'; // 'flex' centrerar innehållet
}

function closePitchCalcModal() {
    const modal = document.getElementById('pitch-calc-modal');
    modal.style.display = 'none';
}

// Stäng rutan om man klickar utanför den (på den mörka bakgrunden)
window.addEventListener('click', function(event) {
    const modal = document.getElementById('pitch-calc-modal');
    if (event.target === modal) {
        closePitchCalcModal();
    }
});

// ==========================================
// --- PITCH CALCULATOR LOGIK ---
// ==========================================

// Global variabel för att minnas vilken jästtyp vi räknar på
let currentCalcType = '';

function selectCalc(type, clickedBtn) {
    currentCalcType = type;

    // 1. Dölj hela rutan med de 4 valknapparna
    document.getElementById('main-calc-buttons').style.display = 'none';

    // 2. Visa den nya "Selected"-raden och skriv ut knappens text
    const header = document.getElementById('selected-yeast-header');
    const headerText = document.getElementById('selected-yeast-text');
    headerText.innerText = clickedBtn.innerText;
    header.style.display = 'flex';

    // 3. Hantera undermenyn för "Yeast Bank"
    const subOptions = document.getElementById('bank-sub-options');
    if (type === 'bank') {
        subOptions.style.display = 'block';
    } else {
        subOptions.style.display = 'none';
        const subButtons = document.querySelectorAll('.sub-btn');
        subButtons.forEach(btn => btn.classList.remove('active'));
    }

    // 4. Visa själva kalkylatorfälten och dölj gamla resultat
    document.getElementById('calc-input-section').style.display = 'block';
    document.getElementById('calc-result-box').style.display = 'none';

    // 5. Bygg in "extrafält" beroende på vilken jästtyp man klickade på
    const dynamicSection = document.getElementById('dynamic-extra-fields');
    dynamicSection.innerHTML = ''; // Rensa tidigare fält

    if (type === 'dry') {
        dynamicSection.innerHTML = `
            <div class="ym-input-group" style="margin-bottom: 20px;">
                <label>Cells per gram (Billions)</label>
                <input type="number" id="calc-dry-density" value="10" step="1">
                <small style="color: #777; font-size: 0.8em; margin-top: 4px;">Standard for dry yeast is ~10-20 billion cells/g. Defaulting to a safe 10B.</small>
            </div>
        `;
    }
    // Fält för Liquid, Slurry och Bank kommer här senare!
}

function selectSub(type, clickedBtn) {
    // 1. Återställ alla underknappar
    const subButtons = document.querySelectorAll('.sub-btn');
    subButtons.forEach(btn => btn.classList.remove('active'));

    // 2. Sätt den klickade till aktiv
    clickedBtn.classList.add('active');
    
    // (Här kommer logiken för att räkna ut stege från Single Loop vs Wash)
}

function resetCalcSelection() {
    currentCalcType = '';
    
    // Visa de 4 knapparna igen
    document.getElementById('main-calc-buttons').style.display = 'grid';
    
    // Dölj "Selected"-raden, undermenyer, inmatningsfält och resultat
    document.getElementById('selected-yeast-header').style.display = 'none';
    document.getElementById('bank-sub-options').style.display = 'none';
    document.getElementById('calc-input-section').style.display = 'none';
    document.getElementById('calc-result-box').style.display = 'none';

    // Avmarkera alla knappar så de ser nollställda ut
    const mainButtons = document.querySelectorAll('#main-calc-buttons .ym-btn-outline');
    mainButtons.forEach(btn => btn.classList.remove('active'));
}

// ==========================================
// --- THE MASTER CALCULATION ---
// ==========================================

function calculatePitch() {
    // 1. Hämta värdena från grundfälten
    const volLiters = parseFloat(document.getElementById('calc-vol').value);
    const ogSG = parseFloat(document.getElementById('calc-og').value);
    const pitchRate = parseFloat(document.getElementById('calc-rate').value);

    // 2. Omvandla Specific Gravity (SG) till grader Plato (°P)
    const plato = 259 - (259 / ogSG);

    // 3. The Universal Pitch Rate Formula
    // Totalt antal celler (i miljoner) = Rate * Volym(ml) * Plato
    const totalCellsMillion = pitchRate * (volLiters * 1000) * plato;
    const totalCellsBillion = totalCellsMillion / 1000;

    let resultHTML = `<strong style="color: #fff;">Target:</strong> ${totalCellsBillion.toFixed(1)} Billion cells<br><br>`;

    // 4. Räkna ut slutresultatet baserat på jästtyp
    if (currentCalcType === 'dry') {
        const cellsPerGram = parseFloat(document.getElementById('calc-dry-density').value);
        
        // Hur många gram behöver vi?
        const gramsNeeded = totalCellsBillion / cellsPerGram;
        
        // Hur många standardpaket à 11 gram är det?
        const packetsNeeded = Math.ceil(gramsNeeded / 11); 

        resultHTML += `
            <span style="font-size: 1.2em; color: #fff;">
                ⚖️ You need to pitch <strong>${gramsNeeded.toFixed(1)} grams</strong> of dry yeast.
            </span><br>
            <span style="color: #aaa; font-size: 0.9em;">(Approx. ${packetsNeeded} standard 11g packets)</span>
        `;
    }

    // 5. Skriv ut resultatet på skärmen
    const resultBox = document.getElementById('calc-result-box');
    const resultText = document.getElementById('calc-result-text');
    
    resultText.innerHTML = resultHTML;
    resultBox.style.display = 'block';
}