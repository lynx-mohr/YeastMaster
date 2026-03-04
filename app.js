const SERVER_URL = 'http://192.168.1.188:3000/api/data';
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
    // 1. Uppdatera mätvärden
    document.getElementById('temp-beer-val').innerText = latest.temp.toFixed(1);
    document.getElementById('air-temp-val').innerText = latest.air_temp.toFixed(1);
    document.getElementById('ferm-day-val').innerText = latest.day.toFixed(1);
    
    const rawStatus = latest.status ? latest.status.toUpperCase() : "IDLE";
    document.getElementById('status-text').innerText = rawStatus;

    const icon = document.getElementById('action-icon');
    const coolingLabel = document.getElementById('cooling-status');

    // Återställ: Ta bort blinket från pilen
    icon.classList.remove('blinking-icon');
    // Vi ser till att texten ALDRIG har blink-klassen
    coolingLabel.classList.remove('blinking-icon');

    if (rawStatus.includes("COOL") || rawStatus.includes("CRASH")) {
        icon.innerText = "▼";
        coolingLabel.innerText = "COOLING";
        icon.classList.add('blinking-icon'); // BARA pilen blinkar nu
    } 
    else if (rawStatus.includes("HEAT") || rawStatus.includes("RAMP")) {
        icon.innerText = "▲";
        coolingLabel.innerText = "HEATING";
        icon.classList.add('blinking-icon'); // BARA pilen blinkar nu
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
    
    // 1. Räkna ut tidsgränsen (Nu minus 24 timmar)
    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - (24 * 60 * 60 * 1000));

    // 2. Filtrera datan så vi bara har kvar det som hänt senaste dygnet
    const sliceData = allData.filter(d => new Date(d.time) >= twentyFourHoursAgo);

    // 3. Skapa etiketter (Labels)
    // Om vi visar ett helt dygn är det snyggt att visa klockslag (HH:mm)
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
                        grid: { color: '#222' }, // Väldigt diskret grid
                        ticks: { 
                            color: '#888',
                            font: { family: 'VT323', size: 12 },
                            maxTicksLimit: 6, // Visar bara ca 6 tidsstämplar så det inte blir grötigt
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
                animation: { duration: 0 } // Snabbare uppdatering utan flimmer
            }
        });
    } else {
        myChart.data.labels = labels;
        myChart.data.datasets[0].data = temps;
        myChart.update();
    }
}

// Kolla efter ny data var 5:e sekund
setInterval(fetchData, 5000);
fetchData();

function startBubbles() {
    const stream = document.getElementById('bubble-stream');
    if (!stream) return;

    setInterval(() => {
        // Hämta statusen från skärmen och gör den till stora bokstäver
        const status = document.getElementById('status-text').innerText.toUpperCase();
        
        // --- NY LOGIK FÖR BUBBLORNA ---
        // Vi vill INTE bubbla om statusen är IDLE, FINISHED, READY eller SYNC ERROR
        const idleStatuses = ["IDLE", "FINISHED", "READY", "SYNC ERROR", "UNKNOWN", "-"];
        
        // Om statusen INTE finns i listan ovan -> BUBBLA!
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

// Se till att den körs!
startBubbles();