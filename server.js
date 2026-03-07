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
        // NYTT: Samlingen som håller koll på vem som äger vilken enhet
        userDevicesCollection = db.collection('userDevices'); 
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
    const { device_id, temp, air_temp, day, status, action, token, strain, profile } = req.body;

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
        status, 
        action: action || "IDLE", 
        strain,
        profile
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

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server körs på port ${PORT}`);
});
