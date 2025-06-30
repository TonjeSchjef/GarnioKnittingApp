// Strikkeordbok database
const strikkeordbok = {
    "rett masker": {
        english: "knit stitch",
        summary: "Den mest grunnleggende strikketeknikken hvor du strikker maskene 'rett frem'.",
        description: "Rett masker lager en glatt overflate på forsiden av arbeidet. Stikk nåla gjennom masken forfra og bakover, legg garnet rundt nåla og trekk den nye masken gjennom. Dette er grunnlaget for de fleste strikkemønstre og brukes i alt fra gensere til skjerf."
    },
    "vrang masker": {
        english: "purl stitch",
        summary: "Motsatsen av rett masker, skaper tekstur på forsiden av arbeidet.",
        description: "Vrang masker lager en struktur med små horisontale streker. Når du kombinerer rett og vrang masker får du ulike mønstre som jersey og ribb. Teknikken utføres ved å stikke nåla gjennom masken bakfra og fremover, med garnet foran arbeidet."
    },
    "maske": {
        english: "stitch",
        summary: "En enkelt løkke av garn som danner grunnenheten i strikking.",
        description: "Masker er de individuelle løkkene som utgjør strikketøyet. Hver maske henger sammen med maskene rundt seg og danner det sammenvevde stoffet. Antall masker bestemmer bredden på strikketøyet."
    },
    "patent": {
        english: "fisherman's rib",
        summary: "En strikketeknikk der det strikkes med 'doble' masker for å få et tykt og elastisk ribbemønster.",
        description: "Patent gir et meget elastisk og tykt strikketøy som er perfekt til varme plagg som gensere og luer. Teknikken utføres ved å strikke i masken under den som ligger på pinnen, noe som skaper det karakteristiske tykke utseendet. Bruker mer garn enn vanlig strikking."
    },
    "jersey": {
        english: "stockinette stitch",
        summary: "Et grunnleggende strikkemønster med rett masker på forsiden og vrang masker på baksiden.",
        description: "Jersey er det mest brukte strikkemønsteret og gir en glatt, jevn overflate. Det strikkes ved å alternere mellom én omgang/rad med rett masker og én med vrang masker. Perfekt til gensere, skjerf og mange andre plagg. Kan krølle i kantene uten kantbehandling."
    },
    "ribb": {
        english: "ribbing",
        summary: "Et elastisk mønster som alternerer mellom rett og vrang masker.",
        description: "Ribb er svært elastisk og brukes ofte til mansjetter, bord og halskanter. Vanlige varianter er 1x1 ribb (1 rett, 1 vrang) og 2x2 ribb (2 rett, 2 vrang). Ribbing trekker seg sammen og gir en god passform rundt håndledd og midje."
    },
    "opptak": {
        english: "cast on",
        summary: "Metoden for å starte strikkingen ved å legge masker på pinnen.",
        description: "Det finnes mange opptak-metoder, hver med sine fordeler. Langtidsopptak er mest vanlig for nybegynnere, mens kabelopptak gir en fastere kant. Italiensk opptak er elastisk og perfekt til ribb. Valg av opptak påvirker kantens elastisitet og utseende."
    },
    "avfelting": {
        english: "bind off / cast off",
        summary: "Metoden for å avslutte strikkingen og sikre at maskene ikke løsner.",
        description: "Avfelting gjøres ved å trekke en maske gjennom den neste, slik at maskene låses fast. Vanlig avfelting er enklest, mens elastisk avfelting brukes når kanten skal være elastisk. Viktig å ikke stramme for mye slik at kanten blir stiv."
    },
    "masketelling": {
        english: "stitch count",
        summary: "Å telle antall masker for å sikre riktig bredde og form på strikketøyet.",
        description: "Masketelling er viktig for å følge oppskrifter nøyaktig. Bruk maskemarkører for å markere viktige punkter. Tell regelmessig, spesielt etter økninger og fellingner. En god vane som sparer deg for mye opprikking senere."
    },
    "kabelstrikk": {
        english: "cable knitting",
        summary: "Avansert teknikk som skaper flettede mønstre ved å krysse masker over hverandre.",
        description: "Kabelstrikk krever en kabelpin eller hjelpepinn for å holde masker mens andre strikkes. Skaper vakre flettede mønstre som ofte brukes på gensere og puter. Kan være enkle kryss eller komplekse flettemønstre. Krever konsentrasjon og øvelse."
    },
    "intarsia": {
        english: "intarsia",
        summary: "Fargestrikkingsteknikk for å lage store fargeblokker og mønstre.",
        description: "Intarsia brukes for å strikke store områder med forskjellige farger uten at garnet løper på baksiden. Hver fargeseksjon har sin egen garnkule. Garntrådene vris sammen på baksiden ved fargeskift. Perfekt for bilder og geometriske mønstre."
    },
    "fair isle": {
        english: "fair isle / stranded colorwork",
        summary: "Tradisjonell flerfargestrikking der ubrukte farger føres på baksiden av arbeidet.",
        description: "Fair Isle kommer fra Shetlandsøyene og er kjent for sine geometriske mønstre. Maksimalt to farger per rad, og det ubrukte garnet føres løst på baksiden. Viktig med jevn spenning for å unngå at arbeidet trekker seg sammen. Skaper varme, tykke plagg."
    },
    "økning": {
        english: "increase",
        summary: "Teknikker for å legge til masker og gjøre strikketøyet bredere.",
        description: "Vanlige økningsmetoder inkluderer yarn over (yo), make one (m1) og strikke i både for- og bakside av samme maske. Brukes for å forme ermhuller, bærestykker og andre områder som skal bli bredere. Viktig å plassere økninger symmetrisk."
    },
    "felling": {
        english: "decrease",
        summary: "Teknikker for å fjerne masker og gjøre strikketøyet smalere.",
        description: "Vanlige fellingsmetoder er strikke to masker sammen (2sm) og slip slip knit (ssk). Brukes for å forme hals, ermhuller og andre områder som skal bli smalere. Retningen på fellingen påvirker hvilken side som skråner mot høyre eller venstre."
    },
    "vendepinner": {
        english: "double pointed needles / DPNs",
        summary: "Korte strikkepinner med spiss i begge ender, brukt til rundstrikking på små omkretser.",
        description: "Vendepinner brukes typisk til sokker, luer, votter og ermer. Kommer vanligvis i sett på 4-5 pinner. Maskene fordeles på flere pinner og du strikker med den ledige pinnen. Krever litt øvelse å unngå hull mellom pinnene."
    },
    "rundpinn": {
        english: "circular needle",
        summary: "To strikkepinner forbundet med en plastsnor, brukt til rundstrikking.",
        description: "Rundpinner kommer i forskjellige lengder (40cm-150cm) og brukes til å strikke rundt uten søm. Perfekt til gensere, luer og andre plagg som strikkes i ett stykke. Magic loop-teknikken lar deg bruke lange rundpinner til små omkretser."
    },
    "magic loop": {
        english: "magic loop",
        summary: "Teknikk for å strikke små omkretser på en lang rundpinn.",
        description: "Magic loop lar deg strikke sokker, ermer og andre små omkretser på en 80-100cm rundpinn. Snoren trekkes ut i en løkke på hver side, og du strikker frem og tilbake mellom to seksjoner. Eliminerer behovet for vendepinner."
    },
    "maskemarkør": {
        english: "stitch marker",
        summary: "Små ringer eller klemmer som markerer viktige punkter i strikkingen.",
        description: "Maskemarkører brukes til å markere starten på runden, økning/fellingspunkter, eller mønsterseksjoner. Kommer som lukkede ringer til rundpinner eller åpne klemmer til rette pinner. Gjør det lettere å følge oppskrifter og unngå feil."
    },
    "opprikking": {
        english: "frogging / ripping back",
        summary: "Å rive opp strikketøy for å rette feil eller endre noe.",
        description: "Opprikking er når du må rive opp deler av eller hele strikketøyet for å rette feil. Navnet 'frogging' kommer fra lyden 'rip it, rip it' som høres ut som en frosk. Viktig å gjøre forsiktig for å ikke skade garnet."
    },
    "gauge": {
        english: "gauge / tension",
        summary: "Antall masker og rader per centimeter, avgjørende for riktig størrelse.",
        description: "Gauge måles ved å strikke en prøvelapp på 10x10cm med samme garn, pinner og mønster som i oppskriften. Hvis din gauge ikke stemmer, må du bytte pinnetykkelse. Tettere strikking = tynnere pinner, løsere strikking = tykkere pinner."
    }
};