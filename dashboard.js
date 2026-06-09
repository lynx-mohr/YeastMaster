// ==========================================
// --- DASHBOARD.JS — Live View & Demo ---
// ==========================================
// Använder globalt från app.js: isAuthResolved, activeDeviceId, API_BASE,
//   currentTempUnit, convertTemp, formatDaysToHuman, translations, currentLang,
//   yeastDatabase, showView, savedProfiles
// Använder globalt från auth.js: auth, getAuthHeaders

// ==========================================
// --- 1. UPPDATERA LIVE-DASHBOARD ---
// ==========================================
async function updateDashboard() {
    const demoBtn = document.getElementById('start-demo-btn');

    // Om Firebase fortfarande funderar, avbryt och rita ingenting!
    if (!isAuthResolved) return;

    const user = auth.currentUser;

    if (!user && !activeDeviceId) {
        renderDemoDashboard();
        return;
    }

    if (user === undefined) return;

    // Om vi INTE är inloggade alls, DÅ kör vi demo direkt
    if (!user && !activeDeviceId) {
        renderDemoDashboard();
        return;
    }

    if (demoBtn) demoBtn.style.display = 'none';

    try {
        const response = await fetch(`${API_BASE}/data?device_id=${activeDeviceId}`);
        const data = await response.json();

        if (data && data.length > 0) {
            // --- KRITISK FIX: Sortera datan efter tid direkt ---
            const sortedData = data.sort((a, b) => new Date(a.time) - new Date(b.time));

            // Använd sortedData för att plocka ut det SENASTE värdet
            const latest = sortedData[sortedData.length - 1];
            console.log("Senaste sorterade datan:", latest);

            // ==========================================
            // --- IDLE: enheten väntar på ny jäsning (Select Yeast efter omstart) ---
            // Visa ett HELT nollställt kort istället för en halvt återupplivad gammal
            // jäsning. Fångas tidigt så vi också slipper en falsk temp-varning (måltemp
            // är 0 i idle medan kylen kan vara 24°C).
            // ==========================================
            if ((latest.status || "").toUpperCase() === "IDLE") {
                renderIdleDashboard(latest);
                return;
            }

            // ==========================================
            // --- NYTT: SMART BANNER-LOGIK (Inklusive Temp & Strömavbrott) ---
            // ==========================================
            const banner = document.getElementById('top-banner-alert');
            const bannerTitle = document.getElementById('banner-title');

            let alertToDisplay = "";

            // --- 1. KOLLA WATCHDOG-LARM (Matte i frontend) ---
            const nowTime = new Date().getTime();
            const logTime = latest.time ? new Date(latest.time).getTime() : nowTime;

            // A. Strömavbrott / Tappad anslutning (>30 minuter gammal data)
            if ((nowTime - logTime) > (30 * 60 * 1000)) {
                alertToDisplay = "POWER_OUTAGE";
            }
            // B. Temperatur-avvikelse (>2.0°C diff, förutsatt att sensorerna funkar)
            else if (latest.temp > -50 && latest.target_temp > -50) {
                const tempDiff = Math.abs(latest.temp - latest.target_temp);
                if (tempDiff >= 2.0) {
                    alertToDisplay = "TEMP_WARNING";
                }
            }

            // --- 2. KOLLA HÅRDVARU-LARM (Dry hop, Dump, från ESP32) ---
            if (alertToDisplay === "") {
                for (let i = sortedData.length - 1; i >= 0; i--) {
                    if (sortedData[i].active_alert && sortedData[i].active_alert !== "") {
                        const alertAgeHours = (nowTime - new Date(sortedData[i].time).getTime()) / (1000 * 60 * 60);
                        if (alertAgeHours < 6) {
                            alertToDisplay = sortedData[i].active_alert;
                        }
                        break;
                    }
                }
            }

            // --- 3. MINNES-KOLL & KVITTENS ---
            const dismissedAlert = localStorage.getItem('ym_dismissed_alert');
            if (alertToDisplay !== "" && alertToDisplay === dismissedAlert) {
                alertToDisplay = ""; // Redan kvitterat, tysta larmet!
            }

            // --- 4. VISA BANNERN MED RÄTT TEXT ---
            if (alertToDisplay !== "") {
                let displayMsg = alertToDisplay;

                // Formatera texten snyggt baserat på larmtyp och översätt (om ordboken finns)
                if (alertToDisplay === "POWER_OUTAGE") {
                    displayMsg = translations?.[currentLang]?.alerts?.power || "⚠️ CONNECTION LOST! Check power/WiFi.";
                } else if (alertToDisplay === "TEMP_WARNING") {
                    displayMsg = translations?.[currentLang]?.alerts?.temp || "🔥 TEMP DEVIATION! >2.0°C difference.";
                } else if (alertToDisplay.includes("REMOVE HOP")) {
                    displayMsg = translations?.[currentLang]?.alerts?.remove_hop || "🔔 TIME TO REMOVE HOPS!";
                } else if (alertToDisplay.includes("DRY HOP")) {
                    displayMsg = translations?.[currentLang]?.alerts?.dry_hop || "🌿 TIME TO DRY HOP!";
                } else if (alertToDisplay.includes("DUMP") || alertToDisplay.includes("RACK")) {
                    displayMsg = translations?.[currentLang]?.alerts?.dump || "🧪 TIME TO DUMP YEAST!";
                } else if (alertToDisplay.includes("CRASH")) {
                    displayMsg = translations?.[currentLang]?.alerts?.crash || "❄️ TIME TO COLD CRASH!";
                }

                if (bannerTitle) bannerTitle.innerText = displayMsg;
                if (banner) banner.style.display = 'block';
                window.currentActiveAlertString = alertToDisplay;
            } else {
                if (banner) banner.style.display = 'none';
            }
            // ==========================================

            if (latest && latest.time && typeof updateHeartbeatDisplay === 'function') {
                updateHeartbeatDisplay(latest.time);
                // Håll device-objektet synkat så att timern och dropdown-klick alltid använder rätt stämpel
                if (window.currentDeviceData) window.currentDeviceData.lastSeen = latest.time;
            }

            // ==========================================
            // --- NYTT: UPPDATERA LAST SYNC TIME ---
            // ==========================================
            if (latest && latest.time) {
                const syncDate = new Date(latest.time);
                const timeString = syncDate.toLocaleTimeString('sv-SE', {
                    hour: '2-digit', minute: '2-digit', second: '2-digit'
                });

                const syncElement = document.getElementById('last-sync-time');
                if (syncElement) {
                    syncElement.innerText = timeString;
                }
                // --- MAGISKA SYNK-RADEN: Uppdatera även hjärtat i Settings samtidigt! ---
                if (typeof updateHeartbeatDisplay === 'function') {
                    updateHeartbeatDisplay(latest.time);
                }
            }

            // 1. Temperaturer (Med inbyggd spärr för urkopplade sensorer)
            const safeBeerTemp = latest.temp <= -100 ? "--" : (convertTemp(latest.temp).toFixed(1) + '°' + currentTempUnit);
            const safeAirTemp = latest.air_temp <= -100 ? "--" : (convertTemp(latest.air_temp).toFixed(1) + '°' + currentTempUnit);

            document.getElementById('temp-beer-val').innerText = safeBeerTemp;
            document.querySelector('.beer-temp').setAttribute('data-text', safeBeerTemp);
            document.getElementById('air-temp-val').innerText = safeAirTemp;

            // 2. Info (Yeast & Profile)
            let displayStrain = (latest.strain || "---").toUpperCase();
            let displayProfile = (latest.profile || "---").toUpperCase();

            if (displayProfile.startsWith("* ")) {
                displayProfile = displayProfile.replace("* ", "★ ");
            }

            if (displayStrain.startsWith("CUSTOM (") && displayStrain.endsWith(")")) {
                displayStrain = displayStrain.replace("CUSTOM (", "").replace(")", "");
                if (!displayProfile.startsWith("★ ")) displayProfile = "★ " + displayProfile;
            }

            if (displayStrain.startsWith("* ") || displayStrain.startsWith("★ ")) {
                displayStrain = displayStrain.replace("* ", "").replace("★ ", "");
                if (!displayProfile.startsWith("★ ")) {
                    displayProfile = "★ " + displayProfile;
                }
            }

            const strainValEl = document.getElementById('strain-val');
            strainValEl.innerText = displayStrain;
            strainValEl.style.fontSize = displayStrain.length > 12 ? "0.8em" : "";

            const profileValEl = document.getElementById('profile-val');
            profileValEl.innerText = displayProfile;

            const action = (latest.action || "IDLE").toUpperCase();
            // Slå upp ordet i ordboken (fallback till engelska om det saknas)
            const translatedAction = translations[window.currentLang]?.action?.[action] || action;
            document.getElementById('action-val').innerText = translatedAction;

            // 3. Pil-logik
            const arrow = document.getElementById('status-arrow');
            if (action === "COOLING") {
                arrow.innerText = "▼";
                arrow.style.color = "#0088ff";
                arrow.style.visibility = "visible";
                arrow.classList.add('blink-active');
            } else if (action === "HEATING") {
                arrow.innerText = "▲";
                arrow.style.color = "#ff4444";
                arrow.style.visibility = "visible";
                arrow.classList.add('blink-active');
            } else {
                arrow.style.visibility = "hidden";
                arrow.classList.remove('blink-active');
            }

            // ==========================================
            // --- FIX FÖR IDLE-BUGGEN (Hämta sista kända tid) ---
            // ==========================================
            let displayStatusText = (latest.status || "--").toUpperCase();
            let displayDay = latest.day || 0;
            let displayPhaseDay = latest.phase_day || 0;
            let profileDay = latest.profile_day || displayDay;

            // Om maskinen är IDLE/FINISHED och visar 0, titta bakåt i tiden!
            if ((displayStatusText === "IDLE" || displayStatusText === "FINISHED") && displayDay === 0) {
                for (let i = sortedData.length - 1; i >= 0; i--) {
                    if (sortedData[i].day > 0) {
                        displayDay = sortedData[i].day;
                        displayPhaseDay = sortedData[i].phase_day;
                        profileDay = sortedData[i].profile_day || sortedData[i].day;
                        break;
                    }
                }
            }

            // Kolla först i "phase"-ordboken, sen i "status"-ordboken
            const translatedStatus = translations[window.currentLang]?.phase?.[displayStatusText]
                                  || translations[window.currentLang]?.status?.[displayStatusText]
                                  || displayStatusText;
            const statusEl = document.getElementById('status-text');
            const isActivelyRamping = (action === 'HEATING' || action === 'COOLING') &&
                (latest.target_temp || 0) > -100 &&
                Math.abs((latest.temp || 0) - (latest.target_temp || 0)) > 1.5;

            if (displayStatusText === 'RAMPING' || isActivelyRamping) {
                let contextPhase = '';
                if (displayStatusText === 'RAMPING') {
                    // Firmware skickar RAMPING — hitta senaste riktiga fasnamn bakåt i historiken
                    for (let i = sortedData.length - 1; i >= 0; i--) {
                        const s = (sortedData[i].status || '').toUpperCase();
                        if (s && s !== 'RAMPING' && s !== '--' && s !== 'IDLE' && s !== 'FINISHED') {
                            contextPhase = translations[window.currentLang]?.phase?.[s] || s;
                            break;
                        }
                    }
                } else {
                    // Firmware skickar fasnamnet direkt (t.ex. COLD CRASH) medan den rampar
                    contextPhase = translatedStatus;
                }
                const rampSpan = `<span class="ramping-label"><span class="ramp-short">Ramp</span><span class="ramp-long">Ramping</span></span>`;
                statusEl.innerHTML = contextPhase ? `${contextPhase} - ${rampSpan}` : rampSpan;
            } else {
                statusEl.innerText = translatedStatus;
            }

            // --- VÄCK LARM-DETEKTIVEN ---
            const currentStrain = latest.strain || "Unknown";
            const currentProfileName = latest.profile || "Unknown";

            if (typeof checkActionAlerts === 'function') {
                checkActionAlerts(profileDay, currentStrain, currentProfileName);
            }

            // 6. Progress (Grafisk bar)
            const targetDays = 14;
            const percent = Math.min((displayDay / targetDays) * 100, 100).toFixed(0);

            // 7. Skriv ut till skärmen!
            const dayValEl = document.getElementById('day-val');
            const phaseDayValEl = document.getElementById('phase-day-val');

            if (dayValEl) {
                dayValEl.innerText = formatDaysToHuman(displayDay);
            }
            if (phaseDayValEl) {
                phaseDayValEl.innerText = formatDaysToHuman(displayPhaseDay);
            }

            document.getElementById('progress-percent').innerText = percent + "%";
            document.getElementById('progress-fill').style.width = percent + "%";

            const targetTemp = latest.target_temp || 0;
            const targetTempElement = document.getElementById('target-temp-val');
            if (targetTempElement) {
                targetTempElement.innerText = targetTemp <= -100 ? "--" : (convertTemp(targetTemp).toFixed(1) + '°' + currentTempUnit);
            }
            // ==========================================

            // DATATVÄTT 2.0: KASTA UT SPIKARNA
            // OBS: filtrera BARA på öl-temperaturen (det enda grafen ritar). En frånkopplad
            // luftgivare (air_temp <= -50) ska INTE blanka hela grafen — det gjorde tidigare
            // att enheter med trasig/saknad luftgivare fick en helt tom temphistorik.
            const cleanChartData = sortedData.filter(log => {
                if (log.temp !== undefined && log.temp <= -50) return false;
                return true;
            });

            updateChart(cleanChartData);
        } else {
            // Vald enhet saknar telemetri (t.ex. nyregistrerad enhet utan jäsning).
            // Nollställ Live View istället för att låta föregående enhets data ligga kvar.
            renderIdleDashboard(null);
        }
    } catch (error) {
        console.error("Kunde inte hämta data:", error);
    }
}

// ==========================================
// --- NYTT: FUNKTION FÖR ATT STÄNGA MODALEN ---
// ==========================================
// Denna anropas när du klickar på "JAG HAR FIXAT DET!"
function dismissAlert() {
    const modal = document.getElementById('alert-modal');
    if (modal) {
        modal.style.display = 'none';
    }

    // Framtida uppgradering: Här kan vi lägga till kod för att säga till
    // servern/ESP32:an att sluta pipa om vi vill styra det från appen!
}

// ==========================================
// --- GRAFEN (Temp History) ---
// ==========================================
let beerChart;

function updateChart(data) {
    const canvas = document.getElementById('beer-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Om en graf redan finns, döda den!
    if (window.beerChart && typeof window.beerChart.destroy === 'function') {
        window.beerChart.destroy();
    }

    // Sortera datan i tidsordning först
    data.sort((a, b) => new Date(a.time) - new Date(b.time));

    // ========================================================
    // --- NY MAGI: BEHÅLL BARA DET SENASTE DYGNET (24h) ---
    // ========================================================
    if (data.length > 0) {
        // Ta reda på tiden för den absolut sista (nyaste) mätningen
        const newestTime = new Date(data[data.length - 1].time).getTime();

        // Räkna ut vad klockan var 24 timmar tidigare (24h * 60m * 60s * 1000ms)
        const cutoffTime = newestTime - (24 * 60 * 60 * 1000);

        // Skapa en ny lista som BARA innehåller data som är nyare än cutoff-tiden
        data = data.filter(d => new Date(d.time).getTime() >= cutoffTime);
    }
    // ========================================================

    let themeAccent = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
    if (!themeAccent) themeAccent = '#f39c12';

    // Kolla om vi är i Light Mode just nu
    const isLightMode = document.body.classList.contains('light-mode');

    // Gör toningen lite djupare (150px)
    const gradient = ctx.createLinearGradient(0, 0, 0, 150);

    // MAGIN: Använd accentfärgen och lägg till en "Hex Alpha"-kod för genomskinlighet i slutet.
    // '15' = extremt svag (perfekt för vit bakgrund), '35' = lite starkare (för mörk bakgrund), '00' = helt osynlig
    gradient.addColorStop(0, isLightMode ? themeAccent + '15' : themeAccent + '35');
    gradient.addColorStop(1, themeAccent + '00');

    // Skapa etiketterna för X-axeln (Vi kör på bara klockslag nu när vi vet att det är max 24h)
    const labels = data.map(d => new Date(d.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const temps = data.map(d => convertTemp(Number(d.temp) || 0));

    // Skapa den nya grafen
    window.beerChart = new Chart(ctx, {
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
            animation: { duration: 400 },
            scales: {
                x: {
                    ticks: { color: '#666', maxTicksLimit: 5, font: { family: 'Lexend', size: 10 } },
                    grid: { display: false }
                },
                y: {
                    ticks: {
                        color: '#bbbbbb',
                        font: { family: 'Lexend', size: 10 },
                        callback: (value) => value.toFixed(1) + '°'
                    },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: { enabled: true }
            }
        }
    });
}

// ==========================================
// --- 5. BUBBEL-MOTOR (Startar automatiskt) ---
// ==========================================
function startBubbles() {
    const stream = document.getElementById('bubble-stream');
    if (!stream) {
        setTimeout(startBubbles, 1000);
        return;
    }

    let bubbles = [];
    let lastSpawn = 0;

    function animate(timestamp) {
        const statusElement = document.getElementById('status-text');
        const statusText = statusElement ? statusElement.innerText.toUpperCase() : '';

        // Hämta hur länge vi varit i den aktuella fasen (avläst från din mätare)
        const phaseDayElement = document.getElementById('phase-day-val');
        const phaseDays = phaseDayElement ? parseFloat(phaseDayElement.innerText) || 0 : 0;

        // 1. Bestäm spawn-hastighet och ANTAL bubblor baserat på status
        let spawnInterval = 250;
        let spawnCount = 1; // Standard: 1 bubbla åt gången

        if (statusText.includes('CRASH')) {
            // COLD CRASH: 2 bubblor var 15:e sekund
            spawnInterval = 10000;
            spawnCount = 2;
        }
        else if (statusText.includes('CONDITIONING') || statusText === 'FINISHED') {
            // CONDITIONING: Helt dött
            spawnInterval = 9999999;
        }
        else if (statusText.includes('CLEAN')) {
            // CLEANING UP: Mycket aktivt (som det var förut)
            spawnInterval = 250;
        }
        else if (statusText.includes('PRIMARY') || statusText === '--' || statusText.includes('FERM')) {
            // PRIMARY / DEFAULT: Stegrande aktivitet!
            // 6 timmar = 0.25 dagar. 12 timmar = 0.5 dagar.

            if (phaseDays < 0) {
                // Första 6 timmarna (Lag phase): Ingen aktivitet alls
                spawnInterval = 9999999;
            }
            else if (phaseDays >= 0 && phaseDays < 0.5) {
                // 6 till 12 timmar: Stegrande aktivitet
                // Räkna ut hur långt vi har kommit i denna "uppstarts-fas" (ger ett värde mellan 0 och 1)
                let progress = (phaseDays - 0.25) / 0.25;

                // Går från en bubbla var 5:e sekund ner till en bubbla var 0.15 sekund
                spawnInterval = 5000 - (progress * (5000 - 150));
            }
            else {
                // Efter 12 timmar (High Krausen): Fullt ös! Snäppet snabbare än Cleaning Up
                spawnInterval = 150;
            }
        }

        // 2. Skapa nya bubblor om det är dags
        if (timestamp - lastSpawn > spawnInterval) {
            for (let i = 0; i < spawnCount; i++) {
                const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                const size = Math.random() * 0.7 + 0.5;
                const startX = 50 + (Math.random() * 12 - 6);

                // Om vi släpper flera bubblor (som i Cold Crash), lägg dem på lite olika djup
                const startY = 85 + (i * Math.random() * 4);

                circle.setAttribute("r", size);
                circle.setAttribute("fill", "rgba(255, 255, 255, 0.7)");
                stream.appendChild(circle);

                bubbles.push({
                    element: circle,
                    x: startX,
                    y: startY,
                    speed: Math.random() * 0.2 + 0.3,
                    wobbleOffset: Math.random() * Math.PI * 2
                });
            }
            lastSpawn = timestamp;
        }

        // 3. Flytta existerande bubblor
        for (let i = bubbles.length - 1; i >= 0; i--) {
            let b = bubbles[i];
            b.y -= b.speed;
            let currentX = b.x + Math.sin((b.y * 0.05) + b.wobbleOffset) * 0.4;
            b.element.setAttribute("cx", currentX);
            b.element.setAttribute("cy", b.y);

            // Ta bort bubblan precis under vätskeytan
            if (b.y < 39) {
                b.element.remove();
                bubbles.splice(i, 1);
            }
        }

        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}

// Starta bubblorna
startBubbles();

// ==========================================
// --- UPPDATERA ENHETENS NAMN I DASHBOARDEN ---
// ==========================================
function updateDashboardNickname(name) {
    const display = document.querySelector('.device-name-display');
    if (display) display.innerText = name.toUpperCase();
}

// ==========================================
// --- DEMO-DASHBOARD ---
// ==========================================
function renderDemoDashboard() {
    // 1. Översätt "DEMO MODE" i toppen
    let demoModeText = "DEMO MODE";
    if (window.currentLang === 'sv') demoModeText = "DEMOLÄGE";
    if (window.currentLang === 'de') demoModeText = "DEMO-MODUS";
    if (window.currentLang === 'fr') demoModeText = "MODE DÉMO";
    if (window.currentLang === 'es') demoModeText = "MODO DEMO";

    const displayElement = document.querySelector('.device-name-display');
    if (displayElement) displayElement.innerHTML = `<span style='color:#ff4444;'>${demoModeText}</span>`;

    // 2. Namn och profil (Dessa är egennamn och behöver inte översättas)
    document.getElementById('strain-val').innerText = "OLD BAVARIAN";
    document.getElementById('profile-val').innerText = "Brulosophy";

    // 3. Översätt "HEATING"
    const actionText = "HEATING";
    const translatedAction = translations[window.currentLang]?.action?.[actionText] || actionText;
    document.getElementById('action-val').innerText = translatedAction;

    // 4. Sätt Temperaturer
    const displayTemp = currentTempUnit === 'F' ? "68.2°F" : "20.1°C";
    document.getElementById('temp-beer-val').innerText = displayTemp;

    const beerTempEl = document.querySelector('.beer-temp');
    if (beerTempEl) beerTempEl.setAttribute('data-text', displayTemp);

    document.getElementById('air-temp-val').innerText = currentTempUnit === 'F' ? "73.4°F" : "23.0°C";

    // 5. Visa fas + pulserande Ramp/Ramping
    const contextPhase = translations[window.currentLang]?.phase?.PRIMARY || "PRIMARY";
    document.getElementById('status-text').innerHTML =
        `${contextPhase} - <span class="ramping-label"><span class="ramp-short">Ramp</span><span class="ramp-long">Ramping</span></span>`;

    // 6. Tidsformat (Använder din universella formatDaysToHuman)
    // 4 dagar och 2 timmar = 4 + (2/24)
    document.getElementById('day-val').innerText = formatDaysToHuman(4 + (2/24));
    // 0 dagar och 1 timme = 0 + (1/24)
    document.getElementById('phase-day-val').innerText = formatDaysToHuman(0 + (1/24));

    document.getElementById('target-temp-val').innerText = currentTempUnit === 'F' ? "69.8°F" : "21.0°C";

    document.getElementById('progress-percent').innerText = "29%";
    document.getElementById('progress-fill').style.width = "29%";

    const arrow = document.getElementById('status-arrow');
    if(arrow) {
        arrow.innerText = "▲";
        arrow.style.color = "#ff4444";
        arrow.style.visibility = "visible";
        arrow.classList.add('blink-active');
    }

    // Rita upp fejkgrafen
    const now = Date.now();
    const fakeChartData = [
        { time: new Date(now - 4000000).toISOString(), temp: 19.0 },
        { time: new Date(now - 3000000).toISOString(), temp: 19.0 },
        { time: new Date(now - 2000000).toISOString(), temp: 19.0 },
        { time: new Date(now - 1000000).toISOString(), temp: 19.4 },
        { time: new Date(now).toISOString(), temp: 20.1 }
    ];

    if (typeof updateChart === 'function') {
        updateChart(fakeChartData);
    }

    // --- VISA OCH PLACERA i-KNAPPEN ---
    const demoBtn = document.getElementById('start-demo-btn');
    if (demoBtn) {
        demoBtn.style.display = '';  // Återställ om den doldes av inloggad vy

        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            demoBtn.style.left = '48%';
            demoBtn.style.top = '16px';
        } else {
            demoBtn.style.left = '38%';
            demoBtn.style.top = '12px';
        }
    }
}

// ==========================================
// --- IDLE-DASHBOARD (Enheten väntar på ny jäsning) ---
// Nollställer hela kortet så det inte visar en halvt återupplivad gammal jäsning.
// ==========================================
function renderIdleDashboard(latest) {
    const dash = "--";

    // "Last sync" + hjärtslag uppdateras (enheten är ju online och synkar)
    if (latest && latest.time) {
        const syncEl = document.getElementById('last-sync-time');
        if (syncEl) {
            syncEl.innerText = new Date(latest.time).toLocaleTimeString('sv-SE', {
                hour: '2-digit', minute: '2-digit', second: '2-digit'
            });
        }
        if (typeof updateHeartbeatDisplay === 'function') updateHeartbeatDisplay(latest.time);
        if (window.currentDeviceData) window.currentDeviceData.lastSeen = latest.time;
    } else {
        // Ingen data alls (t.ex. nyregistrerad enhet utan jäsning) — nollställ synk + status
        const syncEl = document.getElementById('last-sync-time');
        if (syncEl) syncEl.innerText = dash;
        if (typeof updateHeartbeatDisplay === 'function') updateHeartbeatDisplay(null);
    }

    // Dölj ev. larm-banner
    const banner = document.getElementById('top-banner-alert');
    if (banner) banner.style.display = 'none';
    window.currentActiveAlertString = "";

    // Nollställ temperaturer + glasets text
    const tempBeerEl = document.getElementById('temp-beer-val');
    if (tempBeerEl) tempBeerEl.innerText = dash;
    const beerTempEl = document.querySelector('.beer-temp');
    if (beerTempEl) beerTempEl.setAttribute('data-text', dash);
    const airTempEl = document.getElementById('air-temp-val');
    if (airTempEl) airTempEl.innerText = dash;

    // Nollställ strain & profil
    const strainEl = document.getElementById('strain-val');
    if (strainEl) { strainEl.innerText = "---"; strainEl.style.fontSize = ""; }
    const profileEl = document.getElementById('profile-val');
    if (profileEl) profileEl.innerText = "---";

    // Status: IDLE (översatt om möjligt), dölj pilen
    const idleText = translations[window.currentLang]?.status?.idle
                  || translations[window.currentLang]?.action?.IDLE || "IDLE";
    const actionEl = document.getElementById('action-val');
    if (actionEl) actionEl.innerText = idleText;
    const statusEl = document.getElementById('status-text');
    if (statusEl) statusEl.innerText = idleText;
    const arrow = document.getElementById('status-arrow');
    if (arrow) { arrow.style.visibility = "hidden"; arrow.classList.remove('blink-active'); }

    // Nollställ tider och måltemp
    const dayEl = document.getElementById('day-val');
    if (dayEl) dayEl.innerText = dash;
    const phaseDayEl = document.getElementById('phase-day-val');
    if (phaseDayEl) phaseDayEl.innerText = dash;
    const targetEl = document.getElementById('target-temp-val');
    if (targetEl) targetEl.innerText = dash;

    // Nollställ progress-baren
    const pctEl = document.getElementById('progress-percent');
    if (pctEl) pctEl.innerText = "0%";
    const fillEl = document.getElementById('progress-fill');
    if (fillEl) fillEl.style.width = "0%";

    // Töm grafen
    if (typeof updateChart === 'function') updateChart([]);
}

// ==========================================
// --- ACTION ALERT SYSTEM (DASHBOARD) ---
// ==========================================
function checkActionAlerts(currentDay, strainName, profileName) {
    try {
        const alertBanner = document.getElementById('dashboard-action-alert');
        const alertText = document.getElementById('alert-action-name');

        if (!alertBanner || !alertText || !profileName || !strainName) return;

        // Göm larmet som standard varje gång vi uppdaterar
        alertBanner.style.display = 'none';

        let activeProfile = null;

        // Kolla först dina egna Custom Profiles
        const customProfiles = JSON.parse(localStorage.getItem('customYeastProfiles') || '[]');
        activeProfile = customProfiles.find(p => p.s && p.s.toUpperCase() === profileName.toUpperCase());

        // Om inte hittad i custom, kolla i standard-databasen
        if (!activeProfile && typeof yeastDatabase !== 'undefined' && yeastDatabase.yeasts) {
            const cleanStrain = strainName.replace(/^CUSTOM \(/, '').replace(/\)$/, '').trim();
            activeProfile = yeastDatabase.yeasts.find(p => p.p && p.p.toUpperCase() === profileName.toUpperCase() && p.s && p.s.toUpperCase() === cleanStrain);
        }

        if (!activeProfile) return;

        const lang = window.currentLang || 'en';
        const t = window.translations?.[lang]?.alerts || {};

        // Dry Hop-larm
        if (activeProfile.dh !== undefined && currentDay >= activeProfile.dh) {
            alertText.innerText = t.dry_hop || "🌿 TIME TO DRY HOP!";
            alertBanner.style.display = 'flex';
            return;
        }

        // Dump Yeast-larm
        if (activeProfile.du !== undefined && currentDay >= activeProfile.du) {
            alertText.innerText = t.dump || "🧪 TIME TO DUMP YEAST!";
            alertBanner.style.display = 'flex';
            return;
        }

        // Cold Crash-larm
        if (activeProfile.cc !== undefined && currentDay >= activeProfile.cc) {
            alertText.innerText = t.crash || "❄️ TIME TO COLD CRASH!";
            alertBanner.style.display = 'flex';
            return;
        }

    } catch (e) {
        console.error("checkActionAlerts fel:", e);
    }
}

// ==========================================
// --- HEARTBEAT: SETTINGS-STATUS ---
// ==========================================
function updateHeartbeatDisplay(lastSeenTimestamp) {
    const statusSpan = document.getElementById('setting-device-status');
    if (!statusSpan) return;

    // --- HÄMTA SPRÅK OCH ÖVERSÄTTNINGAR ---
    const lang = window.currentLang || 'en';
    // Fallback om settings saknas:
    const t = window.translations?.[lang]?.settings || {
        connected: "CONNECTED",
        offline: "OFFLINE",
        ago: "ago"
    };

    // Ingen tidsstämpel = enheten har aldrig synkat (t.ex. nyregistrerad enhet).
    // Visa OFFLINE — annars ligger föregående enhets status kvar i rutan.
    if (!lastSeenTimestamp) {
        statusSpan.innerText = t.offline;
        statusSpan.style.color = "#ff4444";
        return;
    }

    const lastSeen = new Date(lastSeenTimestamp);
    const now = new Date();
    const diffMs = now - lastSeen;

    // Om diffen är negativ (klockfel), eller om den är väldigt nyligen synkad
    if (diffMs < 0 || (diffMs / 60000) < 15) {
        statusSpan.innerText = t.connected;
        statusSpan.style.color = "#8CC63F"; // Grön
        return;
    }

    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    let statusText = "";
    const statusColor = "#ff4444"; // Röd

    // Enheter (d/h/m är universellt, men du kan flytta in dessa i i18n-filen om du vill vara extremt noga)
    const d = "d";
    const h = "h";
    const m = "m";

    if (diffDays > 0) {
        // Ex: "FRÅNKOPPLAD (2d, 4h sedan)"
        const remHours = diffHours % 24;
        statusText = `${t.offline} (${diffDays}${d}, ${remHours}${h} ${t.ago})`;
    } else if (diffHours > 0) {
        // Ex: "FRÅNKOPPLAD (3h, 12m sedan)"
        const remMins = diffMins % 60;
        statusText = `${t.offline} (${diffHours}${h}, ${remMins}${m} ${t.ago})`;
    } else {
        // Ex: "FRÅNKOPPLAD (45m sedan)"
        statusText = `${t.offline} (${diffMins}${m} ${t.ago})`;
    }

    statusSpan.innerText = statusText;
    statusSpan.style.color = statusColor;
}

// Körs i bakgrunden varje 30:e sekund för att hålla statusen färsk i Settings
setInterval(() => {
    if (window.currentDeviceData && window.currentDeviceData.lastSeen) {
        updateHeartbeatDisplay(window.currentDeviceData.lastSeen);
    }
}, 30000);

// Auto-refresh: hämtar ny data var 5:e minut (ESP32 skickar var 14:e)
// Pausar automatiskt när appen är i bakgrunden — visibilitychange hanterar uppvakning
setInterval(() => {
    if (document.hidden) return;
    if (typeof updateDashboard === 'function') updateDashboard();
}, 5 * 60 * 1000);
