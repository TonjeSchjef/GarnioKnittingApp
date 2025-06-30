const yarnDatabase = {
    // SANDNES GARN
    "sandnes peer gynt": {
        brand: "Sandnes",
        name: "Peer Gynt",
        weight: 50, // gram per nøste
        length: 91, // meter per 50g
        fiber: "100% norsk ull",
        category: "DK/Light Worsted",
        gauge: "22 m", // masker per 10cm på pinne 3.5-4mm
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
        gauge: "",
        needleSize: "",
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
        category: "",
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