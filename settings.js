// ==========================================
// --- SETTINGS.JS — Device, Push & Support ---
// ==========================================
// Kräver: auth.js (getAuthHeaders), app.js (globala variabler)

// 1. Fyll rullistan med användarens enheter (Skottsäker version)
async function populateSyncDevices(uid) {
    const dropdown = document.getElementById('sync-target-device');
    if (!dropdown) return; 

    // Säkerhetskoll
    if (!uid) {
        dropdown.innerHTML = '<option value="">Log in to see devices</option>';
        return;
    }

    try {
        // Försöker hämta dina riktiga enheter
        const res = await fetch(`${API_BASE}/my-devices`, { headers: await getAuthHeaders() });
        
        if (!res.ok) throw new Error("Servern svarade inte med 200 OK");
        
        const devices = await res.json();

        window.allFetchedDevices = devices; // Spara listan globalt
        
        // Om vi redan vet vilken enhet som är vald, uppdatera statusen direkt!
        if (typeof activeDeviceId !== 'undefined' && activeDeviceId) {
            const activeDeviceData = devices.find(d => d.device_id === activeDeviceId);
            if (activeDeviceData) {
                window.currentDeviceData = activeDeviceData;
                if (typeof updateHeartbeatDisplay === 'function') {
                    updateHeartbeatDisplay(activeDeviceData.lastSeen);
                }
            }
        }

        dropdown.innerHTML = ""; 
        
        if (devices.length === 0) {
            // Om API:et svarar men du inte har kopplat någon enhet, lägg in testkylen ändå!
            const testOption = document.createElement('option');
            testOption.value = "TEST:MAC:12:34:56";
            testOption.textContent = "Demokyl 1 (TEST:MAC:12:34:56)";
            dropdown.appendChild(testOption);
            return;
        }

        devices.forEach(dev => {
            const option = document.createElement('option');
            option.value = dev.device_id;
            option.textContent = `${dev.name || 'Namnlös'} (${dev.device_id})`;
            dropdown.appendChild(option);
        });

    } catch (err) {
        console.warn("Kunde inte ladda riktiga enheter, laddar in test-data. Orsak:", err);
        
        // FAKEDATA FÖR ATT TESTA GRÄNSSNITTET NÄR SERVER ÄR NERE:
        dropdown.innerHTML = ""; 
        const testOption = document.createElement('option');
        testOption.value = "TEST:MAC:12:34:56";
        testOption.textContent = "Demokyl 1 (TEST:MAC:12:34:56)";
        dropdown.appendChild(testOption);
    }
}

function formatOledName(fullName) {
    if (!fullName) return "";
    let name = fullName;
    
    // 1. Om det är en "Custom (...)", plocka bara ut det som står inuti parentesen
    if (name.startsWith("Custom (") && name.endsWith(")")) {
        name = name.substring(8, name.length - 1);
    }

    // 2. Tvätta bort prefix
    const prefixes = [
        /Wyeast\s\d+\s/i, /WLP\d+\s/i, /SafAle\s/i, /SafLager\s/i, 
        /Lallemand\s/i, /Imperial\s[A-Z0-9]+\s/i, /Omega\s[A-Z0-9-]+\s/i
    ];
    prefixes.forEach(reg => name = name.replace(reg, ""));

    // 3. Smart förkortning för att rädda plats (t.ex. Scottish -> Scot.)
    name = name.replace(/Scottish/i, "Scot.")
               .replace(/American/i, "Amer.")
               .replace(/California/i, "Cali.")
               .replace(/Belgian/i, "Belg.");

    return name.trim().substring(0, 14); // Max 14 tecken för säkerhets skull
}

// ==========================================
// --- MULTI-DEVICE, NICKNAME & AUTH ---
// ==========================================

// Hjälpfunktioner för "Det Smarta Arkivskåpet" (Nicknames)
function getSavedNickname(deviceId) {
    if (!deviceId) return "MIN YEASTMASTER";
    const nicknames = JSON.parse(localStorage.getItem('yeastmaster-nicknames') || '{}');
    return nicknames[deviceId] || "MIN YEASTMASTER";
}

async function saveNickname(deviceId, name) {
    if (!deviceId) return;
    const nicknames = JSON.parse(localStorage.getItem('yeastmaster-nicknames') || '{}');
    nicknames[deviceId] = name;
    localStorage.setItem('yeastmaster-nicknames', JSON.stringify(nicknames));

    // Synka till molnet så namnet följer med oavsett enhet/webbläsare
    if (auth.currentUser) {
        try {
            const headers = await getAuthHeaders();
            await fetch(`${API_BASE}/device-nickname`, {
                method: 'PATCH',
                headers,
                body: JSON.stringify({ device_id: deviceId, name })
            });
        } catch (e) {
            console.warn('Kunde inte synka smeknamn till molnet:', e);
        }
    }
}


// Lyssna på Namnfältet i Settings
const nickInput = document.getElementById('setting-nickname');
if (nickInput) {
    nickInput.addEventListener('input', (e) => {
        const val = e.target.value.trim() || "MIN YEASTMASTER";
        if (activeDeviceId) {
            saveNickname(activeDeviceId, val);
            updateDashboardNickname(val);
            
            // Uppdatera namnet i rullistan direkt så det ser snyggt ut
            const activeOption = document.querySelector(`#setting-active-device option[value="${activeDeviceId}"]`);
            if(activeOption) activeOption.textContent = val;
        }
    });
}

// Lyssna på Rullistan i Settings
const deviceSelect = document.getElementById('setting-active-device');
if (deviceSelect) {
    deviceSelect.addEventListener('change', (e) => {
        activeDeviceId = e.target.value; 
        
        // Uppdatera Namnfältet
        const currentNick = getSavedNickname(activeDeviceId);
        if (nickInput) nickInput.value = currentNick !== "MIN YEASTMASTER" ? currentNick : "";
        updateDashboardNickname(currentNick);
        
        // --- NYTT: Uppdatera MAC-adressen på skärmen! ---
        const macDisplay = document.getElementById('setting-mac-display');
        if (macDisplay) {
            macDisplay.textContent = activeDeviceId ? activeDeviceId : "--";
        }
        
        // ==========================================
        // --- NYTT: HEARTBEAT (När du byter enhet) ---
        // ==========================================
        // Antag att du har sparat alla dina enheter i en global array när du hämtade dem, 
        // t.ex. window.allFetchedDevices (Kolla vad din array heter i funktionen som hämtar /api/my-devices)
        if (window.allFetchedDevices) {
            const selectedDeviceData = window.allFetchedDevices.find(d => d.device_id === activeDeviceId);
            if (selectedDeviceData) {
                window.currentDeviceData = selectedDeviceData; // Spara för timern
                updateHeartbeatDisplay(selectedDeviceData.lastSeen); // Uppdatera UI direkt!
            }
        }
        
        // Uppdatera Dashboarden
        if (typeof updateDashboard === 'function') updateDashboard();
    });
}

// Uppdaterar status-texten i Settings
function updateDeviceStatusUI(isOnline) {
    const statusSpan = document.getElementById('setting-device-status');
    if (!statusSpan) return;

    if (isOnline) {
        statusSpan.innerText = "CONNECTED";
        statusSpan.style.color = "#8CC63F"; // Grön
    } else {
        statusSpan.innerText = "OFFLINE";
        statusSpan.style.color = "#ff4444"; // Röd
    }
}

// Huvudmotorn: Inloggningsvakten
// auth.onAuthStateChanged — hanteras i auth.js


// ==========================================
// --- DEVICE MANAGEMENT: AUTO-SAVE & DELETE ---
// ==========================================

// 1. Lyssna på när användaren skriver i Nickname-fältet och klickar utanför (change)
document.addEventListener('change', (e) => {
    if (e.target && e.target.id === 'setting-nickname') {
        const newName = e.target.value.trim();
        const activeSelect = document.getElementById('setting-active-device');
        
        if (activeSelect && activeSelect.value) {
            const macAddress = activeSelect.value;
            
            // Spara det nya namnet lokalt i webbläsaren
            localStorage.setItem(`nickname_${macAddress}`, newName);
            
            // Valfritt: Om du har en saveNickname-funktion som skickar till servern, anropa den här:
            // if (typeof saveNickname === 'function') saveNickname(macAddress, newName);
            
            // Ge användaren visuell feedback att det sparats (blinkar vitt till accentfärg)
            e.target.style.color = '#fff';
            setTimeout(() => e.target.style.color = 'var(--accent-color)', 300);
        }
    }
});

// ==========================================
// --- DEVICE MANAGEMENT: REMOVE DEVICE ---
// ==========================================
window.removeActiveDevice = async function() {
    const activeSelect = document.getElementById('setting-active-device');
    if (!activeSelect || !activeSelect.value) {
        alert("Ingen enhet är vald!");
        return;
    }

    const macAddress = activeSelect.value;
    const deviceName = document.getElementById('setting-nickname').value || macAddress;

    // 1. Säkerhetsfråga
    if (!confirm(`Är du helt säker på att du vill ta bort '${deviceName}' (${macAddress})?`)) {
        return;
    }

    // 2. Kolla så vi faktiskt är inloggade
    if (typeof auth === 'undefined' || !auth.currentUser) {
        alert("Du måste vara inloggad för att kunna ta bort en enhet från molnet!");
        return;
    }

    try {
        console.log("Skickar begäran om borttagning till molnet...");

        // 3. Ropa på databasen och invänta svar
        const response = await fetch(`${API_BASE}/remove-device`, {
            method: 'POST',
            headers: await getAuthHeaders(),
            body: JSON.stringify({ device_id: macAddress })
        });

        // 4. Utvärdera svaret från servern
        if (response.ok) {
            console.log("Servern bekräftade borttagningen!");
            
            // Städa bort lokalt skräp i webbläsaren
            localStorage.removeItem(`nickname_${macAddress}`);
            let mockDevices = JSON.parse(localStorage.getItem('mock-devices') || '[]');
            mockDevices = mockDevices.filter(d => d.device_id !== macAddress);
            localStorage.setItem('mock-devices', JSON.stringify(mockDevices));

            alert("Enheten är nu borttagen!");
            location.reload(); // NU är det säkert att ladda om sidan
        } else {
            // Om API:et inte finns eller strular
            alert(`Kunde inte ta bort enheten från molnet. (Felkod: ${response.status})`);
        }

    } catch (err) {
        console.error("Nätverksfel vid borttagning:", err);
        alert("Nätverksfel! Kunde inte nå servern för att ta bort enheten.");
    }
};

// En hjälpfunktion för att konvertera VAPID-nycklar (standardkrav för Push API)
function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

// Funktionen som triggas när du klickar på "Aktivera Larm"
async function subscribeToPushNotifications() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        try {
            // 1. Kolla om användaren är inloggad först
            const user = auth.currentUser;
            if (!user) {
                alert("You must be logged in to enable notifications.");
                return;
            }

            // 2. Fråga användaren om lov
            const permission = await Notification.requestPermission();
            
            if (permission === 'granted') {
                const registration = await navigator.serviceWorker.ready;

                // 3. Din VAPID-nyckel
                const publicVapidKey = 'BDyiHE0Oi9dtL5fr3zYc_b0_WCDurbyKHTEMsJOTZbVnMnvlJRJiZCxtXZjAmyIrzPx9W1RNTdcUnU60VZvCX9w';
                const convertedVapidKey = urlBase64ToUint8Array(publicVapidKey);

                // 4. Hämta den unika adressen (subscription) för denna enhet
                const subscription = await registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: convertedVapidKey
                });

                console.log('Push Subscription created!', subscription);

                // 5. Skicka till servern (Nu med korrekt user.uid)
                const response = await fetch(`${API_BASE}/subscribe`, {
                    method: 'POST',
                    headers: await getAuthHeaders(),
                    body: JSON.stringify({ sub: subscription })
                });

                if (response.ok) {
                    alert("Notifications enabled successfully! 🍻");
                } else {
                    console.error("Server responded with an error");
                    alert("Failed to save subscription on server.");
                }

            } else {
                alert('Please allow notifications in your browser settings to receive alerts.');
            }
        } catch (error) {
            console.error('Kunde inte prenumerera:', error);
            alert("An error occurred while setting up notifications.");
        }
    } else {
        alert('Push notifications are not supported by this browser.');
    }
}

async function unsubscribeFromPushNotifications() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        try {
            const user = auth.currentUser;
            if (!user) return; // Användaren måste vara inloggad

            const registration = await navigator.serviceWorker.ready;
            // Hämta den nuvarande prenumerationen
            const subscription = await registration.pushManager.getSubscription();

            if (subscription) {
                // 1. Säg åt webbläsaren att sluta lyssna
                const successful = await subscription.unsubscribe();
                
                if (successful) {
                    console.log('Unsubscribed from push notifications in browser.');

                    // 2. Säg åt servern att ta bort denna enhet från databasen
                    const response = await fetch(`${API_BASE}/unsubscribe`, {
                        method: 'POST',
                        headers: await getAuthHeaders()
                    });

                    if (response.ok) {
                        console.log("Subscription removed from server.");
                    }
                }
            }
        } catch (error) {
            console.error('Ett fel uppstod vid avregistrering:', error);
        }
    }
}

// ==========================================
// --- KVITTERA BANNERN ---
// ==========================================
// ==========================================
// --- KVITTERA BANNERN OCH TYSTA SERVER ---
// ==========================================
async function dismissBannerAlert() {
    alertDismissedByUser = true; 
    
    // Spara lokalt vilken typ av larm vi precis klickade bort
    const dismissedAlertType = window.currentActiveAlertString || "UNKNOWN";
    localStorage.setItem('ym_dismissed_alert', dismissedAlertType); 
    localStorage.removeItem('ym_active_alert'); 
    
    const banner = document.getElementById('top-banner-alert');
    if (banner) {
        banner.style.display = 'none';
    }

    // --- NYTT: Skicka kvittens till Render-servern ---
    if (typeof activeDeviceId !== 'undefined' && activeDeviceId) {
        try {
            console.log(`Skickar kvittens för ${dismissedAlertType} till servern...`);
            const response = await fetch(`${API_BASE}/dismiss-alert`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    device_id: activeDeviceId,
                    alert_type: dismissedAlertType
                })
            });

            if (response.ok) {
                console.log("Servern mottog kvittensen. Push-notiser för detta larm pausas.");
            } else {
                console.warn("Servern svarade, men kunde inte registrera kvittensen.");
            }
        } catch (error) {
            console.error("Kunde inte nå servern för att kvittera larmet:", error);
        }
    }
}

async function togglePushNotifications(checkboxElement) {
    if (checkboxElement.checked) {
        // Användaren drog switchen till PÅ
        console.log("Aktiverar notiser...");
        
        // Din befintliga funktion! (Vi kan lägga till await om du vill)
        await subscribeToPushNotifications();
        
        // UX-TIPS: Om användaren tryckte "Blockera" i webbläsarens popup, 
        // borde vi dra tillbaka switchen till "AV" här. 
        if (Notification.permission !== 'granted') {
             checkboxElement.checked = false;
        }

    } else {
        // Användaren drog switchen till AV
        console.log("Avaktiverar notiser...");
        await unsubscribeFromPushNotifications();
    }
}

// --- KOLLAR OM LARM-SWITCHEN SKA VARA PÅ ELLER AV NÄR SIDAN LADDAS ---
async function checkPushStatusOnLoad() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        try {
            // Vänta på att service workern är redo
            const registration = await navigator.serviceWorker.ready;
            // Fråga webbläsaren om denna enhet prenumererar just nu
            const subscription = await registration.pushManager.getSubscription();
            
            // Hitta din snygga switch i HTML
            const pushToggle = document.getElementById('pushToggle');
            
            // Om switchen finns på skärmen just nu, uppdatera den!
            if (pushToggle) {
                if (subscription) {
                    // Prenumeration finns! Dra switchen till PÅ
                    pushToggle.checked = true;
                } else {
                    // Ingen prenumeration. Låt switchen vara AV
                    pushToggle.checked = false;
                }
            }
        } catch (error) {
            console.error("Kunde inte kolla prenumerationsstatus:", error);
        }
    }
}

// ==========================================
// --- STÄDA SETTINGS-VYN VID UTLOGGNING ---
// ==========================================
function clearDeviceSettingsUI() {
    const statusEl = document.getElementById('setting-device-status');
    const nickEl = document.getElementById('setting-nickname');
    const macEl = document.getElementById('setting-mac-display');
    const activeDeviceSelect = document.getElementById('setting-active-device');
    
    // De nya elementen
    const pushToggle = document.getElementById('pushToggle');
    const removeRow = document.getElementById('row-remove-device');

    if (statusEl) {
        statusEl.innerText = "WAITING...";
        statusEl.style.color = "#888"; 
    }
    if (nickEl) nickEl.value = "";
    if (macEl) macEl.innerText = "--";
    if (activeDeviceSelect) activeDeviceSelect.innerHTML = '<option value="">Log in to see devices</option>';
    
    // --- NYTT: Stäng av push och göm papperskorgen ---
    if (pushToggle) pushToggle.checked = false;
    if (removeRow) removeRow.style.display = 'none';
}

// Lyssna efter språkbyten och tvinga dashboarden att uppdateras
window.addEventListener('languageChanged', () => {
    console.log("Språk bytt! Tvingar uppdatering av dashboard...");
    updateDashboard(); 
});

// Lyssna på när språket ändras för att översätta Chart.js-grafen i Profiler
window.addEventListener('languageChanged', () => {
    let xAxisLabel = "Days";
    if (window.currentLang === 'sv') xAxisLabel = "Dagar";
    if (window.currentLang === 'de') xAxisLabel = "Tage";

    if (typeof labChart !== 'undefined' && labChart !== null) {
        if (labChart.options.scales.x.title) {
            labChart.options.scales.x.title.text = xAxisLabel;
        }
        labChart.update('none');
    }

    // Uppdatera den fasta Days-labeln under grafen
    const daysLabel = document.getElementById('lab-days-label');
    if (daysLabel) daysLabel.textContent = xAxisLabel;

    // MAGIN: Tvinga även sammanfattningen (Profile Summary) att direkt översätta sig!
    if (typeof updateSummaryText === 'function') {
        updateSummaryText();
    }
});



// Öppna Support-modalen
function openSupportModal(type) {
    const modal = document.getElementById('support-modal');
    const title = document.getElementById('support-title');
    const subjectField = document.getElementById('support-subject');
    const emailField = document.getElementById('support-email');
    const form = document.getElementById('support-form');
    const successMsg = document.getElementById('support-success');

    // 1. Återställ formen
    form.style.display = 'block';
    successMsg.style.display = 'none';
    form.reset();

    // 2. Hämta inloggad användares mejl (om tillgängligt)
    if (auth.currentUser) {
        emailField.value = auth.currentUser.email;
    }

    // 3. Hämta översättnings-objektet
    const lang = window.currentLang || 'en';
    const t = window.translations?.[lang]?.support || {};

    // 4. Sätt rubrik och ämne dynamiskt
    if (type === 'bug') {
        title.innerText = t.title_bug || "Rapportera Bugg";
        subjectField.value = t.sub_bug || "Bug Report - YeastMaster";
    } else {
        title.innerText = t.title_idea || "Föreslå Idé";
        subjectField.value = t.sub_idea || "Feature Request - YeastMaster";
    }

    // 5. Uppdatera alla data-i18n element i modalen
    // Detta fixar "Din e-post", "Meddelande", knappar osv.
    if (typeof updateTexts === 'function') {
        updateTexts();
    }

    // 6. Lås bakgrunden och visa modalen
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    modal.style.display = 'flex';
}

// Stäng Support-modalen
function closeSupportModal() {
    const modal = document.getElementById('support-modal');
    modal.style.display = 'none';
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
}

// Skicka meddelandet via Formspree
async function sendSupportMessage(event) {
    event.preventDefault();
    const btn = document.getElementById('btn-send-support');
    const form = document.getElementById('support-form');
    const successMsg = document.getElementById('support-success');
    
    // HÄR: Ersätt YOUR_ID med ditt Formspree-ID sen
    const formspreeUrl = "https://formspree.io/f/xvzyzpqj"; 

    btn.disabled = true;
    btn.innerText = "...";

    try {
        const formData = new FormData(form);
        const response = await fetch(formspreeUrl, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            form.style.display = 'none';
            successMsg.style.display = 'block';
            // Stäng automatiskt efter 3 sekunder
            setTimeout(closeSupportModal, 3000);
        } else {
            alert("Hoppsan! Något gick fel. Försök igen senare.");
        }
    } catch (error) {
        alert("Kunde inte skicka. Kontrollera din internetanslutning.");
    } finally {
        btn.disabled = false;
        btn.innerText = "Skicka meddelande";
    }
}

// --- BONUS: Klicka utanför för att stänga ---
document.getElementById('support-modal').addEventListener('click', function(e) {
    if (e.target === this) closeSupportModal();
});

function toggleSettingsDetails() {
    const container = document.getElementById('settings-details-container');
    const arrow = document.getElementById('settings-arrow');
    
    if (!container) return;
    
    const isOpen = container.classList.toggle('open');
    
    // Rotera den lilla pilen snyggt
    if (arrow) {
        arrow.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    }
}

// --- VÄCKARKLOCKAN: Hämta ny data direkt när appen öppnas på mobilen ---
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        console.log("Appen vaknade! Hämtar färsk data från YeastMaster...");
        
        // 1. Tvinga dashboarden att hämta de absolut senaste loggarna direkt
        if (typeof updateDashboard === 'function') {
            updateDashboard();
        }
        
        // 2. Om du är inne på inställningssidan, trigga en direktkoll av heartbeat
        if (typeof currentActiveView !== 'undefined' && currentActiveView === 'settings') {
            if (typeof checkPushStatusOnLoad === 'function') {
                checkPushStatusOnLoad();
            }
        }
    }
});
