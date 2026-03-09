
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

            // 4. Statusrad längst ner
            document.getElementById('status-text').innerText = latest.status.toUpperCase();
            
            // 5. Dag
            document.getElementById('day-val').innerText = latest.day.toFixed(1);

            updateChart(data);
        }
    } catch (error) {
        console.error("Kunde inte hämta data:", error);
    }
}

// --- 4. DIN GRAF-FUNKTION ---
let beerChart;
function updateChart(data) {
    const canvas = document.getElementById('beer-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(243, 156, 18, 0.4)'); 
    gradient.addColorStop(1, 'rgba(243, 156, 18, 0)');   

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
               // Inuti din chart-config i app.js:
datasets: [{
    label: 'Öl Temp',
    data: tempValues,
    borderColor: '#e0e0e0',
    borderWidth: 2,
    fill: true, // SÄTT DENNA TILL TRUE
    backgroundColor: 'rgba(255, 255, 255, 0.15)', // Samma ljusgrå som i flaskan
    tension: 0.1,
    pointRadius: 0 // Tar bort pluttarna på linjen för ett renare utseende
}]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { ticks: { color: '#888', maxTicksLimit: 6 }, grid: { display: false } },
                    y: { ticks: { color: '#888', callback: v => v + '°' }, grid: { color: 'rgba(255, 255, 255, 0.05)' } }
                },
                plugins: { legend: { display: false } }
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
        const isActive = !(statusText === 'FINISHED' || statusText.includes('CRASH'));

        if (isActive && timestamp - lastSpawn > 250) {
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            const size = Math.random() * 0.7 + 0.5; 
            const startX = 50 + (Math.random() * 12 - 6); 
            circle.setAttribute("r", size);
            circle.setAttribute("fill", "rgba(255, 255, 255, 0.7)");
            stream.appendChild(circle);
            bubbles.push({ element: circle, x: startX, y: 90, speed: Math.random() * 0.2 + 0.3, wobbleOffset: Math.random() * Math.PI * 2 });
            lastSpawn = timestamp;
        }

        for (let i = bubbles.length - 1; i >= 0; i--) {
            let b = bubbles[i];
            b.y -= b.speed;
            let currentX = b.x + Math.sin((b.y * 0.05) + b.wobbleOffset) * 0.4;
            b.element.setAttribute("cx", currentX);
            b.element.setAttribute("cy", b.y);
            if (b.y < 30) { b.element.remove(); bubbles.splice(i, 1); }
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















