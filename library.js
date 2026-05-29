// ==========================================
// --- LIBRARY.JS — Yeast Library & Cloud Sync ---
// ==========================================
// Kräver: auth.js (getAuthHeaders), app.js (selectedStrains, yeastDatabase)

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

// Initiera biblioteket efter att alla skript laddats (selectedStrains deklareras i app.js)
document.addEventListener('DOMContentLoaded', () => renderYeastLibrary());

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
