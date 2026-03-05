const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

// Hämta din Connection String från Render's miljövariabler (vi fixar detta i nästa steg)
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let db, logsCollection;

// Anslut till databasen
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
    const { temp, air_temp, day, status, token, strain, profile } = req.body;

    if (token !== "YeastMaster-Super-Secret-2024") {
        return res.status(401).send({ error: "Obehörig!" });
    }

    const newEntry = {
        time: new Date(), // Spara som riktigt datum-objekt
        temp,
        air_temp,
        day,
        status,
        strain,
        profile
    };

    try {
        await logsCollection.insertOne(newEntry);
        res.status(200).send({ message: "Data sparad i molnet!" });
    } catch (e) {
        res.status(500).send({ error: "Kunde inte spara till databasen" });
    }
});

// 2. SÄNDARE (Till din Webb-dashboard)
app.get('/api/data', async (req, res) => {
    try {
        // Hämta de senaste 1000 mätningarna, sorterade efter tid
        const history = await logsCollection.find().sort({ time: 1 }).limit(1000).toArray();
        res.json(history);
    } catch (e) {
        res.status(500).send({ error: "Kunde inte hämta data" });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server körs på port ${PORT}`);
});
