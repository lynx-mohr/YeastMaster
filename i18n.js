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
            temp_unit: "Temperature Unit",
            accent: "Accent Color",
            push: "Push Notifications",
            push_desc: "Enable push notifications to receive alerts on your phone regarding temperature fluctuations, power outages, or when it's time to dry hop.",
            device_mgmt: "Device Management",
            active_device: "Active Device",
            status: "Status",
            nickname: "Nickname",
            remove: "Remove Active Device"
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
            temp_unit: "Temperaturenhet",
            accent: "Accentfärg",
            push: "Push-notiser",
            push_desc: "Aktivera push-notiser för att få larm i mobilen om temperaturavvikelser, strömavbrott eller när det är dags att torrhumla.",
            device_mgmt: "Hantera enheter",
            active_device: "Aktiv enhet",
            status: "Status",
            nickname: "Smeknamn",
            remove: "Ta bort enhet"
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
            temp_unit: "Temperatureinheit",
            accent: "Akzentfarbe",
            push: "Push-Benachrichtigungen",
            push_desc: "Aktivieren Sie Push-Benachrichtigungen, um Alarme bei Temperaturabweichungen, Stromausfällen oder Hopfenstopfen zu erhalten.",
            device_mgmt: "Geräteverwaltung",
            active_device: "Aktives Gerät",
            status: "Status",
            nickname: "Spitzname",
            remove: "Gerät entfernen"
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

let currentLang = localStorage.getItem('ym_language') || 'en';

function updateTexts() {
    // 1. Översätt vanlig text
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keyString = element.getAttribute('data-i18n');
        const keys = keyString.split('.');
        let text = translations[currentLang];
        keys.forEach(k => { if(text) text = text[k]; });
        if (text) element.innerText = text;
    });

    // 2. Översätt placeholders i input-fält
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const keyString = element.getAttribute('data-i18n-placeholder');
        const keys = keyString.split('.');
        let text = translations[currentLang];
        keys.forEach(k => { if(text) text = text[k]; });
        if (text) element.placeholder = text;
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ym_language', lang);
    updateTexts();
    
    // Uppdatera knapparnas utseende i UI:t
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick').includes(lang));
    });
}