// i18n.js

const translations = {
    en: {
        nav: { home: "HOME", library: "LIBRARY", lab: "ACADEMY", profiler: "PROFILER", live: "LIVE", settings: "SETTINGS" },
        dashboard: { 
            progress: "PROGRESS", 
            since_start: "Since start", 
            time_phase: "Time in phase", 
            goal_temp: "Goal temp in phase",
            history: "TEMP HISTORY"
        },
        settings: {
            title: "SETTINGS",
            theme: "Theme",
            dark: "DARK",
            light: "LIGHT",
            temp_unit: "Temperature Unit",
            accent: "Accent Color",
            language_label: "Language",
            notifications_title: "NOTIFICATIONS",
            push: "Push Notifications",
            push_desc: "Enable push notifications to receive alerts on your phone regarding temperature fluctuations, power outages, or when it's time to dry hop.",
            device_mgmt: "Device Management",
            active_device: "Active Device",
            status: "Status",
            status_connected: "CONNECTED",
            nickname: "Nickname",
            device_id: "Device ID (MAC)",
            remove: "Remove Active Device",
            add_device: "+ ADD NEW YEASTMASTER",
            support: "SUPPORT & FEEDBACK",
            btn_bug: "REPORT BUG",
            btn_idea: "SUGGEST IDEA",
            btn_logout: "LOG OUT"
        },
        status: {
            offline: "OFFLINE",
            min_ago: "m ago",
            idle: "IDLE",
            running: "RUNNING",
            cooling: "COOLING",
            heating: "HEATING",
            finished: "FINISHED"
        },
        alerts: {
            dry_hop: "🌿 TIME TO DRY HOP!",
            dump: "🧪 TIME TO DUMP YEAST!",
            crash: "❄️ TIME TO COLD CRASH!",
            power: "⚠️ CONNECTION LOST! Check power/WiFi.",
            temp: "🔥 TEMP DEVIATION! >2.0°C difference."
        }
    },
    sv: {
        nav: { home: "HEM", library: "BIBLIOTEK", lab: "AKADEMI", profiler: "PROFILER", live: "LIVE", settings: "INSTÄLLN." },
        dashboard: { 
            progress: "FRAMSTEG", 
            since_start: "Sedan start", 
            time_phase: "Tid i fas", 
            goal_temp: "Måltemp i fas",
            history: "TEMPERATURHISTORIK"
        },
        settings: {
            title: "INSTÄLLNINGAR",
            theme: "Tema",
            dark: "MÖRK",
            light: "LJUS",
            temp_unit: "Temperaturenhet",
            accent: "Accentfärg",
            language_label: "Språk",
            notifications_title: "NOTISER",
            push: "Push-notiser",
            push_desc: "Aktivera push-notiser för att få larm i mobilen om temperaturavvikelser, strömavbrott eller när det är dags att torrhumla.",
            device_mgmt: "Hantera enheter",
            active_device: "Aktiv enhet",
            status: "Status",
            status_connected: "ANSLUTEN",
            nickname: "Smeknamn",
            device_id: "Enhets-ID (MAC)",
            remove: "Ta bort enhet",
            add_device: "+ LÄGG TILL YEASTMASTER",
            support: "SUPPORT & FEEDBACK",
            btn_bug: "RAPPORTERA BUGG",
            btn_idea: "FÖRESLÅ IDÉ",
            btn_logout: "LOGGA UT"
        },
        status: {
            offline: "OFFLINE",
            min_ago: "m sedan",
            idle: "VILOLÄGE",
            running: "AKTIV",
            cooling: "KYLER",
            heating: "VÄRMER",
            finished: "AVSLUTAD"
        },
        alerts: {
            dry_hop: "🌿 DAGS ATT TORRHUMLA!",
            dump: "🧪 DAGS ATT TÖMMA JÄST!",
            crash: "❄️ DAGS FÖR COLD CRASH!",
            power: "⚠️ ANSLUTNING BRUTEN! Kolla ström/WiFi.",
            temp: "🔥 TEMP-AVVIKELSE! >2.0°C skillnad."
        }
    },
    de: {
        nav: { home: "START", library: "BIBLIOTHEK", lab: "AKADEMIE", profiler: "PROFILER", live: "LIVE", settings: "SETUP" },
        dashboard: { 
            progress: "FORTSCHRITT", 
            since_start: "Seit Start", 
            time_phase: "Zeit in Phase", 
            goal_temp: "Zieltemp in Phase",
            history: "TEMPERATURVERLAUF"
        },
        settings: {
            title: "EINSTELLUNGEN",
            theme: "Thema",
            dark: "DUNKEL",
            light: "HELL",
            temp_unit: "Temperatureinheit",
            accent: "Akzentfarbe",
            language_label: "Sprache",
            notifications_title: "BENACHRICHTIGUNGEN",
            push: "Push-Benachrichtigungen",
            push_desc: "Aktivieren Sie Push-Benachrichtigungen, um Alarme bei Temperaturabweichungen, Stromausfällen oder Hopfenstopfen zu erhalten.",
            device_mgmt: "Geräteverwaltung",
            active_device: "Aktives Gerät",
            status: "Status",
            status_connected: "VERBUNDEN",
            nickname: "Spitzname",
            device_id: "Geräte-ID (MAC)",
            remove: "Gerät entfernen",
            add_device: "+ YEASTMASTER HINZUFÜGEN",
            support: "HILFE & FEEDBACK",
            btn_bug: "FEHLER MELDEN",
            btn_idea: "IDEE VORSCHLAGEN",
            btn_logout: "ABMELDEN"
        },
        status: {
            offline: "OFFLINE",
            min_ago: "m her",
            idle: "LEERLAUF",
            running: "LÄUFT",
            cooling: "KÜHLT",
            heating: "HEIZT",
            finished: "BEENDET"
        },
        alerts: {
            dry_hop: "🌿 ZEIT ZUM HOPFENSTOPFEN!",
            dump: "🧪 HEFE ABLASSEN!",
            crash: "❄️ ZEIT FÜR COLD CRASH!",
            power: "⚠️ VERBINDUNG UNTERBROCHEN!",
            temp: "🔥 TEMP-ABWEICHUNG! >2.0°C diff."
        }
    }
};

// Exportera till globala window-objektet
window.translations = translations;
window.currentLang = localStorage.getItem('ym_language') || 'en';

// 1. Hämta sparat språk eller kör engelska som standard
window.currentLang = localStorage.getItem('ym_language') || 'en';

// 2. Denna funktion körs nu automatiskt när filen laddas
function initLanguage() {
    // Vi anropar setLanguage med det sparade språket
    // för att uppdatera både texter och knapparnas utseende direkt
    setLanguage(window.currentLang);
}

function updateTexts() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keyString = element.getAttribute('data-i18n');
        const keys = keyString.split('.');
        let text = translations[window.currentLang];
        keys.forEach(k => { if(text) text = text[k]; });
        if (text) element.innerText = text;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const keyString = element.getAttribute('data-i18n-placeholder');
        const keys = keyString.split('.');
        let text = translations[window.currentLang];
        keys.forEach(k => { if(text) text = text[k]; });
        if (text) element.placeholder = text;
    });
}

function setLanguage(lang) {
    window.currentLang = lang;
    localStorage.setItem('ym_language', lang);
    updateTexts();
    
    // Uppdatera knapparnas utseende (markerar den aktiva knappen)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        // Vi kollar om knappen har rätt lang-kod i sitt onclick-anrop
        const isActive = btn.getAttribute('onclick').includes(`'${lang}'`);
        btn.classList.toggle('active', isActive);
    });
}

// KÖR INITIERINGEN DIREKT!
initLanguage();