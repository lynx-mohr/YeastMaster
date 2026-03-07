

// 1. Din gamla konfiguration (men med dynamiskt ID)
let activeDeviceId = null;
const API_BASE = "https://soulofbeer-live.onrender.com/api";

// 2. INLOGGNINGS-LOGIKEN (Den nya vaktmästaren)
auth.onAuthStateChanged(async (user) => {
    if (user) {
        // Kolla i databasen vilken enhet denna användare äger
        const res = await fetch(`${API_BASE}/my-devices?uid=${user.uid}`);
        const devices = await res.json();

        if (devices.length > 0) {
            activeDeviceId = devices[0].device_id;
            showView('dashboard'); // Visa din snygga dashboard
            initEverything();      // <--- HÄR STARTAR VI DIN GAMLA KOD!
        } else {
            showView('claim');     // Visa "Koppla enhet"-vyn
        }
    } else {
        showView('login');
    }
});

async function updateDashboard() {
    // VIKTIGT: Kör bara om vi faktiskt har hittat en enhet efter inloggning
    if (!activeDeviceId) return; 

    try {
        // Vi bygger URL:en dynamiskt med det ID vi fick från Firebase/MongoDB
        const response = await fetch(`${API_BASE}/data?device_id=${activeDeviceId}`);
        const data = await response.json();

        if (data.length > 0) {
            const latest = data[data.length - 1];

            // --- DIN GULD-KOD FORTSÄTTER HÄR ---
            // 1. Temperaturer
            document.getElementById('temp-beer-val').innerText = latest.temp.toFixed(1);
            document.getElementById('air-temp-val').innerText = latest.air_temp.toFixed(1);
            
            // 2. Status & Dag
            document.getElementById('status-text').innerText = latest.status;
            document.getElementById('day-val').innerText = latest.day.toFixed(1);

            // 3. Rita grafen och damejeannen (dina gamla funktioner)
            renderChart(data);
            updateGlassAnimation(latest); 
        }
    } catch (error) {
        console.error("Hoppsan! Kunde inte nå Render-servern:", error);
        // Här kan du t.ex. visa ett rött utropstecken på skärmen om du vill
    }
}

// Kör uppdatering var 20:e sekund
setInterval(updateDashboard, 20000);
updateDashboard(); // Kör en gång direkt vid start

// --- GRAF-FUNKTION (Den snygga versionen) ---
let beerChart;
function updateChart(data) {
    const ctx = document.getElementById('beer-chart').getContext('2d');
    
    // Gradient för ytan under linjen
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(243, 156, 18, 0.4)'); 
    gradient.addColorStop(1, 'rgba(243, 156, 18, 0)');   

    const labels = data.map(d => new Date(d.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const temps = data.map(d => d.temp);

    if (beerChart) {
        beerChart.data.labels = labels;
        beerChart.data.datasets[0].data = temps;
        beerChart.update();
    } else {
        beerChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Beer Temp',
                    data: temps,
                    borderColor: '#f39c12',
                    backgroundColor: gradient,
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4, // Mjuk kurva
                    pointRadius: 0,
                    pointHitRadius: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        ticks: {
                            color: '#888',
                            maxRotation: 0,
                            autoSkip: true,    // Hoppar över etiketter
                            maxTicksLimit: 6   // Max 6 klockslag
                        },
                        grid: { display: false }
                    },
                    y: {
                        ticks: {
                            color: '#888',
                            callback: function(value) { return value + '°'; }
                        },
                        grid: { color: 'rgba(255, 255, 255, 0.05)' }
                    }
                },
                plugins: { legend: { display: false } }
            }
        });
    }
}

// --- BUBBEL-MOTOR (Äkta och jämn jäsning) ---
function startBubbles() {
    const stream = document.getElementById('bubble-stream');
    if (!stream) return;

    let bubbles = [];
    let lastSpawn = 0;

    function animate(timestamp) {
        const statusElement = document.getElementById('status-text');
        const statusText = statusElement ? statusElement.innerText.toUpperCase() : '';
        
        // Bubbla bara om vi inte är färdiga eller cold crashar
        const isActive = !(statusText === 'FINISHED' || statusText.includes('CRASH'));

        // Skapa en ny, liten bubbla i ett exakt och jämnt intervall (var 250:e millisekund)
        if (isActive && timestamp - lastSpawn > 250) {
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            
            // Mycket små bubblor (radie mellan 0.5 och 1.2)
            const size = Math.random() * 0.7 + 0.5; 
            
            // Centrerad ström från botten
            const startX = 50 + (Math.random() * 12 - 6); 
            
            circle.setAttribute("r", size);
            circle.setAttribute("fill", "rgba(255, 255, 255, 0.7)");
            stream.appendChild(circle);
            
            bubbles.push({
                element: circle,
                x: startX,
                y: 90,
                // Lugn och jämn hastighet uppåt
                speed: Math.random() * 0.2 + 0.3, 
                // Pyttelite förskjutning i sidled så det inte ser maskinellt ut
                wobbleOffset: Math.random() * Math.PI * 2
            });
            
            lastSpawn = timestamp;
        }

        // Flytta alla befintliga bubblor mjukt (60 frames per sekund)
        for (let i = bubbles.length - 1; i >= 0; i--) {
            let b = bubbles[i];
            b.y -= b.speed;
            
            // Extremt subtil rörelse i sidled (nästan rak linje)
            let currentX = b.x + Math.sin((b.y * 0.05) + b.wobbleOffset) * 0.4;
            
            b.element.setAttribute("cx", currentX);
            b.element.setAttribute("cy", b.y);

            // Ta bort bubblan när den når ytan
            if (b.y < 30) {
                b.element.remove();
                bubbles.splice(i, 1);
            }
        }

        requestAnimationFrame(animate); // Kör nästa bildruta
    }

    requestAnimationFrame(animate); // Starta motorn
}

startBubbles();



