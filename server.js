const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

const uri = process.env.MONGO_URI; 
const client = new MongoClient(uri);

let db, logsCollection, userDevicesCollection;

async function connectDB() {
    try {
        await client.connect();
        db = client.db('yeastMasterDB');
        logsCollection = db.collection('fermentationLogs');
        userDevicesCollection = db.collection('userDevices'); 
        
        // --- NYTT: Samlingen för det globala profil-biblioteket ---
        userLibrariesCollection = db.collection('userLibraries'); 
        
        console.log("Ansluten till MongoDB!");
    } catch (e) {
        console.error("Kunde inte ansluta till MongoDB:", e);
    }
}
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// --- 1. MOTTAGAREN (Från ESP32) ---
app.post('/api/update', async (req, res) => {

    console.log("Inkommande data från ESP32:", req.body);
  
   const { device_id, temp, air_temp, day, phase_day, status, action, token, strain, profile, target_temp } = req.body;

    if (token !== "YeastMaster-Super-Secret-2024") {
        return res.status(401).send({ error: "Obehörig!" });
    }
    if (!device_id) {
        return res.status(400).send({ error: "Saknar device_id!" });
    }

    const newEntry = {
        time: new Date(),
        device_id, 
        temp,
        air_temp,
        day,
        phase_day,
        status, 
        action: action || "IDLE", 
        strain,
        profile,
        // 2. LÄGG TILL DEN I OBJEKTET SOM SPARAS HÄR:
        target_temp 
    };

    try {
        await logsCollection.insertOne(newEntry);
        res.status(200).send({ message: "Data sparad med device_id!" });
    } catch (e) {
        res.status(500).send({ error: "Kunde inte spara i databasen" });
    }
});

// --- 2. SÄNDAREN (Till din mobil/dashboard) ---
app.get('/api/data', async (req, res) => {
    const requestedDevice = req.query.device_id;
    let query = {};
    if (requestedDevice) {
        query.device_id = requestedDevice;
    }

    try {
        const history = await logsCollection.find(query).sort({ time: -1 }).limit(1000).toArray();
        res.json(history.reverse());
    } catch (e) {
        res.status(500).send({ error: "Kunde inte hämta data" });
    }
});


// ==========================================
// NYA FUNKTIONER FÖR FLERANVÄNDAR-SYSTEMET
// ==========================================

// --- 3. CLAIM DEVICE (Knyt en enhet till en användare) ---
app.post('/api/claim-device', async (req, res) => {
    const { uid, device_id, name } = req.body;

    if (!uid || !device_id) {
        return res.status(400).send({ error: "Saknar uid eller device_id" });
    }

    try {
        // Upsert: Skapa länken om den inte finns, annars uppdatera namnet
        await userDevicesCollection.updateOne(
            { device_id: device_id },
            { $set: { uid: uid, name: name || "Min YeastMaster", claimed_at: new Date() } },
            { upsert: true }
        );
        res.status(200).send({ message: "Enhet tillagd!" });
    } catch (e) {
        res.status(500).send({ error: "Kunde inte spara enheten" });
    }
});

// --- 4. MY DEVICES (Hämta användarens enheter) ---
app.get('/api/my-devices', async (req, res) => {
    const { uid } = req.query;

    if (!uid) {
        return res.status(400).send({ error: "Saknar uid" });
    }

    try {
        const devices = await userDevicesCollection.find({ uid: uid }).toArray();
        res.status(200).json(devices);
    } catch (e) {
        res.status(500).send({ error: "Kunde inte hämta enheter" });
    }
});

// ==========================================
// --- 6. SYNK-MOTOR FÖR JÄSTPROFILER ---
// ==========================================

// ==========================================
// --- 6. GLOBALT BIBLIOTEK FÖR WEBBAPPEN ---
// ==========================================

// A1. Spara hela biblioteket till molnet (Kopplat till ditt konto)
app.post('/api/my-library', async (req, res) => {
    const { uid, libraryData } = req.body;

    if (!uid || !libraryData) {
        return res.status(400).send({ error: "Saknar data" });
    }

    try {
        // Upsert: Skapa ett bibliotek för användaren om det saknas, annars uppdatera det
        await userLibrariesCollection.updateOne(
            { uid: uid },
            { $set: { library: libraryData, last_updated: new Date() } },
            { upsert: true }
        );
        res.status(200).send({ message: "Biblioteket är nu sparat i molnet!" });
    } catch (e) {
        res.status(500).send({ error: "Kunde inte spara biblioteket" });
    }
});

// A2. Appen hämtar biblioteket när du loggar in (Mobil eller PC)
app.get('/api/my-library', async (req, res) => {
    const { uid } = req.query;

    if (!uid) return res.status(400).send({ error: "Saknar uid" });

    try {
        const userLib = await userLibrariesCollection.findOne({ uid: uid });
        if (userLib && userLib.library) {
            res.status(200).json(userLib.library);
        } else {
            res.status(200).json(null); // Om man är helt ny och saknar bibliotek
        }
    } catch (e) {
        res.status(500).send({ error: "Kunde inte hämta biblioteket" });
    }
});

// B. ESP32 ropar på denna URL för att hämta SIN ägares bibliotek!
app.get('/api/device-sync/:mac', async (req, res) => {
    const mac = req.params.mac;

    try {
        // 1. Vem äger denna enhet?
        const device = await userDevicesCollection.findOne({ device_id: mac });
        
        if (!device || !device.uid) {
            // Om enheten inte är kopplad till ett konto än
            return res.json({
                "yeasts": [
                    { "n": "UNCLAIMED", "s": "Not linked", "p": "Link in App", "steps": [[0, 20.0], [1, 20.0]] }
                ]
            });
        }

        // 2. Hämta ägarens globala bibliotek!
        const userLib = await userLibrariesCollection.findOne({ uid: device.uid });
        
        if (userLib && userLib.library) {
            // Skicka hela biblioteket till maskinen
            res.json(userLib.library);
        } else {
            // Fallback om användaren inte har sparat något i appen än
            res.json({
                "yeasts": [
                    { "n": "EMPTY LIBRARY", "s": "No Data", "p": "Save in App", "steps": [[0, 20.0], [1, 20.0]] }
                ]
            });
        }
    } catch (e) {
        console.error("Fel vid hämtning av enhetens profiler:", e);
        res.status(500).send({ error: "Databasfel vid ESP32-synk" });
    }
});

// ==========================================
// --- SYNK-MOTOR FÖR ESP32 (Max 10 profiler) ---
// ==========================================

// A. Appen skickar de 10 valda profilerna till en specifik maskin
app.post('/api/sync-profiles', async (req, res) => {
    const { uid, device_id, yeastData } = req.body;

    if (!uid || !device_id || !yeastData) {
        return res.status(400).send({ error: "Saknar data för synkning" });
    }

    try {
        // Sparar den valda 10-listan på just denna enhet
        await userDevicesCollection.updateOne(
            { uid: uid, device_id: device_id },
            { $set: { syncedProfiles: yeastData } }
        );
        res.status(200).send({ message: "Profilerna är nu sparade i molnet för denna enhet!" });
    } catch (e) {
        console.error("Kunde inte synka profiler:", e);
        res.status(500).send({ error: "Databasfel vid synkning" });
    }
});

// B. ESP32 ropar på denna URL för att hämta SIN specifika lilla lista!
app.get('/api/device-sync/:mac', async (req, res) => {
    const mac = req.params.mac;

    try {
        const device = await userDevicesCollection.findOne({ device_id: mac });
        
        // Om kylen har en sparad 10-lista i databasen, skicka den!
        if (device && device.syncedProfiles) {
            res.json(device.syncedProfiles);
        } else {
            // Fallback om man inte synkat något än
            res.json({
                "yeasts": [
                    {
                        "n": "AWAITING SYNC",
                        "s": "No Data",
                        "p": "Please sync from app",
                        "steps": [[0, 20.0], [14, 20.0]]
                    }
                ]
            });
        }
    } catch (e) {
        console.error("Fel vid hämtning av enhetens profiler:", e);
        res.status(500).send({ error: "Databasfel" });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server körs på port ${PORT}`);
});
