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
            air: "Air:",
            phase_label: "Phase:",
            days: "d" 
        },

        profiler: {
            profile_name: "PROFILE NAME",
            profile_builder: "PROFILE BUILDER",
            overview: "OVERVIEW",
            summary: "PROFILE SUMMARY",
            name_placeholder: "My Lager...",
            pick_yeast: "Pick a base yeast...",
            save: "SAVE TO LIBRARY",
            day: "Day",
            hold_until: "Hold until Day",
            free_rise: "Free rise to",
            drop_to: "Drop to",
            reach: "Reach",
            rise_to: "Rise to",
            by_day: "by Day",
            pitch: "Pitch",
            primary: "Primary",
            cleanup: "Cleanup",
            cold_crash: "Cold Crash",
            condition: "Condition",
        },

        lab: {
            title: "The Profiler",
            info_1: "Pick a strain and drag the points to build your fermentation profile.",
            info_2: "When you're done, save and find your tailored profile in the Yeast library.",
            info_3: "Don't forget the dry hops!",
            profile_name: "PROFILE NAME",
            profile_name_placeholder: "e.g. JUICEBMB",
            pick_strain: "Pick strain",
            builder_title: "PROFILE BUILDER",
            btn_overview: "🔍 OVERVIEW",
            chart_placeholder: "Pick a base yeast and name your profile above 👆",
            summary_title: "PROFILE SUMMARY",
            phase_pitch: "Pitch",
            phase_primary: "Primary",
            phase_cleanup: "Cleanup",
            phase_crash: "Cold Crash",
            phase_condition: "Condition",
            day: "Day 0 @",
            hold_until: "Hold until Day",
            reach: "Reach",
            drop_to: "Drop to",
            by_day: "by Day",
            btn_add_hops: "+ ADD DRY HOPS",
            btn_add_dump: "+ RACK / DUMP",
            schedule_hop: "Dry Hop scheduled on Day",
            schedule_dump: "Rack / Dump scheduled on Day",
            btn_save: "SAVE PROFILE"
        },
        
        soul: {
            title: "YEAST",
            subtitle: "The Soul of beer.",
            desc1_a: "We believe the true soul of beer lives within the yeast. As the old brewing adage goes: ",
            desc1_quote: '"The brewer makes wort, but the yeast makes beer."',
            desc1_b: " There is a profound wonder in how these microscopic artisans transform a simple, sweet liquid into the infinitely complex and soulful elixir we call beer.",
            desc2: "Soulof.beer is a tribute to this biological magic. Whether you are here to explore our library of historic strains or to take full command of your fermentation, this is your laboratory. Monitor your brew in real-time, sync custom profiles to your YeastMaster-unit, and master the art of fermentation.",
            what_is: "What is YeastMaster?",
            what_desc: "Discover the hardware and the app features.",
            prompt: "Ready to manage your library or monitor your unit?",
            btn_login: "GO TO LOGIN"
        },

        library: {
    title: "Yeast Library",
    info_1: "Browse the collection of yeast strains.",
    info_2: "<strong>Double-click</strong> (or long-press) a card to read about them and the Yeastmaster profiles.",
    info_3: "Select up to 10 favorites and sync them directly to your YeastMaster unit!",
    btn_tour: "✨ TAKE A QUICK TOUR",
    selected: "Selected:",
    search_placeholder: "Search strains (e.g. 'IPA', 'WLP')...",
    btn_add_strain: "+ ADD HOUSE STRAIN / WILD CAPTURE",
    target_device: "TARGET DEVICE",
    loading_devices: "Loading devices...",
    btn_sync: "SYNC TO SELECTED DEVICE",
    btn_edit: "EDIT DETAILS",
    btn_delete: "DELETE"
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
            progress: "PROGRESS", 
            since_start: "Sedan start", 
            time_phase: "Tid i fas", 
            goal_temp: "Måltemp i fas",
            history: "TEMPERATURHISTORIK",
            fridge: "JÄSKÄRL", 
            last_sync: "SENASTE SYNC",
            start: "START",
            ready: "KLAR",
            air: "Luft:",
            phase_label: "Fas:",
            days: "d" 
        },

        profiler: {
            profile_name: "PROFILNAMN",
            profile_builder: "PROFILBYGGARE",
            overview: "ÖVERSIKT",
            summary: "PROFILSAMMANFATTNING",
            name_placeholder: "Min Lager...",
            pick_yeast: "Välj en basjäst...",
            save: "SPARA TILL BIBLIOTEK",
            day: "Dag",
            hold_until: "Håll till Dag",
            free_rise: "Fri höjning till",
            drop_to: "Sänk till",
            reach: "Nå",
            rise_to: "Höj till",
            by_day: "vid Dag",
            pitch: "Pitch",
            primary: "Primär",
            cleanup: "Diacetylrast",
            cold_crash: "Kallkrasch",
            condition: "Konditionering",
        },

        lab: {
            title: "Profilbyggaren",
            info_1: "Välj en jäst och dra i punkterna för att bygga din jäsprofil.",
            info_2: "När du är klar, spara och hitta din skräddarsydda profil i Jästbiblioteket.",
            info_3: "Glöm inte torrhumlingen!",
            profile_name: "PROFILNAMN",
            profile_name_placeholder: "t.ex. JUICEBMB",
            pick_strain: "Välj jäst",
            builder_title: "PROFILBYGGARE",
            btn_overview: "🔍 ÖVERSIKT",
            chart_placeholder: "Välj en basjäst och namnge din profil ovan 👆",
            summary_title: "PROFILSAMMANFATTNING",
            phase_pitch: "Pitch",
            phase_primary: "Primär",
            phase_cleanup: "Diacetylrast",
            phase_crash: "Kallkrasch",
            phase_condition: "Konditionering",
            day: "Dag 0 @",
            hold_until: "Håll till Dag",
            reach: "Nå",
            drop_to: "Sänk till",
            by_day: "vid Dag",
            btn_add_hops: "+ LÄGG TILL TORRHUMLING",
            btn_add_dump: "+ TAPPA OM / DUMPA",
            schedule_hop: "Torrhumling schemalagd till Dag",
            schedule_dump: "Omtappning schemalagd till Dag",
            btn_save: "SPARA PROFIL"
        },

        soul: {
            title: "JÄST",
            subtitle: "Ölens själ.",
            desc1_a: "Vi tror att ölens sanna själ lever inom jästen. Som det gamla bryggordspråket säger: ",
            desc1_quote: '"Bryggaren gör vörten, men jästen gör ölet."',
            desc1_b: " Det finns ett djupt under i hur dessa mikroskopiska hantverkare förvandlar en enkel, söt vätska till det oändligt komplexa och själfulla elixiret vi kallar öl.",
            desc2: "Soulof.beer är en hyllning till denna biologiska magi. Oavsett om du är här för att utforska vårt bibliotek av historiska stammar eller för att ta full kontroll över din jäsning, är detta ditt laboratorium. Övervaka din brygd i realtid, synka anpassade profiler till din YeastMaster-enhet och bemästra jäsningens konst.",
            what_is: "Vad är YeastMaster?",
            what_desc: "Upptäck hårdvaran och appens funktioner.",
            prompt: "Redo att hantera ditt bibliotek eller övervaka din enhet?",
            btn_login: "GÅ TILL INLOGGNING"
        },

        library: {
    title: "Jästbibliotek",
    info_1: "Bläddra i samlingen av jäststammar.",
    info_2: "<strong>Dubbelklicka</strong> (eller håll inne) på ett kort för att läsa om stammen och dess YeastMaster-profiler.",
    info_3: "Välj upp till 10 favoriter och synka dem direkt till din YeastMaster-enhet!",
    btn_tour: "✨ TA EN SNABB TOUR",
    selected: "Valda:",
    search_placeholder: "Sök jäststammar (t.ex. 'IPA', 'WLP')...",
    btn_add_strain: "+ LÄGG TILL HUSJÄST / VILDFÅNGST",
    target_device: "MÅLENHET",
    loading_devices: "Laddar enheter...",
    btn_sync: "SYNKA TILL VALD ENHET",
    btn_edit: "REDIGERA DETALJER",
    btn_delete: "TA BORT"
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
            PRIMARY: "PRIMÄR",
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
            progress: "VERLAUF", 
            since_start: "Seit Start", 
            time_phase: "Phasendauer", 
            goal_temp: "Zieltemp. Phase",
            history: "TEMPERATURVERLAUF",
            fridge: "KÜHLSCHRANK",
            last_sync: "LETZTER SYNC",
            start: "START",
            ready: "FERTIG",
            air: "Luft:",
            phase_label: "Phase:",
            days: "d" 
        },

        profiler: {
            profile_name: "PROFILNAME",
            profile_builder: "PROFILERSTELLER",
            overview: "ÜBERSICHT",
            summary: "PROFILZUSAMMENFASSUNG",
            name_placeholder: "Mein Lager...",
            pick_yeast: "Basishefe wählen...",
            save: "IN BIBLIOTHEK SPEICHERN",
            day: "Tag",
            hold_until: "Halten bis Tag",
            free_rise: "Freier Anstieg auf",
            drop_to: "Senken auf",
            reach: "Erreiche",
            rise_to: "Erhöhen auf",
            by_day: "an Tag",
            pitch: "Anstellen",
            primary: "Hauptgärung",
            cleanup: "Diacetylrast",
            cold_crash: "Cold Crash",
            condition: "Konditionierung",
        },

        lab: {
            title: "Der Profiler",
            info_1: "Wähle eine Hefe und ziehe die Punkte, um dein Gärprofil zu erstellen.",
            info_2: "Wenn du fertig bist, speichere und finde dein Profil in der Hefebibliothek.",
            info_3: "Vergiss das Hopfenstopfen nicht!",
            profile_name: "PROFILNAME",
            profile_name_placeholder: "z.B. JUICEBMB",
            pick_strain: "Hefe wählen",
            builder_title: "PROFILERSTELLER",
            btn_overview: "🔍 ÜBERSICHT",
            chart_placeholder: "Wähle eine Basishefe und benenne dein Profil oben 👆",
            summary_title: "PROFILZUSAMMENFASSUNG",
            phase_pitch: "Anstellen",
            phase_primary: "Hauptgärung",
            phase_cleanup: "Diacetylrast",
            phase_crash: "Cold Crash",
            phase_condition: "Konditionierung",
            day: "Tag 0 @",
            hold_until: "Halten bis Tag",
            reach: "Erreiche",
            drop_to: "Senken auf",
            by_day: "an Tag",
            btn_add_hops: "+ KALTHOPFUNG",
            btn_add_dump: "+ UMSCHLAUCHEN",
            schedule_hop: "Kalthopfung geplant für Tag",
            schedule_dump: "Umschlauchen geplant für Tag",
            btn_save: "PROFIL SPEICHERN"
        },

        soul: {
            title: "HEFE",
            subtitle: "Die Seele des Bieres.",
            desc1_a: "Wir glauben, dass die wahre Seele des Bieres in der Hefe lebt. Wie ein altes Brausprichwort sagt: ",
            desc1_quote: '"Der Brauer macht die Würze, aber die Hefe macht das Bier."',
            desc1_b: " Es ist ein tiefes Wunder, wie diese mikroskopisch kleinen Handwerker eine einfache, süße Flüssigkeit in das unendlich komplexe und seelenvolle Elixier verwandeln, das wir Bier nennen.",
            desc2: "Soulof.beer ist eine Hommage an diese biologische Magie. Ob Sie hier sind, um unsere Bibliothek historischer Stämme zu erkunden oder die volle Kontrolle über Ihre Gärung zu übernehmen – dies ist Ihr Labor. Überwachen Sie Ihren Sud in Echtzeit, synchronisieren Sie benutzerdefinierte Profile mit Ihrer YeastMaster-Einheit und meistern Sie die Kunst der Gärung.",
            what_is: "Was ist YeastMaster?",
            what_desc: "Entdecken Sie die Hardware und die App-Funktionen.",
            prompt: "Bereit, Ihre Bibliothek zu verwalten oder Ihr Gerät zu überwachen?",
            btn_login: "ZUM LOGIN"
        },

        library: {
    title: "Hefebibliothek",
    info_1: "Durchsuchen Sie die Sammlung von Hefestämmen.",
    info_2: "<strong>Doppelklicken</strong> (oder gedrückt halten) Sie auf eine Karte, um mehr über sie und die YeastMaster-Profile zu erfahren.",
    info_3: "Wählen Sie bis zu 10 Favoriten aus und synchronisieren Sie diese direkt mit Ihrem YeastMaster!",
    btn_tour: "✨ EINE KURZE TOUR MACHEN",
    selected: "Ausgewählt:",
    search_placeholder: "Hefestämme suchen (z.B. 'IPA', 'WLP')...",
    btn_add_strain: "+ HAUSHEFE / WILDFANG HINZUFÜGEN",
    target_device: "ZIELGERÄT",
    loading_devices: "Geräte werden geladen...",
    btn_sync: "MIT AUSGEWÄHLTEM GERÄT SYNCHRONISIEREN",
    btn_edit: "DETAILS BEARBEITEN",
    btn_delete: "LÖSCHEN"
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
        const onclickAttr = btn.getAttribute('onclick');
        if (onclickAttr) {
            const isActive = onclickAttr.includes(`'${lang}'`);
            btn.classList.toggle('active', isActive);
        }
    });
    
    window.dispatchEvent(new Event('languageChanged'));
}

initLanguage();
