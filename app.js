// Byt ut adressen till din riktiga Render-adress
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

            if (action === "COOLING") {
                actionIcon.innerText = "▼";
                actionIcon.style.color = "#00aaff"; // Blå pil ner
            } else if (action === "HEATING") {
                actionIcon.innerText = "▲";
                actionIcon.style.color = "#ff4400"; // Röd pil upp
            } else {
                actionIcon.innerText = "-";
                actionIcon.style.color = "#888";
            }

            // 5. Framsteg
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

// --- GRAF-FUNKTION (Enkel version) ---
let beerChart;
function updateChart(data) {
    const ctx = document.getElementById('beer-chart').getContext('2d');
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
                    borderWidth: 2,
                    fill: false,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { ticks: { color: '#888', maxRotation: 0 } },
                    y: { ticks: { color: '#888' } }
                },
                plugins: { legend: { display: false } }
            }
        });
    }
}
