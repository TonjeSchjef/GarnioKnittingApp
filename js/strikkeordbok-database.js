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

    "rille": {
    english: "garter stitch",
    summary: "Et strikkemønster hvor du strikker alle masker rett på hver omgang eller rett frem og tilbake.",
    description: "Riller dannes når man strikker rett på alle pinner (frem og tilbake) eller rett på alle omganger i rundstrikk. Dette gir en elastisk og strukturert flate som ikke ruller i kantene, perfekt til skjerf, tepper og kanter."
    },

    "bol": {
        english: "body",
        summary: "Den største delen av et plagg, som utgjør hoveddelen av kroppen.",
        description: "Bolen er den sentrale delen av en genser, jakke eller topp, som dekker overkroppen. Den strikkes ofte etter at kant og eventuelt bærestykke er ferdig, og danner grunnlaget for plaggets passform."
    },
    "bærestykke": {
        english: "yoke",
        summary: "Øvre del av et plagg som forbinder bolen med ermene.",
        description: "Bærestykket kan være rundt, firkantet eller med raglanøkninger, og er den delen som sitter over skuldrene og ned til brystet. Ofte dekoreres det med mønsterstrikk, fletter eller hullmønster."
    },
    "brystvidde": {
        english: "bust circumference",
        summary: "Målet rundt den bredeste delen av brystet på plagget eller kroppen.",
        description: "Brystvidden er et viktig mål når du strikker gensere eller jakker, for å sikre riktig passform. Den oppgis i oppskrifter for å hjelpe deg å velge riktig størrelse."
    },
    "diagram": {
        english: "chart",
        summary: "En visuell fremstilling av et strikkemønster med symboler for hver maske.",
        description: "Diagrammer brukes for å vise mønstre som fletter, hullstrikk eller flerfarget strikk. Hver rute i diagrammet representerer en maske, og symbolene viser hvilken teknikk som skal brukes."
    },
    "flette": {
        english: "cable",
        summary: "En dekorativ teknikk der maskene krysses for å lage et tvunnet mønster.",
        description: "Fletter lages ved å flytte et sett masker foran eller bak arbeidet før de strikkes, noe som gir en tredimensjonal effekt. Brukes ofte i gensere, skjerf og votter."
    },
    "flettepinne": {
        english: "cable needle",
        summary: "Et hjelpeverktøy for å holde masker midlertidig når du lager fletter.",
        description: "Flettepinnen er en liten pinne med en bøy eller krok som hindrer maskene i å falle av når du krysser dem foran eller bak arbeidet."
    },
    "german short rows": {
        english: "german short rows",
        summary: "En metode for å lage forkortede pinner for formgiving i strikk.",
        description: "German short rows brukes til å lage høydeforskjeller i et plagg, som i skuldre eller halsutskjæring. Teknikken innebærer å snu arbeidet midt i en pinne og lage en 'dobbeltmaske' for å unngå hull."
    },
    "hullmønster": {
        english: "lace pattern",
        summary: "Et mønster med bevisste hull laget ved hjelp av kast og sammenstrikking.",
        description: "Hullmønster gir et luftig og dekorativt uttrykk i strikketøyet. Det brukes i sjal, topper og lette gensere, og krever ofte at du følger et diagram."
    },
    "i-cord": {
        english: "i-cord",
        summary: "En smal, rundstrikket snor som brukes som kant eller snøring.",
        description: "I-cord kan strikkes på strømpepinner eller med spesialteknikk på to pinner. Den brukes som dekorativ kant eller som funksjonell snor i klær og tilbehør."
    },
    "italiensk avfelling": {
        english: "italian bind-off",
        summary: "En elastisk avfelling som gir en sømløs avslutning.",
        description: "Italiensk avfelling brukes ofte i vrangborder for en pen og elastisk kant. Den gir et utseende som ser ut til å fortsette strikkens struktur."
    },
    "kantmaske": {
        english: "edge stitch",
        summary: "Masken som danner kanten på strikketøyet.",
        description: "Kantmasker gir en ryddig avslutning og kan strikkes på forskjellige måter, for eksempel alltid rett eller ved å løfte masken. Brukes ofte i plagg som skal monteres."
    },
    "kast": {
        english: "yarn over",
        summary: "En teknikk for å lage et ekstra hull eller øke en maske.",
        description: "Kast gjøres ved å føre garnet over pinnen for å lage en ny maske, ofte brukt i hullmønster eller som en økning."
    },
    "legge opp": {
        english: "cast on",
        summary: "Prosessen med å lage den første raden med masker på pinnen.",
        description: "Å legge opp danner grunnlaget for strikketøyet. Det finnes mange metoder, som lang opplegg, italiensk opplegg eller midlertidig opplegg."
    },
    "maske løst av": {
        english: "slip stitch",
        summary: "Å flytte en maske fra venstre til høyre pinne uten å strikke den.",
        description: "Løse masker brukes i mønstre, fellinger eller formgiving. Det gir struktur og kan hindre vridning av garnet."
    },
    "maskeholder": {
        english: "stitch holder",
        summary: "Et verktøy for å holde masker midlertidig uten at de rakner.",
        description: "Maskeholdere ser ofte ut som store sikkerhetsnåler og brukes når masker skal hvile, for eksempel under deling av ermer og bol."
    },
    "omgang": {
        english: "round",
        summary: "En hel runde med masker i rundstrikk eller en pinne i frem-og-tilbake-strikk.",
        description: "I rundstrikk tilsvarer en omgang hele sirkelen av masker. I frem-og-tilbake-strikk kalles det gjerne pinne."
    },
    "patent": {
        english: "brioche",
        summary: "En teknikk som gir et tykt, elastisk og tofarget mønster.",
        description: "Patentstrikk lages ved å kombinere rettmasker med kast og løse masker, noe som gir en luftig og stretchy struktur, perfekt til skjerf og gensere."
    },
    "perleribb": {
        english: "moss rib",
        summary: "En kombinasjon av vrangbord og perlestrikk.",
        description: "Perleribb lages ved å strikke rett og vrang i et mønster som gir struktur og elastisitet, ofte brukt til kanter og ermer."
    },
    "perlestrikk": {
        english: "moss stitch / seed stitch",
        summary: "Et strukturmønster som lages ved å veksle mellom rett og vrang.",
        description: "Perlestrikk gir en knudrete overflate og brukes ofte i gensere, tepper og tilbehør for en dekorativ effekt."
    },
    "raglan": {
        english: "raglan",
        summary: "En skulderkonstruksjon med diagonale økninger eller fellinger fra hals til armhule.",
        description: "Raglan gir en jevn overgang mellom ermer og bol, og brukes ofte i gensere for å unngå skuldersømmer."
    },
    "settpinne": {
        english: "double-pointed needle (DPN)",
        summary: "En kort strikkepinne med spiss i begge ender, brukt til små omkretser.",
        description: "Sett- eller strømpepinner brukes til sokker, votter og ermer, ofte i sett på 4–5 pinner for rundstrikk."
    },
    "stolpe": {
        english: "button band / placket",
        summary: "En kant på jakker eller gensere som holder knapper eller glidelås.",
        description: "Stolpen strikkes ofte som en del av plagget eller plukkes opp langs kanten. Den gir stabilitet og en pen avslutning."
    },
    "strikkefasthet": {
        english: "gauge / tension",
        summary: "Antall masker og rader per 10 cm, som bestemmer størrelsen på plagget.",
        description: "Strikkefastheten er avgjørende for at plagget skal få riktig mål. Den måles ved å strikke en prøvelapp og sammenligne med oppskriften."
    },
    "tapt maske": {
        english: "dropped stitch",
        summary: "En maske som har glidd av pinnen og raknet nedover arbeidet.",
        description: "Tapte masker kan skje ved uhell, men kan også brukes som dekorativ teknikk. De kan reddes ved å plukke dem opp med en heklenål."
    },
    "vrangbord": {
        english: "ribbing",
        summary: "Et elastisk mønster laget ved å veksle rett og vrang.",
        description: "Vrangbord brukes ofte på kanter som hals, ermer og midje for å gi elastisitet og en fin avslutning. Vanlige varianter er 1x1 eller 2x2."
    },
    "vridd rett": {
        english: "twisted knit stitch",
        summary: "En rett maske strikket gjennom bakre maskeledd, som gir et tvinnet uttrykk.",
        description: "Vridd rett gir et fast og dekorativt resultat og brukes i strukturmønstre og som detaljer i glattstrikk."
    },
    "feste tråder": {
        english: "weave in ends",
        summary: "Å skjule løse garnender etter ferdig strikk.",
        description: "Trådene festes med nål eller ved å veve dem inn i strikketøyet, slik at arbeidet blir ryddig og holder seg stabilt over tid."
    },

    "rundfelling": {
        english: "circular yoke decrease",
        summary: "En metode for å forme bærestykket ved å felle masker jevnt fordelt i omganger.",
        description: "Rundfelling brukes ofte i gensere med rundt bærestykke for å forme halsåpningen. Maskene felles gradvis i sirkelen slik at plagget sitter godt på skuldrene, og teknikken kombineres gjerne med mønsterstrikk."
    },

    "blokking": {
        english: "blocking",
        summary: "En metode for å forme og jevne ut strikketøyet etter vask.",
        description: "Blokking innebærer å fukte eller dampe strikketøyet for å oppnå riktige mål og en jevn overflate. Plagget festes i ønsket form og tørkes, noe som fremhever mønster og gir et mer profesjonelt resultat."
    },

    "dobbelstrikk": {
        english: "double knitting",
        summary: "En teknikk som lager et tosidig strikket stoff.",
        description: "Dobbelstrikk brukes for å skape et vendbart plagg med to rette sider og ingen vrangside. Teknikken gir et tykt og varmt resultat og brukes ofte i skjerf, luer eller tepper."
    },

    "picot-kant": {
        english: "picot edge",
        summary: "En dekorativ kant med små tagger laget ved å kombinere kast og fellinger.",
        description: "Picot-kant gir en feminin og dekorativ avslutning på kanter, ofte brukt på ermer, kanter eller halslinjer. Den lages vanligvis ved å lage kast og felle for å skape små hull og tagger."
    },

    "i-cord kant": {
        english: "i-cord edge",
        summary: "En kant laget med i-cord-teknikk for en glatt og rund avslutning.",
        description: "I-cord kant gir en pen og fast avslutning på strikketøyet. Den lages enten samtidig som man strikker, eller ved å strikke en separat i-cord og sy den på. Brukes ofte på kanter for å gi et ryddig preg."
    },

    "rundpinne": {
        english: "circular needle",
        summary: "En strikkepinne bestående av to spisser koblet med en vaier for rundstrikk.",
        description: "Rundpinner brukes både til å strikke rundt og til store arbeider frem og tilbake. De gjør det enklere å håndtere mange masker og gir bedre vektfordeling enn rette pinner."
    }
};