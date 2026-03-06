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

let beerChart;
function updateChart(data) {
    const ctx = document.getElementById('beer-chart').getContext('2d');
    
    // Vi skapar en snygg gradient för ytan under linjen
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(243, 156, 18, 0.4)'); // Halvgenomskinlig orange i toppen
    gradient.addColorStop(1, 'rgba(243, 156, 18, 0)');   // Helt genomskinlig i botten

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
                    backgroundColor: gradient, // Använder gradienten vi skapade
                    borderWidth: 3,
                    fill: true,           // Fyller i ytan under linjen
                    tension: 0.4,         // Gör linjen mjukt kurvad (istället för hackig)
                    pointRadius: 0,       // Inga prickar på varje mätvärde
                    pointHitRadius: 10    // Men gör det lätt att hovra över dem
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
                            autoSkip: true,    // VIKTIGT: Hoppar över etiketter så de inte krockar
                            maxTicksLimit: 6   // Visar max 6 klockslag på hela axeln
                        },
                        grid: {
                            display: false     // Tar bort vertikala streck för renare look
                        }
                    },
                    y: {
                        ticks: {
                            color: '#888',
                            callback: function(value) { return value + '°'; } // Lägger till gradtecken
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)' // Väldigt svaga horisontella streck
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
}

