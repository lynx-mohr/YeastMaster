const yeastDescriptions = {

    en: {
    // ==========================================
    // --- DRY YEASTS (Torrjäst) ---
    // ==========================================
    "us-05": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle US-05 (American Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP001 (White Labs), Wyeast 1056, M44
        </p>
        <p>The uncrowned king of the brewing world when it comes to clean, crisp American Ales and West Coast IPAs. It is an extremely reliable workhorse that puts malt and hops in the driver's seat.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Temperature Range (15-22 °C)</h4>
        <p>To get that iconic, razor-sharp American profile, we want to start around 18 °C. If we go too hot, it can throw off peach esters, which we usually want to avoid in a clean IPA.</p>
        <h4 style="margin-top: 15px; color: #ccc;">2. Medium Flocculation (Patience!)</h4>
        <p>US-05 likes to hover in the beer for quite a while. This is great for fermentation (it finishes dry and efficient), but it means the beer can remain hazy for a long time if we don't crash it hard at the end.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard / Low Ester:</strong> Nails the temp at 18 °C for an extremely clean job. Finishes off with a diacetyl rest at 21 °C to ensure every last sugar is eaten before a hard cold crash.</li>
            <li><strong style="color: #fff;">West Coast Crisp:</strong> Starts cool at 18°C for maximum cleanliness, then aggressively ramps to 22°C. Leaves a bone-dry finish where your hops will shine.</li>
            <li><strong style="color: #fff;">Pseudo-Lager:</strong> Ferments at the absolute bottom of the strain's tolerance (15°C). Suppresses all ale characteristics, making it perfect for a mock-Pilsner.</li>
        </ul>
    `,

    "s-04": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle S-04 (English Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP007 (White Labs), Wyeast 1098
        </p>
        <p>The British sprinter! Loved for its ability to build fantastic fruity esters and its brutal speed. The first choice for Bitters, Porters, Stouts, and fast Pale Ales.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Temperature Range (15-20 °C)</h4>
        <p>S-04 loves to create esters (marmalade, dark berries). But if allowed to go too hot initially, it turns into an uncontrolled fruit bomb. Start strictly at 18 °C for elegance.</p>
        <h4 style="margin-top: 15px; color: #ccc;">2. Extreme Flocculation (The Brick)</h4>
        <p>When S-04 considers itself done, it falls to the bottom and forms a yeast cake so firm you can almost cut it. We must heat it up before it goes to sleep!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard / Fruity:</strong> Starts like a freight train at 18°C to create controlled fruitiness, then raises to 21°C. This heat bump wakes the yeast to clean up butterscotch before the cold crash.</li>
            <li><strong style="color: #fff;">Dark & Malty (18°C):</strong> Locked steadily at 18°C. This suppresses the fruitier esters just enough to let coffee and chocolate notes take center stage in a Stout or Porter.</li>
        </ul>
    `,

    "w-34-70": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Saflager W-34/70 (German Lager)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP830 (White Labs), Wyeast 2124
        </p>
        <p>The king of bottom-fermenting! This famous strain from the Weihenstephan brewery in Germany is probably the most used lager yeast in the world. It delivers that iconic, crisp, and clean flavor profile we love in a Pilsner or Helles.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The cold is your friend (9-15 °C)</h4>
        <p>W-34/70 is a true winter swimmer. By fermenting it at the bottom of its tolerance (around 10-12 °C), you suppress the production of fruity esters and sulfur, giving the beer its clean character.</p>
        <h4 style="margin-top: 15px; color: #ccc;">2. Butterscotch warning (Diacetyl)</h4>
        <p>Because it works cold and slow, lager yeast is notorious for leaving diacetyl (tastes like butter/butterscotch) behind. A significant temperature increase at the end is not a tip – it's a requirement!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Traditional Lager:</strong> Holds firmly at 11°C so the yeast works undisturbed. Then pushes to 16°C to clean up the butterscotch before a massive 28-day cold lagering phase.</li>
            <li><strong style="color: #fff;">Quick Lager:</strong> The modern approach. Pitches at 13°C for faster yeast growth, finishes the cleanup with a warm Diacetyl Rest by day 10, cutting the lagering time in half.</li>
            <li><strong style="color: #fff;">Warm/Brulosophy:</strong> The infamous warm-fermented lager hack! Runs at ale temperatures (19°C). W-34/70 handles heat surprisingly well, finishing fast and clean without off-flavors.</li>
        </ul>
    `,

    "be-256": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle BE-256 (The Abbey Machine)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP530, Wyeast 3787 (Similar Trappist character)
        </p>
        <p>Formerly known as "Abbaye". This is a fast and brutal Belgian yeast that loves high-gravity worts. Perfect for dark, malty Belgians like Dubbel, Tripel, and Quadrupel. It attenuates quickly and creates a fantastic symphony of dark fruit.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Fast and strong (15-25 °C)</h4>
        <p>It tolerates very high alcohol (up to 11%). But if you start it too hot, it can throw off unwanted solvent notes (fusels). The key is a strict start that is later let loose.</p>
        <h4 style="margin-top: 15px; color: #ccc;">2. Esters of dried fruit</h4>
        <p>It is known for bringing out plum, fig, and raisin, which marries incredibly well with caramel malts and Belgian candi syrup.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Belgian Strong:</strong> Starts cool at 18 °C. The yeast is aggressive initially, so we hold the beast back! Then we let the machine ramp up towards 24 °C to stress out the complex Belgian esters before crashing.</li>
        </ul>
    `,

    "wb-06": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle WB-06 (The Wheat Beer Master)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP380, M20 (Bavarian Wheat characteristics)
        </p>
        <p>The classic German Weissbier yeast in dry form! Do you want a cloudy, golden Hefeweizen smelling of foam banana and clove? Then this is the one to use.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. You are behind the wheel (18-24 °C)</h4>
        <p>In wheat beers, the yeast IS the flavor. Low temperatures (18-19 °C) yield lots of phenols (pepper and clove). High temperatures (22-24 °C) yield extreme amounts of isoamyl acetate (banana). You choose!</p>
        <h4 style="margin-top: 15px; color: #ccc;">2. It refuses to flocculate</h4>
        <p>A German Weissbier *should* be cloudy. WB-06 is designed to remain in suspension, giving that nice, milky appearance in the glass.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Banana Bomb:</strong> Run it hot! Starts at 22°C and ramps to 23°C to unlock massive amounts of isoamyl acetate (foam banana) and ensure complete attenuation.</li>
            <li><strong style="color: #fff;">Balanced Clove:</strong> Held steadily lower (18-20°C). The banana takes a back seat, allowing the spicy clove and wheat malt character to dominate.</li>
        </ul>
    `,

    "verdant": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Verdant IPA (The Juice Machine)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1318 (London Ale III)
        </p>
        <p>Developed alongside Verdant Brewing Co., this is the ultimate yeast for NEIPA and Hazy IPA. It produces massive amounts of apricot and vanilla esters that back up modern hops perfectly.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Master of Biotransformation</h4>
        <p>This yeast is phenomenal at taking dry hops during active fermentation and chemically rebuilding the hop oils into even fruitier flavors.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Juicy NEIPA:</strong> Starts safely at 19 °C to build a solid, fruity base without fusel alcohols. Then the temperature wanders up to 22 °C to stress out the final juicy esters.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: It flocculates rather poorly, which is EXACTLY what we want to retain "The Haze".</i></p>
    `,

    "voss": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Voss Kveik (The Viking)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP4000, Omega OYL-061
        </p>
        <p>The Norwegian powerhouse that breaks absolutely all rules we learned about brewing. It ferments scorching hot, furiously fast, and leaves clean, light orange notes behind.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Extreme Heat (30-40 °C)</h4>
        <p>While other yeasts would have died or created undrinkable rocket fuel at 38 °C, Voss thrives there. It needs no fridge, just a heat mat and lots of yeast nutrients!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Hot & Fast:</strong> Ferments at a scorching 38°C! Fermentation is extremely violent, throws massive orange esters, and finishes completely in just 3-4 days before chilling.</li>
            <li><strong style="color: #fff;">Clean Pseudo:</strong> Dropped down to "normal" summer temperatures (25-28°C). Ferments slower but leaves a shockingly clean profile without the intense citrus notes.</li>
        </ul>
    `,

    "nottingham": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Nottingham (The Workhorse)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP039, M36
        </p>
        <p>Perhaps the most versatile yeast ever cultivated. "Notty" doesn't care what you throw at it. Imperial Stout? Yep. Cider? Absolutely. IPA? No problem. It is extremely neutral, reliable, and cleans up after itself exemplary.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Temperature Chameleon (10-22 °C)</h4>
        <p>In the upper range, it behaves like a clean ale yeast. Pull it down to 12-14 °C? Then it basically becomes a cheat-code lager yeast for incredibly crisp pseudo-lagers!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard Ale:</strong> Holds 18 °C for a clean and fast primary fermentation, then ramps up to 20-21 °C. Even workhorses need a Diacetyl Rest to hide the butterscotch.</li>
            <li><strong style="color: #fff;">Pseudo Lager:</strong> Pushes "Notty" to its thermal floor at 14°C. At this temperature, it stops acting like an ale yeast and produces an incredibly crisp, clean pseudo-lager without the sulfur.</li>
        </ul>
    `,

    "belle-saison": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Belle Saison (The Dry Belgian)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> Wyeast 3711 (French Saison)
        </p>
        <p>Saison yeast is wild, untamed, and fantastic. Designed to eat up every single sugar it finds and leave a bone-dry, peppery beer behind.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Diastaticus (Eats everything)</h4>
        <p>This yeast carries a gene (STA1) that allows it to break down complex sugars. The result? A beer that can ferment down to 1.000 FG.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Dry & Peppery:</strong> Starts around 20 °C so fermentation takes hold without becoming solvent-like. Then we take the limiters off! It free-rises all the way up to 28 °C to build max flavor profile.</li>
        </ul>
    `,

    "t-58": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle T-58 (The Peppery Companion)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP570 (Similar spice profile)
        </p>
        <p>A truly unique, ester- and phenol-driven yeast. If BE-256 is dark fruit, then T-58 is black pepper and spice. Often used in complex Belgian ales or Trappist beers.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Leaves residual sweetness (15-24 °C)</h4>
        <p>T-58 doesn't attenuate as hard as many other Belgians. This leaves some residual sweetness and body in the beer, balancing the sharp, peppery notes.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Spicy Belgian:</strong> Starts at 18 °C. The phenols will be produced in masses anyway. Then ramps up slowly to 22 °C to round off the flavors and ensure fermentation doesn't stall too early.</li>
        </ul>
    `,

    "s-23": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Saflager S-23 (The Fruity Bohemian)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP802, Wyeast 2278 (Czech/Bohemian roots)
        </p>
        <p>Originating from the famous VLB institute in Berlin, this is the wild child of lager yeasts. While W-34/70 is laser-focused and clean, S-23 is loved for producing slightly more fruity and estery notes, making it fantastic for Bohemian Pilsners or Baltic Porters.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Ester Profile (9-15 °C)</h4>
        <p>If you ferment this at the warmer end of the lager spectrum (13-15 °C), it will give off beautiful, subtle notes of apple and pear that play incredibly well with spicy Saaz hops.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Crisp German (10 °C):</strong> Keep it cold and steady for a traditional, clean profile. D-rest at 15 °C on Day 10.</li>
            <li><strong style="color: #fff;">Bohemian Fruit / Fruity Lager:</strong> Start slightly warmer (12-13°C) to unlock those unique S-23 esters. Perfect for a malt-forward Czech amber.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: S-23 can sometimes struggle to finish the last gravity points. A solid, warm Diacetyl Rest is crucial to help it cross the finish line.</i></p>
    `,

    "s-33": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle S-33 (The Body Booster)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP006 (Bedford British)
        </p>
        <p>Often misunderstood, S-33 is a secret weapon. It is incapable of eating complex malt sugars (maltotriose negative), which means it will ALWAYS leave your beer thick, full-bodied, and slightly sweet.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Not just for Belgians</h4>
        <p>Despite being labeled a Belgian ale yeast, it produces very little phenols (spice). Instead, it's increasingly used in Hazy IPAs and Milk Stouts purely for its ability to build an incredible mouthfeel.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Thick Ale (18 °C):</strong> Keep it cool to minimize esters. You will end up with a luscious, thick dark beer with great foam retention. Or use it as a cheat code for thick NEIPAs!</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: Don't panic if your Final Gravity is high (e.g., 1.020). S-33 simply cannot ferment it any further. It's done!</i></p>
    `,

    "diamond": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Diamond (The Munich Master)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP830, Wyeast 2124 (Weihenstephan lineage)
        </p>
        <p>A true German lager yeast originating from the Doemens Institute in Munich. Diamond is renowned for its robust nature and ability to produce incredibly clean, crisp, and authentic German lagers without the fuss.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Pristine and Professional</h4>
        <p>While some lager yeasts can throw sulfur (rhino farts) during fermentation, Diamond is generally very well-behaved and produces a highly polished beer that lets the Pilsner malt shine.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Clean Lager / Munich Crisp:</strong> The traditional way. Hold 10 °C for 7-10 days, followed by a strict Diacetyl Rest at 16 °C.</li>
            <li><strong style="color: #fff;">Fast Helles (14 °C):</strong> Diamond handles slightly warmer temperatures remarkably well. Run it at 14 °C to cut your fermentation time in half!</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: Diamond has fantastic attenuation. It will dry out a Pilsner beautifully, making it extremely refreshing.</i></p>
    `,

    "novalager": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand NovaLager (The Bio-Engineered Miracle)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> Unique Hybrid (Saccharomyces pastorianus lineage)
        </p>
        <p>A true game-changer. NovaLager is a modern hybrid yeast (a novel Saccharomyces pastorianus lineage) designed to ferment like an ale, but taste exactly like a clean lager.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Breaking the rules (10-20 °C)</h4>
        <p>You no longer need 5 weeks and a dedicated lager fridge. NovaLager ferments cleanly at 18-20 °C with low ester production, no sulfur (H2S), and very low diacetyl.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">The Cheat Code (18 °C):</strong> Treat it like an ale! Primary at 18 °C for 5 days, ramp to 20 °C for 2 days to finish up, and crash. A clean lager in a week!</li>
            <li><strong style="color: #fff;">Modern Cold (14 °C):</strong> If you want absolute pristine perfection, ferment it at 14 °C. It's still significantly faster than traditional strains but delivers award-winning crispness.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: It has very high attenuation. Be prepared for your beer to dry out significantly, making the hop bitterness feel sharper.</i></p>
    `,

// ==========================================
    // --- LIQUID YEASTS (Flytande Jäst) ---
    // ==========================================

    "wlp001": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP001 California Ale (The West Coast King)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1056, US-05
        </p>
        <p>White Labs' crown jewel! This is the original strain that started the American craft beer revolution. Praised for its unparalleled cleanliness.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Letting the hops sing (20-23 °C)</h4>
        <p>This yeast has one single job: to ferment away the sugar and then step into the background so your expensive American hops can take the lead.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> Start crisp around 19.5 °C. We want zero esters and zero fusels. Then release up to 22 °C for a Diacetyl Rest. WLP001 is good at cleaning, but a little heat helps.</li>
            <li><strong style="color: #fff;">Low Ester:</strong> Drops the temperature down to 18 °C. Fermentation takes slightly longer, but yields an impossibly clean, lager-like ale profile.</li>
        </ul>
    `,

    "wlp300": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP300 Hefeweizen (The Banana Bomb)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 3068, M20
        </p>
        <p>This is the liquid gold standard for German wheat beer. Unlike dry wheat yeasts, this one is famous for producing massive, luscious amounts of banana aroma.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Temperament and Temperature (20-22 °C)</h4>
        <p>Pushing WLP300 above the 20-mark is the trick to unlocking the fruity isoamyl acetate (banana) esters and suppressing the clove.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> Held firmly at 19 °C. Focuses on the spicy clove phenols, keeping the banana esters subtle and balanced.</li>
            <li><strong style="color: #fff;">Classic:</strong> Ferment warm! Lock the temp at 20 °C and ramp to 22°C to let the banana party begin. Drop to serving temp (approx. 4 °C) for conditioning.</li>
        </ul>
    `,

    "wyeast-1968": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1968 (London ESB Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP002 (Fuller's)
        </p>
        <p>The legendary Fuller’s strain! This yeast is famous for leaving a wonderful, malty residual sweetness, and dropping out of suspension so fast it looks like cottage cheese.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Extreme Flocculation (Crucial!)</h4>
        <p>Because it drops like a stone the second it feels "done", you have to actively fight to keep it awake. If it goes to sleep too early, your beer will taste like a butterscotch candy (Diacetyl).</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard / ESB Clean:</strong> Starts cooler (18.5-19 °C) to keep the yeast focused on maltiness without throwing too much fruit. A solid diacetyl rest at 21 °C cleans up the butterscotch.</li>
            <li><strong style="color: #fff;">High Ester / ESB Fruity:</strong> For a true British fruit-bomb! We pitch warm (21-22 °C) and let it ramp to 23 °C. Expect massive notes of marmalade and jam.</li>
            <li><strong style="color: #fff;">Low Ester:</strong> The cheat-code for a super clean profile. Ferments low at 18 °C and crashes gently to avoid stressing the yeast.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: This yeast clears the beer so fast during the Cold Crash that you rarely need fining agents!</i></p>
    `,

    "wlp920": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP920 (Old Bavarian Lager)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 2206 (Bavarian Lager)
        </p>
        <p>A classic from southern Germany, known for a malty profile with a light touch of esters, making it perfect for Oktoberfest beers, Bocks, and dark lagers.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Malt Preserver</h4>
        <p>By keeping the fermentation cold and steady, we prevent the yeast from producing byproducts that would otherwise mask the delicate toasted and caramel notes from the Munich and Vienna malts.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Traditional Lager:</strong> The old-school way. Starts low at 10.5 °C for 10 full days, followed by a slow D-rest and a massive 28-day cold lagering phase.</li>
            <li><strong style="color: #fff;">Quick Lager:</strong> The modern approach. Pitches at 12.5 °C for faster yeast growth, finishes the cleanup by day 10, and cuts the lagering time in half.</li>
            <li><strong style="color: #fff;">Brulosophy:</strong> The warm-fermented lager hack! Runs at ale temperatures (19 °C). Surprisingly clean, but done in a fraction of the time.</li>
        </ul>
    `,

    "imperial-b45": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Imperial Yeast B45 (Gnome)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP550, Wyeast 3522 (Chouffe)
        </p>
        <p>An amazing classic Belgian yeast renowned for producing beautiful pear and peach esters paired with a light, peppery spiciness (phenols).</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Belgian Ramp</h4>
        <p>Belgian monks historically didn't use chillers. They pitched the yeast and let the natural exothermic heat of fermentation drive the temperature up. We want to mimic this to unlock the true Belgian character!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Classic:</strong> Starts at 20 °C and free-rises to 23.5 °C. This is the sweet spot for balancing the pear esters with the peppery phenols.</li>
            <li><strong style="color: #fff;">Spicy & High Ester:</strong> We push the yeast hard and hot! Starting at 21-22 °C and ramping to 25 °C forces the yeast to throw massive amounts of complex flavors. Perfect for a Belgian Strong.</li>
            <li><strong style="color: #fff;">Standard & Low Ester:</strong> Restrained (18-19 °C). Keeps the yeast calm for a more subtle Belgian blonde.</li>
        </ul>
    `,

    "wyeast-1084": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1084 (Irish Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP004 (Guinness)
        </p>
        <p>The Guinness strain! A true workhorse from Dublin that is incredibly versatile. It provides a rich, malty profile with a subtle hint of dark fruit and a touch of diacetyl that works perfectly in dark beers.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Loving the Dark Malts</h4>
        <p>This yeast was literally born to ferment roasted barley. It leaves just enough residual body to make a dry stout feel creamy rather than thin.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Dry Stout:</strong> Starts at a crisp 18 °C and ramps to 20 °C. This suppresses fruitiness and lets the coffee and chocolate notes from the malt take center stage.</li>
            <li><strong style="color: #fff;">Red/Malty & High Ester:</strong> Runs warmer (20-21.5 °C) to coax out those lovely jammy, dark berry esters that make an Irish Red Ale so special.</li>
            <li><strong style="color: #fff;">Standard & Low Ester:</strong> A fantastic, neutral base if you want to use this yeast for American styles or Porters.</li>
        </ul>
    `,

    "wyeast-3944": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 3944 (Belgian Witbier)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP400 (Hoegaarden)
        </p>
        <p>The king of wheat beers! Known for immense character, producing a complex blend of spicy phenols (pepper/clove) and fruity esters (banana/citrus).</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Keep it Cloudy</h4>
        <p>This yeast refuses to drop, and that's exactly what we want! We want the yeast and wheat proteins to stay in suspension for that milky, white appearance.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> Kept strictly at 19 °C. The fruitiness takes a back seat, and the clove/pepper phenols become the star of the show.</li>
            <li><strong style="color: #fff;">Classic Wit:</strong> A balanced 18 °C start, ramping to 21.5 °C. Notice the "Condition" phase sits at 6 °C instead of near freezing? This prevents the beer from clearing up too much!</li>
            <li><strong style="color: #fff;">Summer Wit & High Ester:</strong> Pushed warmer (20-23 °C). Expect massive amounts of citrus, orange peel, and banana.</li>
        </ul>
    `,

    "wlp833": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP833 (German Bock Lager)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 2487 (Ayinger)
        </p>
        <p>The heavyweight from Ayinger! The absolute king of maltiness. It leaves a fantastic malty sweetness and body, making it the obvious choice for Bocks, Doppelbocks, and Märzens.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Long Slumber</h4>
        <p>Bock yeast can be stubborn and slow. It needs time to properly attenuate high-gravity worts without creating rocket-fuel fusel alcohols.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Traditional Lager:</strong> Runs slightly warmer at 11 °C to speed up attenuation without sacrificing the clean, malty profile.</li>
            <li><strong style="color: #fff;">Trad. Bock:</strong> The authentic approach. A chilly 10 °C primary fermentation, a solid D-rest at 16 °C, and then a grueling 35-day lagering phase to achieve liquid perfection.</li>
            <li><strong style="color: #fff;">Fast Bock:</strong> When you can't wait. Pitched at 12 °C, warming to 17 °C. It finishes the job in just over three weeks but still delivers a massive malt backbone.</li>
        </ul>
    `,

    "wlp007": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP007 (Dry English Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> S-04, Wyeast 1098 (Whitbread)
        </p>
        <p>A heat-seeking missile! Known as the "Workhorse" yeast. It's incredibly fast, attenuates very dry, and drops like a rock when it's done.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Taming the Beast</h4>
        <p>Because 007 ferments so violently, it creates intense internal heat. Your fridge will work hard the first 48 hours to hold the temperature down to prevent solvent-like flavors.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">West Coast & Standard:</strong> Locks the beast in at 18.5-19 °C. At these cooler temperatures, WLP007 acts almost exactly like a clean American Ale yeast, making it perfect for dry IPAs.</li>
            <li><strong style="color: #fff;">Monster & High Ester:</strong> Start at 20-21 °C. If you are brewing a massive Imperial Stout or Barleywine, this profile gives the yeast the heat it needs to survive the high alcohol while throwing beautiful dark fruit esters.</li>
        </ul>
    `,

    "wyeast-1318": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1318 (London Ale III)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Verdant IPA (Boddingtons)
        </p>
        <p>The very foundation of the NEIPA revolution. This is the yeast that gave the world "Juice". It leaves a velvety mouthfeel and throws off beautiful esters of pineapple and grapefruit.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Biotransformation</h4>
        <p>Low flocculation helps keep the beer hazy, and its unique enzymes are fantastic at chemically altering your dry hops into even juicier compounds.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard & Low Ester:</strong> Kept at 18-19 °C. This provides a clean fermentation where the biotransformation of your massive dry hop additions takes center stage.</li>
            <li><strong style="color: #fff;">High Ester:</strong> Pitched at 21 °C and ramped to 23 °C. The added heat forces the yeast to produce more of its own tropical esters (peach/apricot) to blend with the hops.</li>
        </ul>
    `,

    "wyeast-2565": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 2565 (Kölsch)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP029 (Cologne)
        </p>
        <p>A true "hybrid" – technically an ale yeast, but it prefers working at near-lager temperatures. Known for an extremely crisp, clean, and almost vinous (white wine) profile.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Dusty Yeast</h4>
        <p>Wyeast 2565 is notoriously powdery. It refuses to clear up on its own. A long, cold lagering phase is absolutely mandatory to achieve that brilliant, golden Kölsch clarity.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard & Low Ester:</strong> Faster ale-like fermentation (18-19 °C). Still very clean, but finishes much quicker. Great for crisp Blonde Ales.</li>
            <li><strong style="color: #fff;">Authentic:</strong> The Cologne way! A chilly 14.5 °C primary fermentation, a slow D-rest at 18 °C, and a strict 2-week cold lagering. Tastes exactly like a German lager, but brewed with ale yeast.</li>
        </ul>
    `,

    "wlp002": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP002 English Ale (The Brick)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1968 (Fuller's Strain)
        </p>
        <p>The legendary Fuller’s strain! This yeast is famous for two things: leaving a wonderful, malty residual sweetness, and dropping out of suspension so fast it looks like cottage cheese.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Extreme Flocculation</h4>
        <p>Because it drops like a stone the second it feels "done", you have to actively fight to keep it awake. If it goes to sleep too early, your beer will taste like a butterscotch candy (Diacetyl).</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> A steady 19 °C fermentation, jumping up to 21 °C at the end to keep the yeast active for cleanup.</li>
            <li><strong style="color: #fff;">Low Ester:</strong> Keep it slightly cooler (18.5 °C) to retain even more unfermented sugars, giving your dark beers a massive, silky mouthfeel.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: When you Cold Crash this, the beer will become brilliantly clear almost overnight. No need for fining agents!</i></p>
    `,

    "wlp500": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP500 Trappist (The Monk's Madness)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1214 (Chimay)
        </p>
        <p>Sourced directly from the Chimay monastery. This is the yeast you want when brewing massive, complex Belgian Quads or fruity Tripels. It produces an explosion of plum, raisin, and distinct bubblegum notes.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. Let it ride (18-22 °C... and beyond)</h4>
        <p>Belgian monks historically didn't use chillers. They pitched the yeast and let the natural exothermic heat of fermentation drive the temperature up. We want to mimic this!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> Start at 19 °C to suppress fusel alcohols, then slowly let it free-rise to 21 °C by Day 3 for an elegant fruit profile.</li>
            <li><strong style="color: #fff;">Monk's Madness:</strong> Pitch at 20 °C and ramp it aggressively to 25 °C! This stresses the yeast into throwing massive dark fruit and bubblegum flavors.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: It has very low flocculation. You will need a long, cold conditioning phase to drop this stubborn yeast out of the beer.</i></p>
    `,

    "wlp066": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP066 London Fog (The Haze Craze)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1318 (Close Relative)
        </p>
        <p>This is the liquid magic behind some of the best NEIPAs in the world. It leaves a velvety, creamy mouthfeel and throws off beautiful esters of pineapple and ruby red grapefruit.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Body Builder</h4>
        <p>Unlike West Coast yeasts, London Fog doesn't ferment all the complex sugars. It leaves a higher Final Gravity, which provides that thick, juice-like body that modern hazy IPAs require.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> Keep it locked at 19 °C. This provides a clean fermentation where the biotransformation of your dry hops takes center stage.</li>
            <li><strong style="color: #fff;">Smooth Juice:</strong> Start at 19 °C, but ramp to 22 °C by Day 8. The added heat forces the yeast to produce more of its own tropical esters to blend with the hops.</li>
        </ul>
    `,

    "wlp800": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP800 Pilsner Lager (The Czech Legend)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 2001 (Pilsner Urquell)
        </p>
        <p>The famous Pilsner Urquell strain. If you want to brew an authentic Bohemian Pilsner, look no further. It provides a rich, complex maltiness and a very smooth, rounded profile.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Diacetyl Debate</h4>
        <p>Historically, Czech Pilsners have a tiny, tiny hint of diacetyl (butter) in the background. If you want to be 100% true to style, you actually do a slightly shorter Diacetyl Rest than with German lagers!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Bohemian:</strong> Ferment low and slow. Ramp up to 12 °C for just 48 hours to clean up *most* of the butterscotch, then drop to lagering.</li>
            <li><strong style="color: #fff;">Traditional Lager:</strong> Run it slightly warmer (11°C) and do a full 5-day D-rest at 16 °C for a completely clean, modern interpretation of a Pilsner.</li>
        </ul>
    `,

    "wlp095": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP095 (Burlington Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Imperial A04, Omega OYL-052, "Conan"
        </p>
        <p>The legendary "Conan" strain! The yeast that originally put the Vermont style (Hazy IPA) on the map. Famous for producing intense notes of ripe peach and apricot.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Original Juice</h4>
        <p>Unlike London III, Burlington tends to attenuate slightly more, yielding a beer that is drier on the finish but still exceptionally "juicy" in its aroma.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Conan IPA & Standard:</strong> 19-21 °C. The classic Vermont curve. Gives a perfect balance between hop bitterness and stone-fruit esters.</li>
            <li><strong style="color: #fff;">High Ester:</strong> Pushed to 21 °C and ramping up to 23 °C. This stresses the yeast to maximize the peach and apricot notes.</li>
            <li><strong style="color: #fff;">Low Ester:</strong> Fermented cool (18 °C) to tame the fruitiness, making it behave more like a standard West Coast IPA yeast.</li>
        </ul>
    `,

"wlp090": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP090 San Diego Super</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> None directly. Similar to WLP001 but faster/higher flocc.
        </p>
        <p>A true giant in the craft beer world. It ferments blazingly fast, finishes with an impossibly crisp profile, and drops out of suspension like a rock. If you are brewing a highly hopped Double IPA or West Coast IPA, this is your weapon of choice.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> A reliable 19 °C fermentation, stepping up to 21 °C for a solid cleanup.</li>
            <li><strong style="color: #fff;">Low / High Ester:</strong> Adjust the starting temperature to either suppress or slightly elevate the subtle fruit notes to balance your hop bill.</li>
            <li><strong style="color: #fff;">Fast & Crisp:</strong> Pushes the yeast slightly warmer from the start (19.5 °C). This yeast is so clean that you can speed-run a West Coast IPA without generating off-flavors.</li>
        </ul>
    `,

    "wyeast-1272": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1272 (American Ale II)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP051 (California V)
        </p>
        <p>The fruitier cousin to standard American ale yeast (like US-05/WLP001). It produces a more complex, slightly nutty, and softer profile. It leaves a bit more residual sweetness, making it the absolute perfect choice for Amber Ales, Pale Ales, and Brown Ales.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard & Low Ester:</strong> Keeps the yeast grounded for a clean American profile, slightly suppressing its signature nutty notes.</li>
            <li><strong style="color: #fff;">Amber Nutty:</strong> Starts at 19.5 °C and ramps to 21 °C. This specific profile is designed to coax out the soft fruit and slightly nutty character that makes Amber ales shine.</li>
        </ul>
    `,

    "imperial-a24": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Imperial A24 (Dry Hop)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Blend of Barbarian (Conan) & Citrus strains.
        </p>
        <p>A modern marvel! This is a unique blend of two amazing IPA strains designed specifically to handle massive dry-hop charges. It provides an incredible blast of peach, apricot, and citrus while keeping the hops in suspension for that perfect haze.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> A steady 19 °C baseline that balances the yeast expression with your hops.</li>
            <li><strong style="color: #fff;">Hazy Citrus:</strong> Starts warm at 20 °C and pushes to 22.5 °C. Stresses the blend to produce massive amounts of its own citrus esters to back up your tropical hops.</li>
            <li><strong style="color: #fff;">Dry Hop Burst:</strong> A cooler start (18.5 °C) to establish a clean base, then a rapid rise to 22 °C right when you drop in your heavy dry hops to maximize biotransformation.</li>
        </ul>
    `,

    "wlp530": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP530 (Westmalle Trappist)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 3787, BE-256 (Dry version)
        </p>
        <p>The liquid original behind the famous Westmalle brewery. This is the undisputed king of dark, strong Belgian ales. It produces a gorgeous, complex symphony of plum, raisin, and mild spice, while easily chewing through massive amounts of sugar (up to 15% ABV).</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> A controlled 19 °C to 21 °C profile. Keeps the intense Belgian character restrained for a more refined Dubbel.</li>
            <li><strong style="color: #fff;">Trappist Ramp:</strong> The traditional monastery method. Pitch cool at 18 °C to avoid hot solvent alcohols, then let the yeast's own exothermic heat drive the tank up to 25 °C!</li>
            <li><strong style="color: #fff;">Dark Fruit:</strong> Starts slightly warmer (20 °C) and pushes hard to 24 °C to maximize the rich plum and raisin esters needed for a massive Belgian Quad.</li>
        </ul>
    `,

    "wyeast-3711": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 3711 (French Saison)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Belle Saison (Dry version), WLP590
        </p>
        <p>An absolute beast of a yeast! It is famous for its aggressive fermentation, chewing through every single complex sugar it can find (Diastaticus). The result is a bone-dry, highly carbonated beer with a beautiful balance of black pepper spice and citrus.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> A balanced start at 20 °C, slowly ramping to 24 °C. Creates a perfect, highly drinkable table-saison.</li>
            <li><strong style="color: #fff;">Bone Dry:</strong> Starts warm (22 °C) and pushes to 26 °C to ensure absolutely 0% residual sugar is left behind.</li>
            <li><strong style="color: #fff;">Farmhouse Spice:</strong> Starts hot at 24 °C and lets the yeast run wild up to 28 °C. This drives extreme levels of rustic, peppery phenols.</li>
        </ul>
    `,

    "wlp028": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP028 (Scottish Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1728 (Scottish Ale)
        </p>
        <p>A highly unique ale yeast that loves the cold! It ferments incredibly clean at lower temperatures, which preserves and elevates the deep, roasted, and smoky malt flavors without masking them behind fruity esters.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> A traditional 18 °C ale fermentation. Clean, neutral, and reliable.</li>
            <li><strong style="color: #fff;">Wee Heavy:</strong> Dropped down to 16 °C. A long, slow fermentation that allows the massive malt complexity of a strong Scottish ale to take center stage.</li>
            <li><strong style="color: #fff;">Cold & Clean:</strong> Pushed to its absolute limit at 14.5 °C. Acts almost exactly like a lager yeast, producing an incredibly crisp, malt-forward profile.</li>
        </ul>
    `,

    "wyeast-1469": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1469 (West Yorkshire)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Timothy Taylor strain, Imperial A10
        </p>
        <p>The holy grail for traditional English Bitters! Sourced from a legendary Yorkshire brewery, this yeast produces a wonderfully complex, slightly nutty, and mildly fruity profile that pairs perfectly with English malt and Fuggles hops.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> Ferments at 19 °C, followed by a warm D-rest. Perfect for modern English Pale Ales.</li>
            <li><strong style="color: #fff;">Yorkshire Bitter:</strong> Starts at 20 °C to coax out its signature stone fruit esters. Notice the "crash" stops at 5 °C to leave a slight haze and body.</li>
            <li><strong style="color: #fff;">Pub Temp:</strong> A highly authentic profile. Ferments at 18.5 °C and "conditions" at 8 °C, mimicking the cellar temperature of a traditional British pub cask.</li>
        </ul>
    `,

    "lutra": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Omega Lutra Kveik</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid / Dry Hybrid<br>
            <strong>Equivalents:</strong> A highly isolated Kveik strain.
        </p>
        <p>A modern brewing cheat code! Lutra is an isolated Kveik strain that has shocked the brewing world. Despite fermenting at hot ale temperatures, it produces an outrageously clean, crisp profile that tastes virtually indistinguishable from a traditional, slow-fermented lager.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> A steady 25 °C. Fast, completely clean, and reliable for everything from Hard Seltzers to Cream Ales.</li>
            <li><strong style="color: #fff;">Pseudo-Lager:</strong> Dropped to 20 °C. The ultimate mock-lager profile. Crisp, sulfur-free, and incredibly refreshing.</li>
            <li><strong style="color: #fff;">Speed Run:</strong> Ferments at a scorching 32 °C. Turns a wort into beer in under 4 days while somehow remaining shockingly clean.</li>
        </ul>
    `,

    "philly-sour": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Philly Sour</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> Unique (Lachancea species)
        </p>
        <p>Pure bio-engineering magic. Discovered on a tree in Philadelphia, this unique yeast produces lactic acid (sourness) during the first few days, and THEN switches over to producing alcohol! It allows you to brew sour beers safely without introducing dangerous bacteria to your gear.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard:</strong> A steady 22 °C profile. Yields a moderate, refreshing tartness.</li>
            <li><strong style="color: #fff;">Lactic Boost:</strong> Held warm at 25 °C for the first 4 days to force the yeast to produce massive amounts of lactic acid, then dropped to 20 °C for a clean alcoholic finish. Very sour!</li>
            <li><strong style="color: #fff;">Sour Fruit:</strong> Tailored for fruited sours. Balances acid production before crashing cleanly to let your added fruit purees shine.</li>
        </ul>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: Philly Sour needs simple sugars (like Dextrose) to produce high levels of acid! Add 5% dextrose to your boil.</i></p>
    `,

    "wlp820": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP820 (Oktoberfest / Märzen)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 2633, Imperial L17
        </p>
        <p>The heart and soul of the Munich Oktoberfest. While Pilsner yeast focuses on a crisp, hoppy finish, this strain is designed to elevate rich, toasty, and bready Munich and Vienna malts. It leaves a remarkably smooth and full-bodied lager behind.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Traditional Lager:</strong> The classic German approach. Slow 11 °C primary, followed by a long, cold lagering phase for liquid perfection.</li>
            <li><strong style="color: #fff;">Fast Festbier:</strong> Pitched slightly warmer (13 °C) for a quicker fermentation. Perfect for brewing a Festbier right before the party starts.</li>
            <li><strong style="color: #fff;">Malty Marzen:</strong> Held strictly at 10 °C. Demands immense patience, but rewards you with the deepest, most complex malt profile possible.</li>
        </ul>
    `,

    "bry-97": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand BRY-97</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP090 (Similar fast/clean profile)
        </p>
        <p>A West Coast legend in dry form! Many brewers prefer BRY-97 over US-05 because it produces slightly less peach esters and leaves a sharper, cleaner finish that really lets the hop bitterness bite.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Slow Starter</h4>
        <p>Don't panic if your airlock isn't bubbling after 24 hours. BRY-97 is notoriously slow to wake up, but once it gets going, it ferments vigorously and flocculates beautifully.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Standard / Low Ester:</strong> Keeps the yeast at 17.5 - 19 °C for an incredibly neutral base.</li>
            <li><strong style="color: #fff;">West Coast Crisp:</strong> Starts at 18 °C and slowly ramps up. Ensures a bone-dry finish where your expensive hops can shine.</li>
        </ul>
    `,

    "k-97": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle K-97 (German Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1007, WLP036
        </p>
        <p>A fantastic, clean German ale strain. This is your go-to dry yeast for brewing Altbier, Kölsch, or any beer where you want a crisp, lager-like profile but don't have the time to actually brew a lager.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Massive Krausen</h4>
        <p>K-97 produces a massive, thick foam head (krausen) during fermentation that can linger for days after it's done. Make sure you have plenty of headspace in your fermenter!</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Altbier Crisp:</strong> Ferments cool at 15 °C. Supresses fruitiness and brings out the toasted malt character of a classic Düsseldorf Altbier.</li>
            <li><strong style="color: #fff;">Kölsch Style:</strong> Held at 16 °C and ramps to 20 °C. Crisp, slightly vinous, and very clean.</li>
        </ul>
    `,

    "windsor": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Windsor</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP002 (Similar attenuation profile)
        </p>
        <p>A classic British ale strain known for its fruity esters and full body. Just like S-33, Windsor is maltotriose negative – meaning it cannot ferment complex sugars. Your final gravity will be high, but the beer will feel incredibly rich and velvety.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Sweet Stout:</strong> Ferments at 18 °C. Maximizes the residual sweetness to balance heavily roasted malts.</li>
            <li><strong style="color: #fff;">Fruity Bitter:</strong> Pushed warmer to 20-21.5 °C. Unleashes beautiful English ester notes of fresh berries and jam.</li>
        </ul>
    `,

    "mexican-lager": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP040 (Mexican Lager)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Imperial L05 (Urkel), Wyeast 2124
        </p>
        <p>The perfect yeast for a sunny day! Sourced from Mexico City, this strain produces an exceptionally crisp and clean lager profile that pairs flawlessly with flaked corn and a slice of lime.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Traditional Lager:</strong> Runs at 11 °C. Takes time, but produces liquid gold.</li>
            <li><strong style="color: #fff;">Fast Cerveza:</strong> A modern approach. Pitched at 13 °C and actively ramped to 16.5 °C to finish the beer in half the time without losing the crispness.</li>
        </ul>
    `,

    "hornindal": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Omega OYL-091 Hornindal Kveik</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Unique Kveik blend
        </p>
        <p>If Voss Kveik gives you oranges, Hornindal gives you a tropical fruit salad! This Norwegian farmhouse blend thrives in extreme heat and produces massive notes of fresh pineapple, mango, and tangerine.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Tropical Bomb:</strong> Ferments at an insane 35-36 °C. The heat stresses the yeast into throwing incredible amounts of tropical fruit esters. Perfect for Hazy IPAs!</li>
            <li><strong style="color: #fff;">Clean Pseudo:</strong> Dropped down to 24-26 °C. Restrains the tropical notes for a much cleaner, everyday Pale Ale profile.</li>
        </ul>
    `,

    "wyeast-3724": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 3724 (Belgian Saison)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP565 (Saison I)
        </p>
        <p>The legendary Dupont strain. It produces the most complex, earthy, peppery, and spicy Saison profile in the world. But it comes with a major catch...</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Infamous Stall</h4>
        <p>This yeast is notorious for stalling out at exactly 1.030 gravity and going to sleep. The only way to push it to the finish line is with extreme heat.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">The Dupont Ramp:</strong> Our automated savior! Starts at 22 °C, but aggressively ramps up to a scorching 30 °C by day 7. This extreme heat prevents the stall and drives the beer down to a bone-dry finish.</li>
        </ul>
    `,

    "wlp570": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP570 (Belgian Golden Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1388 (Belgian Strong)
        </p>
        <p>Sourced from the famous Duvel brewery. Unlike Trappist strains that throw dark fruit, this yeast is famous for producing crisp notes of pear, apple, and white pepper. It attenuates incredibly well, hiding massive ABVs dangerously well.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Golden Strong:</strong> Starts safe at 20 °C to establish a clean base, then wanders all the way up to 26 °C to unlock the classic Duvel-like esters without producing harsh fusels.</li>
        </ul>
    `,

    "wyeast-2112": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 2112 (California Lager)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP810 (San Francisco Lager)
        </p>
        <p>The iconic Anchor Steam yeast! During the California Gold Rush, brewers didn't have ice, so they used shallow cooling ships to ferment lager yeast at warm temperatures. This strain evolved to thrive in this hybrid environment.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Steam Beer:</strong> Ferments at 15-17 °C. Creates a very unique, slightly woody, and mildly fruity lager profile that defines the California Common style.</li>
            <li><strong style="color: #fff;">Warm Lager:</strong> Pushed to 19 °C. Acts almost like an ale yeast, finishing fast but retaining a surprising amount of lager crispness.</li>
        </ul>
    `,

    "wlp380": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP380 (Hefeweizen IV)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 3333 (German Wheat)
        </p>
        <p>If WLP300 is the "Banana Bomb", then WLP380 is the "Clove Master". This strain produces very little isoamyl acetate (banana) and instead focuses heavily on spicy phenols and crisp citrus notes.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Clove Master:</strong> Fermented on the cooler side (17-18 °C). Completely suppresses the banana, leaving a beautifully spicy and refreshing wheat beer.</li>
            <li><strong style="color: #fff;">Balanced:</strong> Pushed slightly warmer (19-20 °C) to allow a tiny hint of banana to peek through the spice.</li>
        </ul>
    `,

    "wyeast-1007": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1007 (German Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> K-97 (Dry version), WLP036
        </p>
        <p>A true top-cropping German ale yeast. It is incredibly robust and ferments brilliantly clean even down at 13 °C! It leaves a dry, crisp finish with mild maltiness, making it perfect for Altbier and Kölsch.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Altbier Crisp:</strong> Runs at 15 °C. Supresses fruitiness and ensures a smooth, lager-like finish.</li>
            <li><strong style="color: #fff;">Pseudo Lager:</strong> Dropped all the way down to 13 °C. Acts like a lager yeast, but finishes significantly faster. Needs a good cold crash to clear up!</li>
        </ul>
    `,
    // ==========================================
    // --- NEW DRY YEASTS (Torrjäst) ---
    // ==========================================

    "s-189": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafLager S-189 (The Swiss Precision)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> Wyeast 2068X
        </p>
        <p>Originating from the Hürlimann brewery in Switzerland, this is an incredibly elegant lager yeast. While W-34/70 is neutral, S-189 brings out a beautiful, subtle floral and herbal note that makes European Pilsners sing.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Clean Crispness (9-15 °C)</h4>
        <p>It ferments extremely efficiently but needs strict temperature control to prevent esters. It loves a long, cold primary phase to develop its signature crispness.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Swiss Alpine:</strong> Held firmly at 10.5 °C for 12 days. A slow, meticulously controlled primary fermentation followed by a gentle D-rest at 15 °C. Leaves an impossibly clean beer.</li>
            <li><strong style="color: #fff;">Fast European:</strong> Start at 12 °C and ramp to 16 °C by day 7. Shaves off days of fermentation time while still maintaining a crisp, professional profile.</li>
        </ul>
    `,

    "be-134": `
        <h3 style="color: var(--accent-color); margin-top: 0;">SafAle BE-134 (The Bone-Dry Saison)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> Wyeast 3711 (Similar attenuation)
        </p>
        <p>A true beast for dry Saisons! This diastatic yeast will eat absolutely every complex sugar in its path, leaving a beer that is incredibly dry, highly carbonated, and exploding with notes of clove, citrus, and pepper.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The High Heat Threshold (18-28 °C)</h4>
        <p>Like most authentic Saisons, it thrives when the temperature is allowed to rise naturally. Stalling it with cold temperatures will mute the complex phenols.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Farmhouse Free-Rise:</strong> Start at 19 °C to establish a clean base, then use the app to aggressively ramp to 26 °C. Forces the yeast to throw massive spicy esters while drying the beer down to 1.000 FG.</li>
        </ul>
    `,

    "koln": `
        <h3 style="color: var(--accent-color); margin-top: 0;">LalBrew Köln (The Cologne Classic)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP029, Wyeast 2565
        </p>
        <p>Finally, a true Kölsch strain in dry form! This yeast ferments like an ale but conditions like a lager. It produces a brilliantly clean, slightly fruity (subtle apple/pear) profile that is essential for a traditional Kölsch.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Lagering Phase</h4>
        <p>It is quite powdery during active fermentation. A dedicated, cold lagering phase is absolutely mandatory to drop the yeast and achieve that brilliant golden clarity.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Authentic Kölsch:</strong> Primary at 15 °C. Supresses heavy ale esters. After a brief D-rest at 18 °C, it crashes to 2 °C for a strict 14-day lagering phase.</li>
            <li><strong style="color: #fff;">Crisp Blonde:</strong> Pushed slightly warmer (18 °C). Works as a fantastic, fast-clearing alternative for crisp American Blonde ales.</li>
        </ul>
    `,

    "m44": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Mangrove Jack's M44 (US West Coast)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> WLP090, BRY-97
        </p>
        <p>Loved by many professional brewers over US-05 for its ability to finish even drier and cleaner. M44 drops out of suspension beautifully, leaving a razor-sharp West Coast IPA where the hop bitterness takes center stage.</p>
        <h4 style="margin-top: 15px; color: #ccc;">1. The Slow Wake-up</h4>
        <p>Don't touch that thermostat! M44 is notorious for taking up to 36 hours to show active bubbling. Have patience; once it starts, it is a powerhouse.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Patience & Crisp:</strong> Locked firmly at 18.5 °C for 7 days to ensure zero ester production, followed by a spike to 21 °C to squeeze out the final gravity points.</li>
        </ul>
    `,

    "m15": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Mangrove Jack's M15 (Empire Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Dry Yeast<br>
            <strong>Equivalents:</strong> Windsor, WLP002
        </p>
        <p>The king of dark beers. M15 leaves a massive, rich body and a surprisingly high final gravity. It produces beautiful notes of dark fruit, making it the ultimate dry yeast for Imperial Stouts, Porters, and Barleywines.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Malty Monster:</strong> Ferments at 19 °C. Ensures a rich, viscous mouthfeel and prevents the dark roasted malts from tasting thin or harsh.</li>
            <li><strong style="color: #fff;">Dark Fruit:</strong> Ramps up to 22 °C during primary to stress out complex esters of fig and raisin to complement a heavy Stout.</li>
        </ul>
    `,

    // ==========================================
    // --- NEW LIQUID YEASTS (Flytande Jäst) ---
    // ==========================================

    "hothead": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Omega OYL-057 HotHead Kveik</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Stranda Kveik
        </p>
        <p>A highly unique Kveik strain! Unlike Voss (orange) or Hornindal (tropical), HotHead produces a wonderfully smooth profile of sweet honey and ripe mango. And true to its name, it handles blistering heat without flinching.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Summer Heat:</strong> Set it at 34 °C and forget it. Ferments out completely in 3 days, leaving massive honey-mango esters. Perfect for a summer Pale Ale.</li>
            <li><strong style="color: #fff;">Restrained Clean:</strong> Dropped down to 22 °C. Slower, but yields an incredibly neutral profile that works for almost any ale style.</li>
        </ul>
    `,

    "imperial-l13": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Imperial L13 Global (The Macro Master)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP830, Heineken/Carlsberg strain
        </p>
        <p>If you want to clone your favorite European macro-lager, this is the yeast. It is extremely forgiving, highly flocculant, and produces an impossibly clean, mass-appeal lager profile.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Macro Clean:</strong> Primary at 11 °C. A steady, predictable fermentation. A short D-rest at 16 °C is all it needs before a standard lagering phase.</li>
            <li><strong style="color: #fff;">International Quick:</strong> Pushed slightly warmer (14 °C) to emulate modern mass-production speeds without generating unwanted esters.</li>
        </ul>
    `,

    "wyeast-3726": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 3726 (Farmhouse Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Blaugies strain, Imperial B56
        </p>
        <p>The superior alternative to the Dupont strain! It produces the same magnificent, peppery, rustic Saison profile, but it is a relentless worker that absolutely NEVER stalls out midway.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Rustic Tart:</strong> Starts at 21 °C and free-rises to 27 °C. It doesn't need the extreme heat of Dupont to finish, but the warmth pushes out a beautiful, tart, earthy spiciness.</li>
        </ul>
    `,

    "wlp005": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP005 (British Ale / Ringwood)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1187
        </p>
        <p>A legendary English strain. It produces complex, malty, and incredibly fruity beers. However, it requires a lot of oxygen up front and is a heavy diacetyl producer, so it demands respect and precise temperature control.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">English Cellar:</strong> Pitch at 19 °C to control the heavy fruit esters, followed by a mandatory, extended Diacetyl Rest at 21.5 °C for 3-4 days to clean up the butterscotch.</li>
        </ul>
    `,

    "wlp815": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP815 (Belgian Lager)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Stella Artois / Jupiler strain
        </p>
        <p>A highly underrated gem. This is the yeast behind the famous Belgian premium lagers. It offers a distinctly European profile—crisp and clean, but with a tiny, sophisticated hint of fruitiness that separates it from German strains.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Continental Lager:</strong> Primary at 11.5 °C. Extracts the subtle fruity nuances perfectly. Requires a solid cold crash and lagering to achieve premium clarity.</li>
        </ul>
    `,

    "wlp023": `
        <h3 style="color: var(--accent-color); margin-top: 0;">WLP023 (Burton Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> Wyeast 1275, Imperial A09
        </p>
        <p>From the historic brewing town of Burton-on-Trent. This yeast is famously known for producing a distinct, delicious apple, pear, and clover honey character. It is the absolute perfect choice for an English IPA or an ESB.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Burton Snatch:</strong> Ferments at 20 °C to coax out the signature apple and honey esters. Pairs impeccably with high-sulfate water profiles.</li>
        </ul>
    `,

    "wyeast-1028": `
        <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1028 (London Ale)</h3>
        <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
            <strong>Format:</strong> Liquid Yeast<br>
            <strong>Equivalents:</strong> WLP013 (Similar rich profile)
        </p>
        <p>A wonderfully complex and minerally yeast. It has a dry finish but leaves a rich, woody, and almost earthy profile that balances heavily roasted malts flawlessly. An absolute top-tier choice for English Porters and Stouts.</p>
        <h4 style="margin-top: 15px; color: #ccc;">YeastMaster Profiles:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
            <li><strong style="color: #fff;">Minerally Stout:</strong> Locked at 18.5 °C. Supresses heavy fruitiness to let the minerally, woody notes shine through alongside the dark malts.</li>
        </ul>
    `
    },

    sv: {
        "us-05": `
            <h3 style="color: var(--accent-color); margin-top: 0;">SafAle US-05 (American Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> WLP001 (White Labs), Wyeast 1056, M44
            </p>
            <p>Den okrönta kungen i bryggvärlden när det kommer till rena, krispiga amerikanska Ales och West Coast IPAs. En extremt pålitlig arbetshäst som låter malt och humle sitta i förarsätet.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Temperaturomfånget (15-22 °C)</h4>
            <p>För att få den ikoniska, knivskarpa amerikanska profilen vill vi börja runt 18 °C. Går vi för varmt kan den ge ifrån sig persikoestrar, vilket vi oftast vill undvika i en ren IPA.</p>
            <h4 style="margin-top: 15px; color: #ccc;">2. Medium Flockulering (Tålamod!)</h4>
            <p>US-05 gillar att sväva kvar i ölet ett bra tag. Detta är toppen för utjäsningen (den slutar torrt och effektivt), men det betyder att ölet kan förbli grumligt länge om vi inte kallkraschar det hårt på slutet.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard / Low Ester:</strong> Spikar tempen på 18 °C för ett extremt rent jobb. Avslutar med en diacetylrast på 21 °C för att se till att varje sista sockerbit är uppäten före en hård kallkrasch.</li>
                <li><strong style="color: #fff;">West Coast Crisp:</strong> Börjar svalt på 18°C för maximal renhet, och rampar sedan aggressivt till 22°C. Lämnar en snustorr avslutning där din humle kommer att glänsa.</li>
                <li><strong style="color: #fff;">Pseudo-Lager:</strong> Jäser på den absoluta botten av stammens tolerans (15°C). Undertrycker alla ale-karaktärer, vilket gör den perfekt för en fusk-pilsner.</li>
            </ul>
        `,
        "s-04": `
            <h3 style="color: var(--accent-color); margin-top: 0;">SafAle S-04 (English Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> WLP007 (White Labs), Wyeast 1098
            </p>
            <p>Den brittiska sprintern! Älskad för sin förmåga att bygga fantastiska fruktiga estrar och sin brutala hastighet. Förstahandsvalet för Bitters, Porters, Stouts och snabba Pale Ales.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Temperaturomfånget (15-20 °C)</h4>
            <p>S-04 älskar att skapa estrar (marmelad, mörka bär). Men får den gå för varmt i början förvandlas den till en okontrollerad fruktbomb. Börja strikt på 18 °C för elegans.</p>
            <h4 style="margin-top: 15px; color: #ccc;">2. Extrem Flockulering (Tegelstenen)</h4>
            <p>När S-04 anser sig vara klar faller den till botten och bildar en jästkaka så fast att du nästan kan skära i den. Vi måste värma upp den innan den somnar!</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard / Fruity:</strong> Startar som ett ånglok på 18°C för att skapa kontrollerad fruktighet, sedan höjs den till 21°C. Denna värmehöjning väcker jästen för att städa upp smörkola innan kallkraschen.</li>
                <li><strong style="color: #fff;">Dark & Malty (18°C):</strong> Låst stadigt på 18°C. Detta undertrycker de fruktigare estrarna precis lagom mycket för att låta kaffe- och chokladtoner ta huvudrollen i en Stout eller Porter.</li>
            </ul>
        `,
        "w-34-70": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Saflager W-34/70 (German Lager)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> WLP830 (White Labs), Wyeast 2124
            </p>
            <p>Kungen av underjäst! Denna berömda stam från Weihenstephan-bryggeriet i Tyskland är förmodligen den mest använda lagerjästen i världen. Den levererar den ikoniska, krispiga och rena smakprofil vi älskar i en Pilsner eller Helles.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Kylan är din vän (9-15 °C)</h4>
            <p>W-34/70 är en sann vinterbadare. Genom att jäsa den på botten av dess tolerans (runt 10-12 °C), undertrycker du produktionen av fruktiga estrar och svavel, vilket ger ölet dess rena karaktär.</p>
            <h4 style="margin-top: 15px; color: #ccc;">2. Smörkola-varning (Diacetyl)</h4>
            <p>Eftersom den arbetar kallt och långsamt är lagerjäst ökänd för att lämna diacetyl (smakar som smör/smörkola) efter sig. En rejäl temperaturhöjning på slutet är inte ett tips – det är ett krav!</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Traditional Lager:</strong> Håller stadigt på 11°C så att jästen får arbeta ostört. Rampar sedan till 16°C för att städa upp smörkolan inför en massiv 28-dagars kallagringsfas.</li>
                <li><strong style="color: #fff;">Quick Lager:</strong> Det moderna tillvägagångssättet. Pitchas på 13°C för snabbare jästtillväxt, avslutar uppstädningen med en varm diacetylrast vid dag 10, vilket halverar lagringstiden.</li>
                <li><strong style="color: #fff;">Warm/Brulosophy:</strong> Det ökända fusktricket för varmjäst lager! Körs på ale-temperaturer (19°C). W-34/70 hanterar värme överraskande bra, jäser ut snabbt och rent utan bismaker.</li>
            </ul>
        `,
        "be-256": `
            <h3 style="color: var(--accent-color); margin-top: 0;">SafAle BE-256 (The Abbey Machine)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> WLP530, Wyeast 3787 (Liknande Trappist-karaktär)
            </p>
            <p>Tidigare känd som "Abbaye". Detta är en snabb och brutal belgisk jäst som älskar vört med högt OG. Perfekt för mörka, maltiga belgare som Dubbel, Tripel och Quadrupel. Den jäser ut snabbt och skapar en fantastisk symfoni av mörk frukt.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Snabb och stark (15-25 °C)</h4>
            <p>Den tål mycket hög alkohol (upp till 11%). Men om du startar den för varmt kan den ge ifrån sig oönskade lösningsmedelstoner (fuselalkoholer). Nyckeln är en strikt start som senare släpps lös.</p>
            <h4 style="margin-top: 15px; color: #ccc;">2. Estrar av torkad frukt</h4>
            <p>Den är känd för att lyfta fram plommon, fikon och russin, vilket gifter sig otroligt bra med karamellmalt och mörk belgisk sirap.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Belgian Strong:</strong> Börjar svalt på 18 °C. Jästen är aggressiv i början, så vi håller tillbaka odjuret! Sedan låter vi maskinen rampa upp mot 24 °C för att stressa fram de komplexa belgiska estrarna före kallkrasch.</li>
            </ul>
        `,
        "wb-06": `
            <h3 style="color: var(--accent-color); margin-top: 0;">SafAle WB-06 (The Wheat Beer Master)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> WLP380, M20 (Bayerisk veteöls-karaktär)
            </p>
            <p>Den klassiska tyska veteölsjästen i torr form! Vill du ha en grumlig, gyllene Hefeweizen som doftar skumbanan och nejlika? Då är det denna du ska använda.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Du sitter bakom ratten (18-24 °C)</h4>
            <p>I veteöl ÄR jästen smaken. Låga temperaturer (18-19 °C) ger mycket fenoler (peppar och nejlika). Höga temperaturer (22-24 °C) ger extrema mängder isoamylacetat (banan). Du väljer!</p>
            <h4 style="margin-top: 15px; color: #ccc;">2. Den vägrar flockulera</h4>
            <p>En tysk Weissbier *ska* vara grumlig. WB-06 är designad för att stanna kvar i lösning, vilket ger det där fina, mjölkiga utseendet i glaset.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Banana Bomb:</strong> Kör den varmt! Börjar på 22°C och rampar till 23°C för att frigöra massiva mängder isoamylacetat (skumbanan) och säkerställa total utjäsning.</li>
                <li><strong style="color: #fff;">Balanced Clove:</strong> Hålls stadigt lägre (18-20°C). Bananen hamnar i baksätet, vilket låter den kryddiga nejlikan och vetemaltkaraktären dominera.</li>
            </ul>
        `,
"verdant": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Verdant IPA (The Juice Machine)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> Wyeast 1318 (London Ale III)
            </p>
            <p>Utvecklad tillsammans med Verdant Brewing Co., är detta den ultimata jästen för NEIPA och Hazy IPA. Den producerar enorma mängder aprikos- och vaniljestrar som backar upp modern humle perfekt.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Mästare på Biotransformation</h4>
            <p>Denna jäst är fenomenal på att ta emot torrhumle under aktiv jäsning och kemiskt bygga om humleoljorna till ännu fruktigare smaker.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Juicy NEIPA:</strong> Börjar säkert på 19 °C för att bygga en solid, fruktig bas utan fuselalkoholer. Sedan vandrar temperaturen upp till 22 °C för att stressa fram de sista juiciga estrarna.</li>
            </ul>
            <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: Den flockulerar ganska dåligt, vilket är EXAKT vad vi vill ha för att behålla "The Haze" (grumligheten).</i></p>
        `,

        "voss": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Voss Kveik (The Viking)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> WLP4000, Omega OYL-061
            </p>
            <p>Det norska kraftpaketet som bryter exakt alla regler vi lärt oss om bryggning. Den jäser brännhett, rasande snabbt, och lämnar rena, lätta apelsintoner efter sig.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Extrem Värme (30-40 °C)</h4>
            <p>Medan andra jäster skulle ha dött eller skapat odrickbart raketbränsle vid 38 °C, stormtrivs Voss där. Den behöver inget kylskåp, bara en värmematta och massor av jästnäring!</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Hot & Fast:</strong> Jäser på brännheta 38°C! Jäsningen är extremt våldsam, kastar ur sig massiva apelsinestrar och blir helt klar på bara 3-4 dagar innan kylning.</li>
                <li><strong style="color: #fff;">Clean Pseudo:</strong> Sänkt till "normala" sommartemperaturer (25-28°C). Jäser långsammare men lämnar en chockerande ren profil utan de intensiva citrustonerna.</li>
            </ul>
        `,

        "nottingham": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Nottingham (The Workhorse)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> WLP039, M36
            </p>
            <p>Kanske den mest mångsidiga jästen som någonsin odlats fram. "Notty" bryr sig inte om vad du slänger på den. Imperial Stout? Japp. Cider? Absolut. IPA? Inga problem. Den är extremt neutral, pålitlig och städar efter sig exemplariskt.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Temperaturkameleont (10-22 °C)</h4>
            <p>I det övre skiktet beter den sig som en ren ale-jäst. Drar du ner den till 12-14 °C? Då blir den i princip en cheat-code-lagerjäst för otroligt krispiga pseudo-lagers!</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard Ale:</strong> Håller 18 °C för en ren och snabb primärjäsning, rampar sedan upp till 20-21 °C. Även arbetshästar behöver en diacetylrast för att dölja smörkolan.</li>
                <li><strong style="color: #fff;">Pseudo Lager:</strong> Pressar "Notty" till sitt termiska golv på 14°C. Vid denna temperatur slutar den agera som en ale-jäst och producerar en otroligt krispig, ren pseudo-lager utan svavel.</li>
            </ul>
        `,

        "belle-saison": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Belle Saison (The Dry Belgian)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> Wyeast 3711 (French Saison)
            </p>
            <p>Saisonjäst är vild, otämjd och fantastisk. Designad för att äta upp varenda sockerbit den hittar och lämna ett snustorrt, pepprigt öl efter sig.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Diastaticus (Äter allt)</h4>
            <p>Denna jäst bär på en gen (STA1) som gör att den kan bryta ner komplexa sockerarter. Resultatet? Ett öl som kan jäsa ner till 1.000 FG.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Dry & Peppery:</strong> Börjar runt 20 °C så att jäsningen tar fart utan att bli lösningsmedelsaktig. Sen tar vi bort spärrarna! Den får fri-rampa hela vägen upp till 28 °C för att bygga max smakprofil.</li>
            </ul>
        `,

        "t-58": `
            <h3 style="color: var(--accent-color); margin-top: 0;">SafAle T-58 (The Peppery Companion)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> WLP570 (Liknande kryddprofil)
            </p>
            <p>En helt unik, ester- och fenoldriven jäst. Om BE-256 är mörk frukt, så är T-58 svartpeppar och kryddor. Används ofta i komplexa belgiska ales eller Trappist-öl.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Lämnar restsötma (15-24 °C)</h4>
            <p>T-58 jäser inte ut lika hårt som många andra belgare. Detta lämnar lite restsötma och kropp i ölet, vilket balanserar de skarpa, peppriga tonerna.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Spicy Belgian:</strong> Börjar på 18 °C. Fenolerna kommer att produceras i massor hur som helst. Rampar sedan långsamt upp till 22 °C för att runda av smakerna och se till att jäsningen inte stannar för tidigt.</li>
            </ul>
        `,

        "s-23": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Saflager S-23 (The Fruity Bohemian)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> WLP802, Wyeast 2278 (Tjeckiska/Bohemiska rötter)
            </p>
            <p>Från det berömda VLB-institutet i Berlin kommer lagerjästens vilda barn. Medan W-34/70 är laserfokuserad och ren, är S-23 älskad för att producera något mer fruktiga och estriga toner, vilket gör den fantastisk för Böhmisk Pilsner eller Baltisk Porter.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Esterprofilen (9-15 °C)</h4>
            <p>Om du jäser denna i den varmare änden av lagerspektrumet (13-15 °C), kommer den att ge ifrån sig vackra, subtila toner av äpple och päron som leker otroligt bra tillsammans med kryddig Saaz-humle.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Crisp German (10 °C):</strong> Håll den kall och stabil för en traditionell, ren profil. D-rast på 15 °C på dag 10.</li>
                <li><strong style="color: #fff;">Bohemian Fruit / Fruity Lager:</strong> Börja något varmare (12-13°C) för att låsa upp de unika S-23-estrarna. Perfekt för en maltdriven tjeckisk amber.</li>
            </ul>
            <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: S-23 kan ibland kämpa med att jäsa ut de allra sista gravity-punkterna. En ordentlig, varm diacetylrast är avgörande för att hjälpa den i mål.</i></p>
        `,

        "s-33": `
            <h3 style="color: var(--accent-color); margin-top: 0;">SafAle S-33 (The Body Booster)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> WLP006 (Bedford British)
            </p>
            <p>Ofta missförstådd, S-33 är ett hemligt vapen. Den är inkapabel att äta komplexa maltsocker (maltotrios-negativ), vilket betyder att den ALLTID kommer att lämna ditt öl tjockt, fylligt och något sött.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Inte bara för Belgare</h4>
            <p>Trots att den är märkt som en belgisk ale-jäst producerar den väldigt lite fenoler (krydda). Istället används den allt oftare i Hazy IPAs och Milk Stouts enbart för sin förmåga att bygga en otrolig munkänsla.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Thick Ale (18 °C):</strong> Håll den sval för att minimera estrar. Du kommer att få ett ljuvligt, tjockt mörkt öl med grym skumstabilitet. Eller använd den som en cheat-code för tjocka NEIPAs!</li>
            </ul>
            <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: Få inte panik om din Final Gravity är hög (t.ex. 1.020). S-33 kan helt enkelt inte jäsa den längre än så. Den är klar!</i></p>
        `,

        "diamond": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Diamond (The Munich Master)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> WLP830, Wyeast 2124 (Weihenstephan-ursprung)
            </p>
            <p>En sann tysk lagerjäst från Doemens-institutet i München. Diamond är känd för sin robusta natur och förmåga att producera otroligt rena, krispiga och autentiska tyska lagers utan krångel.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Fläckfri och Professionell</h4>
            <p>Medan vissa lagerjäster kan avge svavel (noshörningsfisar) under jäsningen, är Diamond generellt mycket välartad och producerar ett extremt polerat öl som låter pilsnermalten skina.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Clean Lager / Munich Crisp:</strong> Det traditionella sättet. Håll 10 °C i 7-10 dagar, följt av en strikt diacetylrast på 16 °C.</li>
                <li><strong style="color: #fff;">Fast Helles (14 °C):</strong> Diamond hanterar något varmare temperaturer anmärkningsvärt bra. Kör den på 14 °C för att halvera din jästid!</li>
            </ul>
            <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: Diamond har fantastisk utjäsning. Den kommer att torka ut en Pilsner vackert, vilket gör den extremt uppfriskande.</i></p>
        `,

        "novalager": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand NovaLager (The Bio-Engineered Miracle)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> Unik Hybrid (Saccharomyces pastorianus-linje)
            </p>
            <p>En sann "game-changer". NovaLager är en modern hybridjäst (en ny Saccharomyces pastorianus-linje) designad för att jäsa som en ale, men smaka exakt som en ren lager.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Bryter mot reglerna (10-20 °C)</h4>
            <p>Du behöver inte längre 5 veckor och en dedikerad lagerkyl. NovaLager jäser rent vid 18-20 °C med låg esterproduktion, inget svavel (H2S) och väldigt låg diacetyl.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">The Cheat Code (18 °C):</strong> Behandla den som en ale! Primär på 18 °C i 5 dagar, rampa till 20 °C i 2 dagar för att städa upp, och krascha. En ren lager på en vecka!</li>
                <li><strong style="color: #fff;">Modern Cold (14 °C):</strong> Om du vill ha absolut kristallklar perfektion, jäs den på 14 °C. Det är fortfarande betydligt snabbare än traditionella stammar men levererar prisvinnande krispighet.</li>
            </ul>
            <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: Den har mycket hög utjäsning. Var beredd på att ditt öl torkar ut rejält, vilket gör att humlebeskan upplevs vassare.</i></p>
        `,

        "wlp001": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP001 California Ale (The West Coast King)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Wyeast 1056, US-05
            </p>
            <p>White Labs kronjuvel! Detta är originalstammen som startade den amerikanska craft beer-revolutionen. Prisad för sin oöverträffade renhet.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Låter humlen sjunga (20-23 °C)</h4>
            <p>Denna jäst har ett enda jobb: att jäsa bort sockret och sedan kliva åt sidan så att din dyra amerikanska humle kan ta täten.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> Börja krispigt runt 19.5 °C. Vi vill ha noll estrar och noll fuselalkoholer. Släpp sedan upp den till 22 °C för en diacetylrast. WLP001 är bra på att städa, men lite värme hjälper.</li>
                <li><strong style="color: #fff;">Low Ester:</strong> Sänker temperaturen till 18 °C. Jäsningen tar något längre tid, men ger en omöjligt ren, lagerliknande ale-profil.</li>
            </ul>
        `,

        "wlp300": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP300 Hefeweizen (The Banana Bomb)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Wyeast 3068, M20
            </p>
            <p>Den flytande guldstandarden för tysk veteöl. Till skillnad från torra veteölsjäster är denna berömd för att producera massiva, ljuvliga mängder bananarom.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Temperament och Temperatur (20-22 °C)</h4>
            <p>Att pressa WLP300 över 20-strecket är knepet för att låsa upp de fruktiga isoamylacetat-estrarna (banan) och undertrycka nejlikan.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> Hålls bestämt på 19 °C. Fokuserar på de kryddiga nejlikafenolerna, vilket håller bananestrarna subtila och balanserade.</li>
                <li><strong style="color: #fff;">Classic:</strong> Jäs varmt! Lås tempen på 20 °C och rampa till 22°C för att låta bananfesten börja. Sänk till serveringstemp (ca 4 °C) för konditionering.</li>
            </ul>
        `
,
"wyeast-1968": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1968 (London ESB Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> WLP002 (Fuller's)
            </p>
            <p>Den legendariska Fuller’s-stammen! Denna jäst är berömd för att lämna en underbar, maltig restsötma, och att falla ur lösning så snabbt att den ser ut som keso.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Extrem Flockulering (Kritiskt!)</h4>
            <p>Eftersom den sjunker som en sten i samma sekund den känner sig "klar", måste du aktivt kämpa för att hålla den vaken. Om den somnar för tidigt kommer ditt öl smaka som en smörkolakaramell (Diacetyl).</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard / ESB Clean:</strong> Börjar svalare (18.5-19 °C) för att hålla jästen fokuserad på maltighet utan att kasta ur sig för mycket frukt. En rejäl diacetylrast på 21 °C städar upp smörkolan.</li>
                <li><strong style="color: #fff;">High Ester / ESB Fruity:</strong> För en sann brittisk fruktbomb! Vi pitchar varmt (21-22 °C) och låter den rampa till 23 °C. Förvänta dig massiva toner av marmelad och sylt.</li>
                <li><strong style="color: #fff;">Low Ester:</strong> Fusktricket för en superren profil. Jäser lågt på 18 °C och kraschar mjukt för att undvika att stressa jästen.</li>
            </ul>
            <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: Denna jäst klarnar ölet så snabbt under kallkraschen att du sällan behöver klarningsmedel!</i></p>
        `,

        "wlp920": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP920 (Old Bavarian Lager)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Wyeast 2206 (Bavarian Lager)
            </p>
            <p>En klassiker från södra Tyskland, känd för en maltig profil med en lätt touch av estrar, vilket gör den perfekt för Oktoberfest-öl, Bocks och mörka lagers.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Maltbevararen</h4>
            <p>Genom att hålla jäsningen kall och stabil, förhindrar vi att jästen producerar biprodukter som annars skulle dölja de känsliga rostade och karamelliga tonerna från München- och Wienermalten.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Traditional Lager:</strong> Det gamla hederliga sättet. Börjar lågt på 10.5 °C i hela 10 dagar, följt av en långsam D-rast och en massiv 28-dagars kallagring.</li>
                <li><strong style="color: #fff;">Quick Lager:</strong> Det moderna greppet. Pitchas på 12.5 °C för snabbare jästtillväxt, avslutar städningen runt dag 10 och halverar lagringstiden.</li>
                <li><strong style="color: #fff;">Brulosophy:</strong> Fusktricket för varmjäst lager! Körs på ale-temperaturer (19 °C). Förvånansvärt ren, men färdig på en bråkdel av tiden.</li>
            </ul>
        `,

        "imperial-b45": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Imperial Yeast B45 (Gnome)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> WLP550, Wyeast 3522 (Chouffe)
            </p>
            <p>En fantastisk klassisk belgisk jäst berömd för att producera vackra päron- och persikoestrar parade med en lätt, pepprig kryddighet (fenoler).</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Den Belgiska Rampen</h4>
            <p>Belgiska munkar använde historiskt sett inga kylaggregat. De pitchade jästen och lät jäsningens naturliga exotermiska värme driva upp temperaturen. Vi vill efterlikna detta för att låsa upp den sanna belgiska karaktären!</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Classic:</strong> Börjar på 20 °C och fri-rampar till 23.5 °C. Detta är den perfekta punkten för att balansera päronestrarna med de peppriga fenolerna.</li>
                <li><strong style="color: #fff;">Spicy & High Ester:</strong> Vi pressar jästen hårt och varmt! Att starta på 21-22 °C och rampa till 25 °C tvingar jästen att kasta ur sig massiva mängder komplexa smaker. Perfekt för en Belgian Strong.</li>
                <li><strong style="color: #fff;">Standard & Low Ester:</strong> Tillbakahållen (18-19 °C). Håller jästen lugn för en mer subtil belgisk blonde.</li>
            </ul>
        `,

        "wyeast-1084": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1084 (Irish Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> WLP004 (Guinness)
            </p>
            <p>Guinness-stammen! En sann arbetshäst från Dublin som är otroligt mångsidig. Den ger en rik, maltig profil med en subtil hint av mörk frukt och en touch av diacetyl som fungerar perfekt i mörka öl.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Älskar mörk malt</h4>
            <p>Denna jäst var bokstavligen skapad för att jäsa rostat korn. Den lämnar precis tillräckligt med restkropp för att få en Dry Stout att kännas krämig istället för tunn.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Dry Stout:</strong> Börjar på krispiga 18 °C och rampar till 20 °C. Detta undertrycker fruktighet och låter kaffe- och chokladtonerna från malten ta huvudrollen.</li>
                <li><strong style="color: #fff;">Red/Malty & High Ester:</strong> Körs varmare (20-21.5 °C) för att locka fram de härliga syltiga, mörka bärostrarna som gör en Irish Red Ale så speciell.</li>
                <li><strong style="color: #fff;">Standard & Low Ester:</strong> En fantastisk, neutral bas om du vill använda denna jäst för amerikanska stilar eller Porters.</li>
            </ul>
        `,

        "wyeast-3944": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 3944 (Belgian Witbier)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> WLP400 (Hoegaarden)
            </p>
            <p>Kungen av veteöl! Känd för enorm karaktär, producerar en komplex blandning av kryddiga fenoler (peppar/nejlika) och fruktiga estrar (banan/citrus).</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Håll den grumlig</h4>
            <p>Denna jäst vägrar att sjunka, och det är exakt vad vi vill! Vi vill att jästen och veteproteinerna ska stanna i lösning för det mjölkiga, vita utseendet.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> Hålls strikt på 19 °C. Fruktigheten hamnar i baksätet, och nejlika/pepparfenolerna blir showens stjärna.</li>
                <li><strong style="color: #fff;">Classic Wit:</strong> En balanserad 18 °C-start, rampande till 21.5 °C. Notera att "Condition"-fasen sitter på 6 °C istället för nära fryspunkten? Detta förhindrar att ölet klarnar för mycket!</li>
                <li><strong style="color: #fff;">Summer Wit & High Ester:</strong> Pressas varmare (20-23 °C). Förvänta dig massiva mängder citrus, apelsinskal och banan.</li>
            </ul>
        `,

        "wlp833": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP833 (German Bock Lager)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Wyeast 2487 (Ayinger)
            </p>
            <p>Tungviktaren från Ayinger! Den absoluta kungen av maltighet. Den lämnar en fantastisk maltig sötma och kropp, vilket gör den till det självklara valet för Bocks, Doppelbocks och Märzens.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Den långa dvalan</h4>
            <p>Bock-jäst kan vara envis och långsam. Den behöver tid för att ordentligt jäsa ut stark vört utan att skapa raketbränsle-fuselalkoholer.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Traditional Lager:</strong> Körs något varmare på 11 °C för att påskynda utjäsningen utan att offra den rena, maltiga profilen.</li>
                <li><strong style="color: #fff;">Trad. Bock:</strong> Det autentiska tillvägagångssättet. En kylig 10 °C primärjäsning, en solid D-rast på 16 °C och sedan en ansträngande 35-dagars lagringsfas för att uppnå flytande perfektion.</li>
                <li><strong style="color: #fff;">Fast Bock:</strong> När du inte orkar vänta. Pitchad på 12 °C, värms till 17 °C. Den gör klart jobbet på drygt tre veckor men levererar fortfarande en massiv maltryggrad.</li>
            </ul>
        `,

        "wlp007": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP007 (Dry English Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> S-04, Wyeast 1098 (Whitbread)
            </p>
            <p>En målsökande missil! Känd som "Arbetshästen". Den är otroligt snabb, jäser ut väldigt torrt och sjunker som en sten när den är klar.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Att tämja odjuret</h4>
            <p>Eftersom 007 jäser så våldsamt, skapar den intensiv intern värme. Din kyl kommer få jobba hårt de första 48 timmarna för att hålla temperaturen nere och förhindra lösningsmedelssmaker.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">West Coast & Standard:</strong> Låser in odjuret på 18.5-19 °C. Vid dessa svalare temperaturer agerar WLP007 nästan exakt som en ren amerikansk ale-jäst, vilket gör den perfekt för torra IPAs.</li>
                <li><strong style="color: #fff;">Monster & High Ester:</strong> Starta på 20-21 °C. Om du brygger en massiv Imperial Stout eller Barleywine, ger denna profil jästen den värme den behöver för att överleva den höga alkoholen samtidigt som den kastar ur sig vackra mörka frukt-estrar.</li>
            </ul>
        `,

        "wyeast-1318": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1318 (London Ale III)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Verdant IPA (Boddingtons)
            </p>
            <p>Själva grunden för NEIPA-revolutionen. Detta är jästen som gav världen "Juice". Den lämnar en sammetslen munkänsla och kastar ur sig vackra estrar av ananas och grapefrukt.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Biotransformation</h4>
            <p>Låg flockulering hjälper till att hålla ölet grumligt, och dess unika enzymer är fantastiska på att kemiskt omvandla dina massiva torrhumlegivor till ännu juicigare föreningar.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard & Low Ester:</strong> Hålls på 18-19 °C. Detta ger en ren jäsning där biotransformationen av dina massiva torrhumlegivor får ta huvudrollen.</li>
                <li><strong style="color: #fff;">High Ester:</strong> Pitchad på 21 °C och rampad till 23 °C. Den extra värmen tvingar jästen att producera mer av sina egna tropiska estrar (persika/aprikos) att blanda med humlen.</li>
            </ul>
        `,

        "wyeast-2565": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 2565 (Kölsch)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> WLP029 (Cologne)
            </p>
            <p>En sann "hybrid" – tekniskt sett en ale-jäst, men den föredrar att arbeta vid temperaturer nära lager. Känd för en extremt krispig, ren och nästan vinös (vitt vin) profil.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Den dammiga jästen</h4>
            <p>Wyeast 2565 är notoriskt pudrig. Den vägrar att klarna av sig själv. En lång, kall lagringsfas är absolut obligatorisk för att uppnå den strålande, gyllene Kölsch-klarheten.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard & Low Ester:</strong> Snabbare ale-liknande jäsning (18-19 °C). Fortfarande väldigt ren, men blir klar mycket snabbare. Bra för krispiga Blonde Ales.</li>
                <li><strong style="color: #fff;">Authentic:</strong> Köln-metoden! En kylig 14.5 °C primärjäsning, en långsam D-rast på 18 °C och en strikt 2-veckors kallagring. Smakar exakt som en tysk lager, men bryggd med ale-jäst.</li>
            </ul>
        `,

        "wlp002": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP002 English Ale (The Brick)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Wyeast 1968 (Fuller's Strain)
            </p>
            <p>Den legendariska Fuller’s-stammen! Denna jäst är berömd för två saker: att lämna en underbar, maltig restsötma, och att falla ur lösning så snabbt att den ser ut som keso.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Extrem Flockulering</h4>
            <p>Eftersom den sjunker som en sten i samma sekund den känner sig "klar", måste du aktivt kämpa för att hålla den vaken. Om den somnar för tidigt kommer ditt öl smaka som en smörkolakaramell (Diacetyl).</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> En stadig 19 °C-jäsning, som hoppar upp till 21 °C på slutet för att hålla jästen aktiv för uppstädning.</li>
                <li><strong style="color: #fff;">Low Ester:</strong> Håll den något svalare (18.5 °C) för att behålla ännu mer ojästa sockerarter, vilket ger dina mörka öl en massiv, silkeslen munkänsla.</li>
            </ul>
            <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: När du kallkraschar denna kommer ölet att bli strålande klart nästan över en natt. Inget behov av klarningsmedel!</i></p>
        `,

        "wlp500": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP500 Trappist (The Monk's Madness)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Wyeast 1214 (Chimay)
            </p>
            <p>Hämtad direkt från Chimay-klostret. Detta är jästen du vill ha när du brygger massiva, komplexa belgiska Quads eller fruktiga Tripels. Den producerar en explosion av plommon, russin och tydliga bubbelgumstoner.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Låt den köra (18-22 °C... och uppåt)</h4>
            <p>Belgiska munkar använde historiskt sett inga kylaggregat. De pitchade jästen och lät jäsningens naturliga exotermiska värme driva upp temperaturen. Vi vill efterlikna detta!</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> Starta på 19 °C för att undertrycka fuselalkoholer, låt den sedan långsamt fri-rampa till 21 °C senast Dag 3 för en elegant fruktprofil.</li>
                <li><strong style="color: #fff;">Monk's Madness:</strong> Pitcha på 20 °C och rampa den aggressivt till 25 °C! Detta stressar jästen till att kasta ur sig massiva smaker av mörk frukt och tuggummi.</li>
            </ul>
            <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: Den har mycket låg flockulering. Du kommer att behöva en lång, kall konditioneringsfas för att få denna envisa jäst att sjunka ur ölet.</i></p>
        `,

        "wlp066": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP066 London Fog (The Haze Craze)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Wyeast 1318 (Nära släkting)
            </p>
            <p>Detta är den flytande magin bakom några av de bästa NEIPA:orna i världen. Den lämnar en sammetslen, krämig munkänsla och kastar ur sig vackra estrar av ananas och blodgrapefrukt.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Kroppsbyggaren</h4>
            <p>Till skillnad från West Coast-jäster jäser London Fog inte ut alla komplexa sockerarter. Den lämnar en högre Final Gravity, vilket ger den där tjocka, juiceliknande kroppen som moderna Hazy IPAs kräver.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> Håll den låst på 19 °C. Detta ger en ren jäsning där biotransformationen av din torrhumle tar huvudrollen.</li>
                <li><strong style="color: #fff;">Smooth Juice:</strong> Starta på 19 °C, men rampa till 22 °C senast Dag 8. Den adderade värmen tvingar jästen att producera mer av sina egna tropiska estrar att blanda med humlen.</li>
            </ul>
        `,

        "wlp800": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP800 Pilsner Lager (The Czech Legend)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Wyeast 2001 (Pilsner Urquell)
            </p>
            <p>Den berömda Pilsner Urquell-stammen. Om du vill brygga en autentisk Böhmisk Pilsner behöver du inte leta längre. Den ger en rik, komplex maltighet och en väldigt mjuk, rundad profil.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Diacetyl-debatten</h4>
            <p>Historiskt sett har tjeckiska pilsners en pytteliten hint av diacetyl (smör) i bakgrunden. Om du vill vara 100% trogen stilen, gör du faktiskt en något kortare diacetylrast än med tyska lagers!</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Bohemian:</strong> Jäs lågt och långsamt. Rampa upp till 12 °C i bara 48 timmar för att städa upp *nästan* all smörkola, och droppa sen till lagring.</li>
                <li><strong style="color: #fff;">Traditional Lager:</strong> Kör den något varmare (11°C) och gör en full 5-dagars D-rast på 16 °C för en helt ren, modern tolkning av en Pilsner.</li>
            </ul>
        `,

        "wlp095": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP095 (Burlington Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Imperial A04, Omega OYL-052, "Conan"
            </p>
            <p>Den legendariska "Conan"-stammen! Jästen som från början satte Vermont-stilen (Hazy IPA) på kartan. Berömd för att producera intensiva toner av mogen persika och aprikos.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Den originella juicen</h4>
            <p>Till skillnad från London III tenderar Burlington att jäsa ut något mer, vilket ger ett öl som är torrare på slutet men ändå exceptionellt "juicigt" i sin arom.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Conan IPA & Standard:</strong> 19-21 °C. Den klassiska Vermont-kurvan. Ger en perfekt balans mellan humlebeska och stenfrukts-estrar.</li>
                <li><strong style="color: #fff;">High Ester:</strong> Pressad till 21 °C och upprampning till 23 °C. Detta stressar jästen för att maximera persiko- och aprikostonerna.</li>
                <li><strong style="color: #fff;">Low Ester:</strong> Svalt jäst (18 °C) för att tämja fruktigheten, vilket får den att bete sig mer som en standard West Coast IPA-jäst.</li>
            </ul>
        `,

        "wlp090": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP090 San Diego Super</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Ingen direkt. Liknar WLP001 men är snabbare/flockar mer.
            </p>
            <p>En sann gigant i hantverksölsvärlden. Den jäser blixtsnabbt, slutar med en omöjligt krispig profil, och faller ur lösning som en sten. Om du brygger en kraftigt humlad Double IPA eller West Coast IPA, är detta ditt val av vapen.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> En pålitlig 19 °C-jäsning, stegar upp till 21 °C för en solid städning.</li>
                <li><strong style="color: #fff;">Low / High Ester:</strong> Justera starttemperaturen för att antingen undertrycka eller lätt höja de subtila frukttonerna för att balansera din humlenota.</li>
                <li><strong style="color: #fff;">Fast & Crisp:</strong> Driver jästen något varmare från start (19.5 °C). Denna jäst är så ren att du kan snabb-brygga en West Coast IPA utan att generera bismaker.</li>
            </ul>
        `,

        "wyeast-1272": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1272 (American Ale II)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> WLP051 (California V)
            </p>
            <p>Den fruktigare kusinen till standardamerikansk alejäst (som US-05/WLP001). Den ger en mer komplex, lite nötig och mjukare profil. Den lämnar lite mer restsötma, vilket gör den till det absolut perfekta valet för Amber Ales, Pale Ales och Brown Ales.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard & Low Ester:</strong> Håller jästen på jorden för en ren amerikansk profil, vilket diskret dämpar dess signaturnötiga toner.</li>
                <li><strong style="color: #fff;">Amber Nutty:</strong> Startar på 19.5 °C och rampar till 21 °C. Denna specifika profil är designad för att locka fram den mjuka frukten och nötiga karaktären som får Amber ales att glänsa.</li>
            </ul>
        `,

        "imperial-a24": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Imperial A24 (Dry Hop)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Blandning av Barbarian (Conan) & Citrus-stammar.
            </p>
            <p>Ett modernt mirakel! Detta är en unik blandning av två fantastiska IPA-stammar designad specifikt för att hantera massiva torrhumlegivor. Den ger en otrolig explosion av persika, aprikos och citrus samtidigt som den håller humlen i suspension för den perfekta disen.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> En stadig 19 °C baslinje som balanserar jästuttrycket med din humle.</li>
                <li><strong style="color: #fff;">Hazy Citrus:</strong> Startar varmt på 20 °C och pressas till 22.5 °C. Stressar blandningen att producera massiva mängder av sina egna citrusestrar för att backa upp din tropiska humle.</li>
                <li><strong style="color: #fff;">Dry Hop Burst:</strong> En svalare start (18.5 °C) för att etablera en ren bas, sedan en snabb stegring till 22 °C precis när du släpper i din tunga torrhumle för att maximera biotransformationen.</li>
            </ul>
        `,

        "wlp530": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP530 (Westmalle Trappist)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Wyeast 3787, BE-256 (Torr version)
            </p>
            <p>Det flytande originalet bakom det berömda Westmalle-bryggeriet. Detta är den obestridde kungen av mörka, starka belgiska ales. Den producerar en vacker, komplex symfoni av plommon, russin och mild krydda, samtidigt som den enkelt tuggar sig igenom massiva mängder socker (upp till 15% ABV).</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> En kontrollerad profil på 19 °C till 21 °C. Håller den intensiva belgiska karaktären återhållsam för en mer förfinad Dubbel.</li>
                <li><strong style="color: #fff;">Trappist Ramp:</strong> Den traditionella klostermetoden. Pitcha svalt på 18 °C för att undvika varma lösningsmedelsalkoholer, låt sedan jästens egen exotermiska värme driva upp tanken till 25 °C!</li>
                <li><strong style="color: #fff;">Dark Fruit:</strong> Startar något varmare (20 °C) och driver hårt mot 24 °C för att maximera de rika plommon- och russinestrarna som behövs för en massiv Belgian Quad.</li>
            </ul>
        `,

        "wyeast-3711": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 3711 (French Saison)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Belle Saison (Torr version), WLP590
            </p>
            <p>Ett absolut monster till jäst! Den är berömd för sin aggressiva jäsning, den tuggar sig igenom varenda komplext socker den kan hitta (Diastaticus). Resultatet är ett snustorrt, högkarbonerat öl med en vacker balans av svartpepparkrydda och citrus.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> En balanserad start på 20 °C, långsamt upprampande till 24 °C. Skapar en perfekt, mycket lättdrucken table-saison.</li>
                <li><strong style="color: #fff;">Bone Dry:</strong> Startar varmt (22 °C) och pressas till 26 °C för att säkerställa att absolut 0% restsocker lämnas kvar.</li>
                <li><strong style="color: #fff;">Farmhouse Spice:</strong> Startar hett på 24 °C och låter jästen löpa amok upp till 28 °C. Detta driver fram extrema nivåer av rustika, peppriga fenoler.</li>
            </ul>
        `,

        "wlp028": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP028 (Scottish Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Wyeast 1728 (Scottish Ale)
            </p>
            <p>En högst unik ale-jäst som älskar kyla! Den jäser otroligt rent vid lägre temperaturer, vilket bevarar och lyfter fram de djupa, rostade och rökiga maltsmakerna utan att dölja dem bakom fruktiga estrar.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> En traditionell 18 °C ale-jäsning. Ren, neutral och pålitlig.</li>
                <li><strong style="color: #fff;">Wee Heavy:</strong> Neddragen till 16 °C. En lång, långsam jäsning som låter den massiva maltkomplexiteten i en stark skotsk ale ta huvudrollen.</li>
                <li><strong style="color: #fff;">Cold & Clean:</strong> Pressad till sin absoluta gräns vid 14.5 °C. Agerar nästan exakt som en lagerjäst och producerar en otroligt krispig, maltdriven profil.</li>
            </ul>
        `,
"wyeast-1469": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1469 (West Yorkshire)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Timothy Taylor-stammen, Imperial A10
            </p>
            <p>Den heliga graalen för traditionella engelska Bitters! Hämtad från ett legendariskt Yorkshire-bryggeri, producerar denna jäst en underbart komplex, något nötig och milt fruktig profil som passar perfekt med engelsk malt och Fuggles-humle.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> Jäser vid 19 °C, följt av en varm D-rast. Perfekt för moderna engelska Pale Ales.</li>
                <li><strong style="color: #fff;">Yorkshire Bitter:</strong> Startar på 20 °C för att locka fram sina signaturtoner av stenfrukt. Notera att "kraschen" stannar vid 5 °C för att lämna en lätt grumling och kropp.</li>
                <li><strong style="color: #fff;">Pub Temp:</strong> En högst autentisk profil. Jäser vid 18.5 °C och "konditioneras" vid 8 °C, vilket efterliknar källartemperaturen i ett traditionellt brittiskt pubfat.</li>
            </ul>
        `,

        "lutra": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Omega Lutra Kveik</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande / Torr Hybrid<br>
                <strong>Motsvarigheter:</strong> En mycket isolerad Kveik-stam.
            </p>
            <p>En modern "cheat code" för bryggning! Lutra är en isolerad Kveik-stam som har chockat bryggarvärlden. Trots att den jäser vid varma ale-temperaturer, producerar den en ofattbart ren, krispig profil som smakar nästan omöjlig att skilja från en traditionell, långsamjäst lager.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> En stadig 25 °C. Snabb, helt ren, och pålitlig för allt från Hard Seltzers till Cream Ales.</li>
                <li><strong style="color: #fff;">Pseudo-Lager:</strong> Nedsläppt till 20 °C. Den ultimata fusk-lagerprofilen. Krispig, svavelfri och otroligt uppfriskande.</li>
                <li><strong style="color: #fff;">Speed Run:</strong> Jäser på brännande 32 °C. Förvandlar vört till öl på under 4 dagar medan den på något magiskt sätt förblir chockerande ren.</li>
            </ul>
        `,

        "philly-sour": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Philly Sour</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> Unik (Lachancea-art)
            </p>
            <p>Ren magi från bio-ingenjörskonst. Uppteckt på ett träd i Philadelphia, denna unika jäst producerar mjölksyra (syrlighet) under de första dagarna, och växlar SEDAN över till att producera alkohol! Det låter dig brygga suröl säkert utan att introducera farliga bakterier i din utrustning.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> En stabil 22 °C-profil. Ger en lagom, uppfriskande syrlighet.</li>
                <li><strong style="color: #fff;">Lactic Boost:</strong> Hålls varm på 25 °C de första 4 dagarna för att tvinga jästen att producera massiva mängder mjölksyra, droppas sedan till 20 °C för en ren alkoholavslutning. Mycket sur!</li>
                <li><strong style="color: #fff;">Sour Fruit:</strong> Skräddarsydd för fruktade suröl. Balanserar syraproduktionen innan den kraschar rent för att låta dina tillsatta fruktpuréer skina.</li>
            </ul>
            <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-tip: Philly Sour behöver enkla sockerarter (som dextros) för att producera höga halter av syra! Tillsätt 5% dextros i ditt kok.</i></p>
        `,

        "wlp820": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP820 (Oktoberfest / Märzen)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Wyeast 2633, Imperial L17
            </p>
            <p>Münchens Oktoberfest i en flaska. Medan pilsnerjäst fokuserar på en krispig, humlig avslutning, är denna stam designad för att lyfta rika, rostade och brödiga München- och Wienermalter. Den lämnar en anmärkningsvärt mjuk och fyllig lager efter sig.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Traditional Lager:</strong> Det klassiska tyska tillvägagångssättet. Långsam primär på 11 °C, följt av en lång, kall lagringsfas för flytande perfektion.</li>
                <li><strong style="color: #fff;">Fast Festbier:</strong> Pitchad något varmare (13 °C) för en snabbare jäsning. Perfekt för att brygga en Festbier precis innan festen börjar.</li>
                <li><strong style="color: #fff;">Malty Marzen:</strong> Hålls strikt vid 10 °C. Kräver enormt tålamod, men belönar dig med den djupaste, mest komplexa maltprofilen möjligt.</li>
            </ul>
        `,

        "bry-97": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand BRY-97</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> WLP090 (Liknande snabb/ren profil)
            </p>
            <p>En West Coast-legendar i torr form! Många bryggare föredrar BRY-97 över US-05 eftersom den producerar något mindre persikoestrar och lämnar en vassare, renare avslutning som verkligen låter humlebeskan bita.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Den trögstartade</h4>
            <p>Få inte panik om ditt jäsrör inte bubblar efter 24 timmar. BRY-97 är notoriskt långsam att vakna, men när den väl kommer igång, jäser den kraftigt och flockulerar vackert.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard / Low Ester:</strong> Håller jästen på 17.5 - 19 °C för en otroligt neutral bas.</li>
                <li><strong style="color: #fff;">West Coast Crisp:</strong> Startar på 18 °C och rampar långsamt upp. Garanterar en snustorr avslutning där din dyra humle kan glänsa.</li>
            </ul>
        `,

        "k-97": `
            <h3 style="color: var(--accent-color); margin-top: 0;">SafAle K-97 (German Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> Wyeast 1007, WLP036
            </p>
            <p>En fantastisk, ren tysk ale-stam. Detta är din "go-to" torrjäst för att brygga Altbier, Kölsch, eller någon öl där du vill ha en krispig, lagerliknande profil men inte har tid att faktiskt brygga en lager.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Det massiva skummet</h4>
            <p>K-97 producerar ett massivt, tjockt skumtäcke (krausen) under jäsningen som kan dröja kvar i dagar efter att den är klar. Se till att du har gott om "headspace" i ditt jäskärl!</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Altbier Crisp:</strong> Jäser svalt vid 15 °C. Undertrycker fruktighet och lyfter fram den rostade maltkaraktären av en klassisk Düsseldorf Altbier.</li>
                <li><strong style="color: #fff;">Kölsch Style:</strong> Hålls vid 16 °C och rampar till 20 °C. Krispig, något vinös och väldigt ren.</li>
            </ul>
        `,

        "windsor": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Windsor</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> WLP002 (Liknande utjäsningsprofil)
            </p>
            <p>En klassisk brittisk ale-stam känd för sina fruktiga estrar och fylliga kropp. Precis som S-33 är Windsor maltotrios-negativ – vilket betyder att den inte kan jäsa komplexa sockerarter. Din Final Gravity kommer vara hög, men ölet kommer att kännas otroligt rikt och sammetslent.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Sweet Stout:</strong> Jäser vid 18 °C. Maximerar restsötman för att balansera kraftigt rostade malter.</li>
                <li><strong style="color: #fff;">Fruity Bitter:</strong> Pressad varmare till 20-21.5 °C. Släpper lös vackra engelska estertoner av färska bär och sylt.</li>
            </ul>
        `,

        "mexican-lager": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP040 (Mexican Lager)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Imperial L05 (Urkel), Wyeast 2124
            </p>
            <p>Den perfekta jästen för en solig dag! Hämtad från Mexico City, producerar denna stam en exceptionellt krispig och ren lagerprofil som passar felfritt med majsflingor och en klyfta lime.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Traditional Lager:</strong> Körs på 11 °C. Tar tid, men producerar flytande guld.</li>
                <li><strong style="color: #fff;">Fast Cerveza:</strong> Ett modernt tillvägagångssätt. Pitchad på 13 °C och aktivt rampad till 16.5 °C för att göra klart ölet på halva tiden utan att förlora krispigheten.</li>
            </ul>
        `,

        "hornindal": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Omega OYL-091 Hornindal Kveik</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Unik Kveik-blandning
            </p>
            <p>Om Voss Kveik ger dig apelsiner, ger Hornindal dig en tropisk fruktsallad! Denna norska gårdsblandning stormtrivs i extrem värme och producerar massiva toner av färsk ananas, mango och mandarin.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Tropical Bomb:</strong> Jäser vid vansinniga 35-36 °C. Värmen stressar jästen att kasta ur sig otroliga mängder tropiska frukt-estrar. Perfekt för Hazy IPAs!</li>
                <li><strong style="color: #fff;">Clean Pseudo:</strong> Sänkt till 24-26 °C. Håller tillbaka de tropiska tonerna för en mycket renare, "varjedags"-Pale Ale-profil.</li>
            </ul>
        `,

        "wyeast-3724": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 3724 (Belgian Saison)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> WLP565 (Saison I)
            </p>
            <p>Den legendariska Dupont-stammen. Den producerar den mest komplexa, jordiga, peppriga och kryddiga Saison-profilen i världen. Men den kommer med en stor hake...</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Det ökända stoppet</h4>
            <p>Denna jäst är ökänd för att tvärstanna vid exakt 1.030 gravity och somna. Enda sättet att knuffa den över mållinjen är med extrem värme.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">The Dupont Ramp:</strong> Vår automatiserade räddare! Startar vid 22 °C, men rampar aggressivt upp till brännheta 30 °C vid dag 7. Denna extrema värme förhindrar stoppet och driver ner ölet till en snustorr avslutning.</li>
            </ul>
        `,

        "wlp570": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP570 (Belgian Golden Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Wyeast 1388 (Belgian Strong)
            </p>
            <p>Hämtad från det berömda Duvel-bryggeriet. Till skillnad från Trappist-stammar som kastar mörk frukt, är denna jäst berömd för att producera krispiga toner av päron, äpple och vitpeppar. Den jäser ut otroligt väl och gömmer massiv ABV farligt bra.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Golden Strong:</strong> Startar säkert vid 20 °C för att etablera en ren bas, och vandrar sedan hela vägen upp till 26 °C för att låsa upp de klassiska Duvel-lika estrarna utan att producera skarpa fuselalkoholer.</li>
            </ul>
        `,

        "wyeast-2112": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 2112 (California Lager)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> WLP810 (San Francisco Lager)
            </p>
            <p>Den ikoniska Anchor Steam-jästen! Under Kaliforniens guldrush hade bryggare inte is, så de använde grunda kylskepp för att jäsa lagerjäst vid varma temperaturer. Denna stam utvecklades för att frodas i denna hybridmiljö.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Steam Beer:</strong> Jäser vid 15-17 °C. Skapar en väldigt unik, något träig och milt fruktig lagerprofil som definierar stilen California Common.</li>
                <li><strong style="color: #fff;">Warm Lager:</strong> Pressad till 19 °C. Agerar nästan som en ale-jäst, jäser ut snabbt men behåller en överraskande mängd lager-krispighet.</li>
            </ul>
        `,

        "wlp380": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP380 (Hefeweizen IV)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Wyeast 3333 (German Wheat)
            </p>
            <p>Om WLP300 är "Bananbomben", då är WLP380 "Nejlikamästaren". Denna stam producerar väldigt lite isoamylacetat (banan) och fokuserar istället tungt på kryddiga fenoler och krispiga citrustoner.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Clove Master:</strong> Jäst på den svalare sidan (17-18 °C). Undertrycker bananen helt och lämnar ett vackert kryddigt och uppfriskande veteöl.</li>
                <li><strong style="color: #fff;">Balanced:</strong> Pressad något varmare (19-20 °C) för att låta en liten hint av banan kika fram genom kryddan.</li>
            </ul>
        `,

        "wyeast-1007": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1007 (German Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> K-97 (Torr version), WLP036
            </p>
            <p>En sann tysk "top-cropping" ale-jäst. Den är otroligt robust och jäser strålande rent även nere på 13 °C! Den lämnar en torr, krispig avslutning med mild maltighet, vilket gör den perfekt för Altbier och Kölsch.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Altbier Crisp:</strong> Körs vid 15 °C. Undertrycker fruktighet och garanterar en mjuk, lagerliknande avslutning.</li>
                <li><strong style="color: #fff;">Pseudo Lager:</strong> Nedsläppt hela vägen till 13 °C. Agerar som en lagerjäst, men är klar betydligt snabbare. Behöver en bra kallkrasch för att klarna upp!</li>
            </ul>
        `,

        "s-189": `
            <h3 style="color: var(--accent-color); margin-top: 0;">SafLager S-189 (The Swiss Precision)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> Wyeast 2068X
            </p>
            <p>Från Hürlimann-bryggeriet i Schweiz, detta är en otroligt elegant lagerjäst. Medan W-34/70 är neutral, tar S-189 fram en vacker, subtil blommig och örtig ton som får europeiska pilsners att sjunga.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Den rena krispigheten (9-15 °C)</h4>
            <p>Den jäser extremt effektivt men behöver strikt temperaturkontroll för att förhindra estrar. Den älskar en lång, kall primärfas för att utveckla sin signaturkrispighet.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Swiss Alpine:</strong> Hålls stadigt på 10.5 °C i 12 dagar. En långsam, noggrant kontrollerad primärjäsning följt av en försiktig D-rast vid 15 °C. Lämnar ett omöjligt rent öl.</li>
                <li><strong style="color: #fff;">Fast European:</strong> Börja på 12 °C och rampa till 16 °C vid dag 7. Kapar bort dagar av jästid medan den fortfarande bibehåller en krispig, professionell profil.</li>
            </ul>
        `,

        "be-134": `
            <h3 style="color: var(--accent-color); margin-top: 0;">SafAle BE-134 (The Bone-Dry Saison)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> Wyeast 3711 (Liknande utjäsning)
            </p>
            <p>Ett sant monster för torra Saisons! Denna diastatiska jäst kommer att äta absolut varenda komplext socker i sin väg, och lämnar ett öl som är otroligt torrt, kraftigt kolsyrat och exploderar med toner av nejlika, citrus och peppar.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Den höga värmetröskeln (18-28 °C)</h4>
            <p>Liksom de flesta autentiska Saisons stormtrivs den när temperaturen tillåts stiga naturligt. Att bromsa den med kalla temperaturer kommer att dämpa de komplexa fenolerna.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Farmhouse Free-Rise:</strong> Börja vid 19 °C för att etablera en ren bas, använd sedan appen för att aggressivt rampa till 26 °C. Tvingar jästen att kasta ur sig massiva kryddiga estrar samtidigt som ölet torkar ner till 1.000 FG.</li>
            </ul>
        `,

        "koln": `
            <h3 style="color: var(--accent-color); margin-top: 0;">LalBrew Köln (The Cologne Classic)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> WLP029, Wyeast 2565
            </p>
            <p>Äntligen en äkta Kölsch-stam i torr form! Denna jäst jäser som en ale men konditioneras som en lager. Den producerar en strålande ren, milt fruktig (subtil äpple/päron) profil som är avgörande för en traditionell Kölsch.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Lagringsfasen</h4>
            <p>Den är ganska pudrig under aktiv jäsning. En dedikerad, kall lagringsfas är absolut obligatorisk för att få jästen att falla och uppnå den strålande gyllene klarheten.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Authentic Kölsch:</strong> Primär vid 15 °C. Undertrycker tunga ale-estrar. Efter en kort D-rast vid 18 °C kraschas den till 2 °C för en strikt 14-dagars lagringsfas.</li>
                <li><strong style="color: #fff;">Crisp Blonde:</strong> Pressad något varmare (18 °C). Fungerar som ett fantastiskt, snabbklarnande alternativ för krispiga American Blonde ales.</li>
            </ul>
        `,

        "m44": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Mangrove Jack's M44 (US West Coast)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> WLP090, BRY-97
            </p>
            <p>Älskad av många professionella bryggare framför US-05 för dess förmåga att avsluta ännu torrare och renare. M44 faller ur suspensionen vackert och lämnar en knivskarp West Coast IPA där humlebeskan tar plats i centrum.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Det sega uppvaknandet</h4>
            <p>Rör inte termostaten! M44 är notoriskt känd för att ta upp till 36 timmar innan den visar aktivt bubblande i jäsröret. Ha tålamod; när den väl börjar är det ett kraftpaket.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Patience & Crisp:</strong> Låst stadigt vid 18.5 °C i 7 dagar för att garantera noll esterproduktion, följt av en spik till 21 °C för att krama ut de sista gravity-punkterna.</li>
            </ul>
        `,

        "m15": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Mangrove Jack's M15 (Empire Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Torrjäst<br>
                <strong>Motsvarigheter:</strong> Windsor, WLP002
            </p>
            <p>Kungen av mörka öl. M15 lämnar en massiv, rik kropp och en överraskande hög final gravity. Den producerar vackra toner av mörk frukt, vilket gör den till den ultimata torrjästen för Imperial Stouts, Porters och Barleywines.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Malty Monster:</strong> Jäser vid 19 °C. Garanterar en rik, viskös munkänsla och förhindrar att de mörkrostade malterna smakar tunt eller strävt.</li>
                <li><strong style="color: #fff;">Dark Fruit:</strong> Rampar upp till 22 °C under primärjäsningen för att stressa fram komplexa estrar av fikon och russin för att komplettera en tung Stout.</li>
            </ul>
        `,

        "hothead": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Omega OYL-057 HotHead Kveik</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Stranda Kveik
            </p>
            <p>En högst unik Kveik-stam! Till skillnad från Voss (apelsin) eller Hornindal (tropisk), producerar HotHead en underbart mjuk profil av söt honung och mogen mango. Och trogen sitt namn hanterar den brännande hetta utan att blinka.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Summer Heat:</strong> Ställ in den på 34 °C och glöm bort den. Jäser ut fullständigt på 3 dagar och lämnar massiva honung-mango-estrar. Perfekt för en somrig Pale Ale.</li>
                <li><strong style="color: #fff;">Restrained Clean:</strong> Nedsläppt till 22 °C. Långsammare, men ger en otroligt neutral profil som fungerar för nästan vilken ale-stil som helst.</li>
            </ul>
        `,
        "imperial-l13": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Imperial L13 Global (The Macro Master)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> WLP830, Heineken/Carlsberg-stammen
            </p>
            <p>Om du vill klona din europeiska favorit-macrolager, är detta jästen. Den är extremt förlåtande, flockar väldigt bra, och producerar en omöjligt ren lagerprofil med massappeal.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Macro Clean:</strong> Primär vid 11 °C. En stadig, förutsägbar jäsning. En kort D-rast vid 16 °C är allt som behövs innan en standard lagringsfas.</li>
                <li><strong style="color: #fff;">International Quick:</strong> Pressad något varmare (14 °C) för att efterlikna moderna massproduktionshastigheter utan att generera oönskade estrar.</li>
            </ul>
        `,

        "wyeast-3726": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 3726 (Farmhouse Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Blaugies-stammen, Imperial B56
            </p>
            <p>Det överlägsna alternativet till Dupont-stammen! Den producerar samma magnifika, peppriga, rustika Saison-profil, men den är en obarmhärtig arbetare som absolut ALDRIG stannar av halvvägs.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Rustic Tart:</strong> Startar vid 21 °C och fri-rampar till 27 °C. Den behöver inte Duponts extrema hetta för att bli klar, men värmen pressar fram en vacker, syrlig, jordig kryddighet.</li>
            </ul>
        `,

        "wlp005": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP005 (British Ale / Ringwood)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Wyeast 1187
            </p>
            <p>En legendarisk engelsk stam. Den producerar komplexa, maltiga och otroligt fruktiga öl. Den kräver dock mycket syre i början och är en kraftig diacetylproducent, så den kräver respekt och exakt temperaturkontroll.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">English Cellar:</strong> Pitcha vid 19 °C för att kontrollera de tunga fruktestrarna, följt av en obligatorisk, förlängd diacetylrast vid 21.5 °C i 3-4 dagar för att städa upp smörkolan.</li>
            </ul>
        `,

        "wlp815": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP815 (Belgian Lager)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Stella Artois / Jupiler-stammen
            </p>
            <p>En väldigt underskattad pärla. Detta är jästen bakom de kända belgiska premium-lagerna. Den erbjuder en distinkt europeisk profil—krispig och ren, men med en liten, sofistikerad hint av fruktighet som skiljer den från tyska stammar.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Continental Lager:</strong> Primär vid 11.5 °C. Extraherar de subtila fruktiga nyanserna perfekt. Kräver en ordentlig kallkrasch och lagring för att uppnå premium-klarhet.</li>
            </ul>
        `,

        "wlp023": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP023 (Burton Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> Wyeast 1275, Imperial A09
            </p>
            <p>Från den historiska bryggarstaden Burton-on-Trent. Denna jäst är berömd för att producera en distinkt, läcker karaktär av äpple, päron och klöverhonung. Den är det absolut perfekta valet för en engelsk IPA eller en ESB.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Burton Snatch:</strong> Jäser vid 20 °C för att locka fram de karakteristiska äppel- och honungsestrarna. Passar oklanderligt med hög-sulfat-vattenprofiler.</li>
            </ul>
        `,

        "wyeast-1028": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1028 (London Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flytande jäst<br>
                <strong>Motsvarigheter:</strong> WLP013 (Liknande rik profil)
            </p>
            <p>En underbart komplex och mineralisk jäst. Den har en torr avslutning men lämnar en rik, träig och nästan jordig profil som balanserar tungt rostade malter felfritt. Ett absolut toppval för engelska Porters och Stouts.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-profiler:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Minerally Stout:</strong> Låst på 18.5 °C. Undertrycker tung fruktighet för att låta de mineraliska, träiga tonerna skina igenom vid sidan av de mörka malterna.</li>
            </ul>
        `
    },
de: {

    "us-05": `
            <h3 style="color: var(--accent-color); margin-top: 0;">SafAle US-05 (American Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> WLP001 (White Labs), Wyeast 1056, M44
            </p>
            <p>Der ungekrönte König der Brauwelt, wenn es um saubere, knackige American Ales und West Coast IPAs geht. Ein extrem zuverlässiges Arbeitstier, das Malz und Hopfen den Vortritt lässt.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Der Temperaturbereich (15-22 °C)</h4>
            <p>Um dieses ikonische amerikanische Profil zu erhalten, wollen wir bei etwa 18 °C beginnen. Wenn wir zu heiß werden, können sich Pfirsichester bilden, die wir in einem sauberen IPA vermeiden wollen.</p>
            <h4 style="margin-top: 15px; color: #ccc;">2. Mittlere Flokkulation (Geduld!)</h4>
            <p>US-05 schwebt gerne ziemlich lange im Bier. Das ist großartig für die Gärung, bedeutet aber, dass das Bier lange trüb bleiben kann, wenn wir es am Ende nicht stark herunterkühlen (Cold Crash).</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard / Low Ester:</strong> Hält die Temperatur bei 18 °C für eine extrem saubere Arbeit. Beendet mit einer Diacetylrast bei 21 °C.</li>
                <li><strong style="color: #fff;">West Coast Crisp:</strong> Beginnt kühl bei 18 °C für maximale Sauberkeit und steigt dann aggressiv auf 22 °C an. Hinterlässt ein knochentrockenes Finish.</li>
                <li><strong style="color: #fff;">Pseudo-Lager:</strong> Gärt an der absoluten Untergrenze der Toleranz (15 °C). Unterdrückt alle Ale-Eigenschaften.</li>
            </ul>
        `,
        "s-04": `
            <h3 style="color: var(--accent-color); margin-top: 0;">SafAle S-04 (English Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> WLP007 (White Labs), Wyeast 1098
            </p>
            <p>Der britische Sprinter! Geliebt für seine Fähigkeit, fantastische fruchtige Ester zu bilden, und für seine brutale Geschwindigkeit. Die erste Wahl für Bitters, Porters und Stouts.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Der Temperaturbereich (15-20 °C)</h4>
            <p>S-04 liebt es, Ester zu erzeugen (Marmelade, dunkle Beeren). Wenn sie anfangs zu heiß wird, verwandelt sie sich in eine unkontrollierte Fruchtbombe. Starten Sie strikt bei 18 °C für Eleganz.</p>
            <h4 style="margin-top: 15px; color: #ccc;">2. Extreme Flokkulation (Der Ziegelstein)</h4>
            <p>Wenn S-04 sich für fertig hält, fällt sie zu Boden und bildet einen so festen Hefekuchen, dass man fast hineinschneiden kann. Wir müssen sie aufwärmen, bevor sie einschläft!</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard / Fruity:</strong> Startet wie ein Güterzug bei 18 °C, um kontrollierte Fruchtigkeit zu erzeugen, steigt dann auf 21 °C für die Diacetylrast.</li>
                <li><strong style="color: #fff;">Dark & Malty (18°C):</strong> Konstant bei 18 °C gesperrt. Dies unterdrückt fruchtigere Ester gerade genug, damit Kaffee- und Schokoladennoten im Mittelpunkt stehen können.</li>
            </ul>
        `,
        "w-34-70": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Saflager W-34/70 (German Lager)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> WLP830 (White Labs), Wyeast 2124
            </p>
            <p>Der König der untergärigen Hefen! Dieser berühmte Stamm aus Weihenstephan in Deutschland ist wahrscheinlich die am häufigsten verwendete Lagerhefe der Welt.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Die Kälte ist dein Freund (9-15 °C)</h4>
            <p>Indem man sie am unteren Ende ihrer Toleranz (ca. 10-12 °C) gären lässt, unterdrückt man die Produktion von fruchtigen Estern und Schwefel und verleiht dem Bier seinen sauberen Charakter.</p>
            <h4 style="margin-top: 15px; color: #ccc;">2. Diacetyl-Warnung</h4>
            <p>Weil sie kalt und langsam arbeitet, ist Lagerhefe berüchtigt dafür, Diacetyl (schmeckt wie Buttertoffee) zu hinterlassen. Eine Temperaturerhöhung am Ende ist kein Tipp – sie ist Pflicht!</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Traditional Lager:</strong> Hält fest bei 11 °C. Steigt dann auf 16 °C für die Diacetylrast vor einer massiven kalten Lagerphase.</li>
                <li><strong style="color: #fff;">Quick Lager:</strong> Der moderne Ansatz. Anstellen bei 13 °C für schnelleres Hefewachstum, beendet mit einer warmen Diacetylrast an Tag 10.</li>
            </ul>
        `,
        "be-256": `
            <h3 style="color: var(--accent-color); margin-top: 0;">SafAle BE-256 (The Abbey Machine)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> WLP530, Wyeast 3787
            </p>
            <p>Früher bekannt als "Abbaye". Dies ist eine schnelle und brutale belgische Hefe, die hochprozentige Würzen liebt. Perfekt für dunkle, malzige Belgier wie Dubbel und Tripel.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Schnell und stark (15-25 °C)</h4>
            <p>Sie verträgt sehr hohen Alkohol. Aber wenn Sie sie zu heiß starten, kann sie unerwünschte Lösungsmittelnoten (Fuselalkohole) abgeben. Der Schlüssel ist ein strikter Start, der später losgelassen wird.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Belgian Strong:</strong> Startet kühl bei 18 °C. Die Hefe ist anfangs aggressiv, also halten wir die Bestie zurück! Dann lassen wir die Maschine auf 24 °C hochfahren.</li>
            </ul>
        `,
        "wb-06": `
            <h3 style="color: var(--accent-color); margin-top: 0;">SafAle WB-06 (The Wheat Beer Master)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> WLP380, M20
            </p>
            <p>Die klassische deutsche Weißbierhefe in Trockenform! Wollen Sie ein trübes, goldenes Hefeweizen, das nach Schaumbananen und Nelken riecht? Dann ist dies die richtige.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Sie sitzen am Steuer (18-24 °C)</h4>
            <p>In Weizenbieren IST die Hefe der Geschmack. Niedrige Temperaturen (18-19 °C) ergeben viele Phenole (Nelke). Hohe Temperaturen (22-24 °C) ergeben extreme Mengen an Isoamylacetat (Banane).</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Banana Bomb:</strong> Starten Sie heiß! Beginnt bei 22 °C und steigt auf 23 °C an, um massive Mengen an Isoamylacetat (Banane) freizusetzen.</li>
                <li><strong style="color: #fff;">Balanced Clove:</strong> Wird konstant niedriger gehalten (18-20 °C). Die Banane tritt in den Hintergrund, wodurch der würzige Nelkencharakter dominieren kann.</li>
            </ul>
        `,

    "verdant": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Verdant IPA (The Juice Machine)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> Wyeast 1318 (London Ale III)
            </p>
            <p>Entwickelt in Zusammenarbeit mit der Verdant Brewing Co., ist dies die ultimative Hefe für NEIPA und Hazy IPA. Sie produziert massive Mengen an Aprikosen- und Vanilleestern, die modernen Hopfen perfekt unterstützen.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Meister der Biotransformation</h4>
            <p>Diese Hefe ist phänomenal darin, während der aktiven Gärung Trockenhopfen aufzunehmen und die Hopfenöle chemisch in noch fruchtigere Aromen umzuwandeln.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Juicy NEIPA:</strong> Startet sicher bei 19 °C, um eine solide, fruchtige Basis ohne Fuselalkohole aufzubauen. Dann wandert die Temperatur auf 22 °C, um die letzten saftigen Ester herauszukitzeln.</li>
            </ul>
            <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-Tipp: Sie flokkuliert ziemlich schlecht, was GENAU das ist, was wir wollen, um die Trübung ("The Haze") zu erhalten.</i></p>
        `,

        "voss": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Voss Kveik (The Viking)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> WLP4000, Omega OYL-061
            </p>
            <p>Das norwegische Kraftpaket, das absolut alle Regeln bricht, die wir über das Brauen gelernt haben. Sie gärt glühend heiß, rasend schnell und hinterlässt saubere, leichte Orangennoten.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Extreme Hitze (30-40 °C)</h4>
            <p>Während andere Hefen bei 38 °C gestorben wären oder untrinkbaren Raketentreibstoff erzeugt hätten, gedeiht Voss dort. Sie braucht keinen Kühlschrank, nur eine Heizmatte und viel Hefenahrung!</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Hot & Fast:</strong> Gärt bei sengenden 38 °C! Die Gärung ist extrem heftig, wirft massive Orangenester ab und ist in nur 3-4 Tagen vor dem Kühlen vollständig abgeschlossen.</li>
                <li><strong style="color: #fff;">Clean Pseudo:</strong> Auf "normale" Sommertemperaturen (25-28 °C) abgesenkt. Gärt langsamer, hinterlässt aber ein schockierend sauberes Profil ohne die intensiven Zitrusnoten.</li>
            </ul>
        `,

        "nottingham": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Nottingham (The Workhorse)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> WLP039, M36
            </p>
            <p>Vielleicht die vielseitigste Hefe, die je kultiviert wurde. "Notty" kümmert es nicht, was Sie ihr vorwerfen. Imperial Stout? Yep. Cider? Absolut. IPA? Kein Problem. Sie ist extrem neutral, zuverlässig und räumt vorbildlich hinter sich auf.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Temperatur-Chamäleon (10-22 °C)</h4>
            <p>Im oberen Bereich verhält sie sich wie eine saubere Ale-Hefe. Zieht man sie auf 12-14 °C herunter? Dann wird sie im Grunde zu einer Cheat-Code-Lagerhefe für unglaublich knackige Pseudo-Lager!</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard Ale:</strong> Hält 18 °C für eine saubere und schnelle Hauptgärung, steigt dann auf 20-21 °C. Auch Arbeitspferde brauchen eine Diacetylrast, um das Buttertoffee zu verstecken.</li>
                <li><strong style="color: #fff;">Pseudo Lager:</strong> Drückt "Notty" auf ihren thermischen Boden bei 14 °C. Bei dieser Temperatur verhält sie sich nicht mehr wie eine Ale-Hefe und produziert ein unglaublich knackiges, sauberes Pseudo-Lager ohne Schwefel.</li>
            </ul>
        `,

        "belle-saison": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Belle Saison (The Dry Belgian)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> Wyeast 3711 (French Saison)
            </p>
            <p>Saisonhefe ist wild, ungezähmt und fantastisch. Entwickelt, um jeden einzelnen Zucker zu fressen, den sie findet, und ein knochentrockenes, pfeffriges Bier zu hinterlassen.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Diastaticus (Frisst alles)</h4>
            <p>Diese Hefe trägt ein Gen (STA1), das es ihr ermöglicht, komplexe Zucker abzubauen. Das Ergebnis? Ein Bier, das bis auf 1.000 FG heruntergären kann.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Dry & Peppery:</strong> Beginnt bei etwa 20 °C, damit die Gärung in Gang kommt, ohne lösungsmittelartig zu werden. Dann nehmen wir die Begrenzer ab! Sie steigt frei bis auf 28 °C an, um das maximale Geschmacksprofil aufzubauen.</li>
            </ul>
        `,

        "t-58": `
            <h3 style="color: var(--accent-color); margin-top: 0;">SafAle T-58 (The Peppery Companion)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> WLP570 (Ähnliches Gewürzprofil)
            </p>
            <p>Eine wirklich einzigartige, ester- und phenolgetriebene Hefe. Wenn BE-256 dunkle Frucht ist, dann ist T-58 schwarzer Pfeffer und Gewürze. Wird oft in komplexen belgischen Ales oder Trappistenbieren verwendet.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Hinterlässt Restsüße (15-24 °C)</h4>
            <p>T-58 gärt nicht so stark aus wie viele andere Belgier. Dies hinterlässt etwas Restsüße und Körper im Bier und balanciert die scharfen, pfeffrigen Noten aus.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Spicy Belgian:</strong> Startet bei 18 °C. Die Phenole werden ohnehin in Massen produziert. Steigt dann langsam auf 22 °C an, um die Aromen abzurunden und sicherzustellen, dass die Gärung nicht zu früh stoppt.</li>
            </ul>
        `,

        "s-23": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Saflager S-23 (The Fruity Bohemian)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> WLP802, Wyeast 2278 (Tschechische/Böhmische Wurzeln)
            </p>
            <p>Stammt aus dem berühmten VLB-Institut in Berlin und ist das wilde Kind der Lagerhefen. Während W-34/70 laserfokussiert und sauber ist, wird S-23 für die Produktion von etwas fruchtigeren und esterigen Noten geliebt, was sie fantastisch für böhmische Pilsner oder Baltische Porter macht.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Das Esterprofil (9-15 °C)</h4>
            <p>Wenn Sie diese am wärmeren Ende des Lagerspektrums (13-15 °C) gären lassen, gibt sie wunderschöne, subtile Noten von Apfel und Birne ab, die unglaublich gut mit würzigem Saazer Hopfen harmonieren.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Crisp German (10 °C):</strong> Halten Sie sie kalt und stabil für ein traditionelles, sauberes Profil. D-Rast bei 15 °C an Tag 10.</li>
                <li><strong style="color: #fff;">Bohemian Fruit / Fruity Lager:</strong> Starten Sie etwas wärmer (12-13 °C), um diese einzigartigen S-23-Ester freizuschalten. Perfekt für ein malzbetontes tschechisches Amber.</li>
            </ul>
            <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-Tipp: S-23 kann manchmal Schwierigkeiten haben, die letzten Restextrakte abzubauen. Eine solide, warme Diacetylrast ist entscheidend, um ihr über die Ziellinie zu helfen.</i></p>
        `,

        "s-33": `
            <h3 style="color: var(--accent-color); margin-top: 0;">SafAle S-33 (The Body Booster)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> WLP006 (Bedford British)
            </p>
            <p>Oft missverstanden, ist S-33 eine Geheimwaffe. Sie ist nicht in der Lage, komplexe Malzzucker zu essen (Maltotriose-negativ), was bedeutet, dass sie Ihr Bier IMMER dick, vollmundig und leicht süßlich hinterlässt.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Nicht nur für Belgier</h4>
            <p>Obwohl sie als belgische Ale-Hefe bezeichnet wird, produziert sie nur sehr wenige Phenole (Gewürze). Stattdessen wird sie zunehmend in Hazy IPAs und Milk Stouts verwendet, nur wegen ihrer Fähigkeit, ein unglaubliches Mundgefühl aufzubauen.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Thick Ale (18 °C):</strong> Kühl halten, um Ester zu minimieren. Sie erhalten ein üppiges, dickes dunkles Bier mit großartiger Schaumstabilität. Oder verwenden Sie es als Cheat-Code für dicke NEIPAs!</li>
            </ul>
            <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-Tipp: Keine Panik, wenn Ihr Endvergärungsgrad hoch ist (z. B. 1.020). S-33 kann es einfach nicht weiter vergären. Sie ist fertig!</i></p>
        `,

        "diamond": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Diamond (The Munich Master)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> WLP830, Wyeast 2124 (Weihenstephaner Abstammung)
            </p>
            <p>Eine echte deutsche Lagerhefe, die aus dem Doemens-Institut in München stammt. Diamond ist bekannt für ihre robuste Natur und ihre Fähigkeit, unglaublich saubere, knackige und authentische deutsche Lagerbiere ohne großen Aufwand zu produzieren.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Makellos und professionell</h4>
            <p>Während einige Lagerhefen während der Gärung Schwefel (Nashornfürze) ausstoßen können, ist Diamond im Allgemeinen sehr brav und produziert ein hochglanzpoliertes Bier, das das Pilsnermalz glänzen lässt.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Clean Lager / Munich Crisp:</strong> Der traditionelle Weg. 10 °C für 7-10 Tage halten, gefolgt von einer strengen Diacetylrast bei 16 °C.</li>
                <li><strong style="color: #fff;">Fast Helles (14 °C):</strong> Diamond verarbeitet etwas wärmere Temperaturen bemerkenswert gut. Lassen Sie sie bei 14 °C laufen, um Ihre Gärzeit zu halbieren!</li>
            </ul>
            <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-Tipp: Diamond hat einen fantastischen Vergärungsgrad. Sie wird ein Pilsner wunderschön austrocknen und es extrem erfrischend machen.</i></p>
        `,

        "novalager": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand NovaLager (The Bio-Engineered Miracle)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> Einzigartige Hybride (Saccharomyces pastorianus Abstammung)
            </p>
            <p>Ein echter Game-Changer. NovaLager ist eine moderne Hybridhefe, die so konzipiert wurde, dass sie wie ein Ale gärt, aber genau wie ein sauberes Lager schmeckt.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Die Regeln brechen (10-20 °C)</h4>
            <p>Sie brauchen keine 5 Wochen und keinen eigenen Lagerkühlschrank mehr. NovaLager gärt sauber bei 18-20 °C mit geringer Esterproduktion, ohne Schwefel (H2S) und mit sehr geringem Diacetyl.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">The Cheat Code (18 °C):</strong> Behandeln Sie sie wie ein Ale! Hauptgärung bei 18 °C für 5 Tage, dann 2 Tage auf 20 °C erhöhen, um aufzuräumen, und Cold Crash. Ein sauberes Lagerbier in einer Woche!</li>
                <li><strong style="color: #fff;">Modern Cold (14 °C):</strong> Wenn Sie absolute, makellose Perfektion wollen, gären Sie sie bei 14 °C. Sie ist immer noch deutlich schneller als traditionelle Stämme, liefert aber preisgekrönte Knackigkeit.</li>
            </ul>
            <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-Tipp: Sie hat einen sehr hohen Vergärungsgrad. Stellen Sie sich darauf ein, dass Ihr Bier deutlich austrocknet, wodurch die Hopfenbittere schärfer wirkt.</i></p>
        `,

        "wlp001": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP001 California Ale (The West Coast King)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Wyeast 1056, US-05
            </p>
            <p>Das Kronjuwel von White Labs! Dies ist der ursprüngliche Stamm, der die amerikanische Craft-Beer-Revolution gestartet hat. Gelobt für seine unvergleichliche Sauberkeit.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Den Hopfen singen lassen (20-23 °C)</h4>
            <p>Diese Hefe hat nur eine einzige Aufgabe: den Zucker wegzugären und dann in den Hintergrund zu treten, damit Ihr teurer amerikanischer Hopfen die Führung übernehmen kann.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> Knackiger Start bei ca. 19,5 °C. Wir wollen null Ester und null Fuselalkohole. Dann für eine Diacetylrast auf 22 °C hochgehen. WLP001 ist gut im Aufräumen, aber ein bisschen Hitze hilft.</li>
                <li><strong style="color: #fff;">Low Ester:</strong> Senkt die Temperatur auf 18 °C. Die Gärung dauert etwas länger, liefert aber ein unglaublich sauberes, lagerähnliches Ale-Profil.</li>
            </ul>
        `,

        "wlp300": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP300 Hefeweizen (The Banana Bomb)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Wyeast 3068, M20
            </p>
            <p>Dies ist der flüssige Goldstandard für deutsches Weizenbier. Im Gegensatz zu trockenen Weizenhefen ist diese dafür berühmt, massive, üppige Mengen an Bananenaroma zu produzieren.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Temperament und Temperatur (20-22 °C)</h4>
            <p>WLP300 über die 20er-Marke zu drücken, ist der Trick, um die fruchtigen Isoamylacetat-Ester (Banane) freizuschalten und die Nelke zu unterdrücken.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> Fest bei 19 °C gehalten. Konzentriert sich auf die würzigen Nelkenphenole und hält die Bananenester subtil und ausgewogen.</li>
                <li><strong style="color: #fff;">Classic:</strong> Warm gären! Sperren Sie die Temperatur bei 20 °C und steigen Sie auf 22 °C an, um die Bananenparty beginnen zu lassen. Zur Konditionierung auf Serviertemperatur (ca. 4 °C) absenken.</li>
            </ul>
        `,
"wyeast-1968": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1968 (London ESB Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> WLP002 (Fuller's)
            </p>
            <p>Der legendäre Fuller’s-Stamm! Diese Hefe ist berühmt dafür, eine wunderbare, malzige Restsüße zu hinterlassen und so schnell aus der Schwebe zu fallen, dass sie wie Hüttenkäse aussieht.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Extreme Flokkulation (Entscheidend!)</h4>
            <p>Weil sie wie ein Stein fällt, sobald sie sich "fertig" fühlt, müssen Sie aktiv darum kämpfen, sie wach zu halten. Wenn sie zu früh einschläft, schmeckt Ihr Bier nach Buttertoffee (Diacetyl).</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard / ESB Clean:</strong> Beginnt kühler (18,5-19 °C), damit sich die Hefe auf die Malzigkeit konzentrieren kann, ohne zu viel Frucht abzuwerfen. Eine solide Diacetylrast bei 21 °C räumt das Buttertoffee auf.</li>
                <li><strong style="color: #fff;">High Ester / ESB Fruity:</strong> Für eine echte britische Fruchtbombe! Wir stellen warm an (21-22 °C) und lassen sie auf 23 °C steigen. Erwarten Sie massive Noten von Marmelade und Konfitüre.</li>
                <li><strong style="color: #fff;">Low Ester:</strong> Der Cheat-Code für ein super sauberes Profil. Gärt niedrig bei 18 °C und kühlt sanft ab (Soft Crash), um Stress für die Hefe zu vermeiden.</li>
            </ul>
            <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-Tipp: Diese Hefe klärt das Bier während des Cold Crashs so schnell, dass Sie selten Schönungsmittel benötigen!</i></p>
        `,

        "wlp920": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP920 (Old Bavarian Lager)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Wyeast 2206 (Bavarian Lager)
            </p>
            <p>Ein Klassiker aus Süddeutschland, bekannt für ein malziges Profil mit einem leichten Hauch von Estern, was ihn perfekt für Oktoberfestbiere, Böcke und dunkle Lagerbiere macht.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Der Malzbewahrer</h4>
            <p>Indem wir die Gärung kalt und konstant halten, verhindern wir, dass die Hefe Nebenprodukte erzeugt, die sonst die zarten Röst- und Karamellnoten der Münchner und Wiener Malze überdecken würden.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Traditional Lager:</strong> Der Old-School-Weg. Startet niedrig bei 10,5 °C für volle 10 Tage, gefolgt von einer langsamen D-Rast und einer massiven 28-tägigen kalten Lagerphase.</li>
                <li><strong style="color: #fff;">Quick Lager:</strong> Der moderne Ansatz. Anstellen bei 12,5 °C für schnelleres Hefewachstum, beendet die Aufräumarbeiten an Tag 10 und halbiert die Lagerzeit.</li>
                <li><strong style="color: #fff;">Brulosophy:</strong> Der Hack für warmvergorene Lagerbiere! Läuft bei Ale-Temperaturen (19 °C). Überraschend sauber, aber in einem Bruchteil der Zeit fertig.</li>
            </ul>
        `,

        "imperial-b45": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Imperial Yeast B45 (Gnome)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> WLP550, Wyeast 3522 (Chouffe)
            </p>
            <p>Eine erstaunliche klassische belgische Hefe, die dafür bekannt ist, wunderschöne Birnen- und Pfirsichester gepaart mit einer leichten, pfeffrigen Würze (Phenole) zu erzeugen.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Die belgische Rampe</h4>
            <p>Belgische Mönche benutzten historisch gesehen keine Kühlanlagen. Sie stellten die Hefe an und ließen die natürliche exotherme Wärme der Gärung die Temperatur in die Höhe treiben. Wir wollen dies nachahmen, um den wahren belgischen Charakter freizuschalten!</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Classic:</strong> Startet bei 20 °C und steigt frei auf 23,5 °C. Dies ist der Sweet Spot, um die Birnenester mit den pfeffrigen Phenolen auszubalancieren.</li>
                <li><strong style="color: #fff;">Spicy & High Ester:</strong> Wir treiben die Hefe hart und heiß an! Ein Start bei 21-22 °C und ein Anstieg auf 25 °C zwingt die Hefe, massive Mengen komplexer Aromen freizusetzen. Perfekt für ein Belgian Strong.</li>
                <li><strong style="color: #fff;">Standard & Low Ester:</strong> Zurückhaltend (18-19 °C). Hält die Hefe ruhig für ein subtileres belgisches Blonde.</li>
            </ul>
        `,

        "wyeast-1084": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1084 (Irish Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> WLP004 (Guinness)
            </p>
            <p>Der Guinness-Stamm! Ein wahres Arbeitspferd aus Dublin, das unglaublich vielseitig ist. Es bietet ein reiches, malziges Profil mit einem dezenten Hauch dunkler Frucht und einem Touch Diacetyl, der perfekt in dunklen Bieren funktioniert.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Liebt dunkle Malze</h4>
            <p>Diese Hefe wurde buchstäblich dafür geboren, geröstete Gerste zu vergären. Sie hinterlässt gerade genug Restkörper, damit sich ein Dry Stout cremig statt dünn anfühlt.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Dry Stout:</strong> Startet bei knackigen 18 °C und steigt auf 20 °C. Dies unterdrückt Fruchtigkeit und lässt die Kaffee- und Schokoladennoten des Malzes im Mittelpunkt stehen.</li>
                <li><strong style="color: #fff;">Red/Malty & High Ester:</strong> Läuft wärmer (20-21,5 °C), um diese herrlichen marmeladigen, dunklen Beerenester herauszulocken, die ein Irish Red Ale so besonders machen.</li>
                <li><strong style="color: #fff;">Standard & Low Ester:</strong> Eine fantastische, neutrale Basis, wenn Sie diese Hefe für amerikanische Stile oder Porters verwenden möchten.</li>
            </ul>
        `,

        "wyeast-3944": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 3944 (Belgian Witbier)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> WLP400 (Hoegaarden)
            </p>
            <p>Der König der Weizenbiere! Bekannt für enormen Charakter, produziert er eine komplexe Mischung aus würzigen Phenolen (Pfeffer/Nelke) und fruchtigen Estern (Banane/Zitrus).</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Halten Sie es trüb</h4>
            <p>Diese Hefe weigert sich abzusinken, und genau das wollen wir! Wir wollen, dass die Hefe- und Weizenproteine für dieses milchige, weiße Aussehen in der Schwebe bleiben.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> Strikt bei 19 °C gehalten. Die Fruchtigkeit tritt in den Hintergrund, und die Nelken-/Pfefferphenole werden zum Star der Show.</li>
                <li><strong style="color: #fff;">Classic Wit:</strong> Ein ausgewogener Start bei 18 °C, der auf 21,5 °C ansteigt. Beachten Sie, dass die "Condition"-Phase bei 6 °C statt nahe dem Gefrierpunkt liegt? Das verhindert, dass das Bier zu sehr aufklart!</li>
                <li><strong style="color: #fff;">Summer Wit & High Ester:</strong> Wärmer getrieben (20-23 °C). Erwarten Sie massive Mengen an Zitrusfrüchten, Orangenschale und Banane.</li>
            </ul>
        `,

        "wlp833": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP833 (German Bock Lager)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Wyeast 2487 (Ayinger)
            </p>
            <p>Das Schwergewicht von Ayinger! Der absolute König der Malzigkeit. Es hinterlässt eine fantastische malzige Süße und einen vollen Körper, was es zur offensichtlichen Wahl für Böcke, Doppelböcke und Märzen macht.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Der lange Schlaf</h4>
            <p>Bock-Hefe kann stur und langsam sein. Sie braucht Zeit, um hochprozentige Würzen richtig zu vergären, ohne Raketentreibstoff-Fuselalkohole zu erzeugen.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Traditional Lager:</strong> Läuft etwas wärmer bei 11 °C, um die Gärung zu beschleunigen, ohne das saubere, malzige Profil zu opfern.</li>
                <li><strong style="color: #fff;">Trad. Bock:</strong> Der authentische Ansatz. Eine kühle Hauptgärung bei 10 °C, eine solide D-Rast bei 16 °C und dann eine zermürbende 35-tägige Lagerphase, um flüssige Perfektion zu erreichen.</li>
                <li><strong style="color: #fff;">Fast Bock:</strong> Wenn Sie nicht warten können. Anstellen bei 12 °C, Erwärmung auf 17 °C. Beendet die Arbeit in etwas mehr als drei Wochen, liefert aber immer noch ein massives Malzrückgrat.</li>
            </ul>
        `,

        "wlp007": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP007 (Dry English Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> S-04, Wyeast 1098 (Whitbread)
            </p>
            <p>Eine wärmesuchende Rakete! Bekannt als "Arbeitspferd"-Hefe. Sie ist unglaublich schnell, gärt sehr trocken aus und fällt wie ein Stein, wenn sie fertig ist.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Die Bestie zähmen</h4>
            <p>Weil 007 so heftig gärt, erzeugt sie intensive innere Hitze. Ihr Kühlschrank wird in den ersten 48 Stunden hart arbeiten, um die Temperatur unten zu halten, um lösungsmittelartige Aromen zu vermeiden.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">West Coast & Standard:</strong> Sperrt die Bestie bei 18,5-19 °C ein. Bei diesen kühleren Temperaturen verhält sich WLP007 fast genau wie eine saubere American Ale Hefe, was sie perfekt für trockene IPAs macht.</li>
                <li><strong style="color: #fff;">Monster & High Ester:</strong> Start bei 20-21 °C. Wenn Sie ein massives Imperial Stout oder Barleywine brauen, gibt dieses Profil der Hefe die Hitze, die sie braucht, um den hohen Alkohol zu überleben, während sie schöne dunkle Fruchtester abwirft.</li>
            </ul>
        `,

        "wyeast-1318": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1318 (London Ale III)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Verdant IPA (Boddingtons)
            </p>
            <p>Das eigentliche Fundament der NEIPA-Revolution. Dies ist die Hefe, die der Welt "Juice" gab. Sie hinterlässt ein samtiges Mundgefühl und wirft schöne Ester von Ananas und Grapefruit ab.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Biotransformation</h4>
            <p>Geringe Flokkulation hilft, das Bier trüb zu halten, und ihre einzigartigen Enzyme sind fantastisch darin, Ihre Trockenhopfen chemisch in noch saftigere Verbindungen umzuwandeln.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard & Low Ester:</strong> Bei 18-19 °C gehalten. Dies bietet eine saubere Gärung, bei der die Biotransformation Ihrer massiven Trockenhopfengaben im Mittelpunkt steht.</li>
                <li><strong style="color: #fff;">High Ester:</strong> Anstellen bei 21 °C und auf 23 °C gesteigert. Die zusätzliche Hitze zwingt die Hefe, mehr eigene tropische Ester (Pfirsich/Aprikose) zu produzieren, die sich mit dem Hopfen vermischen.</li>
            </ul>
        `,

        "wyeast-2565": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 2565 (Kölsch)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> WLP029 (Cologne)
            </p>
            <p>Ein echter "Hybrid" – technisch gesehen eine Ale-Hefe, aber sie bevorzugt es, bei Temperaturen nahe dem Lagerbereich zu arbeiten. Bekannt für ein extrem knackiges, sauberes und fast weiniges (Weißwein) Profil.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Die staubige Hefe</h4>
            <p>Wyeast 2565 ist notorisch pulvrig. Sie weigert sich, von selbst aufzuklaren. Eine lange, kalte Lagerphase ist absolut zwingend erforderlich, um diese brillante, goldene Kölsch-Klarheit zu erreichen.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard & Low Ester:</strong> Schnellere ale-ähnliche Gärung (18-19 °C). Immer noch sehr sauber, aber viel schneller fertig. Großartig für knackige Blonde Ales.</li>
                <li><strong style="color: #fff;">Authentic:</strong> Die Kölner Art! Eine kühle 14,5 °C Hauptgärung, eine langsame D-Rast bei 18 °C und eine strenge 2-wöchige kalte Lagerung. Schmeckt genau wie ein deutsches Lager, aber mit Ale-Hefe gebraut.</li>
            </ul>
        `,

        "wlp002": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP002 English Ale (The Brick)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Wyeast 1968 (Fuller's Strain)
            </p>
            <p>Der legendäre Fuller’s-Stamm! Diese Hefe ist für zwei Dinge berühmt: Sie hinterlässt eine wunderbare, malzige Restsüße und fällt so schnell aus der Schwebe, dass sie wie Hüttenkäse aussieht.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Extreme Flokkulation</h4>
            <p>Weil sie wie ein Stein fällt, sobald sie sich "fertig" fühlt, müssen Sie aktiv darum kämpfen, sie wach zu halten. Wenn sie zu früh einschläft, schmeckt Ihr Bier nach Buttertoffee (Diacetyl).</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> Eine konstante Gärung bei 19 °C, die am Ende auf 21 °C springt, um die Hefe für die Aufräumarbeiten aktiv zu halten.</li>
                <li><strong style="color: #fff;">Low Ester:</strong> Etwas kühler halten (18,5 °C), um noch mehr unvergorene Zucker zu erhalten, was Ihren dunklen Bieren ein massives, seidiges Mundgefühl verleiht.</li>
            </ul>
            <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-Tipp: Wenn Sie hier einen Cold Crash durchführen, wird das Bier fast über Nacht brillant klar. Keine Notwendigkeit für Schönungsmittel!</i></p>
        `,

        "wlp500": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP500 Trappist (The Monk's Madness)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Wyeast 1214 (Chimay)
            </p>
            <p>Direkt aus dem Chimay-Kloster bezogen. Dies ist die Hefe, die Sie wollen, wenn Sie massive, komplexe belgische Quads oder fruchtige Tripels brauen. Sie erzeugt eine Explosion von Pflaume, Rosine und deutlichen Kaugumminoten.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Lass es laufen (18-22 °C... und darüber hinaus)</h4>
            <p>Belgische Mönche benutzten historisch gesehen keine Kühlanlagen. Sie stellten die Hefe an und ließen die natürliche exotherme Wärme der Gärung die Temperatur in die Höhe treiben. Wir wollen dies nachahmen!</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> Start bei 19 °C, um Fuselalkohole zu unterdrücken, dann bis Tag 3 langsam auf 21 °C steigen lassen für ein elegantes Fruchtprofil.</li>
                <li><strong style="color: #fff;">Monk's Madness:</strong> Anstellen bei 20 °C und aggressiv auf 25 °C steigern! Dies stresst die Hefe so, dass sie massive dunkle Frucht- und Kaugummiaromen freisetzt.</li>
            </ul>
            <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-Tipp: Sie hat eine sehr geringe Flokkulation. Sie werden eine lange, kalte Konditionierungsphase benötigen, um diese hartnäckige Hefe aus dem Bier fallen zu lassen.</i></p>
        `,

        "wlp066": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP066 London Fog (The Haze Craze)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Wyeast 1318 (Naher Verwandter)
            </p>
            <p>Dies ist die flüssige Magie hinter einigen der besten NEIPAs der Welt. Sie hinterlässt ein samtiges, cremiges Mundgefühl und wirft schöne Ester von Ananas und rubinroter Grapefruit ab.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Der Bodybuilder</h4>
            <p>Im Gegensatz zu West Coast Hefen vergärt London Fog nicht alle komplexen Zucker. Sie hinterlässt einen höheren Endvergärungsgrad, der diesen dicken, saftähnlichen Körper bietet, den moderne Hazy IPAs benötigen.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> Auf 19 °C festgesetzt. Dies bietet eine saubere Gärung, bei der die Biotransformation Ihrer Trockenhopfen im Mittelpunkt steht.</li>
                <li><strong style="color: #fff;">Smooth Juice:</strong> Start bei 19 °C, steigt aber bis Tag 8 auf 22 °C. Die zusätzliche Hitze zwingt die Hefe, mehr eigene tropische Ester zu produzieren, um sich mit dem Hopfen zu vermischen.</li>
            </ul>
        `,

        "wlp800": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP800 Pilsner Lager (The Czech Legend)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Wyeast 2001 (Pilsner Urquell)
            </p>
            <p>Der berühmte Pilsner Urquell Stamm. Wenn Sie ein authentisches böhmisches Pilsner brauen wollen, suchen Sie nicht weiter. Es bietet eine reiche, komplexe Malzigkeit und ein sehr glattes, abgerundetes Profil.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Die Diacetyl-Debatte</h4>
            <p>Historisch gesehen haben tschechische Pilsner einen winzigen Hauch von Diacetyl (Butter) im Hintergrund. Wenn Sie 100% stiltreu bleiben wollen, machen Sie tatsächlich eine etwas kürzere Diacetylrast als bei deutschen Lagern!</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Bohemian:</strong> Kalt und langsam gären. Auf 12 °C für nur 48 Stunden ansteigen lassen, um *das meiste* Buttertoffee aufzuräumen, dann zur Lagerung absenken.</li>
                <li><strong style="color: #fff;">Traditional Lager:</strong> Etwas wärmer laufen lassen (11 °C) und eine volle 5-tägige D-Rast bei 16 °C für eine völlig saubere, moderne Interpretation eines Pilsners durchführen.</li>
            </ul>
        `,

        "wlp095": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP095 (Burlington Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Imperial A04, Omega OYL-052, "Conan"
            </p>
            <p>Der legendäre "Conan" Stamm! Die Hefe, die den Vermont-Stil (Hazy IPA) ursprünglich auf die Landkarte brachte. Bekannt für die Erzeugung intensiver Noten von reifer Pfirsich und Aprikose.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Der Original-Saft</h4>
            <p>Im Gegensatz zu London III neigt Burlington dazu, etwas mehr zu vergären, was ein Bier ergibt, das im Abgang trockener, aber in seinem Aroma immer noch außergewöhnlich "saftig" ist.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 12px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Conan IPA & Standard:</strong> 19-21 °C. Die klassische Vermont-Kurve. Bietet eine perfekte Balance zwischen Hopfenbittere und Steinobst-Estern.</li>
                <li><strong style="color: #fff;">High Ester:</strong> Auf 21 °C getrieben und auf 23 °C gesteigert. Dies stresst die Hefe, um die Pfirsich- und Aprikosennoten zu maximieren.</li>
                <li><strong style="color: #fff;">Low Ester:</strong> Kühl vergoren (18 °C), um die Fruchtigkeit zu zähmen, sodass sie sich eher wie eine Standard West Coast IPA Hefe verhält.</li>
            </ul>
        `,

        "wlp090": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP090 San Diego Super</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Keine direkte. Ähnlich wie WLP001, aber schneller/höhere Flokkulation.
            </p>
            <p>Ein wahrer Gigant in der Craft-Bier-Welt. Sie gärt blitzschnell, endet mit einem unmöglich knackigen Profil und fällt wie ein Stein aus der Schwebe. Wenn Sie ein stark gehopftes Double IPA oder West Coast IPA brauen, ist dies Ihre Waffe der Wahl.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> Eine zuverlässige Gärung bei 19 °C, die für eine solide Aufräumung auf 21 °C ansteigt.</li>
                <li><strong style="color: #fff;">Low / High Ester:</strong> Passen Sie die Starttemperatur an, um die dezenten Fruchtnoten entweder zu unterdrücken oder leicht anzuheben, um Ihre Hopfenschüttung auszugleichen.</li>
                <li><strong style="color: #fff;">Fast & Crisp:</strong> Treibt die Hefe von Anfang an etwas wärmer (19,5 °C). Diese Hefe ist so sauber, dass Sie einen Speed-Run eines West Coast IPA machen können, ohne Fehlaromen zu erzeugen.</li>
            </ul>
        `,

        "wyeast-1272": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1272 (American Ale II)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> WLP051 (California V)
            </p>
            <p>Der fruchtigere Cousin der Standard American Ale Hefe (wie US-05/WLP001). Sie erzeugt ein komplexeres, leicht nussiges und weicheres Profil. Sie hinterlässt etwas mehr Restsüße, was sie zur absolut perfekten Wahl für Amber Ales, Pale Ales und Brown Ales macht.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard & Low Ester:</strong> Hält die Hefe für ein sauberes amerikanisches Profil am Boden und unterdrückt ihre charakteristischen nussigen Noten leicht.</li>
                <li><strong style="color: #fff;">Amber Nutty:</strong> Startet bei 19,5 °C und steigt auf 21 °C. Dieses spezifische Profil ist darauf ausgelegt, die weiche Frucht und den leicht nussigen Charakter hervorzulocken, der Amber Ales glänzen lässt.</li>
            </ul>
        `,

        "imperial-a24": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Imperial A24 (Dry Hop)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Mischung aus Barbarian (Conan) & Citrus Stämmen.
            </p>
            <p>Ein modernes Wunder! Dies ist eine einzigartige Mischung aus zwei erstaunlichen IPA-Stämmen, die speziell dafür entwickelt wurde, massive Trockenhopfengaben zu bewältigen. Sie bietet eine unglaubliche Explosion von Pfirsich, Aprikose und Zitrusfrüchten, während sie den Hopfen für diese perfekte Trübung in der Schwebe hält.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> Eine konstante Basislinie von 19 °C, die den Hefeausdruck mit Ihrem Hopfen ausgleicht.</li>
                <li><strong style="color: #fff;">Hazy Citrus:</strong> Startet warm bei 20 °C und treibt auf 22,5 °C. Stresst die Mischung, um massive Mengen an eigenen Zitrusestern zu produzieren, die Ihre tropischen Hopfen unterstützen.</li>
                <li><strong style="color: #fff;">Dry Hop Burst:</strong> Ein kühlerer Start (18,5 °C), um eine saubere Basis zu schaffen, dann ein rascher Anstieg auf 22 °C, genau dann, wenn Sie Ihren schweren Trockenhopfen einwerfen, um die Biotransformation zu maximieren.</li>
            </ul>
        `,

        "wlp530": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP530 (Westmalle Trappist)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Wyeast 3787, BE-256 (Trockene Version)
            </p>
            <p>Das flüssige Original hinter der berühmten Westmalle-Brauerei. Dies ist der unbestrittene König der dunklen, starken belgischen Ales. Sie produziert eine wunderschöne, komplexe Symphonie aus Pflaume, Rosine und milder Würze, während sie mühelos massive Mengen an Zucker (bis zu 15% ABV) durchkaut.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> Ein kontrolliertes Profil von 19 °C bis 21 °C. Hält den intensiven belgischen Charakter für ein raffinierteres Dubbel zurück.</li>
                <li><strong style="color: #fff;">Trappist Ramp:</strong> Die traditionelle Kloster-Methode. Kühl anstellen bei 18 °C, um heiße Lösungsmittelalkohole zu vermeiden, dann die eigene exotherme Wärme der Hefe den Tank auf 25 °C treiben lassen!</li>
                <li><strong style="color: #fff;">Dark Fruit:</strong> Startet etwas wärmer (20 °C) und treibt hart auf 24 °C, um die reichen Pflaumen- und Rosinenester zu maximieren, die für ein massives Belgian Quad benötigt werden.</li>
            </ul>
        `,

        "wyeast-3711": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 3711 (French Saison)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Belle Saison (Trockene Version), WLP590
            </p>
            <p>Ein absolutes Biest von einer Hefe! Sie ist berühmt für ihre aggressive Gärung und kaut sich durch jeden einzelnen komplexen Zucker, den sie finden kann (Diastaticus). Das Ergebnis ist ein knochentrockenes, stark kohlensäurehaltiges Bier mit einer schönen Balance aus schwarzer Pfefferwürze und Zitrusfrüchten.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> Ein ausgewogener Start bei 20 °C, der langsam auf 24 °C ansteigt. Erzeugt ein perfektes, sehr gut trinkbares Table-Saison.</li>
                <li><strong style="color: #fff;">Bone Dry:</strong> Startet warm (22 °C) und treibt auf 26 °C, um sicherzustellen, dass absolut 0% Restsucker zurückbleibt.</li>
                <li><strong style="color: #fff;">Farmhouse Spice:</strong> Startet heiß bei 24 °C und lässt die Hefe bis auf 28 °C wild laufen. Dies treibt extreme Mengen an rustikalen, pfeffrigen Phenolen an.</li>
            </ul>
        `,

        "wlp028": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP028 (Scottish Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Wyeast 1728 (Scottish Ale)
            </p>
            <p>Eine höchst einzigartige Ale-Hefe, die die Kälte liebt! Sie gärt bei niedrigeren Temperaturen unglaublich sauber, was die tiefen, gerösteten und rauchigen Malzaromen bewahrt und hervorhebt, ohne sie hinter fruchtigen Estern zu verbergen.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> Eine traditionelle 18 °C Ale-Gärung. Sauber, neutral und zuverlässig.</li>
                <li><strong style="color: #fff;">Wee Heavy:</strong> Auf 16 °C abgesenkt. Eine lange, langsame Gärung, die es der massiven Malzkomplexität eines starken Scottish Ale ermöglicht, in den Mittelpunkt zu rücken.</li>
                <li><strong style="color: #fff;">Cold & Clean:</strong> An ihr absolutes Limit bei 14,5 °C getrieben. Verhält sich fast genau wie eine Lagerhefe und erzeugt ein unglaublich knackiges, malzbetontes Profil.</li>
            </ul>
        `,
        "wyeast-1469": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1469 (West Yorkshire)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Timothy Taylor Stamm, Imperial A10
            </p>
            <p>Der Heilige Gral für traditionelle englische Bitters! Dieser Stamm stammt von einer legendären Yorkshire-Brauerei und produziert ein wunderbar komplexes, leicht nussiges und mild fruchtiges Profil, das perfekt zu englischem Malz und Fuggles-Hopfen passt.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> Gärt bei 19 °C, gefolgt von einer warmen D-Rast. Perfekt für moderne englische Pale Ales.</li>
                <li><strong style="color: #fff;">Yorkshire Bitter:</strong> Startet bei 20 °C, um seine charakteristischen Steinobstester herauszulocken. Beachten Sie, dass der "Crash" bei 5 °C stoppt, um eine leichte Trübung und Körper zu hinterlassen.</li>
                <li><strong style="color: #fff;">Pub Temp:</strong> Ein hochgradig authentisches Profil. Gärt bei 18,5 °C und "konditioniert" bei 8 °C, was die Kellertemperatur eines traditionellen britischen Pub-Fasses nachahmt.</li>
            </ul>
        `,

        "lutra": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Omega Lutra Kveik</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssig / Trocken Hybrid<br>
                <strong>Entsprechungen:</strong> Ein stark isolierter Kveik-Stamm.
            </p>
            <p>Ein moderner Brau-Cheat-Code! Lutra ist ein isolierter Kveik-Stamm, der die Brauwelt schockiert hat. Obwohl er bei heißen Ale-Temperaturen gärt, erzeugt er ein unverschämt sauberes, knackiges Profil, das geschmacklich praktisch nicht von einem traditionellen, langsam vergorenen Lagerbier zu unterscheiden ist.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> Konstante 25 °C. Schnell, absolut sauber und zuverlässig für alles von Hard Seltzers bis Cream Ales.</li>
                <li><strong style="color: #fff;">Pseudo-Lager:</strong> Auf 20 °C abgesenkt. Das ultimative Mock-Lager-Profil. Knackig, schwefelfrei und unglaublich erfrischend.</li>
                <li><strong style="color: #fff;">Speed Run:</strong> Gärt bei sengenden 32 °C. Verwandelt eine Würze in weniger als 4 Tagen in Bier, während es irgendwie schockierend sauber bleibt.</li>
            </ul>
        `,

        "philly-sour": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Philly Sour</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> Einzigartig (Lachancea-Art)
            </p>
            <p>Reine Bio-Engineering-Magie. Auf einem Baum in Philadelphia entdeckt, produziert diese einzigartige Hefe in den ersten Tagen Milchsäure (Säure) und wechselt DANN zur Alkoholproduktion! Es ermöglicht Ihnen, Sauerbiere sicher zu brauen, ohne gefährliche Bakterien in Ihre Ausrüstung einzubringen.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard:</strong> Ein konstantes 22 °C Profil. Ergibt eine moderate, erfrischende Säure.</li>
                <li><strong style="color: #fff;">Lactic Boost:</strong> Für die ersten 4 Tage warm bei 25 °C gehalten, um die Hefe zu zwingen, massive Mengen an Milchsäure zu produzieren, dann auf 20 °C für einen sauberen alkoholischen Abgang abgesenkt. Sehr sauer!</li>
                <li><strong style="color: #fff;">Sour Fruit:</strong> Maßgeschneidert für fruchtige Sauerbiere. Gleicht die Säureproduktion aus, bevor sauber gecrasht wird, damit Ihre hinzugefügten Fruchtpürees glänzen können.</li>
            </ul>
            <p style="margin-top: 15px; font-size: 0.85rem; color: #aaa;"><i>Pro-Tipp: Philly Sour benötigt einfache Zucker (wie Dextrose), um hohe Mengen an Säure zu produzieren! Fügen Sie Ihrem Kochen 5% Dextrose hinzu.</i></p>
        `,

        "wlp820": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP820 (Oktoberfest / Märzen)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Wyeast 2633, Imperial L17
            </p>
            <p>Das Herz und die Seele des Münchner Oktoberfests. Während sich Pilsnerhefe auf einen knackigen, hopfigen Abgang konzentriert, ist dieser Stamm darauf ausgelegt, reiche, röstige und brotige Münchner und Wiener Malze hervorzuheben. Er hinterlässt ein bemerkenswert weiches und vollmundiges Lagerbier.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Traditional Lager:</strong> Der klassische deutsche Ansatz. Langsame Hauptgärung bei 11 °C, gefolgt von einer langen, kalten Lagerphase für flüssige Perfektion.</li>
                <li><strong style="color: #fff;">Fast Festbier:</strong> Etwas wärmer anstellen (13 °C) für eine schnellere Gärung. Perfekt, um ein Festbier direkt vor Beginn der Party zu brauen.</li>
                <li><strong style="color: #fff;">Malty Marzen:</strong> Strikt bei 10 °C gehalten. Erfordert immense Geduld, belohnt Sie aber mit dem tiefsten, komplexesten Malzprofil, das möglich ist.</li>
            </ul>
        `,

        "bry-97": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand BRY-97</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> WLP090 (Ähnliches schnelles/sauberes Profil)
            </p>
            <p>Eine West Coast-Legende in Trockenform! Viele Brauer bevorzugen BRY-97 gegenüber US-05, da sie etwas weniger Pfirsichester produziert und ein schärferes, saubereres Finish hinterlässt, das die Hopfenbittere wirklich beißen lässt.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Der Spätzünder</h4>
            <p>Keine Panik, wenn Ihr Gärspund nach 24 Stunden noch nicht blubbert. BRY-97 ist notorisch langsam beim Aufwachen, aber wenn sie erst einmal in Gang gekommen ist, gärt sie kräftig und flokkuliert wunderbar.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Standard / Low Ester:</strong> Hält die Hefe auf 17,5 - 19 °C für eine unglaublich neutrale Basis.</li>
                <li><strong style="color: #fff;">West Coast Crisp:</strong> Startet bei 18 °C und steigt langsam an. Sorgt für ein knochentrockenes Finish, bei dem Ihr teurer Hopfen glänzen kann.</li>
            </ul>
        `,

        "k-97": `
            <h3 style="color: var(--accent-color); margin-top: 0;">SafAle K-97 (German Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> Wyeast 1007, WLP036
            </p>
            <p>Ein fantastischer, sauberer deutscher Ale-Stamm. Dies ist Ihre Go-to-Trockenhefe zum Brauen von Altbier, Kölsch oder jedem Bier, bei dem Sie ein knackiges, lagerähnliches Profil wünschen, aber nicht die Zeit haben, tatsächlich ein Lager zu brauen.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Die massive Kräusen</h4>
            <p>K-97 produziert während der Gärung eine massive, dicke Schaumkrone (Kräusen), die noch Tage nach dem Ende bestehen bleiben kann. Stellen Sie sicher, dass Sie viel Kopfraum in Ihrem Gärtank haben!</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Altbier Crisp:</strong> Gärt kühl bei 15 °C. Unterdrückt Fruchtigkeit und bringt den Röstmalzcharakter eines klassischen Düsseldorfer Altbiers zur Geltung.</li>
                <li><strong style="color: #fff;">Kölsch Style:</strong> Wird bei 16 °C gehalten und steigt auf 20 °C. Knackig, leicht weinartig und sehr sauber.</li>
            </ul>
        `,

        "windsor": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Lallemand Windsor</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> WLP002 (Ähnliches Vergärungsprofil)
            </p>
            <p>Ein klassischer britischer Ale-Stamm, bekannt für seine fruchtigen Ester und seinen vollen Körper. Genau wie S-33 ist Windsor Maltotriose-negativ – was bedeutet, dass sie keine komplexen Zucker vergären kann. Ihr Endvergärungsgrad wird hoch sein, aber das Bier wird sich unglaublich reichhaltig und samtig anfühlen.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Sweet Stout:</strong> Gärt bei 18 °C. Maximiert die Restsüße, um stark geröstete Malze auszugleichen.</li>
                <li><strong style="color: #fff;">Fruity Bitter:</strong> Wärmer auf 20-21,5 °C getrieben. Setzt wunderschöne englische Esternoten von frischen Beeren und Marmelade frei.</li>
            </ul>
        `,

        "mexican-lager": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP040 (Mexican Lager)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Imperial L05 (Urkel), Wyeast 2124
            </p>
            <p>Die perfekte Hefe für einen sonnigen Tag! Dieser aus Mexiko-Stadt stammende Stamm produziert ein außergewöhnlich knackiges und sauberes Lagerprofil, das makellos zu Maisflocken und einer Limettenspalte passt.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Traditional Lager:</strong> Läuft bei 11 °C. Braucht Zeit, produziert aber flüssiges Gold.</li>
                <li><strong style="color: #fff;">Fast Cerveza:</strong> Ein moderner Ansatz. Anstellen bei 13 °C und aktiv auf 16,5 °C gesteigert, um das Bier in der halben Zeit ohne Verlust der Knackigkeit fertigzustellen.</li>
            </ul>
        `,

        "hornindal": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Omega OYL-091 Hornindal Kveik</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Einzigartige Kveik-Mischung
            </p>
            <p>Wenn Voss Kveik Ihnen Orangen gibt, gibt Ihnen Hornindal einen tropischen Obstsalat! Diese norwegische Farmhouse-Mischung gedeiht in extremer Hitze und produziert massive Noten von frischer Ananas, Mango und Mandarine.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Tropical Bomb:</strong> Gärt bei wahnsinnigen 35-36 °C. Die Hitze stresst die Hefe, unglaubliche Mengen tropischer Fruchtester abzuwerfen. Perfekt für Hazy IPAs!</li>
                <li><strong style="color: #fff;">Clean Pseudo:</strong> Auf 24-26 °C abgesenkt. Zügelt die tropischen Noten für ein viel saubereres, alltagstaugliches Pale Ale Profil.</li>
            </ul>
        `,

        "wyeast-3724": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 3724 (Belgian Saison)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> WLP565 (Saison I)
            </p>
            <p>Der legendäre Dupont-Stamm. Er produziert das komplexeste, erdigste, pfeffrigste und würzigste Saison-Profil der Welt. Aber es gibt einen großen Haken...</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Der berüchtigte Stillstand</h4>
            <p>Diese Hefe ist berüchtigt dafür, bei genau 1.030 Gravity stehen zu bleiben und einzuschlafen. Der einzige Weg, sie über die Ziellinie zu schieben, ist mit extremer Hitze.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">The Dupont Ramp:</strong> Unser automatisierter Retter! Startet bei 22 °C, steigt aber bis Tag 7 aggressiv auf sengende 30 °C an. Diese extreme Hitze verhindert den Stillstand und treibt das Bier zu einem knochentrockenen Abgang.</li>
            </ul>
        `,

        "wlp570": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP570 (Belgian Golden Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Wyeast 1388 (Belgian Strong)
            </p>
            <p>Bezogen aus der berühmten Duvel-Brauerei. Im Gegensatz zu Trappistenstämmen, die dunkle Früchte abwerfen, ist diese Hefe dafür berühmt, knackige Noten von Birne, Apfel und weißem Pfeffer zu produzieren. Sie gärt unglaublich gut aus und verbirgt massive ABVs gefährlich gut.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Golden Strong:</strong> Startet sicher bei 20 °C, um eine saubere Basis zu schaffen, wandert dann bis auf 26 °C, um die klassischen Duvel-artigen Ester freizusetzen, ohne scharfe Fuselalkohole zu produzieren.</li>
            </ul>
        `,

        "wyeast-2112": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 2112 (California Lager)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> WLP810 (San Francisco Lager)
            </p>
            <p>Die ikonische Anchor Steam Hefe! Während des kalifornischen Goldrausches hatten die Brauer kein Eis, also nutzten sie flache Kühlschiffe, um Lagerhefe bei warmen Temperaturen zu vergären. Dieser Stamm entwickelte sich, um in dieser Hybridumgebung zu gedeihen.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Steam Beer:</strong> Gärt bei 15-17 °C. Erzeugt ein sehr einzigartiges, leicht holziges und mild fruchtiges Lagerprofil, das den California Common Stil definiert.</li>
                <li><strong style="color: #fff;">Warm Lager:</strong> Auf 19 °C getrieben. Verhält sich fast wie eine Ale-Hefe, ist schnell fertig, behält aber überraschend viel Lager-Knackigkeit bei.</li>
            </ul>
        `,

        "wlp380": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP380 (Hefeweizen IV)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Wyeast 3333 (German Wheat)
            </p>
            <p>Wenn WLP300 die "Bananenbombe" ist, dann ist WLP380 der "Nelkenmeister". Dieser Stamm produziert sehr wenig Isoamylacetat (Banane) und konzentriert sich stattdessen stark auf würzige Phenole und knackige Zitrusnoten.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Clove Master:</strong> Auf der kühleren Seite (17-18 °C) vergoren. Unterdrückt die Banane vollständig und hinterlässt ein wunderbar würziges und erfrischendes Weizenbier.</li>
                <li><strong style="color: #fff;">Balanced:</strong> Etwas wärmer getrieben (19-20 °C), damit ein winziger Hauch von Banane durch die Würze blitzen kann.</li>
            </ul>
        `,

        "wyeast-1007": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1007 (German Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> K-97 (Trockene Version), WLP036
            </p>
            <p>Eine echte obergärige deutsche Ale-Hefe. Sie ist unglaublich robust und gärt selbst bei 13 °C brillant sauber! Sie hinterlässt ein trockenes, knackiges Finish mit milder Malzigkeit, was sie perfekt für Altbier und Kölsch macht.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Altbier Crisp:</strong> Läuft bei 15 °C. Unterdrückt Fruchtigkeit und sorgt für ein glattes, lagerartiges Finish.</li>
                <li><strong style="color: #fff;">Pseudo Lager:</strong> Bis auf 13 °C abgesenkt. Verhält sich wie eine Lagerhefe, ist aber deutlich schneller fertig. Benötigt einen guten Cold Crash zum Klären!</li>
            </ul>
        `,

        "s-189": `
            <h3 style="color: var(--accent-color); margin-top: 0;">SafLager S-189 (The Swiss Precision)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> Wyeast 2068X
            </p>
            <p>Aus der Hürlimann-Brauerei in der Schweiz stammend, ist dies eine unglaublich elegante Lagerhefe. Während W-34/70 neutral ist, bringt S-189 eine wunderschöne, subtile blumige und kräuterige Note zum Vorschein, die europäische Pilsner zum Singen bringt.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Die saubere Knackigkeit (9-15 °C)</h4>
            <p>Sie gärt extrem effizient, benötigt aber eine strikte Temperaturkontrolle, um Ester zu vermeiden. Sie liebt eine lange, kalte Primärphase, um ihre charakteristische Knackigkeit zu entwickeln.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Swiss Alpine:</strong> Fest bei 10,5 °C für 12 Tage gehalten. Eine langsame, akribisch kontrollierte Hauptgärung, gefolgt von einer sanften D-Rast bei 15 °C. Hinterlässt ein unglaublich sauberes Bier.</li>
                <li><strong style="color: #fff;">Fast European:</strong> Start bei 12 °C und bis Tag 7 auf 16 °C steigern. Spart Tage der Gärzeit, behält aber dennoch ein knackiges, professionelles Profil bei.</li>
            </ul>
        `,

        "be-134": `
            <h3 style="color: var(--accent-color); margin-top: 0;">SafAle BE-134 (The Bone-Dry Saison)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> Wyeast 3711 (Ähnlicher Vergärungsgrad)
            </p>
            <p>Ein wahres Biest für trockene Saisons! Diese diastatische Hefe wird absolut jeden komplexen Zucker auf ihrem Weg fressen und ein Bier hinterlassen, das unglaublich trocken, stark kohlensäurehaltig ist und vor Noten von Nelke, Zitrusfrüchten und Pfeffer explodiert.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Die hohe Hitzeschwelle (18-28 °C)</h4>
            <p>Wie die meisten authentischen Saisons gedeiht sie, wenn die Temperatur natürlich ansteigen kann. Sie mit kalten Temperaturen zu bremsen, dämpft die komplexen Phenole.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Farmhouse Free-Rise:</strong> Start bei 19 °C, um eine saubere Basis zu schaffen, dann verwenden Sie die App, um aggressiv auf 26 °C zu steigen. Zwingt die Hefe, massive würzige Ester abzuwerfen, während das Bier bis auf 1.000 FG heruntertrocknet.</li>
            </ul>
        `,

        "koln": `
            <h3 style="color: var(--accent-color); margin-top: 0;">LalBrew Köln (The Cologne Classic)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> WLP029, Wyeast 2565
            </p>
            <p>Endlich ein echter Kölsch-Stamm in Trockenform! Diese Hefe gärt wie ein Ale, konditioniert aber wie ein Lager. Sie produziert ein brillant sauberes, leicht fruchtiges (dezenter Apfel/Birne) Profil, das für ein traditionelles Kölsch unerlässlich ist.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Die Lagerphase</h4>
            <p>Sie ist während der aktiven Gärung ziemlich staubig. Eine dedizierte, kalte Lagerphase ist absolut zwingend erforderlich, um die Hefe abzuwerfen und diese brillante goldene Klarheit zu erreichen.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Authentic Kölsch:</strong> Hauptgärung bei 15 °C. Unterdrückt schwere Ale-Ester. Nach einer kurzen D-Rast bei 18 °C crasht es auf 2 °C für eine strenge 14-tägige Lagerphase.</li>
                <li><strong style="color: #fff;">Crisp Blonde:</strong> Etwas wärmer (18 °C) getrieben. Funktioniert als fantastische, schnell klärende Alternative für knackige American Blonde Ales.</li>
            </ul>
        `,

        "m44": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Mangrove Jack's M44 (US West Coast)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> WLP090, BRY-97
            </p>
            <p>Von vielen professionellen Brauern gegenüber US-05 bevorzugt, wegen ihrer Fähigkeit, noch trockener und sauberer abzuschließen. M44 fällt wunderschön aus der Schwebe und hinterlässt ein messerscharfes West Coast IPA, bei dem die Hopfenbittere im Mittelpunkt steht.</p>
            <h4 style="margin-top: 15px; color: #ccc;">1. Das langsame Aufwachen</h4>
            <p>Fassen Sie das Thermostat nicht an! M44 ist notorisch dafür bekannt, bis zu 36 Stunden zu brauchen, um aktives Blubbern zu zeigen. Haben Sie Geduld; wenn sie einmal startet, ist sie ein Kraftpaket.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Patience & Crisp:</strong> Fest bei 18,5 °C für 7 Tage verriegelt, um eine Null-Ester-Produktion zu gewährleisten, gefolgt von einer Spitze auf 21 °C, um die letzten Extrakte herauszuquetschen.</li>
            </ul>
        `,

        "m15": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Mangrove Jack's M15 (Empire Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Trockenhefe<br>
                <strong>Entsprechungen:</strong> Windsor, WLP002
            </p>
            <p>Der König der dunklen Biere. M15 hinterlässt einen massiven, reichen Körper und einen überraschend hohen Endvergärungsgrad. Er produziert wunderschöne Noten von dunklen Früchten, was ihn zur ultimativen Trockenhefe für Imperial Stouts, Porters und Barleywines macht.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Malty Monster:</strong> Gärt bei 19 °C. Sorgt für ein reiches, viskoses Mundgefühl und verhindert, dass die dunkel gerösteten Malze dünn oder harsch schmecken.</li>
                <li><strong style="color: #fff;">Dark Fruit:</strong> Steigt während der Hauptgärung auf 22 °C an, um komplexe Ester von Feige und Rosine herauszustressen, die ein schweres Stout ergänzen.</li>
            </ul>
        `,

        "hothead": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Omega OYL-057 HotHead Kveik</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Stranda Kveik
            </p>
            <p>Ein höchst einzigartiger Kveik-Stamm! Im Gegensatz zu Voss (Orange) oder Hornindal (tropisch) erzeugt HotHead ein wunderbar weiches Profil von süßem Honig und reifer Mango. Und seinem Namen treu bleibend, kommt er mit glühender Hitze zurecht, ohne mit der Wimper zu zucken.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Summer Heat:</strong> Stellen Sie es auf 34 °C und vergessen Sie es. Gärt in 3 Tagen vollständig aus und hinterlässt massive Honig-Mango-Ester. Perfekt für ein sommerliches Pale Ale.</li>
                <li><strong style="color: #fff;">Restrained Clean:</strong> Auf 22 °C abgesenkt. Langsamer, liefert aber ein unglaublich neutrales Profil, das für fast jeden Ale-Stil funktioniert.</li>
            </ul>
        `,
        "imperial-l13": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Imperial L13 Global (The Macro Master)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> WLP830, Heineken/Carlsberg-Stamm
            </p>
            <p>Wenn Sie Ihr europäisches Lieblings-Makrolager klonen wollen, ist dies die richtige Hefe. Sie ist extrem fehlerverzeihend, stark flockend und produziert ein unglaublich sauberes Lagerprofil, das der breiten Masse schmeckt.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Macro Clean:</strong> Hauptgärung bei 11 °C. Eine stetige, vorhersehbare Gärung. Eine kurze D-Rast bei 16 °C ist alles, was sie vor einer Standard-Lagerphase benötigt.</li>
                <li><strong style="color: #fff;">International Quick:</strong> Etwas wärmer (14 °C) angetrieben, um moderne Massenproduktionsgeschwindigkeiten nachzuahmen, ohne unerwünschte Ester zu erzeugen.</li>
            </ul>
        `,

        "wyeast-3726": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 3726 (Farmhouse Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Blaugies-Stamm, Imperial B56
            </p>
            <p>Die überlegene Alternative zum Dupont-Stamm! Sie produziert dasselbe großartige, pfeffrige, rustikale Saison-Profil, ist aber ein unermüdlicher Arbeiter, der auf halbem Weg absolut NIEMALS stecken bleibt.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Rustic Tart:</strong> Startet bei 21 °C und steigt frei auf 27 °C an. Sie braucht nicht die extreme Hitze von Dupont, um fertig zu werden, aber die Wärme drückt eine wunderschöne, säuerliche, erdige Würze heraus.</li>
            </ul>
        `,

        "wlp005": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP005 (British Ale / Ringwood)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Wyeast 1187
            </p>
            <p>Ein legendärer englischer Stamm. Er produziert komplexe, malzige und unglaublich fruchtige Biere. Allerdings benötigt er zu Beginn viel Sauerstoff und ist ein starker Diacetyl-Produzent, daher verlangt er Respekt und eine präzise Temperaturkontrolle.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">English Cellar:</strong> Anstellen bei 19 °C, um die schweren Fruchtester zu kontrollieren, gefolgt von einer obligatorischen, verlängerten Diacetylrast bei 21,5 °C für 3-4 Tage, um das Buttertoffee aufzuräumen.</li>
            </ul>
        `,

        "wlp815": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP815 (Belgian Lager)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Stella Artois / Jupiler-Stamm
            </p>
            <p>Ein stark unterschätztes Juwel. Dies ist die Hefe hinter den berühmten belgischen Premium-Lagern. Sie bietet ein unverkennbar europäisches Profil – knackig und sauber, aber mit einem winzigen, raffinierten Hauch von Fruchtigkeit, der sie von deutschen Stämmen unterscheidet.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Continental Lager:</strong> Hauptgärung bei 11,5 °C. Extrahiert die subtilen fruchtigen Nuancen perfekt. Erfordert einen soliden Cold Crash und eine Lagerung, um erstklassige Klarheit zu erreichen.</li>
            </ul>
        `,

        "wlp023": `
            <h3 style="color: var(--accent-color); margin-top: 0;">WLP023 (Burton Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> Wyeast 1275, Imperial A09
            </p>
            <p>Aus der historischen Braustadt Burton-on-Trent. Diese Hefe ist berühmt dafür, einen unverwechselbaren, köstlichen Charakter von Apfel, Birne und Kleehonig zu erzeugen. Sie ist die absolut perfekte Wahl für ein English IPA oder ein ESB.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Burton Snatch:</strong> Gärt bei 20 °C, um die charakteristischen Apfel- und Honigester herauszulocken. Passt tadellos zu sulfatreichen Wasserprofilen.</li>
            </ul>
        `,

        "wyeast-1028": `
            <h3 style="color: var(--accent-color); margin-top: 0;">Wyeast 1028 (London Ale)</h3>
            <p style="font-size: 0.85rem; color: #8cc63f; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
                <strong>Format:</strong> Flüssighefe<br>
                <strong>Entsprechungen:</strong> WLP013 (Ähnliches reiches Profil)
            </p>
            <p>Eine wunderbar komplexe und mineralische Hefe. Sie hat einen trockenen Abgang, hinterlässt aber ein reiches, holziges und fast erdiges Profil, das stark geröstete Malze fehlerfrei ausgleicht. Eine absolute Top-Wahl für englische Porters und Stouts.</p>
            <h4 style="margin-top: 15px; color: #ccc;">YeastMaster-Profile:</h4>
            <ul style="list-style: none; padding: 0; margin-top: 10px; gap: 8px; display: flex; flex-direction: column;">
                <li><strong style="color: #fff;">Minerally Stout:</strong> Festgesetzt auf 18,5 °C. Unterdrückt schwere Fruchtigkeit, um die mineralischen, holzigen Noten neben den dunklen Malzen durchscheinen zu lassen.</li>
            </ul>
        `
}
    };


const translations = {
    en: {
        nav: { home: "HOME", library: "LIBRARY", lab: "LAB", profiler: "PROFILER", live: "LIVE", settings: "SETTINGS" },
        dashboard: { 
            progress: "PROGRESS", 
            since_start: "Since start", 
            time_phase: "Time in phase", 
            goal_temp: "Goal temp in phase",
            history: "TEMP HISTORY",
            fridge: "FRIDGE",
            last_sync: "LAST SYNC",
            start: "START",
            ready: "READY",
            air: "Air:",
            phase_label: "Phase:",
            days: "d" 
        },

        profiler: {
            profile_name: "PROFILE NAME",
            profile_builder: "PROFILE BUILDER",
            overview: "OVERVIEW",
            summary: "PROFILE SUMMARY",
            name_placeholder: "My Lager...",
            pick_yeast: "Pick a base yeast...",
            save: "SAVE TO LIBRARY",
            day: "Day",
            hold_until: "Hold until Day",
            free_rise: "Free rise to",
            drop_to: "Drop to",
            reach: "Reach",
            rise_to: "Rise to",
            by_day: "by Day",
            pitch: "Pitch",
            primary: "Primary",
            cleanup: "Cleanup",
            cold_crash: "Cold Crash",
            condition: "Condition",
        },

        lab: {
            title: "The Profiler",
            info_1: "Pick a strain and drag the points to build your fermentation profile.",
            info_2: "When you're done, save and find your tailored profile in the Yeast library.",
            info_3: "Don't forget the dry hops!",
            profile_name: "PROFILE NAME",
            profile_name_placeholder: "e.g. JUICEBMB",
            pick_strain: "Pick strain",
            builder_title: "PROFILE BUILDER",
            btn_overview: "🔍 OVERVIEW",
            chart_placeholder: "Pick a base yeast and name your profile above 👆",
            summary_title: "PROFILE SUMMARY",
            phase_pitch: "Pitch",
            phase_primary: "Primary",
            phase_cleanup: "Cleanup",
            phase_crash: "Cold Crash",
            phase_condition: "Condition",
            day: "Day 0 @",
            hold_until: "Hold until Day",
            reach: "Reach",
            drop_to: "Drop to",
            by_day: "by Day",
            btn_add_hops: "+ ADD DRY HOPS",
            btn_add_dump: "+ RACK / DUMP",
            schedule_hop: "Dry Hop scheduled on Day",
            schedule_dump: "Rack / Dump scheduled on Day",
            btn_save: "SAVE PROFILE"
        },
        
        soul: {
            title: "YEAST",
            subtitle: "The Soul of beer.",
            desc1_a: "We believe the true soul of beer lives within the yeast. As the old brewing adage goes: ",
            desc1_quote: '"The brewer makes wort, but the yeast makes beer."',
            desc1_b: " There is a profound wonder in how these microscopic artisans transform a simple, sweet liquid into the infinitely complex and soulful elixir we call beer.",
            desc2: "Soulof.beer is a tribute to this biological magic. Whether you are here to explore our library of historic strains or to take full command of your fermentation, this is your laboratory. Monitor your brew in real-time, sync custom profiles to your YeastMaster-unit, and master the art of fermentation.",
            what_is: "What is YeastMaster?",
            what_desc: "Discover the hardware and the app features.",
            prompt: "Ready to manage your library or monitor your unit?",
            btn_login: "GO TO LOGIN"
        },

        library: {
    title: "Yeast Library",
    info_1: "Browse the collection of yeast strains.",
    info_2: "<strong>Double-click</strong> (or long-press) a card to read about them and the Yeastmaster profiles.",
    info_3: "Select up to 10 favorites and sync them directly to your YeastMaster unit!",
    btn_tour: "✨ TAKE A QUICK TOUR",
    selected: "Selected:",
    search_placeholder: "Search strains (e.g. 'IPA', 'WLP')...",
    btn_add_strain: "+ ADD HOUSE STRAIN / WILD CAPTURE",
    target_device: "TARGET DEVICE",
    loading_devices: "Loading devices...",
    btn_sync: "SYNC TO SELECTED DEVICE",
    btn_edit: "EDIT DETAILS",
    btn_delete: "DELETE"
},

calc: {
            title: "Pitch Calculators",
            choose: "Choose your yeast source:",
            selected: "Selected:",
            btn_change: "Change",
            btn_dry: "Dry Yeast",
            btn_liquid: "Liquid Yeast",
            btn_slurry: "Slurry",
            btn_bank: "From Yeast Bank",
            inoculation: "Inoculation Method",
            btn_loop: "Single Loop",
            btn_wash: "Whole Slant Wash",
            batch_size: "Batch Size (Liters)",
            og: "Original Gravity (SG)",
            pitch_rate: "Target Pitch Rate",
            rate_low: "0.35 (Low / Manufacturer rec.)",
            rate_std: "0.50 (Standard Ale)",
            rate_pro: "0.75 (Pro Ale Pitch)",
            rate_high: "1.00 (High Gravity Ale)",
            rate_lager: "1.50 (Standard Lager)",
            btn_calc: "Calculate",
            results: "Results",
            cells_in_pack: "Cells in Pack",
            mfg_date: "Mfg Date",
            add_package: "+ Add another package",
        },

        about: {
            back: "← BACK",
            title: "YEASTMASTER",
            desc: "Take absolute command of your fermentation. YeastMaster is a dedicated hardware unit and cloud ecosystem designed for the modern homebrewer, bridging the gap between the biological art of brewing and precise data control.",
            hw_title: "📟 The Hardware Unit",
            hw_desc: "A dedicated physical controller with a crisp OLED display. Click to explore how it controls your fridge and heating element.",
            cloud_title: "☁️ The Cloud App",
            free: "FREE",
            cloud_desc: "Monitor your fermentation from anywhere in the world. Build custom temperature profiles in the Profiler, manage your dry hop schedules, and sync everything effortlessly.",
            lib_title: "🔬 The Yeast Library",
            lib_desc: "Stop guessing. Discover our ever-growing guide to the world's most popular yeast strains and learn how to coax out the perfect flavors for your beer."
        },
        about_lib: {
            title: "THE YEAST LIBRARY",
            desc: "A decoder ring for the world of brewing microbiology. We don't sell yeast — we help you master it.",
            card1_title: "🕵️‍♂️ Cracking the Code",
            card1_p1: "If you're new to brewing, names like <strong>WLP001</strong> or <strong>Wyeast 1056</strong> might look like secret passwords. Here is the translation:",
            card1_p2: "<strong>WLP</strong> stands for White Labs, and <strong>Wyeast</strong> is another legendary laboratory. Both produce top-tier <em>liquid</em> yeast. Names like <strong>SafAle</strong>, <strong>Fermentis</strong>, and <strong>Lallemand</strong> are famous producers of <em>dry</em> yeast. We have handpicked the absolute best and most interesting commercial strains from all of them and gathered their data in one place.",
            card2_title: "🌡️ Why Temperature is Everything",
            card2_p1: "Any yeast can ferment sugar into alcohol. But <em>how</em> the beer tastes depends entirely on temperature. A Belgian yeast fermented at 18°C might taste like clean pear, but if you let it rise to 25°C it explodes with spicy black pepper and bubblegum.",
            card2_p2: "Our library provides detailed guides on how to treat each specific strain to coax out the perfect flavors (esters and phenols), including when to raise the heat for a 'Diacetyl Rest' to clean up buttery off-flavors."
        },
        about_cloud: {
            title: "THE CLOUD APP",
            desc: "Your digital command center. YeastMaster isn't just a smart thermometer; it's a complete ecosystem for managing your fermentation from anywhere in the world.",
            card1_title: "📡 Global Monitoring",
            card1_p1: "Whether you're at work, on the couch, or on vacation, the Live Dashboard keeps you connected to your brew. Watch the temperature curve draw itself in real-time, check the ambient air in your fridge, and get ultimate peace of mind knowing exactly what phase your yeast is currently working through.",
            card2_title: "📈 The Profiler",
            card2_p1: "Professional brewers rarely keep their tanks at one static temperature. Fermentation is a journey.",
            card2_p2: "In <strong>The Profiler</strong>, you can visually drag and drop data points to build custom temperature curves. Want to pitch the yeast cool, let the temperature rise naturally during active fermentation, and automatically trigger a cold crash on day 10? Just draw the curve, save it, and sync it to your fridge.",
            card3_title: "🎓 The Lab & Academy",
            card3_p1: "The cloud app isn't just for monitoring. Jump over to <strong>The Lab</strong> to access professional pitch calculators, or explore the <strong>Academy</strong> for interactive, step-by-step lessons that will take you from a complete beginner to a confident yeast wrangler in no time."
        },
        about_hw: {
            title: "THE HARDWARE",
            desc: "YeastMaster is built around a custom ESP32 brain, designed to sit seamlessly on your fermentation chamber. It operates 100% locally, meaning your beer is safe even if the WiFi drops.",
            card1_title: "📺 Retro OLED Interface",
            card1_p1: "A high-contrast OLED screen paired with a tactile rotary encoder gives you a classic, laboratory-grade interface. Adjust offsets, change yeast profiles, or trigger a cold crash right at the fridge.",
            card2_title: "🌡️ Dual Temp Probes",
            card2_p1: "Precision requires data. YeastMaster uses two detachable, waterproof sensors. One measures the ambient air in the fridge, while the other sits directly in the beer (or taped to the fermenter), allowing the PID logic to prevent massive temperature swings.",
            card3_title: "⚡ Wireless Relays",
            card3_p1: "No dangerous high-voltage wiring. YeastMaster sends 433MHz radio signals directly to wireless smart plugs. One for your fridge (cooling), and one for a heat mat (heating). Total control, zero electrical hazards."
        },

        academy: {
            title: "In the lab",
            info_title: "Yeast Management Academy",
            info_1: "Roll up your sleeves and become a microbiologist!",
            info_2: "Step into the Lab and discover the fascinating world of yeast management.",
            hero_tag: "Start Here",
            hero_title: "Welcome to the Lab",
            hero_desc: "You're already a microbiologist. Let's set up your kitchen lab and start harvesting liquid gold.",
            hero_btn: "GET STARTED ➔",
            calc_title: "Pitch Calculators",
            calc_desc: "Calculate optimal pitch rates and starter steps.",
            washing_title: "Yeast Washing 101",
            washing_desc: "Wash the yeast cake and harvest 'liquid gold' (slurry).",
            starters_title: "Yeast Starters 101",
            starters_desc: "Wake up your yeast and ensure a healthy fermentation.",
            stirplate_title: "Stir Plates 101",
            stirplate_desc: "Why magnetic vortexes are a brewer's best friend.",
            counting_title: "Pro Cell Counting",
            counting_desc: "Using microscopes and hemocytometers like a pro.",
            agar_title: "Mastering Agar Plates",
            agar_desc: "Learn to pour, streak, and isolate pure strains.",
            wild_title: "Capturing Wild Yeast",
            wild_desc: "Hunt for local microbes and brew something unique.",
            btn_back: "← BACK TO ACADEMY"
        },
        
        settings: {
            title: "SETTINGS",
            theme: "Theme",
            dark: "DARK",
            light: "LIGHT",
            temp_unit: "Temperature Unit",
            accent: "Accent Color",
            language_label: "Language",
            notifications_title: "NOTIFICATIONS",
            push: "Push Notifications",
            push_desc: "Enable push notifications to receive alerts on your phone regarding temperature fluctuations, power outages, or when it's time to dry hop.",
            device_mgmt: "Device Management",
            active_device: "Active Device",
            status: "Status",
            status_connected: "CONNECTED",
            nickname: "Nickname",
            device_id: "Device ID (MAC)",
            remove: "Remove Active Device",
            add_device: "+ ADD NEW YEASTMASTER",
            support: "SUPPORT & FEEDBACK",
            btn_bug: "REPORT BUG",
            btn_idea: "SUGGEST IDEA",
            btn_logout: "LOG OUT"
        },
        action: {
            COOLING: "COOLING",
            HEATING: "HEATING",
            IDLE: "IDLE"
        },
        phase: {
            PRIMARY: "PRIMARY",
            "DIACETYL REST": "DIACETYL REST",
            "COLD CRASH": "COLD CRASH"
        },
        status: {
            offline: "OFFLINE",
            min_ago: "m ago",
            idle: "IDLE",
            running: "RUNNING",
            cooling: "COOLING",
            heating: "HEATING",
            finished: "FINISHED"
        },
        alerts: {
            dry_hop: "🌿 TIME TO DRY HOP!",
            dump: "🧪 TIME TO DUMP YEAST!",
            crash: "❄️ TIME TO COLD CRASH!",
            power: "⚠️ CONNECTION LOST! Check power/WiFi.",
            temp: "🔥 TEMP DEVIATION! >2.0°C difference."
        },
        libTour: {
    step1: "Double-click on a card to read about the strain. Single-click to select it for your device!",
    step2: "Here are the hardware profiles. These control your fridge temperatures automatically.",
    step3: "Click to expand the profile to see the temperature steps!",
    step4: "Want to tweak a profile? Click 'Edit in Profiler' to add Dry Hop or Racking alarms!",
    step5: "Welcome to The Profiler! Here you can visually drag the points to tweak the fermentation curve.",
    step6: "Set your alarms for Dry hops and racking! They will show up on your timeline and alert you.",
    step7: "When saved, your modded profile lands at the bottom of the library with a ★ star, ready to be synced!",
    step8: "In the library you have the option to add your own unique captures and wild yeast.",
    step9: "You can track capture dates, origins, and keep personal lab notes for every wild yeast you find!",
    step10: "Your wild captures live safely at the bottom of your library, right next to your modded profiles!",
    step11: "Tour ended! You are now ready to master the Yeast Library. 🍻 Click anywhere to finish."
},
    },
    sv: {
        nav: { home: "HEM", library: "BIBLIOTEK", lab: "LABBET", profiler: "PROFILERARE", live: "LIVE", settings: "INSTÄLLNINGAR" },
        dashboard: { 
            progress: "PROGRESS", 
            since_start: "Sedan start", 
            time_phase: "Tid i fas", 
            goal_temp: "Måltemp i fas",
            history: "TEMPERATURHISTORIK",
            fridge: "JÄSKÄRL", 
            last_sync: "SENASTE SYNC",
            start: "START",
            ready: "KLAR",
            air: "Luft:",
            phase_label: "Fas:",
            days: "d" 
        },

        profiler: {
            profile_name: "PROFILNAMN",
            profile_builder: "PROFILBYGGARE",
            overview: "ÖVERSIKT",
            summary: "PROFILSAMMANFATTNING",
            name_placeholder: "Min Lager...",
            pick_yeast: "Välj en basjäst...",
            save: "SPARA TILL BIBLIOTEK",
            day: "Dag",
            hold_until: "Håll till Dag",
            free_rise: "Fri höjning till",
            drop_to: "Sänk till",
            reach: "Nå",
            rise_to: "Höj till",
            by_day: "vid Dag",
            pitch: "Pitch",
            primary: "Primär",
            cleanup: "Diacetylrast",
            cold_crash: "Kallkrasch",
            condition: "Konditionering",
        },

        lab: {
            title: "Profilbyggaren",
            info_1: "Välj en jäst och dra i punkterna för att bygga din jäsprofil.",
            info_2: "När du är klar, spara och hitta din skräddarsydda profil i Jästbiblioteket.",
            info_3: "Glöm inte torrhumlingen!",
            profile_name: "PROFILNAMN",
            profile_name_placeholder: "t.ex. JUICEBMB",
            pick_strain: "Välj jäst",
            builder_title: "PROFILBYGGARE",
            btn_overview: "🔍 ÖVERSIKT",
            chart_placeholder: "Välj en basjäst och namnge din profil ovan 👆",
            summary_title: "PROFILSAMMANFATTNING",
            phase_pitch: "Pitch",
            phase_primary: "Primär",
            phase_cleanup: "Diacetylrast",
            phase_crash: "Kallkrasch",
            phase_condition: "Konditionering",
            day: "Dag 0 @",
            hold_until: "Håll till Dag",
            reach: "Nå",
            drop_to: "Sänk till",
            by_day: "vid Dag",
            btn_add_hops: "+ LÄGG TILL TORRHUMLING",
            btn_add_dump: "+ TAPPA OM / DUMPA",
            schedule_hop: "Torrhumling schemalagd till Dag",
            schedule_dump: "Omtappning schemalagd till Dag",
            btn_save: "SPARA PROFIL"
        },

        soul: {
            title: "JÄST",
            subtitle: "Ölens själ.",
            desc1_a: "Vi tror att ölens sanna själ lever inom jästen. Som det gamla bryggordspråket säger: ",
            desc1_quote: '"Bryggaren gör vörten, men jästen gör ölet."',
            desc1_b: " Det finns ett djupt under i hur dessa mikroskopiska hantverkare förvandlar en enkel, söt vätska till det oändligt komplexa och själfulla elixiret vi kallar öl.",
            desc2: "Soulof.beer är en hyllning till denna biologiska magi. Oavsett om du är här för att utforska vårt bibliotek av historiska stammar eller för att ta full kontroll över din jäsning, är detta ditt laboratorium. Övervaka din brygd i realtid, synka anpassade profiler till din YeastMaster-enhet och bemästra jäsningens konst.",
            what_is: "Vad är YeastMaster?",
            what_desc: "Upptäck hårdvaran och appens funktioner.",
            prompt: "Redo att hantera ditt bibliotek eller övervaka din enhet?",
            btn_login: "GÅ TILL INLOGGNING"
        },

        library: {
    title: "Jästbibliotek",
    info_1: "Bläddra i samlingen av jäststammar.",
    info_2: "<strong>Dubbelklicka</strong> (eller håll inne) på ett kort för att läsa om stammen och dess YeastMaster-profiler.",
    info_3: "Välj upp till 10 favoriter och synka dem direkt till din YeastMaster-enhet!",
    btn_tour: "✨ TA EN SNABB TOUR",
    selected: "Valda:",
    search_placeholder: "Sök jäststammar (t.ex. 'IPA', 'WLP')...",
    btn_add_strain: "+ LÄGG TILL HUSJÄST / VILDFÅNGST",
    target_device: "MÅLENHET",
    loading_devices: "Laddar enheter...",
    btn_sync: "SYNKA TILL VALD ENHET",
    btn_edit: "REDIGERA DETALJER",
    btn_delete: "TA BORT"
},

calc: {
            title: "Pitchkalkylator",
            choose: "Välj din jästkälla:",
            selected: "Vald:",
            btn_change: "Ändra",
            btn_dry: "Torrjäst",
            btn_liquid: "Flytande Jäst",
            btn_slurry: "Slurry (Jästkaka)",
            btn_bank: "Från Jästbank",
            inoculation: "Inokuleringsmetod",
            btn_loop: "Enkel Ögla (Loop)",
            btn_wash: "Hel Rörtvätt (Slant Wash)",
            batch_size: "Batchvolym (Liter)",
            og: "Original Gravity (SG)",
            pitch_rate: "Målvärde (Pitch Rate)",
            rate_low: "0.35 (Låg / Tillverkarens rek.)",
            rate_std: "0.50 (Standard Ale)",
            rate_pro: "0.75 (Proffsens Ale-nivå)",
            rate_high: "1.00 (Stark Ale / High Gravity)",
            rate_lager: "1.50 (Standard Lager)",
            btn_calc: "Beräkna",
            results: "Resultat",
         cells_in_pack: "Celler per förpackning",
            mfg_date: "Tillverkningsdatum",
            add_package: "+ Lägg till förpackning",
        },

about: {
            back: "← TILLBAKA",
            title: "YEASTMASTER",
            desc: "Ta absolut kontroll över din jäsning. YeastMaster är en dedikerad hårdvaruenhet och ett molnekosystem designat för den moderna hembryggaren, som överbryggar klyftan mellan bryggningens biologiska konst och exakt datakontroll.",
            hw_title: "📟 Hårdvaran",
            hw_desc: "En dedikerad fysisk kontroller med en skarp OLED-skärm. Klicka för att se hur den styr din kyl och värmekälla.",
            cloud_title: "☁️ Molnappen",
            free: "GRATIS",
            cloud_desc: "Övervaka din jäsning var du än är i världen. Bygg anpassade temperaturprofiler i Profileraren, hantera torrhumling och synka allt smidigt.",
            lib_title: "🔬 Jästbiblioteket",
            lib_desc: "Sluta gissa. Upptäck vår växande guide till världens mest populära jäststammar och lär dig hur du lockar fram de perfekta smakerna till ditt öl."
        },
        about_lib: {
            title: "JÄSTBIBLIOTEKET",
            desc: "En avkodningsring för bryggningens mikrobiologi. Vi säljer inte jäst — vi hjälper dig att bemästra den.",
            card1_title: "🕵️‍♂️ Knäck koden",
            card1_p1: "Om du är ny inom bryggning kan namn som <strong>WLP001</strong> eller <strong>Wyeast 1056</strong> se ut som hemliga lösenord. Här är översättningen:",
            card1_p2: "<strong>WLP</strong> står för White Labs, och <strong>Wyeast</strong> är ett annat legendariskt laboratorium. Båda producerar <em>flytande</em> jäst av högsta klass. Namn som <strong>SafAle</strong>, <strong>Fermentis</strong> och <strong>Lallemand</strong> är kända tillverkare av <em>torrjäst</em>. Vi har handplockat de absolut bästa och mest intressanta kommersiella stammarna från dem alla och samlat deras data på ett och samma ställe.",
            card2_title: "🌡️ Varför temperatur är allt",
            card2_p1: "Vilken jäst som helst kan jäsa socker till alkohol. Men <em>hur</em> ölet smakar beror helt på temperaturen. En belgisk jäst som jäser vid 18°C kan smaka som ren päron, men låter du den stiga till 25°C exploderar den av kryddig svartpeppar och tuggummi.",
            card2_p2: "Vårt bibliotek ger dig detaljerade guider till hur du hanterar varje specifik stam för att locka fram de perfekta smakerna (estrar och fenoler), inklusive när du ska höja värmen för en 'Diacetylrast' för att städa upp smöriga bismaker."
        },
        about_cloud: {
            title: "MOLNAPPEN",
            desc: "Din digitala kommandocentral. YeastMaster är inte bara en smart termometer; det är ett komplett ekosystem för att hantera din jäsning oavsett var du befinner dig.",
            card1_title: "📡 Global Övervakning",
            card1_p1: "Oavsett om du är på jobbet, i soffan eller på semester, håller Live Dashboard dig uppkopplad till din brygd. Se temperaturkurvan ritas upp i realtid, håll koll på luften i kylen och få ultimat sinnesro genom att veta exakt vilken fas din jäst befinner sig i.",
            card2_title: "📈 Profileraren",
            card2_p1: "Professionella bryggare håller sällan sina tankar på en och samma statiska temperatur. Jäsning är en resa.",
            card2_p2: "I <strong>Profileraren</strong> kan du visuellt dra och släppa datapunkter för att bygga anpassade temperaturkurvor. Vill du pitcha jästen svalt, låta temperaturen stiga naturligt under aktiv jäsning, och automatiskt trigga en kallkrasch på dag 10? Rita bara kurvan, spara den och synka den till din kyl.",
            card3_title: "🎓 Labbet & Akademin",
            card3_p1: "Molnappen är inte bara till för övervakning. Hoppa över till <strong>Labbet</strong> för att få tillgång till professionella pitch-kalkylatorer, eller utforska <strong>Akademin</strong> för interaktiva steg-för-steg-lektioner som tar dig från total nybörjare till en självsäker jästhanterare på nolltid."
        },
        about_hw: {
            title: "HÅRDVARAN",
            desc: "YeastMaster är byggd kring en skräddarsydd ESP32-hjärna, designad för att sitta sömlöst på ditt jäskåp. Den fungerar 100 % lokalt, vilket betyder att din öl är säker även om WiFi-nätverket går ner.",
            card1_title: "📺 Retro OLED-gränssnitt",
            card1_p1: "En högkontrast OLED-skärm kombinerat med en taktil ratt ger dig ett klassiskt gränssnitt av laboratoriekvalitet. Justera offsets, byt jästprofiler eller trigga en kallkrasch direkt vid kylen.",
            card2_title: "🌡️ Dubbla Temperatursensorer",
            card2_p1: "Precision kräver data. YeastMaster använder två avtagbara, vattentäta sensorer. Den ena mäter den omgivande luften i kylen, medan den andra sitter direkt i ölet (eller tejpad på jäskärlet), vilket låter PID-logiken förhindra massiva temperatursvängningar.",
            card3_title: "⚡ Trådlösa Reläer",
            card3_p1: "Ingen farlig högspänningsdragning. YeastMaster skickar 433MHz-radiosignaler direkt till trådlösa smarta uttag. Ett för din kyl (kylning) och ett för en värmematta (värmning). Total kontroll, noll elektriska risker."
        },

        academy: {
            title: "I labbet",
            info_title: "Yeast Management Academy",
            info_1: "Kavla upp ärmarna och bli en mikrobiolog!",
            info_2: "Kliv in i labbet och upptäck den fascinerande världen av jästhantering.",
            hero_tag: "Börja Här",
            hero_title: "Välkommen till Labbet",
            hero_desc: "Du är redan en mikrobiolog. Låt oss sätta upp ditt kökslabb och börja skörda flytande guld.",
            hero_btn: "KOM IGÅNG ➔",
            calc_title: "Pitchkalkylator",
            calc_desc: "Beräkna optimal jästmängd och förkultur.",
            washing_title: "Jästtvätt 101",
            washing_desc: "Tvätta jästkakan och skörda 'flytande guld' (slurry).",
            starters_title: "Förkulturer 101",
            starters_desc: "Väck din jäst och säkra en hälsosam jäsning.",
            stirplate_title: "Magnetomrörare 101",
            stirplate_desc: "Varför magnetiska virvlar är bryggarens bästa vän.",
            counting_title: "Proffsens Cellräkning",
            counting_desc: "Använd mikroskop och hemocytometer som ett proffs.",
            agar_title: "Bemästra Agarplattor",
            agar_desc: "Lär dig gjuta, stryka och isolera rena stammar.",
            wild_title: "Fånga Vildjäst",
            wild_desc: "Jaga lokala mikrober och brygg något unikt.",
            btn_back: "← TILLBAKA TILL LABBET"
        },

        settings: {
            title: "INSTÄLLNINGAR",
            theme: "Tema",
            dark: "MÖRK",
            light: "LJUS",
            temp_unit: "Temperaturenhet",
            accent: "Accentfärg",
            language_label: "Språk",
            notifications_title: "NOTISER",
            push: "Push-notiser",
            push_desc: "Aktivera push-notiser för att få larm i mobilen om temperaturavvikelser, strömavbrott eller när det är dags att torrhumla.",
            device_mgmt: "Hantera enheter",
            active_device: "Aktiv enhet",
            status: "Status",
            status_connected: "ANSLUTEN",
            nickname: "Smeknamn",
            device_id: "Enhets-ID (MAC)",
            remove: "Ta bort enhet",
            add_device: "+ LÄGG TILL YEASTMASTER",
            support: "SUPPORT & FEEDBACK",
            btn_bug: "RAPPORTERA BUGG",
            btn_idea: "FÖRESLÅ IDÉ",
            btn_logout: "LOGGA UT"
        },
        action: {
            COOLING: "KYLER",
            HEATING: "VÄRMER",
            IDLE: "VILAR"
        },
        phase: {
            PRIMARY: "PRIMÄR",
            "DIACETYL REST": "DIAKETYLRAST",
            "COLD CRASH": "KALLKRASCH"
        },
        status: {
            offline: "OFFLINE",
            min_ago: "m sedan",
            idle: "VILOLÄGE",
            running: "AKTIV",
            cooling: "KYLER",
            heating: "VÄRMER",
            finished: "AVSLUTAD"
        },
        alerts: {
            dry_hop: "🌿 DAGS ATT TORRHUMLA!",
            dump: "🧪 DAGS ATT TÖMMA JÄST!",
            crash: "❄️ DAGS FÖR COLD CRASH!",
            power: "⚠️ ANSLUTNING BRUTEN! Kolla ström/WiFi.",
            temp: "🔥 TEMP-AVVIKELSE! >2.0°C skillnad."
        },
        libTour: {
    step1: "Dubbelklicka på ett kort för att läsa om stammen. Enkelklicka för att välja den till din enhet!",
    step2: "Här är hårdvaruprofilerna. Dessa styr dina kylskåpstemperaturer helt automatiskt.",
    step3: "Klicka för att fälla ut profilen och se alla temperatursteg!",
    step4: "Vill du skräddarsy en profil? Klicka på 'Redigera i Profilerare' för att lägga till larm för torrhumling eller omtappning!",
    step5: "Välkommen till Profileraren! Här kan du dra i punkterna visuellt för att justera jäsningkurvan.",
    step6: "Ställ in dina larm för torrhumling och omtappning! De dyker upp på din tidslinje och varnar dig när det är dags.",
    step7: "När du sparar hamnar din modifierade profil längst ner i biblioteket med en ★-stjärna, redo att synkas!",
    step8: "I biblioteket har du även möjlighet att lägga till dina egna unika vildfångster och husjäster.",
    step9: "Du kan spåra fångstdatum, ursprung och föra personliga labbackanteckningar för varje vildjäst du hittar!",
    step10: "Dina vildfångster sparas säkert längst ner i ditt bibliotek, precis bredvid dina modifierade profiler!",
    step11: "Touren är slut! Du är nu redo att bemästra Jästbiblioteket. 🍻 Klicka var som helst för att avsluta."
},
    },
    de: {
        nav: { home: "START", library: "BIBLIOTHEK", lab: "LABOR", profiler: "PROFILER", live: "LIVE", settings: "SETUP" },
        dashboard: { 
            progress: "VERLAUF", 
            since_start: "Seit Start", 
            time_phase: "Phasendauer", 
            goal_temp: "Zieltemp. Phase",
            history: "TEMPERATURVERLAUF",
            fridge: "KÜHLSCHRANK",
            last_sync: "LETZTER SYNC",
            start: "START",
            ready: "FERTIG",
            air: "Luft:",
            phase_label: "Phase:",
            days: "d" 
        },

        profiler: {
            profile_name: "PROFILNAME",
            profile_builder: "PROFILERSTELLER",
            overview: "ÜBERSICHT",
            summary: "PROFILZUSAMMENFASSUNG",
            name_placeholder: "Mein Lager...",
            pick_yeast: "Basishefe wählen...",
            save: "IN BIBLIOTHEK SPEICHERN",
            day: "Tag",
            hold_until: "Halten bis Tag",
            free_rise: "Freier Anstieg auf",
            drop_to: "Senken auf",
            reach: "Erreiche",
            rise_to: "Erhöhen auf",
            by_day: "an Tag",
            pitch: "Anstellen",
            primary: "Hauptgärung",
            cleanup: "Diacetylrast",
            cold_crash: "Cold Crash",
            condition: "Konditionierung",
        },

        lab: {
            title: "Der Profiler",
            info_1: "Wähle eine Hefe und ziehe die Punkte, um dein Gärprofil zu erstellen.",
            info_2: "Wenn du fertig bist, speichere und finde dein Profil in der Hefebibliothek.",
            info_3: "Vergiss das Hopfenstopfen nicht!",
            profile_name: "PROFILNAME",
            profile_name_placeholder: "z.B. JUICEBMB",
            pick_strain: "Hefe wählen",
            builder_title: "PROFILERSTELLER",
            btn_overview: "🔍 ÜBERSICHT",
            chart_placeholder: "Wähle eine Basishefe und benenne dein Profil oben 👆",
            summary_title: "PROFILZUSAMMENFASSUNG",
            phase_pitch: "Anstellen",
            phase_primary: "Hauptgärung",
            phase_cleanup: "Diacetylrast",
            phase_crash: "Cold Crash",
            phase_condition: "Konditionierung",
            day: "Tag 0 @",
            hold_until: "Halten bis Tag",
            reach: "Erreiche",
            drop_to: "Senken auf",
            by_day: "an Tag",
            btn_add_hops: "+ KALTHOPFUNG",
            btn_add_dump: "+ UMSCHLAUCHEN",
            schedule_hop: "Kalthopfung geplant für Tag",
            schedule_dump: "Umschlauchen geplant für Tag",
            btn_save: "PROFIL SPEICHERN"
        },

        soul: {
            title: "HEFE",
            subtitle: "Die Seele des Bieres.",
            desc1_a: "Wir glauben, dass die wahre Seele des Bieres in der Hefe lebt. Wie ein altes Brausprichwort sagt: ",
            desc1_quote: '"Der Brauer macht die Würze, aber die Hefe macht das Bier."',
            desc1_b: " Es ist ein tiefes Wunder, wie diese mikroskopisch kleinen Handwerker eine einfache, süße Flüssigkeit in das unendlich komplexe und seelenvolle Elixier verwandeln, das wir Bier nennen.",
            desc2: "Soulof.beer ist eine Hommage an diese biologische Magie. Ob Sie hier sind, um unsere Bibliothek historischer Stämme zu erkunden oder die volle Kontrolle über Ihre Gärung zu übernehmen – dies ist Ihr Labor. Überwachen Sie Ihren Sud in Echtzeit, synchronisieren Sie benutzerdefinierte Profile mit Ihrer YeastMaster-Einheit und meistern Sie die Kunst der Gärung.",
            what_is: "Was ist YeastMaster?",
            what_desc: "Entdecken Sie die Hardware und die App-Funktionen.",
            prompt: "Bereit, Ihre Bibliothek zu verwalten oder Ihr Gerät zu überwachen?",
            btn_login: "ZUM LOGIN"
        },

        library: {
    title: "Hefebibliothek",
    info_1: "Durchsuchen Sie die Sammlung von Hefestämmen.",
    info_2: "<strong>Doppelklicken</strong> (oder gedrückt halten) Sie auf eine Karte, um mehr über sie und die YeastMaster-Profile zu erfahren.",
    info_3: "Wählen Sie bis zu 10 Favoriten aus und synchronisieren Sie diese direkt mit Ihrem YeastMaster!",
    btn_tour: "✨ EINE KURZE TOUR MACHEN",
    selected: "Ausgewählt:",
    search_placeholder: "Hefestämme suchen (z.B. 'IPA', 'WLP')...",
    btn_add_strain: "+ HAUSHEFE / WILDFANG HINZUFÜGEN",
    target_device: "ZIELGERÄT",
    loading_devices: "Geräte werden geladen...",
    btn_sync: "MIT AUSGEWÄHLTEM GERÄT SYNCHRONISIEREN",
    btn_edit: "DETAILS BEARBEITEN",
    btn_delete: "LÖSCHEN"
},

calc: {
            title: "Pitch-Rechner",
            choose: "Wählen Sie Ihre Hefequelle:",
            selected: "Ausgewählt:",
            btn_change: "Ändern",
            btn_dry: "Trockenhefe",
            btn_liquid: "Flüssighefe",
            btn_slurry: "Hefeaufschlämmung (Slurry)",
            btn_bank: "Aus der Hefebank",
            inoculation: "Inokulationsmethode",
            btn_loop: "Einzelne Öse (Loop)",
            btn_wash: "Ganze Röhrchenwaschung",
            batch_size: "Chargengröße (Liter)",
            og: "Stammwürze (SG)",
            pitch_rate: "Ziel-Pitch-Rate",
            rate_low: "0.35 (Niedrig / Herstellerempf.)",
            rate_std: "0.50 (Standard Ale)",
            rate_pro: "0.75 (Profi Ale Pitch)",
            rate_high: "1.00 (Starkes Ale)",
            rate_lager: "1.50 (Standard Lager)",
            btn_calc: "Berechnen",
            results: "Ergebnisse",
          cells_in_pack: "Zellen pro Packung",
            mfg_date: "Herstellungsdatum",
            add_package: "+ Weiteres Paket hinzufügen",
        },

about: {
            back: "← ZURÜCK",
            title: "YEASTMASTER",
            desc: "Übernehmen Sie die absolute Kontrolle über Ihre Gärung. YeastMaster ist eine dedizierte Hardwareeinheit und ein Cloud-Ökosystem für den modernen Heimbrauer, das die Lücke zwischen der biologischen Kunst des Brauens und präziser Datenkontrolle schließt.",
            hw_title: "📟 Die Hardware",
            hw_desc: "Ein physischer Controller mit einem klaren OLED-Display. Klicken Sie, um zu sehen, wie er Ihren Kühlschrank und Ihre Heizung steuert.",
            cloud_title: "☁️ Die Cloud-App",
            free: "KOSTENLOS",
            cloud_desc: "Überwachen Sie Ihre Gärung von überall auf der Welt. Erstellen Sie Temperaturprofile im Profiler, verwalten Sie Hopfenstopfen und synchronisieren Sie alles mühelos.",
            lib_title: "🔬 Die Hefebibliothek",
            lib_desc: "Hören Sie auf zu raten. Entdecken Sie unseren stetig wachsenden Leitfaden zu den beliebtesten Hefestämmen der Welt."
        },
        about_lib: {
            title: "DIE HEFEBIBLIOTHEK",
            desc: "Ein Entschlüsselungsring für die Braumikrobiologie. Wir verkaufen keine Hefe — wir helfen Ihnen, sie zu meistern.",
            card1_title: "🕵️‍♂️ Den Code knacken",
            card1_p1: "Wenn Sie neu im Brauen sind, sehen Namen wie <strong>WLP001</strong> oder <strong>Wyeast 1056</strong> vielleicht wie geheime Passwörter aus. Hier ist die Übersetzung:",
            card1_p2: "<strong>WLP</strong> steht für White Labs, und <strong>Wyeast</strong> ist ein weiteres legendäres Labor. Beide produzieren erstklassige <em>flüssige</em> Hefe. Namen wie <strong>SafAle</strong>, <strong>Fermentis</strong> und <strong>Lallemand</strong> sind berühmte Hersteller von <em>Trockenhefe</em>. Wir haben die absolut besten kommerziellen Stämme ausgewählt und ihre Daten an einem Ort gesammelt.",
            card2_title: "🌡️ Warum die Temperatur alles ist",
            card2_p1: "Jede Hefe kann Zucker zu Alkohol vergären. Aber <em>wie</em> das Bier schmeckt, hängt ganz von der Temperatur ab. Eine bei 18°C vergorene belgische Hefe schmeckt vielleicht nach reiner Birne, aber bei 25°C explodiert sie mit würzigem schwarzem Pfeffer und Kaugummi.",
            card2_p2: "Unsere Bibliothek bietet detaillierte Anleitungen, wie Sie jeden Stamm behandeln müssen, um die perfekten Aromen herauszukitzeln, einschließlich wann Sie die Wärme für eine 'Diacetylrast' erhöhen sollten."
        },
        about_cloud: {
            title: "DIE CLOUD-APP",
            desc: "Ihr digitales Kommandozentrum. YeastMaster ist nicht nur ein smartes Thermometer; es ist ein komplettes Ökosystem zur Steuerung Ihrer Gärung.",
            card1_title: "📡 Globale Überwachung",
            card1_p1: "Egal ob Sie bei der Arbeit, auf der Couch oder im Urlaub sind, das Live-Dashboard hält Sie mit Ihrem Sud verbunden. Beobachten Sie, wie sich die Temperaturkurve in Echtzeit zeichnet und wissen Sie genau, in welcher Phase sich Ihre Hefe befindet.",
            card2_title: "📈 Der Profiler",
            card2_p1: "Professionelle Brauer halten ihre Tanks selten auf einer konstanten Temperatur. Gärung ist eine Reise.",
            card2_p2: "Im <strong>Profiler</strong> können Sie Datenpunkte visuell per Drag-and-Drop verschieben, um eigene Temperaturkurven zu erstellen. Zeichnen Sie die Kurve, speichern Sie sie und synchronisieren Sie sie mit Ihrem Kühlschrank.",
            card3_title: "🎓 Das Labor & Akademie",
            card3_p1: "Springen Sie hinüber ins <strong>Labor</strong>, um auf professionelle Pitch-Rechner zuzugreifen, oder erkunden Sie die <strong>Akademie</strong> für interaktive Lektionen, die Sie im Handumdrehen vom Anfänger zum Hefe-Meister machen."
        },
        about_hw: {
            title: "DIE HARDWARE",
            desc: "YeastMaster basiert auf einem benutzerdefinierten ESP32-Gehirn, das nahtlos an Ihrem Gärschrank angebracht wird. Es arbeitet zu 100 % lokal – Ihr Bier ist sicher, auch wenn das WLAN ausfällt.",
            card1_title: "📺 Retro-OLED-Schnittstelle",
            card1_p1: "Ein kontrastreiches OLED-Display gepaart mit einem taktilen Drehregler bietet Ihnen eine klassische Labor-Schnittstelle. Passen Sie Offsets an, ändern Sie Hefeprofile oder starten Sie einen Cold Crash direkt am Kühlschrank.",
            card2_title: "🌡️ Zwei Temperatursensoren",
            card2_p1: "Präzision erfordert Daten. YeastMaster verwendet zwei abnehmbare, wasserdichte Sensoren. Einer misst die Umgebungsluft im Kühlschrank, während der andere direkt im Bier sitzt.",
            card3_title: "⚡ Drahtlose Relais",
            card3_p1: "Keine gefährliche Hochspannungsverkabelung. YeastMaster sendet 433-MHz-Funksignale direkt an drahtlose smarte Steckdosen. Totale Kontrolle, null elektrische Gefahren."
        },

        academy: {
            title: "Im Labor",
            info_title: "Yeast Management Academy",
            info_1: "Krempeln Sie die Ärmel hoch und werden Sie Mikrobiologe!",
            info_2: "Treten Sie ins Labor ein und entdecken Sie die faszinierende Welt des Hefemanagements.",
            hero_tag: "Hier Starten",
            hero_title: "Willkommen im Labor",
            hero_desc: "Sie sind bereits ein Mikrobiologe. Richten wir Ihr Küchenlabor ein und fangen an, flüssiges Gold zu ernten.",
            hero_btn: "LOS GEHT'S ➔",
            calc_title: "Pitch-Rechner",
            calc_desc: "Berechnen Sie optimale Pitch-Raten und Starter.",
            washing_title: "Hefe Waschen 101",
            washing_desc: "Waschen Sie den Hefekuchen und ernten Sie 'flüssiges Gold'.",
            starters_title: "Hefestarter 101",
            starters_desc: "Wecken Sie Ihre Hefe auf und sorgen Sie für eine gesunde Gärung.",
            stirplate_title: "Magnetrührer 101",
            stirplate_desc: "Warum magnetische Wirbel der beste Freund des Brauers sind.",
            counting_title: "Profi Zellzählung",
            counting_desc: "Verwenden Sie Mikroskope und Zählkammern wie ein Profi.",
            agar_title: "Agarplatten Meistern",
            agar_desc: "Lernen Sie, reine Stämme zu gießen, auszustreichen und zu isolieren.",
            wild_title: "Wilde Hefe Fangen",
            wild_desc: "Jagen Sie lokale Mikroben und brauen Sie etwas Einzigartiges.",
            btn_back: "← ZURÜCK ZUM LABOR"
        },

        settings: {
            title: "EINSTELLUNGEN",
            theme: "Thema",
            dark: "DUNKEL",
            light: "HELL",
            temp_unit: "Temperatureinheit",
            accent: "Akzentfarbe",
            language_label: "Sprache",
            notifications_title: "BENACHRICHTIGUNGEN",
            push: "Push-Benachrichtigungen",
            push_desc: "Aktivieren Sie Push-Benachrichtigungen, um Alarme bei Temperaturabweichungen, Stromausfällen oder Hopfenstopfen zu erhalten.",
            device_mgmt: "Geräteverwaltung",
            active_device: "Aktives Gerät",
            status: "Status",
            status_connected: "VERBUNDEN",
            nickname: "Spitzname",
            device_id: "Geräte-ID (MAC)",
            remove: "Gerät entfernen",
            add_device: "+ YEASTMASTER HINZUFÜGEN",
            support: "HILFE & FEEDBACK",
            btn_bug: "FEHLER MELDEN",
            btn_idea: "IDEE VORSCHLAGEN",
            btn_logout: "ABMELDEN"
        },
        action: {
            COOLING: "KÜHLT",
            HEATING: "HEIZT",
            IDLE: "RUHT"
        },
        phase: {
            PRIMARY: "HAUPTGÄRUNG",
            "DIACETYL REST": "DIACETYLRAST",
            "COLD CRASH": "COLD CRASH" 
        },
        status: {
            offline: "OFFLINE",
            min_ago: "m her",
            idle: "LEERLAUF",
            running: "LÄUFT",
            cooling: "KÜHLT",
            heating: "HEIZT",
            finished: "BEENDET"
        },
        alerts: {
            dry_hop: "🌿 ZEIT ZUM HOPFENSTOPFEN!",
            dump: "🧪 HEFE ABLASSEN!",
            crash: "❄️ ZEIT FÜR COLD CRASH!",
            power: "⚠️ VERBINDUNG UNTERBROCHEN!",
            temp: "🔥 TEMP-ABWEICHUNG! >2.0°C diff."
        },
        libTour: {
    step1: "Doppelklicken Sie auf eine Karte, um mehr über den Stamm zu erfahren. Einmal klicken, um ihn für Ihr Gerät auszuwählen!",
    step2: "Hier sind die Hardware-Profile. Diese steuern Ihre Kühlschranktemperaturen vollautomatisch.",
    step3: "Klicken Sie hier, um das Profil zu erweitern und die Temperaturschritte zu sehen!",
    step4: "Möchten Sie ein Profil anpassen? Klicken Sie auf 'Im Profiler bearbeiten', um Hopfenstopf- oder Umschlaubalarme hinzuzufügen!",
    step5: "Willkommen im Profiler! Hier können Sie die Datenpunkte visuell ziehen, um die Gärungskurve anzupassen.",
    step6: "Stellen Sie Ihre Alarme für Hopfenstopfen und Umschwung ein! Sie werden auf Ihrer Timeline angezeigt und alarmieren Sie rechtzeitig.",
    step7: "Nach dem Speichern landet Ihr geändertes Profil mit einem ★-Stern unten in der Bibliothek, bereit zum Synchronisieren!",
    step8: "In der Bibliothek haben Sie die Möglichkeit, Ihre eigenen einzigartigen Wildfänge und Haushefen hinzuzufügen.",
    step9: "Sie können Fangdaten und Herkunft verfolgen und persönliche Labornotizen für jede gefundene Wildhefe führen!",
    step10: "Ihre Wildfänge leben sicher ganz unten in Ihrer Bibliothek, direkt neben Ihren modifizierten Profilen!",
    step11: "Tour beendet! Sie sind jetzt bereit, die Hefebibliothek zu meistern. 🍻 Klicken Sie irgendwo hin, um abzuschließen."
},
    }
};

// Exportera till globala window-objektet
window.translations = translations;
window.currentLang = localStorage.getItem('ym_language') || 'en';

function initLanguage() {
    setLanguage(window.currentLang);
}

function updateTexts() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keyString = element.getAttribute('data-i18n');
        const keys = keyString.split('.');
        let text = translations[window.currentLang];
        keys.forEach(k => { if(text) text = text[k]; });
        
        // MAGIN: Ändrat från innerText till innerHTML här nere! 👇
        if (text) element.innerHTML = text; 
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const keyString = element.getAttribute('data-i18n-placeholder');
        const keys = keyString.split('.');
        let text = translations[window.currentLang];
        keys.forEach(k => { if(text) text = text[k]; });
        if (text) element.placeholder = text;
    });
}

function setLanguage(lang) {
    window.currentLang = lang;
    localStorage.setItem('ym_language', lang);
    updateTexts();
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const onclickAttr = btn.getAttribute('onclick');
        if (onclickAttr) {
            const isActive = onclickAttr.includes(`'${lang}'`);
            btn.classList.toggle('active', isActive);
        }
    });
    
    window.dispatchEvent(new Event('languageChanged'));
}

window.yeastDescriptions = yeastDescriptions;

initLanguage();
