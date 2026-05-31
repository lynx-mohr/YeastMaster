// ==========================================
// --- PROFILER.JS — Lab, Chart & Pitch Calc ---
// ==========================================
// Kräver: Chart.js, app.js (globala variabler), i18n.js

// ==========================================
// THE PROFILER (Interaktiv Profilbyggare)
// ==========================================

let labChart;
let labYAxisChart;

// Vi har nu 6 punkter för att bygga perfekta platta linjer och rampar!
let profilePoints = [
    { x: 0, y: 19 },    // Punkt 0: Start Primary
    { x: 3, y: 19 },    // Punkt 1: Slut Primary (Platt linje hit)
    { x: 4, y: 22 },    // Punkt 2: Slut Uppvärmning (Streckad ramp upp hit)
    { x: 6, y: 22 },    // Punkt 3: Slut Cleanup (Platt linje hit)
    { x: 8, y: 3 },     // Punkt 4: Start Cold Crash (Streckad ramp NER hit)
    { x: 14, y: 3 }     // Punkt 5: Slut Cold Crash / Condition (Platt linje hit)
];

// Data-tillstånd för torrhumlingen
let dryHopData = {
    enabled: false,
    day: 2.5,
    isDragging: false,
    color: '#8CC63F'
};

// --- NYTT: Data-tillstånd för Remove Dry Hops ---
let removeHopData = {
    enabled: false,
    day: 5.0,
    isDragging: false,
    color: '#ff6b6b' // Den snygga, dämpade röda färgen
};

// Flagga för att veta om vi ska instruera användaren att lyfta ur en korg eller dumpa i konen
let hopActionType = 'remove'; // 'remove' eller 'dump'

// --- CHART.JS PLUGIN: Torrhumlingslinjen ---
const dryHopPlugin = {
    id: 'dryHopLine',
    afterDraw: (chart) => {
        // 1. Spärr för att inte rita i live-dashboarden
        if (chart.canvas.closest('#view-dashboard')) return;

        // 2. Kolla om dry hop är aktiverat
        if (!dryHopData.enabled) return;

        const {ctx, chartArea: {top, bottom, left, right}, scales: {x}} = chart;
        const xPix = x.getPixelForValue(dryHopData.day);

        // 3. Rita inte om linjen hamnar utanför grafens x-axel
        if (xPix < left || xPix > right) return;

        ctx.save();
        
        ctx.strokeStyle = dryHopData.color;
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 6]);
        ctx.beginPath();
        ctx.moveTo(xPix, top);
        ctx.lineTo(xPix, bottom);
        ctx.stroke();
        
        ctx.setLineDash([]);
        ctx.fillStyle = dryHopData.color;
        ctx.font = 'bold 10px Lexend';
        ctx.textAlign = 'center';

        // --- HÄMTA SPRÅK OCH RITA ÖVERSATT TEXT ---
        const lang = window.currentLang || 'en';
        const textDryHop = window.translations[lang]?.lab?.chart_dry_hop || 'DRY HOP';
        ctx.fillText(textDryHop, xPix, top - 5);

        ctx.beginPath();
        ctx.arc(xPix, (top + bottom) / 2, 6, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
    }
};

// --- CHART.JS PLUGIN: Remove Dry Hops-linjen ---
const removeHopPlugin = {
    id: 'removeHopLine',
    afterDraw: (chart) => {
        if (chart.canvas.closest('#view-dashboard')) return;
        if (!removeHopData.enabled) return;

        const {ctx, chartArea: {top, bottom, left, right}, scales: {x}} = chart;
        const xPix = x.getPixelForValue(removeHopData.day);

        if (xPix < left || xPix > right) return;

        ctx.save();
        ctx.strokeStyle = removeHopData.color;
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(xPix, top);
        ctx.lineTo(xPix, bottom);
        ctx.stroke();
        
        ctx.setLineDash([]);
        ctx.fillStyle = removeHopData.color;
        ctx.font = 'bold 10px Lexend';
        ctx.textAlign = 'center';

        const lang = window.currentLang || 'en';
        const textRemoveHop = window.translations?.[lang]?.lab?.chart_remove_hop || 'REMOVE DRY HOPS 🔔';
        ctx.fillText(textRemoveHop, xPix, top - 5);

        ctx.beginPath();
        ctx.arc(xPix, (top + bottom) / 2, 6, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
    }
};

Chart.register(removeHopPlugin);

// --- DATA-TILLSTÅND FÖR RACK/DUMP ---
let rackDumpData = {
    enabled: false,
    day: 9.0, 
    isDragging: false,
    color: '#F2994A' 
};

// --- CHART.JS PLUGIN: Rack/Dump-linjen ---
const rackDumpPlugin = {
    id: 'rackDumpLine',
    afterDraw: (chart) => {
        if (chart.canvas.closest('#view-dashboard')) return; 
        if (!rackDumpData.enabled) return;

        const {ctx, chartArea: {top, bottom, left, right}, scales: {x}} = chart;
        const xPix = x.getPixelForValue(rackDumpData.day);

        if (xPix < left || xPix > right) return;

        ctx.save();
        ctx.strokeStyle = rackDumpData.color;
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]); 
        ctx.beginPath();
        ctx.moveTo(xPix, top);
        ctx.lineTo(xPix, bottom);
        ctx.stroke();
        
        ctx.setLineDash([]);
        ctx.fillStyle = rackDumpData.color;
        ctx.font = 'bold 10px Lexend';
        ctx.textAlign = 'center';

        // --- HÄMTA SPRÅK OCH RITA ÖVERSATT TEXT ---
        const lang = window.currentLang || 'en';
        const textRackDump = window.translations[lang]?.lab?.chart_rack || 'RACK/DUMP';
        ctx.fillText(textRackDump, xPix, top - 5);

        ctx.beginPath();
        ctx.arc(xPix, ((top + bottom) / 2) - 30, 6, 0, 2 * Math.PI); 
        ctx.fill();
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
    }
};

Chart.register(rackDumpPlugin);

function toggleRackDumpLine() {
    rackDumpData.enabled = !rackDumpData.enabled;
    const btn = document.getElementById('btn-add-dump');
    const textInfo = document.getElementById('dump-schedule-text');
    
    // 1. Hämta det aktuella språket
    const lang = window.currentLang || 'en';
    
    if (rackDumpData.enabled) {
        // 2. Använd det översatta ordet!
        btn.innerText = window.translations[lang]?.lab?.btn_remove_dump || "- REMOVE ACTION";
        btn.classList.add('active');
        btn.style.color = rackDumpData.color;
        btn.style.borderColor = rackDumpData.color;
        btn.style.backgroundColor = 'rgba(242, 153, 74, 0.1)';
        if(textInfo) textInfo.style.display = 'block';
    } else {
        // 2. Använd det översatta ordet!
        btn.innerText = window.translations[lang]?.lab?.btn_add_dump || "+ RACK / DUMP";
        btn.classList.remove('active');
        btn.style.color = '';
        btn.style.borderColor = '';
        btn.style.backgroundColor = 'transparent';
        if(textInfo) textInfo.style.display = 'none';
        if(labChart) labChart.canvas.style.cursor = 'default';
    }
    if (typeof updateSummaryText === 'function') updateSummaryText();
    if (labChart) labChart.update('none');
}

Chart.register(dryHopPlugin);

function toggleDryHopLine() {
    dryHopData.enabled = !dryHopData.enabled;
    const btn = document.getElementById('btn-add-hops');
    const textInfo = document.getElementById('hop-schedule-text');
    
    // 1. Hämta det aktuella språket
    const lang = window.currentLang || 'en';
    
    if (dryHopData.enabled) {
        // 2. Använd det översatta ordet!
        btn.innerText = window.translations[lang]?.lab?.btn_remove_hops || "- REMOVE DRY HOPS";
        btn.classList.add('active');
        textInfo.style.display = 'block';
        updateSummaryText();
    } else {
        // 2. Använd det översatta ordet!
        btn.innerText = window.translations[lang]?.lab?.btn_add_hops || "+ ADD DRY HOPS";
        btn.classList.remove('active');
        textInfo.style.display = 'none';
        if(labChart) labChart.canvas.style.cursor = 'default';
    }
    if (labChart) labChart.update('none');
}

window.toggleRemoveHopsLine = function() {
    // --- NY SÄKERHETSSPÄRR ---
    if (!dryHopData.enabled && !removeHopData.enabled) {
        // Om användaren klickar på "+ Remove Hops" men Dry Hop är AV:
        // Slå på Dry Hop först (t.ex. på dag 2.5) och sätt Remove Hops 2.5 dagar efter det!
        dryHopData.day = 2.5;
        removeHopData.day = 5.0;
        
        toggleDryHopLine(); // Aktiverar Dry Hop-linjen och knappen
        // Fortsätt sedan ner och aktivera Remove Hops som vanligt...
    }
    
    removeHopData.enabled = !removeHopData.enabled;
    const btn = document.getElementById('btn-toggle-remove-hops');
    const lang = window.currentLang || 'en';
    
    if (removeHopData.enabled) {
        // Om torrhumling inte är påslagen än, slå på den automatiskt 2.5 dagar tidigare!
        if (!dryHopData.enabled) {
            dryHopData.day = Math.max(0, removeHopData.day - 2.5);
            toggleDryHopLine();
        }
        
        // Hämtar den nya översättningsnyckeln
        btn.innerText = window.translations?.[lang]?.lab?.btn_remove_remove_hops || "- REMOVE HOPS";
        btn.classList.add('active');
        btn.style.color = removeHopData.color;
        btn.style.borderColor = removeHopData.color;
        btn.style.backgroundColor = 'rgba(255, 107, 107, 0.1)';
    } else {
        // Hämtar den nya översättningsnyckeln
        btn.innerText = window.translations?.[lang]?.lab?.btn_add_remove_hops || "+ REMOVE HOPS";
        btn.classList.remove('active');
        btn.style.color = '';
        btn.style.borderColor = '';
        btn.style.backgroundColor = 'transparent';
        if(labChart) labChart.canvas.style.cursor = 'default';
    }
    
    if (typeof updateSummaryText === 'function') updateSummaryText();
    if (labChart) labChart.update('none');
};


function updateSummaryText() {
    const summaryBox = document.getElementById('profile-summary');
    if (!summaryBox) return;

    if (typeof profilePoints === 'undefined' || profilePoints.length < 6) return;

    const p = profilePoints;
    const unit = '°' + currentTempUnit;

    // --- HÄMTA ÖVERSÄTTNINGAR FÖR DYNAMISK TEXT ---
    const lang = window.currentLang || 'en';
    const profilerT = window.translations?.[lang]?.profiler || window.translations?.['en']?.profiler || {};

    const t_day     = profilerT.day || "Day";
    const t_hold    = profilerT.hold_until || "Hold until Day";
    const t_rise    = profilerT.free_rise || "Free rise to";
    const t_drop    = profilerT.drop_to || "Drop to";
    const t_reach   = profilerT.reach || "Reach";
    const t_by      = profilerT.by_day || "by Day";
    const t_rise_to = profilerT.rise_to || "Rise to";
    
    // ------------------------------------------------

    // 1. PITCH
    const pitchText = `${t_day} 0 @ ${p[0].y.toFixed(1)}${unit}`; 

    // 2. PRIMARY
    let primText = `${t_hold} ${Math.round(p[1].x)}`;
    if (Math.abs(p[1].y - p[0].y) >= 0.2) {
        const action = p[1].y > p[0].y ? t_rise : t_drop;
        primText = `${action} ${p[1].y.toFixed(1)}${unit} ${t_by} ${Math.round(p[1].x)}`;
    }

    // 3. CLEANUP
    let cleanText = `${t_hold} ${Math.round(p[2].x)}`;
    if (Math.abs(p[2].y - p[1].y) >= 0.2) {
        const action = p[2].y > p[1].y ? t_reach : t_drop;
        cleanText = `${action} ${p[2].y.toFixed(1)}${unit} ${t_by} ${Math.round(p[2].x)}`;
    }

    // 4. COLD CRASH
    let crashText = `${t_hold} ${Math.round(p[4].x)}`;
    if (Math.abs(p[4].y - p[3].y) >= 0.2) {
        const action = p[4].y > p[3].y ? t_rise_to : t_drop;
        crashText = `${action} ${p[4].y.toFixed(1)}${unit} ${t_by} ${Math.round(p[4].x)}`;
    }

    // 5. CONDITION
    const condText = `${t_hold} ${Math.round(p[5].x)}`;

   // --- BYGG IHOP HELA LÅDAN FRÅN BÖRJAN ---
    summaryBox.innerHTML = `
        <div class="summary-header" data-i18n="profiler.summary">${profilerT.summary || "PROFILE SUMMARY"}</div>
        <div class="summary-row"><span class="label" data-i18n="profiler.pitch">${profilerT.pitch || "Pitch"}</span><span class="value">${pitchText}</span></div>
        <div class="summary-row"><span class="label" data-i18n="profiler.primary">${profilerT.primary || "Primary"}</span><span class="value">${primText}</span></div>
        <div class="summary-row"><span class="label" data-i18n="profiler.cleanup">${profilerT.cleanup || "Cleanup"}</span><span class="value">${cleanText}</span></div>
        <div class="summary-row"><span class="label" data-i18n="profiler.cold_crash">${profilerT.cold_crash || "Cold Crash"}</span><span class="value">${crashText}</span></div>
        <div class="summary-row"><span class="label" data-i18n="profiler.condition">${profilerT.condition || "Condition"}</span><span class="value">${condText}</span></div>
        <div id="summary-action-lines"></div>
    `;

    // --- RITA ACTION LINES (Den nya logiken för Dry Hop Duration) ---
    const actionLinesBox = document.getElementById('summary-action-lines');
    let extraLinesHTML = "";

    // Om Dry Hop är aktiverat
    if (typeof dryHopData !== 'undefined' && dryHopData.enabled) {
        // Uppdatera texten under grafen
        const hopVal = document.getElementById('hop-day-val');
        if (hopVal) hopVal.innerText = dryHopData.day.toFixed(1);
        
        // Kolla om REMOVE är aktiverat
        if (typeof removeHopData !== 'undefined' && removeHopData.enabled) {
            const duration = (removeHopData.day - dryHopData.day).toFixed(1);
            extraLinesHTML += `<div class="summary-row" style="margin-top: 5px; border-top: 1px dashed #333; padding-top: 5px;"><span class="label" style="color: #8CC63F;">Dry Hop Contact</span><span class="value">Day ${dryHopData.day.toFixed(1)} to Day ${removeHopData.day.toFixed(1)} <strong style="color:#fff;">(${duration} days)</strong></span></div>`;
            
            // Uppdatera texten under grafen
            const removeVal = document.getElementById('remove-day-val');
            const removeText = document.getElementById('remove-schedule-text');
            if (removeVal) removeVal.innerText = removeHopData.day.toFixed(1);
            if (removeText) removeText.style.display = 'block';
            
        } else {
            // Om bara Dry Hop är aktiv
            extraLinesHTML += `<div class="summary-row" style="margin-top: 5px; border-top: 1px dashed #333; padding-top: 5px;"><span class="label" style="color: #8CC63F;">Dry Hop</span><span class="value">Scheduled for Day ${dryHopData.day.toFixed(1)}</span></div>`;
            
            const removeText = document.getElementById('remove-schedule-text');
            if (removeText) removeText.style.display = 'none';
        }
    } else {
        // Göm Remove-texten om Dry Hop stängs av
        const removeText = document.getElementById('remove-schedule-text');
        if (removeText) removeText.style.display = 'none';
    }

    if (actionLinesBox) {
        actionLinesBox.innerHTML = extraLinesHTML;
    }
}

// --- INITIALISERAR GRAFEN OCH DRAG-LOGIKEN ---
function initLabChart() {
    // --- SÄKER PÅFYLLNAD AV GRAFEN ---
    if (profilePoints && profilePoints.length < 6) {
        // Hämta sista giltiga punkten vi fick från databasen
        let lastP = profilePoints[profilePoints.length - 1] || { x: 0, y: 20 };
        
        // Fyll på med platta linjer (samma Y-värde) tills vi når exakt 6 punkter
        while (profilePoints.length < 6) {
            profilePoints.push({ x: lastP.x + 2, y: lastP.y });
            lastP = profilePoints[profilePoints.length - 1];
        }
    }

    const canvas = document.getElementById('lab-chart');

    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // FÖRSTÖR DEN GAMLA GRAFEN INNAN VI RITAR EN NY
    if (typeof labChart !== 'undefined' && labChart !== null) {
        labChart.destroy();
    }
    if (typeof labYAxisChart !== 'undefined' && labYAxisChart !== null) {
        labYAxisChart.destroy();
        labYAxisChart = null;
    }

    // --- LIVE-KOLL AV TEMAT ---
    const isLightMode = document.body.classList.contains('light-mode');
    const isMobile = window.innerWidth <= 768;
    const useYAxisSidebar = !isChartFullscreen;

    // --- FÄRGER OCH VARIABLER ---
    const themeAccent = '#f4c95d'; 
    const pointFill = '#888888';   
    const lineWidth = isLightMode ? 2 : 3; 
    
    const dotSize = isMobile ? 8 : 5;         
    const hoverSize = isMobile ? 12 : 8;      
    const touchMagnet = isMobile ? 25 : 10;   

    // GRADIENT
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, isLightMode ? 'rgba(244, 201, 93, 0.15)' : 'rgba(244, 201, 93, 0.4)'); 
    gradient.addColorStop(1, 'rgba(244, 201, 93, 0.0)');

    // AXEL-FÄRGER
    const gridColor = isLightMode ? '#ebebeb' : '#222222';
    const gridBorderColor = isLightMode ? '#cccccc' : '#444444'; 
    const textColor = isLightMode ? '#666666' : '#888888';

    // RITA GRAFEN
    labChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Profile Target Temp',
                data: profilePoints,
                borderColor: themeAccent,
                backgroundColor: gradient,
                borderWidth: lineWidth,            
                pointBackgroundColor: pointFill,  
                pointBorderColor: themeAccent,    
                pointRadius: dotSize,             
                pointHoverRadius: hoverSize,      
                pointHitRadius: touchMagnet,      
                showLine: true,
                tension: 0.1, 
                clip: false,
                fill: true,
                segment: {
                    borderDash: ctx => {
                        const y0 = ctx.p0.parsed?.y;
                        const y1 = ctx.p1.parsed?.y;
                        return (y0 !== undefined && y0 === y1) ? [6, 4] : undefined;
                    }
                }
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: { top: 30, right: 30, bottom: 10, left: useYAxisSidebar ? 0 : 10 }
            },
            scales: {
                y: {
                    type: 'linear',
                    min: currentTempUnit === 'F' ? 28 : -2,
                    max: currentTempUnit === 'F' ? 104 : 40,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.08)',
                        borderColor: useYAxisSidebar ? 'transparent' : gridBorderColor,
                        drawBorder: !useYAxisSidebar,
                        tickLength: useYAxisSidebar ? 0 : 8
                    },
                    ticks: {
                        display: !useYAxisSidebar,
                        color: '#888888',
                        font: { family: 'Lexend', weight: '600' },
                        padding: 6
                    },
                    title: { display: !useYAxisSidebar, text: `Temp (°${currentTempUnit})`, color: textColor, font: { family: 'Lexend', weight: '800' } },
                    afterFit: useYAxisSidebar ? (scale => { scale.width = 0; }) : undefined
                },
                x: {
                    type: 'linear',
                    grid: { 
                        color: 'rgba(255, 255, 255, 0.08)'
                    },
                    ticks: { 
                        color: '#888888',
                        font: { family: 'Lexend', weight: '600' }
                    },
                    title: { display: !useYAxisSidebar, text: 'Days', color: textColor, font: { family: 'Lexend', weight: '800' } }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            },
            animation: { duration: 0 }
        },
      plugins: [{
            id: 'customCanvasDrawing',
            afterDatasetsDraw(chart) {
                const ctx = chart.ctx;
                const meta = chart.getDatasetMeta(0);
                if (!meta || !meta.data || meta.data.length < 6) return;

                const isLightNow = document.body.classList.contains('light-mode');

                ctx.save();
                ctx.font = '800 10px "Lexend", sans-serif';
                ctx.fillStyle = isLightNow ? '#555555' : 'rgba(255, 255, 255, 0.5)'; 
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';

                function drawText(text, p1, p2, offsetX = 0, offsetY = -12) {
                    const x1 = meta.data[p1].x;
                    const y1 = meta.data[p1].y;
                    const x2 = meta.data[p2].x;
                    const y2 = meta.data[p2].y;

                    const midX = ((x1 + x2) / 2) + offsetX;
                    const midY = ((y1 + y2) / 2) + offsetY; 

                    ctx.fillText(text, midX, midY);
                }

           // --- ÖVERSÄTTNINGSLOGIKEN (Nu via vår i18n-motor!) ---
                const lang = window.currentLang || 'en';
                // Vi hämtar från profiler-sektionen i i18n
               const t = window.translations?.[lang]?.profiler || window.translations?.['en']?.profiler || {};

                // Vi konverterar orden till VERSALER (uppercase) för att det ser snyggast ut i grafen
                const textPrim = (t.primary || 'PRIMARY').toUpperCase();
                const textClean = (t.cleanup || 'CLEANUP').toUpperCase();
                const textCrash = (t.cold_crash || 'COLD CRASH').toUpperCase();
                const textCond = (t.condition || 'CONDITION').toUpperCase();

                // Rita ut de översatta orden!
                drawText(textPrim, 0, 1);    
                drawText(textClean, 2, 3);   
                drawText(textCrash, 3, 4, 15, 5);      
                drawText(textCond, 4, 5);

             
                ctx.restore();
            }
        }]
    });

    // --- SÄTT RÄTT SPRÅK PÅ DAYS-LABELN ---
    const daysLabelEl = document.getElementById('lab-days-label');
    if (daysLabelEl) {
        let xLabel = "Days";
        if (window.currentLang === 'sv') xLabel = "Dagar";
        if (window.currentLang === 'de') xLabel = "Tage";
        daysLabelEl.textContent = xLabel;
    }

    // --- SKAPA Y-AXEL SIDEBAR GRAFEN ---
    if (useYAxisSidebar) {
        const yAxisCanvas = document.getElementById('lab-chart-yaxis');
        if (yAxisCanvas) {
            const yCtx = yAxisCanvas.getContext('2d');
            labYAxisChart = new Chart(yCtx, {
                type: 'scatter',
                data: { datasets: [] },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: { top: 30, right: 0, bottom: 10, left: 4 }
                    },
                    scales: {
                        y: {
                            type: 'linear',
                            min: currentTempUnit === 'F' ? 28 : -2,
                            max: currentTempUnit === 'F' ? 104 : 40,
                            grid: { display: false },
                            ticks: {
                                color: '#888888',
                                font: { family: 'Lexend', weight: '600' },
                                padding: 4
                            },
                            title: {
                                display: true,
                                text: `Temp (°${currentTempUnit})`,
                                color: textColor,
                                font: { family: 'Lexend', weight: '800' }
                            },
                            afterFit(scale) { scale.width = 68; }
                        },
                        x: {
                            display: false,
                            type: 'linear',
                            min: 0,
                            max: 1
                        }
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: { enabled: false }
                    },
                    animation: { duration: 0 }
                }
            });
        }
    }

    // --- DRAG LOGIKEN FORTSÄTTER HÄR NERE ---
    let isDragging = false;
    let dragIndex = -1;
    let isDraggingDryHop = false; 
    let isDraggingRackDump = false; 
    let isDraggingRemoveHop = false;

    canvas.addEventListener('pointerdown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const xPos = e.clientX - rect.left;
        let xVal = labChart.scales.x.getValueForPixel(xPos);

        const actionMagnet = isMobile ? 1.5 : 0.6; 
        
        // 1. KOLLA RACK/DUMP FÖRST
        if (typeof rackDumpData !== 'undefined' && rackDumpData.enabled) {
            if (Math.abs(xVal - rackDumpData.day) < actionMagnet) {
                isDraggingRackDump = true;
                canvas.style.cursor = 'ew-resize'; 
                return; 
            }
        }

        // 2. KOLLA TORRHUMLING SEDAN
        if (typeof dryHopData !== 'undefined' && dryHopData.enabled) {
            if (Math.abs(xVal - dryHopData.day) < actionMagnet) {
                isDraggingDryHop = true;
                canvas.style.cursor = 'ew-resize'; 
                return; 
            }
        }

        // KOLLA REMOVE DRY HOPS
        if (typeof removeHopData !== 'undefined' && removeHopData.enabled) {
            if (Math.abs(xVal - removeHopData.day) < actionMagnet) {
                isDraggingRemoveHop = true;
                canvas.style.cursor = 'ew-resize'; 
                return; 
            }
        }

        // 3. KOLLA VANLIGA GRAFPUNKTER
        const points = labChart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false);
        if (points.length > 0) {
            isDragging = true;
            dragIndex = points[0].index;
            canvas.style.cursor = 'grabbing';
        }
    });

    canvas.addEventListener('touchstart', (e) => {
        if (isDragging || isDraggingDryHop || isDraggingRackDump) e.preventDefault();
        const points = labChart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false);
        if (points.length > 0 || isDraggingDryHop || isDraggingRackDump) e.preventDefault(); 
    }, { passive: false });

    window.addEventListener('pointermove', (e) => {
        
        // --- DRA RACK/DUMP ---
        if (isDraggingRackDump) {
            const rect = canvas.getBoundingClientRect();
            const xPos = e.clientX - rect.left;
            let xVal = labChart.scales.x.getValueForPixel(xPos);
            xVal = Math.max(0, Math.round(xVal * 2) / 2);
            rackDumpData.day = xVal;
            labChart.update('none');
            if (typeof updateSummaryText === 'function') updateSummaryText();
            return; 
        }

        // --- DRA TORRHUMLING ---
        if (isDraggingDryHop) {
            const rect = canvas.getBoundingClientRect();
            const xPos = e.clientX - rect.left;
            let xVal = labChart.scales.x.getValueForPixel(xPos);
            xVal = Math.max(0, Math.round(xVal * 2) / 2);
            dryHopData.day = xVal;
            labChart.update('none');
            if (typeof updateSummaryText === 'function') updateSummaryText();
            return; 
        }

        // --- DRA REMOVE DRY HOPS ---
        if (isDraggingRemoveHop) {
            const rect = canvas.getBoundingClientRect();
            const xPos = e.clientX - rect.left;
            let xVal = labChart.scales.x.getValueForPixel(xPos);
            xVal = Math.max(0, Math.round(xVal * 2) / 2);
            
            // Säkerhetsspärr: Du kan inte ta bort humlen innan du lagt i den!
            if (dryHopData.enabled && xVal <= dryHopData.day) {
                xVal = dryHopData.day + 0.5;
            }
            
            removeHopData.day = xVal;
            labChart.update('none');
            if (typeof updateSummaryText === 'function') updateSummaryText();
            return; 
        }

        // --- DRA VANLIGA GRAFPUNKTER ---
        if (isDragging && dragIndex !== -1) {
            const rect = canvas.getBoundingClientRect();
            const xPos = e.clientX - rect.left;
            const yPos = e.clientY - rect.top;

            let xVal = labChart.scales.x.getValueForPixel(xPos);
            let yVal = labChart.scales.y.getValueForPixel(yPos);

            xVal = Math.max(0, Math.round(xVal * 2) / 2);
            const yMin = currentTempUnit === 'F' ? 28 : -2;
            const yMax = currentTempUnit === 'F' ? 104 : 40;
            yVal = Math.max(yMin, Math.min(yMax, Math.round(yVal)));

            const minGap = 0.5;

// --- 1. SÄTT X-POSITION (SÄKER VERSION) ---
if (dragIndex === 0) xVal = 0;
else if (dragIndex === 1) xVal = Math.max(0, Math.min(xVal, (profilePoints[2] ? profilePoints[2].x : 999) - minGap));
else if (dragIndex === 2) xVal = Math.max(profilePoints[1].x + minGap, Math.min(xVal, (profilePoints[3] ? profilePoints[3].x : 999) - minGap));
else if (dragIndex === 3) xVal = Math.max(profilePoints[2].x + minGap, Math.min(xVal, (profilePoints[4] ? profilePoints[4].x : 999) - minGap));
else if (dragIndex === 4) xVal = Math.max(profilePoints[3].x + minGap, Math.min(xVal, (profilePoints[5] ? profilePoints[5].x : 999) - minGap));
else if (dragIndex === 5) xVal = Math.max(profilePoints[4].x + minGap, xVal);

// --- 2. SÄTT Y-POSITION ---
if (dragIndex === 0 || dragIndex === 1) {
    yVal = Math.min(yVal, profilePoints[2].y);
    yVal = Math.max(yVal, profilePoints[4].y);
} else if (dragIndex === 2 || dragIndex === 3) {
    yVal = Math.max(yVal, profilePoints[0].y);
} else if (dragIndex === 4 || dragIndex === 5) {
    yVal = Math.min(yVal, profilePoints[0].y);
}

// --- 3. UPPDATERA HUVUDPUNKTEN ---
profilePoints[dragIndex] = { x: xVal, y: yVal };

// --- 4. "KNUFF-LOGIK" (SÄKER VERSION) ---
// Vi kollar med && att punkten finns innan vi försöker sätta .y
if (dragIndex === 2 && profilePoints[3]) profilePoints[3].y = yVal;
if (dragIndex === 3 && profilePoints[2]) profilePoints[2].y = yVal;
if (dragIndex === 4 && profilePoints[5]) profilePoints[5].y = yVal;
if (dragIndex === 5 && profilePoints[4]) profilePoints[4].y = yVal;

// --- KNUFF-LOGIK FÖR X (SÄKER VERSION) ---
// Om vi drar i 4:an och den krockar med 5:an, knuffa 5:an åt höger
if (dragIndex === 4 && profilePoints[5] && profilePoints[5].x < profilePoints[4].x + minGap) {
    profilePoints[5].x = profilePoints[4].x + minGap;
}
// Om vi drar i 5:an och den krockar med 4:an, knuffa 4:an åt vänster
if (dragIndex === 5 && profilePoints[4] && profilePoints[4].x > profilePoints[5].x - minGap) {
    profilePoints[4].x = profilePoints[5].x - minGap;
}

// --- 5. SLUTLIG RENDERING ---
const lastPointX = profilePoints[profilePoints.length - 1].x;
labChart.options.scales.x.max = Math.max(16, lastPointX + 1);

labChart.update('none');
if (typeof updateSummaryText === 'function') updateSummaryText();
        }
    });

    window.addEventListener('pointerup', () => {
        // --- SLÄPP RACK/DUMP ---
        if (isDraggingRackDump) {
            isDraggingRackDump = false;
            canvas.style.cursor = 'default';
            if (typeof updateSummaryText === 'function') updateSummaryText();
        }
        // --- SLÄPP TORRHUMLING ---
        if (isDraggingDryHop) {
            isDraggingDryHop = false;
            canvas.style.cursor = 'default';
            if (typeof updateSummaryText === 'function') updateSummaryText();
        }

        // --- SLÄPP REMOVE DRY HOPS ---
        if (isDraggingRemoveHop) {
            isDraggingRemoveHop = false;
            canvas.style.cursor = 'default';
            if (typeof updateSummaryText === 'function') updateSummaryText();
        }

        // --- SLÄPP VANLIG GRAFPUNKT ---
        if (isDragging) {
            isDragging = false;
            dragIndex = -1;
            canvas.style.cursor = 'default';
            if (typeof updateSummaryText === 'function') updateSummaryText();
        }
    });
}

// --- 1. FYLL RULLISTAN MED BASJÄSTER ---
function populateBaseYeastDropdown() {
    const dropdown = document.getElementById('custom-base-yeast');
    if (!dropdown) return;

    // Plocka fram alla vanliga jäster (inte dina egengjorda)
    const baseStrains = yeastStrains.filter(y => !y.isCustom).map(y => y.name);
    
    // Fyll rullistan
    baseStrains.sort().forEach(strain => {
        const option = document.createElement('option');
        option.value = strain;
        option.textContent = strain;
        dropdown.appendChild(option);
    });

    // --- NY LOGIK: Lyssna på när du väljer en jäst ---
   dropdown.addEventListener('change', function() {
        const placeholder = document.getElementById('chart-placeholder');
        const chartArea = document.getElementById('chart-scroll-area');
        const yaxisSidebar = document.getElementById('lab-yaxis-sidebar');
        const daysLabel = document.getElementById('lab-days-label');
        const zoomBtn = document.getElementById('btn-zoom');

        if (this.value !== "") {
            // Visa grafen
            if (placeholder) placeholder.style.display = 'none';
            if (yaxisSidebar) {
                yaxisSidebar.style.display = '';
                requestAnimationFrame(() => {
                    yaxisSidebar.style.opacity = '1';
                    if (typeof labYAxisChart !== 'undefined' && labYAxisChart) labYAxisChart.resize();
                });
            }
            if (chartArea) {
                chartArea.style.opacity = '1';
                chartArea.style.pointerEvents = 'auto';
            }
            if (daysLabel) daysLabel.style.display = '';
            if (zoomBtn) zoomBtn.style.display = 'block';

            // --- HÄR ÄR FIXEN: Trigga sammanfattningen direkt! ---
            if (typeof updateSummaryText === 'function') {
                updateSummaryText();
            }
        } else {
            // Visa "Välj en basjäst..."-texten
            if (placeholder) placeholder.style.display = 'flex';
            if (yaxisSidebar) {
                yaxisSidebar.style.opacity = '0';
                setTimeout(() => { yaxisSidebar.style.display = 'none'; }, 500);
            }
            if (chartArea) {
                chartArea.style.opacity = '0';
                chartArea.style.pointerEvents = 'none';
            }
            if (daysLabel) daysLabel.style.display = 'none';
            if (zoomBtn) zoomBtn.style.display = 'none';
        }
    });
}

// --- 3. LADDA IN DINA EGNA JÄSTER I BÅDA DATABASERNA ---
function loadCustomProfiles() {
    let savedProfiles = JSON.parse(localStorage.getItem('customYeastProfiles') || '[]');
    
    savedProfiles.reverse().forEach(profile => {
        // A) Säkerhetskoll: Om maskin-databasen (yeastDatabase) finns, smuggla in den där!
        if (typeof yeastDatabase !== 'undefined' && yeastDatabase.yeasts) {
            if (!yeastDatabase.yeasts.some(y => y.s === profile.s && y.p === profile.p)) {
                yeastDatabase.yeasts.unshift(profile);
            }
        }

        // B) Smuggla in i UI-databasen (yeastStrains) så den ritas som ett kort!
        const customId = "custom-" + profile.s.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (!yeastStrains.some(y => y.id === customId)) {
            yeastStrains.push({
                id: customId,
                name: profile.s,
                origin: "Custom",
                temp: "User Defined",
                tags: ["Custom", profile.p],
                desc: "Din egenhändigt skapade jästprofil. Denna är baserad på: " + profile.p,
                styles: "Any",
                isCustom: true // Flagga så vi vet att den är egengjord
            });
        }
    });

    // C) SUPERVIKTIGT: Rita om biblioteket nu när dina egna jäster ligger i listan!
    if (typeof renderYeastLibrary === 'function') {
        const searchBox = document.getElementById('yeast-search');
        renderYeastLibrary(searchBox ? searchBox.value : "");
    }
}

// ==========================================
// --- TÖM YEAST LIBRARY (KUNDVAGNEN) ---
// ==========================================
window.clearLibrarySelection = function() {
    // 1. Töm listan i bakgrunden (byt ut 'selectedStrains' om din variabel heter något annat)
    if (typeof selectedStrains !== 'undefined') {
        selectedStrains = []; 
    }

    // 2. Leta upp alla markerade knappar och återställ dem
    // Byt ut '.selected' mot den klass du använder för markerade kort. 
    // Om du använder inline-styles (typ style="border-color: green"), nollställ dem här:
    const activeCards = document.querySelectorAll('.yeast-card.selected'); // <-- Justera klassnamnet!
    activeCards.forEach(card => {
        card.classList.remove('selected');
        
        // Exempel på att nollställa inline-styles om du använde det:
        card.style.borderColor = '#333'; 
        card.style.color = '#ccc';
    });

    // 3. Nollställ "Selected: X/10"-texten
    // Byt ut ID:t mot det du har på din räknare i HTML:en
    const counterText = document.getElementById('library-counter'); 
    if (counterText) {
        counterText.innerText = 'Selected: 0/10';
    }
};



// ==========================================
// PITCH CALCULATOR
// ==========================================
// ... (Din calculatePitch() funktion ligger kvar här nere precis som förut) ...

function calculatePitch() {
    const vol = parseFloat(document.getElementById('pitch-vol').value) || 0;
    const og = parseFloat(document.getElementById('pitch-og').value) || 1.000;
    const rate = parseFloat(document.getElementById('pitch-rate').value) || 0.75;
    const harvestDate = document.getElementById('pitch-date').value;

    // 1. Konvertera OG till Plato (Approximation)
    const plato = (og - 1) * 250;

    // 2. Räkna ut cellbehov (i miljarder)
    // Formel: (ml vätska * plato * rate) / 1000
    const cellsNeeded = Math.round((vol * 1000 * plato * rate) / 1000);
    document.getElementById('res-needed').innerText = cellsNeeded;

    // 3. Räkna ut Viability
    if (harvestDate) {
        const start = new Date(harvestDate);
        const now = new Date();
        const diffDays = Math.floor((now - start) / (1000 * 60 * 60 * 24));
        
        // Enkel modell: tappar 0.7% livskraft per dag i kylen
        let viability = Math.max(0, 100 - (diffDays * 0.7));
        document.getElementById('res-viability').innerText = Math.round(viability) + "%";
        document.getElementById('res-days-old').innerText = diffDays + " days old";
        
        // Varna om viability är låg
        document.getElementById('pitch-warning').style.display = (viability < 50) ? 'block' : 'none';
    } else {
        document.getElementById('res-viability').innerText = "100%";
        document.getElementById('res-days-old').innerText = "Fresh/New";
    }
}

// Sätt dagens datum som default i kalkylatorn
window.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('pitch-date');
    if(dateInput) dateInput.valueAsDate = new Date();
    calculatePitch();
});

// Registrera Service Worker för att möjliggöra PWA-installation
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker registrerad!', reg))
      .catch(err => console.log('Service Worker fel:', err));
  });
}


// ==========================================
// --- HJÄLPFUNKTION: PROFILSAMMANFATTNING ---
// Enda källan till sanning för fasdetektering.
// Används av generateHardwareProfilesHTML, openYeastModal och Lab-modalen.
// ==========================================
function computeProfilePhases(steps, t) {
    const s = steps;
    const pitch = `${t.day} ${s[0][0]} @ ${s[0][1].toFixed(1)}°C`;

    let primary = `${t.hold} ${s[1][0]}`;
    if (s.length > 1 && Math.abs(s[1][1] - s[0][1]) >= 0.2)
        primary = `${s[1][1] > s[0][1] ? t.rise : t.drop} ${s[1][1].toFixed(1)}°C ${t.by} ${s[1][0]}`;

    let cleanup = s.length > 2 ? `${t.hold} ${s[2][0]}` : '';
    if (s.length > 2 && Math.abs(s[2][1] - s[1][1]) >= 0.2)
        cleanup = `${s[2][1] > s[1][1] ? t.reach : t.drop} ${s[2][1].toFixed(1)}°C ${t.by} ${s[2][0]}`;

    let coldCrash = s.length >= 6 ? `${t.hold} ${s[4][0]}` : '';
    if (s.length >= 6) {
        if (Math.abs(s[3][1] - s[2][1]) >= 0.2)
            coldCrash = `${s[3][1] < s[2][1] ? t.drop : t.rise} ${s[3][1].toFixed(1)}°C ${t.by} ${s[3][0]}`;
        else if (Math.abs(s[4][1] - s[3][1]) >= 0.2)
            coldCrash = `${s[4][1] < s[3][1] ? t.drop : t.rise} ${s[4][1].toFixed(1)}°C ${t.by} ${s[4][0]}`;
    }

    const condition = s.length >= 6 ? `${t.hold} ${s[5][0]}` : '';
    return { pitch, primary, cleanup, coldCrash, condition };
}

function buildProfileSummaryRows(steps, t) {
    const p = computeProfilePhases(steps, t);
    const row = (lbl, val) =>
        `<div class="summary-row"><span class="label">${lbl}</span><span class="value">${val}</span></div>`;
    let html = row(t.pitch, p.pitch);
    if (steps.length > 1) html += row(t.primary, p.primary);
    if (steps.length > 2) html += row(t.cleanup, p.cleanup);
    if (steps.length >= 6) {
        html += row(t.coldCrash, p.coldCrash);
        html += row(t.condition, p.condition);
    }
    return html;
}

// ==========================================
// --- AUTOMAGISK GENERATOR FÖR PROFILER ---
// ==========================================

function generateHardwareProfilesHTML(yeastName) {
    // 1. Leta upp alla profiler i databasen som tillhör den valda jästen
    const profiles = yeastDatabase.yeasts.filter(y => y.s === yeastName);
    
    // Om jästen saknar hårdvaruprofiler (eller vi klickat på en Custom Profile), visa inget
    if (!profiles || profiles.length === 0) return '';

    let html = `<h4 style="color: var(--accent-color); margin-top: 25px; margin-bottom: 10px;">Included Hardware Profiles:</h4>`;

    // 2. Loopa igenom varje profil vi hittade
    profiles.forEach((profile, index) => {
        const startTemp = profile.steps[0][1]; // Hämtar tempen från det allra första steget
        
        // --- Bygg "dragspelsknappen" ---
        html += `
            <button class="hw-profile-btn" onclick="toggleHwProfile('${yeastName.replace(/\s+/g, '')}-${index}', this)">
                <strong>${profile.p}</strong> 
                <span style="color: #888; font-size: 0.85em;">(Starts @ ${startTemp}°C)</span>
            </button>
        `;

        // --- Bygg den utfällbara Summary-rutan ---
        const uniqueId = `hw-profile-summary-${yeastName.replace(/\s+/g, '')}-${index}`;
        html += `<div class="hw-profile-summary" id="${uniqueId}">`;
        html += `<div class="summary-header">PROFILE SUMMARY</div>`;
        
        const steps = profile.steps;
        const _lang = window.currentLang || 'en';
        const _pT = window.translations?.[_lang]?.profiler || {};
        const t = {
            pitch:     _pT.pitch      || 'Pitch',
            primary:   _pT.primary    || 'Primary',
            cleanup:   _pT.cleanup    || 'Cleanup',
            coldCrash: _pT.cold_crash || 'Cold Crash',
            condition: _pT.condition  || 'Condition',
            day:       _pT.day        || 'Day',
            hold:      _pT.hold_until || 'Hold until Day',
            rise:      _pT.rise_to    || 'Rise to',
            drop:      _pT.drop_to    || 'Drop to',
            reach:     _pT.reach      || 'Reach',
            by:        _pT.by_day     || 'by Day'
        };
        html += buildProfileSummaryRows(steps, t);
        
        html += `</div>`; // Stäng summary-boxen
    });

    return html;
}

// ==========================================
// --- AUTOMAGISK GENERATOR FÖR PROFILER ---
// ==========================================
window.toggleHwProfile = function(uniqueId, btnElement) {
    const summaryBox = document.getElementById(uniqueId);
    
    // Stäng alla andra öppna rutor först (för snyggare UX)
    document.querySelectorAll('.hw-profile-summary').forEach(box => {
        if (box.id !== uniqueId) box.classList.remove('open');
    });
    document.querySelectorAll('.hw-profile-btn').forEach(btn => {
        if (btn !== btnElement) btn.classList.remove('active');
    });

    // Öppna/stäng den klickade rutan
    const isNowOpen = summaryBox.classList.toggle('open');
    btnElement.classList.toggle('active');

    // --- NYTT: Mer aggressiv Autoscroll! ---
    if (isNowOpen) {
        // Vi ökar marginalen till 250ms för att garantera att animationen är 100% klar
        setTimeout(() => {
            // Genom att använda 'center' tvingar vi webbläsaren att flytta rutan, 
            // oavsett om toppen redan är synlig eller inte.
            summaryBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 250);
    }
};

// =======================================================
// --- LOAD TEMPLATE INTO PROFILER (VÄG 1) ---
// =======================================================
window.loadProfileIntoLab = function(strainName, profileName, customName = null) {
    // 1. Stäng informationsrutan om den är öppen
    if (typeof closeYeastModal === 'function') closeYeastModal();

    // 2. Hitta rätt profil att ladda (antingen i databasen eller lokalt)
    let profileToLoad = null;
    let isCustom = false;

    if (customName) {
        const savedProfiles = JSON.parse(localStorage.getItem('customYeastProfiles') || '[]');
        profileToLoad = savedProfiles.find(p => p.s === customName);
        isCustom = true;
    } else if (typeof yeastDatabase !== 'undefined' && yeastDatabase.yeasts) {
        profileToLoad = yeastDatabase.yeasts.find(p => p.s === strainName && p.p === profileName);
    }

    if (!profileToLoad) {
        console.error("Kunde inte hitta profilen att ladda!");
        return;
    }

    // =========================================================
    // 3. Fyll i fälten i Labbet (Skottsäker Dropdown-logik!)
    // =========================================================
    const dropdown = document.getElementById('custom-base-yeast');
    if (dropdown) {
        let baseVal = isCustom ? profileToLoad.p.replace('Custom (', '').replace(')', '') : strainName;
        
        // A) Försök sätta värdet direkt (Exakt matchning)
        dropdown.value = baseVal;
        
        // B) Om det misslyckas (värdet är tomt), gör en smart sökning
        if (dropdown.value === "") {
            for (let i = 0; i < dropdown.options.length; i++) {
                if (dropdown.options[i].text.toLowerCase().includes(baseVal.toLowerCase()) || 
                    dropdown.options[i].value.toLowerCase().includes(baseVal.toLowerCase())) {
                    dropdown.value = dropdown.options[i].value;
                    break;
                }
            }
        }
        
        // C) Om den fortfarande är tom, tvinga in den så vi inte kraschar vyn!
        if (dropdown.value === "") {
            const newOpt = new Option(baseVal, baseVal);
            dropdown.add(newOpt);
            dropdown.value = baseVal;
        }

        // Nu när vi VET att ett värde är satt, triggar vi eventet som visar grafen!
        dropdown.dispatchEvent(new Event('change'));
    }

    const nameInput = document.getElementById('custom-profile-name');
    if (nameInput) {
        nameInput.value = isCustom ? customName : profileName;
    }

    // Intern hjälpfunktion för C/F-konvertering
    function toCurrentUnit(valC) {
        return (typeof currentTempUnit !== 'undefined' && currentTempUnit === 'F') ? (valC * 9/5) + 32 : valC;
    }

// 4. Ladda in temperatur-punkterna i grafen
    const s = profileToLoad.steps.sort((a, b) => a[0] - b[0]);

    if (s && s.length >= 5) {
        // --- SKAPA EN HELT NY ARRAY I MINNET ---
        profilePoints = [
            { x: s[0][0], y: toCurrentUnit(parseFloat(s[0][1])) },
            { x: s[1][0], y: toCurrentUnit(parseFloat(s[1][1])) },
            { x: s[2][0], y: toCurrentUnit(parseFloat(s[2][1])) },
            { x: s[3][0], y: toCurrentUnit(parseFloat(s[3][1])) },
            { x: s[4][0], y: toCurrentUnit(parseFloat(s[4][1])) }
        ];
        
        // Fyll på med sjätte punkten (eller säkerhetsmarginal)
        if (s[5]) {
            profilePoints.push({ x: s[5][0], y: toCurrentUnit(parseFloat(s[5][1])) });
        } else {
            profilePoints.push({ x: s[4][0] + 2, y: toCurrentUnit(parseFloat(s[4][1])) });
        }
    }

    // =========================================================
    // 5. Ladda in larm / händelser (Humle & Dumpning)
    // =========================================================
    if (typeof dryHopData !== 'undefined') dryHopData.enabled = false;
    if (typeof removeHopData !== 'undefined') removeHopData.enabled = false;
    if (typeof rackDumpData !== 'undefined') rackDumpData.enabled = false;

    if (profileToLoad.dryHopDay) {
        dryHopData.enabled = true;
        dryHopData.day = parseFloat(profileToLoad.dryHopDay);
    }
    if (profileToLoad.removeHopDay) {
        removeHopData.enabled = true;
        removeHopData.day = parseFloat(profileToLoad.removeHopDay);
    }
    if (profileToLoad.rackDumpDay) {
        rackDumpData.enabled = true;
        rackDumpData.day = parseFloat(profileToLoad.rackDumpDay);
    }

    // =========================================================
    // 6. Uppdatera gränssnittet (Graf + Knappar)
    // =========================================================
    if (typeof updateSummaryText === 'function') updateSummaryText();

    if (typeof labChart !== 'undefined' && labChart !== null) {
        // --- TVINGA GRAFEN ATT SLÄPPA DET GAMLA MINNET ---
        labChart.data.datasets[0].data = profilePoints;
        
        // Anpassa X-axeln till den nya profilen
        const lastPointX = profilePoints[profilePoints.length - 1].x;
        labChart.options.scales.x.max = Math.max(16, lastPointX + 1);
        
        labChart.update('none');
    }

    // Tvinga knapparna att ritas upp korrekt
    if (typeof toggleDryHopLine === 'function' && dryHopData.enabled) {
        dryHopData.enabled = false;
        toggleDryHopLine();
    }
    if (typeof toggleRemoveHopsLine === 'function' && removeHopData.enabled) {
        removeHopData.enabled = false;
        toggleRemoveHopsLine();
    }
    if (typeof toggleRackDumpLine === 'function' && rackDumpData.enabled) {
        rackDumpData.enabled = false;
        toggleRackDumpLine();
    }

    // =========================================================
    // 7. Byt vy och hoppa över till Lab-skärmen!
    // =========================================================
    if (typeof showView === 'function') showView('lab');
    
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    const labIcon = document.querySelector('.nav-item[onclick*="lab"]');
    if (labIcon) labIcon.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
};

function openYeastModal(yeast) {
    const modal = document.getElementById('yeast-info-modal');
    const modalTitle = document.getElementById('modal-yeast-name');
    const modalDesc = document.getElementById('modal-yeast-desc');

    if (!modal || !modalTitle || !modalDesc) return;

    modalTitle.innerText = yeast.name;
    let detailedText = "";
   
    // ====================================================================
    // 1. KOLLA OM DET ÄR EN EGEN PROFIL FRÅN PROFILER
    // ====================================================================
    if (yeast.isCustom) {
        const savedProfiles = JSON.parse(localStorage.getItem('customYeastProfiles') || '[]');
        const profileData = savedProfiles.find(p => p.s === yeast.name);

        if (profileData) {
            const s = profileData.steps;
            const baseYeast = profileData.p.replace('Custom (', '').replace(')', '');
            
      const d0 = s[0] ? s[0][0] : 0, t0 = s[0] ? parseFloat(s[0][1]) : 0;
            const d1 = s[1] ? s[1][0] : 0, t1 = s[1] ? parseFloat(s[1][1]) : 0;
            const d2 = s[2] ? s[2][0] : 0, t2 = s[2] ? parseFloat(s[2][1]) : 0;
            const d3 = s[3] ? s[3][0] : 0, t3 = s[3] ? parseFloat(s[3][1]) : 0;
            const d4 = s[4] ? s[4][0] : 0, t4 = s[4] ? parseFloat(s[4][1]) : 0;
            const d5 = s[5] ? s[5][0] : 0, t5 = s[5] ? parseFloat(s[5][1]) : 0; // In med sjätte punkten!

            // --- HÄMTA ÖVERSÄTTNINGAR FÖR MODALEN ---
            const lang = window.currentLang || 'en';
            const tProf = window.translations?.[lang]?.profiler || window.translations?.['en']?.profiler || {};
            const tLab = window.translations?.[lang]?.lab || window.translations?.['en']?.lab || {};
            
            const txtCreatedBy = tProf.created_by_you || "Created by you!";
            const txtBasedOn = tProf.used_with || "This profile is used with";
            const txtAndSteps = tProf.profile_steps_are || "and these are the profile steps:";
            const txtStartAt = tProf.start_at || "Start at";
            const txtFreeRise = tProf.free_rise_to || "Free rise to";
            const labelContact = tProf.dry_hop_contact || "Dry Hop Contact";
            const labelDays = tProf.days_plural || "days";
            
            const t_pitch = tProf.pitch || "Pitch";
            const t_prim = tProf.primary || "Primary";
            const t_clean = tProf.cleanup || "Cleanup";
            const t_crash = tProf.cold_crash || "Cold Crash";
            const t_cond = tProf.condition || "Condition";
            const t_hold = tProf.hold_until || "Hold until Day";
            const t_reach = tProf.reach || "Reach";
            const t_by = tProf.by_day || "by Day";
            const t_drop = tProf.drop_to || "Drop to";
            const t_day_word = tLab.day || "Day";

            const pitchTemp = t0.toFixed(1);
            const _ph = computeProfilePhases(
                [[d0, t0], [d1, t1], [d2, t2], [d3, t3], [d4, t4], [d5, t5]],
                { hold: t_hold, rise: txtFreeRise, drop: t_drop, reach: t_reach, by: t_by, day: t_day_word }
            );
            const primaryText = _ph.primary;
            const cleanupText = _ph.cleanup;
            const crashText   = _ph.coldCrash;
            const condText    = _ph.condition;

            // Skapa humle-texten
            let dryHopHTML = "";
            if (profileData.dryHopDay) {
                if (profileData.removeHopDay) {
                    const duration = (profileData.removeHopDay - profileData.dryHopDay).toFixed(1);
                    dryHopHTML = `<p style="margin: 0 0 8px 0; color: #8CC63F; font-size: 1.05em;"><strong>${labelContact}:</strong> ${t_day_word} ${profileData.dryHopDay} — ${t_day_word} ${profileData.removeHopDay} <strong style="color: #fff; font-size: 0.95em;">(${duration} ${labelDays})</strong></p>`;
                } else {
                    const labelSch = tLab.schedule_hop || "Dry Hop scheduled on Day";
                    dryHopHTML = `<p style="margin: 0 0 8px 0; color: #8CC63F; font-size: 1.05em;"><strong>${labelSch} ${profileData.dryHopDay}</strong></p>`;
                }
            }

            // Bygg ihop hela den nya lådan
            detailedText = `
                <div style="line-height: 1.6;">
                    <p style="color: var(--accent-color); font-weight: 800; margin-bottom: 15px;">${txtCreatedBy}</p>
                    <p>${txtBasedOn} <strong>${baseYeast}</strong> ${txtAndSteps}</p>
             <ul style="list-style: none; padding: 0; margin-top: 15px; display: flex; flex-direction: column; gap: 8px;">
                        <li><strong style="color: #fff;">${t_pitch}:</strong> ${txtStartAt} ${pitchTemp}°C.</li>
                        <li><strong style="color: #fff;">${t_prim}:</strong> ${primaryText}.</li>
                        <li><strong style="color: #fff;">${t_clean}:</strong> ${cleanupText}.</li>
                        <li><strong style="color: #fff;">${t_crash}:</strong> ${crashText}.</li>
                        <li><strong style="color: #fff;">${t_cond}:</strong> ${condText}.</li>
                    </ul>
                    
                    <div style="margin-top: 20px; padding-top: 15px; border-top: 1px dashed #333;">
                        ${dryHopHTML}
                        ${profileData.rackDumpDay ? `<p style="margin: 0; color: #F2994A; font-size: 1.05em;"><strong>${tLab.schedule_dump || 'Rack / Dump scheduled on Day'} ${profileData.rackDumpDay}</strong></p>` : ''}
                    </div>
                </div>
            `;
        } else {
            detailedText = `<p>Custom profile data not found.</p>`;
        }
    }

    // ====================================================================
    // 2. KOLLA OM DET ÄR DIN EGEN HUSJÄST (House Bank)
    // ====================================================================
    else if (yeast.isHouseStrain) {
        let displayDate = "Unknown";
        if (yeast.captureDate) {
            const dateObj = new Date(yeast.captureDate);
            displayDate = dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
        }

        detailedText = `
            <div style="line-height: 1.6;">
                <h4 style="color: var(--accent-color); margin-top: 0; margin-bottom: 10px; font-size: 1rem; text-transform: uppercase; font-weight: 800; letter-spacing: 1px;">House Bank Strain 🦠</h4>
                <div style="background: rgba(128,128,128,0.08); border: 1px solid rgba(128,128,128,0.3); padding: 15px; border-radius: 8px; margin-bottom: 20px;">

                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <span style="color: var(--text-dim); font-size: 0.8rem; text-transform: uppercase; font-weight: bold;">Captured</span>
                        <span style="color: var(--text-main); font-weight: bold;">${displayDate}</span>
                    </div>

                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <span style="color: var(--text-dim); font-size: 0.8rem; text-transform: uppercase; font-weight: bold;">Origin / Source</span>
                        <span style="color: var(--text-main); font-weight: bold;">${yeast.origin}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <span style="color: var(--text-dim); font-size: 0.8rem; text-transform: uppercase; font-weight: bold;">Temp Range</span>
                        <span style="color: var(--text-main); font-weight: bold;">${yeast.temp}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <span style="color: var(--text-dim); font-size: 0.8rem; text-transform: uppercase; font-weight: bold;">Tags</span>
                        <span style="color: var(--accent-color); font-weight: bold; text-align: right;">${yeast.tags.join(', ')}</span>
                    </div>
                </div>
                <h4 style="color: var(--text-dim); margin-bottom: 5px; font-size: 0.8rem; text-transform: uppercase; font-weight: bold;">Lab Notes</h4>
                <p style="color: var(--text-dim); font-size: 0.95rem; background: var(--oled-bg); padding: 15px; border-radius: 8px; border: 1px solid rgba(128,128,128,0.3);">${yeast.desc}</p>
            </div>
        `;
    }
    // ====================================================================
    // 3. VANLIG KOMMERSIELL JÄST FRÅN DATABASEN
    // ====================================================================
    else {
        // 1. Gå ut till "anslagstavlan" (window) och hämta rätt språk-mapp
        const langDict = window.yeastDescriptions[window.currentLang] || window.yeastDescriptions['en'];
        
        // 2. Plocka rätt jäst ur den mappen
        detailedText = langDict[yeast.id] || langDict[yeast.name];
        
        if (!detailedText) {
            // Om texten mot förmodan saknas, visa en fallback
            detailedText = `<p>${yeast.desc}</p><h3 style="margin-top:20px; color: #fff;">Passar till:</h3><p>${yeast.styles}</p>`;
        }

        const targetStrainName = hwStrainNames[yeast.id];
        if (targetStrainName && typeof yeastDatabase !== 'undefined' && yeastDatabase.yeasts) {
            const matchingProfiles = yeastDatabase.yeasts.filter(p => p.s === targetStrainName);
            if (matchingProfiles.length > 0) {
                
                // --- HÄMTA ÖVERSÄTTNINGARNA FÖR MODALEN ---
                const lang = window.currentLang || 'en';
                const libT = window.translations?.[lang]?.library || window.translations?.['en']?.library || {};
                const profT = window.translations?.[lang]?.profiler || window.translations?.['en']?.profiler || {};

                // Titlar & Knappar (De nya vi la till i i18n)
                const t_included = libT.included_profiles || "INCLUDED HARDWARE PROFILES:";
                const t_edit_btn = libT.btn_edit_profiler || "EDIT IN PROFILER";

                // Tabell-termer
                const t_summary = profT.summary || "PROFILE SUMMARY";
                const t_pitch   = profT.pitch || "Pitch";
                const t_prim    = profT.primary || "Primary";
                const t_clean   = profT.cleanup || "Cleanup";
                const t_crash   = profT.cold_crash || "Cold Crash";
                const t_cond    = profT.condition || "Condition";

                const t_day     = profT.day || "Day";
                const t_hold    = profT.hold_until || "Hold until Day";
                const t_rise    = profT.rise_to || "Rise to";
                const t_drop    = profT.drop_to || "Drop to";
                const t_reach   = profT.reach || "Reach";
                const t_by      = profT.by_day || "by Day";
                // ------------------------------------------

                let profileListHtml = `<div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;"><h4 style="color: var(--accent-color); margin-bottom: 15px; font-size: 1rem; text-transform: uppercase; font-weight: 800; letter-spacing: 1px;">${t_included}</h4>`;
                
            matchingProfiles.forEach((prof, index) => {
                    const startTemp = prof.steps[0][1];
                    const uniqueId = `hw-profile-summary-${yeast.id}-${index}`; 
                    const steps = prof.steps;
                    
                    profileListHtml += `<button class="hw-profile-btn" onclick="toggleHwProfile('${uniqueId}', this)"><strong>${prof.p}</strong><span style="color: #888; font-size: 0.85em;">(Starts @ ${startTemp.toFixed(1)}°C)</span></button>`;
                    profileListHtml += `<div class="hw-profile-summary" id="${uniqueId}"><div class="summary-header">${t_summary}</div>`;
                    
                    profileListHtml += buildProfileSummaryRows(steps, {
                        pitch: t_pitch, primary: t_prim, cleanup: t_clean,
                        coldCrash: t_crash, condition: t_cond,
                        day: t_day, hold: t_hold, rise: t_rise, drop: t_drop, reach: t_reach, by: t_by
                    });
                    
                    // Knappen längst ner!
                    profileListHtml += `<button class="btn-secondary" style="width: 100%; margin-top: 15px; border-color: var(--accent-color); color: var(--accent-color);" onclick="loadProfileIntoLab('${targetStrainName}', '${prof.p}')">✏️ ${t_edit_btn}</button>`;
                    profileListHtml += `</div>`; 
                });
                
                profileListHtml += `</div>`; 
                detailedText += profileListHtml; 
            }
        }
    }

    if (typeof formatTempText === 'function') {
        modalDesc.innerHTML = formatTempText(detailedText);
    } else {
        modalDesc.innerHTML = detailedText;
    }

    // --- STYR KNAPPARNA FÖR EDIT OCH DELETE ---
    const editBtn = document.getElementById('modal-edit-btn');
    const deleteBtn = document.getElementById('modal-delete-btn');
    const lang = window.currentLang || 'en';
    const libT = window.translations?.[lang]?.library || window.translations?.['en']?.library || {};
    
    if (yeast.isHouseStrain) {
        if(editBtn) { 
            editBtn.style.display = 'block'; 
            editBtn.innerText = libT.btn_edit_profiler || "EDIT PROFILE";
            editBtn.onclick = (e) => { 
                e.preventDefault();
                if(typeof closeYeastModal === 'function') closeYeastModal(); 
                if(typeof openAddStrainModal === 'function') openAddStrainModal(yeast); 
            }; 
        }
        if(deleteBtn) { 
            deleteBtn.style.display = 'block'; 
            deleteBtn.onclick = () => { 
                if(typeof deleteHouseStrain === 'function') deleteHouseStrain(yeast.id); 
                if(typeof closeYeastModal === 'function') closeYeastModal(); 
            }; 
        }
    } else if (yeast.isCustom) {
        // --- HÄR ÄR DEN NYA EDIT-KNAPPEN FÖR CUSTOM PROFILER ---
        if(editBtn) {
            editBtn.style.display = 'block'; 
            editBtn.innerText = libT.btn_edit_profiler || "EDIT PROFILE"; // Sätt översatt text
            editBtn.onclick = (e) => { 
                e.preventDefault();
                startEditingProfile(yeast.name); 
            };
        }
        if(deleteBtn) { 
            deleteBtn.style.display = 'block'; 
            deleteBtn.onclick = () => { 
                if(typeof deleteCustomProfile === 'function') deleteCustomProfile(yeast.name); 
                if(typeof closeYeastModal === 'function') closeYeastModal(); 
            }; 
        }
    } else {
        if(editBtn) editBtn.style.display = 'none';
        if(deleteBtn) deleteBtn.style.display = 'none';
    }

  
   // 1. Öppna modalen
    modal.style.display = 'flex';

    // 2. SPÄRRA BAKGRUNDEN (Den moderna, säkra metoden)
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    modal.style.overscrollBehavior = 'none'; // Magisk rad som hindrar iOS från att "blöda" scrollen vidare

    // 3. --- HISSEN UPP TILL HÖGSTA VÅNINGEN ---
    setTimeout(() => {
        modal.scrollTop = 0;
        modalDesc.scrollTop = 0;
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) modalContent.scrollTop = 0;
    }, 20);
}


function closeYeastModal() {
    const modal = document.getElementById('yeast-info-modal');
    if (modal) modal.style.display = "none";
    
    // FRIGÖR BAKGRUNDEN IGEN
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
}

// Stäng vid klick utanför rutan (på den suddiga bakgrunden)
const yeastModalOverlay = document.getElementById('yeast-info-modal');
if (yeastModalOverlay) {
    yeastModalOverlay.addEventListener('click', function(event) {
        if (event.target === this) {
            closeYeastModal();
        }
    });
}

// Stäng vid klick utanför rutan
document.getElementById('yeast-info-modal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeYeastModal();
    }
});


// --- FUNKTION FÖR ATT RADERA EN PROFIL ---
function deleteCustomProfile(profileName) {
    if (!confirm("Are you sure you want to delete this profile? It cannot be undone.")) return;

    // 1. Hämta de sparade profilerna från enhetens minne
    let savedProfiles = JSON.parse(localStorage.getItem('customYeastProfiles') || '[]');
    
    // 2. Filtrera bort den profil vi vill radera
    savedProfiles = savedProfiles.filter(p => p.s !== profileName);
    
    // Spara tillbaka den uppdaterade listan till minnet
    localStorage.setItem('customYeastProfiles', JSON.stringify(savedProfiles));

    // --- NYTT: Berätta för molnet att profilen är raderad! ---
    pushLibraryToCloud();
    // ---------------------------------------------------------

    // 3. Ta bort den från den visuella biblioteks-listan (yeastStrains)
    // Vi återskapar ID:t exakt så som det genererades när profilen sparades
    const customId = "custom-" + profileName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const strainIndex = yeastStrains.findIndex(y => y.id === customId);
    if (strainIndex > -1) {
        yeastStrains.splice(strainIndex, 1);
    }

    // 4. (Bonus) Om profilen råkade vara vald för synkning, avmarkera den
    const selectedIndex = selectedStrains.indexOf(customId);
    if (selectedIndex > -1) {
        selectedStrains.splice(selectedIndex, 1);
        const favCount = document.getElementById('fav-count');
        if (favCount) favCount.innerText = selectedStrains.length;
    }

    console.log("Profile deleted from local storage:", profileName);

    // 5. Stäng modalen om den är öppen
    const modal = document.getElementById('yeast-info-modal');
    if (modal) modal.style.display = 'none';

    // 6. Rita om hela biblioteket direkt (korten försvinner framför ögonen)
    const searchBox = document.getElementById('yeast-search');
    renderYeastLibrary(searchBox ? searchBox.value : "");

    // 7. Dubbelkolla att vi är på rätt flik och att ikonen lyser
    showView('library');
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    const libIcon = document.querySelector('.nav-item[onclick*="library"]');
    if (libIcon) libIcon.classList.add('active');
}

// ==========================================
// --- TOGGLE FÖR PROFILER INFO ---
// ==========================================
function toggleProfilerInfo(btn) {
    const infoBox = document.getElementById('profiler-info-box');
    
    if (infoBox.style.display === 'none' || infoBox.style.display === '') {
        // ÖPPEN: Helt fylld, solid klargrön!
        infoBox.style.display = 'block';
        btn.style.backgroundColor = '#8CC63F'; // 100% grön bakgrund
        btn.style.borderColor = '#8CC63F';
        btn.style.color = '#111111'; // Mörkt 'i' för maximal kontrast mot det gröna
    } else {
        // STÄNGD: Dämpad och transparent
        infoBox.style.display = 'none';
        btn.style.backgroundColor = 'rgba(140, 198, 63, 0.15)'; // Dimmig bakgrund
        btn.style.borderColor = '#8CC63F';
        btn.style.color = '#8CC63F'; // Grönt 'i'
    }
}

// ==========================================
// --- TOGGLE FÖR SLURRY INFO (PITCH CALC) ---
// ==========================================
window.toggleSlurryInfo = function(btn) {
    const infoBox = document.getElementById('slurry-info-box'); 
    
    if (infoBox.style.display === 'none' || infoBox.style.display === '') {
        // ÖPPEN
        infoBox.style.display = 'block';
        btn.style.backgroundColor = 'var(--accent-color)';
        btn.style.color = '#000'; 
    } else {
        // STÄNGD
        infoBox.style.display = 'none';
        btn.style.backgroundColor = 'transparent'; 
        btn.style.color = 'var(--accent-color)'; 
    }
};

function resetProfiler() {
    // 1. Töm textfältet för profilens namn
    const nameInput = document.getElementById('custom-profile-name');
    if (nameInput) nameInput.value = '';

    // 2. Återställ rullistan för basjäst till default (tom)
    const yeastSelect = document.getElementById('custom-base-yeast');
    if (yeastSelect) {
        yeastSelect.value = '';
        
        // Triggers din befintliga kod för att rensa grafen
        yeastSelect.dispatchEvent(new Event('change'));
    }

  // 3. Nollställ "Profile Summary"-rutan (men behåll rubriken!)
    const summaryBox = document.getElementById('profile-summary');
    if (summaryBox) {
        summaryBox.innerHTML = `
            <div class="summary-header" data-i18n="profiler.summary">PROFILE SUMMARY</div>
            <div style="padding: 10px 0; color: #666; font-size: 0.85rem; font-style: italic; text-align: center;" data-i18n="profiler.pick_yeast">Pick a base yeast...</div>
        `;
        // Tvinga appen att översätta den nya HTML-koden vi just la in
        if (typeof updateTexts === 'function') updateTexts();
    }
}

window.saveProfileToLibrary = function() {
    try {
        let rawName = document.getElementById('custom-profile-name').value.trim().toUpperCase();
        const profileName = rawName !== "" ? rawName : "CUSTOM_1";
        
        let baseYeast = document.getElementById('custom-base-yeast').value;
        if(baseYeast === "") baseYeast = "Unknown Base";

        // Säker C/F-konvertering (kraschar inte om currentTempUnit saknas)
        function toCelsius(val) {
            const isFahrenheit = (typeof currentTempUnit !== 'undefined' && currentTempUnit === 'F');
            return isFahrenheit ? (val - 32) * 5/9 : val;
        }

        // Säkerhetsspärr: Har vi ens några grafpunkter?
        if (typeof profilePoints === 'undefined' || profilePoints.length < 5) {
            alert("Kunde inte spara: Grafens data (profilePoints) saknas i minnet!");
            return;
        }

        const profileData = {
            s: profileName,             
            p: `Custom (${baseYeast})`, 
            dryHopDay: (typeof dryHopData !== 'undefined' && dryHopData.enabled) ? parseFloat(dryHopData.day) : null, 
            removeHopDay: (typeof removeHopData !== 'undefined' && removeHopData.enabled) ? parseFloat(removeHopData.day) : null,
            rackDumpDay: (typeof rackDumpData !== 'undefined' && rackDumpData.enabled) ? parseFloat(rackDumpData.day) : null,
            steps: [
                [parseFloat(profilePoints[0].x), parseFloat(toCelsius(profilePoints[0].y).toFixed(1))],
                [parseFloat(profilePoints[1].x), parseFloat(toCelsius(profilePoints[1].y).toFixed(1))],
                [parseFloat(profilePoints[2].x), parseFloat(toCelsius(profilePoints[2].y).toFixed(1))],
                [parseFloat(profilePoints[3].x), parseFloat(toCelsius(profilePoints[3].y).toFixed(1))],
                [parseFloat(profilePoints[4].x), parseFloat(toCelsius(profilePoints[4].y).toFixed(1))],
                [parseFloat(profilePoints[5].x), parseFloat(toCelsius(profilePoints[5].y).toFixed(1))] // <--- NY RAD HÄR!
            ]
        };

        // 1. Hämta tidigare sparade profiler
        let savedProfiles = JSON.parse(localStorage.getItem('customYeastProfiles') || '[]');

        // 2. Skottsäker check för edit-läget (Kollar både globalt och lokalt)
        if (typeof window.editingProfileName !== 'undefined' && window.editingProfileName) {
            const index = savedProfiles.findIndex(p => p.s === window.editingProfileName);
            if (index > -1) savedProfiles[index] = profileData;
            else savedProfiles.push(profileData);
            window.editingProfileName = null; // Nollställ när vi är klara
        } 
        else if (typeof editingProfileName !== 'undefined' && editingProfileName) {
            const index = savedProfiles.findIndex(p => p.s === editingProfileName);
            if (index > -1) savedProfiles[index] = profileData;
            else savedProfiles.push(profileData);
            editingProfileName = null; // Nollställ när vi är klara
        } 
        else {
            // Helt ny profil
            savedProfiles.push(profileData);
        }

        // Spara i webbläsaren
        localStorage.setItem('customYeastProfiles', JSON.stringify(savedProfiles));

        // Skicka till molnet
        if (typeof pushLibraryToCloud === 'function') pushLibraryToCloud();

        // 3. Magisk Knapp-animation
        const btn = document.getElementById('btn-save-profile');
        if (!btn) return; // Krascha inte om knappen inte hittas
        
        const originalText = btn.innerText;
        const lang = window.currentLang || 'en';
        const tLab = window.translations?.[lang]?.lab || {};
        btn.innerText = tLab.btn_saved_success || "SAVED! ✓";

        btn.style.backgroundColor = "#b142ff"; 
        btn.style.borderColor = "#b142ff";
        btn.style.color = "#fff";

        // 4. Byt vy snyggt
        setTimeout(() => {
            if (typeof loadCustomProfiles === 'function') loadCustomProfiles();
            if (typeof showView === 'function') showView('library');
            
            document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
            const libIcon = document.querySelector('.nav-item[onclick*="library"]');
            if (libIcon) libIcon.classList.add('active');
            
            btn.innerText = originalText;
            btn.style.backgroundColor = ""; 
            btn.style.borderColor = "";
            btn.style.color = "";

            if (typeof resetProfiler === 'function') resetProfiler();

            setTimeout(() => {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }, 100);

        }, 1200);

    } catch (error) {
        // Om NÅGOT går fel, fånga det och meddela direkt på skärmen!
        console.error("Krasch i saveProfileToLibrary:", error);
        alert("Aj då! Något gick snett när profilen skulle sparas:\n\n" + error.message);
    }
};

// ==========================================
// --- ÖPPNA/STÄNG PITCH CALCULATOR MODAL ---
// ==========================================

function openPitchCalcModal() {
    const modal = document.getElementById('pitch-calc-modal');
    if (modal) {
        modal.style.display = 'flex'; 
    }
    
    document.getElementById('main-calc-buttons').style.display = 'grid'; 

    document.getElementById('selected-yeast-header').style.display = 'none';
    document.getElementById('bank-sub-options').style.display = 'none';
    document.getElementById('calc-input-section').style.display = 'none';
    document.getElementById('calc-result-box').style.display = 'none';
    
    const allButtons = document.querySelectorAll('.ym-btn-outline');
    allButtons.forEach(btn => {
        btn.style.backgroundColor = ''; 
        btn.style.color = '';           
    });
}

function closePitchCalcModal() {
    const modal = document.getElementById('pitch-calc-modal');
    modal.style.display = 'none';
}

window.addEventListener('click', function(event) {
    const modal = document.getElementById('pitch-calc-modal');
    if (event.target === modal) {
        closePitchCalcModal();
    }
});

// ==========================================
// --- PITCH CALCULATOR LOGIK ---
// ==========================================

let currentCalcType = '';

let currentBankMethod = 'loop'; // Standardvalet

window.setBankMethod = function(method, btnElement) {
    currentBankMethod = method;
    
    // Återställ färgerna på båda knapparna
    document.querySelectorAll('.bank-method-btn').forEach(b => {
        b.style.backgroundColor = 'transparent';
        b.style.color = 'var(--accent-color)';
    });
    
    // Gör den klickade knappen aktiv (ifyllt grön)
    btnElement.style.backgroundColor = 'var(--accent-color)';
    btnElement.style.color = '#000';
    
    // Räkna om direkt!
    calculatePitch();
};

function selectCalc(type, clickedBtn) {
    currentCalcType = type;
    document.getElementById('main-calc-buttons').style.display = 'none';
    const header = document.getElementById('selected-yeast-header');
    document.getElementById('selected-yeast-text').innerText = clickedBtn.innerText;
    header.style.display = 'flex';

    const subOptions = document.getElementById('bank-sub-options');
    if (subOptions) {
        subOptions.style.display = 'none';
    }

    document.getElementById('calc-input-section').style.display = 'block';
    document.getElementById('calc-result-box').style.display = 'none';

    const dynamicSection = document.getElementById('dynamic-extra-fields');
    dynamicSection.innerHTML = ''; 

    if (type === 'dry') {
        dynamicSection.innerHTML = `
            <div class="ym-input-group" style="margin-bottom: 20px;">
                <label data-i18n="calc.cells_per_gram">Cells per gram (Billions)</label>
                <input type="number" id="calc-dry-density" value="10" step="1">
            </div>
        `;
    } 
    else if (type === 'liquid') {
        const today = new Date().toISOString().split('T')[0];
        dynamicSection.innerHTML = `
            <div id="liquid-packs-container">
                <div class="liquid-pack-row yeast-package-box">
                    <div class="ym-input-group">
                        <label data-i18n="calc.cells_in_pack">Cells per pack</label>
                        <input type="number" class="calc-liquid-pack" value="100" step="10">
                    </div>
                    <div class="ym-input-group">
                        <label data-i18n="calc.mfg_date">Manufacturing date</label>
                        <input type="date" class="calc-liquid-date" value="${today}">
                    </div>
                    <button onclick="removeLiquidPack(this)" class="remove-pack-btn">&times;</button>
                </div>
            </div>
            <button onclick="addLiquidPack()" data-i18n="calc.add_package">+ Add another package</button>
        `;
    }
    else if (type === 'slurry') {
        const today = new Date().toISOString().split('T')[0];
        dynamicSection.innerHTML = `
            <div class="ym-input-group" style="margin-bottom: 15px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                    <label style="margin: 0;" data-i18n="calc.slurry_density">Slurry Density (Thickness)</label>
                    <button onclick="toggleSlurryInfo(this)" style="background: transparent; border: 1px solid var(--accent-color); color: var(--accent-color); border-radius: 50%; width: 22px; height: 22px; font-size: 12px; font-weight: bold; line-height: 1; cursor: pointer; display: flex; justify-content: center; align-items: center; padding: 0; transition: all 0.2s;">?</button>
                </div>
                
                <select id="calc-slurry-density" style="width: 100%; background: #222; border: 1px solid #444; color: #fff; padding: 10px; border-radius: 6px; font-family: 'Lexend'; font-size: 1em; outline: none;">
                    <option value="1.0" data-i18n="calc.slurry_thin">Thin (~1.0 B cells/mL)</option>
                    <option value="2.0" selected data-i18n="calc.slurry_med">Medium (~2.0 B cells/mL)</option>
                    <option value="3.0" data-i18n="calc.slurry_thick">Thick (~3.0 B cells/mL)</option>
                </select>

                <div id="slurry-info-box" style="display: none; margin-top: 12px; background: #111; border: 1px dashed #444; padding: 15px; border-radius: 8px; font-size: 0.85rem; line-height: 1.5; color: #aaa;">
                    <strong style="color: var(--accent-color);" data-i18n="calc.slurry_info_thin">💧 Thin (Watery):</strong><br>
                    <span data-i18n="calc.slurry_info_thin_desc">Looks like dirty dishwater. Sloshes easily. Happens when not settled enough.</span><br><br>
                    
                    <strong style="color: var(--accent-color);" data-i18n="calc.slurry_info_med">🥞 Medium (Pancake Batter):</strong><br>
                    <span data-i18n="calc.slurry_info_med_desc">Opaque, creamy, pours slowly. The standard after washing and cold crashing.</span><br><br>
                    
                    <strong style="color: var(--accent-color);" data-i18n="calc.slurry_info_thick">🧱 Thick (Clay/Putty):</strong><br>
                    <span data-i18n="calc.slurry_info_thick_desc">Hard to pour, needs a spoon. Very compacted yeast from the bottom of a conical tank.</span><br><br>
                    
                    <span style="color: #ffcc00; font-size: 0.9em;"><em data-i18n="calc.slurry_info_tip">Pro-tip: If unsure, choose "Thin". Pitching slightly more slurry is safer than underpitching!</em></span>
                </div>
            </div>

            <div class="ym-input-group" style="margin-bottom: 20px;">
                <label data-i18n="calc.harvest_date">Harvest Date</label>
                <input type="date" id="calc-slurry-date" value="${today}" style="width: 100%; background: #222; border: 1px solid #444; color: #fff; padding: 10px; border-radius: 6px; font-family: 'Lexend'; font-size: 1em; outline: none;">
            </div>
        `;
    }
    else if (type === 'bank') {
        currentBankMethod = 'loop'; 
        
        dynamicSection.innerHTML = `
            <div class="ym-input-group" style="margin-bottom: 20px;">
                <label style="margin-bottom: 10px; display: block; color: var(--accent-color); font-weight: 800; letter-spacing: 1px; font-size: 0.8rem; text-transform: uppercase;" data-i18n="calc.inoculation">Inoculation Method</label>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <button onclick="setBankMethod('loop', this)" class="bank-method-btn" style="background: var(--accent-color); color: #000; border: 1px solid var(--accent-color); padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: bold; cursor: pointer; transition: all 0.2s;" data-i18n="calc.btn_loop">
                        Single Loop
                    </button>
                    <button onclick="setBankMethod('slant', this)" class="bank-method-btn" style="background: transparent; color: var(--accent-color); border: 1px solid var(--accent-color); padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: bold; cursor: pointer; transition: all 0.2s;" data-i18n="calc.btn_wash">
                        Whole Slant Wash
                    </button>
                </div>
            </div>
        `;
    }

    // MAGIN: Anropet som faktiskt körs oavsett vilken flik vi är på!
    applyTranslations();
}

function resetCalcSelection() {
    currentCalcType = '';
    
    document.getElementById('main-calc-buttons').style.display = 'grid';
    
    document.getElementById('selected-yeast-header').style.display = 'none';
    document.getElementById('bank-sub-options').style.display = 'none';
    document.getElementById('calc-input-section').style.display = 'none';
    document.getElementById('calc-result-box').style.display = 'none';

    const mainButtons = document.querySelectorAll('#main-calc-buttons .ym-btn-outline');
    mainButtons.forEach(btn => btn.classList.remove('active'));
}

function addLiquidPack() {
    const container = document.getElementById('liquid-packs-container');
    const today = new Date().toISOString().split('T')[0];
    
    const newPack = document.createElement('div');
    newPack.className = 'liquid-pack-row yeast-package-box';
    
    newPack.innerHTML = `
        <div class="ym-input-group">
            <label data-i18n="calc.cells_in_pack">Cells per pack</label>
            <input type="number" class="calc-liquid-pack" value="100" step="10">
        </div>
        <div class="ym-input-group">
            <label data-i18n="calc.mfg_date">Manufacturing date</label>
            <input type="date" class="calc-liquid-date" value="${today}">
        </div>
        <button onclick="removeLiquidPack(this)" class="remove-pack-btn">&times;</button>
    `;
    
    container.appendChild(newPack);
    // VIKTIGT: Kör översättaren här också!
    applyTranslations();
}

function removeLiquidPack(btn) {
    const row = btn.closest('.liquid-pack-row');
    row.remove();
}

function calculatePitch() {
    const volLiters = parseFloat(document.getElementById('calc-vol').value);
    const ogSG = parseFloat(document.getElementById('calc-og').value);
    const pitchRate = parseFloat(document.getElementById('calc-rate').value);

    const plato = 259 - (259 / ogSG);
    const totalCellsMillion = pitchRate * (volLiters * 1000) * plato;
    const totalCellsBillion = totalCellsMillion / 1000;

    let resultHTML = `<strong style="color: #fff;">Target:</strong> ${totalCellsBillion.toFixed(1)} Billion cells<br><br>`;

    if (currentCalcType === 'dry') {
        const cellsPerGram = parseFloat(document.getElementById('calc-dry-density').value);
        const gramsNeeded = totalCellsBillion / cellsPerGram;
        const packetsNeeded = Math.ceil(gramsNeeded / 11); 

        resultHTML += `
            <span style="font-size: 1.2em; color: #fff;">
                ⚖️ Pitch <strong>${gramsNeeded.toFixed(1)} grams</strong> of dry yeast.
            </span><br>
            <span style="color: #aaa; font-size: 0.9em;">(Approx. ${packetsNeeded} standard 11g packets)</span>
        `;
    }
    
    else if (currentCalcType === 'liquid') {
        const packInputs = document.querySelectorAll('.calc-liquid-pack');
        const dateInputs = document.querySelectorAll('.calc-liquid-date');
        
        let totalViableCells = 0;
        let packDetailsHTML = '';
        const todayDate = new Date();

        for(let i = 0; i < packInputs.length; i++) {
            const cells = parseFloat(packInputs[i].value);
            const mfgDateInput = dateInputs[i].value;
            
            if (!mfgDateInput) continue; 
            
            const mfgDate = new Date(mfgDateInput);
            const timeDiff = todayDate.getTime() - mfgDate.getTime();
            let daysOld = Math.floor(timeDiff / (1000 * 3600 * 24));
            if (daysOld < 0) daysOld = 0;
            
            let viability = 100 - (daysOld * 0.7);
            if (viability < 10) viability = 10; 
            
            const viable = cells * (viability / 100);
            totalViableCells += viable;
            
            packDetailsHTML += `<div style="font-size: 0.85em; color: #aaa; margin-bottom: 4px;">Pack ${i+1} (${daysOld} days old): ${viability.toFixed(0)}% viability = <strong>${viable.toFixed(1)}B cells</strong></div>`;
        }

        const shortfall = totalCellsBillion - totalViableCells;

        resultHTML += `
            <div style="background: rgba(0,0,0,0.25); padding: 12px; border-radius: 6px; border: 1px solid #444; margin-bottom: 15px;">
                <strong style="color: #8CC63F; font-size: 1.1em;">Combined Viable Cells: ${totalViableCells.toFixed(1)} Billion</strong><br>
                <div style="margin-top: 8px; border-top: 1px dashed #444; padding-top: 8px;">
                    ${packDetailsHTML}
                </div>
            </div>
        `;

        if (totalViableCells >= totalCellsBillion) {
            resultHTML += `<span style="color: #8CC63F; font-size: 1.1em;">✅ <strong>Pitch is perfect!</strong> You have enough healthy cells.</span>`;
        } else {
            const starterLiters = shortfall / 100;
            
            resultHTML += `
                <span style="color: #ffcc00; font-size: 1.1em;">⚠️ <strong>Warning:</strong> You are short ${shortfall.toFixed(1)}B cells.</span><br><br>
                <strong style="color: var(--text-main);">Recommendation:</strong><br>
                <div style="margin-top: 8px; border-left: 2px solid #8CC63F; padding-left: 10px; line-height: 1.5; margin-bottom: 20px;">
                    <span style="color: var(--text-dim);">Option A:</span> <span style="color: var(--text-main);">Add another pack to your inventory above to cover the gap.</span><br>
                    <span style="color: var(--text-dim);">Option B:</span> <span style="color: var(--text-main);">Make a <strong>${starterLiters.toFixed(2)} Liter starter</strong> (at SG 1.036 - 1.040) on a stir plate to grow the missing cells.</span>
                </div>
                
                <button onclick="closePitchCalcModal(); openAcademyModule('starters');" class="ym-btn-outline" style="width: 100%;">
                    📖 Read: How to make a Yeast Starter
                </button>
            `;
        }
    }

else if (currentCalcType === 'slurry') {
        // Hämta värdena från Slurry-fälten vi just skapade
        const density = parseFloat(document.getElementById('calc-slurry-density').value) || 2.0;
        const harvestDateInput = document.getElementById('calc-slurry-date').value;

        let viability = 100;
        let daysOld = 0;

        // Räkna ut ålder och hur många som överlevt
        if (harvestDateInput) {
            const harvestDate = new Date(harvestDateInput);
            const todayDate = new Date();
            const timeDiff = todayDate.getTime() - harvestDate.getTime();
            daysOld = Math.floor(timeDiff / (1000 * 3600 * 24));
            if (daysOld < 0) daysOld = 0;

            // Slurry tappar livskraft i kylen (räknar på 0.7% per dag)
            viability = 100 - (daysOld * 0.7);
            if (viability < 10) viability = 10; // Vi låter den aldrig gå under 10%
        }

        // Kärn-matten: Hur många levande celler finns det per milliliter?
        const viableCellsPerMl = density * (viability / 100);
        
        // Volym (mL) = Totalt antal celler som behövs / Levande celler per mL
        const mlNeeded = totalCellsBillion / viableCellsPerMl;

        resultHTML += `
            <div style="background: rgba(0,0,0,0.25); padding: 12px; border-radius: 6px; border: 1px solid #444; margin-bottom: 15px;">
                <span style="color: #aaa; font-size: 0.85em;">Slurry Age: ${daysOld} days (${viability.toFixed(0)}% viability)</span><br>
                <span style="color: #aaa; font-size: 0.85em;">Viable Cells: ${viableCellsPerMl.toFixed(1)} Billion / mL</span><br>
                <hr style="border: 0; border-top: 1px dashed #444; margin: 10px 0;">
                <span style="color: #fff; font-size: 1em;">🧪 Measure and pitch:</span><br>
                <strong style="color: var(--accent-color); font-size: 1.4em;">${mlNeeded.toFixed(0)} mL slurry</strong>
            </div>
        `;
        
        // Varning om man behöver orimligt mycket slurry (över 1.5 liter)
        if (mlNeeded > 1500) {
            resultHTML += `
                <div style="margin-top: 10px; border-left: 2px solid #ffcc00; padding-left: 10px; font-size: 0.85em; color: #ccc;">
                    <span style="color: #ffcc00;">⚠️ High Volume:</span> You need a massive amount of slurry because it's either very old or very thin. Consider making a starter instead!
                </div>
            `;
        }
    }

    else if (currentCalcType === 'bank') {
        // En magnetomrörare ger ungefär 150 miljarder celler per Liter starter.
        // Vi räknar ut hur stor den ABSOLUT SISTA startern måste vara:
        let finalStepVolLiters = totalCellsBillion / 150;
        if (finalStepVolLiters < 0.5) finalStepVolLiters = 0.5; // Vi gör aldrig mindre än 0.5L som sista steg
        
        let scheduleHTML = '';
        
        if (currentBankMethod === 'loop') {
            scheduleHTML += `
                <div style="margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px dashed #444;">
                    <span style="color: #aaa; font-size: 0.85em; font-weight: bold;">Step 1 (Test Tube):</span><br>
                    <strong style="color: #fff;">15 mL</strong> sterile wort (1.036 SG)<br>
                    <span style="font-size: 0.85em; color: #888;">Inoculate loop. Incubate 24-48h until cloudy.</span>
                </div>
                <div style="margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px dashed #444;">
                    <span style="color: #aaa; font-size: 0.85em; font-weight: bold;">Step 2 (Small Flask):</span><br>
                    <strong style="color: #fff;">150 mL</strong> sterile wort (1.036 SG)<br>
                    <span style="font-size: 0.85em; color: #888;">Pitch Step 1. Stir plate for 24-48h.</span>
                </div>
            `;
        } else {
            // Slant Wash hoppar över det första extremt lilla steget
            scheduleHTML += `
                <div style="margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px dashed #444;">
                    <span style="color: #aaa; font-size: 0.85em; font-weight: bold;">Step 1 (Small Flask):</span><br>
                    <strong style="color: #fff;">150 mL</strong> sterile wort (1.036 SG)<br>
                    <span style="font-size: 0.85em; color: #888;">Wash slant and pitch. Stir plate for 24-48h.</span>
                </div>
            `;
        }
        
        // Final step (Räknas ut dynamiskt baserat på target pitch!)
        scheduleHTML += `
            <div>
                <span style="color: #aaa; font-size: 0.85em; font-weight: bold;">Final Step (Large Flask):</span><br>
                <strong style="color: var(--accent-color); font-size: 1.4em;">${finalStepVolLiters.toFixed(2)} Liters</strong> <span style="color: #fff;">wort (1.036 SG)</span><br>
                <span style="font-size: 0.9em; color: #8CC63F; font-weight: bold;">Pitch previous step. Stir plate 24-48h. Ready!</span>
            </div>
        `;

        resultHTML += `
            <div style="background: rgba(0,0,0,0.25); padding: 15px; border-radius: 8px; border: 1px solid #444; margin-bottom: 15px;">
                <strong style="color: var(--accent-color); font-size: 1.1em; display: block; margin-bottom: 15px; text-transform: uppercase;">Step-Up Schedule:</strong>
                ${scheduleHTML}
            </div>
            <div style="font-size: 0.8em; color: #666; text-align: center;">
                <em>Assuming 10x volume step-ups and the use of a magnetic stir plate.</em>
            </div>
        `;
    }

    const resultBox = document.getElementById('calc-result-box');
    const resultText = document.getElementById('calc-result-text');
    resultText.innerHTML = resultHTML;
    resultBox.style.display = 'block';
}

// ==========================================
// --- FULLSCREEN LANDSCAPE CHART ---
// ==========================================
let isChartFullscreen = false;

function toggleLandscapeChart() {
    const btn = document.getElementById('btn-fullscreen');
    // MAGIN: Vi plockar ut BARA graf-sektionen, inte hela appen!
    const chartSection = document.querySelector('#view-lab .chart-section'); 
    
    if (!document.fullscreenElement) {
        // 1. Sätt ENBART sektionen i Fullscreen
        if (chartSection.requestFullscreen) {
            chartSection.requestFullscreen().then(() => {
                if (screen.orientation && screen.orientation.lock) {
                    screen.orientation.lock('landscape').catch(e => console.log("Lås stöds ej."));
                }
            }).catch(err => console.log(err));
        }
        
        // Lägg till vår flagga
        chartSection.classList.add('is-fullscreen');
        if (btn) btn.innerHTML = '✖ CLOSE';
        isChartFullscreen = true;

    } else {
        // 2. Gå ur Fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        if (screen.orientation && screen.orientation.unlock) {
            screen.orientation.unlock();
        }
        
        chartSection.classList.remove('is-fullscreen');
        if (btn) btn.innerHTML = '⤢ FULLSCREEN';
        isChartFullscreen = false;
    }
    
    // 3. Återskapa grafen med rätt Y-axelläge för det nya läget
    setTimeout(() => {
        if (typeof initLabChart === 'function') initLabChart();
        if (!isChartFullscreen) {
            const chartArea = document.getElementById('chart-scroll-area');
            const yaxisSidebar = document.getElementById('lab-yaxis-sidebar');
            if (yaxisSidebar && chartArea && parseFloat(chartArea.style.opacity || '0') > 0) {
                yaxisSidebar.style.display = '';
                requestAnimationFrame(() => {
                    yaxisSidebar.style.opacity = '1';
                    if (typeof labYAxisChart !== 'undefined' && labYAxisChart) labYAxisChart.resize();
                });
            }
        }
    }, 300);
}

// Säkerhetsnätet om man trycker på mobilens inbyggda bakåt-knapp
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && isChartFullscreen) {
        const chartSection = document.querySelector('#view-lab .chart-section');
        if (chartSection) chartSection.classList.remove('is-fullscreen');

        const btn = document.getElementById('btn-fullscreen');
        if (btn) btn.innerHTML = '⤢ FULLSCREEN';
        if (screen.orientation && screen.orientation.unlock) screen.orientation.unlock();
        isChartFullscreen = false;

        setTimeout(() => {
            if (typeof initLabChart === 'function') initLabChart();
            const chartArea = document.getElementById('chart-scroll-area');
            const yaxisSidebar = document.getElementById('lab-yaxis-sidebar');
            if (yaxisSidebar && chartArea && parseFloat(chartArea.style.opacity || '0') > 0) {
                yaxisSidebar.style.display = '';
                requestAnimationFrame(() => {
                    yaxisSidebar.style.opacity = '1';
                    if (typeof labYAxisChart !== 'undefined' && labYAxisChart) labYAxisChart.resize();
                });
            }
        }, 300);
    }
});
