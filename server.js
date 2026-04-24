const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

// --- NYTT: Importera web-push ---
const webpush = require('web-push');

const app = express();
const PORT = process.env.PORT || 3000;

const uri = process.env.MONGO_URI; 
const client = new MongoClient(uri);

let db, logsCollection, userDevicesCollection, userLibrariesCollection, pushSubscriptionsCollection;

async function connectDB() {
    try {
        await client.connect();
        db = client.db('yeastMasterDB');
        logsCollection = db.collection('fermentationLogs');
        userDevicesCollection = db.collection('userDevices'); 
        userLibrariesCollection = db.collection('userLibraries'); 
        
        // --- NYTT: Samlingen för Push-prenumerationer ---
        pushSubscriptionsCollection = db.collection('pushSubscriptions');
        
        console.log("Ansluten till MongoDB!");
    } catch (e) {
        console.error("Kunde inte ansluta till MongoDB:", e);
    }
}
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// ==========================================
// --- NYTT: VAPID-INSTÄLLNINGAR FÖR PUSH ---
// ==========================================
// Leta upp där du definierade nycklarna tidigare och ändra till detta:
const publicVapidKey = process.env.PUBLIC_VAPID_KEY; 
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

// Om du vill ha en extra säkerhetskoll:
if (!publicVapidKey || !privateVapidKey) {
    console.error("FEL: VAPID-nycklar saknas i miljövariablerna!");
}

webpush.setVapidDetails(
    'mailto:support@yeastmaster.com', 
    publicVapidKey, 
    privateVapidKey
);


// --- 1. MOTTAGAREN (Från ESP32) ---
app.post('/api/update', async (req, res) => {
    console.log("Inkommande data från ESP32:", req.body);
  
const { device_id, temp, air_temp, day, phase_day, status, action, token, strain, profile, target_temp, active_alert } = req.body;

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
        target_temp, 
        active_alert
    };

    try {
        await logsCollection.insertOne(newEntry);

        await userDevicesCollection.updateOne(
            { device_id: device_id },
            { $set: { lastSeen: new Date() } }
        );
        
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
// --- 6. GLOBALT BIBLIOTEK FÖR WEBBAPPEN ---
// ==========================================

app.post('/api/my-library', async (req, res) => {
    const { uid, libraryData } = req.body;

    if (!uid || !libraryData) {
        return res.status(400).send({ error: "Saknar data" });
    }

    try {
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

app.get('/api/my-library', async (req, res) => {
    const { uid } = req.query;

    if (!uid) return res.status(400).send({ error: "Saknar uid" });

    try {
        const userLib = await userLibrariesCollection.findOne({ uid: uid });
        if (userLib && userLib.library) {
            res.status(200).json(userLib.library);
        } else {
            res.status(200).json(null);
        }
    } catch (e) {
        res.status(500).send({ error: "Kunde inte hämta biblioteket" });
    }
});

// ==========================================
// --- SYNK-MOTOR FÖR ESP32 ---
// ==========================================

app.post('/api/sync-profiles', async (req, res) => {
    const { uid, device_id, yeastData } = req.body;

    if (!uid || !device_id || !yeastData) {
        return res.status(400).send({ error: "Saknar data för synkning" });
    }

    try {
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

app.get('/api/device-sync/:mac', async (req, res) => {
    const mac = req.params.mac;

    try {
        const device = await userDevicesCollection.findOne({ device_id: mac });
        
        if (device && device.syncedProfiles && device.syncedProfiles.yeasts) {
            res.json(device.syncedProfiles);
        } else {
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

// ==========================================
// --- 7. TA BORT ENHET FRÅN MOLNET ---
// ==========================================
app.post('/api/remove-device', async (req, res) => {
    const { uid, device_id } = req.body;

    if (!uid || !device_id) {
        return res.status(400).send({ error: "Saknar uid eller device_id" });
    }

    try {
        const result = await userDevicesCollection.deleteOne({ uid: uid, device_id: device_id });

        if (result.deletedCount === 1) {
            res.status(200).send({ message: "Enheten är borttagen" });
        } else {
            res.status(404).send({ error: "Enheten hittades inte i databasen" });
        }
    } catch (e) {
        res.status(500).send({ error: "Kunde inte radera enheten från molnet." });
    }
});


// ==========================================
// --- NYTT: MOTTA OCH SPARA PRENUMERATIONER PÅ LARM ---
// ==========================================
app.post('/api/subscribe', async (req, res) => {
    const { uid, sub } = req.body;

    if (!uid || !sub) {
        return res.status(400).send({ error: "Saknar uid eller prenumerationsobjekt" });
    }

    try {
        // Spara prenumerationen i databasen kopplad till användaren
        await pushSubscriptionsCollection.updateOne(
            { uid: uid },
            { $set: { subscription: sub, last_updated: new Date() } },
            { upsert: true }
        );

        res.status(201).json({ message: 'Prenumeration mottagen och sparad!' });

        // --- TESTLARM: Skickar ett larm direkt som kvitto ---
        const payload = JSON.stringify({
            title: 'YeastMaster System',
            body: 'Din telefon är nu kopplad och redo för brygglarm! 🍻',
            url: '/'
        });

        webpush.sendNotification(sub, payload).catch(err => console.error("Push Error:", err));

    } catch (e) {
        console.error("Kunde inte spara prenumeration:", e);
        res.status(500).send({ error: "Databasfel" });
    }
});

// --- MINNEN FÖR LARM-VAKTEN ---
const notifiedLogs = {}; // Minne för att undvika spam för engångshändelser
const alertState = {};   // Minne för temperatur-eskalering (15 min intensivt, sen 60 min)

// ==========================================
// --- LARM-VAKTEN (WATCHDOG) ---
// ==========================================
// Körs var 1:a minut för att snabbt upptäcka nya loggar, 
// men skickar bara push enligt reglerna.
setInterval(async () => {
    console.log("Watchdog: Kollar efter larm...");
    
    if(!userDevicesCollection || !logsCollection || !pushSubscriptionsCollection) return;

    try {
        // Hämta alla enheter som finns i databasen
        const devices = await userDevicesCollection.find({}).toArray();

        for (let device of devices) {
            if (!device.uid || !device.device_id) continue;

            const deviceId = device.device_id;

            // Hämta den allra senaste loggen för just denna kyl
            const latestLogArray = await logsCollection.find({ device_id: deviceId }).sort({ time: -1 }).limit(1).toArray();
            if (latestLogArray.length === 0) continue;
            
            const latestLog = latestLogArray[0];
            const now = Date.now();
            const timeSinceLastLogMs = now - new Date(latestLog.time).getTime();
            const logIdStr = latestLog._id.toString();

            let shouldNotify = false;
            let alarmTitle = null;
            let alarmBody = null;

            // --- REGLER FÖR ATT SKICKA LARM ---
            
            // Regel 1: OFFLINE. Om ingen data kommit in på över 30 minuter.
            if (timeSinceLastLogMs > (30 * 60 * 1000)) {
                if (notifiedLogs[deviceId] !== logIdStr + "_offline") {
                    alarmTitle = '🚨 STRÖMAVBROTT / OFFLINE';
                    alarmBody = `${device.name || 'En av dina kylar'} har inte skickat data på över 30 minuter!`;
                    shouldNotify = true;
                    notifiedLogs[deviceId] = logIdStr + "_offline"; // Kom ihåg detta strömavbrott
                }
            } 
            
            // Regel 2: HÅRDVARULARM (T.ex. DRY HOP eller DUMP YEAST)
            else if (latestLog.active_alert && latestLog.active_alert !== "") {
                if (notifiedLogs[deviceId] !== logIdStr) {
                    alarmTitle = '🔔 DAGS FÖR ÅTGÄRD!';
                    alarmBody = `${device.name || 'YeastMaster'} meddelar: ${latestLog.active_alert}`;
                    shouldNotify = true;
                    notifiedLogs[deviceId] = logIdStr; // Kom ihåg detta specifika larm
                }
            }
            
            // Regel 3: TEMPERATUR (Eskalering)
            else if (latestLog.status !== 'FINISHED' && latestLog.status !== 'IDLE' && latestLog.temp > -100) {
                const diff = Math.abs(latestLog.temp - latestLog.target_temp);
                
                if (diff >= 2.0) {
                    // Vi har ett pågående temp-fel!
                    if (!alertState[deviceId]) {
                        // Första gången vi upptäcker felet, skapa ett minne
                        alertState[deviceId] = {
                            firstDetected: now,
                            lastNotified: 0
                        };
                    }

                    const state = alertState[deviceId];
                    const minutesSinceStart = (now - state.firstDetected) / (60 * 1000);
                    const minutesSinceLastNotify = (now - state.lastNotified) / (60 * 1000);

                    // Eskaleringslogiken: Var 5:e minut första kvarten, därefter var 60:e minut
                    if (minutesSinceStart <= 15) {
                        if (minutesSinceLastNotify >= 5) shouldNotify = true;
                    } else {
                        if (minutesSinceLastNotify >= 60) shouldNotify = true;
                    }

                    if (shouldNotify) {
                        alarmTitle = '⚠️ TEMPERATURVARNING';
                        alarmBody = `${device.name || 'Din kyl'} avviker med ${diff.toFixed(1)}°C från målet! Aktuell temp: ${latestLog.temp}°C`;
                        state.lastNotified = now; // Stämpla klockan för senaste notis
                    }
                } else {
                    // Temperaturen är OK igen (< 2 graders diff), rensa eskaleringsminnet!
                    delete alertState[deviceId];
                }
            } else {
                // Maskinen är Idle/Finished eller sensorn är trasig. Rensa minnet.
                delete alertState[deviceId];
            }

            // --- SKICKA PUSH-NOTISEN ---
            if (shouldNotify && alarmTitle && alarmBody) {
                const userSub = await pushSubscriptionsCollection.findOne({ uid: device.uid });
                
                if (userSub && userSub.subscription) {
                    const timeString = new Date().toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' });
                    const payload = JSON.stringify({
                        title: alarmTitle,
                        body: `[${timeString}] ${alarmBody}`,
                        url: '/'
                    });
                    
                    webpush.sendNotification(userSub.subscription, payload)
                        .then(() => {
                            console.log(`Skickade larm till UID ${device.uid}: ${alarmTitle}`);
                        })
                        .catch(err => console.error("Kunde inte skicka larm:", err));
                }
            }
        }
    } catch (e) {
        console.error("Fel i larm-vakten:", e);
    }

}, 1 * 60 * 1000); // 1 * 60 * 1000 ms = Körs exakt var 1:a minut.


// --- DENNA MÅSTE ALLTID LIGGA SIST ---
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server körs på port ${PORT}`);
});