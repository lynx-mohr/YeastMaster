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
    { id: "wlp500", name: "WLP500 Trappist", origin: "Belgium", temp: "18-22°C", tags: ["Fruity", "Abbey"], desc: "Från ett av de sex belgiska trappistbryggerierna.", styles: "Tripel, Quad" },
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

// --- 1. VY-HANTERARE (Viktig för att tända sidan!) ---
function showView(viewName) {
    const views = {
        login: document.getElementById('login-container'),
        claim: document.getElementById('claim-container'),
        dashboard: document.getElementById('dashboard-container'),
        library: document.getElementById('view-library'), // Ny!
        lab: document.getElementById('view-lab'),         // Ny!
        settings: document.getElementById('view-settings') // Ny!
    };
    
    Object.keys(views).forEach(key => {
        if (views[key]) {
            if (key === viewName) {
                // Dashboard, Library, Lab och Settings kör 'block'
                // Login och Claim kör 'flex' för centrering
                const isFlexView = (key === 'login' || key === 'claim');
                views[key].style.display = isFlexView ? 'flex' : 'block';
            } else {
                views[key].style.display = 'none';
            }
        }
    });
}

// Och se till att denna finns för att tända ikonerna!
function setActive(clickedElement) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    clickedElement.classList.add('active');
}

// --- 2. INLOGGNINGS-VAKT ---
auth.onAuthStateChanged(async (user) => {
    const soulLoginPrompt = document.getElementById('soul-login-prompt');
    
    if (user) {
        // Om användaren är inloggad, dölj login-knappen
        if (soulLoginPrompt) soulLoginPrompt.style.display = 'none';

        // MAGIN: Vi fyller rullistan i biblioteket direkt!
        populateSyncDevices(user.uid); 

        try {
            const res = await fetch(`${API_BASE}/my-devices?uid=${user.uid}`);
            const devices = await res.json();
            if (devices.length > 0) {
                activeDeviceId = devices[0].device_id;
                showView('dashboard');
                updateDashboard();
            } else {
                showView('claim');
            }
        } catch (err) {
            console.error(err);
        }
    } else {
        // Om användaren är utloggad, visa login-knappen
        if (soulLoginPrompt) soulLoginPrompt.style.display = 'block';
        showView('soul');
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
            document.getElementById('temp-beer-val').innerText = latest.temp.toFixed(1);
            // Uppdatera hela text-strängen så pseudo-elementet kan rita konturen!
document.querySelector('.beer-temp').setAttribute('data-text', latest.temp.toFixed(1) + '°C');
            document.getElementById('air-temp-val').innerText = latest.air_temp.toFixed(1);

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
            document.getElementById('day-val').innerText = currentDay.toFixed(1);
            document.getElementById('phase-day-val').innerText = phaseDay.toFixed(1);
            document.getElementById('progress-percent').innerText = percent + "%";
            document.getElementById('progress-fill').style.width = percent + "%";

            // --- NY KOD FÖR MÅLTEMPERATUR ---
            // OBS: Kolla vad din variabel heter i ditt API. Ofta heter den target_temp, set_temp eller setpoint.
            const targetTemp = latest.target_temp || 0; 
            const targetTempElement = document.getElementById('target-temp-val');
            if (targetTempElement) {
                targetTempElement.innerText = targetTemp.toFixed(1);
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
    const temps = data.map(d => Number(d.temp) || 0); // <-- NYTT: Säkerhetsnät! Om d.temp är skumt, sätt 0.

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
                            color: '#666', 
                           font: { family: 'Lexend', size: 10 },
                            // <-- NYTT: Här är skyddet som förhindrar att funktionen kraschar
                            callback: function(value) {
                                return Number(value).toFixed(1) + '°';
                            }
                        }, 
                        grid: { color: 'rgba(255, 255, 255, 0.05)' } 
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
            
            if (phaseDays < 0.25) {
                // Första 6 timmarna (Lag phase): Ingen aktivitet alls
                spawnInterval = 9999999; 
            } 
            else if (phaseDays >= 0.25 && phaseDays < 0.5) {
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

if(document.getElementById('btn-logout')) {
    document.getElementById('btn-logout').addEventListener('click', () => {
        auth.signOut().then(() => {
            // Nollställ lokala variabler
            activeDeviceId = null;
            // Tvinga fram Soul of Beer-vyn
            showView('soul');
            console.log("Utloggad och skickad till Soul of Beer");
        }).catch((error) => {
            console.error("Logout-fel:", error);
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
        const isCustom = yeast.isCustom ? 'custom-profile' : ''; // Kollar om det är din egen
        
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

// 1. HOVER-logik (PC - Tooltip)
        card.onmousemove = (e) => {
            if (tooltip) {
                tooltip.style.display = "block";
                tooltip.style.left = (e.clientX + 15) + "px";
                tooltip.style.top = (e.clientY + 15) + "px";
                tooltip.innerHTML = `<strong>${yeast.name}</strong><br>${yeast.temp}<br>${yeast.tags.join(', ')}`;
            }
        };
        card.onmouseleave = () => { if(tooltip) tooltip.style.display = "none"; };

        // --- MAGIN FÖR DUBBELKLICK & LÅNGKLICK ---
        let clickTimer = null;
        let touchTimer = null;

        // 2. ENKELKLICK (Öppnar detaljvyn för att välja)
        card.onclick = (e) => {
            // Avbryt om vi precis dubbelklickade
            if (clickTimer) clearTimeout(clickTimer);
            clickTimer = setTimeout(() => {
                openYeastDetail(yeast);
            }, 250); // 250ms är den perfekta fördröjningen för att vänta på dubbelklick
        };

        // 3. DUBBELKLICK (PC - Öppnar Modalen med peppig text)
        card.ondblclick = (e) => {
            clearTimeout(clickTimer); // Förhindra enkelklicket från att triggas
            openYeastModal(yeast);
        };

        // 4. LÅNGKLICK (Mobil - Öppnar Modalen)
        card.addEventListener('touchstart', (e) => {
            touchTimer = setTimeout(() => {
                clearTimeout(clickTimer); // Förhindra enkelklicket
                openYeastModal(yeast);
            }, 600); // 600 millisekunder känns naturligt på mobil
        }, {passive: true});

        card.addEventListener('touchend', () => clearTimeout(touchTimer));
        card.addEventListener('touchmove', () => clearTimeout(touchTimer));

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

// Grundläggande data för de 4 stegen (Dag, Temp)
let profilePoints = [
    { x: 0, y: 19 },   // Steg 1: Pitch / Primary
    { x: 5, y: 22 },   // Steg 2: Cleanup / D-Rest
    { x: 8, y: 3 },    // Steg 3: Cold Crash
    { x: 14, y: 3 }    // Steg 4: Conditioning
];

// Data-tillstånd för torrhumlingen
let dryHopData = {
    enabled: false,
    day: 5.0,
    isDragging: false,
    color: '#00e5ff'
};

// --- CHART.JS PLUGIN: Torrhumlingslinjen ---
const dryHopPlugin = {
    id: 'dryHopLine',
    afterDraw: (chart) => {
        if (!dryHopData.enabled) return;

        const {ctx, chartArea: {top, bottom, left, right}, scales: {x}} = chart;
        const xPix = x.getPixelForValue(dryHopData.day);

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
    document.getElementById('val-t1').innerText = profilePoints[0].y.toFixed(1) + "°C";
    document.getElementById('val-t2').innerText = profilePoints[1].y.toFixed(1) + "°C";
    document.getElementById('val-d2').innerText = profilePoints[1].x.toFixed(1);
    document.getElementById('val-t3').innerText = profilePoints[2].y.toFixed(1) + "°C";
    document.getElementById('val-d3').innerText = profilePoints[2].x.toFixed(1);
    document.getElementById('val-t4').innerText = profilePoints[3].y.toFixed(1) + "°C";
    document.getElementById('val-d4').innerText = profilePoints[3].x.toFixed(1);
    if (dryHopData.enabled) {
        document.getElementById('hop-day-val').innerText = dryHopData.day.toFixed(1);
    }
}

// --- INITIALISERAR GRAFEN OCH DRAG-LOGIKEN ---
function initLabChart() {
    const canvas = document.getElementById('lab-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let themeAccent = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim() || '#00e5ff';
    dryHopData.color = themeAccent;

    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)'); 
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    labChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Profile Target Temp',
                data: profilePoints,
                borderColor: themeAccent,
                backgroundColor: gradient,
                borderWidth: 3,
                pointBackgroundColor: '#fff',
                pointBorderColor: themeAccent,
                pointRadius: 8,         
                pointHoverRadius: 12,   
                showLine: true,
                tension: 0.1,
                clip: false // <--- NYTT: Förhindrar att prickarna klipps av i kanterna!
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false, 
            layout: {
                padding: { top: 10, right: 15, left: 5, bottom: 5 } // Ger lite extra luft inuti rutan
            },
            scales: {
                x: {
                    type: 'linear',
                    min: -1, // <--- NYTT: Trycker in axeln så punkt 0 får plats
                    max: Math.max(10, profilePoints[profilePoints.length - 1].x + 2), // <--- NYTT: Dynamisk startlängd
                    title: { display: true, text: 'Days', color: '#888', font: {family: 'Lexend', weight: 600} },
                    ticks: { 
                        color: '#666',
                        callback: function(value) {
                            return value < 0 ? '' : value; // Döljer "-1" så det ser snyggt ut
                        }
                    },
                    grid: { color: 'rgba(255,255,255,0.05)' }
                },
                y: {
                    min: -2,
                    suggestedMax: 30,
                    title: { display: true, text: 'Temp (°C)', color: '#888', font: {family: 'Lexend', weight: 600} },
                    ticks: { color: '#666', callback: v => Number(v).toFixed(1) + '°' },
                    grid: { color: 'rgba(255,255,255,0.05)' }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: (context) => `Day ${context.parsed.x.toFixed(1)}: ${context.parsed.y.toFixed(1)}°C`
                    }
                }
            }
        }
    });

    // --- GEMENSAM LOGIK FÖR ATT HANTERA DRAG (MÖSS OCH FINGRAR) ---
    
    let draggedPointIndex = null;
    const hitRadius = 20;

    function getCanvasCoords(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }

    function handleStart(e) {
        if (!labChart) return;
        const coords = getCanvasCoords(e);
        const mouseX = coords.x;
        const mouseY = coords.y;

        if (dryHopData.enabled) {
            const lineXPix = labChart.scales.x.getPixelForValue(dryHopData.day);
            if (Math.abs(mouseX - lineXPix) < hitRadius) {
                dryHopData.isDragging = true;
                if (e.cancelable) e.preventDefault(); 
                return;
            }
        }

        for (let i = 0; i < profilePoints.length; i++) {
            const ptX = labChart.scales.x.getPixelForValue(profilePoints[i].x);
            const ptY = labChart.scales.y.getPixelForValue(profilePoints[i].y);

            const distance = Math.sqrt(Math.pow(mouseX - ptX, 2) + Math.pow(mouseY - ptY, 2));
            if (distance < hitRadius) {
                draggedPointIndex = i;
                labChart.options.plugins.tooltip.enabled = false;
                if (e.cancelable) e.preventDefault(); 
                return;
            }
        }
    }

    function handleMove(e) {
        if (!labChart) return;
        const coords = getCanvasCoords(e);
        const mouseX = coords.x;
        const mouseY = coords.y;

        if (!e.touches) {
            let hoveringSomething = false;
            if (dryHopData.enabled) {
                const lineXPix = labChart.scales.x.getPixelForValue(dryHopData.day);
                if (Math.abs(mouseX - lineXPix) < hitRadius || dryHopData.isDragging) {
                    canvas.style.cursor = 'ew-resize';
                    hoveringSomething = true;
                }
            }
            if (!hoveringSomething && draggedPointIndex === null) {
                for (let i = 0; i < profilePoints.length; i++) {
                    const ptX = labChart.scales.x.getPixelForValue(profilePoints[i].x);
                    const ptY = labChart.scales.y.getPixelForValue(profilePoints[i].y);
                    if (Math.sqrt(Math.pow(mouseX - ptX, 2) + Math.pow(mouseY - ptY, 2)) < hitRadius) {
                        canvas.style.cursor = 'grab';
                        hoveringSomething = true;
                        break;
                    }
                }
            }
            if (!hoveringSomething) canvas.style.cursor = 'default';
            if (draggedPointIndex !== null) canvas.style.cursor = 'grabbing';
        }

        if (draggedPointIndex !== null || dryHopData.isDragging) {
            if (e.cancelable) e.preventDefault(); 
        }

        // A. Dra temperatur-punkt
        if (draggedPointIndex !== null) {
            let newX = labChart.scales.x.getValueForPixel(mouseX);
            let newY = labChart.scales.y.getValueForPixel(mouseY);

            if (draggedPointIndex === 0) {
                newX = 0; 
            } else {
                let minX = profilePoints[draggedPointIndex - 1].x + 0.5;
                let maxX = (draggedPointIndex < profilePoints.length - 1) ? (profilePoints[draggedPointIndex + 1].x - 0.5) : 60;
                newX = Math.max(minX, Math.min(newX, maxX));
            }

            newY = Math.max(-2, Math.min(newY, 40));

            profilePoints[draggedPointIndex].x = Math.round(newX * 2) / 2;
            profilePoints[draggedPointIndex].y = Math.round(newY * 2) / 2;

            // --- NYTT: ADAPTERA X-AXELN DYNAMISKT ---
            const currentMax = profilePoints[profilePoints.length - 1].x;
            labChart.options.scales.x.max = Math.max(10, currentMax + 2); // Följer med sista punkten utåt

            labChart.update('none'); 
            updateSummaryText();
        }

        // B. Dra humle-linjen
        else if (dryHopData.isDragging) {
            let newDay = labChart.scales.x.getValueForPixel(mouseX);
            const maxDay = profilePoints[profilePoints.length - 1].x;
            newDay = Math.max(0, Math.min(newDay, maxDay));
            dryHopData.day = Math.round(newDay * 10) / 10;
            
            labChart.update('none');
            updateSummaryText();
        }
    }

    function handleEnd() {
        if (draggedPointIndex !== null || dryHopData.isDragging) {
            draggedPointIndex = null;
            dryHopData.isDragging = false;
            canvas.style.cursor = 'default';
            labChart.options.plugins.tooltip.enabled = true; 
            labChart.update('none');
        }
    }

    canvas.addEventListener('mousedown', handleStart);
    canvas.addEventListener('mousemove', handleMove);
    canvas.addEventListener('mouseup', handleEnd);
    canvas.addEventListener('mouseleave', handleEnd);

    canvas.addEventListener('touchstart', handleStart, { passive: false });
    canvas.addEventListener('touchmove', handleMove, { passive: false });
    canvas.addEventListener('touchend', handleEnd);
    canvas.addEventListener('touchcancel', handleEnd);
    
    updateSummaryText(); 
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
        
        if (this.value !== "") {
            // En jäst är vald -> Göm texten och tona in grafen!
            if (placeholder) placeholder.style.display = 'none';
            if (chartArea) {
                chartArea.style.opacity = '1';
                chartArea.style.pointerEvents = 'auto'; // Slå på drag-funktionen
            }
        } else {
            // Inget är valt (eller man ångrade sig) -> Visa texten igen
            if (placeholder) placeholder.style.display = 'flex';
            if (chartArea) {
                chartArea.style.opacity = '0';
                chartArea.style.pointerEvents = 'none'; // Stäng av drag-funktionen
            }
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
            [profilePoints[3].x, profilePoints[3].y]
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
    setTimeout(() => {
        location.reload(); 
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

function switchLabTab(tab) {
    document.getElementById('lab-content-calc').style.display = tab === 'calc' ? 'block' : 'none';
    document.getElementById('lab-content-academy').style.display = tab === 'academy' ? 'block' : 'none';
    
    document.querySelectorAll('.lab-tab').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.toLowerCase().includes(tab));
    });
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
const yeastDescriptions = {
  "us-05": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Safale US-05 (American Ale)</h3>
        <p>Bryggvärldens okrönta konung när det kommer till rena, krispiga American Ales och västkust-IPAs. Det är en extremt pålitlig arbetshäst som sätter malt och humle i förarsätet.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. Temperaturspannet (15-22 °C)</h4>
        <p>För att få den ikoniska, knivskarpa amerikanska profilen vill vi starta runt 18 °C. Går vi för varmt kan den kasta ur sig persiko-estrar, vilket vi vanligtvis vill undvika i en ren IPA.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">2. Medium Flockulering (Tålamod!)</h4>
        <p>US-05 svävar gärna kvar i ölet ett bra tag. Detta är superbra för jäsningen (den jäser ut torrt och effektivt), men det betyder att ölet kan vara disigt länge om vi inte kyler det hårt på slutet.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">Bryggarens Profil:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Dag 0-4:</strong> Spika tempen på 18 °C. Extremt rent jobb utan att bränna bort humlearomer.</li>
            <li><strong style="color: #fff;">Dag 4-7 (Diacetyl Rest):</strong> Rulla upp till 21 °C. Tvingar jästen att äta de sista, svåraste sockerarterna för en krispig avslutning.</li>
            <li><strong style="color: #fff;">Dag 7+:</strong> Stenhård Cold Crash. Droppa snabbt mot nollan för att tvinga jästen till botten.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: Eftersom den jäser så torrt och rent, finns det ingenting att gömma sig bakom. Minimera syrekontakten vid torrhumling!</i></p>
    `,

    "s-04": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Safale S-04 (English Ale)</h3>
        <p>Den brittiska sprintern! Älskad för sin förmåga att bygga fantastiska fruktiga estrar och sin brutala hastighet. Förstavalet för Bitters, Porters, Stouts och snabba Pale Ales.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. Temperaturspannet (15-20 °C)</h4>
        <p>S-04 älskar att skapa estrar (marmelad, mörka bär). Men om den får gå för varmt i början förvandlas den till en okontrollerad fruktbomb. Starta stramt på 18 °C för elegans.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">2. Extrem Flockulering (Tegelstenen)</h4>
        <p>När S-04 anser sig vara klar faller den till botten och bildar en jästkaka så fast att man nästan kan skära i den. Vi måste hinna värma upp den innan den går och lägger sig!</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">Bryggarens Profil:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Dag 0-3:</strong> Håll 18 °C. Den startar som ett godståg och skapar en kontrollerad fruktighet.</li>
            <li><strong style="color: #fff;">Dag 3-6 (Cleanup):</strong> Höj till 21 °C när bubblandet avtar. Denna värmeknuff väcker jästen för att städa upp smörkola och gröna äpplen.</li>
            <li><strong style="color: #fff;">Dag 6+:</strong> Cold Crash. Ölet blir kristallklart nästan omedelbart.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: Den lämnar kvar lite restsötma och kropp. Exakt därför är den magisk i mörka öl där du vill ha fyllighet.</i></p>
    `,

    "w-34-70": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Saflager W-34/70 (German Lager)</h3>
        <p>Kungen av underjäst! Denna berömda stam från Weihenstephan-bryggeriet i Tyskland är förmodligen den mest använda lagerjästen i hela världen. Den ger den där ikoniska, krispiga och rena smakprofilen vi älskar i en Pilsner eller Helles.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. Kylan är din vän (9-15 °C)</h4>
        <p>W-34/70 är en riktig kallbadare. Genom att jäsa den i botten av dess tolerans (runt 10-12 °C) trycker du ner produktionen av fruktiga estrar och svavel, vilket ger ölet dess rena karaktär.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">2. Smörkola-varning (Diacetyl)</h4>
        <p>Eftersom den jobbar kallt och långsamt, är lagerjäst ökänd för att lämna kvar diacetyl (smakar smör/smörkola). En kraftig temperaturhöjning på slutet är inte ett tips – det är ett krav!</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">Bryggarens Profil:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Dag 0-7:</strong> Håll stenhårt på 11 °C. Låt jästen jobba ostört i mörkret och kylan.</li>
            <li><strong style="color: #fff;">Dag 7-12 (D-Rest):</strong> Kasta upp tempen till 16 °C. Vi tvingar jästen att städa bort smörkolan innan den hinner gå i dvala.</li>
            <li><strong style="color: #fff;">Dag 12-28 (Lagering):</strong> Droppa till 2 °C. Lagra kallt länge. Proteiner och jäst sjunker sakta, ölet blir blankt och smakerna mognar (krispigheten träder fram).</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: Pitcha stort! Lageröl kräver nästan dubbelt så mycket jäst som en Ale för att starta hälsosamt i kylan. Använd Pitch Calculatorn!</i></p>
    `,

    "verdant": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Verdant IPA (Juice Maskinen)</h3>
        <p>Utvecklad tillsammans med Verdant Brewing Co., är detta den ultimata jästen för NEIPA och Hazy IPA. Den producerar massiva mängder aprikos- och vaniljestrar som backar upp modern humle perfekt.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. Biotransformationens Mästare</h4>
        <p>Denna jäst är fenomenal på att ta torrhumle under pågående jäsning och kemiskt bygga om humleoljorna till ännu fruktigare smaker (biotransformation).</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">Bryggarens Profil:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Dag 0-3:</strong> Starta på 19 °C för att bygga en solid, fruktig bas utan fuselalkoholer. (Pitcha första torrhumlen här!)</li>
            <li><strong style="color: #fff;">Dag 3-7:</strong> Låt temperaturen vandra upp till 22 °C för att stressa fram de sista saftiga estrarna och säkerställa en bra utjäsning.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: Den flockulerar ganska dåligt, vilket är EXAKT vad vi vill ha för att behålla the "Haze".</i></p>
    `,

    "voss": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Voss Kveik (Vikingen)</h3>
        <p>Det norska kraftpaketet som bryter mot exakt alla regler vi lärt oss om bryggning. Den jäser brännhett, rasande snabbt, och lämnar rena, lätta apelsinnoter efter sig.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. Extrem värme (30-40 °C)</h4>
        <p>Medan andra jäster hade dött eller skapat odrickbart raketbränsle vid 38 °C, så trivs Voss bäst där. Den behöver inga kylskåp, bara en värmematta och massor av jästnäring!</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">Bryggarens Profil:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Dag 0-3:</strong> Spika den på 38 °C. Jäsningen är ofta extremt våldsam och helt klar på bara 2-3 dagar.</li>
            <li><strong style="color: #fff;">Dag 4+:</strong> Kyl direkt till serveringstemperatur. Den flockulerar stenhårt och snabbt. Du kan dricka ölet samma vecka!</li>
        </ul>
    `,

    "KVEIK": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Voss Kveik (Vikingen)</h3>
        <p>Det norska kraftpaketet som bryter mot exakt alla regler vi lärt oss om bryggning. Den jäser brännhett, rasande snabbt, och lämnar rena, lätta apelsinnoter efter sig.</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">1. Extrem värme (30-40 °C)</h4>
        <p>Medan andra jäster hade dött eller skapat odrickbart raketbränsle vid 38 °C, så trivs Voss bäst där. Den behöver inga kylskåp, bara en värmematta och massor av jästnäring!</p>
        
        <h4 style="margin-top: 15px; color: #ccc;">Bryggarens Profil:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Dag 0-3:</strong> Spika den på 38 °C. Jäsningen är ofta extremt våldsam och helt klar på bara 2-3 dagar.</li>
            <li><strong style="color: #fff;">Dag 4+:</strong> Kyl direkt till serveringstemperatur. Den flockulerar stenhårt och snabbt. Du kan dricka ölet samma vecka!</li>
        </ul>
    `,


    "Wyeast 1968": `
        <p><strong>Wyeast 1968 (London ESB Ale)</strong></p>
        <h3>1. Temperature Range (18-22°C)</h3>
        <p>Wyeast 1968 thrives between 18 and 22 degrees Celsius.<br>
        <strong>Our Pick:</strong> Starting at 19°C is perfect for a balanced ester profile (fruitiness) without becoming too alcoholic or solvent-like.</p>
        
        <h3>2. Extreme Flocculation (Crucial!)</h3>
        <p>It has "Very High" flocculation. This means the yeast drops to the bottom like a rock as soon as it feels done.<br>
        <strong>The Risk:</strong> If the temperature drops too early, or if the yeast goes to sleep too fast, it can leave behind compounds like Diacetyl (which tastes like butterscotch).</p>
        
        <h3>3. The Need for a Diacetyl Rest</h3>
        <p>Because it drops out so quickly, we need to force it to stay awake at the end of fermentation to "clean up" after itself.</p>
        <ul>
            <li><strong>Active Ferm (0-3 days):</strong> This is where the core flavors are created. By keeping it at 19°C, we get that classic British maltiness.</li>
            <li><strong>Diacetyl Rest (4-7 days):</strong> Here we raise the temperature quite a bit (to its max limit of 22°C). Since 1968 wants to "go to bed" early, the heat helps it stay in suspension and consume byproducts. This is the secret behind a great British ale!</li>
            <li><strong>Cold Crash:</strong> Because of the high flocculation, the beer will become brilliantly clear much faster than with other strains.</li>
        </ul>
    `,
    "WLP920": `
        <p><strong>WLP920 Old Bavarian Lager</strong> is a classic from southern Germany, known for a malty profile with a light touch of esters, making it perfect for Oktoberfest beers, Bocks, and dark lagers.</p>
        <p>Based on the White Labs spec sheet and traditional lager practices, here are the critical points we need to program:</p>
        
        <h3>1. Temperature Range (10–13 °C)</h3>
        <p>White Labs states 10–13 °C as the optimal range.<br>
        <strong>Strategy:</strong> To get that clean, German character, we want to start at the lower end of the range (around 10.5 °C) to keep byproducts in check.</p>
        
        <h3>2. Diacetyl Rest (A must for Lagers!)</h3>
        <p>Since WLP920 is a bottom-fermenting lager yeast working cold, it produces more diacetyl (butterscotch) than an ale. Therefore, we need to significantly raise the temperature towards the end of fermentation while the yeast is still active but finishing up.</p>
        
        <h3>3. "Lagering" (The Conditioning Phase)</h3>
        <p>Lagers need time to clear and mature. That's why we use a longer profile than for an ESB.</p>
        
        <h3>Why does the profile look like this?</h3>
        <ul>
            <li><strong>Primary Ferm (Day 10):</strong> We give it 10 full days in the cold. Lager yeast works slower than ale yeast.</li>
            <li><strong>Diacetyl Rest (Day 14):</strong> We step up to 16 degrees. That's above the "optimal" fermentation temp, but it's exactly what's needed for the yeast to clean up before going dormant.</li>
            <li><strong>Lagering (Day 28):</strong> We stretch the time to 28 days. A lager benefits from a long cold conditioning to become truly crisp and clear.</li>
        </ul>
        <p><strong>A tip for this specific yeast:</strong><br>
        White Labs mentions it has "Medium" flocculation. It won't drop as aggressively as the London yeast. Therefore, Step 3 (Lagering) is extra important here – give it time in the cold, and you'll be rewarded with a brilliantly clear, professional beer!</p>
    `,
    "Imperial B45": `
         <p><strong>Imperial Yeast B45 Gnome</strong> is an amazing strain! It's a classic Belgian yeast (rumored to be from the famous Achouffe brewery) renowned for producing beautiful pear esters and a light spiciness (phenols).</p>
        <p>The most important thing about this yeast is that it loves heat. Imperial Yeast recommends a range of 20–25.5 °C. Run it too cold and it gets "lazy" and under-attenuates; start it too hot and it might throw off too much bubblegum flavor.</p>
        
        <h3>Here are two profiles tailored for "The Gnome":</h3>
        <ol>
            <li><strong>"Classic Gnome" (Balanced):</strong> We start at the lower end of the range for a clean primary, then let the temperature free-rise to help the yeast "clean up" and deliver that classic Belgian character.</li>
            <li><strong>"Spicy Gnome" (Warm & Expressive):</strong> Here we push the heat early on to really coax out the spicy phenols and fruity esters expected in a strong Belgian ale.</li>
        </ol>
        
        <h3>Why are these profiles great for Gnome?</h3>
        <ul>
            <li><strong>Belgian Ramp:</strong> Belgian yeast thrives on a temperature "ramp". It mimics historical brewing before refrigeration – fermentation generates its own heat, naturally raising the temp and creating complex flavors.</li>
            <li><strong>Attenuation:</strong> Gnome (and Belgian strains in general) want to finish very dry. By pushing towards 24-25 degrees at the end, we ensure the yeast has the energy to finish the job, especially for high gravity beers like a Dubbel or Tripel.</li>
        </ul>
    `,
    "Wyeast 1084": `
         <p><strong>Wyeast 1084 Irish Ale</strong> is a true workhorse! This is the classic strain from the Guinness brewery in Dublin. It's incredibly versatile – providing a rich, malty profile with a subtle hint of fruit (esters) and occasionally a touch of diacetyl that works perfectly in dark beers.</p>
        <p>According to Wyeast, the range is 17–22 °C.</p>
        
        <h3>Two profiles for your 1084:</h3>
        <ol>
            <li><strong>"Irish Dry Stout" (Clean & Crisp):</strong> We keep the temperature low for a clean, malty profile, letting the roasted malts shine. We finish with a slight bump to ensure complete attenuation without excessive butterscotch notes.</li>
            <li><strong>"Irish Red Ale" (Malty & Full):</strong> Here we allow a bit more fruitiness by starting warmer. Excellent for Irish Red Ales or robust Porters where a fuller mouthfeel is desired.</li>
        </ol>
        
        <h3>Why are these profiles good for 1084?</h3>
        <ul>
            <li><strong>Diacetyl Control:</strong> This yeast can occasionally throw some diacetyl. By ramping up to 20 °C or more towards the end in both profiles, we help the yeast reabsorb its own byproducts.</li>
            <li><strong>Flocculation:</strong> 1084 flocculates well, but not as fast as the London strain. Therefore, a solid 14-day schedule with a proper Cold Crash is golden for a bright beer.</li>
        </ul>
    `,
    "Wyeast 3944": `
        <p><strong>Wyeast 3944 Belgian Witbier</strong> is the king of wheat beers! This is the classic "Hoegaarden" strain, known for immense character. It produces a complex blend of spicy phenols (pepper/clove) and fruity esters (banana/citrus), finishing with a slight, refreshing tartness.</p>
        <p>Wyeast states a range of 16–24 °C, but this yeast has some specific quirks we must account for:</p>
        <ul>
            <li><strong>Low Flocculation:</strong> This yeast refuses to drop, and that's a good thing! A Witbier should be hazy. We avoid an aggressive cold crash.</li>
            <li><strong>Krausen Monster:</strong> It creates a massive krausen (foam head) early on.</li>
            <li><strong>Temperature Sensitive:</strong> If kept too cold, it can stall prematurely. We need a steady rise to ensure full attenuation.</li>
        </ul>
        
        <h3>Two profiles for your 3944:</h3>
        <ol>
            <li><strong>"Classic Belgian Wit" (Balanced):</strong> Aiming for the classic balance where neither spice nor fruit dominates. We start cool and let it rise slowly.</li>
            <li><strong>"Summer Wit" (Fruity & Expressive):</strong> For a truly summery beer with punchy banana and citrus notes, we use this warmer starting profile.</li>
        </ol>
        
        <h3>What makes these profiles special?</h3>
        <ul>
            <li><strong>No "Hard" Cold Crash:</strong> In both profiles, the final temp is set to 6.0 °C instead of 2.0–3.0 °C. Why? In a Witbier, we want the yeast and wheat proteins to stay in suspension for that milky, white appearance. Chill too hard, the beer clears up, and you lose the style!</li>
            <li><strong>Phenol Control:</strong> Starting at 18°C in the Classic profile prevents it from tasting like bubblegum, bringing forward elegant spicy notes instead.</li>
        </ul>
    `,
    "WLP833": `
        <p><strong>WLP833 German Bock Lager</strong> is a heavyweight! This is the strain from the renowned Ayinger brewery in Southern Bavaria. If WLP920 is for "clean" lagers, WLP833 is the king of maltiness. It leaves a fantastic malty sweetness and body, making it the obvious choice for Bocks, Doppelbocks, and festive Märzens.</p>
        <p>White Labs recommends 9–13 °C. As with all lager yeasts, control during the first few days is critical to avoid sulfur and off-flavors.</p>
        
        <h3>Two profiles tailored for your Bavarian malt machine:</h3>
        <ol>
            <li><strong>"Traditional Bock" (Pure Malt Focus):</strong> We let the yeast work cold and slow to maximize that clean Bavarian malt profile. Since Bocks often have high starting gravities, we give it extra time to attenuate and a substantial lagering period.</li>
            <li><strong>"Fast Bock" (Modern Lager Method):</strong> If you don't want to wait five weeks, we use a profile with a slightly higher starting temp and an earlier diacetyl rest. Works great for a Helles or a lighter bock.</li>
        </ol>
        
        <h3>Why are these profiles great for the Bock yeast?</h3>
        <ul>
            <li><strong>Preserving Malt:</strong> Keeping Primary at 10°C in the traditional profile prevents byproducts that clash with the rich malt flavor.</li>
            <li><strong>Time for Cleanup:</strong> Bock yeast can be stubborn about cleaning up after a high-gravity fermentation. We push up to 16-17°C during the diacetyl rest to truly wake the yeast up before the cold sets in.</li>
        </ul>
    `,
    "WLP007": `
         <p><strong>WLP007 Dry English Ale</strong> is exactly what you'd expect – a heat-seeking missile! Known as the "Workhorse" yeast for many American craft breweries (often called "Whitbread Dry").</p>
        <p>What makes WLP007 unique is the combination of two things:</p>
        <ol>
            <li>It's fast and attenuates very dry.</li>
            <li>It drops like a rock (extremely high flocculation).</li>
        </ol>
        <p>White Labs recommends 18–21 °C. Because it's so aggressive, it generates a lot of exothermic heat, requiring a controlled start.</p>
        
        <h3>Two profiles for your British torpedo:</h3>
        <ol>
            <li><strong>"Dry West Coast" (Clean & Dry):</strong> Perfect for an IPA or Pale Ale where the hops should shine without yeast interference. We start cool to keep esters down, then let it clean up quickly.</li>
            <li><strong>"Monster Stout" (Aggressive & Fast):</strong> WLP007 is fantastic for heavy Stouts as it handles high ABV well. We push the temperature a bit more here to finish the beer quickly.</li>
        </ol>
        
        <h3>Why does WLP007 love your control box?</h3>
        <ul>
            <li><strong>Temp Control:</strong> Because 007 ferments so violently, it creates intense heat. Your thermostat will work hard the first 48 hours to hold it at 18.5°C. Without control, it easily spikes to 24°C, bringing out solvent-like flavors.</li>
            <li><strong>Flocculation:</strong> The beer will become crystal clear much faster than with other strains. Just 2-3 days into the Cold Crash, the yeast cake will be rock solid.</li>
        </ul>
    `,
    "Wyeast 1318": `
        <p><strong>Wyeast 1318 London Ale III</strong> is the very foundation of the NEIPA revolution. This is the yeast that gave the world "Juice".</p>
        <p>What makes 1318 special is its low flocculation, which helps keep the beer hazy, and its production of fantastic stone fruit esters (peach/apricot) that pair perfectly with modern hops like Citra and Mosaic.</p>
        <p>Wyeast recommends a range of 18–22 °C.</p>
        
        <h3>Here are two profiles:</h3>
        <ol>
            <li><strong>"Juicy NEIPA" (Biotransformation):</strong> Aimed at maximizing the yeast/hop interaction. We start steady and ramp the temperature to help the yeast clean up and dry out the final sweetness.</li>
            <li><strong>"Classic Hazy" (Full & Soft):</strong> We keep the temperature slightly more even throughout to preserve a heavier mouthfeel.</li>
        </ol>
    `,
    "Wyeast 2565": `
        <p><strong>Wyeast 2565 Kölsch</strong> is one of the most interesting strains available. It's a "hybrid" – technically an ale yeast, but it prefers working at near-lager temperatures. It's known for an extremely crisp, clean, and almost vinous profile with a light hint of apple or pear.</p>
        <p>Due to its low flocculation (it stays in suspension), it requires a proper cold conditioning (lagering) period to become as brilliantly clear as a true Kölsch should be.</p>
        
        <h3>Two profiles for your German hybrid:</h3>
        <ol>
            <li><strong>"Authentic Kölsch" (Crisp & Lager-like):</strong> The profile for challenging the breweries of Cologne. We start at the absolute bottom of the range for maximum crispness and minimal esters.</li>
            <li><strong>"Hybrid Ale/Alt" (Fruity & Vinous):</strong> For a more "vinous" character or when brewing a Düsseldorf Altbier, we run this slightly warmer profile.</li>
        </ol>

        <h3>Why is "Lagering" important here?</h3>
        <p>Wyeast 2565 is notoriously "dusty." It hangs around in the beer, keeping it cloudy for a long time. By incorporating a 14-day lagering at 2°C in the authentic profile, we finally force it to the bottom. The result is that brilliant, golden beer that looks like a lager but tastes like an ale.</p>
    `,
    "WLP095": `
        <p><strong>WLP095 Burlington Ale</strong>! This is the yeast that put the Vermont style on the map (widely known as the "Conan" strain). It's famous for its unique ability to produce intense notes of ripe peach and apricot, making it the ultimate partner for hops like Citra, Galaxy, and Mosaic.</p>
        <p>Unlike London III (1318), Burlington tends to attenuate slightly more, yielding a drier but still exceptionally "juicy" beer. White Labs recommends 19–21 °C.</p>
        
        <h3>Two profiles for your Vermont juice:</h3>
        <ol>
            <li><strong>"Burlington Hazy" (Max Peach):</strong> Focused on coaxing out those famous stone fruit esters. We start in the middle of the range and let it free-rise for complete attenuation.</li>
            <li><strong>"Conan Style IPA" (Crisp Juice):</strong> We keep the temperature tighter early on for a cleaner profile where hops take center stage, while that typical Burlington character provides a beautiful backdrop.</li>
        </ol>
    `
};

// --- POPUP-FUNKTIONER (MODAL) ---
function openYeastModal(yeast) {
    const modal = document.getElementById('yeast-info-modal');
    document.getElementById('modal-yeast-name').innerText = yeast.name;
    
    let detailedText = "";

    // Kolla om detta är en egengjord profil (vi kollar efter flaggan 'isCustom')
    if (yeast.isCustom) {
        // Hitta den sparade profildatan i localStorage för att få tag i stegen
        const savedProfiles = JSON.parse(localStorage.getItem('customYeastProfiles') || '[]');
        // Vi matchar på namnet (eller så kan vi skicka med hela objektet i framtiden)
        const profileData = savedProfiles.find(p => p.s === yeast.name);

        if (profileData) {
            const s = profileData.steps;
            const baseYeast = profileData.p.replace('Custom (', '').replace(')', '');

            detailedText = `
                <div style="line-height: 1.6;">
                    <p style="color: var(--accent-color); font-weight: 800; margin-bottom: 15px;">Created by you!</p>
                    <p>This profile is used with <strong>${baseYeast}</strong> and these are the profile steps:</p>
                    
                    <ul style="list-style: none; padding: 0; margin-top: 15px; display: flex; flex-direction: column; gap: 8px;">
                        <li><strong style="color: #fff;">Pitch / Primary:</strong> Start at ${s[0][1]}°C.</li>
                        <li><strong style="color: #fff;">Cleanup / D-Rest:</strong> Rise to ${s[1][1]}°C on Day ${s[1][0]}.</li>
                        <li><strong style="color: #fff;">Cold Crash:</strong> Drop to ${s[2][1]}°C on Day ${s[2][0]}.</li>
                        <li><strong style="color: #fff;">Conditioning:</strong> Hold at ${s[3][1]}°C until Day ${s[3][0]}.</li>
                    </ul>
                    
                    ${profileData.dryHopDay ? `<p style="margin-top: 15px; color: #00e5ff;"><strong>Dry Hop:</strong> Scheduled for Day ${profileData.dryHopDay}</p>` : ''}
                </div>
            `;
        } else {
            detailedText = `<p>Custom profile data not found.</p>`;
        }
    } else {
        // Om det är en vanlig jäst från databasen, kör som vanligt
        detailedText = yeastDescriptions[yeast.name] || yeastDescriptions[yeast.id];
        if (!detailedText) {
            detailedText = `<p>${yeast.desc}</p><h3 style="margin-top:15px;">Passar till:</h3><p>${yeast.styles}</p>`;
        }
    }
    
    document.getElementById('modal-yeast-desc').innerHTML = detailedText;
    modal.style.display = 'flex';
}

window.closeYeastModal = function() {
    document.getElementById('yeast-info-modal').style.display = 'none';
}

// Stäng modalen om man klickar utanför rutan
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
    if (!confirm(`Are you sure you want to delete "${profileName}"?`)) return;

    // 1. Hämta befintliga profiler
    let savedProfiles = JSON.parse(localStorage.getItem('customYeastProfiles') || '[]');
    
    // 2. Filtrera bort den vi vill radera
    savedProfiles = savedProfiles.filter(p => p.s !== profileName);
    
    // 3. Spara tillbaka till localStorage
    localStorage.setItem('customYeastProfiles', JSON.stringify(savedProfiles));

    // 4. Ladda om sidan för att uppdatera alla listor och grafer
    location.reload();
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
async function syncToSelectedDevice() {
    const targetId = document.getElementById('sync-target-device').value;
    const btn = document.getElementById('sync-btn');

    if (!targetId) {
        alert("Välj en enhet att synka till!");
        return;
    }

    if (selectedStrains.length === 0) {
        alert("Välj minst en jäststam att synka!");
        return;
    }

    // Animation: Visa att något händer
    const originalText = btn.innerText;
    btn.innerText = "SYNCING... ⚡";
    btn.disabled = true;

    try {
        // Här bygger vi paketet som ska skickas till ditt API
        const payload = {
            device_id: targetId,
            strains: selectedStrains // Dina 10 valda ID:n
        };

        const res = await fetch(`${API_BASE}/sync-yeast`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (res.ok) {
            btn.innerText = "SYNC SUCCESSFUL! ✓";
            btn.style.backgroundColor = "#2ecc71"; // Grön för succé
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = ""; 
                btn.disabled = false;
            }, 3000);
        } else {
            throw new Error("Synk misslyckades");
        }
    } catch (err) {
        alert("Fel vid synk: " + err.message);
        btn.innerText = originalText;
        btn.disabled = false;
    }
}

// ==========================================
// SWIPE NAVIGATION (Mobil)
// ==========================================

// Ordningen på flikarna, exakt så som de ligger i din meny
const viewOrder = ['soul', 'librarian', 'lab', 'library', 'dashboard', 'settings'];

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
    // SÄKERHETSSPÄRR: Ignorera svep om du rör grafen, sökrutan eller sliders
    if (e.target.closest('.chart-container') || e.target.tagName.toLowerCase() === 'input') return;

    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', e => {
    if (e.target.closest('.chart-container') || e.target.tagName.toLowerCase() === 'input') return;

    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, { passive: true });



