const yeastStrains = [
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
    { id: "novalager", name: "Lallemand NovaLager", origin: "Modern", temp: "10-20°C", tags: ["Hybrid", "Fast"], desc: "En modern hybrid-lagerjäst som jäser snabbare.", styles: "Modern Lager" }
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
        dashboard: document.getElementById('dashboard-container')
    };
    
    Object.keys(views).forEach(key => {
        if (views[key]) {
            if (key === viewName) {
                // Dashboarden mår bäst av 'block' för att grafen ska vara stabil
                // Login och Claim behöver 'flex' för att centrera boxen
                views[key].style.display = (key === 'dashboard') ? 'block' : 'flex';
            } else {
                views[key].style.display = 'none';
            }
        }
    });
}

// --- 2. INLOGGNINGS-VAKT ---
auth.onAuthStateChanged(async (user) => {
    if (user) {
        try {
            const res = await fetch(`${API_BASE}/my-devices?uid=${user.uid}`);
            const devices = await res.json();

            if (devices.length > 0) {
                activeDeviceId = devices[0].device_id;
                showView('dashboard');
                // Starta allt det snygga nu när vi är inne!
                updateDashboard();
                setInterval(updateDashboard, 20000);
            } else {
                showView('claim');
            }
        } catch (err) {
            console.error("Kunde inte kolla enheter:", err);
        }
    } else {
        showView('login');
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
            
            // --- NY LOGIK: Räkna ut hur länge vi varit i denna fas ---
            let phaseStartTime = latest.time; 
            for (let i = data.length - 1; i >= 0; i--) {
                if (data[i].status !== latest.status) {
                    // Fasen ändrades här! Starttiden är nästa mätpunkt.
                    phaseStartTime = data[i + 1].time;
                    break;
                }
                if (i === 0) {
                    phaseStartTime = data[0].time;
                }
            }
            const msInADay = 1000 * 60 * 60 * 24;
            // Räkna ut dagarna, om data saknas sätter vi den till 0
            const phaseDay = (latest.time && phaseStartTime) ? (new Date(latest.time) - new Date(phaseStartTime)) / msInADay : 0;

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
    
    // --- HÄR ÄR RADERNA SOM SAKNADES ---
    // Hämtar färgen från CSS, om den inte hittas används orange som reserv!
    let themeAccent = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
    if (!themeAccent) themeAccent = '#f39c12'; 
    // -----------------------------------

    // TYDLIGARE GRÅ GRADIENT (Ökad opacitet till 0.3)
    const gradient = ctx.createLinearGradient(0, 0, 0, 120);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)'); 
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');   

    const labels = data.map(d => new Date(d.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const temps = data.map(d => d.temp);

    if (beerChart) {
        beerChart.data.labels = labels;
        beerChart.data.datasets[0].data = temps;
        beerChart.data.datasets[0].borderColor = themeAccent; // <--- Ser till att färgen uppdateras!
        beerChart.update('none');
    } else {
        beerChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Beer Temp',
                    data: temps,
                    borderColor: themeAccent, // Nu vet koden vad detta är!
                    borderWidth: 2,
                    fill: true, 
                    backgroundColor: gradient, // Tydligare grå skugga
                    tension: 0.3,
                    pointRadius: 0 
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                resizeDelay: 10, // Ger webbläsaren tid att sätta layouten innan grafen ritas
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
        // Ändra denna rad från: callback: v => v + '°'
        // Till detta:
        callback: v => v.toFixed(1) + '°' 
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
        auth.signOut();
    });
}

let selectedStrains = []; // Här sparar vi ID:n på de 10 utvalda

function renderYeastLibrary(filter = "") {
    const grid = document.getElementById('yeast-grid');
    const tooltip = document.getElementById('yeast-tooltip');
    grid.innerHTML = "";

    const filtered = yeastStrains.filter(s => s.name.toLowerCase().includes(filter.toLowerCase()));

// Här är fixen: Vi kollar namn, tags OCH styles!
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

        // 1. HOVER-logik (PC)
        card.onmousemove = (e) => {
            tooltip.style.display = "block";
            tooltip.style.left = (e.clientX + 15) + "px";
            tooltip.style.top = (e.clientY + 15) + "px";
            tooltip.innerHTML = `<strong>${yeast.name}</strong><br>${yeast.temp}<br>${yeast.tags.join(', ')}`;
        };
        card.onmouseleave = () => tooltip.style.display = "none";

        // 2. KLICK-logik (Fullvy)
        card.onclick = () => openYeastDetail(yeast);

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












