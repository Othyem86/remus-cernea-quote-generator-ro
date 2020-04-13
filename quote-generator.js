// 
//  MAIN PROGRAM
// 

// Generate random array index based on array length
function randomIndex(arr){
    return Math.floor(Math.random() * arr.length);
}

// Generate random sound
function randomAudioSource() {
    return './sound/sound' +  Math.floor(Math.random() * 14) + '.mp3';
}

// Generate random sentence
function generateSentence(quoteObj) {
    let string = '';
    for (let set in quoteObj) {
        let randomSubSet = randomIndex(quoteObj[set]);
        string += (quoteObj[set][randomSubSet]);
    }
    return string;
}

// Play sound and parse random sentence to the DOM tree
function generateQuote() {
    document.getElementById("quote").innerText = generateSentence(quoteDB);
    let sound = new Audio(randomAudioSource());
    sound.pause();
    sound.play();
}


//
// QUOTE GENERATOR DATA BASE
// 
const quoteDB = {
    setA0: [
        "Nu credeam că trebuie să mai repet: ",
        "Trăim totuși în secolul 21... ",
        "Printre chestiunile care merită lămurite: ",
        "Nu e niciodată prea târziu să conștientizăm: ",
        "E total derutant sa descoperi cum unii vorbesc despre etichete ideologice fără niciun fel de context social! Putem reține: ",
        "",
        "",
        "",
        ""
    ],
    setA1: [
        "Economia socială",
        "Reprezentativitatea reală",
        "Dreptul femeilor de a decide cu privire la corpul lor",
        "Dreptul la locuire",
        "Investiția în resursa umană",
        "Schimbarea atitudinilor sociale",
        "Echilibrul de gen",
        "Promovarea toleranței față de persoanele LGBT",
        "Educația incluzivă",
        "Sănătatea incluzivă",
        "Accesul la servicii publice în mod egal",
        "Eliminarea barierelor de gen",
        "Democrația reprezentativă"
    ],
    setA2: [
        " ne permite să visăm la un viitor fără",
        " poate însemna o lume lipsită de",
        " reprezintă o adevărată provocare în lupta pentru o societate fără",
        " ne permite o abordare critică pentru o lume fără",
        " ne dă speranțe că vom apuca vremuri lipsite de",
        " face să putem vizualiza o lume fără",
        " înseamnă în țări mai civilizate decât a noastră un spațiu fără",
        " consituie un element esențial în evoluția către acea societate în care nu mai există"
    ],
    setA3: [
        " hărțuire sexuală",
        " consumerism estetic",
        " conservatorism tradiționalist",
        " excluziune socială",
        " atitudini nedemocratice",
        " stereotipuri de gen",
        " bigotism",
        " transfobie",
        " bigotism",
        " stereotipuri de gen"
    ],
    setA4: [
        ", structuri masculinizate",
        ", războaie care răvășesc țări",
        ", maladii morale",
        ", fundamentalism religios",
        ", mentalități antidemocratice",
        ", concepții perimate",
        ", mentalități înguste",
        ", concepții perimate",
        ", fundamentalism religios",
        ", respingeri patologice le diferenței"
    ],
    setA5: [
        ", comportament abuziv. ",
        ", violență în familie. ",
        ", standarde de frumusețe promovate de mass-media. ",
        ", manspreading. ",
        ", gentrificare. ",
        ", rasism sistemic. ",
        ", respingere a ideilor egalitare sub pretextul că sunt de stânga. ",
        ", manifestări xenofobe. ",
        ", elitism. ",
        ", eurofobie. ",
        ", consum de animale moarte. "
    ],
    setB1: [
        "Nu vă lăsați amăgiți de oferta slabă pe piața politică, România",
        "Sunt nenumărate motive pentru care un feminist adevărat",
        "Societatea noastră nu va rămâne veșnic în lanțurile habotnicismului – ea",
        "Fără dezavantajul unui leadership conservator-naționalist, România",
        "Ținând la distanță hoardele de eurosceptici, societatea noastră",
        "Chiar dacă istoria integrării europene nu va merge mai departe triumfător, flancul democratic al UE",
        "La capătul unui proces de transformare instituțională a statului, societatea românească",
        "O Europă socială",
        "Fără a mai relua argumentul fals al suveranismului xenofob, orice societate democratică matură",
        "Tineretul, ca obstacol în calea evoluțiilor autoritare,",
        "Oricine se revendică de la valorile liberale incluzive",
        "Suntem în fața unui greu și important test pentru umanitate, dar România",
        "Solidaritatea crește prin implicare, și fiecare cetățean conștient"
    ],
    setB2: [
        " trebuie",
        " chiar are acum oportunitatea",
        " va reuși",
        " poate răspunde provocării istorice, astfel încât",
        " se află în fața unei alegeri; începând de azi, poate",
        " se integrează unui demers global, reușind",
        " va putea ajunge",
        " caută",
        " poate, astăzi mai mult ca oricând",
        " are oportunitatea"
    ],
    setB3: [
        " să vizualizeze problemele sistemice doar în termeni de nondiscriminare și intersecționalitate. ",
        " să limiteze abuzurile împotriva celor lipsiți de apărare și adăpost. ",
        " să conceapă servicii sociale adresate cu adevărat tuturor, incluzând dreptul la locuire și dreptul la transport public. ",
        " să promoveze participarea civică prin programe de interes public. ",
        " să privească atent spre modelul pozitiv oferit de Țările Nordice. ",
        " să educe cu privire la acest fapt esențial: corpul femeii nu este un incubator. ",
        " să-și asume un program economic durabil, vizând stimularea și protecția angajaților. ",
        " să-și fixeze un obiectiv mai amplu, vizând construirea unui nou tip de comunitate umană. ",
        " să conceapă o administrație publică performantă digital. ",
        " să respingă inechitatea de gen, reflectată în discursurile publice și politice. ",
        " să promoveze simpatia comprehensivă față de victimele inechității de gen, protecția demnității femeilor și a bărbaților la locul de muncă. ",
        " să observe și să deconstruiască stereotipurile în interacțiunea cotidiană, în discursurile publice și politice, în elaborarea politicilor publice. ",
        " să remedieze ambiguitățile apărute în câmpul muncii. ",
        " să refuze agenda populist-neoliberală în teme de imigrație și servicii sociale. ",
        " să critice fetișizarea proprietății private în detrimentul accesului egal la serviciile publice. ",
        " să identifice afirmațiile fără ghidaj doctrinar, care viciază modul în care se face politică. ",
        " să respingă acele grupuri care propagă ura și discriminarea, foametea și războiul. ",
        " să nu mai perpetueze clivajele nocive între angajații din sectorul public și cel privat, între tineri și bătrâni de diverse etnii. "
    ],
    setC1: [
        "Toți cititorii de literatură feministă intersecțională și managementul politicilor publice",
        "Activiștii implicați direct, la nivel civic,",
        "Aceia dintre noi care sunt liberali într-un sens corect al sintagmei",
        "Cei care au intuit problematizarea discriminării și a locuirii sociale",
        "Cititorii cei mai atenți ai Simonei de Beauvoir",
        "Cei care au urmărit recentele investigații ale jurnaliștilor Al Jazeera",
        "Practicanții ecopacifismului liberal",
        "Cei care mi-au urmat sfatul de lectură, luând contact cu marile texte ale economiei sociale moderne,"
    ],
    setC2: [
        " știu desigur că",
        " au o înțelegere a faptului că",
        " nu greșesc când observă că",
        " pot observa cu ochii lor:"
    ],
    setC3: [
        " femeile puternice se pot opune cel mai eficient unei societăți în derivă, din ce în ce mai neoliberală. ",
        " democrația consolidată, cu adevărat reprezentativă, nu se poate opune introducerii unor cote de gen. ",
        " sexismul și exploatarea nesustenabilă a resurselor naturale sunt produse ale aceleiași mentalități distructive, masculinizate. ",
        " există o legătură directă între discriminarea de gen și islamofobie. ",
        " paradigma multiculturală oferă un câmp de acțiune comun pentru feminism și postcolonialism, cu interogații specifice. ",
        " întărirea prejudecăților misogine are loc în acel mediu care a înlocuit democrația consolidată cu iluzia \"meritocratică\". ",
        " măsurile de orice tip trebuie să fie în interesul tuturor cetățenilor, fără disproporții care sar în ochi. ",
        " nivelul de educație politică trebuie să fie substanțial mai ridicat, pentru o țară în care să trăim toți decent. ",
        " firmele private pot face profit și respectând un cod etic, evaluându-se între ele – mai trebuie să treacă doar de un pas psihologic. ",
        " valul de incorectitudine, mizând pe imprevizibilitate față de minoritățile etnice ori sexuale, s-a reîntrupat prin lideri fără autentice convingeri democratice. ",
        " resurecția unor forțe ostile societății deschise și incluzive, opuse progresului, are un uriaș impact nefast asupra lumii. ",
        " lupta pentru a repara derapajele autoritarismului violent, trumpist, coalizează toate forțele societății deschise, ale democrației de nivel planetar. ",
        " umilirea minorităților sociale prin cinism extrem, ignoranța și ura, conduc la neintegrarea teroriștilor. ",
        " pentru a supraviețui ca societăți multiculturale, pasul imediat următor este să trasăm limite generale, să luptăm împotriva generalizărilor și islamofobiei oarbe. ",
        " îmblânzirea capitalismului, fară iluziile toxice ale xenofobiei, trebuie să rămână de asemenea sensibilă la chestiunea schimbărilor climatice. ",
        " se cer preîntâmpinate presiunile asupra sistemului juridic, mai ales cele în direcția restrângerii conceptului de egalitate. ",
        " discursul populist, axat de pe divizarea identităților, a lovit puternic în idealurile democratice de egalitate și diversitate. ",
        " există cel mult diferențe minore între torționarii fasciști și executorii care îi evacuează pe cei care nu mai pot plăti ratele. ",
        " reorientarea structurală valorizează dezvoltarea socio-economică și coeziunea socială, într-un mediu mai puțin poluat. "
    ]
};