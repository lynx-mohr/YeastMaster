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

        about: {
            back: "← BACK",
            title: "YEASTMASTER",
            desc: "Take absolute command of your fermentation. YeastMaster is a dedicated hardware unit and cloud ecosystem designed for the modern homebrewer, bridging the gap between the biological art of brewing and precise data control.",
            hw_title: "📟 The Hardware Unit",
            hw_desc: "A dedicated physical controller with a crisp OLED display. Click to explore how it controls your fridge and heating element.",
            cloud_title: "☁️ The Cloud App",
            free: "FREE",
            cloud_desc: "Monitor your fermentation from anywhere in the world. Build custom temperature profiles in the Profiler, manage your dry hop schedules, and sync everything effortlessly.",
            lib_title: "🔬 The Yeast Library",
            lib_desc: "Stop guessing. Discover our ever-growing guide to the world's most popular yeast strains and learn how to coax out the perfect flavors for your beer."
        },
        about_lib: {
            title: "THE YEAST LIBRARY",
            desc: "A decoder ring for the world of brewing microbiology. We don't sell yeast — we help you master it.",
            card1_title: "🕵️‍♂️ Cracking the Code",
            card1_p1: "If you're new to brewing, names like <strong>WLP001</strong> or <strong>Wyeast 1056</strong> might look like secret passwords. Here is the translation:",
            card1_p2: "<strong>WLP</strong> stands for White Labs, and <strong>Wyeast</strong> is another legendary laboratory. Both produce top-tier <em>liquid</em> yeast. Names like <strong>SafAle</strong>, <strong>Fermentis</strong>, and <strong>Lallemand</strong> are famous producers of <em>dry</em> yeast. We have handpicked the absolute best and most interesting commercial strains from all of them and gathered their data in one place.",
            card2_title: "🌡️ Why Temperature is Everything",
            card2_p1: "Any yeast can ferment sugar into alcohol. But <em>how</em> the beer tastes depends entirely on temperature. A Belgian yeast fermented at 18°C might taste like clean pear, but if you let it rise to 25°C it explodes with spicy black pepper and bubblegum.",
            card2_p2: "Our library provides detailed guides on how to treat each specific strain to coax out the perfect flavors (esters and phenols), including when to raise the heat for a 'Diacetyl Rest' to clean up buttery off-flavors."
        },
        about_cloud: {
            title: "THE CLOUD APP",
            desc: "Your digital command center. YeastMaster isn't just a smart thermometer; it's a complete ecosystem for managing your fermentation from anywhere in the world.",
            card1_title: "📡 Global Monitoring",
            card1_p1: "Whether you're at work, on the couch, or on vacation, the Live Dashboard keeps you connected to your brew. Watch the temperature curve draw itself in real-time, check the ambient air in your fridge, and get ultimate peace of mind knowing exactly what phase your yeast is currently working through.",
            card2_title: "📈 The Profiler",
            card2_p1: "Professional brewers rarely keep their tanks at one static temperature. Fermentation is a journey.",
            card2_p2: "In <strong>The Profiler</strong>, you can visually drag and drop data points to build custom temperature curves. Want to pitch the yeast cool, let the temperature rise naturally during active fermentation, and automatically trigger a cold crash on day 10? Just draw the curve, save it, and sync it to your fridge.",
            card3_title: "🎓 The Lab & Academy",
            card3_p1: "The cloud app isn't just for monitoring. Jump over to <strong>The Lab</strong> to access professional pitch calculators, or explore the <strong>Academy</strong> for interactive, step-by-step lessons that will take you from a complete beginner to a confident yeast wrangler in no time."
        },
        about_hw: {
            title: "THE HARDWARE",
            desc: "YeastMaster is built around a custom ESP32 brain, designed to sit seamlessly on your fermentation chamber. It operates 100% locally, meaning your beer is safe even if the WiFi drops.",
            card1_title: "📺 Retro OLED Interface",
            card1_p1: "A high-contrast OLED screen paired with a tactile rotary encoder gives you a classic, laboratory-grade interface. Adjust offsets, change yeast profiles, or trigger a cold crash right at the fridge.",
            card2_title: "🌡️ Dual Temp Probes",
            card2_p1: "Precision requires data. YeastMaster uses two detachable, waterproof sensors. One measures the ambient air in the fridge, while the other sits directly in the beer (or taped to the fermenter), allowing the PID logic to prevent massive temperature swings.",
            card3_title: "⚡ Wireless Relays",
            card3_p1: "No dangerous high-voltage wiring. YeastMaster sends 433MHz radio signals directly to wireless smart plugs. One for your fridge (cooling), and one for a heat mat (heating). Total control, zero electrical hazards."
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
        },
        libTour: {
    step1: "Double-click on a card to read about the strain. Single-click to select it for your device!",
    step2: "Here are the hardware profiles. These control your fridge temperatures automatically.",
    step3: "Click to expand the profile to see the temperature steps!",
    step4: "Want to tweak a profile? Click 'Edit in Profiler' to add Dry Hop or Racking alarms!",
    step5: "Welcome to The Profiler! Here you can visually drag the points to tweak the fermentation curve.",
    step6: "Set your alarms for Dry hops and racking! They will show up on your timeline and alert you.",
    step7: "When saved, your modded profile lands at the bottom of the library with a ★ star, ready to be synced!",
    step8: "In the library you have the option to add your own unique captures and wild yeast.",
    step9: "You can track capture dates, origins, and keep personal lab notes for every wild yeast you find!",
    step10: "Your wild captures live safely at the bottom of your library, right next to your modded profiles!",
    step11: "Tour ended! You are now ready to master the Yeast Library. 🍻 Click anywhere to finish."
},
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
about: {
            back: "← TILLBAKA",
            title: "YEASTMASTER",
            desc: "Ta absolut kontroll över din jäsning. YeastMaster är en dedikerad hårdvaruenhet och ett molnekosystem designat för den moderna hembryggaren, som överbryggar klyftan mellan bryggningens biologiska konst och exakt datakontroll.",
            hw_title: "📟 Hårdvaran",
            hw_desc: "En dedikerad fysisk kontroller med en skarp OLED-skärm. Klicka för att se hur den styr din kyl och värmekälla.",
            cloud_title: "☁️ Molnappen",
            free: "GRATIS",
            cloud_desc: "Övervaka din jäsning var du än är i världen. Bygg anpassade temperaturprofiler i Profileraren, hantera torrhumling och synka allt smidigt.",
            lib_title: "🔬 Jästbiblioteket",
            lib_desc: "Sluta gissa. Upptäck vår växande guide till världens mest populära jäststammar och lär dig hur du lockar fram de perfekta smakerna till ditt öl."
        },
        about_lib: {
            title: "JÄSTBIBLIOTEKET",
            desc: "En avkodningsring för bryggningens mikrobiologi. Vi säljer inte jäst — vi hjälper dig att bemästra den.",
            card1_title: "🕵️‍♂️ Knäck koden",
            card1_p1: "Om du är ny inom bryggning kan namn som <strong>WLP001</strong> eller <strong>Wyeast 1056</strong> se ut som hemliga lösenord. Här är översättningen:",
            card1_p2: "<strong>WLP</strong> står för White Labs, och <strong>Wyeast</strong> är ett annat legendariskt laboratorium. Båda producerar <em>flytande</em> jäst av högsta klass. Namn som <strong>SafAle</strong>, <strong>Fermentis</strong> och <strong>Lallemand</strong> är kända tillverkare av <em>torrjäst</em>. Vi har handplockat de absolut bästa och mest intressanta kommersiella stammarna från dem alla och samlat deras data på ett och samma ställe.",
            card2_title: "🌡️ Varför temperatur är allt",
            card2_p1: "Vilken jäst som helst kan jäsa socker till alkohol. Men <em>hur</em> ölet smakar beror helt på temperaturen. En belgisk jäst som jäser vid 18°C kan smaka som ren päron, men låter du den stiga till 25°C exploderar den av kryddig svartpeppar och tuggummi.",
            card2_p2: "Vårt bibliotek ger dig detaljerade guider till hur du hanterar varje specifik stam för att locka fram de perfekta smakerna (estrar och fenoler), inklusive när du ska höja värmen för en 'Diacetylrast' för att städa upp smöriga bismaker."
        },
        about_cloud: {
            title: "MOLNAPPEN",
            desc: "Din digitala kommandocentral. YeastMaster är inte bara en smart termometer; det är ett komplett ekosystem för att hantera din jäsning oavsett var du befinner dig.",
            card1_title: "📡 Global Övervakning",
            card1_p1: "Oavsett om du är på jobbet, i soffan eller på semester, håller Live Dashboard dig uppkopplad till din brygd. Se temperaturkurvan ritas upp i realtid, håll koll på luften i kylen och få ultimat sinnesro genom att veta exakt vilken fas din jäst befinner sig i.",
            card2_title: "📈 Profileraren",
            card2_p1: "Professionella bryggare håller sällan sina tankar på en och samma statiska temperatur. Jäsning är en resa.",
            card2_p2: "I <strong>Profileraren</strong> kan du visuellt dra och släppa datapunkter för att bygga anpassade temperaturkurvor. Vill du pitcha jästen svalt, låta temperaturen stiga naturligt under aktiv jäsning, och automatiskt trigga en kallkrasch på dag 10? Rita bara kurvan, spara den och synka den till din kyl.",
            card3_title: "🎓 Labbet & Akademin",
            card3_p1: "Molnappen är inte bara till för övervakning. Hoppa över till <strong>Labbet</strong> för att få tillgång till professionella pitch-kalkylatorer, eller utforska <strong>Akademin</strong> för interaktiva steg-för-steg-lektioner som tar dig från total nybörjare till en självsäker jästhanterare på nolltid."
        },
        about_hw: {
            title: "HÅRDVARAN",
            desc: "YeastMaster är byggd kring en skräddarsydd ESP32-hjärna, designad för att sitta sömlöst på ditt jäskåp. Den fungerar 100 % lokalt, vilket betyder att din öl är säker även om WiFi-nätverket går ner.",
            card1_title: "📺 Retro OLED-gränssnitt",
            card1_p1: "En högkontrast OLED-skärm kombinerat med en taktil ratt ger dig ett klassiskt gränssnitt av laboratoriekvalitet. Justera offsets, byt jästprofiler eller trigga en kallkrasch direkt vid kylen.",
            card2_title: "🌡️ Dubbla Temperatursensorer",
            card2_p1: "Precision kräver data. YeastMaster använder två avtagbara, vattentäta sensorer. Den ena mäter den omgivande luften i kylen, medan den andra sitter direkt i ölet (eller tejpad på jäskärlet), vilket låter PID-logiken förhindra massiva temperatursvängningar.",
            card3_title: "⚡ Trådlösa Reläer",
            card3_p1: "Ingen farlig högspänningsdragning. YeastMaster skickar 433MHz-radiosignaler direkt till trådlösa smarta uttag. Ett för din kyl (kylning) och ett för en värmematta (värmning). Total kontroll, noll elektriska risker."
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
        },
        libTour: {
    step1: "Dubbelklicka på ett kort för att läsa om stammen. Enkelklicka för att välja den till din enhet!",
    step2: "Här är hårdvaruprofilerna. Dessa styr dina kylskåpstemperaturer helt automatiskt.",
    step3: "Klicka för att fälla ut profilen och se alla temperatursteg!",
    step4: "Vill du skräddarsy en profil? Klicka på 'Redigera i Profilerare' för att lägga till larm för torrhumling eller omtappning!",
    step5: "Välkommen till Profileraren! Här kan du dra i punkterna visuellt för att justera jäsningkurvan.",
    step6: "Ställ in dina larm för torrhumling och omtappning! De dyker upp på din tidslinje och varnar dig när det är dags.",
    step7: "När du sparar hamnar din modifierade profil längst ner i biblioteket med en ★-stjärna, redo att synkas!",
    step8: "I biblioteket har du även möjlighet att lägga till dina egna unika vildfångster och husjäster.",
    step9: "Du kan spåra fångstdatum, ursprung och föra personliga labbackanteckningar för varje vildjäst du hittar!",
    step10: "Dina vildfångster sparas säkert längst ner i ditt bibliotek, precis bredvid dina modifierade profiler!",
    step11: "Touren är slut! Du är nu redo att bemästra Jästbiblioteket. 🍻 Klicka var som helst för att avsluta."
},
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
about: {
            back: "← ZURÜCK",
            title: "YEASTMASTER",
            desc: "Übernehmen Sie die absolute Kontrolle über Ihre Gärung. YeastMaster ist eine dedizierte Hardwareeinheit und ein Cloud-Ökosystem für den modernen Heimbrauer, das die Lücke zwischen der biologischen Kunst des Brauens und präziser Datenkontrolle schließt.",
            hw_title: "📟 Die Hardware",
            hw_desc: "Ein physischer Controller mit einem klaren OLED-Display. Klicken Sie, um zu sehen, wie er Ihren Kühlschrank und Ihre Heizung steuert.",
            cloud_title: "☁️ Die Cloud-App",
            free: "KOSTENLOS",
            cloud_desc: "Überwachen Sie Ihre Gärung von überall auf der Welt. Erstellen Sie Temperaturprofile im Profiler, verwalten Sie Hopfenstopfen und synchronisieren Sie alles mühelos.",
            lib_title: "🔬 Die Hefebibliothek",
            lib_desc: "Hören Sie auf zu raten. Entdecken Sie unseren stetig wachsenden Leitfaden zu den beliebtesten Hefestämmen der Welt."
        },
        about_lib: {
            title: "DIE HEFEBIBLIOTHEK",
            desc: "Ein Entschlüsselungsring für die Braumikrobiologie. Wir verkaufen keine Hefe — wir helfen Ihnen, sie zu meistern.",
            card1_title: "🕵️‍♂️ Den Code knacken",
            card1_p1: "Wenn Sie neu im Brauen sind, sehen Namen wie <strong>WLP001</strong> oder <strong>Wyeast 1056</strong> vielleicht wie geheime Passwörter aus. Hier ist die Übersetzung:",
            card1_p2: "<strong>WLP</strong> steht für White Labs, und <strong>Wyeast</strong> ist ein weiteres legendäres Labor. Beide produzieren erstklassige <em>flüssige</em> Hefe. Namen wie <strong>SafAle</strong>, <strong>Fermentis</strong> und <strong>Lallemand</strong> sind berühmte Hersteller von <em>Trockenhefe</em>. Wir haben die absolut besten kommerziellen Stämme ausgewählt und ihre Daten an einem Ort gesammelt.",
            card2_title: "🌡️ Warum die Temperatur alles ist",
            card2_p1: "Jede Hefe kann Zucker zu Alkohol vergären. Aber <em>wie</em> das Bier schmeckt, hängt ganz von der Temperatur ab. Eine bei 18°C vergorene belgische Hefe schmeckt vielleicht nach reiner Birne, aber bei 25°C explodiert sie mit würzigem schwarzem Pfeffer und Kaugummi.",
            card2_p2: "Unsere Bibliothek bietet detaillierte Anleitungen, wie Sie jeden Stamm behandeln müssen, um die perfekten Aromen herauszukitzeln, einschließlich wann Sie die Wärme für eine 'Diacetylrast' erhöhen sollten."
        },
        about_cloud: {
            title: "DIE CLOUD-APP",
            desc: "Ihr digitales Kommandozentrum. YeastMaster ist nicht nur ein smartes Thermometer; es ist ein komplettes Ökosystem zur Steuerung Ihrer Gärung.",
            card1_title: "📡 Globale Überwachung",
            card1_p1: "Egal ob Sie bei der Arbeit, auf der Couch oder im Urlaub sind, das Live-Dashboard hält Sie mit Ihrem Sud verbunden. Beobachten Sie, wie sich die Temperaturkurve in Echtzeit zeichnet und wissen Sie genau, in welcher Phase sich Ihre Hefe befindet.",
            card2_title: "📈 Der Profiler",
            card2_p1: "Professionelle Brauer halten ihre Tanks selten auf einer konstanten Temperatur. Gärung ist eine Reise.",
            card2_p2: "Im <strong>Profiler</strong> können Sie Datenpunkte visuell per Drag-and-Drop verschieben, um eigene Temperaturkurven zu erstellen. Zeichnen Sie die Kurve, speichern Sie sie und synchronisieren Sie sie mit Ihrem Kühlschrank.",
            card3_title: "🎓 Das Labor & Akademie",
            card3_p1: "Springen Sie hinüber ins <strong>Labor</strong>, um auf professionelle Pitch-Rechner zuzugreifen, oder erkunden Sie die <strong>Akademie</strong> für interaktive Lektionen, die Sie im Handumdrehen vom Anfänger zum Hefe-Meister machen."
        },
        about_hw: {
            title: "DIE HARDWARE",
            desc: "YeastMaster basiert auf einem benutzerdefinierten ESP32-Gehirn, das nahtlos an Ihrem Gärschrank angebracht wird. Es arbeitet zu 100 % lokal – Ihr Bier ist sicher, auch wenn das WLAN ausfällt.",
            card1_title: "📺 Retro-OLED-Schnittstelle",
            card1_p1: "Ein kontrastreiches OLED-Display gepaart mit einem taktilen Drehregler bietet Ihnen eine klassische Labor-Schnittstelle. Passen Sie Offsets an, ändern Sie Hefeprofile oder starten Sie einen Cold Crash direkt am Kühlschrank.",
            card2_title: "🌡️ Zwei Temperatursensoren",
            card2_p1: "Präzision erfordert Daten. YeastMaster verwendet zwei abnehmbare, wasserdichte Sensoren. Einer misst die Umgebungsluft im Kühlschrank, während der andere direkt im Bier sitzt.",
            card3_title: "⚡ Drahtlose Relais",
            card3_p1: "Keine gefährliche Hochspannungsverkabelung. YeastMaster sendet 433-MHz-Funksignale direkt an drahtlose smarte Steckdosen. Totale Kontrolle, null elektrische Gefahren."
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
        },
        libTour: {
    step1: "Doppelklicken Sie auf eine Karte, um mehr über den Stamm zu erfahren. Einmal klicken, um ihn für Ihr Gerät auszuwählen!",
    step2: "Hier sind die Hardware-Profile. Diese steuern Ihre Kühlschranktemperaturen vollautomatisch.",
    step3: "Klicken Sie hier, um das Profil zu erweitern und die Temperaturschritte zu sehen!",
    step4: "Möchten Sie ein Profil anpassen? Klicken Sie auf 'Im Profiler bearbeiten', um Hopfenstopf- oder Umschlaubalarme hinzuzufügen!",
    step5: "Willkommen im Profiler! Hier können Sie die Datenpunkte visuell ziehen, um die Gärungskurve anzupassen.",
    step6: "Stellen Sie Ihre Alarme für Hopfenstopfen und Umschwung ein! Sie werden auf Ihrer Timeline angezeigt und alarmieren Sie rechtzeitig.",
    step7: "Nach dem Speichern landet Ihr geändertes Profil mit einem ★-Stern unten in der Bibliothek, bereit zum Synchronisieren!",
    step8: "In der Bibliothek haben Sie die Möglichkeit, Ihre eigenen einzigartigen Wildfänge und Haushefen hinzuzufügen.",
    step9: "Sie können Fangdaten und Herkunft verfolgen und persönliche Labornotizen für jede gefundene Wildhefe führen!",
    step10: "Ihre Wildfänge leben sicher ganz unten in Ihrer Bibliothek, direkt neben Ihren modifizierten Profilen!",
    step11: "Tour beendet! Sie sind jetzt bereit, die Hefebibliothek zu meistern. 🍻 Klicken Sie irgendwo hin, um abzuschließen."
},
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
        
        // MAGIN: Ändrat från innerText till innerHTML här nere! 👇
        if (text) element.innerHTML = text; 
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
