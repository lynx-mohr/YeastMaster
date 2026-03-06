const SERVER_URL = 'https://soulofbeer-live.onrender.com/api/data';

async function updateDashboard() {
    try {
        const response = await fetch(SERVER_URL);
        const data = await response.json();

        if (data.length > 0) {
            const latest = data[data.length - 1];

            // 1. Temperaturer
            document.getElementById('temp-beer-val').innerText = latest.temp.toFixed(1);
            document.getElementById('air-temp-val').innerText = latest.air_temp.toFixed(1);

            // 2. Jäst och Profil
            document.getElementById('yeast-strain').innerText = latest.strain || "Unknown";
            document.getElementById('yeast-profile').innerText = latest.profile || "Standard";

            // 3. Status (Fasen längst ner)
            document.getElementById('status-text').innerText = latest.status || "RUNNING";

            // 4. Action (Kyla/Värme vid pilen)
            const actionLabel = document.getElementById('cooling-status');
            const actionIcon = document.getElementById('action-icon');
            const action = latest.action || "IDLE";
            
            actionLabel.innerText = action;

            // Rensa gamla CSS-klasser för blink
            actionIcon.classList.remove('blink-active');

            if (action === "COOLING") {
                actionIcon.innerText = "▼";
                actionIcon.style.color = "#00aaff";
                actionIcon.classList.add('blink-active');
            } else if (action === "HEATING") {
                actionIcon.innerText = "▲";
                actionIcon.style.color = "#ff4400";
                actionIcon.classList.add('blink-active');
            } else {
                actionIcon.innerText = "-";
                actionIcon.style.color = "#888";
            }

            // 5. Framsteg (Dagar)
            document.getElementById('ferm-day-val').innerText = latest.day ? latest.day.toFixed(1) : "0.0";

            // 6. Uppdatera Grafen
            updateChart(data);
        }
    } catch (error) {
        console.error("Kunde inte hämta data:", error);
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

// --- BUBBEL-MOTOR ---
function startBubbles() {
    const stream = document.getElementById('bubble-stream');
    if (!stream) return;

    setInterval(() => {
        const statusElement = document.getElementById('status-text');
        if (!statusElement) return;
        
        const statusText = statusElement.innerText.toUpperCase();
        
        // Pausa bubblorna om jäsningen är klar eller vid cold crash
        if (statusText === 'FINISHED' || statusText.includes('CRASH')) return;

        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        const size = Math.random() * 2.5 + 1; 
        const startX = 50 + (Math.random() * 20 - 10); 
        
        circle.setAttribute("cx", startX);
        circle.setAttribute("cy", "90"); 
        circle.setAttribute("r", size);
        circle.setAttribute("fill", "rgba(255, 255, 255, 0.5)");
        
        stream.appendChild(circle);
        
        let y = 90;
        const floatUp = setInterval(() => {
            y -= 0.5; 
            circle.setAttribute("cy", y);
            circle.setAttribute("cx", startX + Math.sin(y * 0.1) * 2); // Lite wobble
            
            if (y < 30) {
                clearInterval(floatUp);
                circle.remove();
            }
        }, 30); 
    }, 600);
}

// Starta bubblorna!
startBubbles();
