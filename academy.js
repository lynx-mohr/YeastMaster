const academyModules = {
    en: {
        'intro': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Welcome to the Lab</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Your Path to Mastery:</h4>
                    <ul class="wizard-checklist">
                        <li id="intro-mindset">1. The Mindset</li>
                        <li id="intro-gear">2. The Kitchen Lab</li>
                        <li id="intro-rewards">3. The Rewards</li>
                        <li id="intro-roadmap">4. The Roadmap</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🧠✨</div>
                        <h3>1. The Microbiologist Mindset</h3>
                        <p>Yeast management sounds intimidating. People talk about sterile labs, laminar flow hoods, and expensive microscopes.</p>
                        <p style="color: var(--accent-color); font-weight: bold; margin: 15px 0;">Forget all that for now.</p>
                        <p>If you can brew a batch of beer without infecting it, you already have the hygiene skills needed to harvest and reuse yeast. Good sanitation is 95% of the work!</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🫙🧽</div>
                        <h3>2. The Kitchen Lab</h3>
                        <p>You don't need a laboratory to start. Your kitchen counter is perfect. The core tools for your very first yeast harvest are incredibly simple:</p>
                        <ul style="color: #aaa; margin-top: 15px; line-height: 1.6; padding-left: 20px;">
                            <li>A spray bottle of <strong>Star San</strong> (or similar sanitizer).</li>
                            <li>A few clean <strong>Mason Jars</strong> with lids.</li>
                            <li>Some <strong>Dry Malt Extract (DME)</strong> to feed the yeast.</li>
                            <li>A regular cooking pot to boil sterile water.</li>
                        </ul>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">💰🍺</div>
                        <h3>3. The Rewards</h3>
                        <p>Why go through the trouble of saving and washing your own yeast?</p>
                        <ul style="color: #aaa; margin-top: 15px; line-height: 1.6; padding-left: 20px;">
                            <li><strong style="color: #fff;">Save Money:</strong> Liquid yeast is expensive. Buy a premium pack once, wash it, and use it for your next 5-10 batches!</li>
                            <li><strong style="color: #fff;">Better Beer:</strong> Pitching a massive, healthy slurry of your own yeast leads to faster, cleaner fermentations without lag time.</li>
                            <li><strong style="color: #fff;">Independence:</strong> Wake up on a Saturday and brew spontaneously, knowing you have world-class yeast ready in the fridge.</li>
                        </ul>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">🗺️🚀</div>
                        <h3>4. The Roadmap</h3>
                        <p>Don't try to learn everything at once. Follow this path at your own pace:</p>
                        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent-color); margin-top: 15px; font-size: 0.9rem; line-height: 1.6;">
                            <strong style="color: #fff;">Level 1:</strong> Buy an Erlenmeyer flask and learn <em>Yeast Starters</em>.<br>
                            <strong style="color: #fff;">Level 2:</strong> Master <em>Yeast Washing</em> from a finished beer.<br>
                            <strong style="color: #fff;">Level 3:</strong> Build or buy a <em>Stir Plate</em> for massive cell growth.<br>
                            <strong style="color: #fff;">Level 4:</strong> The final boss. <em>Agar Plates</em> and <em>Cell Counting</em>.
                        </div>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Back</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Next ➔</button>
                    </div>
                </div>
            </div>
        `,
        'calc': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Pitch Calculator</h2>
            <div class="calc-container" style="margin: 0; padding: 0; background: transparent; border: none;">
                <div class="calc-inputs">
                    <div class="input-group">
                        <label>Batch Volume (L)</label>
                        <input type="number" id="pitch-vol" value="20" oninput="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                    </div>
                    <div class="input-group">
                        <label>Gravity (OG)</label>
                        <input type="number" id="pitch-og" value="1.050" step="0.001" oninput="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                    </div>
                    <div class="input-group">
                        <label>Pitch Rate (M/ml/°P)</label>
                        <select id="pitch-rate" onchange="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                            <option value="0.75">0.75 (Standard Ale)</option>
                            <option value="1.0">1.0 (High Gravity Ale)</option>
                            <option value="1.5">1.5 (Standard Lager)</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label>Harvest Date</label>
                        <input type="date" id="pitch-date" onchange="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                    </div>
                </div>
                <div class="calc-results" style="display: flex; gap: 15px; margin-top: 20px;">
                    <div class="res-card" style="flex: 1; background: #111; padding: 20px; border-radius: 12px; border: 1px solid #333;">
                        <span class="res-label" style="display: block; font-size: 0.7rem; color: #888; font-weight: 800; margin-bottom: 5px;">CELLS NEEDED</span>
                        <span class="res-val" id="res-needed" style="display: block; font-size: 2rem; font-weight: 800; color: #fff;">--</span>
                        <span class="res-unit" style="font-size: 0.8rem; color: #666;">Billion cells</span>
                    </div>
                    <div class="res-card accent" style="flex: 1; background: #111; padding: 20px; border-radius: 12px; border: 1px solid #333; border-left: 4px solid var(--accent-color);">
                        <span class="res-label" style="display: block; font-size: 0.7rem; color: #888; font-weight: 800; margin-bottom: 5px;">EST. VIABILITY</span>
                        <span class="res-val" id="res-viability" style="display: block; font-size: 2rem; font-weight: 800; color: #fff;">--</span>
                        <span class="res-unit" id="res-days-old" style="font-size: 0.8rem; color: #666;">New</span>
                    </div>
                </div>
                <div id="pitch-warning" class="warning-box" style="display:none; margin-top: 20px; background: rgba(255, 68, 68, 0.1); border: 1px solid #ff4444; color: #ff4444; padding: 15px; border-radius: 8px; font-size: 0.9rem; text-align: center; font-weight: 600;">
                    ⚠️ Warning: Underpitching detected. Consider building a starter!
                </div>
            </div>
        `,
        'starters': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Yeast Starters 101</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>You will need:</h4>
                    <ul class="wizard-checklist" id="wizard-checklist">
                        <li id="item-flask">Erlenmeyer Flask</li>
                        <li id="item-scale">Precision Scale</li>
                        <li id="item-dme">Light DME</li>
                        <li id="item-water">Clean Water</li>
                        <li id="item-heat">Heat Source</li>
                        <li id="item-yeast">Yeast Pack</li>
                        <li id="item-stirbar">Stir Bar</li>
                        <li id="item-stirplate">Stir Plate</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🧽🧪</div>
                        <h3>1. Clean & Prepare</h3>
                        <p>Before we start, hygiene is everything. Make sure your Erlenmeyer flask is completely clean and sanitized.</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">⚖️🌾</div>
                        <h3>2. The Golden Ratio</h3>
                        <p>Place the flask on the scale. Weigh exactly <strong>100g of DME</strong> for every <strong>1 Liter of water</strong>. This creates a perfect 1.036 specific gravity.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">🔥🌡️</div>
                        <h3>3. Boil & Sterilize</h3>
                        <p>Move the flask to your heat source. Boil gently for 10-15 minutes to sterilize the wort. <br><br><em>Pro-tip: Add a drop of Fermcap-S to prevent boil-overs!</em></p>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">❄️🌪️</div>
                        <h3>4. Chill, Pitch & Spin</h3>
                        <p>Cool the flask to 20°C (68°F). Pitch your yeast, drop in the stir bar, and place it on the stir plate for 24-48 hours. Watch those cells multiply!</p>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Back</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Next ➔</button>
                    </div>
                </div>
            </div>
        `,
        'washing': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Yeast Washing 101</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>You will need:</h4>
                    <ul class="wizard-checklist" id="wizard-checklist">
                        <li id="item-jars">Mason Jars</li>
                        <li id="item-starsan">Star San</li>
                        <li id="item-water">Sterile Water (Cooled)</li>
                        <li id="item-cake">Yeast Cake</li>
                        <li id="item-fridge">Fridge Space</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🧽💧</div>
                        <h3>1. Prep & Dilute</h3>
                        <p>Sanitize everything with Star San. Pour your pre-boiled, cooled (sterile) water directly into the fermenter right on top of the dirty yeast cake.</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🌪️💦</div>
                        <h3>2. Shake it up</h3>
                        <p>Put the lid back on the fermenter and swirl it vigorously! Break the yeast cake apart completely until the water looks like a thick, muddy slurry.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">⏳🕰️</div>
                        <h3>3. Let Gravity Work</h3>
                        <p>Let the fermenter sit completely still for <strong>20-30 minutes</strong>. The heavy, dark trub and hop matter will sink rapidly, leaving the healthy yeast suspended in the milky liquid above.</p>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">🫗✨</div>
                        <h3>4. Harvest the Gold</h3>
                        <p>Carefully decant the milky liquid into your sanitized mason jars. Stop pouring the second you see the dark trub from the bottom trying to follow along.</p>
                    </div>
                    <div class="wizard-step" data-step="4">
                        <div class="wizard-icon">🧊🧮</div>
                        <h3>5. Crash & Pitch</h3>
                        <p>Put the jars in the fridge. In a few days, the yeast will compact into a clean white layer. On brew day, decant the water, let it warm up, and measure the slurry into our Pitch Calculator!</p>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Back</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Next ➔</button>
                    </div>
                </div>
            </div>
        `,
        'agar': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Mastering Agar Plates</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>The Lab Kit:</h4>
                    <ul class="wizard-checklist">
                        <li id="agar-powder">Agar-Agar Powder</li>
                        <li id="agar-dme">Light DME</li>
                        <li id="agar-dishes">Petri Dishes</li>
                        <li id="agar-loop">Inoculation Loop</li>
                        <li id="agar-flame">Flame (Bunsen/Torch)</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🥣🔥</div>
                        <h3>1. The Magic Gel</h3>
                        <p>Agar is just a gelatin-like substance made from algae. By mixing it with standard yeast starter wort (DME and water) and boiling it, we create a solid, sterile food surface for yeast to grow on.</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🧫✨</div>
                        <h3>2. Pouring Plates</h3>
                        <p>In a draft-free room (next to an open flame to create a sterile updraft that pushes dust away), carefully pour the hot liquid into sterile Petri dishes. Let them cool and solidify.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">〰️🦠</div>
                        <h3>3. Streaking for Isolation</h3>
                        <p>Dip your sterilized loop into a yeast sample. Gently drag it across the agar surface in a zig-zag pattern. Sterilize the loop, drag it through your first lines, and make new zig-zags. This spreads the cells thinner and thinner.</p>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">⚪🔍</div>
                        <h3>4. Harvesting a Colony</h3>
                        <p>Incubate the plates in the dark at room temp. After a few days, you'll see individual white dots. Each dot is a pure colony grown from a <strong>single yeast cell</strong>! Scoop one up and pitch it into a tiny test-tube starter.</p>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Back</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Next ➔</button>
                    </div>
                </div>
            </div>
        `,
        'wild': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Capturing Wild Yeast</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>The Hunter's Kit:</h4>
                    <ul class="wizard-checklist">
                        <li id="wild-jars">Mason Jars</li>
                        <li id="wild-wort">Low-Gravity Wort</li>
                        <li id="wild-hops">A few Hop Pellets</li>
                        <li id="wild-cloth">Cheesecloth</li>
                        <li id="wild-fruit">Fruit / Flowers</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🍯🛡️</div>
                        <h3>1. The Bait</h3>
                        <p>Create a weak wort (1.020 SG) and boil it with a few hop pellets. Hops are crucial here—they act as a shield against unwanted bacteria (like Lactobacillus), giving wild yeast a head start to take over the jar.</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🍎🌿</div>
                        <h3>2. The Capture</h3>
                        <p>Drop unwashed, organic fruit (apples, grapes, berries) or local flowers into your jar of cooled wort. Alternatively, cover the jar with cheesecloth and leave it under a fruit tree overnight to catch yeast riding the breeze.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">👃⚠️</div>
                        <h3>3. The Sniff Test</h3>
                        <p>Cover with foil and wait 3-5 days. If it ferments and smells like vomit, feet, or cheese—dump it (bacteria won). If it smells bready, fruity, or like Belgian spice—congratulations, you caught wild yeast!</p>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">🧫👑</div>
                        <h3>4. Taming the Beast</h3>
                        <p>Wild captures are always a mix of different yeast strains and maybe some wild mold. To make a reliable brewing yeast from this, use the <em>Agar Plate streaking method</em> to isolate a single, pure, great-smelling colony!</p>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Back</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Next ➔</button>
                    </div>
                </div>
            </div>
        `,
        'stirplate': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">The Magic of Stir Plates</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Why use one?</h4>
                    <ul class="wizard-checklist">
                        <li class="active-item" style="border-bottom: 1px dashed #333;">Constant Oxygenation</li>
                        <li class="active-item" style="border-bottom: 1px dashed #333;">Drives off toxic CO2</li>
                        <li class="active-item" style="border-bottom: 1px dashed #333;">Keeps yeast suspended</li>
                        <li class="active-item" style="color: var(--accent-color) !important;">10x Cell Growth!</li>
                    </ul>
                </div>
                <div class="ym-academy-content" style="display: block !important;">
                    <div style="display: flex; gap: 20px; align-items: flex-start; margin-bottom: 20px;">
                        <div style="font-size: 3rem; line-height: 1;">🌪️</div>
                        <div>
                            <h3 style="color: var(--accent-color); margin-top: 0; margin-bottom: 10px;">The Vortex</h3>
                            <p style="color: #ccc; line-height: 1.6; font-size: 0.95rem;">A magnetic stir plate creates a continuous vortex in your Erlenmeyer flask. This constant motion drastically increases the surface area of the liquid exposed to the air, pulling in oxygen which is crucial for yeast reproduction.</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 20px; align-items: flex-start;">
                        <div style="font-size: 3rem; line-height: 1;">🧲</div>
                        <div>
                            <h3 style="color: var(--accent-color); margin-top: 0; margin-bottom: 10px;">How it works</h3>
                            <p style="color: #ccc; line-height: 1.6; font-size: 0.95rem;">Inside the box is a spinning motor with a magnet attached to it. You drop a Teflon-coated "stir bar" (which is also a magnet) into your flask. As the motor spins, the stir bar locks onto the magnetic field and spins with it.</p>
                        </div>
                    </div>
                    <div style="margin-top: 30px; background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; border-left: 4px solid #f39c12;">
                        <strong style="color: #f39c12;">Pro-Tip:</strong> You don't need a massive tornado! A small dimple on the surface of the liquid is enough to keep the yeast in suspension and exchange gases perfectly.
                    </div>
                </div>
            </div>
        `,
        'counting': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Pro Cell Counting</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>The Pro Gear:</h4>
                    <ul class="wizard-checklist">
                        <li id="item-hemo">Hemocytometer</li>
                        <li id="item-microscope">Microscope (400x)</li>
                        <li id="item-blue">Methylene Blue</li>
                        <li id="item-pipette">Precision Pipettes</li>
                        <li id="item-counter">Tally Counter</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🧪💧</div>
                        <h3>1. Dilute & Stain</h3>
                        <p>Yeast slurry is way too crowded to count. We must dilute it accurately! Mix 1 part slurry with 99 parts distilled water (a <strong>1:100 dilution</strong>).</p>
                        <p style="font-size: 0.9em; color: #aaa;">Add a drop of <strong>Methylene Blue</strong> to the sample. Wait 1-2 minutes. Living cells will push the dye out and look clear. Dead cells will be stained blue!</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🔬🩸</div>
                        <h3>2. Load the Chamber</h3>
                        <p>A Hemocytometer is a thick glass slide with a microscopic, laser-etched grid. Place the special coverslip over the grid.</p>
                        <p style="font-size: 0.9em; color: #aaa;">Touch your pipette to the edge of the coverslip. <em>Capillary action</em> will suck the liquid right in. Let it sit for 3 minutes so the cells settle on the glass.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <h3 style="margin-bottom: 10px;">3. The 5 Squares</h3>
                        <p style="font-size: 0.9em; margin-bottom: 15px;">Locate the central grid at 400x magnification. It has 25 medium squares. To save time, we only count the <strong>4 corners</strong> and the <strong>center</strong> square (highlighted below).</p>
                        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 2px; background: #444; width: 140px; height: 140px; margin: 0 auto 15px; border: 2px solid #666; padding: 2px;">
                            <div style="background: var(--accent-color);"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: var(--accent-color);"></div>
                            <div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div>
                            <div style="background: #111;"></div><div style="background: #111;"></div><div style="background: var(--accent-color);"></div><div style="background: #111;"></div><div style="background: #111;"></div>
                            <div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div>
                            <div style="background: var(--accent-color);"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: var(--accent-color);"></div>
                        </div>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">📐🛑</div>
                        <h3>4. The L-Rule</h3>
                        <p>Some cells will sit exactly on the boundary lines. If you count them in one square, you might accidentally count them again in the next!</p>
                        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent-color); margin-top: 15px; text-align: left;">
                            <strong style="color: #fff;">The Universal Rule:</strong><br>
                            Count cells that touch the <strong>Top</strong> and <strong>Right</strong> lines.<br>
                            <em>Ignore</em> cells touching the <strong>Bottom</strong> and <strong>Left</strong> lines.
                        </div>
                    </div>
                    <div class="wizard-step" data-step="4">
                        <div class="wizard-icon">🧮✖️</div>
                        <h3>5. The Magic Formula</h3>
                        <p>Add up all the living (clear) cells you found in those 5 squares. Now plug it into the formula to find out how many cells are in one milliliter of your slurry!</p>
                        <div style="background: #111; padding: 15px; border-radius: 8px; border: 1px dashed #444; margin-top: 15px; font-family: monospace; font-size: 0.95rem; color: var(--accent-color);">
                            (Cells Counted / 5) <br>
                            × 25 <br>
                            × Dilution Factor (100) <br>
                            × 10,000 <br>
                            = Cells per mL
                        </div>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Back</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Next ➔</button>
                    </div>
                </div>
            </div>
        `
    },
    sv: {
        'intro': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Välkommen till Labbet</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Din Väg till Mästerskap:</h4>
                    <ul class="wizard-checklist">
                        <li id="intro-mindset">1. Mindset</li>
                        <li id="intro-gear">2. Kökslabbet</li>
                        <li id="intro-rewards">3. Belöningarna</li>
                        <li id="intro-roadmap">4. Din Färdplan</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🧠✨</div>
                        <h3>1. Mikrobiologens Mindset</h3>
                        <p>Jästhantering låter ofta skrämmande. Folk pratar om sterila labbmiljöer, dyra LAF-bänkar och mikroskop för tusentals kronor.</p>
                        <p style="color: var(--accent-color); font-weight: bold; margin: 15px 0;">Glöm allt det där för tillfället.</p>
                        <p>Om du klarar av att brygga en batch öl utan att infektera den, har du redan de hygienkunskaper som krävs för att skörda och återanvända jäst. God desinfektion är 95% av jobbet!</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🫙🧽</div>
                        <h3>2. Kökslabbet</h3>
                        <p>Du behöver inget laboratorium för att komma igång. Din köksbänk är perfekt. Standardverktygen för din allra första jästskörd är otroligt simpla:</p>
                        <ul style="color: #aaa; margin-top: 15px; line-height: 1.6; padding-left: 20px;">
                            <li>En sprayflaska med <strong>Star San</strong> (eller liknande).</li>
                            <li>Ett par rena <strong>glasburkar</strong> (typ Mason Jars) med lock.</li>
                            <li>Lite <strong>Torkat Maltextrakt (DME)</strong> för att mata jästen.</li>
                            <li>En vanlig kastrull för att koka sterilt vatten.</li>
                        </ul>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">💰🍺</div>
                        <h3>3. Belöningarna</h3>
                        <p>Varför ska man ens bemöda sig med att spara och tvätta sin egen jäst?</p>
                        <ul style="color: #aaa; margin-top: 15px; line-height: 1.6; padding-left: 20px;">
                            <li><strong style="color: #fff;">Spara Pengar:</strong> Flytande jäst är dyrt. Köp ett premiumpaket en gång, tvätta det, och använd det till dina nästa 5-10 bryggningar!</li>
                            <li><strong style="color: #fff;">Bättre Öl:</strong> Att pitcha en massiv, hälsosam mängd av din egen jäst leder till snabbare, renare jäsningar utan "lag time".</li>
                            <li><strong style="color: #fff;">Oberoende:</strong> Vakna upp på en lördag och brygg spontant, i vetskapen om att du har jäst i världsklass redo i kylen.</li>
                        </ul>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">🗺️🚀</div>
                        <h3>4. Din Färdplan</h3>
                        <p>Försök inte lära dig allting på en gång. Följ denna väg i din egen takt:</p>
                        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent-color); margin-top: 15px; font-size: 0.9rem; line-height: 1.6;">
                            <strong style="color: #fff;">Nivå 1:</strong> Köp en E-kolv och lär dig <em>Förkulturer</em>.<br>
                            <strong style="color: #fff;">Nivå 2:</strong> Bemästra <em>Jästtvätt</em> från ett färdigt öl.<br>
                            <strong style="color: #fff;">Nivå 3:</strong> Bygg eller köp en <em>Magnetomrörare</em> för massiv celltillväxt.<br>
                            <strong style="color: #fff;">Nivå 4:</strong> Slutbossen. <em>Agarplattor</em> och <em>Cellräkning</em>.
                        </div>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Tillbaka</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Nästa ➔</button>
                    </div>
                </div>
            </div>
        `,
        'calc': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Pitchkalkylator</h2>
            <div class="calc-container" style="margin: 0; padding: 0; background: transparent; border: none;">
                <div class="calc-inputs">
                    <div class="input-group">
                        <label>Batchvolym (L)</label>
                        <input type="number" id="pitch-vol" value="20" oninput="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                    </div>
                    <div class="input-group">
                        <label>Gravity (OG)</label>
                        <input type="number" id="pitch-og" value="1.050" step="0.001" oninput="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                    </div>
                    <div class="input-group">
                        <label>Pitch-ratio (M/ml/°P)</label>
                        <select id="pitch-rate" onchange="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                            <option value="0.75">0.75 (Standard Ale)</option>
                            <option value="1.0">1.0 (Stark Ale / High Gravity)</option>
                            <option value="1.5">1.5 (Standard Lager)</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label>Skördedatum</label>
                        <input type="date" id="pitch-date" onchange="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                    </div>
                </div>
                <div class="calc-results" style="display: flex; gap: 15px; margin-top: 20px;">
                    <div class="res-card" style="flex: 1; background: #111; padding: 20px; border-radius: 12px; border: 1px solid #333;">
                        <span class="res-label" style="display: block; font-size: 0.7rem; color: #888; font-weight: 800; margin-bottom: 5px;">CELLER SOM KRÄVS</span>
                        <span class="res-val" id="res-needed" style="display: block; font-size: 2rem; font-weight: 800; color: #fff;">--</span>
                        <span class="res-unit" style="font-size: 0.8rem; color: #666;">Miljarder celler</span>
                    </div>
                    <div class="res-card accent" style="flex: 1; background: #111; padding: 20px; border-radius: 12px; border: 1px solid #333; border-left: 4px solid var(--accent-color);">
                        <span class="res-label" style="display: block; font-size: 0.7rem; color: #888; font-weight: 800; margin-bottom: 5px;">UPPSKATTAD VIABILITET</span>
                        <span class="res-val" id="res-viability" style="display: block; font-size: 2rem; font-weight: 800; color: #fff;">--</span>
                        <span class="res-unit" id="res-days-old" style="font-size: 0.8rem; color: #666;">Ny</span>
                    </div>
                </div>
                <div id="pitch-warning" class="warning-box" style="display:none; margin-top: 20px; background: rgba(255, 68, 68, 0.1); border: 1px solid #ff4444; color: #ff4444; padding: 15px; border-radius: 8px; font-size: 0.9rem; text-align: center; font-weight: 600;">
                    ⚠️ Varning: För lite jäst (Underpitch) detekterat. Överväg att göra en förkultur!
                </div>
            </div>
        `,
        'starters': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Förkulturer 101</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Du behöver:</h4>
                    <ul class="wizard-checklist" id="wizard-checklist">
                        <li id="item-flask">E-kolv</li>
                        <li id="item-scale">Precisionsvåg</li>
                        <li id="item-dme">Ljust Maltextrakt</li>
                        <li id="item-water">Rent Vatten</li>
                        <li id="item-heat">Spis/Värmekälla</li>
                        <li id="item-yeast">Din Jäst</li>
                        <li id="item-stirbar">Loppa</li>
                        <li id="item-stirplate">Magnetomrörare</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🧽🧪</div>
                        <h3>1. Rengör & Förbered</h3>
                        <p>Innan vi börjar är hygien allt. Se till att din E-kolv är helt ren och desinficerad.</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">⚖️🌾</div>
                        <h3>2. Det Gyllene Snittet</h3>
                        <p>Placera flaskan på vågen. Väg upp exakt <strong>100g DME</strong> för varje <strong>1 Liter vatten</strong>. Detta skapar en perfekt vört på 1.036 SG.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">🔥🌡️</div>
                        <h3>3. Koka & Sterilisera</h3>
                        <p>Flytta flaskan till spisen. Koka försiktigt i 10-15 minuter för att sterilisera vörten. <br><br><em>Pro-tip: Tillsätt en droppe Fermcap-S för att förhindra överkok!</em></p>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">❄️🌪️</div>
                        <h3>4. Kyl, Pitcha & Snurra</h3>
                        <p>Kyl flaskan till 20°C. Pitcha din jäst, släpp ner magnetloppan och placera E-kolven på din magnetomrörare i 24-48 timmar. Se cellerna föröka sig!</p>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Tillbaka</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Nästa ➔</button>
                    </div>
                </div>
            </div>
        `,
        'washing': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Jästtvätt 101</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Du behöver:</h4>
                    <ul class="wizard-checklist" id="wizard-checklist">
                        <li id="item-jars">Glasburkar</li>
                        <li id="item-starsan">Star San</li>
                        <li id="item-water">Sterilt Vatten (Kylt)</li>
                        <li id="item-cake">Jästkaka</li>
                        <li id="item-fridge">Plats i Kylen</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🧽💧</div>
                        <h3>1. Preppa & Späd Ut</h3>
                        <p>Desinficera allt med Star San. Häll ditt förkokta, kylda (sterila) vatten direkt i jäskärlet, rakt ovanpå den smutsiga jästkakan.</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🌪️💦</div>
                        <h3>2. Skaka Loss</h3>
                        <p>Sätt tillbaka locket på jäskärlet och skaka kraftigt! Bryt isär jästkakan fullständigt tills vattnet ser ut som en tjock, lerig soppa.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">⏳🕰️</div>
                        <h3>3. Låt Tyngdkraften Jobba</h3>
                        <p>Låt jäskärlet stå helt stilla i <strong>20-30 minuter</strong>. Den tunga, mörka truben och humlen kommer att sjunka snabbt till botten, och lämnar den hälsosamma jästen svävande i den mjölkiga vätskan ovanför.</p>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">🫗✨</div>
                        <h3>4. Skörda Guldet</h3>
                        <p>Häll försiktigt (dekantera) den mjölkiga vätskan ner i dina desinficerade glasburkar. Sluta hälla i samma sekund som du ser den mörka truben från botten försöka följa med.</p>
                    </div>
                    <div class="wizard-step" data-step="4">
                        <div class="wizard-icon">🧊🧮</div>
                        <h3>5. Krascha & Pitcha</h3>
                        <p>Sätt in burkarna i kylen. På några dagar kommer jästen att pressas ihop till ett rent, vitt lager. På bryggdagen, häll av vattnet, låt burken bli rumsvarm, och mät in din "slurry" i vår Pitchkalkylator!</p>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Tillbaka</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Nästa ➔</button>
                    </div>
                </div>
            </div>
        `,
        'agar': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Bemästra Agarplattor</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Labb-kitet:</h4>
                    <ul class="wizard-checklist">
                        <li id="agar-powder">Agar-Agar Pulver</li>
                        <li id="agar-dme">Ljust Maltextrakt</li>
                        <li id="agar-dishes">Petriskålar</li>
                        <li id="agar-loop">Impfögla (Inoculation loop)</li>
                        <li id="agar-flame">Låga (Brännare/Gasbrännare)</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🥣🔥</div>
                        <h3>1. Den Magiska Gelen</h3>
                        <p>Agar är i princip en gelatinliknande substans gjord av alger. Genom att blanda det med vanlig vört för förkulturer (DME och vatten) och koka det, skapar vi en fast, steril matyta där jästen kan växa.</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🧫✨</div>
                        <h3>2. Gjuta Plattor</h3>
                        <p>I ett dragfritt rum (gärna bredvid en öppen låga för att skapa en steril uppvind som trycker bort damm), häll försiktigt den varma vätskan i sterila petriskålar. Låt dem svalna och stelna.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">〰️🦠</div>
                        <h3>3. Stryka för Isolering</h3>
                        <p>Doppa din steriliserade ögla i ett jästprov. Dra den försiktigt över agarytan i ett sicksack-mönster. Sterilisera öglan, dra den genom dina första linjer, och gör nya sicksack-mönster. Detta sprider ut cellerna tunnare och tunnare.</p>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">⚪🔍</div>
                        <h3>4. Skörda en Koloni</h3>
                        <p>Inkubera plattorna i mörker i rumstemperatur. Efter ett par dagar kommer du att se individuella vita prickar. Varje prick är en ren koloni som vuxit från en <strong>enda jästcell</strong>! Skopa upp en och pitcha ner den i en minimal teströrs-förkultur.</p>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Tillbaka</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Nästa ➔</button>
                    </div>
                </div>
            </div>
        `,
        'wild': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Fånga Vildjäst</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Jägarens Kit:</h4>
                    <ul class="wizard-checklist">
                        <li id="wild-jars">Glasburkar</li>
                        <li id="wild-wort">Svag Vört</li>
                        <li id="wild-hops">Några Humlepellets</li>
                        <li id="wild-cloth">Ostduk (Silduk)</li>
                        <li id="wild-fruit">Frukt / Blommor</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🍯🛡️</div>
                        <h3>1. Betet</h3>
                        <p>Skapa en svag vört (1.020 SG) och koka den med några få humlepellets. Humlen är avgörande här—den fungerar som en sköld mot oönskade bakterier (som Lactobacillus), vilket ger vildjästen ett försprång att ta över burken.</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🍎🌿</div>
                        <h3>2. Fångsten</h3>
                        <p>Släpp ner otvättad, ekologisk frukt (äpplen, druvor, bär) eller lokala blommor i din burk med kyld vört. Ett annat alternativ är att täcka burken med en silduk och ställa den under ett fruktträd över natten för att fånga jäst som flyger i vinden.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">👃⚠️</div>
                        <h3>3. Snifftestet</h3>
                        <p>Täck med folie och vänta 3-5 dagar. Om det jäser och luktar spya, fotsvett eller ost—häll ut det (bakterierna vann). Om det luktar brödigt, fruktigt eller som belgisk krydda—grattis, du har fångat vildjäst!</p>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">🧫👑</div>
                        <h3>4. Tämja Odjuret</h3>
                        <p>Vilda fångster är alltid en mix av olika jäststammar och ofta lite vildmögel. För att göra detta till en pålitlig bryggjäst, använd <em>Agarplattans strykningsmetod</em> för att isolera en enda, ren koloni som doftar fantastiskt!</p>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Tillbaka</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Nästa ➔</button>
                    </div>
                </div>
            </div>
        `,
        'stirplate': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Magin med Magnetomrörare</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Varför använda en?</h4>
                    <ul class="wizard-checklist">
                        <li class="active-item" style="border-bottom: 1px dashed #333;">Konstant Syresättning</li>
                        <li class="active-item" style="border-bottom: 1px dashed #333;">Vädra ut giftig CO2</li>
                        <li class="active-item" style="border-bottom: 1px dashed #333;">Håller jästen svävande</li>
                        <li class="active-item" style="color: var(--accent-color) !important;">10x Celltillväxt!</li>
                    </ul>
                </div>
                <div class="ym-academy-content" style="display: block !important;">
                    <div style="display: flex; gap: 20px; align-items: flex-start; margin-bottom: 20px;">
                        <div style="font-size: 3rem; line-height: 1;">🌪️</div>
                        <div>
                            <h3 style="color: var(--accent-color); margin-top: 0; margin-bottom: 10px;">Vortexen</h3>
                            <p style="color: #ccc; line-height: 1.6; font-size: 0.95rem;">En magnetomrörare skapar en kontinuerlig virvelström (vortex) i din E-kolv. Denna konstanta rörelse ökar drastiskt vätskans ytarea som exponeras mot luften, och drar ner syre som är helt avgörande för jästens reproduktion.</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 20px; align-items: flex-start;">
                        <div style="font-size: 3rem; line-height: 1;">🧲</div>
                        <div>
                            <h3 style="color: var(--accent-color); margin-top: 0; margin-bottom: 10px;">Hur det fungerar</h3>
                            <p style="color: #ccc; line-height: 1.6; font-size: 0.95rem;">Inuti lådan sitter en snurrande fläktmotor med en magnet fastsatt. Du släpper ner en teflonbelagd "loppa" (som också är en magnet) i din kolv. När motorn snurrar, låser loppan fast i magnetfältet och snurrar med den.</p>
                        </div>
                    </div>
                    <div style="margin-top: 30px; background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; border-left: 4px solid #f39c12;">
                        <strong style="color: #f39c12;">Pro-Tip:</strong> Du behöver inte en massiv tornado! En liten grop (dimple) på vätskans yta är tillräckligt för att hålla jästen svävande och skapa ett perfekt gasutbyte.
                    </div>
                </div>
            </div>
        `,
        'counting': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Professionell Cellräkning</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Proffsens utrustning:</h4>
                    <ul class="wizard-checklist">
                        <li id="item-hemo">Hemocytometer</li>
                        <li id="item-microscope">Mikroskop (400x)</li>
                        <li id="item-blue">Metylenblått</li>
                        <li id="item-pipette">Precisionspipetter</li>
                        <li id="item-counter">Handklickare</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🧪💧</div>
                        <h3>1. Späd Ut & Färga</h3>
                        <p>Jästslurry är alldeles för trångt för att kunna räknas. Vi måste späda ut den exakt! Blanda 1 del slurry med 99 delar destillerat vatten (en <strong>1:100 utspädning</strong>).</p>
                        <p style="font-size: 0.9em; color: #aaa;">Tillsätt en droppe <strong>Metylenblått</strong> till provet. Vänta 1-2 minuter. Levande celler kommer att trycka ut färgen och se genomskinliga ut. Döda celler kommer att färgas blå!</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🔬🩸</div>
                        <h3>2. Ladda Kammaren</h3>
                        <p>En Hemocytometer är ett tjockt objektglas med ett mikroskopiskt, lasergraverat rutnät. Placera det speciella täckglaset över rutnätet.</p>
                        <p style="font-size: 0.9em; color: #aaa;">Rör din pipett mot kanten av täckglaset. <em>Kapillärkraften</em> kommer att suga in vätskan. Låt det sitta i 3 minuter så att cellerna lägger sig på glaset.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <h3 style="margin-bottom: 10px;">3. De 5 Kvadraterna</h3>
                        <p style="font-size: 0.9em; margin-bottom: 15px;">Hitta det centrala rutnätet i 400x förstoring. Det har 25 medelstora kvadrater. För att spara tid räknar vi bara de <strong>4 hörnen</strong> och <strong>mittenkvadraten</strong> (markerade nedan).</p>
                        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 2px; background: #444; width: 140px; height: 140px; margin: 0 auto 15px; border: 2px solid #666; padding: 2px;">
                            <div style="background: var(--accent-color);"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: var(--accent-color);"></div>
                            <div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div>
                            <div style="background: #111;"></div><div style="background: #111;"></div><div style="background: var(--accent-color);"></div><div style="background: #111;"></div><div style="background: #111;"></div>
                            <div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div>
                            <div style="background: var(--accent-color);"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: var(--accent-color);"></div>
                        </div>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">📐🛑</div>
                        <h3>4. L-Regeln</h3>
                        <p>Vissa celler kommer att sitta exakt på gränslinjerna. Om du räknar dem i en kvadrat, kanske du råkar räkna dem igen i nästa!</p>
                        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent-color); margin-top: 15px; text-align: left;">
                            <strong style="color: #fff;">Den Universella Regeln:</strong><br>
                            Räkna celler som rör <strong>Topp-</strong> och <strong>Höger</strong>-linjerna.<br>
                            <em>Ignorera</em> celler som rör <strong>Botten-</strong> och <strong>Vänster</strong>-linjerna.
                        </div>
                    </div>
                    <div class="wizard-step" data-step="4">
                        <div class="wizard-icon">🧮✖️</div>
                        <h3>5. Den Magiska Formeln</h3>
                        <p>Lägg ihop alla levande (genomskinliga) celler du hittade i de 5 kvadraterna. Stoppa in det i formeln för att ta reda på hur många celler som finns i en enda milliliter av din slurry!</p>
                        <div style="background: #111; padding: 15px; border-radius: 8px; border: 1px dashed #444; margin-top: 15px; font-family: monospace; font-size: 0.95rem; color: var(--accent-color);">
                            (Celler Räknade / 5) <br>
                            × 25 <br>
                            × Utspädningsfaktor (100) <br>
                            × 10,000 <br>
                            = Celler per mL
                        </div>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Tillbaka</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Nästa ➔</button>
                    </div>
                </div>
            </div>
        `
    },
    de: {
        'intro': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Willkommen im Labor</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Ihr Weg zur Meisterschaft:</h4>
                    <ul class="wizard-checklist">
                        <li id="intro-mindset">1. Die Einstellung</li>
                        <li id="intro-gear">2. Das Küchenlabor</li>
                        <li id="intro-rewards">3. Die Belohnungen</li>
                        <li id="intro-roadmap">4. Der Fahrplan</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🧠✨</div>
                        <h3>1. Die Einstellung eines Mikrobiologen</h3>
                        <p>Hefemanagement klingt einschüchternd. Die Leute reden über sterile Labore, Laminar-Flow-Hauben und teure Mikroskope.</p>
                        <p style="color: var(--accent-color); font-weight: bold; margin: 15px 0;">Vergessen Sie das erst einmal alles.</p>
                        <p>Wenn Sie einen Sud Bier brauen können, ohne ihn zu infizieren, haben Sie bereits die Hygiene-Fähigkeiten, die zum Ernten und Wiederverwenden von Hefe erforderlich sind. Gute Hygiene ist 95% der Arbeit!</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🫙🧽</div>
                        <h3>2. Das Küchenlabor</h3>
                        <p>Sie brauchen kein Labor, um anzufangen. Ihre Küchenarbeitsplatte ist perfekt. Die Kernwerkzeuge für Ihre allererste Hefeernte sind unglaublich einfach:</p>
                        <ul style="color: #aaa; margin-top: 15px; line-height: 1.6; padding-left: 20px;">
                            <li>Eine Sprühflasche mit <strong>Star San</strong> (oder ähnlichem Desinfektionsmittel).</li>
                            <li>Ein paar saubere <strong>Einmachgläser</strong> mit Deckeln.</li>
                            <li>Etwas <strong>Trockenmalzextrakt (DME)</strong>, um die Hefe zu füttern.</li>
                            <li>Ein normaler Kochtopf, um steriles Wasser zu kochen.</li>
                        </ul>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">💰🍺</div>
                        <h3>3. Die Belohnungen</h3>
                        <p>Warum sollten Sie sich die Mühe machen, Ihre eigene Hefe aufzubewahren und zu waschen?</p>
                        <ul style="color: #aaa; margin-top: 15px; line-height: 1.6; padding-left: 20px;">
                            <li><strong style="color: #fff;">Geld sparen:</strong> Flüssighefe ist teuer. Kaufen Sie einmal ein Premium-Paket, waschen Sie es und verwenden Sie es für Ihre nächsten 5-10 Sude!</li>
                            <li><strong style="color: #fff;">Besseres Bier:</strong> Das Pitchen einer massiven, gesunden Aufschlämmung Ihrer eigenen Hefe führt zu schnelleren, saubereren Gärungen ohne Verzögerung.</li>
                            <li><strong style="color: #fff;">Unabhängigkeit:</strong> Wachen Sie an einem Samstag auf und brauen Sie spontan, im Wissen, dass Sie Weltklasse-Hefe im Kühlschrank bereit haben.</li>
                        </ul>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">🗺️🚀</div>
                        <h3>4. Der Fahrplan</h3>
                        <p>Versuchen Sie nicht, alles auf einmal zu lernen. Folgen Sie diesem Weg in Ihrem eigenen Tempo:</p>
                        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent-color); margin-top: 15px; font-size: 0.9rem; line-height: 1.6;">
                            <strong style="color: #fff;">Level 1:</strong> Kaufen Sie einen Erlenmeyerkolben und lernen Sie <em>Hefestarter</em>.<br>
                            <strong style="color: #fff;">Level 2:</strong> Meistern Sie das <em>Hefewaschen</em> aus einem fertigen Bier.<br>
                            <strong style="color: #fff;">Level 3:</strong> Bauen oder kaufen Sie einen <em>Magnetrührer</em> für massives Zellwachstum.<br>
                            <strong style="color: #fff;">Level 4:</strong> Der Endgegner. <em>Agarplatten</em> und <em>Zählkammern</em>.
                        </div>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Zurück</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Weiter ➔</button>
                    </div>
                </div>
            </div>
        `,
        'calc': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Pitch-Rechner</h2>
            <div class="calc-container" style="margin: 0; padding: 0; background: transparent; border: none;">
                <div class="calc-inputs">
                    <div class="input-group">
                        <label>Ausschlagwürze (L)</label>
                        <input type="number" id="pitch-vol" value="20" oninput="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                    </div>
                    <div class="input-group">
                        <label>Stammwürze (SG)</label>
                        <input type="number" id="pitch-og" value="1.050" step="0.001" oninput="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                    </div>
                    <div class="input-group">
                        <label>Pitch-Rate (M/ml/°P)</label>
                        <select id="pitch-rate" onchange="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                            <option value="0.75">0.75 (Standard Ale)</option>
                            <option value="1.0">1.0 (Starkes Ale)</option>
                            <option value="1.5">1.5 (Standard Lager)</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label>Erntedatum</label>
                        <input type="date" id="pitch-date" onchange="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                    </div>
                </div>
                <div class="calc-results" style="display: flex; gap: 15px; margin-top: 20px;">
                    <div class="res-card" style="flex: 1; background: #111; padding: 20px; border-radius: 12px; border: 1px solid #333;">
                        <span class="res-label" style="display: block; font-size: 0.7rem; color: #888; font-weight: 800; margin-bottom: 5px;">BENÖTIGTE ZELLEN</span>
                        <span class="res-val" id="res-needed" style="display: block; font-size: 2rem; font-weight: 800; color: #fff;">--</span>
                        <span class="res-unit" style="font-size: 0.8rem; color: #666;">Milliarden Zellen</span>
                    </div>
                    <div class="res-card accent" style="flex: 1; background: #111; padding: 20px; border-radius: 12px; border: 1px solid #333; border-left: 4px solid var(--accent-color);">
                        <span class="res-label" style="display: block; font-size: 0.7rem; color: #888; font-weight: 800; margin-bottom: 5px;">GESCHÄTZTE VITALITÄT</span>
                        <span class="res-val" id="res-viability" style="display: block; font-size: 2rem; font-weight: 800; color: #fff;">--</span>
                        <span class="res-unit" id="res-days-old" style="font-size: 0.8rem; color: #666;">Neu</span>
                    </div>
                </div>
                <div id="pitch-warning" class="warning-box" style="display:none; margin-top: 20px; background: rgba(255, 68, 68, 0.1); border: 1px solid #ff4444; color: #ff4444; padding: 15px; border-radius: 8px; font-size: 0.9rem; text-align: center; font-weight: 600;">
                    ⚠️ Warnung: Zu wenig Hefe (Underpitching) erkannt. Erwägen Sie einen Starter!
                </div>
            </div>
        `,
        'starters': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Hefestarter 101</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Sie benötigen:</h4>
                    <ul class="wizard-checklist" id="wizard-checklist">
                        <li id="item-flask">Erlenmeyerkolben</li>
                        <li id="item-scale">Feinwaage</li>
                        <li id="item-dme">Heller Malzextrakt (DME)</li>
                        <li id="item-water">Sauberes Wasser</li>
                        <li id="item-heat">Wärmequelle (Herd)</li>
                        <li id="item-yeast">Ihre Hefe</li>
                        <li id="item-stirbar">Magnetfisch</li>
                        <li id="item-stirplate">Magnetrührer</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🧽🧪</div>
                        <h3>1. Reinigen & Vorbereiten</h3>
                        <p>Bevor wir anfangen, ist Hygiene alles. Stellen Sie sicher, dass Ihr Erlenmeyerkolben absolut sauber und desinfiziert ist.</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">⚖️🌾</div>
                        <h3>2. Der Goldene Schnitt</h3>
                        <p>Stellen Sie den Kolben auf die Waage. Wiegen Sie genau <strong>100 g DME</strong> für jeden <strong>1 Liter Wasser</strong> ab. Dies erzeugt eine perfekte Würze von 1.036 SG.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">🔥🌡️</div>
                        <h3>3. Kochen & Sterilisieren</h3>
                        <p>Stellen Sie den Kolben auf Ihre Wärmequelle. Kochen Sie sanft für 10-15 Minuten, um die Würze zu sterilisieren. <br><br><em>Pro-Tipp: Fügen Sie einen Tropfen Fermcap-S hinzu, um ein Überkochen zu verhindern!</em></p>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">❄️🌪️</div>
                        <h3>4. Kühlen, Anstellen & Rühren</h3>
                        <p>Kühlen Sie den Kolben auf 20 °C ab. Stellen Sie Ihre Hefe an, lassen Sie den Magnetfisch hineinfallen und stellen Sie ihn für 24-48 Stunden auf den Magnetrührer. Beobachten Sie, wie sich diese Zellen vermehren!</p>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Zurück</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Weiter ➔</button>
                    </div>
                </div>
            </div>
        `,
        'washing': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Hefe waschen 101</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Sie benötigen:</h4>
                    <ul class="wizard-checklist" id="wizard-checklist">
                        <li id="item-jars">Einmachgläser</li>
                        <li id="item-starsan">Star San</li>
                        <li id="item-water">Steriles Wasser (Abgekühlt)</li>
                        <li id="item-cake">Hefekuchen</li>
                        <li id="item-fridge">Platz im Kühlschrank</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🧽💧</div>
                        <h3>1. Vorbereiten & Verdünnen</h3>
                        <p>Desinfizieren Sie alles mit Star San. Gießen Sie Ihr vorgekochtes, abgekühltes (steriles) Wasser direkt in den Gärbehälter, genau auf den schmutzigen Hefekuchen.</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🌪️💦</div>
                        <h3>2. Aufschütteln</h3>
                        <p>Setzen Sie den Deckel wieder auf den Gärbehälter und schwenken Sie ihn kräftig! Brechen Sie den Hefekuchen vollständig auf, bis das Wasser wie eine dicke, schlammige Aufschlämmung aussieht.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">⏳🕰️</div>
                        <h3>3. Lassen Sie die Schwerkraft arbeiten</h3>
                        <p>Lassen Sie den Gärbehälter <strong>20-30 Minuten</strong> völlig still stehen. Der schwere, dunkle Trub und die Hopfenbestandteile sinken schnell zu Boden und hinterlassen die gesunde Hefe schwebend in der milchigen Flüssigkeit darüber.</p>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">🫗✨</div>
                        <h3>4. Das Gold ernten</h3>
                        <p>Dekantieren Sie die milchige Flüssigkeit vorsichtig in Ihre desinfizierten Einmachgläser. Hören Sie auf zu gießen, sobald Sie sehen, dass der dunkle Trub vom Boden mitkommen will.</p>
                    </div>
                    <div class="wizard-step" data-step="4">
                        <div class="wizard-icon">🧊🧮</div>
                        <h3>5. Crash & Pitch</h3>
                        <p>Stellen Sie die Gläser in den Kühlschrank. In ein paar Tagen wird sich die Hefe zu einer sauberen weißen Schicht verdichten. Am Brautag das Wasser abgießen, warm werden lassen und die Aufschlämmung in unserem Pitch-Rechner messen!</p>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Zurück</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Weiter ➔</button>
                    </div>
                </div>
            </div>
        `,
        'agar': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Agarplatten Meistern</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Das Labor-Kit:</h4>
                    <ul class="wizard-checklist">
                        <li id="agar-powder">Agar-Agar Pulver</li>
                        <li id="agar-dme">Heller Malzextrakt (DME)</li>
                        <li id="agar-dishes">Petrischalen</li>
                        <li id="agar-loop">Impföse</li>
                        <li id="agar-flame">Flamme (Bunsenbrenner/Gasbrenner)</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🥣🔥</div>
                        <h3>1. Das Magische Gel</h3>
                        <p>Agar ist im Grunde eine gelatineartige Substanz, die aus Algen gewonnen wird. Indem wir es mit handelsüblicher Hefestarterwürze (DME und Wasser) mischen und kochen, schaffen wir eine feste, sterile Nahrungsfläche, auf der Hefe wachsen kann.</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🧫✨</div>
                        <h3>2. Platten Gießen</h3>
                        <p>Gießen Sie die heiße Flüssigkeit in einem zugluftfreien Raum (neben einer offenen Flamme, um einen sterilen Aufwind zu erzeugen, der Staub fernhält) vorsichtig in sterile Petrischalen. Lassen Sie sie abkühlen und fest werden.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">〰️🦠</div>
                        <h3>3. Ausstreichen zur Isolierung</h3>
                        <p>Tauchen Sie Ihre sterilisierte Öse in eine Hefeprobe. Ziehen Sie sie vorsichtig im Zickzackmuster über die Agaroberfläche. Sterilisieren Sie die Öse, ziehen Sie sie durch Ihre ersten Linien und machen Sie neue Zickzacks. Dies verteilt die Zellen immer dünner.</p>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">⚪🔍</div>
                        <h3>4. Eine Kolonie Ernten</h3>
                        <p>Inkubieren Sie die Platten im Dunkeln bei Raumtemperatur. Nach einigen Tagen werden Sie einzelne weiße Punkte sehen. Jeder Punkt ist eine reine Kolonie, die aus einer <strong>einzigen Hefezelle</strong> gewachsen ist! Nehmen Sie eine auf und geben Sie sie in einen winzigen Reagenzglas-Starter.</p>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Zurück</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Weiter ➔</button>
                    </div>
                </div>
            </div>
        `,
        'wild': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Wilde Hefe Fangen</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Das Jäger-Kit:</h4>
                    <ul class="wizard-checklist">
                        <li id="wild-jars">Einmachgläser</li>
                        <li id="wild-wort">Schwache Würze</li>
                        <li id="wild-hops">Ein paar Hopfenpellets</li>
                        <li id="wild-cloth">Käsetuch (Passiertuch)</li>
                        <li id="wild-fruit">Obst / Blumen</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🍯🛡️</div>
                        <h3>1. Der Köder</h3>
                        <p>Erstellen Sie eine schwache Würze (1.020 SG) und kochen Sie sie mit ein paar Hopfenpellets. Hopfen ist hier entscheidend – er wirkt als Schutzschild gegen unerwünschte Bakterien (wie Lactobacillus) und gibt der wilden Hefe einen Vorsprung, um das Glas zu übernehmen.</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🍎🌿</div>
                        <h3>2. Der Fang</h3>
                        <p>Geben Sie ungewaschenes Bio-Obst (Äpfel, Trauben, Beeren) oder lokale Blumen in Ihr Glas mit abgekühlter Würze. Alternativ können Sie das Glas mit einem Käsetuch abdecken und es über Nacht unter einem Obstbaum stehen lassen, um Hefe einzufangen, die mit der Brise reist.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">👃⚠️</div>
                        <h3>3. Der Schnüffel-Test</h3>
                        <p>Mit Folie abdecken und 3-5 Tage warten. Wenn es gärt und nach Erbrochenem, Füßen oder Käse riecht – wegkippen (Bakterien haben gewonnen). Wenn es brotig, fruchtig oder wie belgisches Gewürz riecht – herzlichen Glückwunsch, Sie haben wilde Hefe gefangen!</p>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">🧫👑</div>
                        <h3>4. Die Bestie Zähmen</h3>
                        <p>Wilde Fänge sind immer eine Mischung aus verschiedenen Hefestämmen und vielleicht etwas wildem Schimmel. Um daraus eine zuverlässige Brauhefe zu machen, verwenden Sie die <em>Agarplatten-Ausstrichmethode</em>, um eine einzelne, reine, gut riechende Kolonie zu isolieren!</p>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Zurück</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Weiter ➔</button>
                    </div>
                </div>
            </div>
        `,
        'stirplate': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Die Magie der Magnetrührer</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Warum einen benutzen?</h4>
                    <ul class="wizard-checklist">
                        <li class="active-item" style="border-bottom: 1px dashed #333;">Konstante Sauerstoffanreicherung</li>
                        <li class="active-item" style="border-bottom: 1px dashed #333;">Treibt giftiges CO2 aus</li>
                        <li class="active-item" style="border-bottom: 1px dashed #333;">Hält Hefe in der Schwebe</li>
                        <li class="active-item" style="color: var(--accent-color) !important;">10x Zellwachstum!</li>
                    </ul>
                </div>
                <div class="ym-academy-content" style="display: block !important;">
                    <div style="display: flex; gap: 20px; align-items: flex-start; margin-bottom: 20px;">
                        <div style="font-size: 3rem; line-height: 1;">🌪️</div>
                        <div>
                            <h3 style="color: var(--accent-color); margin-top: 0; margin-bottom: 10px;">Der Vortex</h3>
                            <p style="color: #ccc; line-height: 1.6; font-size: 0.95rem;">Ein Magnetrührer erzeugt einen kontinuierlichen Wirbel (Vortex) in Ihrem Erlenmeyerkolben. Diese ständige Bewegung vergrößert die der Luft ausgesetzte Oberfläche der Flüssigkeit drastisch und zieht Sauerstoff hinein, der für die Hefereproduktion entscheidend ist.</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 20px; align-items: flex-start;">
                        <div style="font-size: 3rem; line-height: 1;">🧲</div>
                        <div>
                            <h3 style="color: var(--accent-color); margin-top: 0; margin-bottom: 10px;">Wie es funktioniert</h3>
                            <p style="color: #ccc; line-height: 1.6; font-size: 0.95rem;">Im Inneren der Box befindet sich ein drehender Motor, an dem ein Magnet befestigt ist. Sie lassen einen teflonbeschichteten "Rührfisch" (der ebenfalls ein Magnet ist) in Ihren Kolben fallen. Wenn sich der Motor dreht, rastet der Rührfisch in das Magnetfeld ein und dreht sich mit.</p>
                        </div>
                    </div>
                    <div style="margin-top: 30px; background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; border-left: 4px solid #f39c12;">
                        <strong style="color: #f39c12;">Pro-Tipp:</strong> Sie brauchen keinen massiven Tornado! Ein kleines Grübchen auf der Oberfläche der Flüssigkeit reicht aus, um die Hefe in der Schwebe zu halten und Gase perfekt auszutauschen.
                    </div>
                </div>
            </div>
        `,
        'counting': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Professionelle Zellzählung</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Die Profi-Ausrüstung:</h4>
                    <ul class="wizard-checklist">
                        <li id="item-hemo">Zählkammer (Hämocytometer)</li>
                        <li id="item-microscope">Mikroskop (400x)</li>
                        <li id="item-blue">Methylenblau</li>
                        <li id="item-pipette">Präzisionspipetten</li>
                        <li id="item-counter">Handzähler</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🧪💧</div>
                        <h3>1. Verdünnen & Anfärben</h3>
                        <p>Hefeaufschlämmung ist viel zu dicht, um sie zu zählen. Wir müssen sie genau verdünnen! Mischen Sie 1 Teil Aufschlämmung mit 99 Teilen destilliertem Wasser (eine <strong>1:100 Verdünnung</strong>).</p>
                        <p style="font-size: 0.9em; color: #aaa;">Geben Sie einen Tropfen <strong>Methylenblau</strong> zur Probe. Warten Sie 1-2 Minuten. Lebende Zellen drücken den Farbstoff heraus und sehen klar aus. Tote Zellen werden blau eingefärbt!</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🔬🩸</div>
                        <h3>2. Die Kammer Laden</h3>
                        <p>Ein Hämocytometer ist ein dicker Objektträger aus Glas mit einem mikroskopischen, lasergravierten Gitter. Legen Sie das spezielle Deckglas über das Gitter.</p>
                        <p style="font-size: 0.9em; color: #aaa;">Berühren Sie mit Ihrer Pipette den Rand des Deckglases. <em>Kapillarkraft</em> saugt die Flüssigkeit direkt ein. Lassen Sie es 3 Minuten ruhen, damit sich die Zellen auf dem Glas absetzen können.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <h3 style="margin-bottom: 10px;">3. Die 5 Quadrate</h3>
                        <p style="font-size: 0.9em; margin-bottom: 15px;">Suchen Sie das zentrale Gitter bei 400-facher Vergrößerung. Es hat 25 mittlere Quadrate. Um Zeit zu sparen, zählen wir nur die <strong>4 Ecken</strong> und das <strong>mittlere</strong> Quadrat (unten hervorgehoben).</p>
                        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 2px; background: #444; width: 140px; height: 140px; margin: 0 auto 15px; border: 2px solid #666; padding: 2px;">
                            <div style="background: var(--accent-color);"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: var(--accent-color);"></div>
                            <div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div>
                            <div style="background: #111;"></div><div style="background: #111;"></div><div style="background: var(--accent-color);"></div><div style="background: #111;"></div><div style="background: #111;"></div>
                            <div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div>
                            <div style="background: var(--accent-color);"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: var(--accent-color);"></div>
                        </div>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">📐🛑</div>
                        <h3>4. Die L-Regel</h3>
                        <p>Einige Zellen sitzen genau auf den Grenzlinien. Wenn Sie sie in einem Quadrat zählen, könnten Sie sie im nächsten versehentlich noch einmal zählen!</p>
                        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent-color); margin-top: 15px; text-align: left;">
                            <strong style="color: #fff;">Die universelle Regel:</strong><br>
                            Zählen Sie Zellen, die die <strong>obere</strong> und <strong>rechte</strong> Linie berühren.<br>
                            <em>Ignorieren</em> Sie Zellen, die die <strong>untere</strong> und <strong>linke</strong> Linie berühren.
                        </div>
                    </div>
                    <div class="wizard-step" data-step="4">
                        <div class="wizard-icon">🧮✖️</div>
                        <h3>5. Die Magische Formel</h3>
                        <p>Zählen Sie alle lebenden (klaren) Zellen zusammen, die Sie in diesen 5 Quadraten gefunden haben. Setzen Sie dies nun in die Formel ein, um herauszufinden, wie viele Zellen sich in einem Milliliter Ihrer Aufschlämmung befinden!</p>
                        <div style="background: #111; padding: 15px; border-radius: 8px; border: 1px dashed #444; margin-top: 15px; font-family: monospace; font-size: 0.95rem; color: var(--accent-color);">
                            (Gezählte Zellen / 5) <br>
                            × 25 <br>
                            × Verdünnungsfaktor (100) <br>
                            × 10.000 <br>
                            = Zellen pro mL
                        </div>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Zurück</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Weiter ➔</button>
                    </div>
                </div>
            </div>
        `
    },

    fr: {
        'intro': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Bienvenue au Labo</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Ton chemin vers la maîtrise :</h4>
                    <ul class="wizard-checklist">
                        <li id="intro-mindset">1. L'état d'esprit</li>
                        <li id="intro-gear">2. Le labo de cuisine</li>
                        <li id="intro-rewards">3. Les récompenses</li>
                        <li id="intro-roadmap">4. La feuille de route</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🧠✨</div>
                        <h3>1. L'état d'esprit du microbiologiste</h3>
                        <p>La gestion des levures semble intimidante. Les gens parlent de labos stériles, de hottes à flux laminaire et de microscopes hors de prix.</p>
                        <p style="color: var(--accent-color); font-weight: bold; margin: 15px 0;">Oublie tout ça pour l'instant.</p>
                        <p>Si tu sais brasser une cuvée sans la contaminer, tu as déjà les compétences d'hygiène nécessaires pour récolter et réutiliser ta levure. Une bonne désinfection, c'est 95 % du travail !</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🫙🧽</div>
                        <h3>2. Le labo de cuisine</h3>
                        <p>Tu n'as pas besoin d'un laboratoire pour commencer. Le plan de travail de ta cuisine est parfait. Les outils de base pour ta toute première récolte de levure sont incroyablement simples :</p>
                        <ul style="color: #aaa; margin-top: 15px; line-height: 1.6; padding-left: 20px;">
                            <li>Un vaporisateur de <strong>Star San</strong> (ou un désinfectant similaire).</li>
                            <li>Quelques <strong>bocaux en verre</strong> propres avec couvercles.</li>
                            <li>Un peu d'<strong>extrait de malt sec (DME)</strong> pour nourrir la levure.</li>
                            <li>Une casserole ordinaire pour faire bouillir de l'eau stérile.</li>
                        </ul>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">💰🍺</div>
                        <h3>3. Les récompenses</h3>
                        <p>Pourquoi se donner la peine de récupérer et de laver sa propre levure ?</p>
                        <ul style="color: #aaa; margin-top: 15px; line-height: 1.6; padding-left: 20px;">
                            <li><strong style="color: #fff;">Économiser :</strong> La levure liquide coûte cher. Achète un pack premium une fois, lave-le et utilise-le pour tes 5 à 10 prochaines cuvées !</li>
                            <li><strong style="color: #fff;">Une meilleure bière :</strong> Ensemencer une grande quantité de levure saine bien à toi donne des fermentations plus rapides et plus propres, sans temps de latence.</li>
                            <li><strong style="color: #fff;">L'indépendance :</strong> Réveille-toi un samedi et brasse spontanément, en sachant que tu as une levure de classe mondiale prête au frigo.</li>
                        </ul>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">🗺️🚀</div>
                        <h3>4. La feuille de route</h3>
                        <p>N'essaie pas de tout apprendre d'un coup. Suis ce chemin à ton rythme :</p>
                        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent-color); margin-top: 15px; font-size: 0.9rem; line-height: 1.6;">
                            <strong style="color: #fff;">Niveau 1 :</strong> Achète un erlenmeyer et apprends les <em>pieds de cuve</em>.<br>
                            <strong style="color: #fff;">Niveau 2 :</strong> Maîtrise le <em>lavage de levure</em> à partir d'une bière finie.<br>
                            <strong style="color: #fff;">Niveau 3 :</strong> Fabrique ou achète un <em>agitateur magnétique</em> pour une forte croissance cellulaire.<br>
                            <strong style="color: #fff;">Niveau 4 :</strong> Le boss final. Les <em>boîtes de gélose</em> et le <em>comptage cellulaire</em>.
                        </div>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Retour</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Suivant ➔</button>
                    </div>
                </div>
            </div>
        `,
        'calc': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Calculateur d'ensemencement</h2>
            <div class="calc-container" style="margin: 0; padding: 0; background: transparent; border: none;">
                <div class="calc-inputs">
                    <div class="input-group">
                        <label>Volume du lot (L)</label>
                        <input type="number" id="pitch-vol" value="20" oninput="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                    </div>
                    <div class="input-group">
                        <label>Densité (DI)</label>
                        <input type="number" id="pitch-og" value="1.050" step="0.001" oninput="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                    </div>
                    <div class="input-group">
                        <label>Taux d'ensemencement (M/ml/°P)</label>
                        <select id="pitch-rate" onchange="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                            <option value="0.75">0,75 (Ale standard)</option>
                            <option value="1.0">1,0 (Ale haute densité)</option>
                            <option value="1.5">1,5 (Lager standard)</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label>Date de récolte</label>
                        <input type="date" id="pitch-date" onchange="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                    </div>
                </div>
                <div class="calc-results" style="display: flex; gap: 15px; margin-top: 20px;">
                    <div class="res-card" style="flex: 1; background: #111; padding: 20px; border-radius: 12px; border: 1px solid #333;">
                        <span class="res-label" style="display: block; font-size: 0.7rem; color: #888; font-weight: 800; margin-bottom: 5px;">CELLULES REQUISES</span>
                        <span class="res-val" id="res-needed" style="display: block; font-size: 2rem; font-weight: 800; color: #fff;">--</span>
                        <span class="res-unit" style="font-size: 0.8rem; color: #666;">Milliards de cellules</span>
                    </div>
                    <div class="res-card accent" style="flex: 1; background: #111; padding: 20px; border-radius: 12px; border: 1px solid #333; border-left: 4px solid var(--accent-color);">
                        <span class="res-label" style="display: block; font-size: 0.7rem; color: #888; font-weight: 800; margin-bottom: 5px;">VIABILITÉ EST.</span>
                        <span class="res-val" id="res-viability" style="display: block; font-size: 2rem; font-weight: 800; color: #fff;">--</span>
                        <span class="res-unit" id="res-days-old" style="font-size: 0.8rem; color: #666;">Neuve</span>
                    </div>
                </div>
                <div id="pitch-warning" class="warning-box" style="display:none; margin-top: 20px; background: rgba(255, 68, 68, 0.1); border: 1px solid #ff4444; color: #ff4444; padding: 15px; border-radius: 8px; font-size: 0.9rem; text-align: center; font-weight: 600;">
                    ⚠️ Attention : sous-ensemencement détecté. Pense à préparer un pied de cuve !
                </div>
            </div>
        `,
        'starters': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Pieds de cuve 101</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Il te faut :</h4>
                    <ul class="wizard-checklist" id="wizard-checklist">
                        <li id="item-flask">Erlenmeyer</li>
                        <li id="item-scale">Balance de précision</li>
                        <li id="item-dme">DME clair</li>
                        <li id="item-water">Eau propre</li>
                        <li id="item-heat">Source de chaleur</li>
                        <li id="item-yeast">Pack de levure</li>
                        <li id="item-stirbar">Barreau aimanté</li>
                        <li id="item-stirplate">Agitateur magnétique</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🧽🧪</div>
                        <h3>1. Nettoyer & préparer</h3>
                        <p>Avant de commencer, l'hygiène est primordiale. Assure-toi que ton erlenmeyer est parfaitement propre et désinfecté.</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">⚖️🌾</div>
                        <h3>2. Le ratio d'or</h3>
                        <p>Pose l'erlenmeyer sur la balance. Pèse exactement <strong>100 g de DME</strong> pour chaque <strong>litre d'eau</strong>. Ça donne une densité parfaite de 1.036.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">🔥🌡️</div>
                        <h3>3. Bouillir & stériliser</h3>
                        <p>Mets l'erlenmeyer sur ta source de chaleur. Fais bouillir doucement 10-15 minutes pour stériliser le moût. <br><br><em>Astuce de pro : ajoute une goutte de Fermcap-S pour éviter les débordements !</em></p>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">❄️🌪️</div>
                        <h3>4. Refroidir, ensemencer & faire tourner</h3>
                        <p>Refroidis l'erlenmeyer à 20 °C. Ensemence ta levure, mets le barreau aimanté et place le tout sur l'agitateur pendant 24-48 heures. Regarde les cellules se multiplier !</p>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Retour</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Suivant ➔</button>
                    </div>
                </div>
            </div>
        `,
        'washing': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Lavage de levure 101</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Il te faut :</h4>
                    <ul class="wizard-checklist" id="wizard-checklist">
                        <li id="item-jars">Bocaux en verre</li>
                        <li id="item-starsan">Star San</li>
                        <li id="item-water">Eau stérile (refroidie)</li>
                        <li id="item-cake">Gâteau de levure</li>
                        <li id="item-fridge">Place au frigo</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🧽💧</div>
                        <h3>1. Préparer & diluer</h3>
                        <p>Désinfecte tout au Star San. Verse ton eau pré-bouillie et refroidie (stérile) directement dans le fermenteur, juste sur le gâteau de levure sale.</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🌪️💦</div>
                        <h3>2. Secoue bien</h3>
                        <p>Remets le couvercle sur le fermenteur et fais tourbillonner vigoureusement ! Casse complètement le gâteau de levure jusqu'à ce que l'eau ressemble à une boue épaisse.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">⏳🕰️</div>
                        <h3>3. Laisse la gravité agir</h3>
                        <p>Laisse le fermenteur totalement immobile pendant <strong>20-30 minutes</strong>. Le trub lourd et sombre et les résidus de houblon coulent vite, laissant la levure saine en suspension dans le liquide laiteux au-dessus.</p>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">🫗✨</div>
                        <h3>4. Récolte l'or</h3>
                        <p>Transvase délicatement le liquide laiteux dans tes bocaux désinfectés. Arrête de verser dès que tu vois le trub sombre du fond essayer de suivre.</p>
                    </div>
                    <div class="wizard-step" data-step="4">
                        <div class="wizard-icon">🧊🧮</div>
                        <h3>5. Choc à froid & ensemencement</h3>
                        <p>Mets les bocaux au frigo. En quelques jours, la levure se compacte en une couche blanche propre. Le jour du brassage, décante l'eau, laisse revenir à température et mesure la boue dans notre Calculateur d'ensemencement !</p>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Retour</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Suivant ➔</button>
                    </div>
                </div>
            </div>
        `,
        'agar': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Maîtriser les boîtes de gélose</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Le kit de labo :</h4>
                    <ul class="wizard-checklist">
                        <li id="agar-powder">Poudre d'agar-agar</li>
                        <li id="agar-dme">DME clair</li>
                        <li id="agar-dishes">Boîtes de Petri</li>
                        <li id="agar-loop">Anse d'inoculation</li>
                        <li id="agar-flame">Flamme (bec Bunsen/chalumeau)</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🥣🔥</div>
                        <h3>1. Le gel magique</h3>
                        <p>L'agar est simplement une substance gélatineuse faite à partir d'algues. En la mélangeant à du moût de pied de cuve classique (DME et eau) et en la faisant bouillir, on crée une surface nutritive solide et stérile pour faire pousser la levure.</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🧫✨</div>
                        <h3>2. Couler les boîtes</h3>
                        <p>Dans une pièce sans courant d'air (à côté d'une flamme nue qui crée un courant ascendant stérile repoussant la poussière), verse délicatement le liquide chaud dans des boîtes de Petri stériles. Laisse-les refroidir et se solidifier.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">〰️🦠</div>
                        <h3>3. Strier pour isoler</h3>
                        <p>Trempe ton anse stérilisée dans un échantillon de levure. Traîne-la doucement sur la surface de la gélose en zig-zag. Stérilise l'anse, repasse-la dans tes premières lignes et fais de nouveaux zig-zags. Ça étale les cellules de plus en plus finement.</p>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">⚪🔍</div>
                        <h3>4. Récolter une colonie</h3>
                        <p>Incube les boîtes à l'obscurité, à température ambiante. Après quelques jours, tu verras des points blancs individuels. Chaque point est une colonie pure issue d'une <strong>seule cellule de levure</strong> ! Préleve-en une et ensemence-la dans un petit pied de cuve en tube à essai.</p>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Retour</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Suivant ➔</button>
                    </div>
                </div>
            </div>
        `,
        'wild': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Capturer la levure sauvage</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Le kit du chasseur :</h4>
                    <ul class="wizard-checklist">
                        <li id="wild-jars">Bocaux en verre</li>
                        <li id="wild-wort">Moût de faible densité</li>
                        <li id="wild-hops">Quelques pellets de houblon</li>
                        <li id="wild-cloth">Étamine</li>
                        <li id="wild-fruit">Fruits / fleurs</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🍯🛡️</div>
                        <h3>1. L'appât</h3>
                        <p>Prépare un moût faible (1.020) et fais-le bouillir avec quelques pellets de houblon. Le houblon est crucial ici — il agit comme un bouclier contre les bactéries indésirables (comme les lactobacilles), donnant à la levure sauvage une longueur d'avance pour coloniser le bocal.</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🍎🌿</div>
                        <h3>2. La capture</h3>
                        <p>Plonge des fruits bio non lavés (pommes, raisins, baies) ou des fleurs locales dans ton bocal de moût refroidi. Ou bien couvre le bocal d'une étamine et laisse-le une nuit sous un arbre fruitier pour attraper les levures portées par la brise.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">👃⚠️</div>
                        <h3>3. Le test du nez</h3>
                        <p>Couvre de papier alu et attends 3-5 jours. Si ça fermente et que ça sent le vomi, les pieds ou le fromage — jette (les bactéries ont gagné). Si ça sent le pain, le fruit ou l'épice belge — félicitations, tu as attrapé de la levure sauvage !</p>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">🧫👑</div>
                        <h3>4. Dompter la bête</h3>
                        <p>Les captures sauvages sont toujours un mélange de différentes souches de levure et parfois de moisissures sauvages. Pour en tirer une levure de brassage fiable, utilise la <em>méthode de striage sur boîte de gélose</em> pour isoler une seule colonie pure qui sent bon !</p>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Retour</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Suivant ➔</button>
                    </div>
                </div>
            </div>
        `,
        'stirplate': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">La magie des agitateurs magnétiques</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Pourquoi en utiliser un ?</h4>
                    <ul class="wizard-checklist">
                        <li class="active-item" style="border-bottom: 1px dashed #333;">Oxygénation constante</li>
                        <li class="active-item" style="border-bottom: 1px dashed #333;">Chasse le CO2 toxique</li>
                        <li class="active-item" style="border-bottom: 1px dashed #333;">Maintient la levure en suspension</li>
                        <li class="active-item" style="color: var(--accent-color) !important;">Croissance cellulaire ×10 !</li>
                    </ul>
                </div>
                <div class="ym-academy-content" style="display: block !important;">
                    <div style="display: flex; gap: 20px; align-items: flex-start; margin-bottom: 20px;">
                        <div style="font-size: 3rem; line-height: 1;">🌪️</div>
                        <div>
                            <h3 style="color: var(--accent-color); margin-top: 0; margin-bottom: 10px;">Le vortex</h3>
                            <p style="color: #ccc; line-height: 1.6; font-size: 0.95rem;">Un agitateur magnétique crée un vortex continu dans ton erlenmeyer. Ce mouvement constant augmente énormément la surface de liquide exposée à l'air, ce qui capte l'oxygène, crucial pour la reproduction de la levure.</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 20px; align-items: flex-start;">
                        <div style="font-size: 3rem; line-height: 1;">🧲</div>
                        <div>
                            <h3 style="color: var(--accent-color); margin-top: 0; margin-bottom: 10px;">Comment ça marche</h3>
                            <p style="color: #ccc; line-height: 1.6; font-size: 0.95rem;">Dans le boîtier, un moteur tourne avec un aimant fixé dessus. Tu places un « barreau aimanté » recouvert de Téflon (qui est aussi un aimant) dans ton erlenmeyer. Quand le moteur tourne, le barreau s'accroche au champ magnétique et tourne avec lui.</p>
                        </div>
                    </div>
                    <div style="margin-top: 30px; background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; border-left: 4px solid #f39c12;">
                        <strong style="color: #f39c12;">Astuce de pro :</strong> Pas besoin d'une tornade géante ! Un petit creux à la surface du liquide suffit pour garder la levure en suspension et échanger les gaz parfaitement.
                    </div>
                </div>
            </div>
        `,
        'counting': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Comptage cellulaire pro</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Le matériel pro :</h4>
                    <ul class="wizard-checklist">
                        <li id="item-hemo">Hémocytomètre</li>
                        <li id="item-microscope">Microscope (400x)</li>
                        <li id="item-blue">Bleu de méthylène</li>
                        <li id="item-pipette">Pipettes de précision</li>
                        <li id="item-counter">Compteur manuel</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🧪💧</div>
                        <h3>1. Diluer & colorer</h3>
                        <p>La boue de levure est bien trop dense pour être comptée. Il faut la diluer précisément ! Mélange 1 part de boue avec 99 parts d'eau distillée (une <strong>dilution 1:100</strong>).</p>
                        <p style="font-size: 0.9em; color: #aaa;">Ajoute une goutte de <strong>bleu de méthylène</strong> à l'échantillon. Attends 1-2 minutes. Les cellules vivantes rejettent le colorant et restent claires. Les cellules mortes se colorent en bleu !</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🔬🩸</div>
                        <h3>2. Charger la chambre</h3>
                        <p>Un hémocytomètre est une lame de verre épaisse avec une grille microscopique gravée au laser. Place la lamelle spéciale sur la grille.</p>
                        <p style="font-size: 0.9em; color: #aaa;">Touche le bord de la lamelle avec ta pipette. La <em>capillarité</em> aspire le liquide directement. Laisse reposer 3 minutes pour que les cellules se déposent sur le verre.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <h3 style="margin-bottom: 10px;">3. Les 5 carrés</h3>
                        <p style="font-size: 0.9em; margin-bottom: 15px;">Repère la grille centrale au grossissement 400x. Elle a 25 carrés moyens. Pour gagner du temps, on ne compte que les <strong>4 coins</strong> et le carré du <strong>centre</strong> (surlignés ci-dessous).</p>
                        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 2px; background: #444; width: 140px; height: 140px; margin: 0 auto 15px; border: 2px solid #666; padding: 2px;">
                            <div style="background: var(--accent-color);"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: var(--accent-color);"></div>
                            <div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div>
                            <div style="background: #111;"></div><div style="background: #111;"></div><div style="background: var(--accent-color);"></div><div style="background: #111;"></div><div style="background: #111;"></div>
                            <div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div>
                            <div style="background: var(--accent-color);"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: var(--accent-color);"></div>
                        </div>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">📐🛑</div>
                        <h3>4. La règle en L</h3>
                        <p>Certaines cellules se trouvent pile sur les lignes de séparation. Si tu les comptes dans un carré, tu risques de les recompter dans le suivant !</p>
                        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent-color); margin-top: 15px; text-align: left;">
                            <strong style="color: #fff;">La règle universelle :</strong><br>
                            Compte les cellules qui touchent les lignes du <strong>haut</strong> et de <strong>droite</strong>.<br>
                            <em>Ignore</em> les cellules qui touchent les lignes du <strong>bas</strong> et de <strong>gauche</strong>.
                        </div>
                    </div>
                    <div class="wizard-step" data-step="4">
                        <div class="wizard-icon">🧮✖️</div>
                        <h3>5. La formule magique</h3>
                        <p>Additionne toutes les cellules vivantes (claires) trouvées dans ces 5 carrés. Insère le résultat dans la formule pour savoir combien de cellules il y a dans un millilitre de ta boue !</p>
                        <div style="background: #111; padding: 15px; border-radius: 8px; border: 1px dashed #444; margin-top: 15px; font-family: monospace; font-size: 0.95rem; color: var(--accent-color);">
                            (Cellules comptées / 5) <br>
                            × 25 <br>
                            × facteur de dilution (100) <br>
                            × 10 000 <br>
                            = Cellules par mL
                        </div>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Retour</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Suivant ➔</button>
                    </div>
                </div>
            </div>
        `
    },

    es: {
        'intro': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Bienvenido al Lab</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Tu camino hacia la maestría:</h4>
                    <ul class="wizard-checklist">
                        <li id="intro-mindset">1. La mentalidad</li>
                        <li id="intro-gear">2. El laboratorio de cocina</li>
                        <li id="intro-rewards">3. Las recompensas</li>
                        <li id="intro-roadmap">4. La hoja de ruta</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🧠✨</div>
                        <h3>1. La mentalidad del microbiólogo</h3>
                        <p>La gestión de levaduras suena intimidante. La gente habla de laboratorios estériles, campanas de flujo laminar y microscopios carísimos.</p>
                        <p style="color: var(--accent-color); font-weight: bold; margin: 15px 0;">Olvídate de todo eso por ahora.</p>
                        <p>Si sabes elaborar un lote de cerveza sin contaminarlo, ya tienes las habilidades de higiene necesarias para cosechar y reutilizar tu levadura. ¡Una buena desinfección es el 95 % del trabajo!</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🫙🧽</div>
                        <h3>2. El laboratorio de cocina</h3>
                        <p>No necesitas un laboratorio para empezar. La encimera de tu cocina es perfecta. Las herramientas básicas para tu primera cosecha de levadura son increíblemente simples:</p>
                        <ul style="color: #aaa; margin-top: 15px; line-height: 1.6; padding-left: 20px;">
                            <li>Un pulverizador de <strong>Star San</strong> (o un desinfectante similar).</li>
                            <li>Unos cuantos <strong>tarros de cristal</strong> limpios con tapa.</li>
                            <li>Un poco de <strong>extracto de malta seco (DME)</strong> para alimentar la levadura.</li>
                            <li>Una olla normal para hervir agua estéril.</li>
                        </ul>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">💰🍺</div>
                        <h3>3. Las recompensas</h3>
                        <p>¿Por qué molestarte en guardar y lavar tu propia levadura?</p>
                        <ul style="color: #aaa; margin-top: 15px; line-height: 1.6; padding-left: 20px;">
                            <li><strong style="color: #fff;">Ahorrar dinero:</strong> La levadura líquida es cara. ¡Compra un pack premium una vez, lávalo y úsalo para tus próximos 5-10 lotes!</li>
                            <li><strong style="color: #fff;">Mejor cerveza:</strong> Sembrar una gran cantidad de levadura sana propia da fermentaciones más rápidas y limpias, sin tiempo de latencia.</li>
                            <li><strong style="color: #fff;">Independencia:</strong> Levántate un sábado y elabora de forma espontánea, sabiendo que tienes levadura de primera lista en la nevera.</li>
                        </ul>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">🗺️🚀</div>
                        <h3>4. La hoja de ruta</h3>
                        <p>No intentes aprenderlo todo de golpe. Sigue este camino a tu ritmo:</p>
                        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent-color); margin-top: 15px; font-size: 0.9rem; line-height: 1.6;">
                            <strong style="color: #fff;">Nivel 1:</strong> Compra un matraz Erlenmeyer y aprende los <em>pies de cuba</em>.<br>
                            <strong style="color: #fff;">Nivel 2:</strong> Domina el <em>lavado de levadura</em> a partir de una cerveza terminada.<br>
                            <strong style="color: #fff;">Nivel 3:</strong> Fabrica o compra un <em>agitador magnético</em> para un gran crecimiento celular.<br>
                            <strong style="color: #fff;">Nivel 4:</strong> El jefe final. Las <em>placas de agar</em> y el <em>recuento celular</em>.
                        </div>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Atrás</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Siguiente ➔</button>
                    </div>
                </div>
            </div>
        `,
        'calc': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Calculadora de siembra</h2>
            <div class="calc-container" style="margin: 0; padding: 0; background: transparent; border: none;">
                <div class="calc-inputs">
                    <div class="input-group">
                        <label>Volumen del lote (L)</label>
                        <input type="number" id="pitch-vol" value="20" oninput="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                    </div>
                    <div class="input-group">
                        <label>Densidad (DI)</label>
                        <input type="number" id="pitch-og" value="1.050" step="0.001" oninput="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                    </div>
                    <div class="input-group">
                        <label>Tasa de siembra (M/ml/°P)</label>
                        <select id="pitch-rate" onchange="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                            <option value="0.75">0,75 (Ale estándar)</option>
                            <option value="1.0">1,0 (Ale de alta densidad)</option>
                            <option value="1.5">1,5 (Lager estándar)</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label>Fecha de cosecha</label>
                        <input type="date" id="pitch-date" onchange="calculatePitch()" style="width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; border-radius: 8px; font-family: 'Lexend'; font-weight: 600;">
                    </div>
                </div>
                <div class="calc-results" style="display: flex; gap: 15px; margin-top: 20px;">
                    <div class="res-card" style="flex: 1; background: #111; padding: 20px; border-radius: 12px; border: 1px solid #333;">
                        <span class="res-label" style="display: block; font-size: 0.7rem; color: #888; font-weight: 800; margin-bottom: 5px;">CÉLULAS NECESARIAS</span>
                        <span class="res-val" id="res-needed" style="display: block; font-size: 2rem; font-weight: 800; color: #fff;">--</span>
                        <span class="res-unit" style="font-size: 0.8rem; color: #666;">Miles de millones de células</span>
                    </div>
                    <div class="res-card accent" style="flex: 1; background: #111; padding: 20px; border-radius: 12px; border: 1px solid #333; border-left: 4px solid var(--accent-color);">
                        <span class="res-label" style="display: block; font-size: 0.7rem; color: #888; font-weight: 800; margin-bottom: 5px;">VIABILIDAD EST.</span>
                        <span class="res-val" id="res-viability" style="display: block; font-size: 2rem; font-weight: 800; color: #fff;">--</span>
                        <span class="res-unit" id="res-days-old" style="font-size: 0.8rem; color: #666;">Nueva</span>
                    </div>
                </div>
                <div id="pitch-warning" class="warning-box" style="display:none; margin-top: 20px; background: rgba(255, 68, 68, 0.1); border: 1px solid #ff4444; color: #ff4444; padding: 15px; border-radius: 8px; font-size: 0.9rem; text-align: center; font-weight: 600;">
                    ⚠️ Aviso: se ha detectado subsiembra. ¡Considera preparar un starter!
                </div>
            </div>
        `,
        'starters': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Starters 101</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Necesitarás:</h4>
                    <ul class="wizard-checklist" id="wizard-checklist">
                        <li id="item-flask">Matraz Erlenmeyer</li>
                        <li id="item-scale">Báscula de precisión</li>
                        <li id="item-dme">DME claro</li>
                        <li id="item-water">Agua limpia</li>
                        <li id="item-heat">Fuente de calor</li>
                        <li id="item-yeast">Pack de levadura</li>
                        <li id="item-stirbar">Barra agitadora</li>
                        <li id="item-stirplate">Agitador magnético</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🧽🧪</div>
                        <h3>1. Limpiar y preparar</h3>
                        <p>Antes de empezar, la higiene lo es todo. Asegúrate de que tu matraz Erlenmeyer esté completamente limpio y desinfectado.</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">⚖️🌾</div>
                        <h3>2. La proporción de oro</h3>
                        <p>Pon el matraz en la báscula. Pesa exactamente <strong>100 g de DME</strong> por cada <strong>litro de agua</strong>. Esto crea una densidad perfecta de 1.036.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">🔥🌡️</div>
                        <h3>3. Hervir y esterilizar</h3>
                        <p>Lleva el matraz a tu fuente de calor. Hierve suavemente 10-15 minutos para esterilizar el mosto. <br><br><em>Consejo pro: ¡añade una gota de Fermcap-S para evitar que rebose!</em></p>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">❄️🌪️</div>
                        <h3>4. Enfriar, sembrar y girar</h3>
                        <p>Enfría el matraz a 20 °C. Siembra tu levadura, mete la barra agitadora y ponlo en el agitador 24-48 horas. ¡Mira cómo se multiplican las células!</p>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Atrás</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Siguiente ➔</button>
                    </div>
                </div>
            </div>
        `,
        'washing': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Lavado de levadura 101</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>Necesitarás:</h4>
                    <ul class="wizard-checklist" id="wizard-checklist">
                        <li id="item-jars">Tarros de cristal</li>
                        <li id="item-starsan">Star San</li>
                        <li id="item-water">Agua estéril (enfriada)</li>
                        <li id="item-cake">Torta de levadura</li>
                        <li id="item-fridge">Sitio en la nevera</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🧽💧</div>
                        <h3>1. Preparar y diluir</h3>
                        <p>Desinfecta todo con Star San. Vierte tu agua prehervida y enfriada (estéril) directamente en el fermentador, justo encima de la torta de levadura sucia.</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🌪️💦</div>
                        <h3>2. Agítalo bien</h3>
                        <p>¡Vuelve a poner la tapa del fermentador y agítalo con fuerza! Rompe la torta de levadura por completo hasta que el agua parezca un barro espeso.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">⏳🕰️</div>
                        <h3>3. Deja actuar a la gravedad</h3>
                        <p>Deja el fermentador totalmente quieto durante <strong>20-30 minutos</strong>. El trub pesado y oscuro y los restos de lúpulo se hundirán rápido, dejando la levadura sana en suspensión en el líquido lechoso de arriba.</p>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">🫗✨</div>
                        <h3>4. Cosecha el oro</h3>
                        <p>Decanta con cuidado el líquido lechoso en tus tarros desinfectados. Deja de verter en cuanto veas que el trub oscuro del fondo intenta seguirte.</p>
                    </div>
                    <div class="wizard-step" data-step="4">
                        <div class="wizard-icon">🧊🧮</div>
                        <h3>5. Choque frío y siembra</h3>
                        <p>Mete los tarros en la nevera. En unos días, la levadura se compactará en una capa blanca limpia. El día de elaboración, decanta el agua, deja que se temple y mide el barro en nuestra Calculadora de siembra.</p>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Atrás</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Siguiente ➔</button>
                    </div>
                </div>
            </div>
        `,
        'agar': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Dominar las placas de agar</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>El kit de laboratorio:</h4>
                    <ul class="wizard-checklist">
                        <li id="agar-powder">Agar-agar en polvo</li>
                        <li id="agar-dme">DME claro</li>
                        <li id="agar-dishes">Placas de Petri</li>
                        <li id="agar-loop">Asa de inoculación</li>
                        <li id="agar-flame">Llama (mechero Bunsen/soplete)</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🥣🔥</div>
                        <h3>1. El gel mágico</h3>
                        <p>El agar es simplemente una sustancia gelatinosa hecha a partir de algas. Al mezclarla con mosto de starter normal (DME y agua) y hervirla, creamos una superficie nutritiva sólida y estéril sobre la que crece la levadura.</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🧫✨</div>
                        <h3>2. Verter las placas</h3>
                        <p>En una habitación sin corrientes (junto a una llama abierta que crea una corriente ascendente estéril que aleja el polvo), vierte con cuidado el líquido caliente en placas de Petri estériles. Deja que se enfríen y solidifiquen.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">〰️🦠</div>
                        <h3>3. Sembrar en estría para aislar</h3>
                        <p>Moja tu asa esterilizada en una muestra de levadura. Arrástrala suavemente por la superficie del agar en zigzag. Esteriliza el asa, pásala por tus primeras líneas y haz nuevos zigzags. Esto reparte las células cada vez más finas.</p>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">⚪🔍</div>
                        <h3>4. Cosechar una colonia</h3>
                        <p>Incuba las placas a oscuras, a temperatura ambiente. Tras unos días, verás puntos blancos individuales. ¡Cada punto es una colonia pura crecida a partir de una <strong>sola célula de levadura</strong>! Recoge una y siémbrala en un pequeño starter en tubo de ensayo.</p>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Atrás</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Siguiente ➔</button>
                    </div>
                </div>
            </div>
        `,
        'wild': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Capturar levadura salvaje</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>El kit del cazador:</h4>
                    <ul class="wizard-checklist">
                        <li id="wild-jars">Tarros de cristal</li>
                        <li id="wild-wort">Mosto de baja densidad</li>
                        <li id="wild-hops">Unos pellets de lúpulo</li>
                        <li id="wild-cloth">Gasa/estameña</li>
                        <li id="wild-fruit">Fruta / flores</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🍯🛡️</div>
                        <h3>1. El cebo</h3>
                        <p>Prepara un mosto flojo (1.020) y hiérvelo con unos pellets de lúpulo. El lúpulo es crucial aquí: actúa como escudo contra bacterias indeseadas (como los lactobacilos), dando a la levadura salvaje ventaja para colonizar el tarro.</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🍎🌿</div>
                        <h3>2. La captura</h3>
                        <p>Echa fruta ecológica sin lavar (manzanas, uvas, bayas) o flores locales en tu tarro de mosto enfriado. O bien cubre el tarro con una gasa y déjalo una noche bajo un árbol frutal para atrapar levaduras que viajan en la brisa.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <div class="wizard-icon">👃⚠️</div>
                        <h3>3. La prueba del olfato</h3>
                        <p>Cubre con papel de aluminio y espera 3-5 días. Si fermenta y huele a vómito, a pies o a queso, tíralo (ganaron las bacterias). Si huele a pan, a fruta o a especia belga, ¡enhorabuena, has cazado levadura salvaje!</p>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">🧫👑</div>
                        <h3>4. Domar a la bestia</h3>
                        <p>Las capturas salvajes son siempre una mezcla de distintas cepas de levadura y quizá algo de moho salvaje. Para sacar de aquí una levadura de elaboración fiable, usa el <em>método de estría en placa de agar</em> para aislar una sola colonia pura que huela bien.</p>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Atrás</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Siguiente ➔</button>
                    </div>
                </div>
            </div>
        `,
        'stirplate': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">La magia de los agitadores magnéticos</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>¿Por qué usar uno?</h4>
                    <ul class="wizard-checklist">
                        <li class="active-item" style="border-bottom: 1px dashed #333;">Oxigenación constante</li>
                        <li class="active-item" style="border-bottom: 1px dashed #333;">Expulsa el CO2 tóxico</li>
                        <li class="active-item" style="border-bottom: 1px dashed #333;">Mantiene la levadura en suspensión</li>
                        <li class="active-item" style="color: var(--accent-color) !important;">¡Crecimiento celular ×10!</li>
                    </ul>
                </div>
                <div class="ym-academy-content" style="display: block !important;">
                    <div style="display: flex; gap: 20px; align-items: flex-start; margin-bottom: 20px;">
                        <div style="font-size: 3rem; line-height: 1;">🌪️</div>
                        <div>
                            <h3 style="color: var(--accent-color); margin-top: 0; margin-bottom: 10px;">El vórtice</h3>
                            <p style="color: #ccc; line-height: 1.6; font-size: 0.95rem;">Un agitador magnético crea un vórtice continuo en tu matraz Erlenmeyer. Este movimiento constante aumenta muchísimo la superficie de líquido expuesta al aire, captando oxígeno, crucial para la reproducción de la levadura.</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 20px; align-items: flex-start;">
                        <div style="font-size: 3rem; line-height: 1;">🧲</div>
                        <div>
                            <h3 style="color: var(--accent-color); margin-top: 0; margin-bottom: 10px;">Cómo funciona</h3>
                            <p style="color: #ccc; line-height: 1.6; font-size: 0.95rem;">Dentro de la caja hay un motor que gira con un imán pegado. Metes una «barra agitadora» recubierta de teflón (que también es un imán) en tu matraz. Cuando el motor gira, la barra se acopla al campo magnético y gira con él.</p>
                        </div>
                    </div>
                    <div style="margin-top: 30px; background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; border-left: 4px solid #f39c12;">
                        <strong style="color: #f39c12;">Consejo pro:</strong> ¡No necesitas un tornado enorme! Un pequeño hoyuelo en la superficie del líquido basta para mantener la levadura en suspensión e intercambiar gases perfectamente.
                    </div>
                </div>
            </div>
        `,
        'counting': `
            <h2 style="color: var(--text-main); font-size: 2rem; margin-bottom: 25px; font-weight: 900; letter-spacing: -1px;">Recuento celular pro</h2>
            <div class="ym-academy-layout">
                <div class="ym-academy-sidebar">
                    <h4>El equipo pro:</h4>
                    <ul class="wizard-checklist">
                        <li id="item-hemo">Hemocitómetro</li>
                        <li id="item-microscope">Microscopio (400x)</li>
                        <li id="item-blue">Azul de metileno</li>
                        <li id="item-pipette">Pipetas de precisión</li>
                        <li id="item-counter">Contador manual</li>
                    </ul>
                </div>
                <div class="ym-academy-content" id="module-wizard">
                    <div class="wizard-dots" id="wizard-dots">
                        <div class="wizard-dot active"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                        <div class="wizard-dot"></div>
                    </div>
                    <div class="wizard-step active" data-step="0">
                        <div class="wizard-icon">🧪💧</div>
                        <h3>1. Diluir y teñir</h3>
                        <p>El barro de levadura está demasiado denso para contarlo. ¡Hay que diluirlo con precisión! Mezcla 1 parte de barro con 99 partes de agua destilada (una <strong>dilución 1:100</strong>).</p>
                        <p style="font-size: 0.9em; color: #aaa;">Añade una gota de <strong>azul de metileno</strong> a la muestra. Espera 1-2 minutos. Las células vivas expulsan el tinte y se ven claras. ¡Las células muertas se tiñen de azul!</p>
                    </div>
                    <div class="wizard-step" data-step="1">
                        <div class="wizard-icon">🔬🩸</div>
                        <h3>2. Cargar la cámara</h3>
                        <p>Un hemocitómetro es un portaobjetos de vidrio grueso con una cuadrícula microscópica grabada con láser. Coloca el cubreobjetos especial sobre la cuadrícula.</p>
                        <p style="font-size: 0.9em; color: #aaa;">Toca el borde del cubreobjetos con tu pipeta. La <em>capilaridad</em> absorbe el líquido directamente. Deja reposar 3 minutos para que las células se asienten en el vidrio.</p>
                    </div>
                    <div class="wizard-step" data-step="2">
                        <h3 style="margin-bottom: 10px;">3. Los 5 cuadrados</h3>
                        <p style="font-size: 0.9em; margin-bottom: 15px;">Localiza la cuadrícula central a 400x de aumento. Tiene 25 cuadrados medianos. Para ahorrar tiempo, solo contamos las <strong>4 esquinas</strong> y el cuadrado del <strong>centro</strong> (resaltados abajo).</p>
                        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 2px; background: #444; width: 140px; height: 140px; margin: 0 auto 15px; border: 2px solid #666; padding: 2px;">
                            <div style="background: var(--accent-color);"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: var(--accent-color);"></div>
                            <div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div>
                            <div style="background: #111;"></div><div style="background: #111;"></div><div style="background: var(--accent-color);"></div><div style="background: #111;"></div><div style="background: #111;"></div>
                            <div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div>
                            <div style="background: var(--accent-color);"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: #111;"></div><div style="background: var(--accent-color);"></div>
                        </div>
                    </div>
                    <div class="wizard-step" data-step="3">
                        <div class="wizard-icon">📐🛑</div>
                        <h3>4. La regla en L</h3>
                        <p>Algunas células quedan justo sobre las líneas de separación. ¡Si las cuentas en un cuadrado, podrías contarlas otra vez en el siguiente!</p>
                        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent-color); margin-top: 15px; text-align: left;">
                            <strong style="color: #fff;">La regla universal:</strong><br>
                            Cuenta las células que tocan las líneas de <strong>arriba</strong> y de la <strong>derecha</strong>.<br>
                            <em>Ignora</em> las células que tocan las líneas de <strong>abajo</strong> y de la <strong>izquierda</strong>.
                        </div>
                    </div>
                    <div class="wizard-step" data-step="4">
                        <div class="wizard-icon">🧮✖️</div>
                        <h3>5. La fórmula mágica</h3>
                        <p>Suma todas las células vivas (claras) que encontraste en esos 5 cuadrados. ¡Ahora mételo en la fórmula para saber cuántas células hay en un mililitro de tu barro!</p>
                        <div style="background: #111; padding: 15px; border-radius: 8px; border: 1px dashed #444; margin-top: 15px; font-family: monospace; font-size: 0.95rem; color: var(--accent-color);">
                            (Células contadas / 5) <br>
                            × 25 <br>
                            × factor de dilución (100) <br>
                            × 10 000 <br>
                            = Células por mL
                        </div>
                    </div>
                    <div class="wizard-controls">
                        <button class="wizard-btn" id="wiz-prev" onclick="changeWizardStep(-1)" disabled>Atrás</button>
                        <button class="wizard-btn primary" id="wiz-next" onclick="changeWizardStep(1)">Siguiente ➔</button>
                    </div>
                </div>
            </div>
        `
    }
};

window.academyModules = academyModules;