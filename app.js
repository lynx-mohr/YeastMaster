// 1. ÄNDRING: Vi tar bort den fasta IP-adressen. 
// Genom att bara skriva '/api/data' letar webbläsaren på samma server som sidan körs ifrån.
const SERVER_URL = '/api/data'; 
let myChart;

async function fetchData() {
    try {
        const response = await fetch(SERVER_URL);
        const data = await response.json();

        if (data && data.length > 0) {
            const latest = data[data.length - 1];
            updateDashboard(latest);
            updateGraph(data); 
        }
    } catch (error) {
        console.error('Kunde inte hämta data:', error);
    }
}

function updateDashboard(latest) {
    document.getElementById('temp-beer-val').innerText = latest.temp.toFixed(1);
    document.getElementById('air-temp-val').innerText = latest.air_temp.toFixed(1);
    document.getElementById('ferm-day-val').innerText = latest.day.toFixed(1);
    
    const rawStatus = latest.status ? latest.status.toUpperCase() : "IDLE";
    document.getElementById('status-text').innerText = rawStatus;

    const icon = document.getElementById('action-icon');
    const coolingLabel = document.getElementById('cooling-status');

    icon.classList.remove('blinking-icon');
    coolingLabel.classList.remove('blinking-icon');

    if (rawStatus.includes("COOL") || rawStatus.includes("CRASH")) {
        icon.innerText = "▼";
        coolingLabel.innerText = "COOLING";
        icon.classList.add('blinking-icon');
    } 
    else if (rawStatus.includes("HEAT") || rawStatus.includes("RAMP")) {
        icon.innerText = "▲";
        coolingLabel.innerText = "HEATING";
        icon.classList.add('blinking-icon');
    } 
    else {
        icon.innerText = "-";
        coolingLabel.innerText = "IDLE";
    }

    if (latest.strain) document.getElementById('yeast-strain').innerText = latest.strain;
    if (latest.profile) document.getElementById('yeast-profile').innerText = latest.profile;
}

function updateGraph(allData) {
    const ctx = document.getElementById('beer-chart').getContext('2d');
    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - (24 * 60 * 60 * 1000));
    const sliceData = allData.filter(d => new Date(d.time) >= twentyFourHoursAgo);

    const labels = sliceData.map(d => {
        const date = new Date(d.time);
        return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    });
    
    const temps = sliceData.map(d => d.temp);

    if (!myChart) {
        myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Temp',
                    data: temps,
                    borderColor: '#fff',
                    borderWidth: 2,
                    pointRadius: 0,
                    tension: 0.3,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: {
                        display: true,
                        grid: { color: '#222' },
                        ticks: { 
                            color: '#888',
                            font: { family: 'VT323', size: 12 },
                            maxTicksLimit: 6,
                            maxRotation: 0
                        }
                    },
                    y: {
                        display: true,
                        grid: { color: '#333' },
                        ticks: { 
                            color: '#fff', 
                            font: { family: 'VT323', size: 14 } 
                        }
                    }
                },
                animation: { duration: 0 }
            }
        });
    } else {
        myChart.data.labels = labels;
        myChart.data.datasets[0].data = temps;
        myChart.update();
    }
}

// 2. ÄNDRING: Fixade stavfelet här. 
// Tidigare stod det 'Data', men funktionen heter 'fetchData'.
setInterval(fetchData, 5000); 
fetchData();

function startBubbles() {
    const stream = document.getElementById('bubble-stream');
    if (!stream) return;

    setInterval(() => {
        const statusElement = document.getElementById('status-text');
        if (!statusElement) return;
        const status = statusElement.innerText.toUpperCase();
        
        const idleStatuses = ["IDLE", "FINISHED", "READY", "SYNC ERROR", "UNKNOWN", "-", ""];
        if (idleStatuses.includes(status)) return;

        const bubble = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        const x = 40 + Math.random() * 20; 
        
        bubble.setAttribute("cx", x);
        bubble.setAttribute("cy", "90");
        bubble.setAttribute("r", 0.5 + Math.random() * 1.5);
        bubble.setAttribute("fill", "none");
        bubble.setAttribute("stroke", "white");
        bubble.setAttribute("stroke-width", "0.3");
        
        bubble.style.transition = "all 2s ease-in";
        bubble.style.opacity = "0.8";
        stream.appendChild(bubble);

        setTimeout(() => {
            bubble.style.transform = "translateY(-75px)";
            bubble.style.opacity = "0";
        }, 50);

        setTimeout(() => bubble.remove(), 2500);
    }, 450); 
}

startBubbles();
