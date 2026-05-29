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
// Firebase-config + initializeApp + auth — definieras i auth.js


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
        privacy: document.getElementById('view-privacy'),
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

// --- 6. KOPPLA ENHET (CLAIM) ---
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

// Logout + delete account — hanteras i auth.js

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
