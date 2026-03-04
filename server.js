const express = require('express');
const cors = require('cors');
const fs = require('fs'); // Behövs för att spara filer
const path = require('path');

const app = express();

// 1. DEFINIERA PORTEN HÖGST UPP
const PORT = process.env.PORT || 3000;

// 2. FILNAMN FÖR SPARAD DATA
const DATA_FILE = 'data.json';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Gör att din index.html kan visas på nätet

// Ladda befintlig data om filen finns
let tempHistory = [];
if (fs.existsSync(DATA_FILE)) {
    try {
        const fileData = fs.readFileSync(DATA_FILE, 'utf8');
        tempHistory = JSON.parse(fileData);
    } catch (e) {
        tempHistory = [];
    }
}

// 1. MOTTAGARE (Från ESP32)
app.post('/api/update', (req, res) => {
    const { temp, air_temp, day, status, token, strain, profile } = req.body;

    // Säkerhetskoll
    if (token !== "YeastMaster-Super-Secret-2024") {
        return res.status(401).send({ error: "Obehörig!" });
    }

    const newEntry = {
        time: new Date().toISOString(),
        temp,
        air_temp,
        day,
        status,
        strain, 
        profile 
    };

    tempHistory.push(newEntry);
    
    // Spara till filen
    fs.writeFileSync(DATA_FILE, JSON.stringify(tempHistory, null, 2));
    
    console.log(`Ny mätning sparad: ${temp}°C`);
    res.status(200).send({ message: "Data sparad!" });
});

// 2. SÄNDARE (Till din Webb-dashboard)
app.get('/api/data', (req, res) => {
    res.json(tempHistory);
});

// 3. STARTA SERVER (Bara en gång, och längst ner!)
app.listen(PORT, '0.0.0.0', () => {
    console.log(`YeastMaster Server är live på port ${PORT}`);
});
