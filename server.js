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

// 1. MOTTAGARE (Från ESP32)
app.post('/api/update', async (req, res) => {
    // Vi hämtar nu även 'action' från ESP32
    const { temp, air_temp, day, status, action, token, strain, profile } = req.body;

    if (token !== "YeastMaster-Super-Secret-2024") {
        return res.status(401).send({ error: "Obehörig!" });
    }

    const newEntry = {
        time: new Date(),
        temp,
        air_temp,
        day,
        status, // Här hamnar t.ex. "Primary" eller "Cold Crash"
        action: action || "IDLE", // Här hamnar "COOLING", "HEATING" eller "IDLE"
        strain,
        profile
    };

    try {
        await logsCollection.insertOne(newEntry);
        res.status(200).send({ message: "Data sparad i molnet!" });
    } catch (e) {
        res.status(500).send({ error: "Kunde inte spara" });
    }
});

// 2. SÄNDARE (Till din Webb-dashboard)
app.get('/api/data', async (req, res) => {
    try {
        // Hämta de 1000 senaste mätningarna (nyast först)
        const history = await logsCollection.find().sort({ time: -1 }).limit(1000).toArray();
        // Vänd dem så de kommer i tidsordning för grafen
        res.json(history.reverse());
    } catch (e) {
        res.status(500).send({ error: "Kunde inte hämta data" });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server körs på port ${PORT}`);
});
