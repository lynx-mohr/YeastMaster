// ==========================================
// --- YEAST LIBRARY TOUR (PREMIUM VERSION) ---
// ==========================================
let currentLibStep = -1;
let libTourSteps = [];
window.isLibraryTourActive = false; 

// --- 1. PREMIUM FRYS-FUNKTIONER (Inget hopp åt höger!) ---
function lockTourScroll(e) { e.preventDefault(); }
function lockTourKeys(e) {
    // Hindra scrollning med piltangenter och mellanslag
    if(['Space', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown'].includes(e.code)) {
        e.preventDefault();
    }
}

function disableAllScrolling() {
    // Vi gömmer INTE scroll-listen (så inget hoppar åt höger), 
    // men vi blockerar alla fysiska försök att scrolla!
    window.addEventListener('wheel', lockTourScroll, { passive: false });
    window.addEventListener('touchmove', lockTourScroll, { passive: false });
    window.addEventListener('keydown', lockTourKeys, { passive: false });
}

function enableAllScrolling() {
    window.removeEventListener('wheel', lockTourScroll);
    window.removeEventListener('touchmove', lockTourScroll);
    window.removeEventListener('keydown', lockTourKeys);
}
// ---------------------------------------------------------



function createTourMagic() {
    if (document.getElementById('tour-fake-profiler')) return;
    const fake = document.createElement('div');
    fake.id = 'tour-fake-profiler';
    
    // Yttre container som täcker hela skärmen med rätt bakgrundsfärg
    fake.style.cssText = `position:fixed;top:0;left:0;width:100vw;height:100vh;background:#121212;z-index:9999990;display:none;flex-direction:column;align-items:center;padding:40px 20px;box-sizing:border-box;color:white;font-family:'Lexend', sans-serif;`;
    
    // HTML som exakt matchar din riktiga layout
    fake.innerHTML = `
        <div style="width: 100%; max-width: 800px;">
            
            <div style="display: flex; align-items: center; margin-bottom: 25px;">
                <h3 style="color: #fff; margin: 0; font-size: 1.5rem; font-weight: 800;">The Profiler</h3>
                <div style="border: 1px solid #8CC63F; color: #8CC63F; border-radius: 50%; width: 18px; height: 18px; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; margin-left: 10px; font-weight: bold;">i</div>
            </div>

            <div style="display: flex; gap: 15px; margin-bottom: 25px;">
                <div style="flex: 1;">
                    <label style="font-size: 0.65rem; color: #888; font-weight: bold; margin-bottom: 8px; display: block; letter-spacing: 0.5px;">PROFILE NAME</label>
                    <div style="background: #0a0a0a; border: 1px solid #333; color: #555; padding: 12px 15px; border-radius: 6px; font-size: 0.85rem;">US-05 Standard ★</div>
                </div>
                <div style="flex: 1;">
                    <label style="font-size: 0.65rem; color: #888; font-weight: bold; margin-bottom: 8px; display: block; letter-spacing: 0.5px;">PICK STRAIN</label>
                    <div style="background: #0a0a0a; border: 1px solid #333; color: #fff; padding: 12px 15px; border-radius: 6px; font-size: 0.85rem; font-weight: bold; display: flex; justify-content: space-between;">
                        SafAle US-05 <span style="font-size: 0.6rem; color: #666;">▼</span>
                    </div>
                </div>
            </div>

            <div style="background: #111; border: 1px solid #222; border-radius: 8px; padding: 25px; padding-bottom: 80px; position: relative; margin-bottom: 20px;">
                <div style="color: #fff; font-weight: 800; font-size: 0.8rem; margin-bottom: 25px; letter-spacing: 1px;">PROFILE BUILDER</div>

                <div style="width: 100%; height: 260px; position: relative;">
                    <svg width="100%" height="100%" viewBox="0 0 600 260" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stop-color="rgba(140,198,63,0.3)"/>
                                <stop offset="100%" stop-color="rgba(140,198,63,0)"/>
                            </linearGradient>
                        </defs>
                        <path d="M0 160 L180 160 L300 90 L420 90 L600 240" fill="url(#chartGradient)"/>
                        <path d="M0 160 L180 160 L300 90 L420 90 L600 240" fill="none" stroke="#8CC63F" stroke-width="2.5"/>
                        <circle cx="180" cy="160" r="4.5" fill="#8CC63F" stroke="#111" stroke-width="2"/>
                        <circle cx="300" cy="90" r="4.5" fill="#8CC63F" stroke="#111" stroke-width="2"/>
                        <circle cx="420" cy="90" r="4.5" fill="#8CC63F" stroke="#111" stroke-width="2"/>
                    </svg>

                    <div id="fake-hop-line" style="position:absolute;top:0;left:62%;width:1px;height:100%;background:#CCFF00;display:none;box-shadow:0 0 8px rgba(204,255,0,0.8);"></div>
                    <div id="fake-rack-line" style="position:absolute;top:0;left:85%;width:1px;height:100%;background:#FF3300;display:none;box-shadow:0 0 8px rgba(255,51,0,0.8);"></div>
                </div>

                <div style="position: absolute; bottom: -15px; left: 25px; background: #1a1a1a; border: 1px solid #333; border-left: 3px solid #8CC63F; border-radius: 8px; padding: 20px; width: 350px; box-shadow: 0 10px 30px rgba(0,0,0,0.6);">
                    <div style="color: #8CC63F; font-weight: 800; font-size: 0.65rem; margin-bottom: 15px; letter-spacing: 1px;">PROFILE SUMMARY</div>
                    
                    <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 10px; color: #aaa;">
                        <span style="font-weight: 700; color: #eee;">Pitch</span><span style="font-weight: 700; color: #fff;">Day 0 @ 19.0°C</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 10px; color: #aaa;">
                        <span style="font-weight: 700; color: #eee;">Primary</span><span style="font-weight: 700; color: #fff;">Hold until Day 4</span>
                    </div>
                    
                    <div id="fake-hop-text" style="display: none; justify-content: space-between; font-size: 0.75rem; margin-bottom: 10px; color: #CCFF00; font-weight: bold;">
                        <span>Dry Hop</span><span>Reach 22.0°C by Day 5</span>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 10px; color: #aaa;">
                        <span style="font-weight: 700; color: #eee;">Cleanup</span><span style="font-weight: 700; color: #fff;">Reach 22.0°C by Day 6</span>
                    </div>
                    
                    <div id="fake-rack-text" style="display: none; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0; color: #FF3300; font-weight: bold;">
                        <span>Racking</span><span>Drop to 3.0°C by Day 8</span>
                    </div>
                </div>
            </div>

            <div style="display: flex; gap: 15px;">
                <button id="fake-hop-btn" style="flex: 1; background: #0a0a0a; border: 1px solid #222; color: #ccc; padding: 18px; border-radius: 6px; font-weight: bold; font-size: 0.75rem; letter-spacing: 1px; cursor: default;">+ ADD DRY HOPS</button>
                <button style="flex: 1; background: #0a0a0a; border: 1px solid #222; color: #ccc; padding: 18px; border-radius: 6px; font-weight: bold; font-size: 0.75rem; letter-spacing: 1px; cursor: default;">+ RACK / DUMP</button>
            </div>

        </div>
    `;
    document.body.appendChild(fake);
}

const libraryTourSteps = [
    { selector: '.yeast-card:first-child', i18nKey: 'step1' },
    { selector: '.hw-profile-btn',         i18nKey: 'step2' },
    { selector: '.hw-profile-summary',     i18nKey: 'step3' },
    { selector: '.btn-secondary',          i18nKey: 'step4' },
    { selector: '#view-lab',               i18nKey: 'step5' }, // Eller specifik knapp i profileraren
    { selector: '.add-hop-btn-klass',      i18nKey: 'step6' }, // Byt till din faktiska klass/ID
    { selector: '#yeast-grid',             i18nKey: 'step7' },
    { selector: 'button[onclick*="openAddStrainModal"]', i18nKey: 'step8' },
    { selector: '#house-bank-notes',       i18nKey: 'step9' }, // Byt till din faktiska klass/ID
    { selector: '#house-bank-grid',        i18nKey: 'step10' }, // Byt till din faktiska klass/ID
    { selector: 'body',                    i18nKey: 'step11' }
];

window.startLibraryTour = function() {
    window.isLibraryTourActive = true;
    if (typeof disableAllScrolling === 'function') disableAllScrolling(); 

    const lang = window.currentLang || 'en';

    // 1. Kolla om vi har några jästkort
    if (document.querySelectorAll('.yeast-card').length === 0) {
        const alertMsg = window.translations[lang]?.libTour?.noYeast || "Select or add some yeast first to see the tour!";
        alert(alertMsg);
        window.isLibraryTourActive = false;
        if (typeof enableAllScrolling === 'function') enableAllScrolling();
        return;
    }

    // 2. Stäng inforutan
    const infoBox = document.getElementById('library-info-box');
    if (infoBox) infoBox.style.display = 'none';

    const iBtn = document.querySelector('.info-icon');
    if (iBtn) {
        iBtn.style.backgroundColor = 'rgba(140, 198, 63, 0.15)';
        iBtn.style.color = '#8CC63F';
    }

    // 3. Förbered Overlay och Tooltip
    const overlay = document.getElementById('demo-overlay');
    const tooltip = document.getElementById('demo-tour-tooltip');
    if (!overlay || !tooltip) return;

    overlay.style.display = 'block';
    overlay.style.backgroundColor = 'transparent';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.zIndex = '2147483640'; 
    tooltip.style.zIndex = '2147483647'; 
    tooltip.style.width = 'max-content';
    tooltip.style.maxWidth = window.innerWidth <= 768 ? '85vw' : '320px'; 
    tooltip.style.whiteSpace = 'normal';
    tooltip.style.lineHeight = '1.5';    
    tooltip.style.textAlign = 'left';    
    tooltip.style.pointerEvents = 'auto'; 

    // DEN NYA MAGISKA ARRAYEN (Innehåller i18nKey OCH dina actions!)
    window.libTourSteps = [
        { selector: '.yeast-card:first-child', i18nKey: 'step1', action: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); } },
        { selector: '#yeast-info-modal .hw-profile-btn', i18nKey: 'step2', alignLeft: true, action: () => {
            const yeast = yeastStrains.find(y => y.id === 'us-05') || yeastStrains.find(y => !y.isCustom);
            if (yeast) {
                if (typeof openYeastModal === 'function') openYeastModal(yeast); 
                setTimeout(() => { const modal = document.getElementById('yeast-info-modal'); if (modal) modal.scrollTo({ top: 0, behavior: 'instant' }); }, 50);
            }
        }},
        { selector: '#yeast-info-modal .hw-profile-btn', i18nKey: 'step3', alignLeft: true, action: () => {} },
        { selector: '#yeast-info-modal .btn-secondary[onclick*="loadProfileIntoLab"]', i18nKey: 'step4', action: () => {
            const firstProfileBtn = document.querySelector('#yeast-info-modal .hw-profile-btn');
            if (firstProfileBtn && !firstProfileBtn.classList.contains('active')) firstProfileBtn.click(); 
            setTimeout(() => { const targetBtn = document.querySelector('#yeast-info-modal .btn-secondary[onclick*="loadProfileIntoLab"]'); if (targetBtn) targetBtn.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 150);
        }},
  { selector: '#lab-chart', i18nKey: 'step5', action: () => {
            if (typeof closeYeastModal === 'function') closeYeastModal();
            document.body.style.overflow = 'hidden';
            // VIP-PASS FRAMVISAT: (false för pushHistory, true för forceOverride)
            if (typeof showView === 'function') showView('lab', false, true);
            window.scrollTo({ top: 0, behavior: 'instant' });
            setTimeout(() => {
                const yeast = yeastStrains.find(y => y.id === 'us-05');
                if (yeast && typeof loadProfileIntoLab === 'function') {
                    let firstProfileName = "Standard / Low Ester";
                    if (typeof yeastDatabase !== 'undefined' && yeastDatabase.yeasts) {
                        const profiles = yeastDatabase.yeasts.filter(p => p.s === "US-05");
                        if (profiles.length > 0) firstProfileName = profiles[0].p;
                    }
                    loadProfileIntoLab("US-05", firstProfileName);
                    if (typeof labChart !== 'undefined' && labChart !== null) { labChart.resize(); labChart.update('none'); }
                    if (typeof updateSummaryText === 'function') updateSummaryText();
                }
                // Scrolla grafen till mitten så man ser mittdelen av jäsningskurvan
                const chartScrollArea = document.getElementById('chart-scroll-area');
                if (chartScrollArea) chartScrollArea.scrollLeft = (chartScrollArea.scrollWidth - chartScrollArea.clientWidth) / 2;
            }, 300);
        }},
        { selector: '#lab-chart', i18nKey: 'step6', action: () => {
            if (typeof dryHopData !== 'undefined') dryHopData.day = 4.0;
            if (typeof removeHopData !== 'undefined') removeHopData.day = 7.0;
            if (typeof rackDumpData !== 'undefined') rackDumpData.day = 10.0;
            if (typeof dryHopData !== 'undefined' && !dryHopData.enabled && typeof toggleDryHopLine === 'function') toggleDryHopLine();
            if (typeof removeHopData !== 'undefined' && !removeHopData.enabled && typeof toggleRemoveHopsLine === 'function') toggleRemoveHopsLine();
            if (typeof rackDumpData !== 'undefined' && !rackDumpData.enabled && typeof toggleRackDumpLine === 'function') toggleRackDumpLine();
        }},
        { selector: '#tour-fake-custom-card', i18nKey: 'step7', action: () => {
            if (typeof dryHopData !== 'undefined' && dryHopData.enabled && typeof toggleDryHopLine === 'function') toggleDryHopLine();
            if (typeof rackDumpData !== 'undefined' && rackDumpData.enabled && typeof toggleRackDumpLine === 'function') toggleRackDumpLine();
           if (typeof showView === 'function') showView('library', false, true);
            let fakeCard = document.getElementById('tour-fake-custom-card');
            if (!fakeCard) {
                fakeCard = document.createElement('div');
                fakeCard.id = 'tour-fake-custom-card';
                fakeCard.className = 'yeast-card custom-profile'; 
                fakeCard.innerHTML = '<h3>★ US-05 Standard</h3>';
                const grid = document.getElementById('yeast-grid');
                if (grid) grid.appendChild(fakeCard);
            }
            setTimeout(() => { const fakeCardEl = document.getElementById('tour-fake-custom-card'); if (fakeCardEl) fakeCardEl.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 200);
        }},
        { selector: 'button[onclick*="openAddStrainModal"]', i18nKey: 'step8', action: () => {
            const targetBtn = document.querySelector('button[onclick*="openAddStrainModal"]');
            if (targetBtn) targetBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }},
        { selector: '#modal-yeast-name', i18nKey: 'step9', action: () => {
            const fakeHouseStrain = { id: "tour-fake-house-strain", name: "Wild001", origin: "Backyard", captureDate: "2025-04-20", temp: "23", tags: ["Farmhouse", "sour", "House Strain"], desc: "Decent attenuation. Tried to brew with this 2 times.", isHouseStrain: true };
            if (typeof openYeastModal === 'function') openYeastModal(fakeHouseStrain);
        }},
        { selector: '#tour-fake-house-card', i18nKey: 'step10', action: () => {
            if (typeof closeYeastModal === 'function') closeYeastModal();
            let fakeHouseCard = document.getElementById('tour-fake-house-card');
            if (!fakeHouseCard) {
                fakeHouseCard = document.createElement('div');
                fakeHouseCard.id = 'tour-fake-house-card';
                fakeHouseCard.className = 'yeast-card house-strain'; 
                fakeHouseCard.innerHTML = '<h3>Wild001 🦠</h3>';
                const grid = document.getElementById('yeast-grid');
                if (grid) grid.appendChild(fakeHouseCard);
            }
            setTimeout(() => { const fakeHouseCardEl = document.getElementById('tour-fake-house-card'); if (fakeHouseCardEl) fakeHouseCardEl.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 200);
        }},
        { selector: '.library-header h2', i18nKey: 'step11', action: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); } }
    ];
    
    window.currentLibStep = -1;
    overlay.onclick = window.nextLibraryTourStep;
    window.nextLibraryTourStep();
};


window.nextLibraryTourStep = function(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }

    const lang = window.currentLang || 'en';
    window.currentLibStep++;
    const overlay = document.getElementById('demo-overlay');
    const tooltip = document.getElementById('demo-tour-tooltip');

    // Är touren slut?
    if (window.currentLibStep >= window.libTourSteps.length) {
        if(overlay) { overlay.style.display = 'none'; overlay.style.zIndex = ''; }
        if(tooltip) { tooltip.style.display = 'none'; tooltip.style.zIndex = ''; tooltip.style.width = 'auto'; }
        
        // --- STÄDA BORT FEJK-KORTEN ---
        const fakeCard = document.getElementById('tour-fake-custom-card'); if (fakeCard) fakeCard.remove();
        const fakeHouseCard = document.getElementById('tour-fake-house-card'); if (fakeHouseCard) fakeHouseCard.remove();
        
        if (typeof closeYeastModal === 'function') closeYeastModal();
        if (typeof enableAllScrolling === 'function') enableAllScrolling(); 
        window.isLibraryTourActive = false; 
        overlay.onclick = null;
        return;
    }

    const step = window.libTourSteps[window.currentLibStep];

    if (step.action) step.action();
    if (tooltip) tooltip.style.display = 'none';

    let attempts = 0;
    window._tourFindTargetInterval = setInterval(() => {
        attempts++;
        const target = document.querySelector(step.selector);

        if (target && target.offsetHeight > 0) {
            clearInterval(window._tourFindTargetInterval);
            window._tourFindTargetInterval = null;
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });

            window._tourShowTooltipTimeout = setTimeout(() => {
                if (!window.isLibraryTourActive) return;
                tooltip.style.display = 'block';

                let htmlContent = '';
                // HÄMTA ÖVERSÄTTNINGEN!
                const translatedText = window.translations[lang]?.libTour?.[step.i18nKey] || "Text missing";
                
                if (window.currentLibStep < window.libTourSteps.length - 1) {
                    htmlContent += '<div style="padding-right: 20px;">' + translatedText + '</div>';
                    htmlContent += '<span onclick="window.confirmAbortTour(event)" style="position: absolute; top: 6px; right: 8px; color: #ff4444; font-size: 1.1rem; font-weight: bold; cursor: pointer; pointer-events: auto; line-height: 1; transition: 0.2s;">&times;</span>';
                } else {
                    htmlContent += '<div>' + translatedText + '</div>';
                }
                
                const tooltipTextEl = document.getElementById('demo-tour-text');
                if(tooltipTextEl) {
                    tooltipTextEl.innerHTML = htmlContent;
                    tooltipTextEl.style.paddingRight = '0';
                }

                const finalRect = target.getBoundingClientRect();
                let topPos = finalRect.bottom + window.scrollY + (step.offsetY ?? 5);
                let leftPos = step.alignLeft
                    ? (finalRect.left + window.scrollX + 20)
                    : (finalRect.left + window.scrollX + (finalRect.width / 2));

                tooltip.style.top = topPos + 'px';
                tooltip.style.left = leftPos + 'px';

                // Flippa tooltip uppåt om den hamnar utanför skärmens nederkant
                const ttHeight = tooltip.offsetHeight;
                const viewportBottom = window.scrollY + window.innerHeight;
                if (topPos + ttHeight > viewportBottom - 15) {
                    topPos = finalRect.top + window.scrollY - ttHeight - 10;
                    tooltip.style.top = topPos + 'px';
                    tooltip.classList.add('tooltip-flipped');
                } else {
                    tooltip.classList.remove('tooltip-flipped');
                }

                const ttWidth = tooltip.offsetWidth;
                const screenWidth = window.innerWidth;

                if (leftPos + (ttWidth / 2) > screenWidth - 15) tooltip.style.left = (screenWidth - (ttWidth / 2) - 15) + 'px';
                if (leftPos - (ttWidth / 2) < 15) tooltip.style.left = (ttWidth / 2) + 15 + 'px';

                tooltip.style.animation = 'none';
                void tooltip.offsetWidth;
                tooltip.style.animation = 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';

                requestAnimationFrame(() => {
                    positionTooltipArrow(target, tooltip);
                });
            }, 600); 
            
        } else if (attempts > 20) {
            clearInterval(window._tourFindTargetInterval);
            window._tourFindTargetInterval = null;
            console.warn("Tour missed target:", step.selector);
            window.nextLibraryTourStep();
        }
    }, 100);
};

window.confirmAbortTour = function(e) {
    if (e) { e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation(); }
    const lang = window.currentLang || 'en';
    const confirmMsg = window.translations[lang]?.libTour?.exitConfirm || "EXIT TOUR?";
    if (confirm(confirmMsg)) window.abortLibraryTour();
};

window.abortLibraryTour = function(e) {
    if (e) { e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation(); }

    // Stoppa setInterval och setTimeout så tooltip inte re-visas efter abort
    if (window._tourFindTargetInterval) {
        clearInterval(window._tourFindTargetInterval);
        window._tourFindTargetInterval = null;
    }
    if (window._tourShowTooltipTimeout) {
        clearTimeout(window._tourShowTooltipTimeout);
        window._tourShowTooltipTimeout = null;
    }

    // Stäng tour-fönstren och eventuell öppen yeast-modal
    const overlay = document.getElementById('demo-overlay');
    const tooltip = document.getElementById('demo-tour-tooltip');
    if (overlay) { overlay.style.display = 'none'; overlay.onclick = null; }
    if (tooltip) tooltip.style.display = 'none';
    if (typeof closeYeastModal === 'function') closeYeastModal();

    // Städa bort fejk-kort
    const f1 = document.getElementById('tour-fake-custom-card'); if (f1) f1.remove();
    const f2 = document.getElementById('tour-fake-house-card'); if (f2) f2.remove();

    // Återställ scroll (inline-stil från steg 5 + event listeners från startLibraryTour)
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    if (typeof enableAllScrolling === 'function') enableAllScrolling();

    // Markera touren som avslutad
    window.isLibraryTourActive = false;
    window.currentLibStep = 0;

    // Om vi är i Lab-vyn, hoppa tillbaka till biblioteket
    const labView = document.getElementById('view-lab');
    if (labView && labView.style.display === 'block') {
        if (typeof showView === 'function') showView('library');
    }
};

function positionTooltipArrow(target, tooltip) {
    const targetRect = target.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    
    // Mitten av målelementet (absolut på skärmen)
    const targetCenterX = targetRect.left + targetRect.width / 2;
    
    // Pilens position relativt till tooltip-rutan
    const arrowLeft = targetCenterX - tooltipRect.left;
    
    // Klämma värdet så pilen aldrig hamnar utanför tooltip-rutan
    const minLeft = 20;
    const maxLeft = tooltipRect.width - 20;
    const clampedLeft = Math.max(minLeft, Math.min(maxLeft, arrowLeft));
    
    // Applicera på ::after via en CSS-variabel
    tooltip.style.setProperty('--arrow-left', clampedLeft + 'px');
}

// Koppla knappen vid start
document.addEventListener('DOMContentLoaded', () => {
    const tourBtn = document.getElementById('btn-library-tour');
    if (tourBtn) tourBtn.onclick = startLibraryTour;
});