const yeastStrains = [
    // ==========================================
    // --- DRY YEASTS (Torrjäst) ---
    // ==========================================
    { id: "us-05", name: "SafAle US-05", origin: "USA", temp: "18-22°C", tags: ["Ale", "Crisp", "Dry"], desc: "Kungen av rena amerikanska ales. Pålitlig, krispig och låter humlen skina.", styles: "APA, IPA, West Coast" },
    { id: "s-04", name: "SafAle S-04", origin: "UK", temp: "15-20°C", tags: ["Ale", "English", "Fruity", "Dry"], desc: "Snabb jäsning och extrem flockning. Ger klassiska brittiska frukttoner.", styles: "Bitter, Stout, Porter" },
    { id: "nottingham", name: "Lallemand Nottingham", origin: "UK", temp: "10-22°C", tags: ["Ale", "Clean", "Versatile", "Dry"], desc: "En arbetshäst som klarar allt. Kan köras kallt för att imitera en lager.", styles: "Lager-like, Pale Ale, Stout" },
    { id: "s-33", name: "SafAle S-33", origin: "Belgium", temp: "18-22°C", tags: ["Ale", "Belgian", "Body", "Dry"], desc: "Ger mycket kropp och lämnar restsötma. Perfekt för NEIPA och klosteröl.", styles: "Belgian Ale, NEIPA" },
    { id: "be-256", name: "SafAle BE-256", origin: "Belgium", temp: "15-25°C", tags: ["Ale", "Belgian", "Abbey", "Dry"], desc: "Snabb och brutal belgare. Hanterar hög alkohol och ger komplex mörk frukt.", styles: "Dubbel, Tripel, Quad" },
    { id: "wb-06", name: "SafAle WB-06", origin: "Germany", temp: "18-24°C", tags: ["Wheat", "Banana", "Clove", "Dry"], desc: "Klassisk veteölsjäst. Du styr balansen mellan banan och nejlika med temp.", styles: "Hefeweizen, Witbier" },
    { id: "verdant", name: "Lallemand Verdant IPA", origin: "UK", temp: "18-22°C", tags: ["Ale", "NEIPA", "Juice", "Dry"], desc: "Skapad för NEIPA. Ger aprikosnoter och en fantastisk fyllighet.", styles: "NEIPA, Hazy IPA" },
    { id: "voss", name: "Lallemand Voss Kveik", origin: "Norway", temp: "25-40°C", tags: ["Kveik", "Orange", "Fast", "Dry"], desc: "Norsk urkraft. Jäser extremt varmt och snabbt med tydliga apelsintoner.", styles: "Farmhouse Ale, IPA" },
    { id: "t-58", name: "SafAle T-58", origin: "Belgium", temp: "15-24°C", tags: ["Ale", "Belgian", "Spicy", "Dry"], desc: "Pepprig och kryddig. Ger en unik karaktär till belgiska specialöl.", styles: "Saison, Belgian Ale" },
    { id: "belle-saison", name: "Lallemand Belle Saison", origin: "Belgium", temp: "15-32°C", tags: ["Ale", "Saison", "Dry Finish", "Dry"], desc: "Jäser ut precis allt. Ger en snustorr finish med klassisk saison-krydda.", styles: "Saison, Farmhouse" },
    { id: "w-34-70", name: "Saflager W-34/70", origin: "Germany", temp: "9-15°C", tags: ["Lager", "German", "Clean", "Dry"], desc: "Världens mest använda lagerjäst. Extremt ren och krispig profil.", styles: "Pilsner, Lager, Helles" },
    { id: "s-23", name: "Saflager S-23", origin: "Germany", temp: "9-15°C", tags: ["Lager", "Bohemian", "Fruity", "Dry"], desc: "Tjeckisk profil med lite mer fruktiga estrar än W-34/70.", styles: "Czech Pilsner, Bock" },
    { id: "diamond", name: "Lallemand Diamond", origin: "Germany", temp: "10-15°C", tags: ["Lager", "Munich", "Clean", "Dry"], desc: "Klassisk tysk lagerjäst från München. Mycket ren och polerad finish.", styles: "Helles, Oktoberfest" },
    { id: "novalager", name: "Lallemand NovaLager", origin: "Germany", temp: "10-20°C", tags: ["Lager", "Hybrid", "Clean", "Dry"], desc: "Modernt mirakel. Jäser som en ale men smakar som en krispig lager.", styles: "Lager, Cold IPA" },

    // ==========================================
    // --- LIQUID YEASTS (Flytande Jäst) ---
    // ==========================================
    { id: "wlp001", name: "WLP001 California Ale", origin: "USA", temp: "18-23°C", tags: ["Ale", "Clean", "Liquid"], desc: "Originalet för West Coast IPA. Renare profil än torrjäst-motsvarigheten.", styles: "IPA, APA" },
    { id: "wlp300", name: "WLP300 Hefeweizen", origin: "Germany", temp: "18-24°C", tags: ["Wheat", "Banana", "Clove", "Liquid"], desc: "Guldstandarden för veteöl. Ger extremt mycket banan-estrar.", styles: "Hefeweizen, Dunkelweizen" },
    { id: "wyeast-1968", name: "Wyeast 1968 London ESB", origin: "UK", temp: "18-22°C", tags: ["Ale", "English", "Malty", "Liquid"], desc: "Legendarisk Fuller's-stam. Mycket maltig och flockar stenhårt.", styles: "ESB, Bitter" },
    { id: "wlp500", name: "WLP500 Trappist", origin: "Belgium", temp: "18-25°C", tags: ["Ale", "Belgian", "Trappist", "Liquid"], desc: "Från Chimay. Ger fantastiska toner av bubbelgum och plommon.", styles: "Dubbel, Tripel" },
    { id: "wlp066", name: "WLP066 London Fog", origin: "UK", temp: "18-22°C", tags: ["Ale", "NEIPA", "Juice", "Liquid"], desc: "Hjärtat i NEIPA-revolutionen. Ger sammetslen munkänsla och ananas.", styles: "NEIPA, Hazy IPA" },
    { id: "wlp800", name: "WLP800 Pilsner Lager", origin: "Czech", temp: "10-15°C", tags: ["Lager", "Czech", "Malty", "Liquid"], desc: "Urquell-stammen. Ger den klassiska tjeckiska smörkolatonen.", styles: "Pilsner, Bohemian Lager" },
    { id: "wlp920", name: "WLP920 Old Bavarian", origin: "Germany", temp: "9-15°C", tags: ["Lager", "Malty", "German", "Liquid"], desc: "Perfekt för mörka lagers. Bevarar maltigheten på ett fantastiskt sätt.", styles: "Dunkel, Oktoberfest" },
    { id: "imperial-b45", name: "Imperial B45 Gnome", origin: "Belgium", temp: "18-25°C", tags: ["Ale", "Belgian", "Pear", "Liquid"], desc: "Chouffe-stammen! Ger päron-estrar och en lätt pepprighet.", styles: "Belgian Blonde, Houblon" },
    { id: "wyeast-1084", name: "Wyeast 1084 Irish Ale", origin: "Ireland", temp: "16-22°C", tags: ["Ale", "Irish", "Dry", "Liquid"], desc: "Guinness-stammen. Torr, lätt fruktig och perfekt till stouts.", styles: "Dry Stout, Red Ale" },
    { id: "wyeast-3944", name: "Wyeast 3944 Belgian Wit", origin: "Belgium", temp: "16-24°C", tags: ["Wheat", "Belgian", "Citrus", "Liquid"], desc: "Hoegaarden-stammen. Molnig, citrusig och underbart kryddig.", styles: "Witbier, Blanche" },
    { id: "wlp833", name: "WLP833 German Bock", origin: "Germany", temp: "9-14°C", tags: ["Lager", "Malty", "Rich", "Liquid"], desc: "Ayinger-stammen. Kung av fyllighet och maltighet.", styles: "Bock, Doppelbock" },
    { id: "wlp007", name: "WLP007 Dry English", origin: "UK", temp: "18-21°C", tags: ["Ale", "English", "Dry", "Liquid"], desc: "En raket! Jäser snabbt, torrt och flockar extremt bra.", styles: "IPA, Barleywine" },
    { id: "wyeast-1318", name: "Wyeast 1318 London III", origin: "UK", temp: "18-22°C", tags: ["Ale", "NEIPA", "Juicy", "Liquid"], desc: "Boddingtons-stammen. Basen för nästan all modern NEIPA.", styles: "NEIPA, Pale Ale" },
    { id: "wyeast-2565", name: "Wyeast 2565 Kolsch", origin: "Germany", temp: "13-21°C", tags: ["Ale", "Hybrid", "Crisp", "Liquid"], desc: "Tekniskt en ale men smakar som en lager. Kräver kallagring.", styles: "Kölsch, Blonde" },
    { id: "wlp095", name: "WLP095 Burlington Ale", origin: "USA", temp: "19-21°C", tags: ["Ale", "NEIPA", "Peach", "Liquid"], desc: "Den legendariska Conan-stammen från Heady Topper. Ger persika.", styles: "NEIPA, Vermont Ale" },

    // ==========================================
    // --- EXPANSION: THE LEGENDS ---
    // ==========================================
    { id: "wlp090", name: "WLP090 San Diego Super", origin: "USA", temp: "18-20°C", tags: ["Ale", "Crisp", "Fast", "Liquid"], desc: "Giganten för West Coast IPA. Supersnabb och extremt ren.", styles: "Double IPA, West Coast" },
    { id: "wyeast-1272", name: "Wyeast 1272 American II", origin: "USA", temp: "15-22°C", tags: ["Ale", "Fruity", "Nutty", "Liquid"], desc: "Fruktigare än US-05. Fantastisk till maltiga amerikanska ales.", styles: "Pale Ale, Amber" },
    { id: "imperial-a24", name: "Imperial A24 Dry Hop", origin: "USA", temp: "18-22°C", tags: ["Ale", "NEIPA", "Citrus", "Liquid"], desc: "Skapad för att maxa torrhumling. Mycket tropisk frukt.", styles: "NEIPA, Hazy IPA" },
    { id: "wlp530", name: "WLP530 Westmalle", origin: "Belgium", temp: "18-22°C", tags: ["Ale", "Belgian", "Trappist", "Liquid"], desc: "Originalet för mörka belgare. Vätske-versionen av BE-256.", styles: "Dubbel, Quad" },
    { id: "wyeast-3711", name: "Wyeast 3711 French Saison", origin: "France", temp: "18-25°C", tags: ["Ale", "Saison", "Dry Finish", "Liquid"], desc: "Vätske-versionen av Belle Saison. Jäser ut allt.", styles: "Saison, Farmhouse" },
    { id: "wlp028", name: "WLP028 Scottish Ale", origin: "UK", temp: "13-21°C", tags: ["Ale", "Scottish", "Malty", "Liquid"], desc: "Klarar kyla bra. Bevarar maltens rökighet och rostad karaktär.", styles: "Wee Heavy, Scottish Ale" },
    { id: "wyeast-1469", name: "Wyeast 1469 West Yorkshire", origin: "UK", temp: "18-22°C", tags: ["Ale", "English", "Nutty", "Liquid"], desc: "Timothy Taylor-stammen. Den bästa för en riktig engelsk Bitter.", styles: "ESB, English Bitter" },
    { id: "lutra", name: "Omega Lutra Kveik", origin: "Norway", temp: "20-35°C", tags: ["Kveik", "Pseudo-Lager", "Fast", "Liquid"], desc: "Smakar exakt som lager men jäser på 3 dagar i rumstemp.", styles: "Pilsner, Pseudo-Lager" },
    { id: "philly-sour", name: "Lallemand Philly Sour", origin: "USA", temp: "20-25°C", tags: ["Sour", "Lactic", "Fast", "Dry"], desc: "Gör syrlig öl och alkohol i ett steg. Ingen bakterierisk.", styles: "Gose, Berliner Weisse" },
    { id: "wlp820", name: "WLP820 Oktoberfest", origin: "Germany", temp: "11-14°C", tags: ["Lager", "German", "Malty", "Liquid"], desc: "Ger en djup, bready maltprofil. Ett måste till Märzen.", styles: "Oktoberfest, Märzen" },

    // ==========================================
    // --- EXPANSION: EVENING LEGENDS ---
    // ==========================================
    { id: "bry-97", name: "Lallemand BRY-97", origin: "USA", temp: "15-22°C", tags: ["Ale", "West Coast", "Clean", "Dry"], desc: "Favoriten för krispiga IPAs. Framhäver humlen mer än US-05.", styles: "West Coast IPA" },
    { id: "k-97", name: "SafAle K-97", origin: "Germany", temp: "15-20°C", tags: ["Ale", "German", "Crisp", "Dry"], desc: "Ren tysk ale-jäst. Perfekt för Altbier och Kölsch.", styles: "Altbier, Kölsch" },
    { id: "windsor", name: "Lallemand Windsor", origin: "UK", temp: "15-22°C", tags: ["Ale", "English", "Fruity", "Dry"], desc: "Lämnar mycket kropp och fruktighet. Klassisk brittisk.", styles: "English Bitter, Stout" },
    { id: "mexican-lager", name: "WLP040 Mexican Lager", origin: "Mexico", temp: "10-14°C", tags: ["Lager", "Clean", "Mexican", "Liquid"], desc: "Den ultimata jästen för ljusa sommar-cervezas.", styles: "Mexican Lager, Helles" },
    { id: "hornindal", name: "Omega OYL-091 Hornindal Kveik", origin: "Norway", temp: "22-37°C", tags: ["Kveik", "Tropical", "Fast", "Liquid"], desc: "Tropisk frukt-bomb! Ananas och mango i massor.", styles: "NEIPA, Pale Ale" },
    { id: "wyeast-3724", name: "Wyeast 3724 Belgian Saison", origin: "Belgium", temp: "21-35°C", tags: ["Ale", "Saison", "Stubborn", "Liquid"], desc: "Dupont-stammen. Behöver hög värme för att inte stanna.", styles: "Saison, Farmhouse" },
    { id: "wlp570", name: "WLP570 Belgian Golden", origin: "Belgium", temp: "20-25°C", tags: ["Ale", "Belgian", "Pear", "Liquid"], desc: "Duvel-stammen. Jäser torrt med toner av päron och vitt vin.", styles: "Belgian Strong Gold" },
    { id: "wyeast-2112", name: "Wyeast 2112 California", origin: "USA", temp: "14-20°C", tags: ["Lager", "Hybrid", "Steam", "Liquid"], desc: "Anchor Steam-jästen. Lagerkaraktär jäsas i rumstemp.", styles: "California Common" },
    { id: "wlp380", name: "WLP380 Hefeweizen IV", origin: "Germany", temp: "19-22°C", tags: ["Wheat", "Clove", "Spicy", "Liquid"], desc: "Mindre banan, mer kryddnejlika än WLP300.", styles: "Hefeweizen, Weizenbock" },
    { id: "wyeast-1007", name: "Wyeast 1007 German Ale", origin: "Germany", temp: "13-20°C", tags: ["Ale", "German", "Clean", "Liquid"], desc: "Krispig och ren. Kan jäsas kallt för lagerprofil.", styles: "Altbier, German Ale" }
];

document.addEventListener('DOMContentLoaded', () => {
    // Tvinga INGEN till login! 
    // Vi låter dem börja på SOUL-vyn (där glaset fylls) eller den flik de klickat på.
 // Berätta för mobilens bakåtknapp att "soul" är startplatsen
    history.replaceState({ view: 'soul' }, null, "");
});
// --- KONFIGURATION ---
let activeDeviceId = null;
let isAuthResolved = false; // Håller koll på om Firebase har vaknat än
const API_BASE = "https://soulofbeer-live.onrender.com/api";
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

const auth = firebase.auth(); // Se till att Firebase är länkat i index.html!



// --- KONFIGURATION FÖR VYER & ANIMATIONER ---
// Flyttad upp hit så att appen har stenkoll på ordningen från start!
const viewOrder = ['soul', 'library', 'librarian', 'lab', 'dashboard', 'settings'];

// Tvinga webbläsaren att sluta lägga sig i scrollningen vid bakåt-klick!
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Vi skapar en variabel för att hålla koll på var vi VAR någonstans
let currentActiveView = 'soul'; 

// Lägg till 'pushToHistory = true' i parentesen!
function showView(viewName, pushToHistory = true) {
    const views = {
        login: document.getElementById('login-container'),
        claim: document.getElementById('claim-container'),
        soul: document.getElementById('view-soul'),
        library: document.getElementById('view-library'),
        librarian: document.getElementById('view-librarian'),
        lab: document.getElementById('view-lab'),
        dashboard: document.getElementById('view-dashboard'),
        settings: document.getElementById('view-settings'),
        about: document.getElementById('view-about')
    };

    if (!views[viewName]) return;

    // Lägg en brödsmula i webbläsarens historik!
    if (pushToHistory) {
        history.pushState({ view: viewName }, null, "");
    }

    // --- LOGIK FÖR ANIMATIONSRIKTNING ---
    const oldIndex = viewOrder.indexOf(currentActiveView);
    const newIndex = viewOrder.indexOf(viewName);
    
    let animClass = '';
    // Kollar om vi flyttar oss i huvudmenyn
    if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
        // Går vi till höger i menyn (t.ex. Home -> Library) så ska bilden komma IN från höger
        animClass = (newIndex > oldIndex) ? 'slide-in-right' : 'slide-in-left';
    }

    // Växla vyer
    Object.keys(views).forEach(key => {
        if (views[key]) {
            // 1. Ta bort de gamla animationsklasserna
            views[key].classList.remove('slide-in-right', 'slide-in-left');
            
            if (key === viewName) {
                const isFlexView = (key === 'login' || key === 'claim');
                views[key].style.display = isFlexView ? 'flex' : 'block';
                
                // 2. DET MAGISKA HACKET: Tvinga webbläsaren att registrera att vi tagit bort klassen
                // Genom att be om offsetWidth, tvingar vi fram en "Reflow" (omritning)
                void views[key].offsetWidth; 
                
                // 3. Lägg på animationen igen – nu är webbläsaren med på noterna!
                if (animClass) {
                    views[key].classList.add(animClass);
                }
            } else {
                views[key].style.display = 'none';
            }
        }
    });

 // --- MAGI: FYLL PÅ GLASET AUTOMATISKT NÄR VI GÅR TILL HOME ---
    if (viewName === 'soul') {
        const glass = document.getElementById('interactive-beer-glass');
        if (glass) {
            // 1. Töm glaset och ta bort gamla animationer direkt
            glass.classList.remove('anim-drain', 'anim-fill');
            void glass.offsetWidth; 
            
            // 2. VÄNTA 800ms (medan "YEAST"-texten tonar in) och fyll sedan på!
            setTimeout(() => {
                glass.classList.add('anim-fill');
            }, 800);
        }
    }

    // Uppdatera vilken vy som är aktiv nu för nästa gång vi klickar
    currentActiveView = viewName;

    // --- UPPDATERA MENYN ---
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        const clickEvent = item.getAttribute('onclick');
        if (clickEvent && clickEvent.includes(`'${viewName}'`)) {
            item.classList.add('active');
        }
    });
  // --- UPPDATERA MENYN ---
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        const clickEvent = item.getAttribute('onclick');
        if (clickEvent && clickEvent.includes(`'${viewName}'`)) {
            item.classList.add('active');
        }
    });

// --- NY FIX: Brutal scroll till toppen ---
    setTimeout(() => {
        // Hoppa direkt till toppen utan 'smooth' för att undvika konflikter
        window.scrollTo(0, 0);
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }, 10);
}


// --- VISA CLAIM-RUTAN FÖR NYA ENHETER ---
function showAddDevice() {
    // Gömmer alla vanliga vyer (Dashboard, Lab, Settings etc)
    document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
    
    // Visar Claim-rutan
    const claimContainer = document.getElementById('claim-container');
    if (claimContainer) claimContainer.style.display = 'flex';
    
    // Sätter en avvikande färg på knappen som en liten detalj
    const claimBtn = document.getElementById('btn-claim');
    if (claimBtn) {
        claimBtn.innerText = "AKTIVERA NY ENHET";
    }
}

// Och se till att denna finns för att tända ikonerna!
function setActive(clickedElement) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    clickedElement.classList.add('active');
}

// Denna behövs för att slutföra inloggningen efter en redirect (på mobil)
auth.getRedirectResult().catch((error) => {
    console.error("Redirect-fel:", error);
});


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

            // 1. Temperaturer
            const displayTemp = convertTemp(latest.temp).toFixed(1) + '°' + currentTempUnit;
            document.getElementById('temp-beer-val').innerText = displayTemp;
            document.querySelector('.beer-temp').setAttribute('data-text', displayTemp);
            document.getElementById('air-temp-val').innerText = convertTemp(latest.air_temp).toFixed(1) + '°' + currentTempUnit;

            // 2. Info
            document.getElementById('strain-val').innerText = (latest.strain || "IRISH ALE").toUpperCase();
            document.getElementById('profile-val').innerText = latest.profile || "LOW ESTER";
            
            const action = (latest.action || "IDLE").toUpperCase();
            document.getElementById('action-val').innerText = action;

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


         // 4. Status (Hämta direkt från C++)
            document.getElementById('status-text').innerText = latest.status.toUpperCase();
            
            // 5. Dagar (Hämta direkt från C++)
            const currentDay = latest.day || 0;
            const phaseDay = latest.phase_day || 0;

            // 6. Progress (Grafisk bar)
            const targetDays = 14; 
            const percent = Math.min((currentDay / targetDays) * 100, 100).toFixed(0);

            // 7. Skriv ut till skärmen!
            const dayValEl = document.getElementById('day-val');
            const phaseDayValEl = document.getElementById('phase-day-val');

            if (dayValEl) dayValEl.innerText = formatDaysToHuman(currentDay);
            if (phaseDayValEl) phaseDayValEl.innerText = formatDaysToHuman(phaseDay);
            
            document.getElementById('progress-percent').innerText = percent + "%";
            document.getElementById('progress-fill').style.width = percent + "%";
            const targetTemp = latest.target_temp || 0; 
            const targetTempElement = document.getElementById('target-temp-val');
            if (targetTempElement) {
                targetTempElement.innerText = convertTemp(targetTemp).toFixed(1) + '°' + currentTempUnit;
            }
            
            // Skicka den sorterade datan till grafen
            updateChart(sortedData);
        }
    } catch (error) {
        console.error("Kunde inte hämta data:", error);
    }
}

//Grafen
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

    const gradient = ctx.createLinearGradient(0, 0, 0, 120);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)'); 
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');   

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

// --- 5. BUBBEL-MOTOR (Startar automatiskt) ---
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

// --- 6. KNAPPAR FÖR LOGIN/LOGOUT (Viktigt!) ---
// --- KNAPPAR FÖR LOGIN ---
const loginBtn = document.getElementById('btn-login');

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        
        // Försök med Popup först, men fånga upp om mobilen blockerar den
        auth.signInWithPopup(provider).catch((error) => {
            if (error.code === 'auth/popup-blocked' || error.code === 'auth/cancelled-popup-request') {
                // Om popup blockeras (vanligt på mobil), kör redirect istället
                auth.signInWithRedirect(provider);
            } else {
                console.error("Inloggningsfel:", error);
                alert("Kunde inte logga in: " + error.message);
            }
        });
    });
}

// --- 7. KOPPLA ENHET (CLAIM) ---
if(document.getElementById('btn-claim')) {
    document.getElementById('btn-claim').addEventListener('click', async () => {
        const user = auth.currentUser;

        // 1. KONTROLL: Är du inte inloggad? Gå till Login-skärmen direkt!
        if (!user) {
            showView('login');
            return;
        }

        // 2. Om du ÄR inloggad, läs av fälten och fortsätt som vanligt
        const macInput = document.getElementById('input-mac').value.trim().toUpperCase();
        const nicknameInput = document.getElementById('input-nickname').value.trim() || "Min YeastMaster";
        
        // 3. Kolla så att MAC-adressen är tillräckligt lång
        if (macInput.length < 12) {
            alert("Ange ett giltigt ID!");
            return;
        }

        try {
            const res = await fetch(`${API_BASE}/claim-device`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    uid: user.uid,
                    device_id: macInput,
                    name: nicknameInput
                })
            });

            if (res.ok) {
                alert("Enhet kopplad! Laddar om...");
                location.reload(); // Enkelt sätt att uppdatera vyn
            }
        } catch (err) {
            console.error("Claim failed:", err);
        }
    });
}

// LOGGA UT (DEN SÄKRA VERSIONEN)
if(document.getElementById('btn-logout')) {
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

let selectedStrains = []; // Här sparar vi ID:n på de 10 utvalda

function renderYeastLibrary(filter = "") {
    const grid = document.getElementById('yeast-grid');
    const tooltip = document.getElementById('yeast-tooltip');
    if (!grid) return; 
    
    grid.innerHTML = "";
    const searchTerm = filter.toLowerCase();

    const filtered = yeastStrains.filter(s => {
        const nameMatch = s.name.toLowerCase().includes(searchTerm);
        const tagMatch = s.tags && s.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        const styleMatch = s.styles && s.styles.toLowerCase().includes(searchTerm);
        
        return nameMatch || tagMatch || styleMatch;
    });

    filtered.forEach(yeast => {
        const isSelected = selectedStrains.includes(yeast.id);
        const isCustom = yeast.isCustom ? 'custom-profile' : ''; 
        const isHouse = yeast.isHouseStrain ? 'house-strain' : ''; 
        
        const card = document.createElement('div');
        card.className = `yeast-card ${isCustom} ${isHouse} ${isSelected ? 'selected' : ''}`;
        
        const icon = yeast.isHouseStrain ? ' 🦠' : '';

        // HELT REN HTML NU: Bara rubriken och eventuell ikon!
        card.innerHTML = `
            <h3>${yeast.name}${icon}</h3>
        `;

        let clickTimer = null;
        let touchTimer = null;
        let isLongPress = false;

        card.onmousemove = (e) => {
            if (tooltip) {
                tooltip.style.display = "block";
                tooltip.style.left = (e.clientX + 15) + "px";
                tooltip.style.top = (e.clientY + 15) + "px";
                tooltip.innerHTML = `<strong>${yeast.name}</strong><br>${formatTempText(yeast.temp)}<br>${yeast.tags.join(', ')}`;
            }
        };
        card.onmouseleave = () => { if(tooltip) tooltip.style.display = "none"; };

        card.onclick = () => {
            if (isLongPress) return; 
            if (clickTimer) clearTimeout(clickTimer);
            clickTimer = setTimeout(() => {
                toggleFavorite(yeast.id);
            }, 250); 
        };

        card.ondblclick = () => {
            clearTimeout(clickTimer); 
            openYeastModal(yeast);
        };

        card.addEventListener('touchstart', () => {
            isLongPress = false;
            touchTimer = setTimeout(() => {
                isLongPress = true; 
                openYeastModal(yeast);
            }, 500); 
        }, {passive: true});

        card.addEventListener('touchend', () => clearTimeout(touchTimer));
        
        card.addEventListener('touchmove', () => {
            clearTimeout(touchTimer);
            isLongPress = true; 
        }, {passive: true});

        grid.appendChild(card);
    }); 
}

function openYeastDetail(yeast) {
    const detail = document.getElementById('yeast-detail-view');
    const content = document.getElementById('yeast-detail-content');
    
    content.innerHTML = `
        <h1 style="color:var(--accent-color)">${yeast.name}</h1>
        <p style="opacity:0.6; font-size:1.1rem;">${yeast.origin} | ${yeast.temp}</p>
        <hr style="border:0; border-top:1px solid #222; margin:20px 0;">
        <div style="background:#111; padding:20px; border-radius:10px;">
            <h3>Beskrivning</h3>
            <p>${yeast.desc}</p>
            <h3 style="margin-top:20px;">Passar till</h3>
            <p>${yeast.styles}</p>
        </div>
        <button class="btn-primary" style="margin-top:30px;" onclick="toggleFavorite('${yeast.id}'); closeYeastDetail();">
            ${selectedStrains.includes(yeast.id) ? 'TA BORT FRÅN MINA 10' : 'VÄLJ DENNA JÄST'}
        </button>
    `;
    history.pushState({ view: 'yeast-detail' }, "");
    detail.style.display = "block";
}

function closeYeastDetail() {
    document.getElementById('yeast-detail-view').style.display = "none";
}

function toggleFavorite(id) {
    const index = selectedStrains.indexOf(id);
    if (index > -1) {
        selectedStrains.splice(index, 1); // Ta bort om den redan fanns
    } else {
        if (selectedStrains.length < 10) {
            selectedStrains.push(id); // Lägg till om vi inte nått 10
        } else {
            alert("Du kan bara synka 10 stammar åt gången!");
        }
    }
    document.getElementById('fav-count').innerText = selectedStrains.length;
    renderYeastLibrary(document.getElementById('yeast-search').value);
}

// Koppla sökfältet
document.getElementById('yeast-search').addEventListener('input', (e) => {
    renderYeastLibrary(e.target.value);
});

// Initiera biblioteket när sidan laddas
renderYeastLibrary();

window.onpopstate = function(event) {
    // 1. Kolla om vi har en "pop-up" öppen (Detaljvyn eller Info-modalen)
    const detail = document.getElementById('yeast-detail-view');
    const modal = document.getElementById('yeast-info-modal');
    
    // Stäng detaljvyn om den är öppen
    if (detail && detail.style.display === "block") {
        detail.style.display = "none";
        return; // Stoppa koden här så vi inte byter flik i bakgrunden
    }
    
    // Stäng modaler (inforutor) om de är öppna
    if (modal && modal.style.display === "flex") {
        modal.style.display = "none";
        document.body.style.overflow = ''; 
        return; // Stoppa koden här
    }

    // 2. Vilken huvudflik ska vi backa till? (Läs historiken/brödsmulan)
    if (event.state && event.state.view) {
        // Eftersom vi hanterar 'yeast-detail' ovanför, vill vi inte skicka det till showView
        if (event.state.view !== 'yeast-detail') {
            // False betyder: "Gör ingen NY brödsmula, vi backar ju!"
            showView(event.state.view, false);
        }
    } else {
        // Om användaren på något sätt backar förbi den allra första sidan, tvinga dem till Home
        showView('soul', false);
    }
};

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    // Spara valet i webbläsaren så det komms ihåg nästa gång
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    
    // --- NYTT: Tvinga grafen att rita om sig med rätt färger! ---
    if (typeof initLabChart === 'function') {
        initLabChart();
    }
}

function setAccent(color) {
    document.documentElement.style.setProperty('--accent-color', color);
    localStorage.setItem('accentColor', color);
    
    // VIKTIGT: Uppdatera grafen direkt så linjen byter färg
    if (beerChart) {
        beerChart.data.datasets[0].borderColor = color;
        beerChart.update();
    }
}

function setActive(clickedElement) {
    // Ta bort 'active' klassen från alla nav-items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Lägg till 'active' på den vi just klickade på
    clickedElement.classList.add('active');
}

// ==========================================
// THE ARCANE LAB (Interaktiv Profilbyggare)
// ==========================================

let labChart;

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
    day: 5.0,
    isDragging: false,
    color: '#8CC63F'
};

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
        ctx.fillText('DRY HOP', xPix, top - 5);

        ctx.beginPath();
        ctx.arc(xPix, (top + bottom) / 2, 6, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
    }
};

Chart.register(dryHopPlugin);

function toggleDryHopLine() {
    dryHopData.enabled = !dryHopData.enabled;
    const btn = document.getElementById('btn-add-hops');
    const textInfo = document.getElementById('hop-schedule-text');
    
    if (dryHopData.enabled) {
        btn.innerText = "- REMOVE DRY HOPS";
        btn.classList.add('active');
        textInfo.style.display = 'block';
        updateSummaryText();
    } else {
        btn.innerText = "+ ADD DRY HOPS";
        btn.classList.remove('active');
        textInfo.style.display = 'none';
        if(labChart) labChart.canvas.style.cursor = 'default';
    }
    if (labChart) labChart.update('none');
}

function updateSummaryText() {
    // Uppdatera Temperaturer
   document.getElementById('val-t1').innerText = profilePoints[0].y.toFixed(1) + '°' + currentTempUnit;
    document.getElementById('val-t3').innerText = profilePoints[2].y.toFixed(1) + '°' + currentTempUnit;
    document.getElementById('val-t4').innerText = profilePoints[4].y.toFixed(1) + '°' + currentTempUnit;
    
    // HÄR VAR FELET! Den hämtade temp från fel punkt. Nu hämtar den från punkt 4 (Cold Crash)
    document.getElementById('val-t4').innerText = profilePoints[4].y.toFixed(1); 

    // Uppdatera Dagar
    document.getElementById('val-d2').innerText = Math.round(profilePoints[1].x); // Slut Primary
    document.getElementById('val-d3').innerText = Math.round(profilePoints[2].x); // Start Cleanup
    document.getElementById('val-d4').innerText = Math.round(profilePoints[4].x); // Slut Cold Crash
    
    // Slut Condition är nu punkt 5
    const conditionElement = document.getElementById('val-d5');
    if (conditionElement) conditionElement.innerText = Math.round(profilePoints[5].x);

    // Torrhumling
    if (typeof dryHopData !== 'undefined' && dryHopData.enabled) {
        const hopVal = document.getElementById('hop-day-val');
        if (hopVal) hopVal.innerText = dryHopData.day.toFixed(1);
    }
}

// --- INITIALISERAR GRAFEN OCH DRAG-LOGIKEN ---
function initLabChart() {
    if (profilePoints && profilePoints.length < 6) {
        const p0 = profilePoints[0] || {x: 0, y: 19};
        const p1 = profilePoints[1] || {x: 5, y: 22};
        const p2 = profilePoints[2] || {x: 8, y: 3};
        const p3 = profilePoints[3] || {x: 14, y: 3};

        profilePoints = [
            { x: p0.x, y: p0.y },
            { x: Math.max(p0.x + 0.5, p1.x - 1.5), y: p0.y },
            { x: p1.x, y: p1.y },
            { x: Math.max(p1.x + 0.5, p2.x - 1.0), y: p1.y },
            { x: p2.x, y: p2.y },
            { x: p3.x, y: p3.y }
        ];
    }

    const canvas = document.getElementById('lab-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // FÖRSTÖR DEN GAMLA GRAFEN INNAN VI RITAR EN NY
    if (typeof labChart !== 'undefined' && labChart !== null) {
        labChart.destroy();
    }

    // --- LIVE-KOLL AV TEMAT ---
    const isLightMode = document.body.classList.contains('light-mode');
    const isMobile = window.innerWidth <= 768;

    // --- FÄRGER OCH VARIABLER ---
    const themeAccent = '#f4c95d'; 
    const pointFill = '#888888';   
    const lineWidth = isLightMode ? 2 : 3; 
    
    const dotSize = isMobile ? 8 : 5;         
    const hoverSize = isMobile ? 12 : 8;      
    const touchMagnet = isMobile ? 25 : 10;   

    // GRADIENT (Måste definieras här inne, annars finns den inte!)
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, isLightMode ? 'rgba(244, 201, 93, 0.15)' : 'rgba(244, 201, 93, 0.4)'); 
    gradient.addColorStop(1, 'rgba(244, 201, 93, 0.0)');

    // AXEL-FÄRGER
    const gridColor = isLightMode ? '#ebebeb' : '#222222';
    const gridBorderColor = isLightMode ? '#cccccc' : '#444444'; // För den yttre ramen
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
                    borderDash: ctx => (ctx.p0DataIndex === 1 || ctx.p0DataIndex === 3) ? [6, 6] : undefined,
                    lineWidth: 1.5,
                    borderColor: ctx => {
                        const isLightNow = document.body.classList.contains('light-mode');
                        return (ctx.p0DataIndex === 1 || ctx.p0DataIndex === 3) ? (isLightNow ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.3)') : themeAccent;
                    }
                }
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: { top: 30, right: 30, bottom: 10, left: 10 }
            },
  scales: {
                // --- NYHET: En svagare och elegantare Y-axel ---
                y: {
                    type: 'linear',
                    min: currentTempUnit === 'F' ? 28 : -2,
                    max: currentTempUnit === 'F' ? 104 : 40,
                    grid: { 
                        // BYT UT FÄRGEN: rgba(255, 255, 255, 0.08) är en extremt svag vit dimma
                        color: 'rgba(255, 255, 255, 0.08)', // 92% genomskinligt grid!
                        borderColor: gridBorderColor,
                        tickLength: 8 
                    },
                    ticks: { 
                        color: '#888888', // Gör siffrorna gråa istället för kritvita
                        font: { family: 'Lexend', weight: '600' },
                        padding: 6 
                    },
                    title: { display: true, text: `Temp (°${currentTempUnit})`, color: textColor, font: { family: 'Lexend', weight: '800' } }
                },
                // --- NYHET: Samma svaga grid även på X-axeln ---
                x: {
                    type: 'linear',
                    // ... (behåll min/max för x som förut) ...
                    grid: { 
                        color: 'rgba(255, 255, 255, 0.08)' // Samma dimmiga färg
                    },
                    ticks: { 
                        color: '#888888', // Gråa siffror här med
                        font: { family: 'Lexend', weight: '600' }
                    },
                    title: { display: true, text: 'Days', color: textColor, font: { family: 'Lexend', weight: '800' } }
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

                drawText('PRIM', 0, 1);    
                drawText('CLEAN', 2, 3);   
                drawText('COLD CRASH', 3, 4, 15, 5);      
                drawText('COND', 4, 5);

                ctx.restore();
            }
        }]
    });

    // --- DRAG LOGIKEN FORTSÄTTER HÄR NERE ---
    let isDragging = false;
    let dragIndex = -1;
    let isDraggingDryHop = false; 

    canvas.addEventListener('pointerdown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const xPos = e.clientX - rect.left;
        let xVal = labChart.scales.x.getValueForPixel(xPos);

        const hopMagnet = isMobile ? 1.5 : 0.6; 
        
        if (typeof dryHopData !== 'undefined' && dryHopData.enabled) {
            if (Math.abs(xVal - dryHopData.day) < hopMagnet) {
                isDraggingDryHop = true;
                canvas.style.cursor = 'ew-resize'; 
                return; 
            }
        }

        const points = labChart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false);
        if (points.length > 0) {
            isDragging = true;
            dragIndex = points[0].index;
            canvas.style.cursor = 'grabbing';
        }
    });

    canvas.addEventListener('touchstart', (e) => {
        if (isDragging || isDraggingDryHop) e.preventDefault();
        const points = labChart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false);
        if (points.length > 0 || isDraggingDryHop) e.preventDefault(); 
    }, { passive: false });

    window.addEventListener('pointermove', (e) => {
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

            if (dragIndex === 0) xVal = 0; 
            else if (dragIndex === 1) xVal = Math.max(0, Math.min(xVal, profilePoints[2].x - minGap));
            else if (dragIndex === 2) xVal = Math.max(profilePoints[1].x + minGap, Math.min(xVal, profilePoints[3].x));
            else if (dragIndex === 3) xVal = Math.max(profilePoints[2].x, Math.min(xVal, profilePoints[4].x - minGap));
            else if (dragIndex === 4) xVal = Math.max(profilePoints[3].x + minGap, Math.min(xVal, profilePoints[5].x));
            else if (dragIndex === 5) xVal = Math.max(profilePoints[4].x, xVal);

            if (dragIndex === 0 || dragIndex === 1) {
                yVal = Math.min(yVal, profilePoints[2].y);
                yVal = Math.max(yVal, profilePoints[4].y);
            } 
            else if (dragIndex === 2 || dragIndex === 3) yVal = Math.max(yVal, profilePoints[0].y);
            else if (dragIndex === 4 || dragIndex === 5) yVal = Math.min(yVal, profilePoints[0].y);

            profilePoints[dragIndex] = { x: xVal, y: yVal };

            if (dragIndex === 0) profilePoints[1].y = yVal;
            if (dragIndex === 1) profilePoints[0].y = yVal;
            if (dragIndex === 2) profilePoints[3].y = yVal;
            if (dragIndex === 3) profilePoints[2].y = yVal;
            if (dragIndex === 4) profilePoints[5].y = yVal;
            if (dragIndex === 5) profilePoints[4].y = yVal;

            const lastPointX = profilePoints[profilePoints.length - 1].x;
            labChart.options.scales.x.max = Math.max(16, lastPointX + 1);

            labChart.update('none'); 
            if (typeof updateSummaryText === 'function') updateSummaryText();
        }
    });

    window.addEventListener('pointerup', () => {
        if (isDraggingDryHop) {
            isDraggingDryHop = false;
            canvas.style.cursor = 'default';
            if (typeof updateSummaryText === 'function') updateSummaryText();
        }
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
        const zoomBtn = document.getElementById('btn-zoom');
        
        if (this.value !== "") {
            // En jäst är vald -> Göm texten och tona in grafen!
            if (placeholder) placeholder.style.display = 'none';
            if (chartArea) {
                chartArea.style.opacity = '1';
                chartArea.style.pointerEvents = 'auto'; // Slå på drag-funktionen
            }
            if (zoomBtn) zoomBtn.style.display = 'block';
        } else {
            // Inget är valt (eller man ångrade sig) -> Visa texten igen
            if (placeholder) placeholder.style.display = 'flex';
            if (chartArea) {
                chartArea.style.opacity = '0';
                chartArea.style.pointerEvents = 'none'; // Stäng av drag-funktionen
            }
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

const yeastDescriptions = {
    // ==========================================
    // --- DRY YEASTS (Torrjäst) ---
    // ==========================================
    "us-05": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle US-05 (American Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP001 (White Labs), Wyeast 1056, M44
        </p>
        <p>The uncrowned king of the brewing world when it comes to clean, crisp American Ales and West Coast IPAs. It is an extremely reliable workhorse that puts malt and hops in the driver's seat.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Temperature Range (15-22 °C)</h4>
        <p>To get that iconic, razor-sharp American profile, we want to start around 18 °C. If we go too hot, it can throw off peach esters, which we usually want to avoid in a clean IPA.</p>
        <h4 style="margin-top: 15px; color: #ccc;">2. Medium Flocculation (Patience!)</h4>
        <p>US-05 likes to hover in the beer for quite a while. This is great for fermentation (it finishes dry and efficient), but it means the beer can remain hazy for a long time if we don't crash it hard at the end.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard / Low Ester:</strong> Nails the temp at 18 °C for an extremely clean job. Finishes off with a diacetyl rest at 21 °C to ensure every last sugar is eaten before a hard cold crash.</li>
            <li><strong style="color: #fff;">West Coast Crisp:</strong> Starts cool at 18°C for maximum cleanliness, then aggressively ramps to 22°C. Leaves a bone-dry finish where your hops will shine.</li>
            <li><strong style="color: #fff;">Pseudo-Lager:</strong> Ferments at the absolute bottom of the strain's tolerance (15°C). Suppresses all ale characteristics, making it perfect for a mock-Pilsner.</li>
        </ul>
    `,

    "s-04": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle S-04 (English Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP007 (White Labs), Wyeast 1098
        </p>
        <p>The British sprinter! Loved for its ability to build fantastic fruity esters and its brutal speed. The first choice for Bitters, Porters, Stouts, and fast Pale Ales.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Temperature Range (15-20 °C)</h4>
        <p>S-04 loves to create esters (marmalade, dark berries). But if allowed to go too hot initially, it turns into an uncontrolled fruit bomb. Start strictly at 18 °C for elegance.</p>
        <h4 style="margin-top: 15px; color: #ccc;">2. Extreme Flocculation (The Brick)</h4>
        <p>When S-04 considers itself done, it falls to the bottom and forms a yeast cake so firm you can almost cut it. We must heat it up before it goes to sleep!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard / Fruity:</strong> Starts like a freight train at 18°C to create controlled fruitiness, then raises to 21°C. This heat bump wakes the yeast to clean up butterscotch before the cold crash.</li>
            <li><strong style="color: #fff;">Dark & Malty (18°C):</strong> Locked steadily at 18°C. This suppresses the fruitier esters just enough to let coffee and chocolate notes take center stage in a Stout or Porter.</li>
        </ul>
    `,

    "w-34-70": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Saflager W-34/70 (German Lager)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP830 (White Labs), Wyeast 2124
        </p>
        <p>The king of bottom-fermenting! This famous strain from the Weihenstephan brewery in Germany is probably the most used lager yeast in the world. It delivers that iconic, crisp, and clean flavor profile we love in a Pilsner or Helles.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The cold is your friend (9-15 °C)</h4>
        <p>W-34/70 is a true winter swimmer. By fermenting it at the bottom of its tolerance (around 10-12 °C), you suppress the production of fruity esters and sulfur, giving the beer its clean character.</p>
        <h4 style="margin-top: 15px; color: #ccc;">2. Butterscotch warning (Diacetyl)</h4>
        <p>Because it works cold and slow, lager yeast is notorious for leaving diacetyl (tastes like butter/butterscotch) behind. A significant temperature increase at the end is not a tip – it's a requirement!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Traditional Lager:</strong> Holds firmly at 11°C so the yeast works undisturbed. Then pushes to 16°C to clean up the butterscotch before a massive 28-day cold lagering phase.</li>
            <li><strong style="color: #fff;">Quick Lager:</strong> The modern approach. Pitches at 13°C for faster yeast growth, finishes the cleanup with a warm Diacetyl Rest by day 10, cutting the lagering time in half.</li>
            <li><strong style="color: #fff;">Warm/Brulosophy:</strong> The infamous warm-fermented lager hack! Runs at ale temperatures (19°C). W-34/70 handles heat surprisingly well, finishing fast and clean without off-flavors.</li>
        </ul>
    `,

    "be-256": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle BE-256 (The Abbey Machine)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP530, Wyeast 3787 (Similar Trappist character)
        </p>
        <p>Formerly known as "Abbaye". This is a fast and brutal Belgian yeast that loves high-gravity worts. Perfect for dark, malty Belgians like Dubbel, Tripel, and Quadrupel. It attenuates quickly and creates a fantastic symphony of dark fruit.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Fast and strong (15-25 °C)</h4>
        <p>It tolerates very high alcohol (up to 11%). But if you start it too hot, it can throw off unwanted solvent notes (fusels). The key is a strict start that is later let loose.</p>
        <h4 style="margin-top: 15px; color: #ccc;">2. Esters of dried fruit</h4>
        <p>It is known for bringing out plum, fig, and raisin, which marries incredibly well with caramel malts and Belgian candi syrup.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Belgian Strong:</strong> Starts cool at 18 °C. The yeast is aggressive initially, so we hold the beast back! Then we let the machine ramp up towards 24 °C to stress out the complex Belgian esters before crashing.</li>
        </ul>
    `,

    "wb-06": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle WB-06 (The Wheat Beer Master)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP380, M20 (Bavarian Wheat characteristics)
        </p>
        <p>The classic German Weissbier yeast in dry form! Do you want a cloudy, golden Hefeweizen smelling of foam banana and clove? Then this is the one to use.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. You are behind the wheel (18-24 °C)</h4>
        <p>In wheat beers, the yeast IS the flavor. Low temperatures (18-19 °C) yield lots of phenols (pepper and clove). High temperatures (22-24 °C) yield extreme amounts of isoamyl acetate (banana). You choose!</p>
        <h4 style="margin-top: 15px; color: #ccc;">2. It refuses to flocculate</h4>
        <p>A German Weissbier *should* be cloudy. WB-06 is designed to remain in suspension, giving that nice, milky appearance in the glass.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Banana Bomb:</strong> Run it hot! Starts at 22°C and ramps to 23°C to unlock massive amounts of isoamyl acetate (foam banana) and ensure complete attenuation.</li>
            <li><strong style="color: #fff;">Balanced Clove:</strong> Held steadily lower (18-20°C). The banana takes a back seat, allowing the spicy clove and wheat malt character to dominate.</li>
        </ul>
    `,

    "verdant": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Verdant IPA (The Juice Machine)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1318 (London Ale III)
        </p>
        <p>Developed alongside Verdant Brewing Co., this is the ultimate yeast for NEIPA and Hazy IPA. It produces massive amounts of apricot and vanilla esters that back up modern hops perfectly.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Master of Biotransformation</h4>
        <p>This yeast is phenomenal at taking dry hops during active fermentation and chemically rebuilding the hop oils into even fruitier flavors.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Juicy NEIPA:</strong> Starts safely at 19 °C to build a solid, fruity base without fusel alcohols. Then the temperature wanders up to 22 °C to stress out the final juicy esters.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: It flocculates rather poorly, which is EXACTLY what we want to retain "The Haze".</i></p>
    `,

    "voss": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Voss Kveik (The Viking)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP4000, Omega OYL-061
        </p>
        <p>The Norwegian powerhouse that breaks absolutely all rules we learned about brewing. It ferments scorching hot, furiously fast, and leaves clean, light orange notes behind.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Extreme Heat (30-40 °C)</h4>
        <p>While other yeasts would have died or created undrinkable rocket fuel at 38 °C, Voss thrives there. It needs no fridge, just a heat mat and lots of yeast nutrients!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Hot & Fast:</strong> Ferments at a scorching 38°C! Fermentation is extremely violent, throws massive orange esters, and finishes completely in just 3-4 days before chilling.</li>
            <li><strong style="color: #fff;">Clean Pseudo:</strong> Dropped down to "normal" summer temperatures (25-28°C). Ferments slower but leaves a shockingly clean profile without the intense citrus notes.</li>
        </ul>
    `,

    "nottingham": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Nottingham (The Workhorse)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP039, M36
        </p>
        <p>Perhaps the most versatile yeast ever cultivated. "Notty" doesn't care what you throw at it. Imperial Stout? Yep. Cider? Absolutely. IPA? No problem. It is extremely neutral, reliable, and cleans up after itself exemplary.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Temperature Chameleon (10-22 °C)</h4>
        <p>In the upper range, it behaves like a clean ale yeast. Pull it down to 12-14 °C? Then it basically becomes a cheat-code lager yeast for incredibly crisp pseudo-lagers!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard Ale:</strong> Holds 18 °C for a clean and fast primary fermentation, then ramps up to 20-21 °C. Even workhorses need a Diacetyl Rest to hide the butterscotch.</li>
            <li><strong style="color: #fff;">Pseudo Lager:</strong> Pushes "Notty" to its thermal floor at 14°C. At this temperature, it stops acting like an ale yeast and produces an incredibly crisp, clean pseudo-lager without the sulfur.</li>
        </ul>
    `,

    "belle-saison": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Belle Saison (The Dry Belgian)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> Wyeast 3711 (French Saison)
        </p>
        <p>Saison yeast is wild, untamed, and fantastic. Designed to eat up every single sugar it finds and leave a bone-dry, peppery beer behind.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Diastaticus (Eats everything)</h4>
        <p>This yeast carries a gene (STA1) that allows it to break down complex sugars. The result? A beer that can ferment down to 1.000 FG.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Dry & Peppery:</strong> Starts around 20 °C so fermentation takes hold without becoming solvent-like. Then we take the limiters off! It free-rises all the way up to 28 °C to build max flavor profile.</li>
        </ul>
    `,

    "t-58": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle T-58 (The Peppery Companion)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP570 (Similar spice profile)
        </p>
        <p>A truly unique, ester- and phenol-driven yeast. If BE-256 is dark fruit, then T-58 is black pepper and spice. Often used in complex Belgian ales or Trappist beers.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Leaves residual sweetness (15-24 °C)</h4>
        <p>T-58 doesn't attenuate as hard as many other Belgians. This leaves some residual sweetness and body in the beer, balancing the sharp, peppery notes.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Spicy Belgian:</strong> Starts at 18 °C. The phenols will be produced in masses anyway. Then ramps up slowly to 22 °C to round off the flavors and ensure fermentation doesn't stall too early.</li>
        </ul>
    `,

    "s-23": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Saflager S-23 (The Fruity Bohemian)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP802, Wyeast 2278 (Czech/Bohemian roots)
        </p>
        <p>Originating from the famous VLB institute in Berlin, this is the wild child of lager yeasts. While W-34/70 is laser-focused and clean, S-23 is loved for producing slightly more fruity and estery notes, making it fantastic for Bohemian Pilsners or Baltic Porters.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Ester Profile (9-15 °C)</h4>
        <p>If you ferment this at the warmer end of the lager spectrum (13-15 °C), it will give off beautiful, subtle notes of apple and pear that play incredibly well with spicy Saaz hops.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Crisp German (10 °C):</strong> Keep it cold and steady for a traditional, clean profile. D-rest at 15 °C on Day 10.</li>
            <li><strong style="color: #fff;">Bohemian Fruit / Fruity Lager:</strong> Start slightly warmer (12-13°C) to unlock those unique S-23 esters. Perfect for a malt-forward Czech amber.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: S-23 can sometimes struggle to finish the last gravity points. A solid, warm Diacetyl Rest is crucial to help it cross the finish line.</i></p>
    `,

    "s-33": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle S-33 (The Body Booster)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP006 (Bedford British)
        </p>
        <p>Often misunderstood, S-33 is a secret weapon. It is incapable of eating complex malt sugars (maltotriose negative), which means it will ALWAYS leave your beer thick, full-bodied, and slightly sweet.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Not just for Belgians</h4>
        <p>Despite being labeled a Belgian ale yeast, it produces very little phenols (spice). Instead, it's increasingly used in Hazy IPAs and Milk Stouts purely for its ability to build an incredible mouthfeel.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Thick Ale (18 °C):</strong> Keep it cool to minimize esters. You will end up with a luscious, thick dark beer with great foam retention. Or use it as a cheat code for thick NEIPAs!</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: Don't panic if your Final Gravity is high (e.g., 1.020). S-33 simply cannot ferment it any further. It's done!</i></p>
    `,

    "diamond": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Diamond (The Munich Master)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP830, Wyeast 2124 (Weihenstephan lineage)
        </p>
        <p>A true German lager yeast originating from the Doemens Institute in Munich. Diamond is renowned for its robust nature and ability to produce incredibly clean, crisp, and authentic German lagers without the fuss.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Pristine and Professional</h4>
        <p>While some lager yeasts can throw sulfur (rhino farts) during fermentation, Diamond is generally very well-behaved and produces a highly polished beer that lets the Pilsner malt shine.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Clean Lager / Munich Crisp:</strong> The traditional way. Hold 10 °C for 7-10 days, followed by a strict Diacetyl Rest at 16 °C.</li>
            <li><strong style="color: #fff;">Fast Helles (14 °C):</strong> Diamond handles slightly warmer temperatures remarkably well. Run it at 14 °C to cut your fermentation time in half!</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: Diamond has fantastic attenuation. It will dry out a Pilsner beautifully, making it extremely refreshing.</i></p>
    `,

    "novalager": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand NovaLager (The Bio-Engineered Miracle)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> Unique Hybrid (Saccharomyces pastorianus lineage)
        </p>
        <p>A true game-changer. NovaLager is a modern hybrid yeast (a novel Saccharomyces pastorianus lineage) designed to ferment like an ale, but taste exactly like a clean lager.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Breaking the rules (10-20 °C)</h4>
        <p>You no longer need 5 weeks and a dedicated lager fridge. NovaLager ferments cleanly at 18-20 °C with low ester production, no sulfur (H2S), and very low diacetyl.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">The Cheat Code (18 °C):</strong> Treat it like an ale! Primary at 18 °C for 5 days, ramp to 20 °C for 2 days to finish up, and crash. A clean lager in a week!</li>
            <li><strong style="color: #fff;">Modern Cold (14 °C):</strong> If you want absolute pristine perfection, ferment it at 14 °C. It's still significantly faster than traditional strains but delivers award-winning crispness.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: It has very high attenuation. Be prepared for your beer to dry out significantly, making the hop bitterness feel sharper.</i></p>
    `,

// ==========================================
    // --- LIQUID YEASTS (Flytande Jäst) ---
    // ==========================================

    "wlp001": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP001 California Ale (The West Coast King)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1056, US-05
        </p>
        <p>White Labs' crown jewel! This is the original strain that started the American craft beer revolution. Praised for its unparalleled cleanliness.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Letting the hops sing (20-23 °C)</h4>
        <p>This yeast has one single job: to ferment away the sugar and then step into the background so your expensive American hops can take the lead.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> Start crisp around 19.5 °C. We want zero esters and zero fusels. Then release up to 22 °C for a Diacetyl Rest. WLP001 is good at cleaning, but a little heat helps.</li>
            <li><strong style="color: #fff;">Low Ester:</strong> Drops the temperature down to 18 °C. Fermentation takes slightly longer, but yields an impossibly clean, lager-like ale profile.</li>
        </ul>
    `,

    "wlp300": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP300 Hefeweizen (The Banana Bomb)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 3068, M20
        </p>
        <p>This is the liquid gold standard for German wheat beer. Unlike dry wheat yeasts, this one is famous for producing massive, luscious amounts of banana aroma.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Temperament and Temperature (20-22 °C)</h4>
        <p>Pushing WLP300 above the 20-mark is the trick to unlocking the fruity isoamyl acetate (banana) esters and suppressing the clove.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> Held firmly at 19 °C. Focuses on the spicy clove phenols, keeping the banana esters subtle and balanced.</li>
            <li><strong style="color: #fff;">Classic:</strong> Ferment warm! Lock the temp at 20 °C and ramp to 22°C to let the banana party begin. Drop to serving temp (approx. 4 °C) for conditioning.</li>
        </ul>
    `,

    "wyeast-1968": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1968 (London ESB Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP002 (Fuller's)
        </p>
        <p>The legendary Fuller’s strain! This yeast is famous for leaving a wonderful, malty residual sweetness, and dropping out of suspension so fast it looks like cottage cheese.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Extreme Flocculation (Crucial!)</h4>
        <p>Because it drops like a stone the second it feels "done", you have to actively fight to keep it awake. If it goes to sleep too early, your beer will taste like a butterscotch candy (Diacetyl).</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard / ESB Clean:</strong> Starts cooler (18.5-19 °C) to keep the yeast focused on maltiness without throwing too much fruit. A solid diacetyl rest at 21 °C cleans up the butterscotch.</li>
            <li><strong style="color: #fff;">High Ester / ESB Fruity:</strong> For a true British fruit-bomb! We pitch warm (21-22 °C) and let it ramp to 23 °C. Expect massive notes of marmalade and jam.</li>
            <li><strong style="color: #fff;">Low Ester:</strong> The cheat-code for a super clean profile. Ferments low at 18 °C and crashes gently to avoid stressing the yeast.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: This yeast clears the beer so fast during the Cold Crash that you rarely need fining agents!</i></p>
    `,

    "wlp920": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP920 (Old Bavarian Lager)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 2206 (Bavarian Lager)
        </p>
        <p>A classic from southern Germany, known for a malty profile with a light touch of esters, making it perfect for Oktoberfest beers, Bocks, and dark lagers.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Malt Preserver</h4>
        <p>By keeping the fermentation cold and steady, we prevent the yeast from producing byproducts that would otherwise mask the delicate toasted and caramel notes from the Munich and Vienna malts.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Traditional Lager:</strong> The old-school way. Starts low at 10.5 °C for 10 full days, followed by a slow D-rest and a massive 28-day cold lagering phase.</li>
            <li><strong style="color: #fff;">Quick Lager:</strong> The modern approach. Pitches at 12.5 °C for faster yeast growth, finishes the cleanup by day 10, and cuts the lagering time in half.</li>
            <li><strong style="color: #fff;">Brulosophy:</strong> The warm-fermented lager hack! Runs at ale temperatures (19 °C). Surprisingly clean, but done in a fraction of the time.</li>
        </ul>
    `,

    "imperial-b45": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Imperial Yeast B45 (Gnome)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP550, Wyeast 3522 (Chouffe)
        </p>
        <p>An amazing classic Belgian yeast renowned for producing beautiful pear and peach esters paired with a light, peppery spiciness (phenols).</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Belgian Ramp</h4>
        <p>Belgian monks historically didn't use chillers. They pitched the yeast and let the natural exothermic heat of fermentation drive the temperature up. We want to mimic this to unlock the true Belgian character!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Classic:</strong> Starts at 20 °C and free-rises to 23.5 °C. This is the sweet spot for balancing the pear esters with the peppery phenols.</li>
            <li><strong style="color: #fff;">Spicy & High Ester:</strong> We push the yeast hard and hot! Starting at 21-22 °C and ramping to 25 °C forces the yeast to throw massive amounts of complex flavors. Perfect for a Belgian Strong.</li>
            <li><strong style="color: #fff;">Standard & Low Ester:</strong> Restrained (18-19 °C). Keeps the yeast calm for a more subtle Belgian blonde.</li>
        </ul>
    `,

    "wyeast-1084": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1084 (Irish Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP004 (Guinness)
        </p>
        <p>The Guinness strain! A true workhorse from Dublin that is incredibly versatile. It provides a rich, malty profile with a subtle hint of dark fruit and a touch of diacetyl that works perfectly in dark beers.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Loving the Dark Malts</h4>
        <p>This yeast was literally born to ferment roasted barley. It leaves just enough residual body to make a dry stout feel creamy rather than thin.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Dry Stout:</strong> Starts at a crisp 18 °C and ramps to 20 °C. This suppresses fruitiness and lets the coffee and chocolate notes from the malt take center stage.</li>
            <li><strong style="color: #fff;">Red/Malty & High Ester:</strong> Runs warmer (20-21.5 °C) to coax out those lovely jammy, dark berry esters that make an Irish Red Ale so special.</li>
            <li><strong style="color: #fff;">Standard & Low Ester:</strong> A fantastic, neutral base if you want to use this yeast for American styles or Porters.</li>
        </ul>
    `,

    "wyeast-3944": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 3944 (Belgian Witbier)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP400 (Hoegaarden)
        </p>
        <p>The king of wheat beers! Known for immense character, producing a complex blend of spicy phenols (pepper/clove) and fruity esters (banana/citrus).</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Keep it Cloudy</h4>
        <p>This yeast refuses to drop, and that's exactly what we want! We want the yeast and wheat proteins to stay in suspension for that milky, white appearance.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> Kept strictly at 19 °C. The fruitiness takes a back seat, and the clove/pepper phenols become the star of the show.</li>
            <li><strong style="color: #fff;">Classic Wit:</strong> A balanced 18 °C start, ramping to 21.5 °C. Notice the "Condition" phase sits at 6 °C instead of near freezing? This prevents the beer from clearing up too much!</li>
            <li><strong style="color: #fff;">Summer Wit & High Ester:</strong> Pushed warmer (20-23 °C). Expect massive amounts of citrus, orange peel, and banana.</li>
        </ul>
    `,

    "wlp833": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP833 (German Bock Lager)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 2487 (Ayinger)
        </p>
        <p>The heavyweight from Ayinger! The absolute king of maltiness. It leaves a fantastic malty sweetness and body, making it the obvious choice for Bocks, Doppelbocks, and Märzens.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Long Slumber</h4>
        <p>Bock yeast can be stubborn and slow. It needs time to properly attenuate high-gravity worts without creating rocket-fuel fusel alcohols.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Traditional Lager:</strong> Runs slightly warmer at 11 °C to speed up attenuation without sacrificing the clean, malty profile.</li>
            <li><strong style="color: #fff;">Trad. Bock:</strong> The authentic approach. A chilly 10 °C primary fermentation, a solid D-rest at 16 °C, and then a grueling 35-day lagering phase to achieve liquid perfection.</li>
            <li><strong style="color: #fff;">Fast Bock:</strong> When you can't wait. Pitched at 12 °C, warming to 17 °C. It finishes the job in just over three weeks but still delivers a massive malt backbone.</li>
        </ul>
    `,

    "wlp007": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP007 (Dry English Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> S-04, Wyeast 1098 (Whitbread)
        </p>
        <p>A heat-seeking missile! Known as the "Workhorse" yeast. It's incredibly fast, attenuates very dry, and drops like a rock when it's done.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Taming the Beast</h4>
        <p>Because 007 ferments so violently, it creates intense internal heat. Your fridge will work hard the first 48 hours to hold the temperature down to prevent solvent-like flavors.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">West Coast & Standard:</strong> Locks the beast in at 18.5-19 °C. At these cooler temperatures, WLP007 acts almost exactly like a clean American Ale yeast, making it perfect for dry IPAs.</li>
            <li><strong style="color: #fff;">Monster & High Ester:</strong> Start at 20-21 °C. If you are brewing a massive Imperial Stout or Barleywine, this profile gives the yeast the heat it needs to survive the high alcohol while throwing beautiful dark fruit esters.</li>
        </ul>
    `,

    "wyeast-1318": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1318 (London Ale III)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Verdant IPA (Boddingtons)
        </p>
        <p>The very foundation of the NEIPA revolution. This is the yeast that gave the world "Juice". It leaves a velvety mouthfeel and throws off beautiful esters of pineapple and grapefruit.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Biotransformation</h4>
        <p>Low flocculation helps keep the beer hazy, and its unique enzymes are fantastic at chemically altering your dry hops into even juicier compounds.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard & Low Ester:</strong> Kept at 18-19 °C. This provides a clean fermentation where the biotransformation of your massive dry hop additions takes center stage.</li>
            <li><strong style="color: #fff;">High Ester:</strong> Pitched at 21 °C and ramped to 23 °C. The added heat forces the yeast to produce more of its own tropical esters (peach/apricot) to blend with the hops.</li>
        </ul>
    `,

    "wyeast-2565": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 2565 (Kölsch)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP029 (Cologne)
        </p>
        <p>A true "hybrid" – technically an ale yeast, but it prefers working at near-lager temperatures. Known for an extremely crisp, clean, and almost vinous (white wine) profile.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Dusty Yeast</h4>
        <p>Wyeast 2565 is notoriously powdery. It refuses to clear up on its own. A long, cold lagering phase is absolutely mandatory to achieve that brilliant, golden Kölsch clarity.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard & Low Ester:</strong> Faster ale-like fermentation (18-19 °C). Still very clean, but finishes much quicker. Great for crisp Blonde Ales.</li>
            <li><strong style="color: #fff;">Authentic:</strong> The Cologne way! A chilly 14.5 °C primary fermentation, a slow D-rest at 18 °C, and a strict 2-week cold lagering. Tastes exactly like a German lager, but brewed with ale yeast.</li>
        </ul>
    `,

    "wlp002": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP002 English Ale (The Brick)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1968 (Fuller's Strain)
        </p>
        <p>The legendary Fuller’s strain! This yeast is famous for two things: leaving a wonderful, malty residual sweetness, and dropping out of suspension so fast it looks like cottage cheese.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Extreme Flocculation</h4>
        <p>Because it drops like a stone the second it feels "done", you have to actively fight to keep it awake. If it goes to sleep too early, your beer will taste like a butterscotch candy (Diacetyl).</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> A steady 19 °C fermentation, jumping up to 21 °C at the end to keep the yeast active for cleanup.</li>
            <li><strong style="color: #fff;">Low Ester:</strong> Keep it slightly cooler (18.5 °C) to retain even more unfermented sugars, giving your dark beers a massive, silky mouthfeel.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: When you Cold Crash this, the beer will become brilliantly clear almost overnight. No need for fining agents!</i></p>
    `,

    "wlp500": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP500 Trappist (The Monk's Madness)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1214 (Chimay)
        </p>
        <p>Sourced directly from the Chimay monastery. This is the yeast you want when brewing massive, complex Belgian Quads or fruity Tripels. It produces an explosion of plum, raisin, and distinct bubblegum notes.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Let it ride (18-22 °C... and beyond)</h4>
        <p>Belgian monks historically didn't use chillers. They pitched the yeast and let the natural exothermic heat of fermentation drive the temperature up. We want to mimic this!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> Start at 19 °C to suppress fusel alcohols, then slowly let it free-rise to 21 °C by Day 3 for an elegant fruit profile.</li>
            <li><strong style="color: #fff;">Monk's Madness:</strong> Pitch at 20 °C and ramp it aggressively to 25 °C! This stresses the yeast into throwing massive dark fruit and bubblegum flavors.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: It has very low flocculation. You will need a long, cold conditioning phase to drop this stubborn yeast out of the beer.</i></p>
    `,

    "wlp066": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP066 London Fog (The Haze Craze)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1318 (Close Relative)
        </p>
        <p>This is the liquid magic behind some of the best NEIPAs in the world. It leaves a velvety, creamy mouthfeel and throws off beautiful esters of pineapple and ruby red grapefruit.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Body Builder</h4>
        <p>Unlike West Coast yeasts, London Fog doesn't ferment all the complex sugars. It leaves a higher Final Gravity, which provides that thick, juice-like body that modern hazy IPAs require.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> Keep it locked at 19 °C. This provides a clean fermentation where the biotransformation of your dry hops takes center stage.</li>
            <li><strong style="color: #fff;">Smooth Juice:</strong> Start at 19 °C, but ramp to 22 °C by Day 8. The added heat forces the yeast to produce more of its own tropical esters to blend with the hops.</li>
        </ul>
    `,

    "wlp800": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP800 Pilsner Lager (The Czech Legend)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 2001 (Pilsner Urquell)
        </p>
        <p>The famous Pilsner Urquell strain. If you want to brew an authentic Bohemian Pilsner, look no further. It provides a rich, complex maltiness and a very smooth, rounded profile.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Diacetyl Debate</h4>
        <p>Historically, Czech Pilsners have a tiny, tiny hint of diacetyl (butter) in the background. If you want to be 100% true to style, you actually do a slightly shorter Diacetyl Rest than with German lagers!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Bohemian:</strong> Ferment low and slow. Ramp up to 12 °C for just 48 hours to clean up *most* of the butterscotch, then drop to lagering.</li>
            <li><strong style="color: #fff;">Traditional Lager:</strong> Run it slightly warmer (11°C) and do a full 5-day D-rest at 16 °C for a completely clean, modern interpretation of a Pilsner.</li>
        </ul>
    `,

    "wlp095": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP095 (Burlington Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Imperial A04, Omega OYL-052, "Conan"
        </p>
        <p>The legendary "Conan" strain! The yeast that originally put the Vermont style (Hazy IPA) on the map. Famous for producing intense notes of ripe peach and apricot.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Original Juice</h4>
        <p>Unlike London III, Burlington tends to attenuate slightly more, yielding a beer that is drier on the finish but still exceptionally "juicy" in its aroma.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Conan IPA & Standard:</strong> 19-21 °C. The classic Vermont curve. Gives a perfect balance between hop bitterness and stone-fruit esters.</li>
            <li><strong style="color: #fff;">High Ester:</strong> Pushed to 21 °C and ramping up to 23 °C. This stresses the yeast to maximize the peach and apricot notes.</li>
            <li><strong style="color: #fff;">Low Ester:</strong> Fermented cool (18 °C) to tame the fruitiness, making it behave more like a standard West Coast IPA yeast.</li>
        </ul>
    `,

"wlp090": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP090 San Diego Super</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> None directly. Similar to WLP001 but faster/higher flocc.
        </p>
        <p>A true giant in the craft beer world. It ferments blazingly fast, finishes with an impossibly crisp profile, and drops out of suspension like a rock. If you are brewing a highly hopped Double IPA or West Coast IPA, this is your weapon of choice.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> A reliable 19 °C fermentation, stepping up to 21 °C for a solid cleanup.</li>
            <li><strong style="color: #fff;">Low / High Ester:</strong> Adjust the starting temperature to either suppress or slightly elevate the subtle fruit notes to balance your hop bill.</li>
            <li><strong style="color: #fff;">Fast & Crisp:</strong> Pushes the yeast slightly warmer from the start (19.5 °C). This yeast is so clean that you can speed-run a West Coast IPA without generating off-flavors.</li>
        </ul>
    `,

    "wyeast-1272": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1272 (American Ale II)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP051 (California V)
        </p>
        <p>The fruitier cousin to standard American ale yeast (like US-05/WLP001). It produces a more complex, slightly nutty, and softer profile. It leaves a bit more residual sweetness, making it the absolute perfect choice for Amber Ales, Pale Ales, and Brown Ales.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard & Low Ester:</strong> Keeps the yeast grounded for a clean American profile, slightly suppressing its signature nutty notes.</li>
            <li><strong style="color: #fff;">Amber Nutty:</strong> Starts at 19.5 °C and ramps to 21 °C. This specific profile is designed to coax out the soft fruit and slightly nutty character that makes Amber ales shine.</li>
        </ul>
    `,

    "imperial-a24": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Imperial A24 (Dry Hop)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Blend of Barbarian (Conan) & Citrus strains.
        </p>
        <p>A modern marvel! This is a unique blend of two amazing IPA strains designed specifically to handle massive dry-hop charges. It provides an incredible blast of peach, apricot, and citrus while keeping the hops in suspension for that perfect haze.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> A steady 19 °C baseline that balances the yeast expression with your hops.</li>
            <li><strong style="color: #fff;">Hazy Citrus:</strong> Starts warm at 20 °C and pushes to 22.5 °C. Stresses the blend to produce massive amounts of its own citrus esters to back up your tropical hops.</li>
            <li><strong style="color: #fff;">Dry Hop Burst:</strong> A cooler start (18.5 °C) to establish a clean base, then a rapid rise to 22 °C right when you drop in your heavy dry hops to maximize biotransformation.</li>
        </ul>
    `,

    "wlp530": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP530 (Westmalle Trappist)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 3787, BE-256 (Dry version)
        </p>
        <p>The liquid original behind the famous Westmalle brewery. This is the undisputed king of dark, strong Belgian ales. It produces a gorgeous, complex symphony of plum, raisin, and mild spice, while easily chewing through massive amounts of sugar (up to 15% ABV).</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> A controlled 19 °C to 21 °C profile. Keeps the intense Belgian character restrained for a more refined Dubbel.</li>
            <li><strong style="color: #fff;">Trappist Ramp:</strong> The traditional monastery method. Pitch cool at 18 °C to avoid hot solvent alcohols, then let the yeast's own exothermic heat drive the tank up to 25 °C!</li>
            <li><strong style="color: #fff;">Dark Fruit:</strong> Starts slightly warmer (20 °C) and pushes hard to 24 °C to maximize the rich plum and raisin esters needed for a massive Belgian Quad.</li>
        </ul>
    `,

    "wyeast-3711": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 3711 (French Saison)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Belle Saison (Dry version), WLP590
        </p>
        <p>An absolute beast of a yeast! It is famous for its aggressive fermentation, chewing through every single complex sugar it can find (Diastaticus). The result is a bone-dry, highly carbonated beer with a beautiful balance of black pepper spice and citrus.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> A balanced start at 20 °C, slowly ramping to 24 °C. Creates a perfect, highly drinkable table-saison.</li>
            <li><strong style="color: #fff;">Bone Dry:</strong> Starts warm (22 °C) and pushes to 26 °C to ensure absolutely 0% residual sugar is left behind.</li>
            <li><strong style="color: #fff;">Farmhouse Spice:</strong> Starts hot at 24 °C and lets the yeast run wild up to 28 °C. This drives extreme levels of rustic, peppery phenols.</li>
        </ul>
    `,

    "wlp028": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP028 (Scottish Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1728 (Scottish Ale)
        </p>
        <p>A highly unique ale yeast that loves the cold! It ferments incredibly clean at lower temperatures, which preserves and elevates the deep, roasted, and smoky malt flavors without masking them behind fruity esters.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> A traditional 18 °C ale fermentation. Clean, neutral, and reliable.</li>
            <li><strong style="color: #fff;">Wee Heavy:</strong> Dropped down to 16 °C. A long, slow fermentation that allows the massive malt complexity of a strong Scottish ale to take center stage.</li>
            <li><strong style="color: #fff;">Cold & Clean:</strong> Pushed to its absolute limit at 14.5 °C. Acts almost exactly like a lager yeast, producing an incredibly crisp, malt-forward profile.</li>
        </ul>
    `,

    "wyeast-1469": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1469 (West Yorkshire)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Timothy Taylor strain, Imperial A10
        </p>
        <p>The holy grail for traditional English Bitters! Sourced from a legendary Yorkshire brewery, this yeast produces a wonderfully complex, slightly nutty, and mildly fruity profile that pairs perfectly with English malt and Fuggles hops.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> Ferments at 19 °C, followed by a warm D-rest. Perfect for modern English Pale Ales.</li>
            <li><strong style="color: #fff;">Yorkshire Bitter:</strong> Starts at 20 °C to coax out its signature stone fruit esters. Notice the "crash" stops at 5 °C to leave a slight haze and body.</li>
            <li><strong style="color: #fff;">Pub Temp:</strong> A highly authentic profile. Ferments at 18.5 °C and "conditions" at 8 °C, mimicking the cellar temperature of a traditional British pub cask.</li>
        </ul>
    `,

    "lutra": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Omega Lutra Kveik</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid / Dry Hybrid<br>
            <strong>Equivalents:</strong> A highly isolated Kveik strain.
        </p>
        <p>A modern brewing cheat code! Lutra is an isolated Kveik strain that has shocked the brewing world. Despite fermenting at hot ale temperatures, it produces an outrageously clean, crisp profile that tastes virtually indistinguishable from a traditional, slow-fermented lager.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> A steady 25 °C. Fast, completely clean, and reliable for everything from Hard Seltzers to Cream Ales.</li>
            <li><strong style="color: #fff;">Pseudo-Lager:</strong> Dropped to 20 °C. The ultimate mock-lager profile. Crisp, sulfur-free, and incredibly refreshing.</li>
            <li><strong style="color: #fff;">Speed Run:</strong> Ferments at a scorching 32 °C. Turns a wort into beer in under 4 days while somehow remaining shockingly clean.</li>
        </ul>
    `,

    "philly-sour": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Philly Sour</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> Unique (Lachancea species)
        </p>
        <p>Pure bio-engineering magic. Discovered on a tree in Philadelphia, this unique yeast produces lactic acid (sourness) during the first few days, and THEN switches over to producing alcohol! It allows you to brew sour beers safely without introducing dangerous bacteria to your gear.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> A steady 22 °C profile. Yields a moderate, refreshing tartness.</li>
            <li><strong style="color: #fff;">Lactic Boost:</strong> Held warm at 25 °C for the first 4 days to force the yeast to produce massive amounts of lactic acid, then dropped to 20 °C for a clean alcoholic finish. Very sour!</li>
            <li><strong style="color: #fff;">Sour Fruit:</strong> Tailored for fruited sours. Balances acid production before crashing cleanly to let your added fruit purees shine.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: Philly Sour needs simple sugars (like Dextrose) to produce high levels of acid! Add 5% dextrose to your boil.</i></p>
    `,

    "wlp820": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP820 (Oktoberfest / Märzen)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 2633, Imperial L17
        </p>
        <p>The heart and soul of the Munich Oktoberfest. While Pilsner yeast focuses on a crisp, hoppy finish, this strain is designed to elevate rich, toasty, and bready Munich and Vienna malts. It leaves a remarkably smooth and full-bodied lager behind.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Traditional Lager:</strong> The classic German approach. Slow 11 °C primary, followed by a long, cold lagering phase for liquid perfection.</li>
            <li><strong style="color: #fff;">Fast Festbier:</strong> Pitched slightly warmer (13 °C) for a quicker fermentation. Perfect for brewing a Festbier right before the party starts.</li>
            <li><strong style="color: #fff;">Malty Marzen:</strong> Held strictly at 10 °C. Demands immense patience, but rewards you with the deepest, most complex malt profile possible.</li>
        </ul>
    `,

    "bry-97": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand BRY-97</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP090 (Similar fast/clean profile)
        </p>
        <p>A West Coast legend in dry form! Many brewers prefer BRY-97 over US-05 because it produces slightly less peach esters and leaves a sharper, cleaner finish that really lets the hop bitterness bite.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Slow Starter</h4>
        <p>Don't panic if your airlock isn't bubbling after 24 hours. BRY-97 is notoriously slow to wake up, but once it gets going, it ferments vigorously and flocculates beautifully.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard / Low Ester:</strong> Keeps the yeast at 17.5 - 19 °C for an incredibly neutral base.</li>
            <li><strong style="color: #fff;">West Coast Crisp:</strong> Starts at 18 °C and slowly ramps up. Ensures a bone-dry finish where your expensive hops can shine.</li>
        </ul>
    `,

    "k-97": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle K-97 (German Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1007, WLP036
        </p>
        <p>A fantastic, clean German ale strain. This is your go-to dry yeast for brewing Altbier, Kölsch, or any beer where you want a crisp, lager-like profile but don't have the time to actually brew a lager.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Massive Krausen</h4>
        <p>K-97 produces a massive, thick foam head (krausen) during fermentation that can linger for days after it's done. Make sure you have plenty of headspace in your fermenter!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Altbier Crisp:</strong> Ferments cool at 15 °C. Supresses fruitiness and brings out the toasted malt character of a classic Düsseldorf Altbier.</li>
            <li><strong style="color: #fff;">Kölsch Style:</strong> Held at 16 °C and ramps to 20 °C. Crisp, slightly vinous, and very clean.</li>
        </ul>
    `,

    "windsor": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Windsor</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP002 (Similar attenuation profile)
        </p>
        <p>A classic British ale strain known for its fruity esters and full body. Just like S-33, Windsor is maltotriose negative – meaning it cannot ferment complex sugars. Your final gravity will be high, but the beer will feel incredibly rich and velvety.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Sweet Stout:</strong> Ferments at 18 °C. Maximizes the residual sweetness to balance heavily roasted malts.</li>
            <li><strong style="color: #fff;">Fruity Bitter:</strong> Pushed warmer to 20-21.5 °C. Unleashes beautiful English ester notes of fresh berries and jam.</li>
        </ul>
    `,

    "mexican-lager": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP040 (Mexican Lager)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Imperial L05 (Urkel), Wyeast 2124
        </p>
        <p>The perfect yeast for a sunny day! Sourced from Mexico City, this strain produces an exceptionally crisp and clean lager profile that pairs flawlessly with flaked corn and a slice of lime.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Traditional Lager:</strong> Runs at 11 °C. Takes time, but produces liquid gold.</li>
            <li><strong style="color: #fff;">Fast Cerveza:</strong> A modern approach. Pitched at 13 °C and actively ramped to 16.5 °C to finish the beer in half the time without losing the crispness.</li>
        </ul>
    `,

    "hornindal": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Omega OYL-091 Hornindal Kveik</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Unique Kveik blend
        </p>
        <p>If Voss Kveik gives you oranges, Hornindal gives you a tropical fruit salad! This Norwegian farmhouse blend thrives in extreme heat and produces massive notes of fresh pineapple, mango, and tangerine.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Tropical Bomb:</strong> Ferments at an insane 35-36 °C. The heat stresses the yeast into throwing incredible amounts of tropical fruit esters. Perfect for Hazy IPAs!</li>
            <li><strong style="color: #fff;">Clean Pseudo:</strong> Dropped down to 24-26 °C. Restrains the tropical notes for a much cleaner, everyday Pale Ale profile.</li>
        </ul>
    `,

    "wyeast-3724": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 3724 (Belgian Saison)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP565 (Saison I)
        </p>
        <p>The legendary Dupont strain. It produces the most complex, earthy, peppery, and spicy Saison profile in the world. But it comes with a major catch...</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Infamous Stall</h4>
        <p>This yeast is notorious for stalling out at exactly 1.030 gravity and going to sleep. The only way to push it to the finish line is with extreme heat.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">The Dupont Ramp:</strong> Our automated savior! Starts at 22 °C, but aggressively ramps up to a scorching 30 °C by day 7. This extreme heat prevents the stall and drives the beer down to a bone-dry finish.</li>
        </ul>
    `,

    "wlp570": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP570 (Belgian Golden Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1388 (Belgian Strong)
        </p>
        <p>Sourced from the famous Duvel brewery. Unlike Trappist strains that throw dark fruit, this yeast is famous for producing crisp notes of pear, apple, and white pepper. It attenuates incredibly well, hiding massive ABVs dangerously well.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Golden Strong:</strong> Starts safe at 20 °C to establish a clean base, then wanders all the way up to 26 °C to unlock the classic Duvel-like esters without producing harsh fusels.</li>
        </ul>
    `,

    "wyeast-2112": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 2112 (California Lager)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP810 (San Francisco Lager)
        </p>
        <p>The iconic Anchor Steam yeast! During the California Gold Rush, brewers didn't have ice, so they used shallow cooling ships to ferment lager yeast at warm temperatures. This strain evolved to thrive in this hybrid environment.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Steam Beer:</strong> Ferments at 15-17 °C. Creates a very unique, slightly woody, and mildly fruity lager profile that defines the California Common style.</li>
            <li><strong style="color: #fff;">Warm Lager:</strong> Pushed to 19 °C. Acts almost like an ale yeast, finishing fast but retaining a surprising amount of lager crispness.</li>
        </ul>
    `,

    "wlp380": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP380 (Hefeweizen IV)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 3333 (German Wheat)
        </p>
        <p>If WLP300 is the "Banana Bomb", then WLP380 is the "Clove Master". This strain produces very little isoamyl acetate (banana) and instead focuses heavily on spicy phenols and crisp citrus notes.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Clove Master:</strong> Fermented on the cooler side (17-18 °C). Completely suppresses the banana, leaving a beautifully spicy and refreshing wheat beer.</li>
            <li><strong style="color: #fff;">Balanced:</strong> Pushed slightly warmer (19-20 °C) to allow a tiny hint of banana to peek through the spice.</li>
        </ul>
    `,

    "wyeast-1007": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1007 (German Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> K-97 (Dry version), WLP036
        </p>
        <p>A true top-cropping German ale yeast. It is incredibly robust and ferments brilliantly clean even down at 13 °C! It leaves a dry, crisp finish with mild maltiness, making it perfect for Altbier and Kölsch.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Altbier Crisp:</strong> Runs at 15 °C. Supresses fruitiness and ensures a smooth, lager-like finish.</li>
            <li><strong style="color: #fff;">Pseudo Lager:</strong> Dropped all the way down to 13 °C. Acts like a lager yeast, but finishes significantly faster. Needs a good cold crash to clear up!</li>
        </ul>
    `
};

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
        
        // --- Översätt den kompakta datan till läsbar text (Som i Profiler) ---
        const steps = profile.steps;
        
        // Steg 1: Pitch
        html += `
            <div class="summary-row">
                <span class="label">Pitch</span>
                <span class="value">Day ${steps[0][0]} @ ${steps[0][1].toFixed(1)}°C</span>
            </div>
        `;
        
        // Steg 2: Primary (Bara om det finns mer än ett steg)
        if (steps.length > 1) {
            html += `
                <div class="summary-row">
                    <span class="label">Primary</span>
                    <span class="value">Hold until Day ${steps[1][0]}</span>
                </div>
            `;
        }
        
        // Steg 3: Cleanup / Ramp (Om tempen höjs i steg 2)
        if (steps.length > 2) {
             const tempDiff = steps[2][1] - steps[1][1];
             if (tempDiff > 0) {
                 html += `
                    <div class="summary-row">
                        <span class="label">Cleanup</span>
                        <span class="value">Reach ${steps[2][1].toFixed(1)}°C by Day ${steps[2][0]}</span>
                    </div>
                `;
             } else {
                 // Om tempen inte höjs (t.ex. lager-raster)
                 html += `
                    <div class="summary-row">
                        <span class="label">Secondary</span>
                        <span class="value">Hold at ${steps[2][1].toFixed(1)}°C until Day ${steps[2][0]}</span>
                    </div>
                `;
             }
        }
        
        // Sista Steget: Cold Crash / Condition
        if (steps.length > 3) {
            const isCrash = steps[3][1] < 10; // Om sluttempen är under 10 grader antar vi Cold Crash
            const label = isCrash ? "Cold Crash" : "Condition";
            const action = isCrash ? "Drop to" : "Hold at";
            
            html += `
                <div class="summary-row">
                    <span class="label">${label}</span>
                    <span class="value">${action} ${steps[3][1].toFixed(1)}°C by Day ${steps[3][0]}</span>
                </div>
            `;
        }
        
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

function openYeastModal(yeast) {
    const modal = document.getElementById('yeast-info-modal');
    const modalTitle = document.getElementById('modal-yeast-name');
    const modalDesc = document.getElementById('modal-yeast-desc');

    if (!modal || !modalTitle || !modalDesc) return;

    modalTitle.innerText = yeast.name;
    let detailedText = "";

    // 1. KOLLA OM DET ÄR EN EGEN PROFIL FRÅN ARCANE LAB
    if (yeast.isCustom) {
        const savedProfiles = JSON.parse(localStorage.getItem('customYeastProfiles') || '[]');
        const profileData = savedProfiles.find(p => p.s === yeast.name);

        if (profileData) {
            const s = profileData.steps;
            const baseYeast = profileData.p.replace('Custom (', '').replace(')', '');
            detailedText = `
                <div style="line-height: 1.6;">
                    <p style="color: var(--accent-color); font-weight: 800; margin-bottom: 15px;">Created by you!</p>
                    <p>This profile is used with <strong>${baseYeast}</strong> and these are the profile steps:</p>
                    <ul style="list-style: none; padding: 0; margin-top: 15px; display: flex; flex-direction: column; gap: 8px;">
                        <li><strong style="color: #fff;">Pitch:</strong> Start at ${s[0][1]}°C.</li>
                        <li><strong style="color: #fff;">Primary:</strong> Hold until Day ${s[1][0]}.</li>
                        <li><strong style="color: #fff;">Cleanup:</strong> Rise to ${s[2][1]}°C on Day ${s[2][0]}.</li>
                        <li><strong style="color: #fff;">Cold Crash:</strong> Drop to ${s[3][1]}°C on Day ${s[3][0]}.</li>
                        <li><strong style="color: #fff;">Condition:</strong> Hold at ${s[4][1]}°C until Day ${s[4][0]}.</li>
                    </ul>
                    ${profileData.dryHopDay ? `<p style="margin-top: 15px; color: #8CC63F;"><strong>Dry Hop:</strong> Scheduled for Day ${profileData.dryHopDay}</p>` : ''}
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
        
        // --- NYTT: Formatera datumet så det ser snyggt ut (t.ex. "14 Apr 2026") ---
        let displayDate = "Unknown";
        if (yeast.captureDate) {
            const dateObj = new Date(yeast.captureDate);
            displayDate = dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
        }

        detailedText = `
            <div style="line-height: 1.6;">
                <h4 style="color: var(--accent-color); margin-top: 0; margin-bottom: 10px; font-size: 1rem; text-transform: uppercase; font-weight: 800; letter-spacing: 1px;">House Bank Strain 🦠</h4>
                <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid #333; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                    
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <span style="color: #888; font-size: 0.8rem; text-transform: uppercase; font-weight: bold;">Captured</span>
                        <span style="color: #fff; font-weight: bold;">${displayDate}</span>
                    </div>

                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <span style="color: #888; font-size: 0.8rem; text-transform: uppercase; font-weight: bold;">Origin / Source</span>
                        <span style="color: #fff; font-weight: bold;">${yeast.origin}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <span style="color: #888; font-size: 0.8rem; text-transform: uppercase; font-weight: bold;">Temp Range</span>
                        <span style="color: #fff; font-weight: bold;">${yeast.temp}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <span style="color: #888; font-size: 0.8rem; text-transform: uppercase; font-weight: bold;">Tags</span>
                        <span style="color: var(--accent-color); font-weight: bold; text-align: right;">${yeast.tags.join(', ')}</span>
                    </div>
                </div>
                <h4 style="color: #888; margin-bottom: 5px; font-size: 0.8rem; text-transform: uppercase; font-weight: bold;">Lab Notes</h4>
                <p style="color: #ccc; font-size: 0.95rem; background: #000; padding: 15px; border-radius: 8px; border: 1px solid #222;">${yeast.desc}</p>
            </div>
        `;
    }
    // ====================================================================
    // 3. VANLIG KOMMERSIELL JÄST FRÅN DATABASEN
    // ====================================================================
    else {
        detailedText = yeastDescriptions[yeast.id] || yeastDescriptions[yeast.name];
        
        // Fallback OM vi skulle sakna en kommersiell text
        if (!detailedText) {
            detailedText = `<p>${yeast.desc}</p><h3 style="margin-top:20px; color: #fff;">Passar till:</h3><p>${yeast.styles}</p>`;
        }

        // LÄGG TILL INKLUDERADE MASKINPROFILER
        const hwStrainNames = {
            "us-05": "US-05", "s-04": "S-04", "w-34-70": "W-34/70", "be-256": "BE-256",
            "wb-06": "WB-06", "verdant": "Verdant IPA", "voss": "Voss Kveik", "nottingham": "Nottingham", 
            "wlp001": "Cali Ale", "wlp300": "Hefeweizen", "belle-saison": "Belle Saison", 
            "t-58": "T-58", "s-23": "S-23", "wlp002": "English Ale", "wlp500": "Trappist", 
            "diamond": "Diamond", "wlp066": "London Fog", "s-33": "S-33", "wlp800": "Pilsner Lager",
            "novalager": "NovaLager", "wyeast-1968": "London ESB", "wlp920": "Old Bavarian",
            "imperial-b45": "Imp. Gnome", "wyeast-1084": "Irish Ale", "wyeast-3944": "Belgian Wit",
            "wlp833": "German Bock", "wlp007": "Dry English", "wyeast-1318": "London III",
            "wyeast-2565": "Kolsch", "wlp095": "Burlington", "wlp090": "SD Super",
            "wyeast-1272": "American II", "imperial-a24": "Dry Hop", "wlp530": "Westmalle",
            "wyeast-3711": "French Saison", "wlp028": "Scottish Ale", "wyeast-1469": "W. Yorkshire",
            "lutra": "Lutra Kveik", "philly-sour": "Philly Sour", "wlp820": "Oktoberfest",
            "bry-97": "BRY-97", "k-97": "K-97", "windsor": "Windsor", "mexican-lager": "Mexican Lager",
            "hornindal": "Hornindal", "wyeast-3724": "Belg. Saison", "wlp570": "Belg. Golden",
            "wyeast-2112": "Cali Lager", "wlp380": "Hefeweizen 4", "wyeast-1007": "Ger. Ale 1007"
        };

        const targetStrainName = hwStrainNames[yeast.id];
        if (targetStrainName && typeof yeastDatabase !== 'undefined' && yeastDatabase.yeasts) {
            const matchingProfiles = yeastDatabase.yeasts.filter(p => p.s === targetStrainName);
            if (matchingProfiles.length > 0) {
                let profileListHtml = `<div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;"><h4 style="color: var(--accent-color); margin-bottom: 15px; font-size: 1rem; text-transform: uppercase; font-weight: 800; letter-spacing: 1px;">Included Hardware Profiles:</h4>`;
                matchingProfiles.forEach((prof, index) => {
                    const startTemp = prof.steps[0][1];
                    const uniqueId = `hw-profile-summary-${yeast.id}-${index}`; 
                    const steps = prof.steps;
                    profileListHtml += `<button class="hw-profile-btn" onclick="toggleHwProfile('${uniqueId}', this)"><strong>${prof.p}</strong><span style="color: #888; font-size: 0.85em;">(Starts @ ${startTemp.toFixed(1)}°C)</span></button>`;
                    profileListHtml += `<div class="hw-profile-summary" id="${uniqueId}"><div class="summary-header">PROFILE SUMMARY</div>`;
                    profileListHtml += `<div class="summary-row"><span class="label">Pitch</span><span class="value">Day ${steps[0][0]} @ ${steps[0][1].toFixed(1)}°C</span></div>`;
                    if (steps[1][1] === steps[0][1]) { profileListHtml += `<div class="summary-row"><span class="label">Primary</span><span class="value">Hold until Day ${steps[1][0]}</span></div>`; } else { profileListHtml += `<div class="summary-row"><span class="label">Primary</span><span class="value">Reach ${steps[1][1].toFixed(1)}°C by Day ${steps[1][0]}</span></div>`; }
                    if (steps[2][1] >= steps[1][1]) { let text = steps[2][1] > steps[1][1] ? `Rise to ${steps[2][1].toFixed(1)}°C by Day ${steps[2][0]}` : `Hold until Day ${steps[2][0]}`; profileListHtml += `<div class="summary-row"><span class="label">Cleanup</span><span class="value">${text}</span></div>`; } else { profileListHtml += `<div class="summary-row"><span class="label">Cold Crash</span><span class="value">Drop to ${steps[2][1].toFixed(1)}°C by Day ${steps[2][0]}</span></div>`; }
                    if (steps[3][1] < steps[2][1]) { profileListHtml += `<div class="summary-row"><span class="label">Cold Crash</span><span class="value">Drop to ${steps[3][1].toFixed(1)}°C by Day ${steps[3][0]}</span></div>`; } else { profileListHtml += `<div class="summary-row"><span class="label">Condition</span><span class="value">Hold until Day ${steps[3][0]}</span></div>`; }
                    profileListHtml += `</div>`; 
                });
                profileListHtml += `</div>`; detailedText += profileListHtml; 
            }
        }
    }

    modalDesc.innerHTML = formatTempText(detailedText);

    // --- STYR KNAPPARNA FÖR EDIT OCH DELETE ---
    const editBtn = document.getElementById('modal-edit-btn');
    const deleteBtn = document.getElementById('modal-delete-btn');
    
    if (yeast.isHouseStrain) {
        if(editBtn) { 
            editBtn.style.display = 'block'; 
            editBtn.onclick = (e) => { 
                e.preventDefault();
                closeYeastModal(); 
                openAddStrainModal(yeast); 
            }; 
        }
        if(deleteBtn) { 
            deleteBtn.style.display = 'block'; 
            deleteBtn.onclick = () => { 
                deleteHouseStrain(yeast.id); 
                closeYeastModal(); 
            }; 
        }
    } else if (yeast.isCustom) {
        if(editBtn) editBtn.style.display = 'none';
        if(deleteBtn) { 
            deleteBtn.style.display = 'block'; 
            deleteBtn.onclick = () => { deleteCustomProfile(yeast.name); closeYeastModal(); }; 
        }
    } else {
        if(editBtn) editBtn.style.display = 'none';
        if(deleteBtn) deleteBtn.style.display = 'none';
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
}


window.closeYeastModal = function() {
    const modal = document.getElementById('yeast-info-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Släpp bakgrunden fri
    }
}

// Stäng vid klick utanför rutan
document.getElementById('yeast-info-modal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeYeastModal();
    }
});


// ==========================================
// MASTER STARTUP (Körs när sidan är helt redo)
// ==========================================
window.addEventListener('DOMContentLoaded', () => {

    // --- NYTT: Ladda husjäster först! ---
    if (typeof loadHouseStrains === "function") {
        loadHouseStrains();
    }

    //  Ladda in dina egna sparade profiler
    if (typeof loadCustomProfiles === "function") {
        loadCustomProfiles();
    }

    // 2. Fyll rullistan i Arcane Lab
    if (typeof populateBaseYeastDropdown === "function") {
        populateBaseYeastDropdown();
    }

    // 3. Starta Lab-grafen
    if (typeof initLabChart === "function") {
        setTimeout(initLabChart, 500);
    }
    
    // 4. Starta Pitch Calculatorn
    const dateInput = document.getElementById('pitch-date');
    if (dateInput) {
        dateInput.valueAsDate = new Date();
        if (typeof calculatePitch === "function") calculatePitch();
    }

   // 5. Tema och Färg (Ladda sparade val)
    const savedAccent = localStorage.getItem('accentColor');
    if (savedAccent && typeof setAccent === "function") {
        // Vi måste låtsas "klicka" på rätt knapp för att färgerna ska bli rätt!
        const matchingDot = document.querySelector(`.color-dot[style*="${savedAccent}"]`);
        if (matchingDot) {
            setAccent(savedAccent, matchingDot);
        } else {
             // Fallback om pricken inte hittas
             document.documentElement.style.setProperty('--accent-color', savedAccent);
             const savedSec = localStorage.getItem('accentSecondary');
             if(savedSec) document.documentElement.style.setProperty('--accent-secondary', savedSec);
        }
    }
    
if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
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


// 1. Fyll rullistan med användarens enheter (Skottsäker version)
async function populateSyncDevices(uid) {
    const dropdown = document.getElementById('sync-target-device');
    if (!dropdown) return; 

    // Säkerhetskoll
    if (!uid) {
        dropdown.innerHTML = '<option value="">Logga in för att se enheter</option>';
        return;
    }

    try {
        // Försöker hämta dina riktiga enheter
        const res = await fetch(`${API_BASE}/my-devices?uid=${uid}`);
        
        if (!res.ok) throw new Error("Servern svarade inte med 200 OK");
        
        const devices = await res.json();
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

// Funktion som tvättar namnen så de får plats på OLED-skärmen
function formatOledName(fullName) {
    if (!fullName) return "";
    let shortName = fullName;
    
    // Regler för vad som ska klippas bort (t.ex. "Wyeast 1084 ")
    const prefixesToRemove = [
        /Wyeast\s\d+\s/i,       // Tar bort "Wyeast 1084 "
        /WLP\d+\s/i,            // Tar bort "WLP001 "
        /SafAle\s/i,            // Tar bort "SafAle "
        /SafLager\s/i,          // Tar bort "SafLager "
        /Lallemand\s/i,         // Tar bort "Lallemand "
        /Imperial\s[A-Z0-9]+\s/i // Tar bort "Imperial B45 "
    ];
    
    prefixesToRemove.forEach(regex => {
        shortName = shortName.replace(regex, "");
    });
    
    return shortName.trim(); // Returnerar t.ex. bara "Irish Ale"
}

// ==========================================
// --- CLOUD SYNC MOTOR ---
// ==========================================
async function syncToSelectedDevice() {
    const syncBtn = document.getElementById('sync-btn');
    const syncDropdown = document.getElementById('sync-target-device');
    const targetDeviceId = syncDropdown ? syncDropdown.value : null;

    if (!targetDeviceId) {
        alert("Vänligen välj en målenhet i rullistan ovanför knappen!");
        return;
    }

    if (!selectedStrains || selectedStrains.length === 0) {
        alert("Du måste välja minst en jäst/profil (markera med stjärnan ★) för att kunna synka!");
        return;
    }

    const user = auth.currentUser;
    if (!user) {
        alert("Du måste vara inloggad för att kunna synka till molnet.");
        return;
    }

    const originalText = syncBtn.innerText;
    syncBtn.innerText = "PACKING PROFILES... 📦";
    syncBtn.style.opacity = "0.7";
    syncBtn.style.pointerEvents = "none";

    try {
        let profilesToSend = [];

        // DEN KOMPLETTA ORDBOKEN FÖR SYNK-MOTORN
 const hwStrainNames = {
            "us-05": "US-05", "s-04": "S-04", "w-34-70": "W-34/70", "be-256": "BE-256",
            "wb-06": "WB-06", "verdant": "Verdant IPA", "voss": "Voss Kveik", "nottingham": "Nottingham", 
            "wlp001": "Cali Ale", "wlp300": "Hefeweizen", "belle-saison": "Belle Saison", 
            "t-58": "T-58", "s-23": "S-23", "wlp002": "English Ale", "wlp500": "Trappist", 
            "diamond": "Diamond", "wlp066": "London Fog", "s-33": "S-33", "wlp800": "Pilsner Lager",
            "novalager": "NovaLager", "wyeast-1968": "London ESB", "wlp920": "Old Bavarian",
            "imperial-b45": "Imp. Gnome", "wyeast-1084": "Irish Ale", "wyeast-3944": "Belgian Wit",
            "wlp833": "German Bock", "wlp007": "Dry English", "wyeast-1318": "London III",
            "wyeast-2565": "Kolsch", "wlp095": "Burlington", "wlp090": "SD Super",
            "wyeast-1272": "American II", "imperial-a24": "Dry Hop", "wlp530": "Westmalle",
            "wyeast-3711": "French Saison", "wlp028": "Scottish Ale", "wyeast-1469": "W. Yorkshire",
            "lutra": "Lutra Kveik", "philly-sour": "Philly Sour", "wlp820": "Oktoberfest",
            "bry-97": "BRY-97", "k-97": "K-97", "windsor": "Windsor", "mexican-lager": "Mexican Lager",
            "hornindal": "Hornindal", "wyeast-3724": "Belg. Saison", "wlp570": "Belg. Golden",
            "wyeast-2112": "Cali Lager", "wlp380": "Hefeweizen 4", "wyeast-1007": "Ger. Ale 1007"
        };

selectedStrains.forEach(id => {
            const strainObj = yeastStrains.find(y => y.id === id);
            
            if (strainObj && strainObj.isCustom) {
                // --- CUSTOM PROFILER ("Pelle") ---
                const targetStrainName = strainObj.name; 
                
                if (typeof yeastDatabase !== 'undefined' && yeastDatabase.yeasts) {
                    const matchingProfiles = yeastDatabase.yeasts.filter(p => p.s === targetStrainName);
                    
                    matchingProfiles.forEach(profile => {
                        // Klona profilen så vi inte råkar döpa om den i webbläsaren!
                        let deviceProfile = JSON.parse(JSON.stringify(profile));
                        
                        // Kasta om variablerna för OLED-skärmen
                        let customName = deviceProfile.s; // "Pelle"
                        let baseStrainFull = deviceProfile.p; // "Wyeast 1084 Irish Ale"
                        
                        // Den vita rutan (s) ska ha den tvättade bas-jästen
                        deviceProfile.s = formatOledName(baseStrainFull); 
                        // Texten under (p) får heta ditt egna namn
                        deviceProfile.p = customName; 
                        
                        profilesToSend.push(deviceProfile);
                    });
                }
            } else {
                // --- STANDARD PROFILER ---
                const targetStrainName = hwStrainNames[id];
                if (targetStrainName && typeof yeastDatabase !== 'undefined' && yeastDatabase.yeasts) {
                    const matchingProfiles = yeastDatabase.yeasts.filter(p => p.s === targetStrainName);
                    
                    matchingProfiles.forEach(profile => {
                        // Klona även här
                        let deviceProfile = JSON.parse(JSON.stringify(profile));
                        // Tvätta namnet för säkerhets skull
                        deviceProfile.s = formatOledName(deviceProfile.s);
                        profilesToSend.push(deviceProfile);
                    });
                }
            }
        });

        if (profilesToSend.length === 0) {
            alert("Kunde inte packa profilerna! Dubbelkolla att namnen matchar databasen.");
            syncBtn.innerText = originalText;
            syncBtn.style.opacity = "1";
            syncBtn.style.pointerEvents = "auto";
            return;
        }

        const payloadData = {
            yeasts: profilesToSend
        };

        syncBtn.innerText = "SYNCING TO CLOUD... ☁️";

        const response = await fetch(`${API_BASE}/sync-profiles`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                uid: user.uid,
                device_id: targetDeviceId,
                yeastData: payloadData
            })
        });

        if (response.ok) {
            syncBtn.innerText = "SYNC SUCCESSFUL! ✓";
            syncBtn.style.backgroundColor = "rgba(140, 198, 63, 0.2)";
            syncBtn.style.borderColor = "#8CC63F";
            syncBtn.style.color = "#8CC63F";
            
            setTimeout(() => {
                // --- NYTT: STÄDA BIBLIOTEKET NÄR SYNK ÄR KLAR ---
                if (typeof clearLibrarySelection === 'function') {
                    clearLibrarySelection(); 
                }
                
                // Återställ knappen
                syncBtn.innerText = originalText;
                syncBtn.style.backgroundColor = "";
                syncBtn.style.borderColor = "";
                syncBtn.style.color = "";
                syncBtn.style.opacity = "1";
                syncBtn.style.pointerEvents = "auto";
            }, 3000);
        } else {
            throw new Error("Servern nekade synkningen.");
        }
    } catch (error) {
        console.error("Synk-fel:", error);
        syncBtn.innerText = "SYNC FAILED ✖";
        syncBtn.style.backgroundColor = "rgba(255, 68, 68, 0.2)";
        syncBtn.style.borderColor = "#ff4444";
        syncBtn.style.color = "#ff4444";
        
        // Vid fel rensar vi INTE biblioteket, så användaren slipper välja allt igen!
        setTimeout(() => {
            syncBtn.innerText = originalText;
            syncBtn.style.backgroundColor = "";
            syncBtn.style.borderColor = "";
            syncBtn.style.color = "";
            syncBtn.style.opacity = "1";
            syncBtn.style.pointerEvents = "auto";
        }, 3000);
    }
}

// ==========================================
// SWIPE NAVIGATION (Mobil)
// ==========================================

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

function handleSwipe() {
    const swipeThreshold = 50; // Hur många pixlar du måste svepa för att det ska "gälla"
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    // 1. Kolla så det är ett horisontellt svep (och inte en scrollning neråt)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > swipeThreshold) {
        
        // 2. Ta reda på vilken flik vi står på just nu
        let currentView = '';
        viewOrder.forEach(view => {
            const el = document.getElementById('view-' + view);
            if (el && (el.style.display === 'block' || el.style.display === 'flex')) {
                currentView = view;
            }
        });

        // Avbryt om vi är på inloggningen eller claim-sidan
        let currentIndex = viewOrder.indexOf(currentView);
        if (currentIndex === -1) return;

        // 3. Byt flik baserat på riktning!
        if (deltaX < 0) {
            // Svep VÄNSTER (fingret dras åt vänster) = Gå till NÄSTA vy
            if (currentIndex < viewOrder.length - 1) {
                showView(viewOrder[currentIndex + 1]);
            }
        } else {
            // Svep HÖGER (fingret dras åt höger) = Gå till FÖREGÅENDE vy
            if (currentIndex > 0) {
                showView(viewOrder[currentIndex - 1]);
            }
        }
    }
}

document.addEventListener('touchstart', e => {
    // 1. SÄKERHETSSPÄRR: Ignorera svep om du rör grafen eller sökrutan
    if (e.target.closest('.chart-container') || e.target.tagName.toLowerCase() === 'input') return;

    // 2. NY SÄKERHETSSPÄRR: Ignorera svep om Jäst-detaljvyn eller Modalen är öppen!
    const detailView = document.getElementById('yeast-detail-view');
    const infoModal = document.getElementById('yeast-info-modal');
    if (detailView && detailView.style.display === 'block') return;
    if (infoModal && infoModal.style.display === 'flex') return;

    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', e => {
    if (e.target.closest('.chart-container') || e.target.tagName.toLowerCase() === 'input') return;

    // Samma spärr här för att vara 100% säkra
    const detailView = document.getElementById('yeast-detail-view');
    const infoModal = document.getElementById('yeast-info-modal');
    if (detailView && detailView.style.display === 'block') return;
    if (infoModal && infoModal.style.display === 'flex') return;

    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, { passive: true });

// ==========================================
// BEER COLOR CYCLER (Easter Egg med Kontrast-AI)
// ==========================================
const beerStyles = [
    // Neutral & Mörk: Ihålig text (insidan = vätskan) med ljus kontur
    { name: 'Neutral', fill: '#4a4a4a', inner: '#4a4a4a', stroke: 'var(--oled-color)' }, 
    
    // Ljusa ölsorter: Solitt mörk text för grym kontrast!
    { name: 'Pilsner', fill: '#f4c95d', inner: '#111111', stroke: '#111111' }, 
    { name: 'Lager',   fill: '#ffcc33', inner: '#111111', stroke: '#111111' }, 
    { name: 'Pale Ale',fill: '#f2b336', inner: '#111111', stroke: '#111111' }, 
    { name: 'Amber',   fill: '#e8992e', inner: '#111111', stroke: '#111111' }, 
    
    // Mörka ölsorter: Tillbaka till ihålig text med kritvit kontur
    { name: 'Brown',   fill: '#8b4513', inner: '#8b4513', stroke: '#ffffff' }, 
    { name: 'Stout',   fill: '#2b1500', inner: '#2b1500', stroke: '#ffffff' }  
];

let currentBeerStyleIndex = 0;

function initBeerCycler() {
    const carboyWrapper = document.querySelector('.carboy-wrapper');
    if (!carboyWrapper) return;

    // 1. Kolla om du har en sparad ölstil sedan tidigare
    const savedIndex = localStorage.getItem('myBeerStyleIndex');
    if (savedIndex !== null) {
        currentBeerStyleIndex = parseInt(savedIndex, 10);
    }
    
    // 2. Applicera färgen direkt vid start
    applyBeerStyle(currentBeerStyleIndex);

    // 3. Visa muspekare för att indikera att den är klickbar
    carboyWrapper.style.cursor = 'pointer';

    // 4. Byt färg vid varje klick!
    carboyWrapper.addEventListener('click', () => {
        currentBeerStyleIndex++;
        if (currentBeerStyleIndex >= beerStyles.length) {
            currentBeerStyleIndex = 0; // Börja om
        }
        
        applyBeerStyle(currentBeerStyleIndex);
        localStorage.setItem('myBeerStyleIndex', currentBeerStyleIndex);
    });
}

// NY FUNKTION: Applicerar alla tre färger samtidigt
function applyBeerStyle(index) {
    const style = beerStyles[index];
    document.documentElement.style.setProperty('--beer-color', style.fill);
    document.documentElement.style.setProperty('--beer-inner', style.inner);
    document.documentElement.style.setProperty('--beer-stroke', style.stroke);
}

// Starta funktionen när sidan laddas
document.addEventListener('DOMContentLoaded', () => {
    initBeerCycler();
});

// --- ZOOM-FUNKTION FÖR MOBIL (OVERVIEW / DETALJ) ---
let isZoomedIn = true; // Grafen är 600px bred från början
function toggleChartZoom() {
    const area = document.getElementById('chart-scroll-area');
    const btn = document.getElementById('btn-zoom');
    
    if (!area || !btn) return;

    if (isZoomedIn) {
        // Zooma ut: Låt grafen krympa för att få plats på skärmen
        area.style.minWidth = '100%';
        btn.innerText = '🔍 ZOOM IN';
    } else {
        // Zooma in: Tvinga grafen att bli 600px bred för scroll & precision
        area.style.minWidth = '600px';
        btn.innerText = '🔍 OVERVIEW';
    }
    
    isZoomedIn = !isZoomedIn;
}

function setTheme(mode) {
    const body = document.body;
    const btnDark = document.getElementById('btn-theme-dark');
    const btnLight = document.getElementById('btn-theme-light');

    if (mode === 'light') {
        body.classList.add('light-mode');
        btnLight.classList.add('active');
        btnDark.classList.remove('active');
    } else {
        body.classList.remove('light-mode');
        btnDark.classList.add('active');
        btnLight.classList.remove('active');
    }

    // Valfritt: Spara valet i webbläsaren så den kommer ihåg det nästa gång
    localStorage.setItem('yeastmaster-theme', mode);
}

function setAccent(color, element) {
    // 1. Sätt huvudfärgen i hela appen
    document.documentElement.style.setProperty('--accent-color', color);
    
    // 2. Para ihop med den perfekta accentfärg 2!
    let secondaryColor = color; // Fallback
    
    switch(color.toLowerCase()) {
        case '#8cc63f': // Om Huvudfärg = Grön
            secondaryColor = '#f39c12'; // Sekundär = Klar Orange
            break;
        case '#00e5ff': // Om Huvudfärg = Cyan
            secondaryColor = '#b142ff'; // Sekundär = Lila
            break;
        case '#b142ff': // Om Huvudfärg = Lila
            secondaryColor = '#00e5ff'; // Sekundär = Cyan
            break;
        case '#ff4444': // Om Huvudfärg = Röd
            secondaryColor = '#ffcc00'; // Sekundär = Klargul
            break;
        case '#ff9800': // Om Huvudfärg = Orange
            secondaryColor = '#f4c95d'; // Sekundär = Ljusgul (Pilsner-guld)
            break;
    }

    // Applicera den sekundära färgen
    document.documentElement.style.setProperty('--accent-secondary', secondaryColor);

    // Spara i LocalStorage så appen minns dina val
    localStorage.setItem('accentColor', color);
    localStorage.setItem('accentSecondary', secondaryColor);
    
    // 3. Flytta .active-klassen till den klickade pricken i Settings
    document.querySelectorAll('.color-dot').forEach(dot => dot.classList.remove('active'));
    if (element) {
        element.classList.add('active');
    }

    // 4. Uppdatera grafen live om den är öppen
    if (typeof updateChart === "function" && typeof lastData !== 'undefined') {
        updateChart(lastData);
    }
}
// Kolla om användaren har ett sparat tema när sidan laddas
const savedTheme = localStorage.getItem('yeastmaster-theme');
if (savedTheme) {
    setTheme(savedTheme);
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
// --- TOGGLE FÖR LIBRARY INFO ---
// ==========================================
function toggleLibraryInfo(btn) {
    const infoBox = document.getElementById('library-info-box'); 
    
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
// --- HOUSE BANK (WILD YEAST) LOGIC ---
// ==========================================

function openAddStrainModal(existingStrain = null) {
    if (existingStrain instanceof Event) existingStrain = null;

    const modal = document.getElementById('add-strain-modal');
    const title = modal.querySelector('h3');
    const nameInput = document.getElementById('hs-name');
    const dateInput = document.getElementById('hs-date');

    if (existingStrain && existingStrain.id) {
        title.innerText = "Edit House Strain";
        nameInput.value = existingStrain.name || '';
        document.getElementById('hs-origin').value = existingStrain.origin || '';
        if(dateInput) dateInput.value = existingStrain.captureDate || ''; // Fyll i datumet
        document.getElementById('hs-temp').value = existingStrain.temp || '';
        document.getElementById('hs-tags').value = (existingStrain.tags || []).join(', ');
        document.getElementById('hs-desc').value = existingStrain.desc || '';

        nameInput.disabled = true;
        nameInput.style.opacity = "0.5";
    } else {
        title.innerText = "House Bank";
        nameInput.value = '';
        document.getElementById('hs-origin').value = '';
        
        // Sätt dagens datum automatiskt
        if(dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.value = today;
        }

        document.getElementById('hs-temp').value = '';
        document.getElementById('hs-tags').value = '';
        document.getElementById('hs-desc').value = '';

        nameInput.disabled = false;
        nameInput.style.opacity = "1";
    }

    modal.style.display = 'flex';
}

function closeAddStrainModal() {
    document.getElementById('add-strain-modal').style.display = 'none';
}

function saveHouseStrain() {
    try {
        const nameInput = document.getElementById('hs-name');
        const name = nameInput.value.trim();
        const origin = document.getElementById('hs-origin').value.trim() || "House Bank";
        
        // Hämta datumet!
        const dateInput = document.getElementById('hs-date');
        const captureDate = dateInput ? dateInput.value : '';

        const temp = document.getElementById('hs-temp').value.trim() || "Unknown";
        const tagsInput = document.getElementById('hs-tags').value.trim();
        const desc = document.getElementById('hs-desc').value.trim() || "A local or wild captured yeast strain.";

        if (!name) { alert("You must name your yeast!"); return; }

        const tags = tagsInput ? tagsInput.split(',').map(t => t.trim()) : ["Wild/Custom"];
        if (!tags.includes("House Strain")) tags.push("House Strain");

        let savedStrains = JSON.parse(localStorage.getItem('houseStrains') || '[]');
        
        const newId = "house-" + name.toLowerCase().replace(/[^a-z0-9]/g, '');
        const existingIndex = savedStrains.findIndex(s => s.id === newId);

        const isEditMode = nameInput.disabled;

        if (isEditMode) {
            if (existingIndex > -1) {
                savedStrains[existingIndex].origin = origin;
                savedStrains[existingIndex].captureDate = captureDate; // Spara uppdaterat datum
                savedStrains[existingIndex].temp = temp;
                savedStrains[existingIndex].tags = tags;
                savedStrains[existingIndex].desc = desc;
            }
        } else {
            if (existingIndex > -1) {
                alert("A strain with this name already exists!"); 
                return;
            }
            savedStrains.push({
                id: newId, 
                name: name, 
                origin: origin, 
                captureDate: captureDate, // Spara nytt datum
                temp: temp,
                tags: tags, 
                desc: desc, 
                styles: "Any", 
                isHouseStrain: true
            });
        }

        localStorage.setItem('houseStrains', JSON.stringify(savedStrains));

        if (typeof pushLibraryToCloud === "function") pushLibraryToCloud();

        closeAddStrainModal();
        if (typeof closeYeastModal === "function") closeYeastModal();

        loadHouseStrains();
        const searchBox = document.getElementById('yeast-search');
        if (typeof renderYeastLibrary === "function") renderYeastLibrary(searchBox ? searchBox.value : "");
        if (typeof populateBaseYeastDropdown === "function") populateBaseYeastDropdown();

    } catch (error) {
        console.error("Crash under sparning:", error);
    }
    // NYTT: Scrolla ner till botten av biblioteket!
        setTimeout(() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, 200);
}

function loadHouseStrains() {
    let savedStrains = JSON.parse(localStorage.getItem('houseStrains') || '[]');
    savedStrains.forEach(strain => {
        const existingIndex = yeastStrains.findIndex(y => y.id === strain.id);
        if (existingIndex > -1) {
            yeastStrains[existingIndex] = strain;
        } else {
            yeastStrains.push(strain);
        }
    });
}

window.deleteHouseStrain = function(id) {
    if (!confirm("Are you sure you want to delete this House Strain?")) return;
    
    let savedStrains = JSON.parse(localStorage.getItem('houseStrains') || '[]');
    savedStrains = savedStrains.filter(s => s.id !== id);
    localStorage.setItem('houseStrains', JSON.stringify(savedStrains));

    const strainIndex = yeastStrains.findIndex(y => y.id === id);
    if (strainIndex > -1) yeastStrains.splice(strainIndex, 1);

    const selectedIndex = selectedStrains.indexOf(id);
    if (selectedIndex > -1) {
        selectedStrains.splice(selectedIndex, 1);
        const favCount = document.getElementById('fav-count');
        if (favCount) favCount.innerText = selectedStrains.length;
    }

    if (typeof pushLibraryToCloud === "function") pushLibraryToCloud();
    
    closeYeastModal();
    const searchBox = document.getElementById('yeast-search');
    if (typeof renderYeastLibrary === "function") renderYeastLibrary(searchBox ? searchBox.value : "");
    if (typeof populateBaseYeastDropdown === "function") populateBaseYeastDropdown();
};

// ==========================================
// --- TOGGLE FÖR IN THE LAB (ACADEMY) INFO ---
// ==========================================
function toggleAcademyInfo(btn) {
    const infoBox = document.getElementById('academy-info-box'); 
    
    if (!infoBox) return; // Felsäkring ifall HTML-id:t skulle saknas
    
    if (infoBox.style.display === 'none' || infoBox.style.display === '') {
        // ÖPPEN: Helt fylld, solid klargrön!
        infoBox.style.display = 'block';
        btn.style.backgroundColor = '#8CC63F'; // 100% grön bakgrund
        btn.style.borderColor = '#8CC63F';
        btn.style.color = '#111111'; // Mörkt 'i' för maximal kontrast
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

// ==========================================
// --- TEMPERATURE UNIT MANAGER ---
// ==========================================
let currentTempUnit = 'C'; // Starta alltid som Celsius internt 

function setTempUnit(unit) {
    const oldUnit = currentTempUnit;
    currentTempUnit = unit;
    localStorage.setItem('yeastmaster-unit', unit);
    
    // Uppdatera knapparnas utseende
    if (document.getElementById('btn-unit-c')) {
        document.getElementById('btn-unit-c').classList.toggle('active', unit === 'C');
        document.getElementById('btn-unit-f').classList.toggle('active', unit === 'F');
    }

    // --- MAGIN: Konvertera BARA om vi faktiskt byter (t.ex. C -> F) ---
    if (oldUnit !== unit && typeof profilePoints !== 'undefined') {
        profilePoints.forEach(p => {
            if (unit === 'F') {
                // Konvertera punktens Celsius-värde till Fahrenheit
                p.y = (p.y * 9/5) + 32; 
            } else {
                // Konvertera punktens Fahrenheit-värde tillbaka till Celsius
                p.y = (p.y - 32) * 5/9;
            }
        });
    }

    // Rita om allt
    if (typeof renderYeastLibrary === 'function') renderYeastLibrary(document.getElementById('yeast-search')?.value || "");
    if (typeof initLabChart === 'function') initLabChart();
    if (typeof updateSummaryText === 'function') updateSummaryText();
    if (typeof updateDashboard === 'function') updateDashboard(); 
}

// Hjälpfunktion för att konvertera råa siffror från servern
function convertTemp(celsiusValue) {
    if (currentTempUnit === 'C') return celsiusValue;
    return (celsiusValue * 9/5) + 32;
}

// Hjälpfunktion för att översätta text (till Library-korten)
function formatTempText(text) {
    if (!text) return "";
    if (currentTempUnit === 'C') return text;
    return text.replace(/(\d+(?:\.\d+)?)\s*°C/g, (match, tempC) => {
        return `${Math.round((parseFloat(tempC) * 9/5) + 32)} °F`;
    });
}

// ==============================================================
// --- DEN ENDA SANNA SPARFUNKTIONEN (Med Moln & Celsius-koll) ---
// ==============================================================
function saveProfileToLibrary() {
    let rawName = document.getElementById('custom-profile-name').value.trim().toUpperCase();
    const profileName = rawName !== "" ? rawName : "CUSTOM_1";
    
    let baseYeast = document.getElementById('custom-base-yeast').value;
    if(baseYeast === "") baseYeast = "Unknown Base";

    // Intern hjälpfunktion för att tvinga ner värdet till Celsius innan lagring i databasen
    function toCelsius(val) {
        return currentTempUnit === 'F' ? (val - 32) * 5/9 : val;
    }

    const profileData = {
        s: profileName,             
        p: `Custom (${baseYeast})`, 
        dryHopDay: dryHopData.enabled ? dryHopData.day : null, 
        steps: [
            [profilePoints[0].x, parseFloat(toCelsius(profilePoints[0].y).toFixed(1))],
            [profilePoints[1].x, parseFloat(toCelsius(profilePoints[1].y).toFixed(1))],
            [profilePoints[2].x, parseFloat(toCelsius(profilePoints[2].y).toFixed(1))],
            [profilePoints[3].x, parseFloat(toCelsius(profilePoints[3].y).toFixed(1))],
            [profilePoints[4].x, parseFloat(toCelsius(profilePoints[4].y).toFixed(1))]
        ]
    };

    // 1. Spara ner det i enhetens lokala minne (localStorage)
    let savedProfiles = JSON.parse(localStorage.getItem('customYeastProfiles') || '[]');
    savedProfiles.push(profileData);
    localStorage.setItem('customYeastProfiles', JSON.stringify(savedProfiles));

    // 2. --- NYTT: SKICKA TILL MOLNET DIREKT! ---
    if (typeof pushLibraryToCloud === 'function') {
        pushLibraryToCloud();
    }

    // 3. Magisk Knapp-animation
    const btn = document.getElementById('btn-save-profile');
    const originalText = btn.innerText;
    btn.innerText = "SAVED TO LIBRARY! ✓";
    btn.style.backgroundColor = "#b142ff"; // Lila succéfärg
    btn.style.borderColor = "#b142ff";
    btn.style.color = "#fff";

    // 4. Byt vy snyggt utan omladdning
    setTimeout(() => {
        loadCustomProfiles();
        showView('library');
        
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        const libIcon = document.querySelector('.nav-item[onclick*="library"]');
        if (libIcon) libIcon.classList.add('active');
        
        btn.innerText = originalText;
        btn.style.backgroundColor = ""; 
        btn.style.borderColor = "";
        btn.style.color = "";
        document.getElementById('custom-profile-name').value = '';

        // NYTT: Scrolla ner till botten när vi landar i biblioteket!
        setTimeout(() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, 100);

    }, 1200);
}

// Slutligen: Kör en initiering av enheten vid start
window.addEventListener('DOMContentLoaded', () => {
    // 1. Hämta sparad enhet
    const savedUnit = localStorage.getItem('yeastmaster-unit') || 'C';
    
    // 2. Om användaren hade 'F' sparat, måste vi räkna om startpunkterna en gång
    if (savedUnit === 'F') {
        currentTempUnit = 'F'; // Sätt enheten direkt
        profilePoints.forEach(p => {
            p.y = (p.y * 9/5) + 32;
        });
    }

    // 3. Uppdatera UI:t (detta tänder rätt knappar och ritar grafen)
    setTempUnit(savedUnit);
    
    // ... resten av din DOMContentLoaded-kod (loadCustomProfiles, etc) ...
});

// Hjälpfunktion för att göra decimaldagar läsbara (t.ex. 3.2 -> "3 d and 5 h")
function formatDaysToHuman(decimalDays) {
    let d = Math.floor(decimalDays);
    let h = Math.round((decimalDays - d) * 24);
    
    // Om timmarna avrundas upp till 24, lägg till en dag istället
    if (h === 24) {
        d++;
        h = 0;
    }
    
    if (d === 0) return h + " h"; // Om det gått mindre än ett dygn, visa bara timmar
    if (h === 0) return d + " d"; // Om det är exakta dygn, visa bara dagar
    
    return `${d} d and ${h} h`;
}

// ==========================================
// --- GLOBAL CLOUD LIBRARY SYNC ---
// ==========================================

// 1. Skickar ditt lokala bibliotek TILL molnet
async function pushLibraryToCloud() {
    const user = auth.currentUser;
    if (!user) return;

    // 1. Hämta båda listorna från det lokala minnet med RÄTT nycklar
    const customProfiles = JSON.parse(localStorage.getItem('customYeastProfiles') || '[]');
    const houseStrains = JSON.parse(localStorage.getItem('houseStrains') || '[]');

    // 2. Paketera dem i ett gemensamt objekt för molnet
    const libraryData = {
        customProfiles: customProfiles,
        houseStrains: houseStrains
    };

    try {
        const response = await fetch(`${API_BASE}/my-library`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                uid: user.uid,
                libraryData: libraryData
            })
        });
        
        if (response.ok) {
            console.log("☁️ Hela biblioteket (Strains & Profiles) pushades till molnet!");
        }
    } catch (err) {
        console.error("Kunde inte synka till molnet:", err);
    }
}

// 2. Hämtar ditt bibliotek FRÅN molnet (Körs vid inloggning)
async function fetchLibraryFromCloud(uid) {
    try {
        const res = await fetch(`${API_BASE}/my-library?uid=${uid}`);
        if (res.ok) {
            const data = await res.json();
            
            // Vi kollar om vi fick något svar överhuvudtaget
            if (data) {
                // 1. Hantera Custom Profiles (dina Arcane Lab-recept)
                // Vi kollar om objektet innehåller profiler
                if (data.customProfiles && Array.isArray(data.customProfiles)) {
                    localStorage.setItem('customYeastProfiles', JSON.stringify(data.customProfiles));
                    
                    // Kör din befintliga laddningsfunktion för profiler
                    if (typeof loadCustomProfiles === "function") {
                        loadCustomProfiles(); 
                    }
                }
                
                // 2. Hantera House Strains (dina vildfångade jäststammar)
                // Vi kollar om objektet innehåller din House Bank
                if (data.houseStrains && Array.isArray(data.houseStrains)) {
                    localStorage.setItem('houseStrains', JSON.stringify(data.houseStrains));
                    
                    // Kör din nya laddningsfunktion för husjäster
                    if (typeof loadHouseStrains === "function") {
                        loadHouseStrains(); 
                    }
                }

                // 3. Uppdatera UI:t
                // Nu när båda typerna är sparade lokalt, ritar vi om biblioteket
                if (typeof renderYeastLibrary === "function") {
                    renderYeastLibrary();
                }

                console.log("☁️ Global library (Profiles & House Bank) downloaded and synced!");
            }
        }
    } catch (err) {
        console.error("Failed to fetch library from cloud:", err);
    }
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

function saveNickname(deviceId, name) {
    if (!deviceId) return;
    const nicknames = JSON.parse(localStorage.getItem('yeastmaster-nicknames') || '{}');
    nicknames[deviceId] = name;
    localStorage.setItem('yeastmaster-nicknames', JSON.stringify(nicknames));
}

function updateDashboardNickname(name) {
    const display = document.querySelector('.device-name-display');
    if (display) display.innerText = name.toUpperCase();
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
        
        // Uppdatera Dashboarden
        if (typeof updateDashboard === 'function') updateDashboard();
    });
}

    // Huvudmotorn: Inloggningsvakten
auth.onAuthStateChanged(async (user) => {
    isAuthResolved = true; // <-- LÄGG TILL DENNA RAD HÄR! Nu vet appen att Firebase är redo.

    const soulLoginPrompt = document.getElementById('soul-login-prompt');
    const logoutBtn = document.getElementById('btn-logout'); // <-- 1. Hämta knappen

if (user) {
        // --- ANVÄNDAREN ÄR INLOGGAD ---
        if (soulLoginPrompt) soulLoginPrompt.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'block'; // <-- 2. Visa knappen!

        await fetchLibraryFromCloud(user.uid);

        try {
            // EN HÄMTNING FRÅN SERVER
            const res = await fetch(`${API_BASE}/my-devices?uid=${user.uid}`);
            const devices = await res.json();
            
            if (devices.length > 0) {
                activeDeviceId = devices[0].device_id; 
                
                // 1. FYLL RULLISTAN I SETTINGS (Dashboard Switcher)
                if (deviceSelect) {
                    deviceSelect.innerHTML = ""; 
                    devices.forEach(dev => {
                        const opt = document.createElement('option');
                        opt.value = dev.device_id;
                        const localName = getSavedNickname(dev.device_id);
                        opt.textContent = localName !== "MIN YEASTMASTER" ? localName : (dev.name || dev.device_id);
                        deviceSelect.appendChild(opt);
                    });
                    deviceSelect.value = activeDeviceId; 
                }

                // 2. FYLL RULLISTAN I BIBLIOTEKET (Sync Target)
                const syncDropdown = document.getElementById('sync-target-device');
                if (syncDropdown) {
                    syncDropdown.innerHTML = "";
                    devices.forEach(dev => {
                        const opt = document.createElement('option');
                        opt.value = dev.device_id;
                        const localName = getSavedNickname(dev.device_id);
                        opt.textContent = localName !== "MIN YEASTMASTER" ? localName : (dev.name || dev.device_id);
                        syncDropdown.appendChild(opt);
                    });
                }
                
                // 3. LADDA NAMN TILL DASHBOARD & FÄLT
                const currentNick = getSavedNickname(activeDeviceId);
                if (nickInput) nickInput.value = currentNick !== "MIN YEASTMASTER" ? currentNick : "";
                updateDashboardNickname(currentNick);

                showView('dashboard');
                updateDashboard(); 
            } else {
                showView('claim');
            }
        } catch (err) {
            console.error("Auth fetch error:", err);
            // Nödåtgärd om servern strular: Lägg till Demo-Kylen
            if (deviceSelect) deviceSelect.innerHTML = '<option value="TEST">Demo Kyl</option>';
        }
    } else {
        // ==========================================
        // --- ANVÄNDARE ÄR UTLOGGAD (GÄST-LÄGE) ---
        // ==========================================
        activeDeviceId = null; 
        selectedStrains = []; 
        
        if (logoutBtn) logoutBtn.style.display = 'none'; // <--- GÖM KNAPPEN! (LÄGG TILL)
        
        // Återställ rullistor
        if (deviceSelect) deviceSelect.innerHTML = '<option value="">Logga in för att se enheter</option>';
        const syncDropdown = document.getElementById('sync-target-device');
        if (syncDropdown) syncDropdown.innerHTML = '<option value="">Logga in för att synka</option>';
        
        // Visa login-uppmaningen på startsidan
        if (soulLoginPrompt) soulLoginPrompt.style.display = 'block';
        
        // 1. VIKTIGT: Kör uppdateringen! Eftersom activeDeviceId är null, 
        // kommer din updateDashboard att direkt rendera din Demo-vy!
        if (typeof updateDashboard === 'function') updateDashboard();
        
        // 2. Tvinga dem inte till login! Om de laddar sidan på nytt, låt dem 
        // stanna på 'soul'-vyn (startsidan) eller den vy de just nu befinner sig i.
        // Vi tar bort showView('login') helt.
        
        console.log("Gäst-läge aktiverat. Full tillgång till demo och inställningar!");
    }
});

// Innehållet för de olika modulerna
const academyModules = {
  
    // --- 0. INTRO: WELCOME TO THE LAB ---
    'intro': `
        <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Welcome to the Lab</h2>

        <div class="ym-academy-layout">
            <div class="ym-academy-sidebar">
                <h4>Your Path to Mastery:</h4>
                <ul class="wizard-checklist">
                    <li id="intro-mindset">1. The Mindset</li>
                    <li id="intro-gear">2. The Kitchen Lab</li>
                    <li id="intro-rewards">3. The Rewards</li>
                    <li id="intro-roadmap">4. The Roadmap</li>
                </ul>
            </div>

            <div class="ym-academy-content" id="module-wizard">
                <div class="wizard-dots" id="wizard-dots">
                    <div class="wizard-dot active"></div>
                    <div class="wizard-dot"></div>
                    <div class="wizard-dot"></div>
                    <div class="wizard-dot"></div>
                </div>

                <div class="wizard-step active" data-step="0">
                    <div class="wizard-icon">🧠✨</div>
                    <h3>1. The Microbiologist Mindset</h3>
                    <p>Yeast management sounds intimidating. People talk about sterile labs, laminar flow hoods, and expensive microscopes.</p>
                    <p style="color: var(--accent-color); font-weight: bold; margin: 15px 0;">Forget all that for now.</p>
                    <p>If you can brew a batch of beer without infecting it, you already have the hygiene skills needed to harvest and reuse yeast. Good sanitation is 95% of the work!</p>
                </div>

                <div class="wizard-step" data-step="1">
                    <div class="wizard-icon">🫙🧽</div>
                    <h3>2. The Kitchen Lab</h3>
                    <p>You don't need a laboratory to start. Your kitchen counter is perfect. The core tools for your very first yeast harvest are incredibly simple:</p>
                    <ul style="color: #aaa; margin-top: 15px; line-height: 1.6; padding-left: 20px;">
                        <li>A spray bottle of <strong>Star San</strong> (or similar sanitizer).</li>
                        <li>A few clean <strong>Mason Jars</strong> with lids.</li>
                        <li>Some <strong>Dry Malt Extract (DME)</strong> to feed the yeast.</li>
                        <li>A regular cooking pot to boil sterile water.</li>
                    </ul>
                </div>

                <div class="wizard-step" data-step="2">
                    <div class="wizard-icon">💰🍺</div>
                    <h3>3. The Rewards</h3>
                    <p>Why go through the trouble of saving and washing your own yeast?</p>
                    <ul style="color: #aaa; margin-top: 15px; line-height: 1.6; padding-left: 20px;">
                        <li><strong style="color: #fff;">Save Money:</strong> Liquid yeast is expensive. Buy a premium pack once, wash it, and use it for your next 5-10 batches!</li>
                        <li><strong style="color: #fff;">Better Beer:</strong> Pitching a massive, healthy slurry of your own yeast leads to faster, cleaner fermentations without lag time.</li>
                        <li><strong style="color: #fff;">Independence:</strong> Wake up on a Saturday and brew spontaneously, knowing you have world-class yeast ready in the fridge.</li>
                    </ul>
                </div>

                <div class="wizard-step" data-step="3">
                    <div class="wizard-icon">🗺️🚀</div>
                    <h3>4. The Roadmap</h3>
                    <p>Don't try to learn everything at once. Follow this path at your own pace:</p>
                    <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent-color); margin-top: 15px; font-size: 0.9rem; line-height: 1.6;">
                    <strong style="color: #fff;">Level 1:</strong> Buy an Erlenmeyer flask and learn <em>Yeast Starters</em>.<br>
                    <strong style="color: #fff;">Level 2:</strong> Master <em>Yeast Washing</em> from a finished beer.<br>
                           <strong style="color: #fff;">Level 3:</strong> Build or buy a <em>Stir Plate</em> for massive cell growth.<br>
                        <strong style="color: #fff;">Level 4:</strong> The final boss. <em>Agar Plates</em> and <em>Cell Counting</em>.
                    </div>
                </div>

                <div class="wizard-controls">
                    <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Back</button>
                    <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Next ➔</button>
                </div>
            </div>
        </div>
    `,    
    
      // --- 1. Kalkylatorn ---
    'calc': `
        <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Pitch Calculator</h2>
        <div class="calc-container" style="margin: 0; padding: 0; background: transparent; border: none;">
            <div class="calc-inputs">
                <div class="input-group">
                    <label>Batch Volume (L)</label>
                    <input type="number" id="pitch-vol" value="20" oninput="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                </div>
                <div class="input-group">
                    <label>Gravity (OG)</label>
                    <input type="number" id="pitch-og" value="1.050" step="0.001" oninput="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                </div>
                <div class="input-group">
                    <label>Pitch Rate (M/ml/°P)</label>
                    <select id="pitch-rate" onchange="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                        <option value="0.75">0.75 (Standard Ale)</option>
                        <option value="1.0">1.0 (High Gravity Ale)</option>
                        <option value="1.5">1.5 (Standard Lager)</option>
                    </select>
                </div>
                <div class="input-group">
                    <label>Harvest Date</label>
                    <input type="date" id="pitch-date" onchange="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                </div>
            </div>

            <div class="calc-results" style="display: flex; gap: 15px; margin-top: 20px;">
                <div class="res-card" style="flex: 1; background: #111; padding: 20px; border-radius: 12px; border: 1px solid #333;">
                    <span class="res-label" style="display: block; font-size: 0.7rem; color: #888; font-weight: 800; margin-bottom: 5px;">CELLS NEEDED</span>
                    <span class="res-val" id="res-needed" style="display: block; font-size: 2rem; font-weight: 800; color: #fff;">--</span>
                    <span class="res-unit" style="font-size: 0.8rem; color: #666;">Billion cells</span>
                </div>
                <div class="res-card accent" style="flex: 1; background: #111; padding: 20px; border-radius: 12px; border: 1px solid #333; border-left: 4px solid var(--accent-color);">
                    <span class="res-label" style="display: block; font-size: 0.7rem; color: #888; font-weight: 800; margin-bottom: 5px;">EST. VIABILITY</span>
                    <span class="res-val" id="res-viability" style="display: block; font-size: 2rem; font-weight: 800; color: #fff;">--</span>
                    <span class="res-unit" id="res-days-old" style="font-size: 0.8rem; color: #666;">New</span>
                </div>
            </div>
            <div id="pitch-warning" class="warning-box" style="display:none; margin-top: 20px; background: rgba(255, 68, 68, 0.1); border: 1px solid #ff4444; color: #ff4444; padding: 15px; border-radius: 8px; font-size: 0.9rem; text-align: center; font-weight: 600;">
                ⚠️ Warning: Underpitching detected. Consider building a starter!
            </div>
        </div>
    `,

   // --- 2. YEAST STARTERS 101 ---
    'starters': `
        <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Yeast Starters 101</h2>
        
        <div class="ym-academy-layout">
            
            <div class="ym-academy-sidebar">
                <h4>You will need:</h4>
                <ul class="wizard-checklist" id="wizard-checklist">
                    <li id="item-flask">Erlenmeyer Flask</li>
                    <li id="item-scale">Precision Scale</li>
                    <li id="item-dme">Light DME</li>
                    <li id="item-water">Clean Water</li>
                    <li id="item-heat">Heat Source</li>
                    <li id="item-yeast">Yeast Pack</li>
                    <li id="item-stirbar">Stir Bar</li>
                    <li id="item-stirplate">Stir Plate</li>
                </ul>
            </div>

            <div class="ym-academy-content" id="module-wizard">
                <div class="wizard-dots" id="wizard-dots">
                    <div class="wizard-dot active"></div>
                    <div class="wizard-dot"></div>
                    <div class="wizard-dot"></div>
                    <div class="wizard-dot"></div>
                </div>

                <div class="wizard-step active" data-step="0">
                    <div class="wizard-icon">🧽🧪</div>
                    <h3>1. Clean & Prepare</h3>
                    <p>Before we start, hygiene is everything. Make sure your Erlenmeyer flask is completely clean and sanitized.</p>
                </div>

                <div class="wizard-step" data-step="1">
                    <div class="wizard-icon">⚖️🌾</div>
                    <h3>2. The Golden Ratio</h3>
                    <p>Place the flask on the scale. Weigh exactly <strong>100g of DME</strong> for every <strong>1 Liter of water</strong>. This creates a perfect 1.036 specific gravity.</p>
                </div>

                <div class="wizard-step" data-step="2">
                    <div class="wizard-icon">🔥🌡️</div>
                    <h3>3. Boil & Sterilize</h3>
                    <p>Move the flask to your heat source. Boil gently for 10-15 minutes to sterilize the wort. <br><br><em>Pro-tip: Add a drop of Fermcap-S to prevent boil-overs!</em></p>
                </div>

                <div class="wizard-step" data-step="3">
                    <div class="wizard-icon">❄️🌪️</div>
                    <h3>4. Chill, Pitch & Spin</h3>
                    <p>Cool the flask to 20°C (68°F). Pitch your yeast, drop in the stir bar, and place it on the stir plate for 24-48 hours. Watch those cells multiply!</p>
                </div>

                <div class="wizard-controls">
                    <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Back</button>
                    <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Next ➔</button>
                </div>
            </div>
        </div>
    `,

    // --- 3. YEAST WASHING 101 ---
    'washing': `
        <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Yeast Washing 101</h2>
        
        <div class="ym-academy-layout">
            
            <div class="ym-academy-sidebar">
                <h4>You will need:</h4>
                <ul class="wizard-checklist" id="wizard-checklist">
                    <li id="item-jars">Mason Jars</li>
                    <li id="item-starsan">Star San</li>
                    <li id="item-water">Sterile Water (Cooled)</li>
                    <li id="item-cake">Yeast Cake</li>
                    <li id="item-fridge">Fridge Space</li>
                </ul>
            </div>

            <div class="ym-academy-content" id="module-wizard">
                <div class="wizard-dots" id="wizard-dots">
                    <div class="wizard-dot active"></div>
                    <div class="wizard-dot"></div>
                    <div class="wizard-dot"></div>
                    <div class="wizard-dot"></div>
                    <div class="wizard-dot"></div>
                </div>

                <div class="wizard-step active" data-step="0">
                    <div class="wizard-icon">🧽💧</div>
                    <h3>1. Prep & Dilute</h3>
                    <p>Sanitize everything with Star San. Pour your pre-boiled, cooled (sterile) water directly into the fermenter right on top of the dirty yeast cake.</p>
                </div>

                <div class="wizard-step" data-step="1">
                    <div class="wizard-icon">🌪️💦</div>
                    <h3>2. Shake it up</h3>
                    <p>Put the lid back on the fermenter and swirl it vigorously! Break the yeast cake apart completely until the water looks like a thick, muddy slurry.</p>
                </div>

                <div class="wizard-step" data-step="2">
                    <div class="wizard-icon">⏳🕰️</div>
                    <h3>3. Let Gravity Work</h3>
                    <p>Let the fermenter sit completely still for <strong>20-30 minutes</strong>. The heavy, dark trub and hop matter will sink rapidly, leaving the healthy yeast suspended in the milky liquid above.</p>
                </div>

                <div class="wizard-step" data-step="3">
                    <div class="wizard-icon">🫗✨</div>
                    <h3>4. Harvest the Gold</h3>
                    <p>Carefully decant the milky liquid into your sanitized mason jars. Stop pouring the second you see the dark trub from the bottom trying to follow along.</p>
                </div>

                <div class="wizard-step" data-step="4">
                    <div class="wizard-icon">🧊🧮</div>
                    <h3>5. Crash & Pitch</h3>
                    <p>Put the jars in the fridge. In a few days, the yeast will compact into a clean white layer. On brew day, decant the water, let it warm up, and measure the slurry into our Pitch Calculator!</p>
                </div>

                <div class="wizard-controls">
                    <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Back</button>
                    <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Next ➔</button>
                </div>
            </div>
        </div>
    `,

    // --- 4. AGAR PLATES ---
    'agar': `
        <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Mastering Agar Plates</h2>
        
        <div class="ym-academy-layout">
            <div class="ym-academy-sidebar">
                <h4>The Lab Kit:</h4>
                <ul class="wizard-checklist">
                    <li id="agar-powder">Agar-Agar Powder</li>
                    <li id="agar-dme">Light DME</li>
                    <li id="agar-dishes">Petri Dishes</li>
                    <li id="agar-loop">Inoculation Loop</li>
                    <li id="agar-flame">Flame (Bunsen/Torch)</li>
                </ul>
            </div>

            <div class="ym-academy-content" id="module-wizard">
                <div class="wizard-dots" id="wizard-dots">
                    <div class="wizard-dot active"></div>
                    <div class="wizard-dot"></div>
                    <div class="wizard-dot"></div>
                    <div class="wizard-dot"></div>
                </div>

                <div class="wizard-step active" data-step="0">
                    <div class="wizard-icon">🥣🔥</div>
                    <h3>1. The Magic Gel</h3>
                    <p>Agar is just a gelatin-like substance made from algae. By mixing it with standard yeast starter wort (DME and water) and boiling it, we create a solid, sterile food surface for yeast to grow on.</p>
                </div>

                <div class="wizard-step" data-step="1">
                    <div class="wizard-icon">🧫✨</div>
                    <h3>2. Pouring Plates</h3>
                    <p>In a draft-free room (next to an open flame to create a sterile updraft that pushes dust away), carefully pour the hot liquid into sterile Petri dishes. Let them cool and solidify.</p>
                </div>

                <div class="wizard-step" data-step="2">
                    <div class="wizard-icon">〰️🦠</div>
                    <h3>3. Streaking for Isolation</h3>
                    <p>Dip your sterilized loop into a yeast sample. Gently drag it across the agar surface in a zig-zag pattern. Sterilize the loop, drag it through your first lines, and make new zig-zags. This spreads the cells thinner and thinner.</p>
                </div>

                <div class="wizard-step" data-step="3">
                    <div class="wizard-icon">⚪🔍</div>
                    <h3>4. Harvesting a Colony</h3>
                    <p>Incubate the plates in the dark at room temp. After a few days, you'll see individual white dots. Each dot is a pure colony grown from a <strong>single yeast cell</strong>! Scoop one up and pitch it into a tiny test-tube starter.</p>
                </div>

                <div class="wizard-controls">
                    <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Back</button>
                    <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Next ➔</button>
                </div>
            </div>
        </div>
    `,

    // --- 5. WILD YEAST ---
    'wild': `
        <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Capturing Wild Yeast</h2>
        
        <div class="ym-academy-layout">
            <div class="ym-academy-sidebar">
                <h4>The Hunter's Kit:</h4>
                <ul class="wizard-checklist">
                    <li id="wild-jars">Mason Jars</li>
                    <li id="wild-wort">Low-Gravity Wort</li>
                    <li id="wild-hops">A few Hop Pellets</li>
                    <li id="wild-cloth">Cheesecloth</li>
                    <li id="wild-fruit">Fruit / Flowers</li>
                </ul>
            </div>

            <div class="ym-academy-content" id="module-wizard">
                <div class="wizard-dots" id="wizard-dots">
                    <div class="wizard-dot active"></div>
                    <div class="wizard-dot"></div>
                    <div class="wizard-dot"></div>
                    <div class="wizard-dot"></div>
                </div>

                <div class="wizard-step active" data-step="0">
                    <div class="wizard-icon">🍯🛡️</div>
                    <h3>1. The Bait</h3>
                    <p>Create a weak wort (1.020 SG) and boil it with a few hop pellets. Hops are crucial here—they act as a shield against unwanted bacteria (like Lactobacillus), giving wild yeast a head start to take over the jar.</p>
                </div>

                <div class="wizard-step" data-step="1">
                    <div class="wizard-icon">🍎🌿</div>
                    <h3>2. The Capture</h3>
                    <p>Drop unwashed, organic fruit (apples, grapes, berries) or local flowers into your jar of cooled wort. Alternatively, cover the jar with cheesecloth and leave it under a fruit tree overnight to catch yeast riding the breeze.</p>
                </div>

                <div class="wizard-step" data-step="2">
                    <div class="wizard-icon">👃⚠️</div>
                    <h3>3. The Sniff Test</h3>
                    <p>Cover with foil and wait 3-5 days. If it ferments and smells like vomit, feet, or cheese—dump it (bacteria won). If it smells bready, fruity, or like Belgian spice—congratulations, you caught wild yeast!</p>
                </div>

                <div class="wizard-step" data-step="3">
                    <div class="wizard-icon">🧫👑</div>
                    <h3>4. Taming the Beast</h3>
                    <p>Wild captures are always a mix of different yeast strains and maybe some wild mold. To make a reliable brewing yeast from this, use the <em>Agar Plate streaking method</em> to isolate a single, pure, great-smelling colony!</p>
                </div>

                <div class="wizard-controls">
                    <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Back</button>
                    <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Next ➔</button>
                </div>
            </div>
        </div>
    `,

// --- 6. STIR PLATES 101 ---
    'stirplate': `
        <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">The Magic of Stir Plates</h2>
        
        <div class="ym-academy-layout">
            <div class="ym-academy-sidebar">
                <h4>Why use one?</h4>
                <ul class="wizard-checklist">
                    <li class="active-item" style="border-bottom: 1px dashed #333;">Constant Oxygenation</li>
                    <li class="active-item" style="border-bottom: 1px dashed #333;">Drives off toxic CO2</li>
                    <li class="active-item" style="border-bottom: 1px dashed #333;">Keeps yeast suspended</li>
                    <li class="active-item" style="color: var(--accent-color) !important;">10x Cell Growth!</li>
                </ul>
            </div>

            <div class="ym-academy-content" style="display: block !important;">
                <div style="display: flex; gap: 20px; align-items: flex-start; margin-bottom: 20px;">
                    <div style="font-size: 3rem; line-height: 1;">🌪️</div>
                    <div>
                        <h3 style="color: var(--accent-color); margin-top: 0; margin-bottom: 10px;">The Vortex</h3>
                        <p style="color: #ccc; line-height: 1.6; font-size: 0.95rem;">A magnetic stir plate creates a continuous vortex in your Erlenmeyer flask. This constant motion drastically increases the surface area of the liquid exposed to the air, pulling in oxygen which is crucial for yeast reproduction.</p>
                    </div>
                </div>

                <div style="display: flex; gap: 20px; align-items: flex-start;">
                    <div style="font-size: 3rem; line-height: 1;">🧲</div>
                    <div>
                        <h3 style="color: var(--accent-color); margin-top: 0; margin-bottom: 10px;">How it works</h3>
                        <p style="color: #ccc; line-height: 1.6; font-size: 0.95rem;">Inside the box is a spinning motor with a magnet attached to it. You drop a Teflon-coated "stir bar" (which is also a magnet) into your flask. As the motor spins, the stir bar locks onto the magnetic field and spins with it.</p>
                    </div>
                </div>

                <div style="margin-top: 30px; background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; border-left: 4px solid #f39c12;">
                    <strong style="color: #f39c12;">Pro-Tip:</strong> You don't need a massive tornado! A small dimple on the surface of the liquid is enough to keep the yeast in suspension and exchange gases perfectly.
                </div>
            </div>
        </div>
    `,

  // --- 7. CELL COUNTING (HEMOCYTOMETER) ---
    'counting': `
        <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Pro Cell Counting</h2>
        
        <div class="ym-academy-layout">
            <div class="ym-academy-sidebar">
                <h4>The Pro Gear:</h4>
                <ul class="wizard-checklist">
                    <li id="item-hemo">Hemocytometer</li>
                    <li id="item-microscope">Microscope (400x)</li>
                    <li id="item-blue">Methylene Blue</li>
                    <li id="item-pipette">Precision Pipettes</li>
                    <li id="item-counter">Tally Counter</li>
                </ul>
            </div>

            <div class="ym-academy-content" id="module-wizard">
                <div class="wizard-dots" id="wizard-dots">
                    <div class="wizard-dot active"></div>
                    <div class="wizard-dot"></div>
                    <div class="wizard-dot"></div>
                    <div class="wizard-dot"></div>
                    <div class="wizard-dot"></div>
                </div>

                <div class="wizard-step active" data-step="0">
                    <div class="wizard-icon">🧪💧</div>
                    <h3>1. Dilute & Stain</h3>
                    <p>Yeast slurry is way too crowded to count. We must dilute it accurately! Mix 1 part slurry with 99 parts distilled water (a <strong>1:100 dilution</strong>).</p>
                    <p style="font-size: 0.9em; color: #aaa;">Add a drop of <strong>Methylene Blue</strong> to the sample. Wait 1-2 minutes. Living cells will push the dye out and look clear. Dead cells will be stained blue!</p>
                </div>

                <div class="wizard-step" data-step="1">
                    <div class="wizard-icon">🔬🩸</div>
                    <h3>2. Load the Chamber</h3>
                    <p>A Hemocytometer is a thick glass slide with a microscopic, laser-etched grid. Place the special coverslip over the grid.</p>
                    <p style="font-size: 0.9em; color: #aaa;">Touch your pipette to the edge of the coverslip. <em>Capillary action</em> will suck the liquid right in. Let it sit for 3 minutes so the cells settle on the glass.</p>
                </div>

                <div class="wizard-step" data-step="2">
                    <h3 style="margin-bottom: 10px;">3. The 5 Squares</h3>
                    <p style="font-size: 0.9em; margin-bottom: 15px;">Locate the central grid at 400x magnification. It has 25 medium squares. To save time, we only count the <strong>4 corners</strong> and the <strong>center</strong> square (highlighted below).</p>
                    
                    <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 2px; background: #444; width: 140px; height: 140px; margin: 0 auto 15px; border: 2px solid #666; padding: 2px;">
                        <div style="background: var(--accent-color);"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: var(--accent-color);"></div>
                        <div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div>
                        <div style="background: #111;"></div><div style="background: #111;"></div><div style="background: var(--accent-color);"></div><div style="background: #111;"></div><div style="background: #111;"></div>
                        <div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div>
                        <div style="background: var(--accent-color);"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: var(--accent-color);"></div>
                    </div>
                </div>

                <div class="wizard-step" data-step="3">
                    <div class="wizard-icon">📐🛑</div>
                    <h3>4. The L-Rule</h3>
                    <p>Some cells will sit exactly on the boundary lines. If you count them in one square, you might accidentally count them again in the next!</p>
                    <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent-color); margin-top: 15px; text-align: left;">
                        <strong style="color: #fff;">The Universal Rule:</strong><br>
                        Count cells that touch the <strong>Top</strong> and <strong>Right</strong> lines.<br>
                        <em>Ignore</em> cells touching the <strong>Bottom</strong> and <strong>Left</strong> lines.
                    </div>
                </div>

                <div class="wizard-step" data-step="4">
                    <div class="wizard-icon">🧮✖️</div>
                    <h3>5. The Magic Formula</h3>
                    <p>Add up all the living (clear) cells you found in those 5 squares. Now plug it into the formula to find out how many cells are in one milliliter of your slurry!</p>
                    <div style="background: #111; padding: 15px; border-radius: 8px; border: 1px dashed #444; margin-top: 15px; font-family: monospace; font-size: 0.95rem; color: var(--accent-color);">
                        (Cells Counted / 5) <br>
                        × 25 <br>
                        × Dilution Factor (100) <br>
                        × 10,000 <br>
                        = Cells per mL
                    </div>
                </div>

                <div class="wizard-controls">
                    <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Back</button>
                    <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Next ➔</button>
                </div>
            </div>
        </div>
    `,

};

// ==========================================
// --- LOGIK FÖR WIZARDEN OCH CHECKLISTAN ---
// ==========================================
let currentWizardStep = 0;
let totalWizardSteps = 0;
let stepActiveItems = {}; 

// Körs när man trycker Next eller Back
function changeWizardStep(direction) {
    currentWizardStep += direction;

    if (currentWizardStep < 0) currentWizardStep = 0;
    
    if (currentWizardStep >= totalWizardSteps) {
        closeAcademyModule();
        return;
    }

    // 1. Uppdatera Wizarden (Text och Prickar)
    document.querySelectorAll('.wizard-step').forEach(step => {
        step.classList.remove('active');
        if (parseInt(step.getAttribute('data-step')) === currentWizardStep) {
            step.classList.add('active');
        }
    });

    document.querySelectorAll('.wizard-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentWizardStep);
    });

    const prevBtn = document.getElementById('wiz-prev');
    const nextBtn = document.getElementById('wiz-next');

    if (prevBtn && nextBtn) {
        prevBtn.disabled = currentWizardStep === 0;
        nextBtn.innerText = currentWizardStep === totalWizardSteps - 1 ? "Finish! ✓" : "Next ➔";
    }

    // 2. Den Levande Checklistan!
    document.querySelectorAll('.wizard-checklist li').forEach(li => {
        li.classList.remove('active-item');
    });

    const itemsToHighlight = stepActiveItems[currentWizardStep];
    if (itemsToHighlight) {
        itemsToHighlight.forEach(itemId => {
            const element = document.getElementById(itemId);
            if (element) {
                element.classList.add('active-item');
            }
        });
    }
}

// ==========================================
// --- ÖPPNA/STÄNG MODULER ---
// ==========================================
function openAcademyModule(moduleId) {
    const overview = document.getElementById('lab-content-academy');
    const moduleView = document.getElementById('academy-module-view');
    const contentArea = document.getElementById('academy-module-content');

    contentArea.innerHTML = academyModules[moduleId] || '<p style="color: #ff4444;">Module not found.</p>';

    overview.style.display = 'none';
    moduleView.style.display = 'block';

    // Om kalkylatorn öppnas: Tvinga den att räkna direkt
    if (moduleId === 'calc') {
        const dateInput = document.getElementById('pitch-date');
        if (dateInput && !dateInput.value) dateInput.valueAsDate = new Date();
        if (typeof calculatePitch === 'function') calculatePitch();
    } 
else if (moduleId === 'intro') {
        currentWizardStep = 0;
        totalWizardSteps = 4;
        stepActiveItems = {
            0: ['intro-mindset'],
            1: ['intro-gear'],
            2: ['intro-rewards'],
            3: ['intro-roadmap']
        };
        setTimeout(() => changeWizardStep(0), 10);
    }
    // Om vi öppnar Yeast Starters
    else if (moduleId === 'starters') {
        currentWizardStep = 0;
        totalWizardSteps = 4;
        stepActiveItems = {
            0: ['item-flask'],
            1: ['item-flask', 'item-scale', 'item-dme', 'item-water'],
            2: ['item-flask', 'item-heat'],
            3: ['item-flask', 'item-yeast', 'item-stirbar', 'item-stirplate']
        };
        setTimeout(() => changeWizardStep(0), 10);
    }
    // Om vi öppnar Yeast Washing
    else if (moduleId === 'washing') {
        currentWizardStep = 0;
        totalWizardSteps = 5; 
        stepActiveItems = {
            0: ['item-starsan', 'item-water', 'item-cake'],
            1: ['item-cake'],
            2: ['item-cake'],
            3: ['item-jars'],
            4: ['item-jars', 'item-fridge']
        };
        setTimeout(() => changeWizardStep(0), 10);
    }
else if (moduleId === 'counting') {
        currentWizardStep = 0;
        totalWizardSteps = 5; // Nu har vi 5 djupgående steg!
        stepActiveItems = {
            0: ['item-blue', 'item-pipette'], // Steg 1 handlar om spädning och färg
            1: ['item-hemo'],                 // Steg 2 är själva glaset
            2: ['item-microscope'],           // Steg 3 är titta i mikroskopet
            3: ['item-microscope'],           // Steg 4 (L-rule) är fortfarande mikroskopet
            4: ['item-counter']               // Steg 5 är matematiken
        };
        setTimeout(() => changeWizardStep(0), 10);
    }

    else if (moduleId === 'agar') {
        currentWizardStep = 0;
        totalWizardSteps = 4;
        stepActiveItems = {
            0: ['agar-powder', 'agar-dme'],
            1: ['agar-dishes', 'agar-flame'],
            2: ['agar-loop', 'agar-flame'],
            3: []
        };
        setTimeout(() => changeWizardStep(0), 10);
    }
    else if (moduleId === 'wild') {
        currentWizardStep = 0;
        totalWizardSteps = 4;
        stepActiveItems = {
            0: ['wild-jars', 'wild-wort', 'wild-hops'],
            1: ['wild-cloth', 'wild-fruit'],
            2: [],
            3: []
        };
        setTimeout(() => changeWizardStep(0), 10);
    }
}

function closeAcademyModule() {
    document.getElementById('academy-module-view').style.display = 'none';
    document.getElementById('lab-content-academy').style.display = 'block';
}

// =========================================================
// ================= INTERAKTIVT ÖLGLAS (HOME) =============
// =========================================================
function initInteractiveGlass() {
    const glass = document.getElementById('interactive-beer-glass');
    if (!glass) return;

    const beerStyles = ['pilsner', 'amber', 'ipa', 'red', 'stout'];
    let currentStyleIndex = 0;
    
    let pressTimer;
    let isPressing = false;
    let isAnimating = false;
    const PRESS_DURATION = 600; // 600ms = perfekt tid för ett mobil-långtryck

    // 1. Byt Färg (Klick)
    function cycleColor() {
        if (isAnimating) return;
        currentStyleIndex = (currentStyleIndex + 1) % beerStyles.length;
        beerStyles.forEach(style => glass.classList.remove('color-' + style));
        glass.classList.add('color-' + beerStyles[currentStyleIndex]);
    }

    // 2. Drick & Fyll på (Med slumpad väntetid OCH slumpad ölsort!)
    function startDrain() {
        if (isAnimating) return;
        isAnimating = true;
        
        glass.classList.remove('anim-fill');
        
        // Tvingar webbläsaren att rita om (reflow) innan den tömmer
        void glass.offsetWidth; 
        
        glass.classList.add('anim-drain');

        const drainDuration = 2000; 
        // Slumpar ett värde mellan 0 och 4750, och plussar sedan alltid på 250.
        // Resultat: Alltid minst 250ms, och som mest 5000ms!
        const randomEmptyWait = Math.floor(Math.random() * 4750) + 250;
        const totalWaitBeforeRefill = drainDuration + randomEmptyWait;
        const refillAnimationDuration = 2000; 

        // 1. Vänta tills glaset är tomt OCH den slumpmässiga pausen är över
        setTimeout(() => {
            glass.classList.remove('anim-drain');
            
            // ==========================================
            // --- MAGI: SLUMPA FRAM EN NY ÖLSORT! ---
            // ==========================================
            const beerColors = ['color-pilsner', 'color-amber', 'color-ipa', 'color-red', 'color-stout'];
            
            // Ta bort ALLA eventuella gamla färgklasser från glaset först
            glass.classList.remove(...beerColors);
            
            // Dra en vinnare ur hatten (slumpa fram ett index mellan 0 och 4)
            const randomColor = beerColors[Math.floor(Math.random() * beerColors.length)];
            
            // Lägg på den vinnande färgen på glaset
            glass.classList.add(randomColor);
            // ==========================================

            // Nu när glaset har fått sin nya färg (medan det är tomt), börjar vi hälla!
            glass.classList.add('anim-fill');
            
            // 2. Lås upp animationen när glaset är fyllt igen
            setTimeout(() => {
                isAnimating = false;
            }, refillAnimationDuration); 

        }, totalWaitBeforeRefill);
    }

    // --- LYSSNARE FÖR DATOR (MUS) ---
    glass.addEventListener('mousedown', () => {
        isPressing = true;
        pressTimer = setTimeout(() => {
            if (isPressing) {
                isPressing = false;
                startDrain();
            }
        }, PRESS_DURATION);
    });

    glass.addEventListener('mouseup', () => {
        if (isPressing) {
            clearTimeout(pressTimer);
            isPressing = false;
            cycleColor(); // Det var ett kort klick -> Byt färg
        }
    });

    glass.addEventListener('mouseleave', () => {
        if (isPressing) {
            clearTimeout(pressTimer);
            isPressing = false;
        }
    });

    // --- LYSSNARE FÖR MOBIL (TOUCH) ---
    glass.addEventListener('touchstart', () => {
        isPressing = true;
        pressTimer = setTimeout(() => {
            if (isPressing) {
                isPressing = false;
                startDrain();
            }
        }, PRESS_DURATION);
    }, {passive: true});

    glass.addEventListener('touchend', () => {
        if (isPressing) {
            clearTimeout(pressTimer);
            isPressing = false;
            cycleColor();
        }
    });
    
    glass.addEventListener('touchcancel', () => {
        clearTimeout(pressTimer);
        isPressing = false;
    });
}

// Starta magin när sidan laddar
window.addEventListener('DOMContentLoaded', () => {
    initInteractiveGlass();
});

// =========================================
// --- LIVE DEMO TOUR LOGIK ---
// =========================================

let currentDemoStep = -1;

const demoSteps = [
    // --- 1. TEMPERATURERNA ---
    { selector: '.carboy-wrapper', text: 'Temp inside vessel', offsetY: -35, mobileOffsetY: -60 },
    { selector: '.air-floating', text: 'Ambient temp', offsetY: -5, mobileOffsetY: 5 },
    
    // --- 2. JÄST & PROFIL (Uppe till höger) ---
    { selector: '#strain-val', text: 'Yeast Strain', offsetY: 0, mobileOffsetY: 0 },
    { selector: '#profile-val', text: 'Fermentation profile', offsetY: -5, mobileOffsetY: 0, mobileOffsetX: 0 },
    { selector: '.action-status', text: 'HEATING / COOLING', offsetY: -10, mobileOffsetY: -10 },
    
    // --- 3. STATUS & HISTORIK (Nedre halvan) ---
    { selector: '.progress-section', text: 'Fermentation completion', offsetY: -155, mobileOffsetY: -150 },
    { selector: '.phase-info', text: 'Current phase details', offsetY: -5, mobileOffsetY: 0 },
    { selector: '#beer-chart', text: 'Temp change over time', offsetY: 0, mobileOffsetY: 15 }
];

function startDemoTour() {
    const overlay = document.getElementById('demo-overlay');
    if (overlay) {
        overlay.style.display = 'block';
        overlay.style.backgroundColor = 'transparent'; // Helt osynlig klick-fångare
    }
    
    currentDemoStep = -1;
    nextDemoStep();
}

function nextDemoStep() {
    currentDemoStep++;

    const tooltip = document.getElementById('demo-tour-tooltip');
    const overlay = document.getElementById('demo-overlay');

    // 1. KONTROLL: Är touren slut?
    if (currentDemoStep >= demoSteps.length) {
        if (tooltip) tooltip.style.display = 'none';
        if (overlay) overlay.style.display = 'none'; 
        
        setTimeout(() => {
            if (!activeDeviceId) {
                alert("Connect your own YeastMaster unit to monitor real data!");
            }
        }, 300);
        return;
    }

    // 2. Hitta nästa element i din HTML
    const targetEl = document.querySelector(demoSteps[currentDemoStep].selector);
    
    if (!targetEl) {
        console.warn("Tour: Hittade inte " + demoSteps[currentDemoStep].selector);
        nextDemoStep(); 
        return;
    }

    // --- Göm skylten DIREKT så den inte hänger kvar med gammal text! ---
    if (tooltip) tooltip.style.display = 'none';

    // 3. Scrolla mjukt så elementet alltid syns
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // 4. Beräkna positionen (Vänta 300ms så scrollen hinner klart först)
    setTimeout(() => {
        const tourTextEl = document.getElementById('demo-tour-text');
        if (tourTextEl) tourTextEl.innerText = demoSteps[currentDemoStep].text;

        if (tooltip) {
            tooltip.style.display = 'block';

            const rect = targetEl.getBoundingClientRect();
            const isMobile = window.innerWidth <= 768;
            
            // --- HÖJD (Y-axel) ---
            let stepOffsetY = 0;
            if (isMobile && demoSteps[currentDemoStep].mobileOffsetY !== undefined) {
                stepOffsetY = demoSteps[currentDemoStep].mobileOffsetY;
            } else {
                stepOffsetY = demoSteps[currentDemoStep].offsetY || 0;
            }
            const topPos = rect.bottom + window.scrollY + 15 + stepOffsetY; 
            
            // --- SIDLED (X-axel) ---
            let stepOffsetX = 0;
            if (isMobile && demoSteps[currentDemoStep].mobileOffsetX !== undefined) {
                stepOffsetX = demoSteps[currentDemoStep].mobileOffsetX;
            }
            
            let leftPos = rect.left + window.scrollX + (rect.width / 2) + stepOffsetX;

            // --- SÄTT POSITIONERNA ---
            tooltip.style.top = topPos + 'px';
            tooltip.style.left = leftPos + 'px';
            
            // Tvinga webbläsaren att spela inhopp-animationen
            tooltip.style.animation = 'none';
            void tooltip.offsetWidth; 
            tooltip.style.animation = 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
        }
    }, 300);

}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Klicka var som helst på mörkret för att gå till nästa pil i touren
    const overlay = document.getElementById('demo-overlay');
    if(overlay) overlay.addEventListener('click', nextDemoStep);
    
    // --- INTRO-RUTAN (PROFILER-STIL) ---
    const startBtn = document.getElementById('start-demo-btn');
    const infoBox = document.getElementById('live-info-box');
    
    if(startBtn) {
        startBtn.addEventListener('click', () => {
            if(infoBox) {
                if (infoBox.style.display === 'none') {
                    infoBox.style.display = 'block';
                } else {
                    infoBox.style.display = 'none';
                }
            }
        });
    }

    // --- KNAPPARNA INUTI RUTAN ---
    const exitBtn = document.getElementById('btn-exit-intro');
    const startTourBtn = document.getElementById('btn-start-tour');

    if(exitBtn) {
        exitBtn.addEventListener('click', () => {
            if(infoBox) infoBox.style.display = 'none';
        });
    }

    if(startTourBtn) {
        startTourBtn.addEventListener('click', () => {
            if(infoBox) infoBox.style.display = 'none';
            
            if (typeof startDemoMode === "function") {
                startDemoMode(); 
            } else {
                startDemoTour(); 
            }
        });
    }
});

function renderDemoDashboard() {
    const displayElement = document.querySelector('.device-name-display');
    if (displayElement) displayElement.innerHTML = "<span style='color:#ff4444;'>DEMO MODE</span>";

    document.getElementById('strain-val').innerText = "OLD BAVARIAN";
    document.getElementById('profile-val').innerText = "Brulosophy";
    
    document.getElementById('action-val').innerText = "HEATING";

    const displayTemp = currentTempUnit === 'F' ? "68.2°F" : "20.1°C";
    document.getElementById('temp-beer-val').innerText = displayTemp;
    
    const beerTempEl = document.querySelector('.beer-temp');
    if (beerTempEl) beerTempEl.setAttribute('data-text', displayTemp);
    
    document.getElementById('air-temp-val').innerText = currentTempUnit === 'F' ? "73.4°F" : "23.0°C";
    
    document.getElementById('status-text').innerText = "RAMPING";
    document.getElementById('day-val').innerText = "4 d and 2 h";
    document.getElementById('phase-day-val').innerText = "0 d and 1 h";
    
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
}

// ==========================================
// --- STÄNG INFO-RUTOR VID KLICK UTANFÖR ---
// ==========================================
let lastBoxCloseTime = 0; 

function handleOutsideClick(event) {
    if (Date.now() - lastBoxCloseTime < 400) {
        event.stopPropagation();
        event.preventDefault();
        return;
    }

    if (event.target.closest('svg') || event.target.closest('.info-icon') || event.target.closest('[onclick*="toggle"]')) {
        return; 
    }

    const infoBoxes = ['library-info-box', 'profiler-info-box', 'academy-info-box'];
    let boxWasClosed = false;

    infoBoxes.forEach(boxId => {
        const box = document.getElementById(boxId);
        
        if (box && (box.style.display === 'block' || box.style.display === 'flex')) {
            if (!box.contains(event.target)) {
                
                box.style.display = 'none'; 
                boxWasClosed = true; 
                
                document.querySelectorAll('[onclick*="toggle"]').forEach(btn => {
                    if (btn.style && btn.style.backgroundColor === 'rgb(140, 198, 63)') {
                        btn.style.backgroundColor = 'rgba(140, 198, 63, 0.15)';
                        btn.style.color = '#8CC63F';
                    }
                });
            }
        }
    });

    if (boxWasClosed) {
        lastBoxCloseTime = Date.now(); 
        event.stopPropagation(); 
        event.preventDefault();  
    }
}

document.addEventListener('click', handleOutsideClick, true);

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
        subOptions.style.display = 'none'; // Gömmer det gamla spöket för alltid!
    }

    document.getElementById('calc-input-section').style.display = 'block';
    document.getElementById('calc-result-box').style.display = 'none';

    const dynamicSection = document.getElementById('dynamic-extra-fields');
    dynamicSection.innerHTML = ''; 

    if (type === 'dry') {
        dynamicSection.innerHTML = `
            <div class="ym-input-group" style="margin-bottom: 20px;">
                <label>Cells per gram (Billions)</label>
                <input type="number" id="calc-dry-density" value="10" step="1">
            </div>
        `;
    } 
    else if (type === 'liquid') {
        const today = new Date().toISOString().split('T')[0];
        // HÄR ÄR DEN RENA, PERFEKTA HTML-KODEN FÖR FÖRSTA PAKETET
        dynamicSection.innerHTML = `
            <div id="liquid-packs-container">
                <div class="liquid-pack-row yeast-package-box">
                    <div class="ym-input-group">
                        <label>Cells in pack</label>
                        <input type="number" class="calc-liquid-pack" value="100" step="10">
                    </div>
                    <div class="ym-input-group">
                        <label>Mfg Date</label>
                        <input type="date" class="calc-liquid-date" value="${today}">
                    </div>
                    <button onclick="removeLiquidPack(this)" class="remove-pack-btn" title="Remove pack">&times;</button>
                </div>
            </div>
            <button onclick="addLiquidPack()" style="background: none; border: 1px dashed #8CC63F; color: #8CC63F; padding: 10px; border-radius: 6px; cursor: pointer; width: 100%; margin-bottom: 20px; font-size: 0.9em; font-weight: bold;">
                + Add another package
            </button>
        `;
    }
else if (type === 'slurry') {
        const today = new Date().toISOString().split('T')[0];
        dynamicSection.innerHTML = `
            <div class="ym-input-group" style="margin-bottom: 15px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                    <label style="margin: 0;">Slurry Density (Thickness)</label>
                    <button onclick="toggleSlurryInfo(this)" style="background: transparent; border: 1px solid var(--accent-color); color: var(--accent-color); border-radius: 50%; width: 22px; height: 22px; font-size: 12px; font-weight: bold; line-height: 1; cursor: pointer; display: flex; justify-content: center; align-items: center; padding: 0; transition: all 0.2s;">?</button>
                </div>
                
                <select id="calc-slurry-density" style="width: 100%; background: #222; border: 1px solid #444; color: #fff; padding: 10px; border-radius: 6px; font-family: 'Lexend'; font-size: 1em; outline: none;">
                    <option value="1.0">Thin (~1.0 B cells/mL)</option>
                    <option value="2.0" selected>Medium (~2.0 B cells/mL)</option>
                    <option value="3.0">Thick (~3.0 B cells/mL)</option>
                </select>

                <div id="slurry-info-box" style="display: none; margin-top: 12px; background: #111; border: 1px dashed #444; padding: 15px; border-radius: 8px; font-size: 0.85rem; line-height: 1.5; color: #aaa;">
                    <strong style="color: var(--accent-color);">💧 Thin (Watery):</strong><br>Looks like dirty dishwater. Sloshes easily. Happens when not settled enough.<br><br>
                    <strong style="color: var(--accent-color);">🥞 Medium (Pancake Batter):</strong><br>Opaque, creamy, pours slowly. The standard after washing and cold crashing.<br><br>
                    <strong style="color: var(--accent-color);">🧱 Thick (Clay/Putty):</strong><br>Hard to pour, needs a spoon. Very compacted yeast from the bottom of a conical tank.<br><br>
                    <span style="color: #ffcc00; font-size: 0.9em;"><em>Pro-tip: If unsure, choose "Thin". Pitching slightly more slurry is safer than underpitching!</em></span>
                </div>
            </div>

            <div class="ym-input-group" style="margin-bottom: 20px;">
                <label>Harvest Date</label>
                <input type="date" id="calc-slurry-date" value="${today}" style="width: 100%; background: #222; border: 1px solid #444; color: #fff; padding: 10px; border-radius: 6px; font-family: 'Lexend'; font-size: 1em; outline: none;">
            </div>
        `;
    }

    else if (type === 'bank') {
        currentBankMethod = 'loop'; // Nollställ till Loop varje gång vi öppnar
        
        dynamicSection.innerHTML = `
            <div class="ym-input-group" style="margin-bottom: 20px;">
                <label style="margin-bottom: 10px; display: block; color: var(--accent-color); font-weight: 800; letter-spacing: 1px; font-size: 0.8rem; text-transform: uppercase;">Inoculation Method</label>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <button onclick="setBankMethod('loop', this)" class="bank-method-btn" style="background: var(--accent-color); color: #000; border: 1px solid var(--accent-color); padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: bold; cursor: pointer; transition: all 0.2s;">
                        Single Loop
                    </button>
                    <button onclick="setBankMethod('slant', this)" class="bank-method-btn" style="background: transparent; color: var(--accent-color); border: 1px solid var(--accent-color); padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: bold; cursor: pointer; transition: all 0.2s;">
                        Whole Slant Wash
                    </button>
                </div>
            </div>
        `;
    }
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
    // RÄTT KLASSER KOPPLAS PÅ DIREKT
    newPack.className = 'liquid-pack-row yeast-package-box';
    
    // RENT INNEHÅLL TILL DET NYA PAKETET
    newPack.innerHTML = `
        <div class="ym-input-group">
            <label>Cells in pack</label>
            <input type="number" class="calc-liquid-pack" value="100" step="10">
        </div>
        <div class="ym-input-group">
            <label>Mfg Date</label>
            <input type="date" class="calc-liquid-date" value="${today}">
        </div>
        <button onclick="removeLiquidPack(this)" class="remove-pack-btn" title="Remove pack">&times;</button>
    `;
    
    container.appendChild(newPack);
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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                uid: auth.currentUser.uid,
                device_id: macAddress
            })
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