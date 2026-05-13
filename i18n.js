// i18n.js

const translations = {
    en: {
        nav: { home: "HOME", library: "LIBRARY", lab: "ACADEMY", profiler: "PROFILER", live: "LIVE", settings: "SETTINGS" },
        dashboard: { 
            progress: "PROGRESS", 
            since_start: "Since start", 
            time_phase: "Time in phase", 
            goal_temp: "Goal temp in phase",
            history: "TEMP HISTORY",
            fridge: "FRIDGE",
            last_sync: "LAST SYNC",
            start: "START",
            ready: "READY",
            air: "Luft:",
            phase_label: "Phase:"
            days: "d" // Ex: 4 d
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
        action: {
            COOLING: "COOLING",
            HEATING: "HEATING",
            IDLE: "IDLE"
        },
        phase: {
            PRIMARY: "PRIMARY",
            "DIACETYL REST": "DIACETYL REST",
            "COLD CRASH": "COLD CRASH"
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
        nav: { home: "HEM", library: "BIBLIOTEK", lab: "AKADEMI", profiler: "PROFILERARE", live: "LIVE", settings: "INSTÄLLNINGAR" },
        dashboard: { 
            progress: "Progress", 
            since_start: "Sedan start", 
            time_phase: "Tid i fas", 
            goal_temp: "Måltemp i fas",
            history: "TEMPERATURHISTORIK",
            fridge: "JÄSKÄRL", // Bytte till Jäskärl, passar bra om det är en tank också!
            last_sync: "SENASTE SYNC",
            start: "START",
            ready: "KLAR",
            air: "Luft:",
            phase_label: "Fas:"
            days: "d" // Går bra med "d" på svenska också, annars "dagar"
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
        action: {
            COOLING: "KYLER",
            HEATING: "VÄRMER",
            IDLE: "VILAR"
        },
        phase: {
            PRIMARY: "PRIMÄRJÄSNING",
            "DIACETYL REST": "DIAKETYLRAST",
            "COLD CRASH": "KALLKRASCH"
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
            time_phase: "Phasendauer", 
            goal_temp: "Zieltemp. Phase",
            history: "TEMPERATURVERLAUF",
            fridge: "KÜHLSCHRANK",
            last_sync: "LETZTER SYNC",
            start: "START",
            ready: "FERTIG",
            air: "Luft:"
            phase_label: "Fas:"
            days: "t" // Ex: 4 Tage istället för 4 d
        },
        settings: {
            // ... (samma som din kod) ...
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
        action: {
            COOLING: "KÜHLT",
            HEATING: "HEIZT",
            IDLE: "RUHT"
        },
        phase: {
            PRIMARY: "HAUPTGÄRUNG",
            "DIACETYL REST": "DIACETYLRAST",
            "COLD CRASH": "COLD CRASH" 
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

function initLanguage() {
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
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.getAttribute('onclick').includes(`'${lang}'`);
        btn.classList.toggle('active', isActive);
    });
}

initLanguage();
