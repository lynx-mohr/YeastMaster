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
        // Om användaren är inloggad, dölj login-knappen på Soul of Beer-sidan
        if (soulLoginPrompt) soulLoginPrompt.style.display = 'none';

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
        // Om användaren är utloggad, visa login-knappen på Soul of Beer-sidan
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
                        ticks: { color: '#666', maxTicksLimit: 5, font: { family: 'Inter', size: 10 } }, 
                        grid: { display: false } 
                    },
                    y: { 
                        ticks: { 
                            color: '#666', 
                            font: { family: 'Inter', size: 10 }, 
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
        setTimeout(startBubbles, 1000); // Vänta på att dashboarden ska visas
        return;
    }

    let bubbles = [];
    let lastSpawn = 0;

function animate(timestamp) {
        const statusElement = document.getElementById('status-text');
        const statusText = statusElement ? statusElement.innerText.toUpperCase() : '';
        
        // 1. Bestäm spawn-hastighet baserat på status
        let spawnInterval = 250; 
        if (statusText.includes('CRASH')) {
            spawnInterval = 20000; // En bubbla var 20:e sekund
        } else if (statusText === 'FINISHED') {
            spawnInterval = 9999999; // Aldrig
        }

        // 2. Skapa ny bubbla om det är dags
        if (timestamp - lastSpawn > spawnInterval) {
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            const size = Math.random() * 0.7 + 0.5; 
            const startX = 50 + (Math.random() * 12 - 6); 
            circle.setAttribute("r", size);
            circle.setAttribute("fill", "rgba(255, 255, 255, 0.7)");
            stream.appendChild(circle);
            
            bubbles.push({ 
                element: circle, 
                x: startX, 
                y: 85, 
                speed: Math.random() * 0.2 + 0.3, 
                wobbleOffset: Math.random() * Math.PI * 2 
            });
            lastSpawn = timestamp;
        }

        // 3. Flytta existerande bubblor (Denna del får inte tas bort!)
        for (let i = bubbles.length - 1; i >= 0; i--) {
            let b = bubbles[i];
            b.y -= b.speed;
            let currentX = b.x + Math.sin((b.y * 0.05) + b.wobbleOffset) * 0.4;
            b.element.setAttribute("cx", currentX);
            b.element.setAttribute("cy", b.y);
            
            // Ta bort bubblan när den når toppen
          // Bubblan tas nu bort precis när den når vätskeytan (32)
if (b.y < 39) { 
    b.element.remove(); 
    bubbles.splice(i, 1); 
}
        }

        // 4. Fortsätt animera (Motorn i alltihop!)
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
                    name: "Min YeastMaster"
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
        const card = document.createElement('div');
        card.className = `yeast-card ${isSelected ? 'selected' : ''}`;
        
        card.innerHTML = `
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

// Ladda sparade inställningar när sidan startar
window.addEventListener('DOMContentLoaded', () => {
    const savedAccent = localStorage.getItem('accentColor');
    if (savedAccent) setAccent(savedAccent);
    
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
    }
});

function setActive(clickedElement) {
    // Ta bort 'active' klassen från alla nav-items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Lägg till 'active' på den vi just klickade på
    clickedElement.classList.add('active');
}

// ==========================================
// THE ARCANE LAB (Profilbyggaren)
// ==========================================

let labChart;

function updateLabChart() {
    const canvas = document.getElementById('lab-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Hämta värden från alla inputs
    const dataPoints = [
        { x: parseFloat(document.getElementById('lab-d1').value) || 0, y: parseFloat(document.getElementById('lab-t1').value) || 0 },
        { x: parseFloat(document.getElementById('lab-d2').value) || 0, y: parseFloat(document.getElementById('lab-t2').value) || 0 },
        { x: parseFloat(document.getElementById('lab-d3').value) || 0, y: parseFloat(document.getElementById('lab-t3').value) || 0 },
        { x: parseFloat(document.getElementById('lab-d4').value) || 0, y: parseFloat(document.getElementById('lab-t4').value) || 0 },
        { x: parseFloat(document.getElementById('lab-d5').value) || 0, y: parseFloat(document.getElementById('lab-t5').value) || 0 }
    ];

    // Temafärg
    let themeAccent = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim() || '#00e5ff';
    
    // Gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 250);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)'); 
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    if (labChart) {
        labChart.data.datasets[0].data = dataPoints;
        labChart.data.datasets[0].borderColor = themeAccent;
        labChart.update();
    } else {
        labChart = new Chart(ctx, {
            type: 'scatter', // Scatter med showLine är bäst för fristående X/Y-koordinater
            data: {
                datasets: [{
                    label: 'Profile Target Temp',
                    data: dataPoints,
                    borderColor: themeAccent,
                    backgroundColor: gradient,
                    borderWidth: 3,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: themeAccent,
                    pointRadius: 5,
                    pointHoverRadius: 8,
                    fill: true,
                    showLine: true,
                    tension: 0.1 // Lätt kurvning, men mest raka streck
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        type: 'linear',
                        title: { display: true, text: 'Days', color: '#888', font: {family: 'Inter', weight: 600} },
                        ticks: { color: '#666' },
                        grid: { color: 'rgba(255,255,255,0.05)' }
                    },
                    y: {
                        title: { display: true, text: 'Temp (°C)', color: '#888', font: {family: 'Inter', weight: 600} },
                        ticks: { color: '#666', callback: v => Number(v).toFixed(1) + '°' },
                        grid: { color: 'rgba(255,255,255,0.05)' }
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Day ${context.parsed.x}: ${context.parsed.y}°C`;
                            }
                        }
                    }
                }
            }
        });
    }
}

// Generera JSON-koden
function generateJSON() {
    const steps = [
        [parseFloat(document.getElementById('lab-d1').value), parseFloat(document.getElementById('lab-t1').value), "PRIMARY"],
        [parseFloat(document.getElementById('lab-d2').value), parseFloat(document.getElementById('lab-t2').value), "PRIMARY"],
        [parseFloat(document.getElementById('lab-d3').value), parseFloat(document.getElementById('lab-t3').value), "DIACETYL REST"],
        [parseFloat(document.getElementById('lab-d4').value), parseFloat(document.getElementById('lab-t4').value), "COLD CRASH"],
        [parseFloat(document.getElementById('lab-d5').value), parseFloat(document.getElementById('lab-t5').value), "CONDITIONING"]
    ];

    // Bygg JSON-strängen snyggt
    const jsonString = `"steps": [\n  [${steps[0].join(', ')}],\n  [${steps[1].join(', ')}],\n  [${steps[2].join(', ')}],\n  [${steps[3].join(', ')}],\n  [${steps[4].join(', ')}]\n]`;
    
    document.getElementById('lab-json-out').innerText = jsonString;
}

// Ladda grafen direkt när sidan startar
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(updateLabChart, 500); // Liten delay så canvasen hinner få sin storlek
});

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
    "Wyeast 1968": `
        <p><strong>Wyeast 1968 (London ESB Ale)</strong></p>
        <h3>1. Temperaturspannet (18-22°C)</h3>
        <p>Wyeast 1968 trivs bäst mellan 18 och 22 grader.<br>
        <strong>Vårt val:</strong> Att starta på 19°C är perfekt för att få en balanserad mängd estrar (fruktighet) utan att det blir för spritigt.</p>
        
        <h3>2. Extrem flockulering (Viktigt!)</h3>
        <p>Den är "Very High" i flockulering. Det betyder att jästen faller till botten som en gråsten så fort den känner sig färdig.<br>
        <strong>Risken:</strong> Om temperaturen sjunker för tidigt, eller om jästen somnar för snabbt, kan den lämna kvar ämnen som Diacetyl (smakar smörkola).</p>
        
        <h3>3. Behovet av Diacetylrast</h3>
        <p>Eftersom den flockulerar så snabbt, behöver vi tvinga den att hålla sig vaken i slutet av jäsningen för att "städa upp" efter sig.</p>
        <ul>
            <li><strong>Active Ferm (0-3 dagar):</strong> Här skapas de viktigaste smakerna. Genom att hålla den på 19°C får vi den klassiska brittiska maltigheten.</li>
            <li><strong>Diacetyl Rest (4-7 dagar):</strong> Här höjer vi temperaturen ganska rejält (till jästens maxgräns på 22°C). Eftersom 1968 vill "gå och lägga sig" tidigt, hjälper värmen den att stanna i lösning och äta upp restprodukter. Detta är hemligheten bakom en bra brittisk ale!</li>
            <li><strong>Cold Crash:</strong> Eftersom jästen flockulerar så bra kommer ölet bli extremt klart mycket snabbare än med andra jästsorter.</li>
        </ul>
    `,
    "WLP920": `
        <p><strong>WLP920 Old Bavarian Lager</strong> är en klassiker från södra Tyskland som är känd för att ge en maltig profil med en lätt touch av estrar, vilket gör den perfekt för Oktoberfest-öl, Bocks och mörka lagers.</p>
        <p>Baserat på databladet från White Labs och vedertagen lagertradition, här är de kritiska punkterna vi bör programmera in:</p>
        
        <h3>1. Temperaturspannet (10–13 °C)</h3>
        <p>White Labs anger 10–13 °C som det optimala spannet.<br>
        <strong>Strategi:</strong> För att få den där rena, tyska karaktären vill vi starta i den nedre delen av spannet (ca 10.5 °C) för att hålla biprodukterna i schack.</p>
        
        <h3>2. Diacetylrast (Ett måste för Lager!)</h3>
        <p>Eftersom WLP920 är en lagerjäst som jobbar kallt, bildas det mer diacetyl (smörkola) än i en ale. Vi behöver därför tvinga upp temperaturen rejält mot slutet av jäsningen när jästen fortfarande är aktiv men börjar bli klar.</p>
        
        <h3>3. "Lagering" (Lagringsfasen)</h3>
        <p>Lageröl behöver tid på sig att klarna och mogna. Vi lägger därför in en längre profil än för din ESB.</p>
        
        <h3>Varför ser den ut så här?</h3>
        <ul>
            <li><strong>Primary Ferm (Dag 10):</strong> Vi ger den 10 hela dagar i kylan. Lagerjäst jobbar långsammare än alejäst.</li>
            <li><strong>Diacetyl Rest (Dag 14):</strong> Vi kliver upp till 16 grader. Det är över jästens "optimala" jäsningstemp, men det är precis vad som behövs för att jästen ska äta upp restprodukterna innan den somnar.</li>
            <li><strong>Lagering (Dag 28):</strong> Vi sträcker ut tiden till 28 dagar. En lager mår bra av att stå kallt länge för att bli riktigt krispig och blank.</li>
        </ul>
        <p><strong>Ett tips för just denna jäst:</strong><br>
        White Labs nämner att den har "Medium" flockulering. Det betyder att den inte faller till botten lika aggressivt som London-jästen gjorde. Därför är steg 3 (Lagering) extra viktigt här – ge den tiden i kylan, så kommer du bli belönad med ett fantastiskt blankt och proffsigt öl!</p>
    `,
    "Imperial B45": `
         <p><strong>Imperial Yeast B45 Gnome</strong> är en fantastisk jäst! Det är en klassisk belgisk stam (många tror att den kommer från det kända bryggeriet Achouffe) som är känd för att producera härliga päronestrar och en lätt kryddighet (fenoler).</p>
        <p>Det viktigaste med den här jästen är att den älskar värme. Imperial Yeast rekommenderar ett spann på 20–25.5 °C. Om man kör den för kallt kan den bli lite "lat" och inte jäsa ut ordentligt, men om man startar för varmt kan den ge för mycket tuggummi-smak.</p>
        
        <h3>Här är två profiler skräddarsydda för "Tomten":</h3>
        <ol>
            <li><strong>"Classic Gnome" (Den balanserade):</strong> Vi startar i den nedre delen av spannet för att få en ren jäsning, och sen låter vi temperaturen stiga naturligt för att låta jästen "städa upp" och ge den där klassiska belgiska karaktären.</li>
            <li><strong>"Spicy Gnome" (Varm & Karaktärsfull):</strong> Här trycker vi på lite mer värme tidigt för att verkligen locka fram de kryddiga fenolerna och fruktiga estrar som man förväntar sig av en stark belgisk ale.</li>
        </ol>
        
        <h3>Varför är dessa profiler bra för Gnome?</h3>
        <ul>
            <li><strong>Belgian Ramp:</strong> Belgisk jäst mår bäst av att "stiga" i temperatur. Det efterliknar hur man bryggde förr i tiden när man inte hade kylning – jäsningen skapar egen värme och får ölet att stiga, vilket ger den där komplexa smaken.</li>
            <li><strong>Utjäsning:</strong> Gnome (och belgiska stammar generellt) är kända för att vilja jäsa ut ölet väldigt torrt. Genom att gå upp mot 24-25 grader mot slutet hjälper vi jästen att orka hela vägen, särskilt om du brygger en starkare öl som en Dubbel eller Trippel.</li>
        </ul>
    `,
    "Wyeast 1084": `
         <p><strong>Wyeast 1084 Irish Ale</strong> är en riktig arbetshäst! Det är den klassiska jästen från Guinness-bryggeriet i Dublin. Den är känd för att vara väldigt mångsidig – den ger en rik, maltig profil med en svag touch av frukt (estrar) och ibland en gnutta diacetyl (smörkola) som passar perfekt i mörka öl.</p>
        <p>Enligt Wyeast ligger spannet på 17–22 °C.</p>
        
        <h3>Två profiler för din 1084:</h3>
        <ol>
            <li><strong>"Irish Dry Stout" (Ren & krispig):</strong> Här håller vi temperaturen låg för att få en så ren och maltig profil som möjligt, vilket låter den rostade malten skina igenom. Vi avslutar med en liten höjning för att se till att den jäser ut ordentligt och inte lämnar efter sig för mycket smörkola.</li>
            <li><strong>"Irish Red Ale" (Maltig & Fyllig):</strong> Här tillåter vi lite mer fruktighet genom att starta varmare. Det passar utmärkt för irländska Red Ales eller kraftigare Porters där man vill ha en lite fylligare munkänsla.</li>
        </ol>
        
        <h3>Varför är dessa profiler bra för 1084?</h3>
        <ul>
            <li><strong>Diacetyl-kontroll:</strong> Den här jästen kan ibland producera en del diacetyl. Genom att vi i båda profilerna går upp till 20 °C eller mer mot slutet, hjälper vi jästen att "äta upp" sina egna biprodukter.</li>
            <li><strong>Flockulering:</strong> 1084 flockulerar (flockar ihop sig och sjunker) bra, men inte lika snabbt som London-jästen. Därför är våra 14 dagar med en rejäl Cold Crash mot slutet guld värda för att få ett blankt och fint öl.</li>
        </ul>
    `,
    "Wyeast 3944": `
        <p><strong>Wyeast 3944 Belgian Witbier</strong> är kungen av veteöl! Det här är den klassiska "Hoegaarden-jästen" och den är känd för att vara väldigt karaktärsfull. Den producerar en komplex blandning av kryddiga fenoler (peppar/nejlika) och fruktiga estrar (banan/citrus), med en svagt syrlig och uppfriskande avslutning.</p>
        <p>Enligt Wyeast ligger spannet på 16–24 °C, men den här jästen har några specifika beteenden vi måste ta hänsyn till:</p>
        <ul>
            <li><strong>Dålig flockulering:</strong> Den här jästen vill inte ramla till botten, och det är bra! En Witbier ska vara grumlig. Vi vill därför inte göra en för aggressiv "Cold crash".</li>
            <li><strong>Krausen-monster:</strong> Den skapar ett enormt skumtäcke (krausen) i början.</li>
            <li><strong>Temperaturkänslig:</strong> Om den hålls för kall kan den stanna av i förtid. Vi vill ha en stadig ökning för att den ska jäsa ut helt.</li>
        </ul>
        
        <h3>Två profiler för din 3944:</h3>
        <ol>
            <li><strong>"Classic Belgian Wit" (Balanserad):</strong> Här siktar vi på den klassiska balansen där varken kryddigheten eller frukten tar överhanden. Vi börjar svalt och låter den stiga långsamt.</li>
            <li><strong>"Summer Wit" (Fruktig & Expressiv):</strong> Om du vill ha en riktigt somrig öl med mer tryck i banan- och citrus-tonerna så kör vi denna profil som startar varmare.</li>
        </ol>
        
        <h3>Varför är dessa profiler speciella?</h3>
        <ul>
            <li><strong>Ingen "Hard" Cold Crash:</strong> I båda profilerna satte jag slut-temperaturen till 6.0 °C istället för 2.0–3.0 °C. Varför? Jo, i en Witbier vill vi att jästen och veteproteinerna ska stanna kvar i suspension för att ge den där mjölkiga, vita looken. Kyler vi för hårt blir ölet för klart, och då tappar man stilen!</li>
            <li><strong>Fenol-kontroll:</strong> Genom att starta på 18°C i Classic-profilen undviker vi att det smakar "för mycket" tuggummi, och får istället fram de eleganta kryddtonerna.</li>
        </ul>
    `,
    "WLP833": `
        <p><strong>WLP833 German Bock Lager</strong> är en riktig tungviktare! Det här är jästen från det berömda bryggeriet i Ayinger (Sydbavaria). Om WLP920 är bra för "rena" lagers, så är WLP833 kungen av maltighet. Den är känd för att lämna kvar en fantastisk maltig sötma och kropp, vilket gör den till det självklara valet för Bock, Doppelbock och festliga Märzen.</p>
        <p>Enligt White Labs ligger spannet på 9–13 °C. Precis som med alla lagerjäster är kontrollen under de första dagarna helt avgörande för att slippa svavel och bismaker.</p>
        
        <h3>Två profiler skräddarsydda för din sydtyska malt-maskin:</h3>
        <ol>
            <li><strong>"Traditional Bock" (Ren Maltfokus):</strong> Här låter vi jästen jobba kallt och långsamt för att maximera den där rena bayeriska maltprofilen. Eftersom Bock-öl ofta har hög stamvörtstyrka (mer socker), ger vi den extra tid att jäsa ut och en rejäl lagringstid.</li>
            <li><strong>"Fast Bock" (Modern Lager-metod):</strong> Om du inte vill vänta i fem veckor så kör vi en profil med lite högre starttemperatur och en tidigare diacetylrast. Fungerar utmärkt för t.ex. en Helles eller en lättare bock.</li>
        </ol>
        
        <h3>Varför är dessa profiler bra för Bock-jästen?</h3>
        <ul>
            <li><strong>Malt-bevarande:</strong> Genom att hålla Primary på 10°C i den traditionella profilen undviker vi att jästen producerar biprodukter som krockar med den rika maltsmaken.</li>
            <li><strong>Tid för "Cleanup":</strong> Bock-jäst kan vara lite envis med att städa efter sig om den har jäst en stark öl. Därför går vi upp till 16-17°C under diacetylrasten för att verkligen väcka jästen så den hinner städa klart innan kylan kommer.</li>
            <li><strong>Lager-filtreringen:</strong> Eftersom vi markerat den som true (Lager), kommer du nu bara se dessa bock-profiler när du valt WLP833. Inget Ale-trams här inte!</li>
        </ul>
    `,
    "WLP007": `
         <p><strong>WLP007 Dry English Ale</strong> är precis som du säger – en riktig målsökande missil! Den är känd som "Workhorse"-jästen för många amerikanska craft-bryggerier (ofta kallad "Whitbread Dry").</p>
        <p>Det som gör WLP007 unik är kombinationen av två saker:</p>
        <ol>
            <li>Den är snabb och jäser ut väldigt torrt (hög utjäsning).</li>
            <li>Den faller som en gråsten till botten (extremt hög flockulering).</li>
        </ol>
        <p>Enligt White Labs ligger spannet på 18–21 °C. Eftersom den är så aggressiv kan den ibland skapa en del värme själv, så vi vill ha en kontrollerad start.</p>
        
        <h3>Två profiler för din brittiska torped:</h3>
        <ol>
            <li><strong>"Dry West Coast" (Ren & Torr):</strong> Denna profil är perfekt för IPA eller Pale Ale där du vill att humlen ska stå i centrum utan att jästen stör. Vi startar svalt för att hålla estrar i schack och låter den sedan städa upp snabbt.</li>
            <li><strong>"Monster Stout" (Aggressiv & Snabb):</strong> WLP007 är fantastisk för tunga Stouts eftersom den orkar jäsa ut även vid hög alkoholhalt. Här trycker vi på lite mer temperatur för att få ölet färdigt snabbt.</li>
        </ol>
        
        <h3>Varför är WLP007 så tacksam för din kontrollbox?</h3>
        <ul>
            <li><strong>Temperaturkontroll:</strong> Eftersom 007 jäser så våldsamt skapar den mycket egen värme. Din termostat kommer förmodligen få jobba hårt med kylen de första 48 timmarna för att hålla den på 18.5°C. Utan kontrollen sticker den lätt iväg till 24°C och då börjar det smaka lösningsmedel.</li>
            <li><strong>Flockuleringen:</strong> Du kommer märka att ölet blir kristallklart mycket snabbare än med de andra jästsorterna. Redan efter 2-3 dagar i "Cold Crash" kommer jästkakan vara stenhård på botten.</li>
        </ul>
    `,
"Wyeast 1318": `
        <p><strong>Wyeast 1318 London Ale III</strong> är ju själva fundamentet i hela NEIPA-revolutionen. Det är jästen som gav världen "Juice".</p>
        <p>Det som gör 1318 så speciell är att den inte flockulerar (sjunker) särskilt bra, vilket hjälper till att hålla ölet disigt, och den producerar fantastiska estrar av stenfrukt (persika/aprikos) som gifter sig perfekt med moderna humlesorter som Citra och Mosaic.</p>
        <p>Enligt Wyeast ligger spannet på 18–22 °C.</p>
        
        <h3>Här är två profiler:</h3>
        <ol>
            <li><strong>"Juicy NEIPA" (Biotransformation):</strong> Här siktar vi på att maximera samspelet mellan jäst och humle. Vi startar stabilt och höjer sedan temperaturen för att hjälpa jästen att "städa upp" och torka ut den sista sötman.</li>
            <li><strong>"Classic Hazy" (Fyllig & Mjuk):</strong> Vi håller temperaturen något jämnare hela vägen för att bevara en kraftigare munkänsla.</li>
        </ol>
    `,
    "Wyeast 2565": `
        <p><strong>Wyeast 2565 Kölsch</strong> är en av de mest intressanta jäststammarna som finns. Det är en "hybrid" – tekniskt sett en ale-jäst, men den föredrar att jobba i temperaturer som nästan nuddar lager-nivåer. Den är känd för att ge en extremt krispig, ren och nästan vinös profil med en lätt ton av äpple eller päron.</p>
        <p>Eftersom den har låg flockulering (den vill inte sjunka), kräver den en rejäl kallagring för att bli så där spegelblank som en äkta Kölsch ska vara.</p>
        
        <h3>Två profiler för din tyska hybrid:</h3>
        <ol>
            <li><strong>"Authentic Kölsch" (Krispig & Lager-lik):</strong> Detta är profilen för dig som vill tävla mot bryggerierna i Köln. Vi börjar i den absolut nedre delen av spannet för att få maximal krispighet och minimalt med estrar.</li>
            <li><strong>"Hybrid Ale/Alt" (Fruktig & Vinös):</strong> Om du vill ha lite mer av den där "vinösa" karaktären eller brygger en Düsseldorf Altbier, så kör vi denna som ligger lite högre i temperatur.</li>
        </ol>

        <h3>Varför är "Lagering" viktigt här?</h3>
        <p>Wyeast 2565 är ökänd för att vara "dammig". Den hänger kvar i ölet och gör det grumligt länge. Genom att vi i den autentiska profilen lägger in 14 dagars lagring vid 2°C, tvingar vi till slut ner den till botten. Resultatet blir det där briljanta, guldgula ölet som ser ut som en lager men smakar som en ale.</p>
    `,
    "WLP095": `
        <p><strong>WLP095 Burlington Ale</strong>! Det här är jästen som satte Vermont-stilen på kartan (många känner igen den som "Conan-strängen"). Den är berömd för sin unika förmåga att producera intensiva toner av mogna persikor och aprikoser, vilket gör den till den ultimata partnern för humlesorter som Citra, Galaxy och Mosaic.</p>
        <p>Till skillnad från London III (1318) tenderar Burlington att jäsa ut aningen mer, vilket ger ett lite torrare men fortfarande extremt "juicy" öl. White Labs rekommenderar 19–21 °C.</p>
        
        <h3>Två profiler för din Vermont-juice:</h3>
        <ol>
            <li><strong>"Burlington Hazy" (Maxad Persika):</strong> Den här profilen fokuserar på att locka fram de där berömda stenfrukts-estrarna. Vi startar mitt i spannet och låter den stiga för att få en fullständig utjäsning.</li>
            <li><strong>"Conan Style IPA" (Krispig Juice):</strong> Här håller vi temperaturen lite stramare i början för att få en renare profil där humlen får ta mer plats, men där den typiska Burlington-karaktären ligger som en snygg bakgrund.</li>
        </ol>
    `
}; // <-- DENNA STÄNGER HELA OBJEKTET, EXTREMT VIKTIG!


// --- POPUP-FUNKTIONER (MODAL) ---
function openYeastModal(yeast) {
    const modal = document.getElementById('yeast-info-modal');
    document.getElementById('modal-yeast-name').innerText = yeast.name;
    
    // Leta i din stora text-ordlista. Om texten finns, visa den. Annars visa den korta.
    // Tips: Jag matchar på "yeast.name" men vi kan matcha på ID också beroende på hur du döpte dem i arrayen.
    let detailedText = yeastDescriptions[yeast.name] || yeastDescriptions[yeast.id];
    
    if (!detailedText) {
        // Om ingen peppig text finns (ännu), visa den korta från arrayen
        detailedText = `<p>${yeast.desc}</p><h3 style="margin-top:15px;">Passar till:</h3><p>${yeast.styles}</p>`;
    }
    
    document.getElementById('modal-yeast-desc').innerHTML = detailedText;
    modal.style.display = 'flex'; // Visar din fina overlay
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



