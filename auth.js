// ==========================================
// --- AUTH.JS — Firebase Authentication ---
// ==========================================
// Kräver: Firebase SDK (laddas i index.html innan detta)
// Exponerar globalt: auth, getAuthHeaders

const firebaseConfig = {
    apiKey: "AIzaSyBjxNijHivEY4u4bBIiXCR1hbUBdMxrq0Q",
    authDomain: "yeastmaster-cloud.firebaseapp.com",
    projectId: "yeastmaster-cloud",
    storageBucket: "yeastmaster-cloud.firebasestorage.app",
    messagingSenderId: "395831218175",
    appId: "1:395831218175:web:66bd69450b8325c9f361ca",
    measurementId: "G-LFNPE9EHXB"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ==========================================
// --- GOOGLE ANALYTICS MED SAMTYCKE (GDPR) ---
// Analytics (och dess cookies) laddas BARA efter att användaren klickat "Acceptera"
// i cookie-bannern. Valet sparas i localStorage så bannern bara visas en gång.
// ==========================================
let _analyticsStarted = false;
function startAnalytics() {
    try {
        firebase.analytics().setAnalyticsCollectionEnabled(true);  // initierar + slår på insamling
        _analyticsStarted = true;
    } catch (e) {
        console.warn("Kunde inte starta Analytics:", e);
    }
}
function stopAnalytics() {
    if (!_analyticsStarted) return;   // aldrig startad → inget att stänga av
    try {
        firebase.analytics().setAnalyticsCollectionEnabled(false);
    } catch (e) {
        console.warn("Kunde inte stoppa Analytics:", e);
    }
}
// Speglar lagrat val till av/på-knappen i Settings
function syncAnalyticsToggle() {
    const tgl = document.getElementById('analyticsToggle');
    if (tgl) tgl.checked = (localStorage.getItem('ym-analytics-consent') === 'granted');
}

(function setupCookieConsent() {
    const STORAGE_KEY = 'ym-analytics-consent';
    const choice = localStorage.getItem(STORAGE_KEY);

    if (choice === 'granted') { startAnalytics(); return; }  // redan ja → starta, ingen banner
    if (choice === 'denied') return;                          // redan nej → gör inget, ingen banner

    // Inget val gjort än → visa bannern på rätt språk
    const texts = {
        en: { msg: "We use cookies for Google Analytics to see how the app is used (e.g. which countries visitors come from). You can accept or decline — see the Privacy Policy in Settings for details.", accept: "Accept", decline: "Decline" },
        sv: { msg: "Vi använder cookies för Google Analytics för att se hur appen används (t.ex. vilka länder besökarna kommer ifrån). Du kan acceptera eller avböja — se integritetspolicyn under Inställningar för detaljer.", accept: "Acceptera", decline: "Avböj" },
        de: { msg: "Wir verwenden Cookies für Google Analytics, um zu sehen, wie die App genutzt wird (z. B. aus welchen Ländern die Besucher kommen). Du kannst zustimmen oder ablehnen — Details in der Datenschutzerklärung unter Einstellungen.", accept: "Zustimmen", decline: "Ablehnen" },
        fr: { msg: "Nous utilisons des cookies pour Google Analytics afin de voir comment l'application est utilisée (par ex. de quels pays viennent les visiteurs). Tu peux accepter ou refuser — voir la politique de confidentialité dans les Réglages.", accept: "Accepter", decline: "Refuser" },
        es: { msg: "Usamos cookies para Google Analytics y ver cómo se usa la app (por ej. de qué países vienen los visitantes). Puedes aceptar o rechazar — consulta la política de privacidad en Ajustes.", accept: "Aceptar", decline: "Rechazar" }
    };

    const showBanner = () => {
        const lang = window.currentLang || 'en';
        const t = texts[lang] || texts.en;
        const banner = document.getElementById('cookie-consent');
        if (!banner) return;
        const msgEl = document.getElementById('cookie-consent-msg');
        const acceptEl = document.getElementById('cookie-consent-accept');
        const declineEl = document.getElementById('cookie-consent-decline');
        if (msgEl) msgEl.textContent = t.msg;
        if (acceptEl) acceptEl.textContent = t.accept;
        if (declineEl) declineEl.textContent = t.decline;
        banner.style.display = 'flex';
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showBanner);
    } else {
        showBanner();
    }
})();

window.acceptAnalytics = function() {
    localStorage.setItem('ym-analytics-consent', 'granted');
    startAnalytics();
    syncAnalyticsToggle();
    const b = document.getElementById('cookie-consent');
    if (b) b.style.display = 'none';
};
window.declineAnalytics = function() {
    localStorage.setItem('ym-analytics-consent', 'denied');
    syncAnalyticsToggle();
    const b = document.getElementById('cookie-consent');
    if (b) b.style.display = 'none';
};

// Av/på-knappen i Settings → ändra (eller återkalla) samtycke när som helst
window.toggleAnalyticsConsent = function(checkbox) {
    if (checkbox.checked) {
        localStorage.setItem('ym-analytics-consent', 'granted');
        startAnalytics();
    } else {
        localStorage.setItem('ym-analytics-consent', 'denied');
        stopAnalytics();
    }
};

// Sätt knappens läge enligt sparat val vid sidladdning
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncAnalyticsToggle);
} else {
    syncAnalyticsToggle();
}

async function getAuthHeaders() {
    const idToken = await auth.currentUser.getIdToken();
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${idToken}`
    };
}

// --- GOOGLE LOGIN ---
const loginBtn = document.getElementById('btn-login');
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
            return auth.signInWithPopup(provider);
        }).catch((error) => {
            if (error.code === 'auth/popup-blocked' || error.code === 'auth/cancelled-popup-request') {
                auth.signInWithRedirect(provider);
            } else {
                console.error("Inloggningsfel:", error);
                alert("Kunde inte logga in: " + error.message);
            }
        });
    });
}

// --- EMAIL/LÖSENORD AUTH ---
(function() {
    const showAuthView = (view) => {
        ['login', 'register', 'reset'].forEach(v => {
            const el = document.getElementById(`auth-view-${v}`);
            if (el) el.style.display = v === view ? '' : 'none';
        });
        ['auth-error-login', 'auth-error-register', 'auth-msg-reset'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });
    };

    const showError = (id, msg) => {
        const el = document.getElementById(id);
        if (el) { el.textContent = msg; el.style.display = 'block'; }
    };

    // Navigering mellan vyer
    document.getElementById('auth-goto-register')?.addEventListener('click', () => showAuthView('register'));
    document.getElementById('auth-goto-reset')?.addEventListener('click', () => showAuthView('reset'));
    document.getElementById('auth-goto-login-from-reg')?.addEventListener('click', () => showAuthView('login'));
    document.getElementById('auth-goto-login-from-reset')?.addEventListener('click', () => showAuthView('login'));

    // Email-inloggning
    document.getElementById('btn-email-login')?.addEventListener('click', () => {
        const email = document.getElementById('auth-email').value.trim();
        const password = document.getElementById('auth-password').value;
        if (!email || !password) { showError('auth-error-login', 'Enter email and password.'); return; }
        auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() =>
            auth.signInWithEmailAndPassword(email, password)
        ).catch(err => {
            const msgs = { 'auth/user-not-found': 'No account with that email.', 'auth/wrong-password': 'Wrong password.', 'auth/invalid-email': 'Invalid email.' };
            showError('auth-error-login', msgs[err.code] || err.message);
        });
    });

    // Registrering
    document.getElementById('btn-register')?.addEventListener('click', () => {
        const email = document.getElementById('auth-reg-email').value.trim();
        const pw = document.getElementById('auth-reg-password').value;
        const pw2 = document.getElementById('auth-reg-confirm').value;
        if (!email || !pw) { showError('auth-error-register', 'Fill in all fields.'); return; }
        if (pw !== pw2) { showError('auth-error-register', 'Passwords do not match.'); return; }
        if (pw.length < 6) { showError('auth-error-register', 'Password must be at least 6 characters.'); return; }
        auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() =>
            auth.createUserWithEmailAndPassword(email, pw)
        ).catch(err => {
            const msgs = { 'auth/email-already-in-use': 'That email is already registered.', 'auth/invalid-email': 'Invalid email.' };
            showError('auth-error-register', msgs[err.code] || err.message);
        });
    });

    // Glömt lösenord
    document.getElementById('btn-reset-password')?.addEventListener('click', () => {
        const email = document.getElementById('auth-reset-email').value.trim();
        if (!email) { showError('auth-msg-reset', 'Enter your email.'); return; }
        auth.sendPasswordResetEmail(email).then(() => {
            const el = document.getElementById('auth-msg-reset');
            if (el) { el.textContent = 'Reset link sent — check your inbox.'; el.style.color = '#8CC63F'; el.style.display = 'block'; }
        }).catch(err => {
            const el = document.getElementById('auth-msg-reset');
            if (el) { el.textContent = err.message; el.style.color = '#ff4444'; el.style.display = 'block'; }
        });
    });

    // Enter-tangent i lösenordsfältet triggar login
    document.getElementById('auth-password')?.addEventListener('keydown', e => {
        if (e.key === 'Enter') document.getElementById('btn-email-login')?.click();
    });
})();

// --- LOGGA UT ---
if (document.getElementById('btn-logout')) {
    document.getElementById('btn-logout').addEventListener('click', () => {
        auth.signOut().then(() => {
            // Nollställ allt lokalt direkt
            activeDeviceId = null;
            selectedStrains = [];
            showView('login');
            console.log("Utloggning bekräftad och ID nollställt.");
        }).catch((error) => {
            console.error("Logout-fel:", error);
            alert("Kunde inte logga ut: " + error.message);
        });
    });
}

// --- RADERA KONTO (GDPR) ---
const deleteAccountBtn = document.getElementById('btn-delete-account');
if (deleteAccountBtn) {
    deleteAccountBtn.addEventListener('click', async () => {
        const lang = window.currentLang || 'en';
        const t = window.translations?.[lang]?.settings || {};
        const confirmMsg = t.delete_confirm_1 || "This will permanently delete your account and all your data. This cannot be undone.\n\nAre you sure?";
        if (!confirm(confirmMsg)) return;
        const confirmMsg2 = t.delete_confirm_2 || "Last chance — delete everything permanently?";
        if (!confirm(confirmMsg2)) return;

        deleteAccountBtn.disabled = true;
        deleteAccountBtn.textContent = '...';

        try {
            const headers = await getAuthHeaders();
            const res = await fetch(`${API_BASE}/delete-account`, { method: 'DELETE', headers });
            if (!res.ok) throw new Error((await res.json()).error || res.statusText);
            await auth.signOut();
            activeDeviceId = null;
            selectedStrains = [];
            showView('login');
        } catch (err) {
            alert('Could not delete account: ' + err.message);
            deleteAccountBtn.disabled = false;
            const lang2 = window.currentLang || 'en';
            deleteAccountBtn.textContent = window.translations?.[lang2]?.settings?.btn_delete_account || 'Delete account and all data';
        }
    });
}

// --- AUTH STATE OBSERVER ---
// Körs en gång vid sidladdning och sedan vid varje in/utloggning.
// Alla funktioner den anropar (showView, updateDashboard, etc.) är definierade i app.js
// som laddas efter auth.js men innan callbacken faktiskt triggas (Firebase är asynkront).
auth.onAuthStateChanged(async (user) => {
    isAuthResolved = true;

    // Delad read-only vy (?share=token): ignorera besökarens inloggningsstatus helt.
    // Vyn drivs av delningstoken, inte av konto — annars skulle gäst-/login-UI:t störa.
    if (window.sharedToken) return;

    const soulLoginPrompt = document.getElementById('soul-login-prompt');
    const logoutBtn = document.getElementById('btn-logout');

    if (user) {
        // --- ANVÄNDAREN ÄR INLOGGAD ---
        if (soulLoginPrompt) soulLoginPrompt.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'block';

        await fetchLibraryFromCloud();

        try {
            const res = await fetch(`${API_BASE}/my-devices`, { headers: await getAuthHeaders() });
            const devices = await res.json();

            window.allFetchedDevices = devices; // Spara listan globalt

            if (devices.length > 0) {
                // 1. Sätt aktiv enhet om den saknas. Återställ tidigare val från localStorage
                //    (om enheten fortfarande finns kvar), annars första enheten.
                if (!activeDeviceId) {
                    const savedDeviceId = localStorage.getItem('ym-active-device');
                    activeDeviceId = (savedDeviceId && devices.some(d => d.device_id === savedDeviceId))
                        ? savedDeviceId
                        : devices[0].device_id;
                }

                const removeRow = document.getElementById('row-remove-device');
                if (removeRow) removeRow.style.display = 'flex'; // Använd flex för att behålla din snygga layout

                const macDisplay = document.getElementById('setting-mac-display');
                if (macDisplay) macDisplay.textContent = activeDeviceId;

                const activeDev = devices.find(d => d.device_id === activeDeviceId) || devices[0];
                if (activeDev) {
                    window.currentDeviceData = activeDev;
                    if (typeof updateHeartbeatDisplay === 'function') updateHeartbeatDisplay(activeDev.lastSeen);
                }

                // Synka molnnamn till localStorage (molnet är sanningskällan)
                try {
                    devices.forEach(dev => {
                        if (dev.name) {
                            const nicknames = JSON.parse(localStorage.getItem('yeastmaster-nicknames') || '{}');
                            nicknames[dev.device_id] = dev.name;
                            localStorage.setItem('yeastmaster-nicknames', JSON.stringify(nicknames));
                        }
                    });
                } catch (syncErr) {
                    console.warn('Kunde inte synka smeknamn till localStorage:', syncErr);
                }

                // 2. FYLL RULLISTAN I SETTINGS
                if (deviceSelect) {
                    deviceSelect.innerHTML = '';
                    devices.forEach(dev => {
                        const opt = document.createElement('option');
                        opt.value = dev.device_id;
                        const localName = getSavedNickname(dev.device_id);
                        opt.textContent = localName !== 'MIN YEASTMASTER' ? localName : (dev.name || dev.device_id);
                        deviceSelect.appendChild(opt);
                    });
                    deviceSelect.value = activeDeviceId;
                }

                // 3. FYLL RULLISTAN I BIBLIOTEKET
                const syncDropdown = document.getElementById('sync-target-device');
                if (syncDropdown) {
                    syncDropdown.innerHTML = '';
                    devices.forEach(dev => {
                        const opt = document.createElement('option');
                        opt.value = dev.device_id;
                        const localName = getSavedNickname(dev.device_id);
                        opt.textContent = localName !== 'MIN YEASTMASTER' ? localName : (dev.name || dev.device_id);
                        syncDropdown.appendChild(opt);
                    });
                }

                // 4. LADDA NAMN TILL DASHBOARD
                const currentNick = (activeDev && activeDev.name) ? activeDev.name : getSavedNickname(activeDeviceId);
                if (nickInput) nickInput.value = currentNick !== 'MIN YEASTMASTER' ? currentNick : '';
                updateDashboardNickname(currentNick);

                showView('dashboard');
                updateDashboard();
            } else {
                // Inloggad men har inga enheter än — visa "inga enheter" istället för
                // den utloggade "Log in to see devices"-texten (som annars låg kvar).
                const lang = window.currentLang || 'en';
                const noDevicesTxt = window.translations?.[lang]?.settings?.no_devices || 'No devices yet';
                if (deviceSelect) deviceSelect.innerHTML = `<option value="">${noDevicesTxt}</option>`;
                const syncDropdown = document.getElementById('sync-target-device');
                if (syncDropdown) syncDropdown.innerHTML = `<option value="">${noDevicesTxt}</option>`;
                showView('claim');
            }
        } catch (err) {
            console.error("Auth fetch error:", err);
            if (deviceSelect) deviceSelect.innerHTML = '<option value="TEST">Demo Kyl</option>';
        }
    } else {
        // --- ANVÄNDARE ÄR UTLOGGAD (GÄST-LÄGE) ---
        activeDeviceId = null;
        selectedStrains = [];

        if (logoutBtn) logoutBtn.style.display = 'none';

        if (deviceSelect) deviceSelect.innerHTML = '<option value="">Log in to see devices</option>';
        const syncDropdown = document.getElementById('sync-target-device');
        if (syncDropdown) syncDropdown.innerHTML = '<option value="">Add device to sync</option>';

        if (soulLoginPrompt) soulLoginPrompt.style.display = 'block';

        if (typeof updateDashboard === 'function') updateDashboard();
        console.log("Gäst-läge aktiverat.");

        clearDeviceSettingsUI();
    }
});
