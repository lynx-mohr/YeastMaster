const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

const uri = process.env.MONGO_URI; 
const client = new MongoClient(uri);

let db, logsCollection;

async function connectDB() {
    try {
        await client.connect();
        db = client.db('yeastMasterDB');
        logsCollection = db.collection('fermentationLogs');
        console.log("Ansluten till MongoDB!");
    } catch (e) {
        console.error("Kunde inte ansluta till MongoDB:", e);
    }
}
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// 1. MOTTAGAREN (Från ESP32)
app.post('/api/update', async (req, res) => {
    // NYTT: Vi plockar nu ut device_id från paketet
    const { device_id, temp, air_temp, day, status, action, token, strain, profile } = req.body;

    // Vi behåller din globala token som ett första säkerhetslager tills vi bygger inloggningen helt
    if (token !== "YeastMaster-Super-Secret-2024") {
        return res.status(401).send({ error: "Obehörig!" });
    }

    // NYTT: Kolla så att ESP32:an faktiskt skickade med vem den är
    if (!device_id) {
        return res.status(400).send({ error: "Saknar device_id!" });
    }

    const newEntry = {
        time: new Date(),
        device_id, // <--- Här sparas MAC-adressen i databasen!
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

// 2. SÄNDAREN (Till din mobil/dashboard)
app.get('/api/data', async (req, res) => {
    // NYTT: Webbappen kan nu be om en specifik enhet
    const requestedDevice = req.query.device_id;
    
    // Om webbappen frågar efter en specifik enhet, sök bara efter den. 
    // Annars (som en tillfällig livlina) hämtar vi allt så att din nuvarande app inte går sönder direkt.
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

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server körs på port ${PORT}`);
});
