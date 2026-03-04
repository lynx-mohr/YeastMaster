const express = require('express');
const app = express();
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server körs på http://192.168.1.188:${PORT}`);
});

// Här sparar vi mätningarna (i en riktig app använder vi en databas här)
let tempHistory = []; 

app.use(express.json());
// Gör så att din dashboard (HTML/JS) får lov att prata med servern
const cors = require('cors'); 
app.use(cors()); 

// 1. MOTTAGARE (Från ESP32)
app.post('/api/update', (req, res) => {
    // Lägg till strain och profile här
    const { temp, air_temp, day, status, token, strain, profile } = req.body;

    if (token !== "YeastMaster-Super-Secret-2024") {
        return res.status(401).send({ error: "Obehörig!" });
    }

    const newEntry = {
        time: new Date().toISOString(),
        temp,
        air_temp,
        day,
        status,
        strain,  // Spara jästnamn
        profile  // Spara profilnamn
    };

    tempHistory.push(newEntry);
    fs.writeFileSync(DATA_FILE, JSON.stringify(tempHistory, null, 2));
    res.status(200).send({ message: "Data sparad!" });
});

// 2. SÄNDARE (Till din Webb-dashboard)
app.get('/api/data', (req, res) => {
    res.json(tempHistory);
});

// Använd miljövariabeln PORT om den finns, annars 3000 (för lokalt bruk)
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`YeastMaster Server körs på port ${PORT}`);

});
