
const crypto = require('crypto');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const rateLimit = require('express-rate-limit');

// --- NYTT: Importera web-push ---
const webpush = require('web-push');

const app = express();
app.use(helmet());
const PORT = process.env.PORT || 3000;

const uri = process.env.MONGO_URI; 
const client = new MongoClient(uri);

const path = require('path');
const fs = require('fs');

const admin = require('firebase-admin');
let firebaseReady = false;
try {
    if (!process.env.FIREBASE_SERVICE_ACCOUNT) throw new Error("FIREBASE_SERVICE_ACCOUNT saknas");
    admin.initializeApp({
        credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT))
    });
    firebaseReady = true;
} catch (e) {
    console.error("FEL: Firebase Admin kunde inte initieras:", e.message);
    console.error("Skyddade API-endpoints kommer att returnera 503 tills miljövariabeln är satt.");
}

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

// Saniterar bort MongoDB-operatorer ($-prefix) från req.body och req.params.
// Express 5 gör req.query read-only, så den hanteras per endpoint med isString-kontroller.
function sanitizeMongo(obj) {
    if (typeof obj !== 'object' || obj === null) return obj;
    const result = Array.isArray(obj) ? [] : {};
    for (const [key, value] of Object.entries(obj)) {
        if (!key.startsWith('$')) {
            result[key] = typeof value === 'object' ? sanitizeMongo(value) : value;
        }
    }
    return result;
}
app.use((req, res, next) => {
    if (req.body) req.body = sanitizeMongo(req.body);
    if (req.params) req.params = sanitizeMongo(req.params);
    next();
});

// 500 req / 15 min — täcker dashboard-polling + ESP32-updates för normala användare
const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 500,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'För många förfrågningar, försök igen senare.' }
});

// 10 req / 15 min — för kontomutationer som claim/remove/subscribe
const strictLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'För många förfrågningar, försök igen senare.' }
});

app.use('/api/', generalLimiter);

function isString(val) {
    return typeof val === 'string' && val.trim().length > 0;
}
function isNumber(val) {
    return typeof val === 'number' && isFinite(val);
}

async function verifyToken(req, res, next) {
    if (!firebaseReady) {
        return res.status(503).json({ error: 'Servern saknar Firebase-konfiguration' });
    }
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
        const decoded = await admin.auth().verifyIdToken(authHeader.split('Bearer ')[1]);
        req.uid = decoded.uid;
        next();
    } catch {
        res.status(401).json({ error: 'Invalid token' });
    }
}

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

    if (!isString(device_id) || device_id.length > 64) {
        return res.status(400).send({ error: "Ogiltigt device_id!" });
    }
    if (!isString(token)) {
        return res.status(400).send({ error: "Ogiltigt token!" });
    }

       const device = await userDevicesCollection.findOne({ 
    device_id: device_id,
    token: token 
});

if (!device) {
    return res.status(401).send({ error: "Obehörig!" });
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
        if (!isString(requestedDevice) || requestedDevice.length > 64) {
            return res.status(400).send({ error: "Ogiltigt device_id!" });
        }
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
app.post('/api/claim-device', strictLimiter, verifyToken, async (req, res) => {
    const { device_id, name } = req.body;
    const uid = req.uid;

    if (!isString(device_id) || device_id.length > 64) {
        return res.status(400).send({ error: "Ogiltigt device_id" });
    }
    if (name !== undefined && (!isString(name) || name.length > 64)) {
        return res.status(400).send({ error: "Ogiltigt enhetsnamn" });
    }

    try {
        // Generera unik token för just denna enhet
        const uniqueToken = crypto.randomBytes(16).toString('hex'); // 32 tecken, lagom långt

        await userDevicesCollection.updateOne(
            { device_id: device_id },
            { $set: {
                uid: uid,
                name: name || "Min YeastMaster",
                token: uniqueToken,
                claimed_at: new Date() 
            }},
            { upsert: true }
        );
        res.status(200).send({ message: "Enhet tillagd!", token: uniqueToken });
    } catch (e) {
        res.status(500).send({ error: "Kunde inte spara enheten" });
    }
});

app.get('/api/get-token/:mac', async (req, res) => {
    const mac = req.params.mac;

    try {
        const device = await userDevicesCollection.findOne({ device_id: mac });

        if (device && device.token) {
            // Enheten är aktiverad, skicka token
            res.status(200).json({ token: device.token });
        } else {
            // Enheten finns inte eller är inte aktiverad än
            res.status(404).json({ error: "Ej aktiverad" });
        }
    } catch (e) {
        res.status(500).send({ error: "Databasfel" });
    }
});

// --- 4. MY DEVICES (Hämta användarens enheter) ---
app.get('/api/my-devices', verifyToken, async (req, res) => {
    const uid = req.uid;

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

app.post('/api/my-library', verifyToken, async (req, res) => {
    const { libraryData } = req.body;
    const uid = req.uid;

    if (!libraryData) {
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

app.get('/api/my-library', verifyToken, async (req, res) => {
    const uid = req.uid;

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

app.post('/api/sync-profiles', verifyToken, async (req, res) => {
    const { device_id, yeastData } = req.body;
    const uid = req.uid;

    if (!isString(device_id) || device_id.length > 64) {
        return res.status(400).send({ error: "Ogiltigt device_id" });
    }
    if (!yeastData || typeof yeastData !== 'object') {
        return res.status(400).send({ error: "Ogiltig yeastData" });
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
app.post('/api/remove-device', strictLimiter, verifyToken, async (req, res) => {
    const { device_id } = req.body;
    const uid = req.uid;

    if (!isString(device_id) || device_id.length > 64) {
        return res.status(400).send({ error: "Ogiltigt device_id" });
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
// --- GDPR: RADERA KONTO OCH ALL ANVÄNDARDATA ---
// ==========================================
app.delete('/api/delete-account', strictLimiter, verifyToken, async (req, res) => {
    const uid = req.uid;
    try {
        // 1. Hämta alla enheters device_ids för den här användaren
        const devices = await userDevicesCollection.find({ uid: uid }, { projection: { device_id: 1 } }).toArray();
        const deviceIds = devices.map(d => d.device_id);

        // 2. Radera alla fermentationsloggar för dessa enheter
        if (deviceIds.length > 0) {
            await logsCollection.deleteMany({ device_id: { $in: deviceIds } });
        }

        // 3. Radera enheter, bibliotek och push-prenumeration
        await userDevicesCollection.deleteMany({ uid: uid });
        await userLibrariesCollection.deleteMany({ uid: uid });
        await pushSubscriptionsCollection.deleteMany({ uid: uid });

        // 4. Radera Firebase-kontot
        await admin.auth().deleteUser(uid);

        res.status(200).send({ message: "Kontot och all data är raderat." });
    } catch (e) {
        console.error("Fel vid kontoborttagning:", e);
        res.status(500).send({ error: "Kunde inte radera kontot." });
    }
});

// ==========================================
// --- NYTT: MOTTA OCH SPARA PRENUMERATIONER PÅ LARM ---
// ==========================================
app.post('/api/subscribe', strictLimiter, verifyToken, async (req, res) => {
    const { sub } = req.body;
    const uid = req.uid;

    if (!sub) {
        return res.status(400).send({ error: "Saknar prenumerationsobjekt" });
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

// ==========================================
// --- NYTT: TA BORT PRENUMERATIONER (AVAKTIVERA LARM) ---
// ==========================================
app.post('/api/unsubscribe', strictLimiter, verifyToken, async (req, res) => {
    const uid = req.uid;

    try {
        // Eftersom vi bara sparar EN prenumeration per användare (med upsert i /subscribe),
        // räcker det med att radera det dokument som tillhör användaren (uid).
        const result = await pushSubscriptionsCollection.deleteOne({ uid: uid });

        if (result.deletedCount === 1) {
            console.log(`Prenumeration raderad från servern för UID: ${uid}`);
            res.status(200).send({ message: "Prenumeration borttagen från servern." });
        } else {
            // Om ingen prenumeration hittades (användaren kanske redan var avregistrerad)
            res.status(404).send({ error: "Ingen prenumeration hittades för denna användare." });
        }
    } catch (e) {
        console.error("Kunde inte radera prenumeration från server:", e);
        res.status(500).send({ error: "Databasfel vid avregistrering." });
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

                // ==========================================
// NY LUGNARE ESKALERINGSLOGIK
// ==========================================
// minutesSinceLastNotify kommer att vara extremt hög första gången felet upptäcks (eftersom lastNotified är 0).
// Därefter väntar vi 120 minuter (2 timmar) innan vi skickar nästa påminnelse.
if (minutesSinceLastNotify >= 120) {
    shouldNotify = true;
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
                    
                    // ---> NYTT: Tvinga Apple/Google att leverera direkt (urgency: high)
                    const pushOptions = {
                        urgency: 'high',
                        TTL: 24 * 60 * 60 // Låt notisen ligga och vänta i max 24h om telefonen är helt avstängd
                    };
                    
                    // Skicka Push-notisen via Google/Apple MED VÅRA NYA OPTIONS
                    webpush.sendNotification(userSub.subscription, payload, pushOptions)
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

// ==========================================
// --- OTA: FIRMWARE VERSION CHECK ---
// ==========================================
app.get('/api/firmware/version', (req, res) => {
    res.json({
        version: "2.2",
        url: "https://soulofbeer-live.onrender.com/api/firmware/download"
    });
});

// --- OTA: SERVERA FIRMWARE-FILEN ---
app.get('/api/firmware/download', (req, res) => {
    const firmwarePath = path.join(__dirname, 'firmware', 'yeastmaster.bin');
    
    if (fs.existsSync(firmwarePath)) {
        res.download(firmwarePath, 'yeastmaster.bin');
    } else {
        res.status(404).json({ error: "Ingen firmware hittades" });
    }
});