// ==========================================
// --- GLOBALA VARIABLER ---
// ==========================================
let currentAlertStr = "";
let alertDismissedByUser = false;

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
    { id: "wyeast-1007", name: "Wyeast 1007 German Ale", origin: "Germany", temp: "13-20°C", tags: ["Ale", "German", "Clean", "Liquid"], desc: "Krispig och ren. Kan jäsas kallt för lagerprofil.", styles: "Altbier, German Ale" },
    // ==========================================
    // --- EXPANSION: THE FINAL 12 ---
    // ==========================================
    
    // Nya Torrjäster
    { id: "s-189", name: "SafLager S-189", origin: "Switzerland", temp: "9-15°C", tags: ["Lager", "Swiss", "Crisp", "Dry"], desc: "Schweizisk precision. Ger en elegant floral och örtig ton till ljusa lagers.", styles: "Pilsner, Bock" },
    { id: "be-134", name: "SafAle BE-134", origin: "Belgium", temp: "18-28°C", tags: ["Ale", "Saison", "Bone-Dry", "Dry"], desc: "Ett monster för torra Saisons. Äter allt socker och lämnar kryddiga fenoler.", styles: "Saison, Farmhouse" },
    { id: "koln", name: "LalBrew Köln", origin: "Germany", temp: "12-20°C", tags: ["Ale", "Hybrid", "Kölsch", "Dry"], desc: "Äntligen en äkta Kölsch-stam i torr form. Ren, krispig och kräver lagring.", styles: "Kölsch, Blonde Ale" },
    { id: "m44", name: "Mangrove Jack's M44", origin: "USA", temp: "15-23°C", tags: ["Ale", "West Coast", "Clean", "Dry"], desc: "Sjunker som en sten och lämnar en extremt ren och torr West Coast-profil.", styles: "West Coast IPA, APA" },
    { id: "m15", name: "Mangrove Jack's M15", origin: "UK", temp: "18-22°C", tags: ["Ale", "English", "Malty", "Dry"], desc: "Mörkölens mästare. Lämnar en fyllig kropp och komplexa mörka frukter.", styles: "Stout, Porter, Barleywine" },

    // Nya Flytande Jäster
    { id: "hothead", name: "Omega OYL-057 HotHead", origin: "Norway", temp: "22-37°C", tags: ["Kveik", "Mango", "Honey", "Liquid"], desc: "Kveik som ger len honung och mango istället för apelsin. Älskar värme.", styles: "Pale Ale, Blonde" },
    { id: "imperial-l13", name: "Imperial L13 Global", origin: "Europe", temp: "10-15°C", tags: ["Lager", "Macro", "Clean", "Liquid"], desc: "Heineken/Carlsberg-stammen. Förlåtande och extremt ren för ljusa lagers.", styles: "International Lager, Pilsner" },
    { id: "wyeast-3726", name: "Wyeast 3726 Farmhouse", origin: "Belgium", temp: "21-29°C", tags: ["Ale", "Saison", "Rustic", "Liquid"], desc: "Fantastisk Saison-jäst. Rustik krydda som ALDRIG stannar av som Dupont.", styles: "Saison, Farmhouse Ale" },
    { id: "wlp005", name: "WLP005 British Ale", origin: "UK", temp: "18-22°C", tags: ["Ale", "English", "Fruity", "Liquid"], desc: "Ringwood-stammen. Fruktig och maltig, kräver en bra diacetyl-rast.", styles: "English Pale Ale, Bitter" },
    { id: "wlp815", name: "WLP815 Belgian Lager", origin: "Belgium", temp: "10-14°C", tags: ["Lager", "Belgian", "Crisp", "Liquid"], desc: "Stella Artois-stammen. Krispig men med en elegant, svag fruktighet.", styles: "Premium Lager, Pilsner" },
    { id: "wlp023", name: "WLP023 Burton Ale", origin: "UK", temp: "20-23°C", tags: ["Ale", "English", "Apple", "Liquid"], desc: "Från Burton-on-Trent. Känd för äpple-, päron- och honungstoner.", styles: "English IPA, ESB" },
    { id: "wyeast-1028", name: "Wyeast 1028 London Ale", origin: "UK", temp: "15-22°C", tags: ["Ale", "Minerally", "Woody", "Liquid"], desc: "Torr, rik och jordig/mineralisk. Perfekt balanserad för mörka maltsorter.", styles: "Porter, Stout" },
    // ==========================================
    // --- EUROPEAN EXPANSION: DE 9 NYA ---
    // ==========================================
    { id: "m36", name: "Mangrove Jack's M36", origin: "UK/NZ", temp: "18-22°C", tags: ["Ale", "English", "Fruity", "Dry"], desc: "Mångsidig ale-stam som producerar en underbart komplex, lätt fruktighet.", styles: "Pale Ale, Bitter" },
    { id: "m84", name: "Mangrove Jack's M84", origin: "UK/NZ", temp: "10-15°C", tags: ["Lager", "Bohemian", "Crisp", "Dry"], desc: "Klassisk europeisk lagerkaraktär—ren, elegant och med ett djupt maltfokus.", styles: "Pilsner, Lager" },
    { id: "m20", name: "Mangrove Jack's M20", origin: "UK/NZ", temp: "18-24°C", tags: ["Wheat", "Bavarian", "Banana", "Dry"], desc: "Ren banan- och nejlikaelegans utan den skarpa syrligheten.", styles: "Hefeweizen, Dunkelweizen" },
    { id: "m54", name: "Mangrove Jack's M54", origin: "UK/NZ", temp: "18-22°C", tags: ["Lager", "Hybrid", "Clean", "Dry"], desc: "Lagerstam som jäser rent och krispigt vid varma ale-temperaturer.", styles: "California Common, Pseudo-Lager" },
    { id: "whc-saturated", name: "WHC Saturated", origin: "Ireland", temp: "19-22°C", tags: ["Ale", "NEIPA", "Juicy", "Liquid"], desc: "Optimerad för maximal biotransformation och extrem juice-karaktär.", styles: "Hazy IPA, NEIPA" },
    { id: "whc-mango", name: "WHC Mango Madness", origin: "Ireland", temp: "30-40°C", tags: ["Kveik", "Mango", "Hot", "Liquid"], desc: "Termotolerant blend skapad för att jäsas kokhett. Tropisk explosion.", styles: "Tropical IPA, Pale Ale" },
    { id: "pomona", name: "LalBrew Pomona", origin: "Canada", temp: "18-22°C", tags: ["Ale", "NEIPA", "Peach", "Dry"], desc: "Patenterad hybridstam, utvecklad specifikt för moderna Hazy IPAs.", styles: "NEIPA, Hazy Pale Ale" },
    { id: "farmhouse-hybrid", name: "LalBrew Farmhouse", origin: "Canada", temp: "20-25°C", tags: ["Ale", "Saison", "Safe", "Dry"], desc: "Vetenskapligt framavlad hybrid utan diastaticus-risken.", styles: "Saison, Farmhouse Ale" },
    { id: "la-01", name: "SafBrew LA-01", origin: "France", temp: "15-20°C", tags: ["Specialty", "Low ABV", "Sweet", "Dry"], desc: "Kan inte jäsa maltos. Perfekt för alkoholfri och alkoholsvag öl.", styles: "Non-Alcoholic, Low ABV" }
];

// ==========================================
// --- HÅRDVARU-ÖVERSÄTTAREN (GLOBAL) ---
// ==========================================
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
    "wyeast-2112": "Cali Lager", "wlp380": "Hefeweizen 4", "wyeast-1007": "Ger. Ale 1007",
    
    // --- NYA TILLÄGG: DE 12 NYA ---
    "s-189": "S-189", 
    "be-134": "BE-134", 
    "koln": "Köln", 
    "m44": "M44", 
    "m15": "M15",
    "hothead": "HotHead", 
    "imperial-l13": "Imperial L13", 
    "wyeast-3726": "Farmhouse 3726",
    "wlp005": "British 005", 
    "wlp815": "Belg. Lager 815", 
    "wlp023": "Burton 023", 
    "wyeast-1028": "London 1028",

    // --- EUROPEAN EXPANSION: DE 9 NYA ---
    "m36": "M36",
    "m84": "M84",
    "m20": "M20",
    "m54": "M54",
    "whc-saturated": "WHC Saturated",
    "whc-mango": "WHC Mango",
    "pomona": "Pomona",
    "farmhouse-hybrid": "LalBrew Farmhouse",
    "la-01": "SafBrew LA-01"
};


document.addEventListener('DOMContentLoaded', () => {
    // Tvinga INGEN till login! 
    // Vi låter dem börja på SOUL-vyn (där glaset fylls) eller den flik de klickat på.
    // Berätta för mobilens bakåtknapp att "soul" är startplatsen
    history.replaceState({ view: 'soul' }, null, "");

    showView('soul', false);

    // --- STÄNG "CONNECT DEVICE"-RUTAN VID KLICK I BAKGRUNDEN ---
    const claimContainer = document.getElementById('claim-container');
    if (claimContainer) {
        claimContainer.addEventListener('click', function(event) {
            // Kontrollera att klicket var på bakgrunden och inte på den vita rutan
            if (event.target === this) {
                showView('settings'); // Skickar användaren smidigt tillbaka till inställningar
            }
        });
    }

    let editingProfileName = null; // Håller koll på om vi editerar

window.startEditingProfile = function(profileName) {
    window.editingProfileName = profileName; // <-- Använd window. här!
    if (typeof closeYeastModal === 'function') closeYeastModal();
    
    const savedProfiles = JSON.parse(localStorage.getItem('customYeastProfiles') || '[]');
    const profileData = savedProfiles.find(p => p.s === profileName);
    
    if (profileData && typeof loadProfileIntoLab === 'function') {
        loadProfileIntoLab(profileData.p.replace('Custom (', '').replace(')', ''), profileData.s, profileData.s);
    }
};

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

async function getAuthHeaders() {
    const idToken = await auth.currentUser.getIdToken();
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${idToken}`
    };
}



// --- KONFIGURATION FÖR VYER & ANIMATIONER ---
// Flyttad upp hit så att appen har stenkoll på ordningen från start!
const viewOrder = ['soul', 'library', 'librarian', 'lab', 'dashboard', 'settings'];

// Tvinga webbläsaren att sluta lägga sig i scrollningen vid bakåt-klick!
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Vi skapar en variabel för att hålla koll på var vi VAR någonstans
let currentActiveView = 'soul'; 

function showView(viewName, pushToHistory = true, forceOverride = false) { 
    // --- STÄDGUMMA: Hantera öppna popups och lektioner vid flikbyte ---
    if (!forceOverride) {
        const tourOverlay = document.getElementById('demo-overlay');
        const isTourActive = tourOverlay && (tourOverlay.style.display === 'block' || tourOverlay.classList.contains('active'));

        // 1. Touren är fortfarande helig – den blockerar flikbyten om vi inte tvingar (forceOverride)
        if (isTourActive) {
            console.log("Navigering blockerad: Guidad tour pågår!");
            return; 
        }

        // 2. Om användaren klickar på huvudmenyn, stäng ner alla öppna vyer/modaler automatiskt
        const addStrainModal = document.getElementById('add-strain-modal');
        const pitchModal = document.getElementById('pitch-calc-modal');
        const academyModule = document.getElementById('academy-module-view');
        const infoModal = document.getElementById('yeast-info-modal');
        const supportModal = document.getElementById('support-modal');

        if (academyModule && academyModule.style.display === 'block') {
            closeAcademyModule(false); // Stäng lektionen i bakgrunden utan extra history.back()
        }
        if (pitchModal && pitchModal.style.display === 'flex') closePitchCalcModal();
        if (addStrainModal && addStrainModal.style.display === 'flex') closeAddStrainModal();
        if (infoModal && infoModal.style.display === 'flex') closeYeastModal();
        if (supportModal && supportModal.style.display === 'flex') closeSupportModal();
    }
    // -------------------------------------------------------

    const views = {
        login: document.getElementById('login-container'),
        claim: document.getElementById('claim-container'),
        soul: document.getElementById('view-soul'),
        library: document.getElementById('view-library'),
        librarian: document.getElementById('view-librarian'),
        lab: document.getElementById('view-lab'),
        dashboard: document.getElementById('view-dashboard'),
        settings: document.getElementById('view-settings'),
        about: document.getElementById('view-about'),
        hardware: document.getElementById('view-hardware'),
        'about-library': document.getElementById('view-about-library'),
        'about-cloud': document.getElementById('view-about-cloud')
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
        // Går vi till höger i menyn ska bilden komma IN från höger
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
                
                // 2. DET MAGISKA HACKET: Tvinga fram en "Reflow"
                void views[key].offsetWidth; 
                
                // 3. Lägg på animationen igen
                if (animClass) {
                    views[key].classList.add(animClass);
                }
            } else {
                views[key].style.display = 'none';
            }
        }
    });

    // --- MAGI: FYLL PÅ GLASET AUTOMATISKT NÄR WI GÅR TILL HOME ---
    if (viewName === 'soul') {
        const glass = document.getElementById('interactive-beer-glass');
        if (glass) {
            glass.classList.remove('anim-drain', 'anim-fill');
            void glass.offsetWidth; 
            
            setTimeout(() => {
                glass.classList.add('anim-fill');
            }, 800);
        }
    }

    // --- KOLLA LARM-SWITCH NÄR INSTÄLLNINGAR ÖPPNAS ---
    if (viewName === 'settings') {
        // Sätt switchen i rätt läge direkt när vyn laddas
        checkPushStatusOnLoad();
    }

    // Uppdatera vilken vy som är aktiv nu för nästa gång vi klickar
    currentActiveView = viewName;

    // --- UPPDATERA MENYN (Städad, bara en kopia nu!) ---
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        const clickEvent = item.getAttribute('onclick');
        if (clickEvent && clickEvent.includes(`'${viewName}'`)) {
            item.classList.add('active');
        }
    });

    // --- NY FIX: Brutal scroll till toppen ---
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }, 10);
}


function showAddDevice() {
    document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
    
    const claimContainer = document.getElementById('claim-container');
    if (claimContainer) {
        claimContainer.style.display = 'flex';
        // Anropa vår nya automatiska översättare
        applyTranslations();
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

            // ==========================================
            // --- NYTT: SMART BANNER-LOGIK (Inklusive Temp & Strömavbrott) ---
            // ==========================================
            const banner = document.getElementById('top-banner-alert');
            const bannerTitle = document.getElementById('banner-title');
            
            let alertToDisplay = "";

            // --- 1. KOLLA WATCHDOG-LARM (Matte i frontend) ---
            const nowTime = new Date().getTime();
            const logTime = latest.time ? new Date(latest.time).getTime() : nowTime;
            
            // A. Strömavbrott / Tappad anslutning (>30 minuter gammal data)
            if ((nowTime - logTime) > (30 * 60 * 1000)) {
                alertToDisplay = "POWER_OUTAGE";
            } 
            // B. Temperatur-avvikelse (>2.0°C diff, förutsatt att sensorerna funkar)
            else if (latest.temp > -50 && latest.target_temp > -50) {
                const tempDiff = Math.abs(latest.temp - latest.target_temp);
                if (tempDiff >= 2.0) {
                    alertToDisplay = "TEMP_WARNING";
                }
            }

            // --- 2. KOLLA HÅRDVARU-LARM (Dry hop, Dump, från ESP32) ---
            if (alertToDisplay === "") {
                for (let i = sortedData.length - 1; i >= 0; i--) {
                    if (sortedData[i].active_alert && sortedData[i].active_alert !== "") {
                        const alertAgeHours = (nowTime - new Date(sortedData[i].time).getTime()) / (1000 * 60 * 60);
                        if (alertAgeHours < 6) {
                            alertToDisplay = sortedData[i].active_alert;
                        }
                        break; 
                    }
                }
            }

            // --- 3. MINNES-KOLL & KVITTENS ---
            const dismissedAlert = localStorage.getItem('ym_dismissed_alert');
            if (alertToDisplay !== "" && alertToDisplay === dismissedAlert) {
                alertToDisplay = ""; // Redan kvitterat, tysta larmet!
            }

            // --- 4. VISA BANNERN MED RÄTT TEXT ---
            if (alertToDisplay !== "") {
                let displayMsg = alertToDisplay; 
                
        // Formatera texten snyggt baserat på larmtyp och översätt (om ordboken finns)
                if (alertToDisplay === "POWER_OUTAGE") {
                    displayMsg = translations?.[currentLang]?.alerts?.power || "⚠️ CONNECTION LOST! Check power/WiFi.";
                } else if (alertToDisplay === "TEMP_WARNING") {
                    displayMsg = translations?.[currentLang]?.alerts?.temp || "🔥 TEMP DEVIATION! >2.0°C difference.";
                } else if (alertToDisplay.includes("REMOVE HOP")) { // <-- NY!
                    displayMsg = translations?.[currentLang]?.alerts?.remove_hop || "🔔 TIME TO REMOVE HOPS!";
                } else if (alertToDisplay.includes("DRY HOP")) {
                    displayMsg = translations?.[currentLang]?.alerts?.dry_hop || "🌿 TIME TO DRY HOP!";
                } else if (alertToDisplay.includes("DUMP") || alertToDisplay.includes("RACK")) {
                    displayMsg = translations?.[currentLang]?.alerts?.dump || "🧪 TIME TO DUMP YEAST!";
                } else if (alertToDisplay.includes("CRASH")) {
                    displayMsg = translations?.[currentLang]?.alerts?.crash || "❄️ TIME TO COLD CRASH!";
                }
                
                if (bannerTitle) bannerTitle.innerText = displayMsg;
                if (banner) banner.style.display = 'block';
                window.currentActiveAlertString = alertToDisplay; 
            } else {
                if (banner) banner.style.display = 'none';
            }
            // ==========================================

            if (latest && latest.time && typeof updateHeartbeatDisplay === 'function') {
                updateHeartbeatDisplay(latest.time);
            }

            // ==========================================
            // --- NYTT: UPPDATERA LAST SYNC TIME ---
            // ==========================================
            if (latest && latest.time) {
                const syncDate = new Date(latest.time);
                const timeString = syncDate.toLocaleTimeString('sv-SE', { 
                    hour: '2-digit', minute: '2-digit', second: '2-digit'
                });
                
                const syncElement = document.getElementById('last-sync-time');
                if (syncElement) {
                    syncElement.innerText = timeString;
                }
                // --- MAGISKA SYNK-RADEN: Uppdatera även hjärtat i Settings samtidigt! ---
    if (typeof updateHeartbeatDisplay === 'function') {
        updateHeartbeatDisplay(latest.time);
    }
            }

            // 1. Temperaturer (Med inbyggd spärr för urkopplade sensorer)
            const safeBeerTemp = latest.temp <= -100 ? "--" : (convertTemp(latest.temp).toFixed(1) + '°' + currentTempUnit);
            const safeAirTemp = latest.air_temp <= -100 ? "--" : (convertTemp(latest.air_temp).toFixed(1) + '°' + currentTempUnit);

            document.getElementById('temp-beer-val').innerText = safeBeerTemp;
            document.querySelector('.beer-temp').setAttribute('data-text', safeBeerTemp);
            document.getElementById('air-temp-val').innerText = safeAirTemp;

            // 2. Info (Yeast & Profile)
            let displayStrain = (latest.strain || "---").toUpperCase();
            let displayProfile = (latest.profile || "---").toUpperCase();

            if (displayProfile.startsWith("* ")) {
                displayProfile = displayProfile.replace("* ", "★ ");
            }

            if (displayStrain.startsWith("CUSTOM (") && displayStrain.endsWith(")")) {
                displayStrain = displayStrain.replace("CUSTOM (", "").replace(")", "");
                if (!displayProfile.startsWith("★ ")) displayProfile = "★ " + displayProfile;
            }

            if (displayStrain.startsWith("* ") || displayStrain.startsWith("★ ")) {
                displayStrain = displayStrain.replace("* ", "").replace("★ ", ""); 
                if (!displayProfile.startsWith("★ ")) {
                    displayProfile = "★ " + displayProfile;
                }
            }

            const strainValEl = document.getElementById('strain-val');
            strainValEl.innerText = displayStrain;
            strainValEl.style.fontSize = displayStrain.length > 12 ? "0.8em" : "";

            const profileValEl = document.getElementById('profile-val');
            profileValEl.innerText = displayProfile;
            
         const action = (latest.action || "IDLE").toUpperCase();
// Slå upp ordet i ordboken (fallback till engelska om det saknas)
const translatedAction = translations[window.currentLang]?.action?.[action] || action;
document.getElementById('action-val').innerText = translatedAction;

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

            // ==========================================
            // --- FIX FÖR IDLE-BUGGEN (Hämta sista kända tid) ---
            // ==========================================
            let displayStatusText = (latest.status || "--").toUpperCase();
            let displayDay = latest.day || 0;
            let displayPhaseDay = latest.phase_day || 0;
            let profileDay = latest.profile_day || displayDay;

            // Om maskinen är IDLE/FINISHED och visar 0, titta bakåt i tiden!
            if ((displayStatusText === "IDLE" || displayStatusText === "FINISHED") && displayDay === 0) {
                for (let i = sortedData.length - 1; i >= 0; i--) {
                    if (sortedData[i].day > 0) {
                        displayDay = sortedData[i].day;
                        displayPhaseDay = sortedData[i].phase_day;
                        profileDay = sortedData[i].profile_day || sortedData[i].day;
                        break;
                    }
                }
            }

      // Kolla först i "phase"-ordboken, sen i "status"-ordboken
const translatedStatus = translations[window.currentLang]?.phase?.[displayStatusText] 
                      || translations[window.currentLang]?.status?.[displayStatusText] 
                      || displayStatusText;
document.getElementById('status-text').innerText = translatedStatus;

            // --- VÄCK LARM-DETEKTIVEN ---
            const currentStrain = latest.strain || "Unknown";
            const currentProfileName = latest.profile || "Unknown";
            
            if (typeof checkActionAlerts === 'function') {
                checkActionAlerts(profileDay, currentStrain, currentProfileName);
            }

            // 6. Progress (Grafisk bar)
            const targetDays = 14; 
            const percent = Math.min((displayDay / targetDays) * 100, 100).toFixed(0);

       // 7. Skriv ut till skärmen!
            const dayValEl = document.getElementById('day-val');
            const phaseDayValEl = document.getElementById('phase-day-val');

            if (dayValEl) {
                dayValEl.innerText = formatDaysToHuman(displayDay);
            }
            if (phaseDayValEl) {
                phaseDayValEl.innerText = formatDaysToHuman(displayPhaseDay);
            }
            
            document.getElementById('progress-percent').innerText = percent + "%";
            document.getElementById('progress-fill').style.width = percent + "%";
            
            const targetTemp = latest.target_temp || 0; 
            const targetTempElement = document.getElementById('target-temp-val');
            if (targetTempElement) {
                targetTempElement.innerText = targetTemp <= -100 ? "--" : (convertTemp(targetTemp).toFixed(1) + '°' + currentTempUnit);
            }
            // ==========================================

            // DATATVÄTT 2.0: KASTA UT SPIKARNA
            const cleanChartData = sortedData.filter(log => {
                if (log.temp !== undefined && log.temp <= -50) return false; 
                if (log.air_temp !== undefined && log.air_temp <= -50) return false; 
                return true; 
            });

            updateChart(cleanChartData);
        }
    } catch (error) {
        console.error("Kunde inte hämta data:", error);
    }
}

// ==========================================
// --- NYTT: FUNKTION FÖR ATT STÄNGA MODALEN ---
// ==========================================
// Denna anropas när du klickar på "JAG HAR FIXAT DET!"
function dismissAlert() {
    const modal = document.getElementById('alert-modal');
    if (modal) {
        modal.style.display = 'none';
    }
    
    // Framtida uppgradering: Här kan vi lägga till kod för att säga till
    // servern/ESP32:an att sluta pipa om vi vill styra det från appen!
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

    // Kolla om vi är i Light Mode just nu
    const isLightMode = document.body.classList.contains('light-mode');
    
    // Gör toningen lite djupare (150px)
    const gradient = ctx.createLinearGradient(0, 0, 0, 150);
    
    // MAGIN: Använd accentfärgen och lägg till en "Hex Alpha"-kod för genomskinlighet i slutet.
    // '15' = extremt svag (perfekt för vit bakgrund), '35' = lite starkare (för mörk bakgrund), '00' = helt osynlig
    gradient.addColorStop(0, isLightMode ? themeAccent + '15' : themeAccent + '35'); 
    gradient.addColorStop(1, themeAccent + '00');
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
                headers: await getAuthHeaders(),
                body: JSON.stringify({
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

function checkAddDeviceAccess() {
    // Kolla om vi har en inloggad användare
    const user = auth.currentUser;

    if (!user) {
        // --- GÄST: Visa ett meddelande! ---
        const lang = window.currentLang || 'en';
        // Hämtar från ordboken, eller använder en engelsk fallback
        const alertMsg = window.translations?.[lang]?.alerts?.login_add_device || "Please log in to add a YeastMaster device.";
        
        alert(alertMsg);
        
        // (Valfritt) Om du vill vara extra smidig kan du skicka dem raka vägen till inloggningen efter de klickat OK:
        // showView('login'); 
        
        return; // Avbryt här, gå inte vidare till rutan!
    }

    // --- INLOGGAD: Släpp förbi! ---
    // Beroende på hur din app är uppbyggd, anropar du funktionen som öppnar vyn.
    // Förmodligen är det någon av dessa två:
   showView('claim');
    // eller: showView('claim');
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

      // Lägg till stjärna om det är en moddad hårdvaruprofil
        const starPrefix = yeast.isCustom ? '★ ' : '';

        card.innerHTML = `
            <h3>${starPrefix}${yeast.name}${icon}</h3>
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
    // 1. Lista alla modaler vi vill kunna stänga med bakåtknappen
    const academy = document.getElementById('academy-module-view');
    const pitch = document.getElementById('pitch-calc-modal');
    const strain = document.getElementById('add-strain-modal');
    const claim = document.getElementById('claim-container');
    const info = document.getElementById('yeast-info-modal');
    const support = document.getElementById('support-modal');
    const detail = document.getElementById('yeast-detail-view'); // Om du använder den

    // 2. Kolla vilken som är öppen och stäng den / stega tillbaka
    
    // --- LOGIK FÖR AKADEMIN (Stega tillbaka eller stäng) ---
    if (academy && academy.style.display === 'block') {
        if (event.state && event.state.page === 'academy') {
            // Vi är kvar i lektionen, men backade ett steg (t.ex. steg 4 till 3)
            currentWizardStep = event.state.step;
            updateWizardUI(); // Rita om skärmen till det föregående steget
            return; 
        } else {
            // Vi backade förbi Steg 0, stäng hela lektionen!
            // (Skickar med false ifall din closeAcademyModule försöker göra en history.back)
            closeAcademyModule(false); 
            return;
        }
    }

    if (pitch && pitch.style.display === 'flex') {
        closePitchCalcModal();
        return;
    }
    if (strain && strain.style.display === 'flex') {
        closeAddStrainModal();
        return;
    }
    if (info && info.style.display === 'flex') {
        closeYeastModal();
        return;
    }
    if (support && support.style.display === 'flex') {
        closeSupportModal();
        return;
    }
    if (claim && claim.style.display === 'flex') {
        showView('settings');
        return;
    }
    if (detail && detail.style.display === "block") {
        detail.style.display = "none";
        return;
    }

    // 3. Om ingen modal var öppen, byt flik baserat på historik
    if (event.state && event.state.view) {
        showView(event.state.view, false); // false = skapa ingen ny brödsmula, vi backar ju!
    } else {
        // Fallback: Gå till startvyn
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

function setActive(clickedElement) {
    // Ta bort 'active' klassen från alla nav-items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Lägg till 'active' på den vi just klickade på
    clickedElement.classList.add('active');
}

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
                        padding: { top: 30, right: 0, bottom: 10, left: 10 }
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
                                padding: 6
                            },
                            title: {
                                display: true,
                                text: `Temp (°${currentTempUnit})`,
                                color: textColor,
                                font: { family: 'Lexend', weight: '800' }
                            }
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
        
// Steg 2: Primary
        if (steps.length > 1) {
            let actionText = `Hold until Day ${steps[1][0]}`;
            if (Math.abs(steps[1][1] - steps[0][1]) >= 0.2) {
                const action = steps[1][1] > steps[0][1] ? "Rise to" : "Drop to";
                actionText = `${action} ${steps[1][1].toFixed(1)}°C by Day ${steps[1][0]}`;
            }
            html += `<div class="summary-row"><span class="label">Primary</span><span class="value">${actionText}</span></div>`;
        }
        
        // Steg 3: Cleanup
        if (steps.length > 2) {
             let actionText = `Hold until Day ${steps[2][0]}`;
             if (Math.abs(steps[2][1] - steps[1][1]) >= 0.2) {
                 const action = steps[2][1] > steps[1][1] ? "Reach" : "Drop to";
                 actionText = `${action} ${steps[2][1].toFixed(1)}°C by Day ${steps[2][0]}`;
             }
             html += `<div class="summary-row"><span class="label">Cleanup</span><span class="value">${actionText}</span></div>`;
        }
        
        // Sista stegen: Cold Crash & Condition
        if (steps.length >= 6) {
            let crashText = `Hold until Day ${steps[4][0]}`;
            if (Math.abs(steps[4][1] - steps[3][1]) >= 0.2) {
                const action = steps[4][1] > steps[3][1] ? "Rise to" : "Drop to";
                crashText = `${action} ${steps[4][1].toFixed(1)}°C by Day ${steps[4][0]}`;
            }
            html += `<div class="summary-row"><span class="label">Cold Crash</span><span class="value">${crashText}</span></div>`;
            
            html += `<div class="summary-row"><span class="label">Condition</span><span class="value">Hold until Day ${steps[5][0]}</span></div>`;
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
            
            let primaryText = `${t_hold} ${d1}`;
            if (Math.abs(t1 - t0) >= 0.2) {
                const action = t1 > t0 ? txtFreeRise : t_drop;
                primaryText = `${action} ${t1.toFixed(1)}°C ${t_by} ${d1}`;
            }
            
            let cleanupText = `${t_hold} ${d2}`;
            if (Math.abs(t2 - t1) >= 0.2) {
                const action = t2 > t1 ? t_reach : t_drop;
                cleanupText = `${action} ${t2.toFixed(1)}°C ${t_by} ${d2}`;
            }

            let crashText = `${t_hold} ${d4}`;
            if (Math.abs(t4 - t3) >= 0.2) {
                const action = t4 > t3 ? t_reach : t_drop;
                crashText = `${action} ${t4.toFixed(1)}°C ${t_by} ${d4}`;
            }

            const condText = `${t_hold} ${d5}`;

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
                    
                    // Pitch
                    profileListHtml += `<div class="summary-row"><span class="label">${t_pitch}</span><span class="value">${t_day} ${steps[0][0]} @ ${steps[0][1].toFixed(1)}°C</span></div>`;
                    
                    // Primary
                    let primText = `${t_hold} ${steps[1][0]}`;
                    if (Math.abs(steps[1][1] - steps[0][1]) >= 0.2) {
                        const action = steps[1][1] > steps[0][1] ? t_rise : t_drop;
                        primText = `${action} ${steps[1][1].toFixed(1)}°C ${t_by} ${steps[1][0]}`;
                    }
                    profileListHtml += `<div class="summary-row"><span class="label">${t_prim}</span><span class="value">${primText}</span></div>`;
                    
                    // Cleanup
                    let cleanText = `${t_hold} ${steps[2][0]}`;
                    if (Math.abs(steps[2][1] - steps[1][1]) >= 0.2) {
                        const action = steps[2][1] > steps[1][1] ? t_reach : t_drop;
                        cleanText = `${action} ${steps[2][1].toFixed(1)}°C ${t_by} ${steps[2][0]}`;
                    }
                    profileListHtml += `<div class="summary-row"><span class="label">${t_clean}</span><span class="value">${cleanText}</span></div>`;
                    
                    // Cold Crash & Condition (Nu med stöd för 6 punkter!)
                    if (steps.length >= 6) {
                        let crashText = `${t_hold} ${steps[4][0]}`;
                        if (Math.abs(steps[4][1] - steps[3][1]) >= 0.2) {
                            const action = steps[4][1] > steps[3][1] ? t_rise : t_drop;
                            crashText = `${action} ${steps[4][1].toFixed(1)}°C ${t_by} ${steps[4][0]}`;
                        }
                        profileListHtml += `<div class="summary-row"><span class="label">${t_crash}</span><span class="value">${crashText}</span></div>`;
                        
                        profileListHtml += `<div class="summary-row"><span class="label">${t_cond}</span><span class="value">${t_hold} ${steps[5][0]}</span></div>`;
                    }
                    
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

    // 2. Fyll rullistan i Profiler
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
        const matchingDot = document.querySelector(`.color-dot[style*="${savedAccent}"]`);
        if (matchingDot) {
            setAccent(savedAccent, matchingDot);
        } else {
            document.documentElement.style.setProperty('--accent-color', savedAccent);
            const savedSec = localStorage.getItem('accentSecondary');
            if(savedSec) document.documentElement.style.setProperty('--accent-secondary', savedSec);
        }
    }
    
    // HÄR ÄR RADERNA DU VAR RÄDD SKULLE FÖRSVINNA:
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
    }

    // 6. RITA BIBLIOTEKET (Denna rad lägger vi till för stjärnorna!)
    if (typeof renderYeastLibrary === "function") {
        renderYeastLibrary();
    }

    console.log("🚀 YeastMaster System Fully Initialized");
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
// --- CLOUD SYNC MOTOR ---
// ==========================================
async function syncToSelectedDevice() {
    const syncBtn = document.getElementById('sync-btn');
    const syncDropdown = document.getElementById('sync-target-device');
    const targetDeviceId = syncDropdown ? syncDropdown.value : null;

    if (!targetDeviceId) {
        alert(translations[currentLang]?.alerts?.no_device || "Vänligen välj en målenhet i rullistan ovanför knappen!");
        return;
    }

    if (!selectedStrains || selectedStrains.length === 0) {
        alert(translations[currentLang]?.alerts?.no_strains || "Du måste välja minst en jäst/profil (markera med stjärnan ★) för att kunna synka!");
        return;
    }

    const user = auth.currentUser;
    if (!user) {
        alert(translations[currentLang]?.alerts?.login_sync || "Du måste vara inloggad för att kunna synka till molnet.");
        return;
    }

    const originalText = syncBtn.innerText;
    syncBtn.innerText = "VERIFYING STATUS... 🔍";
    syncBtn.style.opacity = "0.7";
    syncBtn.style.pointerEvents = "none";

    // ==========================================
    // --- NYTT: SÄKERHETSSPÄRR FÖR AKTIV JÄSNING ---
    // ==========================================
    try {
        // Hämta den absolut senaste loggen från denna specifika kyl
        const res = await fetch(`${API_BASE}/data?device_id=${targetDeviceId}`);
        const history = await res.json();

        if (history && history.length > 0) {
            // Sortera tidslinjen så vi garanterat tittar på sekunden just nu
            history.sort((a, b) => new Date(a.time) - new Date(b.time));
            const absoluteLatest = history[history.length - 1];

            const status = (absoluteLatest.status || "").toUpperCase();
            
            // Om kylen är mitt i en jäsning (ACTIVE), stoppa synken!
            if (status === "ACTIVE" || status === "COOLING" || status === "HEATING") {
                alert(translations[currentLang]?.alerts?.sync_blocked || "⚠️ SYNKNING AVBRUTEN!\n\nDin YeastMaster kör just nu en aktiv jäsning. Att synka ett nytt bibliotek nu kan skriva över den pågående profilen och förstöra jäsningen.\n\nPausa eller avsluta jäsningen på enheten först.");
                syncBtn.innerText = originalText;
                syncBtn.style.opacity = "1";
                syncBtn.style.pointerEvents = "auto";
                return; // Avbryter funktionen helt
            }
        }
    } catch (e) {
        console.error("Kunde inte verifiera maskinens status inför synk", e);
        // Tillåt synk att fortsätta om vi inte får svar, i fall historiken bara är tom
    }
    // ==========================================

    syncBtn.innerText = "PACKING PROFILES... 📦";

    try {
        let profilesToSend = [];

      
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
                        
                        deviceProfile.s = formatOledName(baseStrainFull); // Blir "Scot. Ale"
                        deviceProfile.p = "* " + customName.substring(0, 10); // Använd vanlig asterisk för OLED!
                        
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
            alert(translations[currentLang]?.alerts?.sync_empty || "Kunde inte packa profilerna! Dubbelkolla att namnen matchar databasen.");
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
            headers: await getAuthHeaders(),
            body: JSON.stringify({
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
    if (e.target.closest('.chart-container') || e.target.tagName.toLowerCase() === 'input') return;

    const detailView = document.getElementById('yeast-detail-view');
    const infoModal = document.getElementById('yeast-info-modal');
    const academyModule = document.getElementById('academy-module-view'); // <-- NY SPÄRR!

    if (detailView && detailView.style.display === 'block') return;
    if (infoModal && infoModal.style.display === 'flex') return;
    if (academyModule && academyModule.style.display === 'block') return; // <-- NY SPÄRR!

    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', e => {
    if (e.target.closest('.chart-container') || e.target.tagName.toLowerCase() === 'input') return;

    const detailView = document.getElementById('yeast-detail-view');
    const infoModal = document.getElementById('yeast-info-modal');
    const academyModule = document.getElementById('academy-module-view'); // <-- NY SPÄRR!

    if (detailView && detailView.style.display === 'block') return;
    if (infoModal && infoModal.style.display === 'flex') return;
    if (academyModule && academyModule.style.display === 'block') return; // <-- NY SPÄRR!

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

    // ==================================================
    // 4. MAGIN: UPPDATERA GRAFERNA BLIXTSNABBT!
    // ==================================================
    
    // A) Live Dashboard-grafen (beerChart)
    if (window.beerChart) {
        window.beerChart.data.datasets[0].borderColor = color;
        
        // Bygg en ny toning i samma sekund som vi byter färg
        const isLightNow = document.body.classList.contains('light-mode');
        let ctx = window.beerChart.ctx;
        let newGradient = ctx.createLinearGradient(0, 0, 0, 150);
        newGradient.addColorStop(0, isLightNow ? color + '15' : color + '35');
        newGradient.addColorStop(1, color + '00');
        
        window.beerChart.data.datasets[0].backgroundColor = newGradient;
        window.beerChart.update('none'); 
    }

    // B) The Profiler-grafen i labbet (labChart)
    if (typeof labChart !== 'undefined' && labChart !== null) {
        labChart.data.datasets[0].borderColor = color;
        labChart.data.datasets[0].pointBorderColor = color;
        labChart.update('none');
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

    // --- HÄMTA ÖVERSÄTTNINGAR ---
    const lang = window.currentLang || 'en';
    const t = window.translations?.[lang]?.house_bank || window.translations?.['en']?.house_bank || {};

    if (existingStrain && existingStrain.id) {
        // Använd översatt titel för edit-läget
        title.innerText = t.edit_title || "Edit House Strain"; 
        nameInput.value = existingStrain.name || '';
        document.getElementById('hs-origin').value = existingStrain.origin || '';
        if(dateInput) dateInput.value = existingStrain.captureDate || ''; 
        document.getElementById('hs-temp').value = existingStrain.temp || '';
        document.getElementById('hs-tags').value = (existingStrain.tags || []).join(', ');
        document.getElementById('hs-desc').value = existingStrain.desc || '';

        nameInput.disabled = true;
        nameInput.style.opacity = "0.5";
    } else {
        // Använd översatt titel för nytt kort
        title.innerText = t.title || "House Bank";
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

    // --- LÅS BAKGRUNDEN ---
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    modal.style.overscrollBehavior = 'none'; // Hindrar "studs"-scroll på iOS
    
    modal.style.display = 'flex';
}

function closeAddStrainModal() {
    document.getElementById('add-strain-modal').style.display = 'none';

    // --- LÅS UPP BAKGRUNDEN ---
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';

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
    
    if (d === 0) return h + " h"; // Ex: "6 h"
    if (h === 0) return d + " d"; // Ex: "14 d"
    
    // Här tar vi bort "and" och kör ett kommatecken istället.
    // Det fungerar på engelska, svenska och tyska utan att behöva översättas!
    return `${d} d, ${h} h`; 
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
            headers: await getAuthHeaders(),
            body: JSON.stringify({ libraryData: libraryData })
        });
        
        if (response.ok) {
            console.log("☁️ Hela biblioteket (Strains & Profiles) pushades till molnet!");
        }
    } catch (err) {
        console.error("Kunde inte synka till molnet:", err);
    }
}

// 2. Hämtar ditt bibliotek FRÅN molnet (Körs vid inloggning)
async function fetchLibraryFromCloud() {
    try {
        const res = await fetch(`${API_BASE}/my-library`, { headers: await getAuthHeaders() });
        if (res.ok) {
            const data = await res.json();
            
            // Vi kollar om vi fick något svar överhuvudtaget
            if (data) {
                // 1. Hantera Custom Profiles (dina Profiler-recept)
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
auth.onAuthStateChanged(async (user) => {
    isAuthResolved = true; 

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
                // 1. Sätt aktiv enhet om den saknas
                if (!activeDeviceId) activeDeviceId = devices[0].device_id; 

                const removeRow = document.getElementById('row-remove-device');
                if (removeRow) removeRow.style.display = 'flex'; // Använd flex för att behålla din snygga layout

                const macDisplay = document.getElementById('setting-mac-display');
                if (macDisplay) macDisplay.textContent = activeDeviceId;

                const activeDev = devices.find(d => d.device_id === activeDeviceId) || devices[0];
                if (activeDev) {
                    window.currentDeviceData = activeDev;
                    if (typeof updateHeartbeatDisplay === 'function') updateHeartbeatDisplay(activeDev.lastSeen);
                }

                // 2. FYLL RULLISTAN I SETTINGS
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

                // 3. FYLL RULLISTAN I BIBLIOTEKET
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
                
                // 4. LADDA NAMN TILL DASHBOARD
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


// ==========================================
// --- LOGIK FÖR WIZARDEN OCH CHECKLISTAN ---
// ==========================================
let currentWizardStep = 0;
let totalWizardSteps = 0;
let stepActiveItems = {}; 

// Körs när man trycker Next eller Back
function changeWizardStep(direction, isFromPopState = false) {
    // 1. Om vi klickar "Tillbaka" via knappen, låt mobilens/webbläsarens inbyggda historik sköta det!
    if (direction === -1 && !isFromPopState) {
        history.back(); // Triggers window.onpopstate
        return;
    }

    let nextStep = currentWizardStep + direction;

    if (nextStep < 0 || nextStep >= totalWizardSteps) {
        closeAcademyModule();
        return;
    }

    // 2. Lägg till i historiken om vi går framåt (Next)
    if (direction === 1 && !isFromPopState) {
        history.pushState({ page: 'academy', step: nextStep }, null, "");
    }

    currentWizardStep = nextStep;
    updateWizardUI();
}

// Sköter bara utseendet så att den kan återanvändas säkert
function updateWizardUI() {
    if (typeof currentWizardStep === 'undefined') return;

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

    // 2. Uppdatera Knappar och Översättningar
    const prevBtn = document.getElementById('wiz-prev');
    const nextBtn = document.getElementById('wiz-next');

    if (prevBtn && nextBtn) {
        prevBtn.disabled = currentWizardStep === 0;

        // --- HÄMTA ÖVERSÄTTNINGAR (Kraschsäkert) ---
        const lang = window.currentLang || 'en';
        const t = window.translations?.[lang]?.academy || window.translations?.['en']?.academy || {};
        
        const textNext = t.btn_next || "Next ➔";
        const textFinish = t.btn_finish || "Finish! ✓";

        // Välj rätt text beroende på om vi är på sista steget eller inte
        nextBtn.innerText = currentWizardStep === totalWizardSteps - 1 ? textFinish : textNext;
    } // <-- HÄR SATT DEN SAKNADE MÅSVINGEN SOM KRASCHADE APPEN!

    // 3. Den Levande Checklistan!
    document.querySelectorAll('.wizard-checklist li').forEach(li => {
        li.classList.remove('active-item');
    });

    if (typeof stepActiveItems !== 'undefined' && stepActiveItems[currentWizardStep]) {
        const itemsToHighlight = stepActiveItems[currentWizardStep];
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
// ==========================================
// --- ÖPPNA/STÄNG MODULER ---
// ==========================================
function openAcademyModule(moduleId) {
    const overview = document.getElementById('lab-content-academy');
    const moduleView = document.getElementById('academy-module-view');
    const contentArea = document.getElementById('academy-module-content');

    // MAGIN: Hämta "boken" från rätt språk-hylla på den globala anslagstavlan!
    const langDict = window.academyModules[window.currentLang] || window.academyModules['en'];

    // Tryck in texten
    contentArea.innerHTML = langDict[moduleId] || '<p style="color: #ff4444;">Module not found.</p>';

    overview.style.display = 'none';
    moduleView.style.display = 'block';

    // MAGIN: Berätta för webbläsaren att lektionen har börjat på steg 0!
history.pushState({ page: 'academy', step: 0 }, null, "");

    // ==========================================
    // WIZARD-LOGIKEN (Ska vara kvar exakt som förut!)
    // ==========================================
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
        totalWizardSteps = 5;
        stepActiveItems = {
            0: ['item-blue', 'item-pipette'],
            1: ['item-hemo'],
            2: ['item-microscope'],
            3: ['item-microscope'],
            4: ['item-counter']
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
    else if (moduleId === 'stirplate') {
        // Om stirplate har en wizard behöver den config, just nu verkar den vara en statisk sida?
        // Har lagt in detta som säkerhet.
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
    { selector: '.carboy-wrapper', i18nKey: 'step_beer', offsetY: -35, mobileOffsetY: -60 },
    { selector: '.air-floating', i18nKey: 'step_air', offsetY: -5, mobileOffsetY: 5 },
    { selector: '#strain-val', i18nKey: 'step_strain', offsetY: 0, mobileOffsetY: 0 },
    { selector: '#profile-val', i18nKey: 'step_profile', offsetY: -5, mobileOffsetY: 0, mobileOffsetX: 0 },
    { selector: '.action-status', i18nKey: 'step_action', offsetY: -10, mobileOffsetY: -10 },
    { selector: '.progress-section', i18nKey: 'step_progress', offsetY: -155, mobileOffsetY: -150 },
    { selector: '.phase-info', i18nKey: 'step_phase', offsetY: -5, mobileOffsetY: 0 },
    { selector: '#beer-chart', i18nKey: 'step_chart', offsetY: 0, mobileOffsetY: 15 }
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

    if (window.isLibraryTourActive) return;

    currentDemoStep++;

    const tooltip = document.getElementById('demo-tour-tooltip');
    const overlay = document.getElementById('demo-overlay');

    // 1. KONTROLL: Är touren slut?
    if (currentDemoStep >= demoSteps.length) {
        if (tooltip) tooltip.style.display = 'none';
        if (overlay) overlay.style.display = 'none'; 
        
        setTimeout(() => {
            if (!activeDeviceId) {
                // Här kan vi också översätta alerten om du vill, men vi börjar med UI:t!
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
        
        // --- HÄR ÄR MAGIN: ÖVERSÄTTNINGEN ---
        if (tourTextEl) {
            const currentLang = window.currentLang || 'en';
            // Leta i 'tour'-sektionen i ordboken (eller engelska som reserv)
            const tourDict = translations[currentLang]?.tour || translations['en'].tour;
            // Hämta nyckeln vi lade in i arrayen (t.ex. 'step_beer')
            const stepKey = demoSteps[currentDemoStep].i18nKey;
            
            // Sätt den översatta texten
            tourTextEl.innerText = tourDict[stepKey] || "Text missing";
        }

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
    // 1. Översätt "DEMO MODE" i toppen
    let demoModeText = "DEMO MODE";
    if (window.currentLang === 'sv') demoModeText = "DEMOLÄGE";
    if (window.currentLang === 'de') demoModeText = "DEMO-MODUS";

    const displayElement = document.querySelector('.device-name-display');
    if (displayElement) displayElement.innerHTML = `<span style='color:#ff4444;'>${demoModeText}</span>`;

    // 2. Namn och profil (Dessa är egennamn och behöver inte översättas)
    document.getElementById('strain-val').innerText = "OLD BAVARIAN";
    document.getElementById('profile-val').innerText = "Brulosophy";
    
    // 3. Översätt "HEATING"
    const actionText = "HEATING";
    const translatedAction = translations[window.currentLang]?.action?.[actionText] || actionText;
    document.getElementById('action-val').innerText = translatedAction;

    // 4. Sätt Temperaturer
    const displayTemp = currentTempUnit === 'F' ? "68.2°F" : "20.1°C";
    document.getElementById('temp-beer-val').innerText = displayTemp;
    
    const beerTempEl = document.querySelector('.beer-temp');
    if (beerTempEl) beerTempEl.setAttribute('data-text', displayTemp);
    
    document.getElementById('air-temp-val').innerText = currentTempUnit === 'F' ? "73.4°F" : "23.0°C";
    
    // 5. Översätt "RAMPING"
    const statusText = "RAMPING";
    const translatedStatus = translations[window.currentLang]?.phase?.[statusText] 
                          || translations[window.currentLang]?.status?.[statusText] 
                          || statusText;
    document.getElementById('status-text').innerText = translatedStatus;

    // 6. Tidsformat (Använder din universella formatDaysToHuman)
    // 4 dagar och 2 timmar = 4 + (2/24)
    document.getElementById('day-val').innerText = formatDaysToHuman(4 + (2/24));
    // 0 dagar och 1 timme = 0 + (1/24)
    document.getElementById('phase-day-val').innerText = formatDaysToHuman(0 + (1/24));
    
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

    // Rita upp fejkgrafen
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
// --- MOBILJUSTERING FÖR i-KNAPPEN ---
const demoBtn = document.getElementById('start-demo-btn');
if (demoBtn) {
    const isMobile = window.innerWidth <= 768; // Känner av om det är mobil
    
    if (isMobile) {
        demoBtn.style.left = '55%';  // Skjuter till höger på mobilen så den slipper DEMO-MODUS
        demoBtn.style.top = '14px';   // Flyttar ner den en millimeter extra på mobilen
    } else {
        demoBtn.style.left = '42%';  // Ditt perfekta läge på datorn
        demoBtn.style.top = '12px';   // Flyttar ner den en millimeter på datorn så den slipper taket
    }
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

// ==========================================
// --- ACTION ALERT SYSTEM (DASHBOARD) ---
// ==========================================
function checkActionAlerts(currentDay, strainName, profileName) {
    try {
        const alertBanner = document.getElementById('dashboard-action-alert');
        const alertText = document.getElementById('alert-action-name');
        
        if (!alertBanner || !alertText || !profileName || !strainName) return;

        // Göm larmet som standard varje gång vi uppdaterar
        alertBanner.style.display = 'none';

        let activeProfile = null;
        
        // Kolla först dina egna Custom Profiles
        const customProfiles = JSON.parse(localStorage.getItem('customYeastProfiles') || '[]');
        activeProfile = customProfiles.find(p => p.s && p.s.toUpperCase() === profileName.toUpperCase());

        // Om vi inte hittade den där, kolla maskinens standardprofiler
        if (!activeProfile && typeof yeastDatabase !== 'undefined' && yeastDatabase.yeasts) {
            const cleanStrain = formatOledName(strainName).toUpperCase();
            activeProfile = yeastDatabase.yeasts.find(p => p.p && p.p.toUpperCase() === profileName.toUpperCase() && p.s && p.s.toUpperCase() === cleanStrain);
        }

        if (!activeProfile) return; // Hittade ingen matchande profil

        // Vi ger larmet en tidsfönster på 1.0 dagar
        const alertWindow = 1.0; 

        // Kolla Rack / Dump
        if (activeProfile.rackDumpDay && currentDay >= activeProfile.rackDumpDay && currentDay < (activeProfile.rackDumpDay + alertWindow)) {
            alertText.innerText = "RACK / DUMP YEAST";
            alertBanner.style.background = "var(--accent-secondary, #F2994A)"; // Orange/Guld
            alertBanner.style.boxShadow = "0 4px 15px rgba(242, 153, 74, 0.4)";
            alertBanner.style.display = 'block';
        } 
        // Kolla Torrhumling
        else if (activeProfile.dryHopDay && currentDay >= activeProfile.dryHopDay && currentDay < (activeProfile.dryHopDay + alertWindow)) {
            alertText.innerText = "ADD DRY HOPS";
            alertBanner.style.background = "#8CC63F"; // Grön
            alertBanner.style.boxShadow = "0 4px 15px rgba(140, 198, 63, 0.4)";
            alertBanner.style.display = 'block';
        }

        // Kolla Remove Hops
        else if (activeProfile.removeHopDay && currentDay >= activeProfile.removeHopDay && currentDay < (activeProfile.removeHopDay + alertWindow)) {
            alertText.innerText = "REMOVE HOPS";
            alertBanner.style.background = "#ff6b6b"; // Snyggt röd
            alertBanner.style.boxShadow = "0 4px 15px rgba(255, 107, 107, 0.4)";
            alertBanner.style.display = 'block';
        }

    } catch (err) {
        console.error("Larm-detektiven förhindrade en krasch: ", err);
    }
}



function updateHeartbeatDisplay(lastSeenTimestamp) {
    const statusSpan = document.getElementById('setting-device-status');
    if (!statusSpan || !lastSeenTimestamp) return;

    const lastSeen = new Date(lastSeenTimestamp);
    const now = new Date();
    const diffMs = now - lastSeen;
    
    // --- HÄMTA SPRÅK OCH ÖVERSÄTTNINGAR ---
    const lang = window.currentLang || 'en';
    // Fallback om settings saknas:
    const t = window.translations?.[lang]?.settings || { 
        connected: "CONNECTED", 
        offline: "OFFLINE", 
        ago: "ago" 
    };

    // Om diffen är negativ (klockfel), eller om den är väldigt nyligen synkad
    if (diffMs < 0 || (diffMs / 60000) < 15) {
        statusSpan.innerText = t.connected;
        statusSpan.style.color = "#8CC63F"; // Grön
        return;
    }

    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    let statusText = "";
    const statusColor = "#ff4444"; // Röd

    // Enheter (d/h/m är universellt, men du kan flytta in dessa i i18n-filen om du vill vara extremt noga)
    const d = "d"; 
    const h = "h";
    const m = "m";

    if (diffDays > 0) {
        // Ex: "FRÅNKOPPLAD (2d, 4h sedan)"
        const remHours = diffHours % 24;
        statusText = `${t.offline} (${diffDays}${d}, ${remHours}${h} ${t.ago})`;
    } else if (diffHours > 0) {
        // Ex: "FRÅNKOPPLAD (3h, 12m sedan)"
        const remMins = diffMins % 60;
        statusText = `${t.offline} (${diffHours}${h}, ${remMins}${m} ${t.ago})`;
    } else {
        // Ex: "FRÅNKOPPLAD (45m sedan)"
        statusText = `${t.offline} (${diffMins}${m} ${t.ago})`;
    }

    statusSpan.innerText = statusText;
    statusSpan.style.color = statusColor;
}

// Körs i bakgrunden varje 30:e sekund för att hålla statusen färsk i Settings
setInterval(() => {
    // Kollar om vi har en vald enhet och om den har en senast-sedd-stämpel
    if (window.currentDeviceData && window.currentDeviceData.lastSeen) {
        updateHeartbeatDisplay(window.currentDeviceData.lastSeen);
    }
}, 30000);

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
    if (typeof labChart !== 'undefined' && labChart !== null) {
        let xAxisLabel = "Days";
        if (window.currentLang === 'sv') xAxisLabel = "Dagar";
        if (window.currentLang === 'de') xAxisLabel = "Tage";
        
        if (labChart.options.scales.x.title) {
            labChart.options.scales.x.title.text = xAxisLabel;
        }
        labChart.update('none'); // Uppdatera grafen ljudlöst utan animation
    }

    // MAGIN: Tvinga även sammanfattningen (Profile Summary) att direkt översätta sig!
    if (typeof updateSummaryText === 'function') {
        updateSummaryText();
    }
});


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

function applyTranslations() {
    const lang = window.currentLang || 'en';
    const t = window.translations?.[lang] || window.translations?.['en'];

    // Hitta alla element som har data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        // Plocka ut nyckeln (t.ex. "claim.title" -> t["claim"]["title"])
        const keys = key.split('.');
        let translation = t;
        keys.forEach(k => translation = translation?.[k]);
        
        if (translation) el.innerText = translation;
    });

    // Hitta alla element som har data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const keys = key.split('.');
        let translation = t;
        keys.forEach(k => translation = translation?.[k]);
        
        if (translation) el.placeholder = translation;
    });
}
