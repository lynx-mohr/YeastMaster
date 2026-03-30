const yeastDatabase = {
  "yeasts": [
    // ==========================================
    // --- DRY YEASTS (Torrjäst) ---
    // ==========================================
    
    // Arbetshästar (Har Low/High + Special)
    { "s": "US-05", "p": "Standard", "steps": [[0, 19.0], [4, 21.0], [7, 21.0], [14, 2.0]] },
    { "s": "US-05", "p": "Low Ester", "steps": [[0, 18.0], [4, 18.0], [7, 21.0], [14, 2.0]] },
    { "s": "US-05", "p": "West Coast Crisp", "steps": [[0, 18.0], [5, 19.0], [8, 22.0], [14, 2.0]] },
    { "s": "US-05", "p": "Pseudo-Lager", "steps": [[0, 15.0], [7, 16.0], [12, 18.0], [21, 2.0]] },
    
    { "s": "S-04", "p": "Standard", "steps": [[0, 19.0], [3, 21.0], [7, 21.0], [14, 2.0]] },
    { "s": "S-04", "p": "Fruity", "steps": [[0, 20.0], [3, 22.0], [7, 22.0], [14, 2.0]] },
    { "s": "S-04", "p": "Dark & Malty", "steps": [[0, 18.0], [5, 18.0], [10, 20.0], [14, 2.0]] },
    
    { "s": "Nottingham", "p": "Standard", "steps": [[0, 18.0], [4, 20.0], [7, 21.0], [14, 2.0]] },
    { "s": "Nottingham", "p": "Pseudo Lager", "steps": [[0, 14.0], [6, 16.0], [10, 18.0], [21, 2.0]] },
    
    { "s": "S-33", "p": "Standard", "steps": [[0, 19.0], [3, 21.0], [7, 21.0], [14, 2.0]] },
    { "s": "S-33", "p": "Thick Ale", "steps": [[0, 18.0], [4, 20.0], [7, 21.0], [14, 2.0]] },

    // Specialister (Har Standard + Bara Specialnamn)
    { "s": "BE-256", "p": "Standard", "steps": [[0, 19.0], [3, 21.0], [7, 3.0], [14, 3.0]] },
    { "s": "BE-256", "p": "Belgian Strong", "steps": [[0, 18.0], [3, 22.0], [7, 24.0], [14, 3.0]] },
    
    { "s": "WB-06", "p": "Standard", "steps": [[0, 20.0], [3, 21.0], [7, 4.0], [14, 4.0]] },
    { "s": "WB-06", "p": "Banana Bomb", "steps": [[0, 22.0], [4, 23.0], [7, 23.0], [14, 4.0]] },
    { "s": "WB-06", "p": "Balanced Clove", "steps": [[0, 18.0], [4, 20.0], [7, 22.0], [14, 4.0]] },
    
    { "s": "Verdant IPA", "p": "Standard", "steps": [[0, 19.0], [3, 21.0], [7, 3.0], [14, 3.0]] },
    { "s": "Verdant IPA", "p": "Juicy NEIPA", "steps": [[0, 19.0], [3, 21.0], [7, 22.0], [14, 3.0]] },
    
    { "s": "Voss Kveik", "p": "Standard", "steps": [[0, 35.0], [2, 35.0], [5, 35.0], [7, 4.0]] },
    { "s": "Voss Kveik", "p": "Viking Speed", "steps": [[0, 38.0], [2, 38.0], [4, 38.0], [7, 4.0]] },
    { "s": "Voss Kveik", "p": "Clean Pseudo", "steps": [[0, 25.0], [3, 28.0], [6, 28.0], [10, 4.0]] },
    
    { "s": "T-58", "p": "Standard", "steps": [[0, 18.0], [3, 21.0], [7, 3.0], [14, 3.0]] },
    { "s": "T-58", "p": "Spicy Belgian", "steps": [[0, 18.0], [3, 20.0], [7, 22.0], [14, 3.0]] },
    
    { "s": "Belle Saison", "p": "Standard", "steps": [[0, 22.0], [3, 24.0], [7, 24.0], [14, 3.0]] },
    { "s": "Belle Saison", "p": "Farmhouse Ramp", "steps": [[0, 20.0], [3, 25.0], [7, 28.0], [14, 3.0]] },

    // Lagerjäster (Traditional/Lager som bas)
    { "s": "W-34/70", "p": "Traditional Lager", "steps": [[0, 11.0], [7, 11.0], [12, 16.0], [28, 2.0]] },
    { "s": "W-34/70", "p": "Quick Lager", "steps": [[0, 13.0], [5, 17.0], [10, 2.0], [21, 2.0]] },
    { "s": "W-34/70", "p": "Brulosophy", "steps": [[0, 19.0], [4, 21.0], [8, 2.0], [14, 2.0]] },
    
    { "s": "S-23", "p": "Traditional Lager", "steps": [[0, 11.0], [8, 12.0], [14, 16.0], [28, 2.0]] },
    { "s": "S-23", "p": "Fruity Lager", "steps": [[0, 12.0], [7, 14.0], [12, 17.0], [28, 2.0]] },
    { "s": "S-23", "p": "Crisp German", "steps": [[0, 10.0], [10, 10.0], [15, 15.0], [30, 2.0]] },
    
    { "s": "Diamond", "p": "Traditional Lager", "steps": [[0, 10.0], [8, 11.0], [14, 16.0], [28, 2.0]] },
    { "s": "Diamond", "p": "Fast Helles", "steps": [[0, 14.0], [5, 16.0], [10, 18.0], [21, 2.0]] },
    
    { "s": "NovaLager", "p": "Standard", "steps": [[0, 16.0], [5, 18.0], [10, 18.0], [21, 2.0]] },
    { "s": "NovaLager", "p": "Modern Cold", "steps": [[0, 14.0], [5, 16.0], [10, 18.0], [21, 2.0]] },
    { "s": "NovaLager", "p": "The Cheat Code", "steps": [[0, 18.0], [5, 18.0], [7, 20.0], [14, 2.0]] },

    // ==========================================
    // --- LIQUID YEASTS (Flytande Jäst) ---
    // ==========================================
    
    // Arbetshästar (Har Low/High + Special)
    { "s": "California Ale", "p": "Standard", "steps": [[0, 19.5], [4, 21.0], [8, 22.0], [14, 2.0]] },
    { "s": "California Ale", "p": "Low Ester", "steps": [[0, 18.0], [5, 20.0], [8, 21.0], [14, 2.0]] },
    
    { "s": "English Ale", "p": "Standard", "steps": [[0, 19.0], [3, 21.0], [7, 21.0], [14, 2.0]] },
    { "s": "English Ale", "p": "Low Ester", "steps": [[0, 18.5], [3, 20.0], [7, 21.0], [14, 2.0]] },
    
    { "s": "London ESB", "p": "Standard", "steps": [[0, 19.0], [3, 21.0], [7, 2.0], [14, 2.0]] },
    { "s": "London ESB", "p": "High Ester", "steps": [[0, 21.0], [3, 23.0], [7, 2.0], [14, 2.0]] },
    { "s": "London ESB", "p": "Low Ester", "steps": [[0, 18.0], [3, 20.0], [7, 5.0], [14, 5.0]] },
    { "s": "London ESB", "p": "ESB Clean", "steps": [[0, 18.5], [3, 21.0], [7, 3.0], [14, 3.0]] },
    
    { "s": "Imp. Gnome", "p": "Standard", "steps": [[0, 19.0], [3, 21.0], [7, 2.0], [14, 2.0]] },
    { "s": "Imp. Gnome", "p": "High Ester", "steps": [[0, 21.0], [3, 23.0], [7, 2.0], [14, 2.0]] },
    { "s": "Imp. Gnome", "p": "Low Ester", "steps": [[0, 18.0], [3, 20.0], [7, 5.0], [14, 5.0]] },
    { "s": "Imp. Gnome", "p": "Classic", "steps": [[0, 20.0], [4, 23.5], [8, 3.0], [14, 3.0]] },
    
    { "s": "Irish Ale", "p": "Standard", "steps": [[0, 19.0], [3, 21.0], [7, 2.0], [14, 2.0]] },
    { "s": "Irish Ale", "p": "High Ester", "steps": [[0, 21.0], [3, 23.0], [7, 2.0], [14, 2.0]] },
    { "s": "Irish Ale", "p": "Low Ester", "steps": [[0, 18.0], [3, 20.0], [7, 5.0], [14, 5.0]] },
    { "s": "Irish Ale", "p": "Dry Stout", "steps": [[0, 18.0], [5, 20.0], [10, 3.0], [14, 3.0]] },
    
    { "s": "Dry English", "p": "Standard", "steps": [[0, 19.0], [3, 21.0], [7, 2.0], [14, 2.0]] },
    { "s": "Dry English", "p": "High Ester", "steps": [[0, 21.0], [3, 23.0], [7, 2.0], [14, 2.0]] },
    { "s": "Dry English", "p": "Low Ester", "steps": [[0, 18.0], [3, 20.0], [7, 5.0], [14, 5.0]] },
    { "s": "Dry English", "p": "West Coast", "steps": [[0, 18.5], [3, 21.0], [7, 2.0], [14, 2.0]] },
    
    { "s": "London III", "p": "Standard", "steps": [[0, 19.0], [3, 21.0], [7, 2.0], [14, 2.0]] },
    { "s": "London III", "p": "High Ester", "steps": [[0, 21.0], [3, 23.0], [7, 2.0], [14, 2.0]] },
    { "s": "London III", "p": "Low Ester", "steps": [[0, 18.0], [3, 20.0], [7, 5.0], [14, 5.0]] },

    { "s": "Kolsch", "p": "Standard", "steps": [[0, 19.0], [3, 21.0], [7, 2.0], [14, 2.0]] },
    { "s": "Kolsch", "p": "High Ester", "steps": [[0, 21.0], [3, 23.0], [7, 2.0], [14, 2.0]] },
    { "s": "Kolsch", "p": "Low Ester", "steps": [[0, 18.0], [3, 20.0], [7, 5.0], [14, 5.0]] },
    { "s": "Kolsch", "p": "Authentic", "steps": [[0, 14.5], [7, 18.0], [11, 2.0], [25, 2.0]] },
    
    { "s": "Burlington", "p": "Standard", "steps": [[0, 19.0], [3, 21.0], [7, 2.0], [14, 2.0]] },
    { "s": "Burlington", "p": "High Ester", "steps": [[0, 21.0], [3, 23.0], [7, 2.0], [14, 2.0]] },
    { "s": "Burlington", "p": "Low Ester", "steps": [[0, 18.0], [3, 20.0], [7, 5.0], [14, 5.0]] },
    { "s": "Burlington", "p": "Conan IPA", "steps": [[0, 19.5], [3, 21.0], [7, 3.0], [14, 3.0]] },

    // Specialister (Har Standard + Bara Specialnamn)
    { "s": "Hefeweizen", "p": "Standard", "steps": [[0, 19.0], [4, 20.0], [7, 3.0], [14, 3.0]] },
    { "s": "Hefeweizen", "p": "Classic", "steps": [[0, 20.0], [4, 21.0], [7, 22.0], [14, 4.0]] },
    
    { "s": "Trappist", "p": "Standard", "steps": [[0, 19.0], [3, 21.0], [7, 3.0], [14, 3.0]] },
    { "s": "Trappist", "p": "Monk's Madness", "steps": [[0, 20.0], [3, 23.0], [7, 25.0], [14, 3.0]] },
    
    { "s": "London Fog", "p": "Standard", "steps": [[0, 19.0], [4, 21.0], [8, 3.0], [14, 3.0]] },
    { "s": "London Fog", "p": "Smooth Juice", "steps": [[0, 19.0], [4, 21.0], [8, 22.0], [14, 3.0]] },
    
    { "s": "Belgian Wit", "p": "Standard", "steps": [[0, 19.0], [3, 21.0], [7, 2.0], [14, 2.0]] },
    { "s": "Belgian Wit", "p": "Classic Wit", "steps": [[0, 18.0], [4, 21.5], [9, 6.0], [14, 6.0]] },
    { "s": "Belgian Wit", "p": "Summer Wit", "steps": [[0, 20.0], [3, 23.0], [8, 6.0], [14, 6.0]] },

    // Lagerjäster (Traditional/Lager som bas)
    { "s": "Pilsner Lager", "p": "Traditional Lager", "steps": [[0, 11.0], [9, 12.0], [14, 16.0], [35, 2.0]] },
    { "s": "Pilsner Lager", "p": "Bohemian", "steps": [[0, 10.0], [10, 12.0], [14, 16.0], [35, 2.0]] },
    
    { "s": "Old Bavarian", "p": "Traditional Lager", "steps": [[0, 10.5], [10, 16.0], [14, 2.0], [28, 2.0]] },
    { "s": "Old Bavarian", "p": "Quick Lager", "steps": [[0, 12.5], [6, 16.5], [10, 3.0], [21, 3.0]] },
    { "s": "Old Bavarian", "p": "Brulosophy", "steps": [[0, 19.0], [4, 21.0], [7, 2.0], [14, 2.0]] },
    
    { "s": "German Bock", "p": "Traditional Lager", "steps": [[0, 11.0], [10, 13.0], [16, 16.0], [35, 2.0]] },
    { "s": "German Bock", "p": "Trad. Bock", "steps": [[0, 10.0], [12, 16.0], [16, 2.0], [35, 2.0]] },
    { "s": "German Bock", "p": "Fast Bock", "steps": [[0, 12.0], [7, 17.0], [11, 3.0], [24, 3.0]] }
  ]
};