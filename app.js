
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
            // Om vyn ska visas, sätt den till 'flex' (eftersom din CSS kräver det)
            // Annars sätt den till 'none' för att dölja den helt.
            views[key].style.display = (key === viewName) ? 'flex' : 'none';
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
                arrow.style.color = "#0088ff"; // Blå
                arrow.style.display = "inline";
            } else if (action === "HEATING") {
                arrow.innerText = "▲";
                arrow.style.color = "#ff4444"; // Röd
                arrow.style.display = "inline";
            } else {
                arrow.style.display = "none"; // Ingen pil vid IDLE
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
    
    // TYDLIGARE GRÅ GRADIENT (Ökad opacitet till 0.3)
    const gradient = ctx.createLinearGradient(0, 0, 0, 120);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)'); 
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');   

    const labels = data.map(d => new Date(d.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const temps = data.map(d => d.temp);

    if (beerChart) {
        beerChart.data.labels = labels;
        beerChart.data.datasets[0].data = temps;
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
                    backgroundColor: gradient, // Tydligare grå skugga
                    tension: 0.3,
                    pointRadius: 0 
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { 
                        ticks: { color: '#666', maxTicksLimit: 5, font: { family: 'Inter', size: 10 } }, 
                        grid: { display: false } 
                    },
                    y: { 
                        ticks: { color: '#666', font: { family: 'Inter', size: 10 }, callback: v => v + '°' }, 
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
            if (b.y < 15) { 
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
















