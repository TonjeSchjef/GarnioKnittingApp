const yarnDatabase = {
    // SANDNES GARN
    "sandnes peer gynt": {
        brand: "Sandnes",
        name: "Peer Gynt",
        weight: 50, 
        length: 91, 
        fiber: "100% norsk ull",
        category: "DK/Light Worsted",
        gauge: "22 m", 
        needleSize: "3.5-4mm",
        alternatives: ["sandnes smart, sandnes merinoull, sandnes duo"],
    },
    "sandnes alpakka": {
        brand: "Sandnes",
        name: "Alpakka",
        weight: 50,
        length: 110,
        fiber: "100% alpakka",
        category: "DK/Light Worsted",
        gauge: "22 m",
        needleSize: "3.5mm", 
        alternatives: ["sandnes merinoull, sandnes duo, sandnes smart"]
    },
    "sandnes babyull lanett": {
        brand: "Sandnes", 
        name: "Babyull Lanett",
        weight: 50,
        length: 175,
        fiber: "100% merinoull",
        category: "Sport/Light DK",
        gauge: "27-31 m",
        needleSize: "3mm",
        alternatives: ["sandnes tynn merinoull, sandnes mini alpakka, sandnes tynn line, sandnes sunday"]
    },
    "sandnes sunday": {
        brand: "Sandnes",
        name: "Sunday",
        weight: 50,
        length: 235,
        fiber: "100% merinoull",
        category: "Sport/Fingering",
        gauge: "28 m",
        needleSize: "3mm",
        alternatives: ["knitting for olive merino", "sandnes alpakka silke", "sandnes tynn merinoull", "sandnes mini alpakka", "sandnes babyull lanett"]
    },
    "sandnes børstet alpakka": {
        brand: "Sandnes Garn",
        name: "Børstet Alpakka", 
        weight: 50,
        length: 110,
        fiber: "96% børstet alpakka og 4% nylon",
        category: "DK/Light Worsted",
        gauge: "18-12 m",
        needleSize: "4-7mm",
        alternatives: ["sandnes kos", "viking alpaca bris"]
    },
    "sandnes kos": {
        brand: "Sandnes Garn",
        name: "Kos",
        weight: 50,
        length: 150,
        fiber: "62% alpakka, 29% nylon og 9% ull",
        category: "Sport/Light DK",
        gauge: "18-16 m",
        needleSize: "4.5-5.5mm", 
        alternatives: ["sandnes poppy", "sandnes børstet alpakka"]
    },
    "sandnes duo": {
        brand: "Sandnes Garn",
        name: "Duo",
        weight: 50,
        length: 110,
        fiber: "50% merinoull og 50% pima-bomull",
        category: "DK/Light Worsted",
        gauge: "22 m",
        needleSize: "3.5mm",
        alternatives: ["sandnes alpakka", "sandnes merinoull", "viking baby ull"]
    },
    "sandnes tynn silk mohair": {
        brand: "Sandnes Garn",
        name: "Tynn Silk Mohair",
        weight: 25,
        length: 212,
        fiber: "57% mohair, 28% silke og 15% ull",
        category: "Lace/Fingering",
        gauge: "28-32 m",
        needleSize: "3-5mm",
        alternatives: ["knitting for olive soft silk mohair", "sandnes alpakka følgetråd", "drops kid silk"]
    },

    "sandnes alpakka følgetråd": {
        brand: "Sandnes Garn",
        name: "Alpakka Følgetråd",
        weight: 50,
        length: 400,
        fiber: "100% alpakka",
        category: "Lace/Fingering",
        gauge: "28-32 m",
        needleSize: "3-5mm",
        alternatives: ["knitting for olive soft silk mohair", "sandnes tynn silk mohair", "drops kid silk"]
    },

    "sandnes alpakka silke": {
        brand: "Sandnes Garn",
        name: "Alpakka Silke",
        weight: 50,
        length: 200,
        fiber: "70% baby alpaka og 30% mulberry silke",
        category: "Sport/Fingering",
        gauge: "27-28 m",
        needleSize: "3mm",
        alternatives: ["sandnes sunday", "rauma alpaca silk", "knitting for olive merino"]
    },

     "sandnes alpakka ull": {
        brand: "Sandnes Garn",
        name: "Alpakka Ull",
        weight: 50,
        length: 100,
        fiber: "60% alpakka, 40% ull",
        category: "DK/Light Worsted",
        gauge: "22-19 m",
        needleSize: "3.5-5mm",
        alternatives: ["rauma mitu", "viking bambino"]
    },

    "sandnes fritidsgarn": {
        brand: "Sandnes Garn",
        name: "Fritidsgarn",
        weight: 50,
        length: 70,
        fiber: "100% norsk ull",
        category: "aran/worsted",
        gauge: "15 m",
        needleSize: "5.5mm",
        alternatives: ["rauma vams"]
    },

    "sandnes double sunday": {
        brand: "Sandnes Garn",
        name: "Double Sunday",
        weight: 50,
        length: 108,
        fiber: "100% merinoull",
        category: "DK/Light Worsted",
        gauge: "20-21 m",
        needleSize: "3.5-4mm",
        alternatives: ["knitting for olive heavy merino", "viking bambino"]
    },

    "sandnes merinoull": {
        brand: "Sandnes Garn",
        name: "Merinoull",
        weight: 50,
        length: 105,
        fiber: "100% merinoull superwash",
        category: "DK/Light Worsted",
        gauge: "22 m",
        needleSize: "3.5mm",
        alternatives: ["sandnes alpakka", "viking bambino", "knitting for olive merino"]
    },

    "sandnes tynn merinoull": {
        brand: "Sandnes Garn",
        name: "Tynn Merinoull",
        weight: 50,
        length: 175,
        fiber: "100% merinoull superwash",
        category: "Sport",
        gauge: "27 m",
        needleSize: "3mm",
        alternatives: ["sandnes babyull lanett", "sandnes mini alpakka", "sandnes sunday", "knitting for olive merino", "viking vår"]
    },

    "sandnes mini alpakka": {
        brand: "Sandnes Garn",
        name: "Mini Alpakka",
        weight: 50,
        length: 150,
        fiber: "100% alpakka",
        category: "DK/Light Worsted",
        gauge: "27 m",
        needleSize: "3mm",
        alternatives: ["sandnes tynn merinoull", "sandnes babyull lanett", "sandnes mini alpakka", "sandnes sunday", "knitting for olive merino", "viking vår"]
    },

    "sandnes tynn peer gynt": {
        brand: "Sandnes Garn",
        name: "Tynn Peer Gynt",
        weight: 50,
        length: 205,
        fiber: "100% norsk ull",
        category: "Sport/Light DK",
        gauge: "27 m",
        needleSize: "3mm",
        alternatives: ["sandnes tynn merinoull", "sandnes babyull lanett", "sandnes mini alpakka", "sandnes sunday", "knitting for olive merino", "viking vår", "viking superwash", "rauma finullgarn"]
    },

    "sandnes smart": {
        brand: "Sandnes Garn",
        name: "Smart",
        weight: 50,
        length: 100,
        fiber: "100% superwash ull",
        category: "DK/Light Worsted",
        gauge: "22 m",
        needleSize: "3.5mm",
        alternatives: ["sandnes peer gynt", "viking baby ull", "rauma vamsegarn"]
    },

    "sandnes line": {
        brand: "Sandnes Garn",
        name: "Line",
        weight: 50,
        length: 110,
        fiber: "53% bomull, 33% viskose, 14% lin",
        category: "Sport/Light DK",
        gauge: "22 m",
        needleSize: "4mm",
        alternatives: [""]
    },

    "sandnes mandarin naturell": {
        brand: "Sandnes Garn",
        name: "Mandarin Naturell",
        weight: 50,
        length: 130,
        fiber: "100% bomull",
        category: "DK/Light Worsted",
        gauge: "22 m",
        needleSize: "3.5mm",
        alternatives: [""]
    },

    "sandnes mandarin petit": {
        brand: "Sandnes Garn",
        name: "Mandarin Petit",
        weight: 50,
        length: 180,
        fiber: "100% bomull",
        category: "Sport/Light DK",
        gauge: "27 m",
        needleSize: "3mm",
        alternatives: [""]
    },

    "sandnes ballerina chunky mohair": {
        brand: "Sandnes Garn",
        name: "Ballerina Chunky Mohair",
        weight: 50,
        length: 135,
        fiber: "77% mohair, 18% ull, 5% polyamid",
        category: "bulky",
        gauge: "16-13 m",
        needleSize: "5-7mm",
        alternatives: [""]
    },

    "sandnes labbegarn": {
        brand: "Sandnes Garn",
        name: "Labbegarn",
        weight: 50,
        length: 98,
        fiber: "80% ull, 20% nylon",
        category: "sport",
        gauge: "19 m",
        needleSize: "3.5mm",
        alternatives: [""]
    },

    "sandnes tykk line": {
        brand: "Sandnes Garn",
        name: "Tykk Line",
        weight: 50,
        length: 60,
        fiber: "53% bomull, 33% viskose, 14% lin",
        category: "aran/bulky",
        gauge: "16 m",
        needleSize: "5mm",
        alternatives: [""]
    },

    "sandnes tynn line": {
        brand: "Sandnes Garn",
        name: "Tynn Line",
        weight: 50,
        length: 220,
        fiber: "53% bomull, 33% viskose, 14% lin",
        category: "fingering",
        gauge: "27-28 m",
        needleSize: "3mm",
        alternatives: [""]
    },

    "sandnes perfect": {
        brand: "Sandnes Garn",
        name: "Perfect",
        weight: 50,
        length: 100,
        fiber: "80% ull, 20% nylon",
        category: "dk",
        gauge: "22 m",
        needleSize: "3.5-4mm",
        alternatives: [""]
    },

    "sandnes sisu": {
        brand: "Sandnes Garn",
        name: "Sisu",
        weight: 50,
        length: 175,
        fiber: "80% ull, 20% nylon",
        category: "fingering",
        gauge: "27 m",
        needleSize: "2.5-3mm",
        alternatives: [""]
    },

    "sandnes poppy": {
        brand: "Sandnes Garn",
        name: "Poppy",
        weight: 50,
        length: 110,
        fiber: "50% alpakka, 35% bomull, 15% merinoull",
        category: "bulky",
        gauge: "14-17 m",
        needleSize: "5.5-7mm",
        alternatives: [""]
    },

    "sandnes tresko": {
        brand: "Sandnes Garn",
        name: "Tresko",
        weight: 50,
        length: 105,
        fiber: "80% norsk ull, 20% nylon",
        category: "sport",
        gauge: "24 m",
        needleSize: "3-3.5mm",
        alternatives: [""]
    },

    "sandnes tweed recycled": {
        brand: "Sandnes Garn",
        name: "Tweed Recycled", 
        weight: 50,
        length: 175,
        fiber: "80% resirkulert ull, 20% resirkulert kasjmir",
        category: "dk",
        gauge: "20-21 m",
        needleSize: "3.5-4mm",
        alternatives: [""]
    },
        


    // RAUMA GARN
    "rauma vams garn": {
        brand: "Rauma Garn",
        name: "Vams",
        weight: 50,
        length: 83,
        fiber: "100% norsk ull",
        category: "aran/worsted",
        gauge: "14-16 m",
        needleSize: "5-6mm",
        alternatives: ["rauma fivel", "drops nepal", "drops big merino"]
    },
    "rauma finullgarn": {
        brand: "Rauma Garn", 
        name: "Finullgarn",
        weight: 50,
        length: 175,
        fiber: "100% norsk ull",
        category: "Sport/Light DK",
        gauge: "24 m",
        needleSize: "3.5mm",
        alternatives: ["sandnes lanett", "viking superwash", "sandnes sunday"]
    },
    "rauma 3-tråds strikkegarn": {
        brand: "Rauma Garn",
        name: "3-tråds Strikkegarn",
        weight: 50,
        length: 105,
        fiber: "100% norsk ull",
        category: "DK/Light Worsted",
        gauge: "20 m",
        needleSize: "4mm",
        alternatives: ["sandnes peer gynt", "viking baby ull", "rauma vamsegarn"]
    },
    "rauma 2-tråds gammelserie": {
        brand: "Rauma Garn",
        name: "2-tråds Gammelserie", 
        weight: 50,
        length: 200,
        fiber: "100% norsk ull",
        category: "Sport",
        gauge: "26 m",
        needleSize: "3mm",
        alternatives: ["sandnes sunday", "viking vår", "knitting for olive merino"]
    },
    "rauma mitu": {
        brand: "Rauma Garn",
        name: "Mitu",
        weight: 50,
        length: 140,
        fiber: "50% babyalpakka, 50% merinoull",
        category: "Sport/Light DK",
        gauge: "22 m",
        needleSize: "4mm",
        alternatives: ["sandnes kos", "knitting for olive merino", "viking bambino"]
    },

    "rauma fivel": {
        brand: "Rauma Garn",
        name: "Fivel",
        weight: 50,
        length: 100,
        fiber: "100% norsk ull",
        category: "aran/worsted",
        gauge: "18 m",
        needleSize: "4-5mm",
        alternatives: ["rauma 3-tråds strikkegarn"]
    },

    "rauma inca alpakka": {
        brand: "Rauma Garn", 
        name: "Inca Alpakka",
        weight: 50,
        length: 175,
        fiber: "100% superfine alpakka",
        category: "fingering",
        gauge: "26-28 m",
        needleSize: "2.5-3mm",
        alternatives: [""]
    },

    "rauma alpaca silk": {
        brand: "Rauma Garn",
        name: "Alpaca Silk", 
        weight: 25,
        length: 200,
        fiber: "65% babyalpakka, 25% silke, 10% merinoull",
        category: "lace/light fingering",
        gauge: "24-26 m",
        needleSize: "3-3.5mm",
        alternatives: ["rauma inca alpakka", "knitting for olive soft silk mohair", "sandnes tynn silk mohair"]
    },

    "rauma tumi": {
        brand: "Rauma Garn",
        name: "Tumi",
        weight: 50,
        length: 130,
        fiber: "50% ull, 50% alpakka",
        category: "sport/heavy fingering", 
        gauge: "24-26 m",
        needleSize: "2.5-3.5mm",
        alternatives: ["rauma finullgarn"]
    },

    "rauma alpakka lin": {
        brand: "Rauma Garn",
        name: "Alpakka Lin",
        weight: 50,
        length: 175,
        fiber: "48% babyalpakka, 44% lin, 8% ull",
        category: "aran",
        gauge: "16-18 m", 
        needleSize: "3-4.5mm",
        alternatives: [""]
    },

    // DROPS GARNSTUDIO
    "drops air": {
        brand: "Drops Garnstudio",
        name: "Air",
        weight: 50,
        length: 150,
        fiber: "65% alpakka, 28% polyamid, 7% merinoull",
        category: "aran/worsted",
        gauge: "17 m",
        needleSize: "5mm",
        alternatives: ["sandnes børstet alpakka", "luftig alpakka garn", "luksusgarn"]
    },

    "drops nepal": {
        brand: "Drops Garnstudio",
        name: "Nepal",
        weight: 50,
        length: 75,
        fiber: "65% ull, 35% alpakka",
        category: "aran/worsted",
        gauge: "17 m",
        needleSize: "5mm",
        alternatives: ["rauma vamsegarn", "sandnes alpakka", "aran ullgarn"]
    },

    "drops paris": {
        brand: "Drops Garnstudio",
        name: "Paris",
        weight: 50,
        length: 75,
        fiber: "100% bomull",
        category: "aran/worsted",
        gauge: "17 m",
        needleSize: "5mm",
        alternatives: ["sandnes mandarin naturell", "bomullsgarn aran", "husholdningsgarn"]
    },

    "drops baby merino": {
        brand: "Drops Garnstudio",
        name: "Baby Merino",
        weight: 50,
        length: 175,
        fiber: "100% merinoull superwash",
        category: "sport/fingering",
        gauge: "24 m",
        needleSize: "3mm",
        alternatives: ["sandnes babyull lanett", "knitting for olive merino", "babygarn"]
    },

    "drops kid silk": {
        brand: "Drops Garnstudio",
        name: "Kid-Silk",
        weight: 25,
        length: 210,
        fiber: "75% mohair, 25% silke",
        category: "lace",
        gauge: "25 m",
        needleSize: "3mm",
        alternatives: ["sandnes tynn silk mohair", "knitting for olive soft silk mohair", "viking kid silk"]
    },

    "drops karisma": {
        brand: "Drops Garnstudio",
        name: "Karisma",
        weight: 50,
        length: 100,
        fiber: "100% ull",
        category: "sport/dk",
        gauge: "21 m",
        needleSize: "4mm",
        alternatives: ["viking baby ull", "sandnes peer gynt", "klassisk ullgarn"]
    },

    "drops big merino": {
        brand: "Drops Garnstudio",
        name: "Big Merino",
        weight: 50,
        length: 75,
        fiber: "100% merinoull",
        category: "aran/worsted",
        gauge: "17 m",
        needleSize: "5mm",
        alternatives: ["knitting for olive heavy merino", "merinoull aran", "drops nepal"]
    },

    "drops alpaca": {
        brand: "Drops Garnstudio",
        name: "Alpaca",
        weight: 50,
        length: 167,
        fiber: "100% alpakka",
        category: "sport/fingering",
        gauge: "23 m",
        needleSize: "3.5mm",
        alternatives: ["sandnes alpakka", "rauma inca alpakka", "alpakka sport"]
    },

    "drops brushed alpaca silk": {
        brand: "Drops Garnstudio",
        name: "Brushed Alpaca Silk",
        weight: 25,
        length: 140,
        fiber: "77% alpakka, 23% silke",
        category: "aran",
        gauge: "17 m",
        needleSize: "5mm",
        alternatives: ["sandnes børstet alpakka", "børstet alpakka garn", "luksus følgetråd"]
    },

    "drops fabel": {
        brand: "Drops Garnstudio",
        name: "Fabel",
        weight: 50,
        length: 205,
        fiber: "75% ull, 25% polyamid",
        category: "fingering",
        gauge: "24 m",
        needleSize: "2.5mm",
        alternatives: ["sandnes sisu", "sokke-garn", "superwash sokke-garn"]
    },

    "drops cotton light": {
        brand: "Drops Garnstudio",
        name: "Cotton Light",
        weight: 50,
        length: 105,
        fiber: "100% bomull",
        category: "dk",
        gauge: "21 m",
        needleSize: "4mm",
        alternatives: ["sandnes mandarin petit", "bomullsgarn dk", "drops paris"]
    },

    "drops belle": {
        brand: "Drops Garnstudio",
        name: "Belle",
        weight: 50,
        length: 120,
        fiber: "53% bomull, 33% viskose, 14% lin",
        category: "sport/dk",
        gauge: "21 m",
        needleSize: "4mm",
        alternatives: ["bomull-lin blanding", "sommergarn", "drops cotton light"]
    },

    "drops safran": {
        brand: "Drops Garnstudio",
        name: "Safran",
        weight: 50,
        length: 160,
        fiber: "100% bomull",
        category: "sport",
        gauge: "23 m",
        needleSize: "3.5mm",
        alternatives: ["sandnes mandarin naturell", "bomullsgarn sport", "drops muskat"]
    },

    "drops muskat": {
        brand: "Drops Garnstudio",
        name: "Muskat",
        weight: 50,
        length: 109,
        fiber: "100% bomull",
        category: "dk",
        gauge: "21 m",
        needleSize: "4mm",
        alternatives: ["drops safran", "bomullsgarn dk", "drops cotton light"]
    },

    "drops eskimo": {
        brand: "Drops Garnstudio",
        name: "Eskimo",
        weight: 50,
        length: 50,
        fiber: "100% ull",
        category: "chunky",
        gauge: "11 m",
        needleSize: "8mm",
        alternatives: ["sandnes alfa", "tykk ullgarn", "chunky ull"]
    },

    "drops andes": {
        brand: "Drops Garnstudio",
        name: "Andes",
        weight: 100,
        length: 90,
        fiber: "65% ull, 35% alpakka",
        category: "chunky",
        gauge: "10 m",
        needleSize: "9mm",
        alternatives: ["drops eskimo", "sandnes alfa", "tykk alpakka-ull"]
    },

    "drops cloud": {
        brand: "Drops Garnstudio",
        name: "Cloud",
        weight: 50,
        length: 87,
        fiber: "90% alpakka, 10% ull",
        category: "aran/worsted",
        gauge: "16 m",
        needleSize: "5.5mm",
        alternatives: ["drops air", "sandnes børstet alpakka", "luftig alpakka"]
    },

    "drops lima": {
        brand: "Drops Garnstudio",
        name: "Lima",
        weight: 50,
        length: 100,
        fiber: "65% ull, 35% alpakka",
        category: "sport/dk",
        gauge: "21 m",
        needleSize: "4mm",
        alternatives: ["drops karisma", "drops nepal", "ull-alpakka sport"]
    },

    "drops soft tweed": {
        brand: "Drops Garnstudio",
        name: "Soft Tweed",
        weight: 50,
        length: 140,
        fiber: "90% ull, 10% viskose",
        category: "fingering",
        gauge: "23 m",
        needleSize: "3.5mm",
        alternatives: ["tweed-garn", "rustikk ullgarn", "drops alpaca"]
    },

    "drops puna": {
        brand: "Drops Garnstudio",
        name: "Puna",
        weight: 50,
        length: 110,
        fiber: "100% alpakka",
        category: "sport/dk",
        gauge: "21 m",
        needleSize: "4mm",
        alternatives: ["drops alpaca", "sandnes alpakka", "alpakka dk"]
    },

    "drops cotton merino": {
        brand: "Drops Garnstudio",
        name: "Cotton Merino",
        weight: 50,
        length: 110,
        fiber: "50% ull, 50% bomull",
        category: "sport/dk",
        gauge: "22 m",
        needleSize: "4mm",
        alternatives: ["bomull-ull blanding", "drops karisma", "naturfiber sport"]
    },

    "drops polaris": {
        brand: "Drops Garnstudio",
        name: "Polaris",
        weight: 100,
        length: 35,
        fiber: "100% ull",
        category: "super chunky",
        gauge: "8 m",
        needleSize: "12mm",
        alternatives: ["super tykk ullgarn", "pledd-garn", "ekstrem chunky"]
    },

    "drops delight": {
        brand: "Drops Garnstudio",
        name: "Delight",
        weight: 50,
        length: 200,
        fiber: "75% ull, 25% polyamid",
        category: "fingering",
        gauge: "24 m",
        needleSize: "2.5mm",
        alternatives: ["drops fabel", "sandnes sisu", "sokkegarn flerfarge"]
    },

    "drops big delight": {
        brand: "Drops Garnstudio",
        name: "Big Delight",
        weight: 100,
        length: 190,
        fiber: "58% bomull, 24% ull, 18% polyamid",
        category: "sport",
        gauge: "20 m",
        needleSize: "4.5mm",
        alternatives: ["flerfarge sport garn", "drops fabel", "sommergarn stripe"]
    },

    "drops wish": {
        brand: "Drops Garnstudio",
        name: "Wish",
        weight: 25,
        length: 100,
        fiber: "74% alpakka, 18% ull, 8% polyamid",
        category: "lace",
        gauge: "25 m",
        needleSize: "3mm",
        alternatives: ["drops kid silk", "tynn alpakka", "følgetråd"]
    },

    // KNITTING FOR OLIVE
    "knitting for olive merino": {
        brand: "Knitting for Olive",
        name: "Merino",
        weight: 50,
        length: 250,
        fiber: "100% merinoull",
        category: "Sport/Fingering",
        gauge: "28 m",
        needleSize: "3mm",
        alternatives: ["sandnes sunday", "viking vår", "rauma 2-tråds gammelserie"]
    },
    "knitting for olive heavy merino": {
        brand: "Knitting for Olive",
        name: "Heavy Merino", 
        weight: 50,
        length: 125,
        fiber: "100% merinoull",
        category: "DK/Light Worsted",
        gauge: "18 m",
        needleSize: "4.5mm",
        alternatives: ["sandnes alpakka", "viking baby ull", "rauma vamsegarn"]
    },
    "knitting for olive soft silk mohair": {
        brand: "Knitting for Olive",
        name: "Soft Silk Mohair",
        weight: 25,
        length: 225,
        fiber: "75% mohair, 25% silke", 
        category: "Lace/Fingering",
        gauge: "28-32 m",
        needleSize: "2.5-3mm",
        alternatives: ["sandnes tynn silk mohair"]
    },
    "knitting for olive compatible cashmere": {
        brand: "Knitting for Olive", 
        name: "Compatible Cashmere",
        weight: 25,
        length: 250,
        fiber: "100% cashmere",
        category: "Lace/Fingering",
        gauge: "28 m",
        needleSize: "3mm",
        alternatives: ["knitting for olive soft silk mohair", "sandnes tynn silk mohair"]
    },
    "knitting for olive pure silk": {
        brand: "Knitting for Olive",
        name: "Pure Silk", 
        weight: 50,
        length: 250,
        fiber: "100% silke",
        category: "Sport",
        gauge: "24-26 m",
        needleSize: "3-3.5mm",
        alternatives: ["høy kvalitet silke alternativer"]
    },
    "knitting for olive cotton merino": {
        brand: "Knitting for Olive",
        name: "Cotton Merino",
        weight: 50,
        length: 150,
        fiber: "50% bomull, 50% merinoull",
        category: "Sport/Light DK",
        gauge: "22-24 m",
        needleSize: "3.5-4mm", 
        alternatives: ["bomull/ull blanding alternativer"]
    },

    "knitting for olive no waste wool": {
        brand: "Knitting for Olive",
        name: "No Waste Wool",
        weight: 50,
        length: 250,
        fiber: "50% resirkulert ull, 50% merinoull",
        category: "Sport/Fingering",
        gauge: "28 m",
        needleSize: "3mm",
        alternatives: ["knitting for olive merino", "bærekraftige ullgarn", "resirkulerte ullgarn"]
    },

    // VIKING GARN  
    "viking baby ull": {
        brand: "Viking Garn",
        name: "Baby Ull",
        weight: 50,
        length: 90,
        fiber: "100% ull",
        category: "DK/Light Worsted",
        gauge: "22 m",
        needleSize: "3.5-4mm",
        alternatives: ["sandnes peer gynt", "rauma vamsegarn", "sandnes duo"]
    },
    "viking vår": {
        brand: "Viking Garn",
        name: "Vår",
        weight: 50, 
        length: 190,
        fiber: "100% ull",
        category: "Sport",
        gauge: "24 m",
        needleSize: "3.5mm",
        alternatives: ["sandnes sunday", "knitting for olive merino", "rauma 2-tråds gammelserie"]
    },
    "viking superwash": {
        brand: "Viking Garn", 
        name: "Superwash",
        weight: 50,
        length: 180,
        fiber: "100% superwash ull",
        category: "Sport/Light DK",
        gauge: "24 m",
        needleSize: "3.5mm",
        alternatives: ["sandnes lanett", "rauma finullgarn", "knitting for olive merino"]
    },
    "viking alpaca bris": {
        brand: "Viking Garn",
        name: "Alpaca Bris",
        weight: 50,
        length: 110,
        fiber: "100% alpakka", 
        category: "DK/Light Worsted",
        gauge: "18-20 m",
        needleSize: "4-4.5mm",
        alternatives: ["sandnes alpakka", "sandnes børstet alpakka", "knitting for olive heavy merino"]
    },
    "viking bambino": {
        brand: "Viking Garn",
        name: "Bambino",
        weight: 50,
        length: 175,
        fiber: "100% merinoull",
        category: "Sport/Light DK",
        gauge: "22 m",
        needleSize: "4mm",
        alternatives: ["knitting for olive merino", "sandnes kos", "viking vår"]
    },
    "viking nordlys": {
        brand: "Viking Garn",
        name: "Nordlys", 
        weight: 50,
        length: 100,
        fiber: "100% ull",
        category: "DK/Light Worsted",
        gauge: "20 m",
        needleSize: "4.5mm",
        alternatives: ["viking baby ull", "sandnes peer gynt", "rauma 3-tråds strikkegarn"]
    },
    "viking sportsragg": {
        brand: "Viking Garn",
        name: "Sportsragg",
        weight: 50,
        length: 90,
        fiber: "100% ull",
        category: "DK/Light Worsted",
        gauge: "22 m",
        needleSize: "3.5-4mm", 
        alternatives: ["viking baby ull", "sandnes peer gynt", "rauma vamsegarn"]
    },
    "viking hobbygarn": {
        brand: "Viking Garn",
        name: "Hobbygarn",
        weight: 50,
        length: 195,
        fiber: "100% akryl",
        category: "Sport",
        gauge: "24 m",
        needleSize: "3.5mm",
        alternatives: ["rimelige sport-garn alternativer"]
    },

    "viking kid mohair": {
        brand: "Viking Garn",
        name: "Kid Mohair",
        weight: 50,
        length: 200,
        fiber: "70% mohair, 18% merinoull, 12% nylon",
        category: "fingering",
        gauge: "18 m",
        needleSize: "4.5mm",
        alternatives: ["mohair garn", "knitting for olive soft silk mohair"]
    },

    "viking kid silk": {
        brand: "Viking Garn", 
        name: "Kid Silk",
        weight: 25,
        length: 200,
        fiber: "77% mohair, 23% silke",
        category: "lace",
        gauge: "24 m",
        needleSize: "3mm",
        alternatives: ["knitting for olive soft silk mohair", "sandnes tynn silk mohair"]
    },

    "viking mohrino": {
        brand: "Viking Garn",
        name: "Mohrino", 
        weight: 50,
        length: 100,
        fiber: "50% mohair, 41% merinoull, 9% nylon",
        category: "bulky",
        gauge: "12 m",
        needleSize: "7-8mm",
        alternatives: ["tykt mohair garn", "børstet garn"]
    },

    "viking naturgarn": {
        brand: "Viking Garn",
        name: "Naturgarn",
        weight: 50,
        length: 60,
        fiber: "100% ull",
        category: "chunky/super bulky",
        gauge: "10-12 m",
        needleSize: "7mm",
        alternatives: ["tovegarn", "tykt ullgarn", "chunky garn"]
    },

    "viking wool": {
        brand: "Viking Garn",
        name: "Wool",
        weight: 50,
        length: 100,
        fiber: "100% highland merinoull",
        category: "aran/worsted",
        gauge: "18 m", 
        needleSize: "4.5-5mm",
        alternatives: ["viking nordlys", "merinoull aran", "tovegarn"]
    },

    // HOUSE OF YARN   
    "multi popkorn": {
        brand: "House of Yarn",
        name: "Multi Popkorn",
        weight: 50,
        length: 135,
        fiber: "12% mohair, 24% ull, 24% akryl, 9% nylon, 31% polyester",
        category: "effect yarn",
        gauge: "18-22 m",
        needleSize: "4-6mm",
        alternatives: ["pafugl", "fnugg", "erle"]
    },

    "fnugg": {
        brand: "House of Yarn",
        name: "Fnugg",
        weight: 50,
        length: 80,
        fiber: "100% børstet alpakka",
        category: "chunky",
        gauge: "10-12 m",
        needleSize: "7-8mm",
        alternatives: ["pafugl", "faerytale", "puno"]
    },

    "pafugl": {
        brand: "House of Yarn",
        name: "Påfugl",
        weight: 50,
        length: 90,
        fiber: "73% mohair, 22% ull, 5% polyamid",
        category: "luxury mohair",
        gauge: "10-12 m",
        needleSize: "7-9mm",
        alternatives: ["fnugg", "erle", "kidsilk"]
    },

    "sterk": {
        brand: "House of Yarn",
        name: "Sterk",
        weight: 50,
        length: 137,
        fiber: "40% alpakka, 40% merinoull, 20% nylon",
        category: "sport",
        gauge: "22 m",
        needleSize: "3.5mm",
        alternatives: ["sisu", "perfect", "tresko"]
    },

    "alpakka forte": {
        brand: "House of Yarn",
        name: "Alpakka Forte",
        weight: 50,
        length: 133,
        fiber: "80% alpakka, 20% nylon",
        category: "sport",
        gauge: "25-27 m",
        needleSize: "2.5-3.5mm",
        alternatives: ["sterk", "alpakka wool", "merino babyull"]
    },

    "faerytale": {
        brand: "House of Yarn",
        name: "Faerytale",
        weight: 50,
        length: 175,
        fiber: "100% alpakka",
        category: "fingering/light lace",
        gauge: "18 m",
        needleSize: "4.5mm",
        alternatives: ["pus", "kidsilk erle", "merino babyull"]
    },

    "pus": {
        brand: "House of Yarn",
        name: "Pus",
        weight: 50,
        length: 100,
        fiber: "70% baby alpakka, 17% akryl, 13% polyamid",
        category: "luxe alpakkablanding",
        gauge: "12 m",
        needleSize: "9mm",
        alternatives: ["faerytale", "fnugg", "pehøne"]
    },

    "alpakka wool": {
        brand: "House of Yarn",
        name: "Alpakka Wool",
        weight: 50,
        length: 166,
        fiber: "60% alpakka, 40% ull",
        category: "fingering/light",
        gauge: "27 m",
        needleSize: "3 mm",
        alternatives: ["baby ull", "merino babyull", "fin alpakka"]
    },

    "merino babyull": {
        brand: "House of Yarn",
        name: "Merino Babyull",
        weight: 50,
        length: 175,
        fiber: "100% superwash merinoull",
        category: "fingering",
        gauge: "28 m",
        needleSize: "3 mm",
        alternatives: ["dale baby ull", "baby ull", "faerytale"]
    },

    "baby ull": {
        brand: "House of Yarn",
        name: "Dale Baby Ull",
        weight: 50,
        length: 165,
        fiber: "100% superwash merinoull",
        category: "fingering",
        gauge: "32 m",
        needleSize: "2.5‑3 mm",
        alternatives: ["merino babyull", "alpakka wool", "faerytale"]
    },

    "alpakka tweed": {
        brand: "House of Yarn",
        name: "Alpakka Tweed",
        weight: 50,
        length: null,
        fiber: "50% alpakka, 30% ull, 20% Donegal",
        category: "aran/worsted",
        gauge: null,
        needleSize: null,
        alternatives: ["alpakka wool", "sterk", "cortina soft"]
    },

    "kidsilk erle": {
        brand: "House of Yarn",
        name: "Kidsilk Erle",
        weight: 50,
        length: 350,
        fiber: "56% mohair, 26% silke, 18% ull",
        category: "lace",
        gauge: "18-24 m",
        needleSize: "3-5mm",
        alternatives: ["faerytale", "pus", "kidsilk"]
    },

    "cortina soft": {
        brand: "House of Yarn",
        name: "Cortina Soft",
        weight: 50,
        length: 55,
        fiber: "100% ull",
        category: "super bulky",
        gauge: "10 m",
        needleSize: "9-10mm",
        alternatives: ["vams", "fritidsgarn", "puno"]
    },

    "pure merino": {
        brand: "House of Yarn",
        name: "Pure Merino",
        weight: 50,
        length: 105,
        fiber: "100% merinoull (superwash)",
        category: "dk",
        gauge: "21 m",
        needleSize: "4mm",
        alternatives: ["merino extra fine", "alpakka forte", "lerke"]
    },

    "puno": {
        brand: "House of Yarn",
        name: "Puno",
        weight: 50,
        length: 110,
        fiber: "68% baby alpakka, 10% merinoull, 22% polyamid",
        category: "bulky",
        gauge: "13-16 m",
        needleSize: "6-7mm",
        alternatives: ["pus", "fnugg", "påfugl"]
    },

    //UNTOLD
    "un‐told light merino": {
        brand: "Un‑told",
        name: "Light Merino",
        weight: 50,
        length: 125,
        fiber: "100% ren ubehandlet merinoull",
        category: "fingering/dk",
        gauge: "21 m",
        needleSize: "4 mm",
        alternatives: ["supreme wool", "cotton merino"]
    },

    "un‐told cotton merino": {
        brand: "Un‑told",
        name: "Cotton Merino",
        weight: 50,
        length: 125,
        fiber: "blanding av bomull og merinoull",
        category: "dk",
        gauge: "21 m",
        needleSize: "4 mm",
        alternatives: ["light merino", "supreme wool"]
    },

    "un‐told supreme wool": {
        brand: "Un‑told",
        name: "Supreme Wool",
        weight: 50,
        length: null,
        fiber: "100% merinoull (superwash?)",
        category: "sport/dk",
        gauge: null,
        needleSize: null,
        alternatives: ["light merino", "cotton merino"]
    },

    "un‐told fuzzy mohair": {
        brand: "Un‑told",
        name: "Fuzzy Mohair",
        weight: 50,
        length: 90,
        fiber: "75% mohair, 25% ull",
        category: "mohair",
        gauge: "14 m",
        needleSize: "6 mm",
        alternatives: ["chunky mohair"]
    },

    "un‐told chunky mohair": {
        brand: "Un‑told",
        name: "Chunky Mohair",
        weight: 50,
        length: 200,
        fiber: "78% mohair, 13% ull, 9% nylon",
        category: "bulky mohair",
        gauge: "12 m",
        needleSize: "4‑9mm",
        alternatives: ["fuzzy mohair"]
    },

    //FILCOLANA
    "filcolana arwetta classic": {
        brand: "Filcolana",
        name: "Arwetta Classic",
        weight: 50,
        length: 210,
        fiber: "80% superwash merinoull, 20% nylon",
        category: "light fingering / sokkegarn",
        gauge: "28‑32 m",
        needleSize: "2.5‑3mm",
        alternatives: ["arwetta duo", "rautegarn", "ullsock merino"]
    },

        "filcolana tilia": {
        brand: "Filcolana",
        name: "Tilia",
        weight: 25,
        length: 210,
        fiber: "70% kid mohair, 30% mulberry silke",
        category: "lace",
        gauge: "20‑21 m (dobbel tråd på 4mm)",
        needleSize: "3.5‑6mm",
        alternatives: ["tykt mohair", "kidsilk erle", "puno held dubbel"]
    },

    //ISAGER
    "isager alpaca 1": {
        brand: "Isager",
        name: "Alpaca 1",
        weight: 50,
        length: 400,
        fiber: "100% alpaca",
        category: "lace/light fingering",
        gauge: "28 m",
        needleSize: "3 mm",
        alternatives: ["alpaca 2", "silk mohair", "light merino"]
    },

    "isager alpaca 2": {
        brand: "Isager",
        name: "Alpaca 2",
        weight: 50,
        length: 250,
        fiber: "50% alpaca, 50% merinoull",
        category: "fingering",
        gauge: "26 m",
        needleSize: "3 mm",
        alternatives: ["alpaca 1", "silk mohair", "pure merino"]
    },

    "isager tweed": {
        brand: "Isager",
        name: "Tweed",
        weight: 50,
        length: 200,
        fiber: "70% wool, 30% mohair",
        category: "sport/fingering",
        gauge: "26 m",
        needleSize: "3 mm",
        alternatives: ["alpaca 2", "spinni", "merilin"]
    },

    "isager silk mohair": {
        brand: "Isager",
        name: "Silk Mohair",
        weight: 25,
        length: 212,
        fiber: "75% super kid mohair, 25% silk",
        category: "lace",
        gauge: "18 m (16 sts med Spinni på 4 mm)",
        needleSize: "3.5-4mm",
        alternatives: ["tilia", "kidsilk erle", "alpaca 2 + mohair"]
    },

    //HILLESVÅG
    "varde pelsullgarn": {
        brand: "Hillesvåg",
        name: "Varde Pelsullgarn",
        weight: 100,
        length: 200,
        fiber: "100% norsk pelssau-ull",
        category: "aran/worsted",
        gauge: "18 m",
        needleSize: "4.5-5mm",
        alternatives: ["tinde pelsullgarn", "vidde lamullgarn", "rauma vams"]
    },

    "tinde pelsullgarn": {
        brand: "Hillesvåg",
        name: "Tinde Pelsullgarn",
        weight: 100,
        length: 260,
        fiber: "100% norsk pelssau-ull",
        category: "dk",
        gauge: "22 m",
        needleSize: "3.5-4mm",
        alternatives: ["varde pelsullgarn", "vidde lamullgarn", "peer gynt"]
    },

    "vidde lamullgarn": {
        brand: "Hillesvåg",
        name: "Vidde Lamullgarn",
        weight: 100,
        length: 200,
        fiber: "100% norsk lamull",
        category: "aran/worsted",
        gauge: "18 m",
        needleSize: "4.5-5mm",
        alternatives: ["varde pelsullgarn", "rauma vams", "peer gynt"]
    },

    //LANA GATTO
    "lana_gatto super soft": {
        brand: "Lana Gatto",
        name: "Super Soft",
        weight: 50,
        length: 125,
        fiber: "100% ekstrafin merinoull",
        category: "DK / light worsted",
        gauge: "31 m",
        needleSize: "4‑5mm",
        alternatives: ["merino delight", "pure merino", "maxi soft"]
    },

    "lana_gatto maxi soft": {
        brand: "Lana Gatto",
        name: "Maxi Soft",
        weight: 50,
        length: 90,
        fiber: "100% merinoull",
        category: "aran / chunky",
        gauge: "17 m",
        needleSize: "6mm",
        alternatives: ["super soft", "cortina soft", "brushed alpaca"]
    },

    "lana_gatto calico": {
        brand: "Lana Gatto",
        name: "Calicò",
        weight: 50,
        length: 113,
        fiber: "50% merinoull, 50% akryl",
        category: "dk",
        gauge: "17 m",
        needleSize: "4‑4.5mm",
        alternatives: ["super soft", "cotton merino"]
    },

        "lana_gatto prestige": {
        brand: "Lana Gatto",
        name: "Prestige",
        weight: 25,
        length: 75,
        fiber: "100% kasjmir",
        category: "sport",
        gauge: "24 m",
        needleSize: "4mm",
        alternatives: ["class", "feeling", "pure merino"]
    },

    //PERMIN    
    "angel": {
        brand: "Permin",
        name: "Angel",
        weight: 25,
        length: 210,
        fiber: "70% kid mohair, 30% silke",
        category: "lace",
        gauge: "20 m",
        needleSize: "4.5 mm",
        alternatives: ["nanna + angel", "tilia + angel", "bella mohair"]
    },

    "bella color": {
        brand: "Permin",
        name: "Bella Color",
        weight: 50,
        length: 140,
        fiber: "75% kid mohair, 20% ull, 5% polyamid",
        category: "bulky mohair",
        gauge: "14 m",
        needleSize: "6 mm",
        alternatives: ["angel held dobbel", "tykk mohair", "loop mohair"]
    },

    "nana": {
        brand: "Permin",
        name: "Nanna",
        weight: 50,
        length: 175,
        fiber: "47% alpaka, 45% bomull, 8% ull",
        category: "dk",
        gauge: "17-18 m",
        needleSize: "4.5-5 mm",
        alternatives: ["nellie", "cotton alpaca", "summer wool"]
    },

    "nellie": {
        brand: "Permin",
        name: "Nellie",
        weight: 50,
        length: 200,
        fiber: "55% alpaka, 24% bomull, 21% ull",
        category: "dk",
        gauge: "18-20 m",
        needleSize: "3.5-4 mm",
        alternatives: ["nanna", "esther", "alpaca cotton blend"]
    },

    "esther": {
        brand: "Permin",
        name: "Esther",
        weight: 50,
        length: 230,
        fiber: "55% ull, 25% bomull",
        category: "sport / fingering",
        gauge: "26 m",
        needleSize: "3 mm",
        alternatives: ["selma", "nellie", "maja"]
    },

    "selma": {
        brand: "Permin",
        name: "Selma",
        weight: 50,
        length: 210,
        fiber: "75% superwash merinoull, 25% polyamid",
        category: "sokkegarn",
        gauge: "30 m",
        needleSize: "2-3 mm",
        alternatives: ["esther", "arwetta", "sisu"]
    },

    "iris": {
        brand: "Permin",
        name: "Iris",
        weight: 50,
        length: 125,
        fiber: "45% viskose, 35% bomull, 20% lin",
        category: "summer/flame",
        gauge: "18-20 m",
        needleSize: "3.5-4 mm",
        alternatives: ["cotton linen", "hanskat", "lina flame"]
    },

    "alice": {
        brand: "Permin",
        name: "Alice",
        weight: 50,
        length: 150,
        fiber: "63% alpakka, 37% polyamid",
        category: "bulky",
        gauge: "15‑16 m",
        needleSize: "8 mm",
        alternatives: ["angel + alice", "maxi soft", "chunky alpaca"]
    },

    "kamma": {
        brand: "Permin",
        name: "Kamma",
        weight: 50,
        length: 175,
        fiber: "67% ull, 20% alpakka, 5% silke, 6% akryl, 2% viskose",
        category: "dk / tweed",
        gauge: "22 m",
        needleSize: "3.5 mm",
        alternatives: ["nanna", "nellie", "kamelia"]
    },

    "kamelia": {
        brand: "Permin",
        name: "Kamelia",
        weight: 50,
        length: 90,
        fiber: "65% ull, 20% alpakka, 5% silke, 6% akryl, 2% viskose",
        category: "aran/chunky",
        gauge: "14 m",
        needleSize: "6 mm",
        alternatives: ["kamma", "bella color", "tykk mohair"]
    },

    "dagmar": {
        brand: "Permin",
        name: "Dagmar",
        weight: 50,
        length: 150,
        fiber: "75% økologisk merinoull, 25% polyamid",
        category: "tweed",
        gauge: "18 m",
        needleSize: "4.5mm",
        alternatives: ["rigmor", "esther", "bella"]
    },

    "leonora": {
        brand: "Permin",
        name: "Leonora",
        weight: 25,
        length: 180,
        fiber: "50% silke, 40% ull, 10% kid mohair",
        category: "light fingering",
        gauge: "28 m",
        needleSize: "3mm",
        alternatives: ["angel", "bella", "wild & soft"]
    },

    "bella": {
        brand: "Permin",
        name: "Bella",
        weight: 50,
        length: 145,
        fiber: "75% kid mohair, 20% ull, 5% polyamid",
        category: "bulky mohair",
        gauge: "14 m",
        needleSize: "6mm",
        alternatives: ["bella color", "angel held dobbel", "chunky mohair"]
    },

    "rigmor": {
        brand: "Permin",
        name: "Rigmor",
        weight: 50,
        length: 150,
        fiber: "100% superwash merinoull",
        category: "sport / self-striping",
        gauge: "22 m",
        needleSize: "3.5-4mm",
        alternatives: ["dagmar", "selma", "esther"]
    },

    "selma": {
        brand: "Permin",
        name: "Selma",
        weight: 50,
        length: 210,
        fiber: "75% superwash merinoull, 25% polyamid",
        category: "sokkegarn",
        gauge: "28 m",
        needleSize: "3mm",
        alternatives: ["arwetta", "sisu", "rigmor"]
    }
};

// Hjelpefunksjoner for kalkulatoren
const yarnUtils = {
    // Finn garn basert på navn (case-insensitive)
    findYarn: function(yarnName) {
        const searchKey = yarnName.toLowerCase().trim();
        return yarnDatabase[searchKey] || null;
    },

    // Finn alternativer basert på strikkefasthet
    findAlternativesByGauge: function(yarnName) {
        const originalYarn = this.findYarn(yarnName);
        if (!originalYarn || !originalYarn.gauge) return [];
        
        // Parse strikkefastheten (f.eks. "18-20 m" -> 19)
        const originalGaugeNum = this.parseGauge(originalYarn.gauge);
        const results = [];
        
        for (const [key, yarn] of Object.entries(yarnDatabase)) {
            if (key === yarnName.toLowerCase()) continue; // Skip samme garn
            
            if (yarn.gauge) {
                const yarnGaugeNum = this.parseGauge(yarn.gauge);
                const gaugeDiff = Math.abs(originalGaugeNum - yarnGaugeNum);
                
                // Perfekt match: Eksakt samme strikkefasthet (0 masker forskjell)
                // Godt match: 1 maske forskjell
                // OK match: 2-3 masker forskjell
                if (gaugeDiff <= 3) {
                    let matchQuality;
                    if (gaugeDiff === 0) {
                        matchQuality = 'perfect';
                    } else if (gaugeDiff === 1) {
                        matchQuality = 'good';
                    } else {
                        matchQuality = 'good'; // 2-3 masker får også 'good' for nå
                    }
                    
                    results.push({
                        key: key,
                        ...yarn,
                        matchQuality: matchQuality,
                        gaugeDiff: gaugeDiff
                    });
                }
            }
        }
        
        // Sorter etter strikkefasthet-nærhet (perfekte først, deretter gode)
        return results.sort((a, b) => {
            // Perfekte matches først
            if (a.matchQuality === 'perfect' && b.matchQuality !== 'perfect') return -1;
            if (b.matchQuality === 'perfect' && a.matchQuality !== 'perfect') return 1;
            
            // Så etter gaugeDiff
            return a.gaugeDiff - b.gaugeDiff;
        });
    },

    // Parse strikkefasthet til nummer
    parseGauge: function(gaugeString) {
        // "18-20 m" -> 19, "18 m" -> 18
        const numbers = gaugeString.match(/\d+/g);
        if (!numbers) return 0;
        
        if (numbers.length === 2) {
            return (parseInt(numbers[0]) + parseInt(numbers[1])) / 2;
        }
        return parseInt(numbers[0]);
    },

    // Beregn garnmengde ved bytte
    calculateYarnAmount: function(originalYarn, newYarn, originalAmount) {
        const original = this.findYarn(originalYarn);
        const replacement = this.findYarn(newYarn);
        
        if (!original || !replacement) {
            return { error: "Garn ikke funnet i database" };
        }

        // Beregn total lengde som trengs
        const totalLength = (originalAmount / original.weight) * original.length;
        
        // Beregn hvor mange nøster av det nye garnet som trengs
        const newBallsNeeded = Math.ceil(totalLength / replacement.length);
        const newGramsNeeded = newBallsNeeded * replacement.weight;

        return {
            totalLength: totalLength,
            ballsNeeded: newBallsNeeded,
            gramsNeeded: newGramsNeeded,
            original: original,
            replacement: replacement
        };
    },

    // Søk i databasen
    searchYarns: function(searchTerm) {
        const term = searchTerm.toLowerCase();
        const results = [];
        
        for (const [key, yarn] of Object.entries(yarnDatabase)) {
            if (key.includes(term) || 
                yarn.name.toLowerCase().includes(term) ||
                yarn.brand.toLowerCase().includes(term)) {
                results.push({ key: key, ...yarn });
            }
        }
        
        return results;
    },

    // Hent alle garn fra et merke
    getYarnsByBrand: function(brand) {
        return Object.entries(yarnDatabase)
            .filter(([key, yarn]) => yarn.brand.toLowerCase() === brand.toLowerCase())
            .map(([key, yarn]) => ({ key: key, ...yarn }));
    },

    // Hent alle tilgjengelige merker
    getAllBrands: function() {
        const brands = new Set();
        Object.values(yarnDatabase).forEach(yarn => brands.add(yarn.brand));
        return Array.from(brands).sort();
    }
};

// Eksporter for bruk i andre filer
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { yarnDatabase, yarnUtils };
}

// For bruk i nettleser
if (typeof window !== 'undefined') {
    window.yarnDatabase = yarnDatabase;
    window.yarnUtils = yarnUtils;
}