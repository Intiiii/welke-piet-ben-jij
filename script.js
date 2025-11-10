// Quiz data met vragen en antwoorden
const quizData = [
    {
        question: "Wat is je favoriete bezigheid tijdens het sinterklaasfeest?",
        answers: [
            { text: "Cadeautjes inpakken en versieren", type: "hoofdpiet" },
            { text: "Snoepgoed maken en proeven", type: "snoeppiet" },
            { text: "Liedjes zingen en muziek maken", type: "muziekpiet" },
            { text: "Knutselen en creatief bezig zijn", type: "knutselpiet" },
            { text: "Boeken lezen en verhalen vertellen", type: "boekpiet" },
            { text: "Alles schoonmaken en poetsen", type: "smeerpoetspiet" },
            { text: "Rijmen en gedichten maken", type: "rijmpiet" },
            { text: "Slimme oplossingen bedenken", type: "slimpiet" }
        ]
    },
    {
        question: "Hoe los jij problemen op?",
        answers: [
            { text: "Ik blijf kalm en overzie het hele overzicht", type: "hoofdpiet" },
            { text: "Ik probeer eerst even iets lekkers te eten", type: "snoeppiet" },
            { text: "Ik zing een vrolijk liedje om de sfeer te verbeteren", type: "muziekpiet" },
            { text: "Ik maak iets creatiefs om het probleem op te lossen", type: "knutselpiet" },
            { text: "Ik zoek in een boek naar de oplossing", type: "boekpiet" },
            { text: "Ik raak in paniek en weet niet wat te doen", type: "pietjepaniek" },
            { text: "Ik vergeet waar ik mee bezig was", type: "vergeetpiet" },
            { text: "Ik gebruik mijn intelligentie", type: "slimpiet" }
        ]
    },
    {
        question: "Wat is je grootste talent?",
        answers: [
            { text: "Organiseren en leiding geven", type: "hoofdpiet" },
            { text: "Heerlijke recepten bedenken", type: "snoeppiet" },
            { text: "Muziek maken en entertainen", type: "muziekpiet" },
            { text: "Mooie dingen maken met mijn handen", type: "knutselpiet" },
            { text: "Verhalen vertellen en voorlezen", type: "boekpiet" },
            { text: "Grappen uithalen en lol maken", type: "mallepiet" },
            { text: "Nieuwe dingen uitproberen", type: "proefpiet" },
            { text: "Slimme vragen stellen", type: "slimpiet" }
        ]
    },
    {
        question: "Wat doe jij het liefst in je vrije tijd?",
        answers: [
            { text: "Plannen maken en lijstjes bijhouden", type: "hoofdpiet" },
            { text: "Nieuwe recepten uitproberen", type: "snoeppiet" },
            { text: "Naar muziek luisteren of zelf muziek maken", type: "muziekpiet" },
            { text: "DIY-projecten starten", type: "knutselpiet" },
            { text: "Boeken lezen en verhalen bedenken", type: "boekpiet" },
            { text: "Mopperen en klagen", type: "wellespiet" },
            { text: "Dingen vergeten en zoeken", type: "vergeetpiet" },
            { text: "Rijmen en dichten", type: "rijmpiet" }
        ]
    },
    {
        question: "Hoe reageer je als er iets misgaat?",
        answers: [
            { text: "Ik overzie de situatie en bedenk een plan", type: "hoofdpiet" },
            { text: "Ik zoek troost in iets lekkers", type: "snoeppiet" },
            { text: "Ik probeer het positief te houden met een liedje", type: "muziekpiet" },
            { text: "Ik ga aan de slag om het te repareren", type: "knutselpiet" },
            { text: "Ik zeg 'Welles!' en wijs naar een ander", type: "wellespiet" },
            { text: "Ik verstop me en hoop dat het overwaait", type: "pietjepaniek" },
            { text: "Ik verzin een slimme oplossing", type: "slimpiet" },
            { text: "Ik raak verdwaald in mijn gedachten", type: "verdwaalpiet" }
        ]
    },
    {
        question: "Wat is je favoriete sinterklaaslekkernij?",
        answers: [
            { text: "Een goed georganiseerd bord met van alles", type: "hoofdpiet" },
            { text: "Zelfgemaakte chocoladeletters", type: "snoeppiet" },
            { text: "Pepernoten (vooral vanwege het ritme)", type: "muziekpiet" },
            { text: "Snoepgoed dat er ook nog eens mooi uitziet", type: "knutselpiet" },
            { text: "Boekvormige koekjes", type: "boekpiet" },
            { text: "Ik vind alles lekker!", type: "mallepiet" },
            { text: "Ik vergeet wat ik lekker vind", type: "vergeetpiet" },
            { text: "Ik experimenteer met nieuwe smaken", type: "proefpiet" }
        ]
    },
    {
        question: "Wat zou je meenemen naar een onbewoond eiland?",
        answers: [
            { text: "Een notitieboek om alles te plannen", type: "hoofdpiet" },
            { text: "Een voorraad lekker eten", type: "snoeppiet" },
            { text: "Een muziekinstrument", type: "muziekpiet" },
            { text: "Een doos met knutselspullen", type: "knutselpiet" },
            { text: "Een boek vol avonturen", type: "boekpiet" },
            { text: "Een kompas (maar ik raak toch verdwaald)", type: "verdwaalpiet" },
            { text: "Een grappenboek", type: "mallepiet" },
            { text: "Een wetenschappelijk naslagwerk", type: "slimpiet" }
        ]
    },
    {
        question: "Wat typeert jou het beste?",
        answers: [
            { text: "Ik ben een natuurlijke leider", type: "hoofdpiet" },
            { text: "Ik ben een genieter van het leven", type: "snoeppiet" },
            { text: "Ik ben altijd vrolijk en muzikaal", type: "muziekpiet" },
            { text: "Ik ben creatief en handig", type: "knutselpiet" },
            { text: "Ik ben een verhalenverteller", type: "boekpiet" },
            { text: "Ik ben een grappenmaker", type: "mallepiet" },
            { text: "Ik ben slim en bedachtzaam", type: "slimpiet" },
            { text: "Ik ben vergeetachtig en chaotisch", type: "vergeetpiet" }
        ]
    }
];

// Piet types met beschrijvingen
const pietTypes = {
    hoofdpiet: {
        name: "Hoofdpiet",
        emoji: "🎩",
        description: "Jij bent een natuurlijke leider! Net als Hoofdpiet heb je alles onder controle en weet je precies hoe je dingen moet aanpakken. Je bent georganiseerd, betrouwbaar en andere Pieten kunnen altijd op jou rekenen. Met jouw planning skills zorg je ervoor dat Sinterklaas nooit voor verrassingen komt te staan!",
        characteristics: ["Georganiseerd", "Leiderschap", "Betrouwbaar", "Strategisch"]
    },
    snoeppiet: {
        name: "Snoeppiet",
        emoji: "🍭",
        description: "Jij bent een ware lekkerbek! Net als Snoeppiet geniet je volop van alle lekkernijen die het leven te bieden heeft. Je bent creatief in de keuken en weet altijd wel iets lekkers te bedenken. Je brengt vreugde en gezelligheid waar je ook gaat, en je weet dat een goede traktatie iedereen vrolijk maakt!",
        characteristics: ["Lekkerbek", "Creatief", "Gezellig", "Zoet"]
    },
    muziekpiet: {
        name: "Muziekpiet",
        emoji: "🎵",
        description: "Jij bent een vrolijke noot! Net als Muziekpiet breng je overal muziek en vrolijkheid. Je hebt altijd een liedje op je lippen en weet met jouw positieve energie iedereen op te vrolijken. Je bent creatief, spontaan en weet dat een goed liedje alle zorgen doet vergeten!",
        characteristics: ["Muzikaal", "Vrolijk", "Spontaan", "Energiek"]
    },
    knutselpiet: {
        name: "Knutselpiet",
        emoji: "✂️",
        description: "Jij bent een creatieve duizendpoot! Net als Knutselpiet kun je met jouw handen mooie dingen maken. Je bent handig, inventief en ziet overal mogelijkheden om iets moois te creëren. Je hebt geduld en doorzettingsvermogen, en je weet dat met een beetje creativiteit alles mogelijk is!",
        characteristics: ["Handig", "Creatief", "Geduldig", "Inventief"]
    },
    boekpiet: {
        name: "Boekpiet",
        emoji: "📚",
        description: "Jij bent een ware kennisdief! Net als Boekpiet ben je dol op verhalen, boeken en kennis verzamelen. Je bent wijs, leergierig en kunt urenlang genieten van een goed boek. Je hebt altijd wel een interessant weetje paraat en andere Pieten komen bij jou voor advies en verhalen!",
        characteristics: ["Wijs", "Leergierig", "Verhalenverteller", "Kennisrijk"]
    },
    wellespiet: {
        name: "Wellespiet",
        emoji: "🙅‍♂️",
        description: "Jij bent een eigenwijze denker! Net als Wellespiet heb je altijd je eigen mening en laat je je niet zomaar overtuigen. Je bent kritisch, analytisch en twijfelt vaak aan dingen. Soms ben je wat mopperig, maar dat komt omdat je de dingen graag goed wilt doen. Je bent een echte discussiërd!",
        characteristics: ["Kritisch", "Eigenwijs", "Analytisch", "Mopperig"]
    },
    pietjepaniek: {
        name: "Pietje Paniek",
        emoji: "😱",
        description: "Jij bent een wat nerveuze type! Net als Pietje Paniek raak je snel in paniek als er iets misgaat. Je bent wat angstig, maar ook lief en zorgzaam. Je hebt een goed hart en bedoelt het altijd goed, zelfs als je wat schrikkerig bent. Andere Pieten weten dat ze op jouw zorgzaamheid kunnen rekenen!",
        characteristics: ["Zorgzaam", "Angstig", "Lief", "Paniekerig"]
    },
    vergeetpiet: {
        name: "Vergeetpiet",
        emoji: "🤔",
        description: "Jij bent een beetje vergeetachtig! Net als Vergeetpiet vergeet je weleens dingen, maar je bent ook creatief in het verzinnen van oplossingen. Je bent chaotisch, maar ook vindingrijk. Je hebt een goed hart en bedoelt het altijd goed, zelfs als je dingen vergeet. Je brengt onverwachte momenten van verrassing!",
        characteristics: ["Vergeetachtig", "Chaotisch", "Vindingrijk", "Lief"]
    },
    mallepiet: {
        name: "Malle Piet",
        emoji: "🤪",
        description: "Jij bent een echte clown! Net als Malle Piet weet jij iedereen aan het lachen te maken met jouw grappen en grollen. Je bent vrolijk, spontaan en altijd in voor een geintje. Je hebt een positieve kijk op het leven en weet dat humor de beste medicijn is. Je bent de vrolijke noot in elk gezelschap!",
        characteristics: ["Grappig", "Vrolijk", "Spontaan", "Clownesk"]
    },
    proefpiet: {
        name: "Proefpiet",
        emoji: "🧪",
        description: "Jij bent een ware uitvinder! Net als Proefpiet ben je altijd bezig met nieuwe dingen uitproberen en experimenteren. Je bent nieuwsgierig, onderzoekend en durft risico's te nemen. Soms mislukken je experimenten, maar vaak ontdek je iets geweldigs nieuws. Je bent een pionier in hart en nieren!",
        characteristics: ["Experimenteel", "Nieuwsgierig", "Onderzoekend", "Durver"]
    },
    verdwaalpiet: {
        name: "Verdwaalpiet",
        emoji: "🗺️",
        description: "Jij bent een avontuurlijke dromer! Net als Verdwaalpiet raak je weleens verdwaald in je gedachten of in de wereld. Je bent een dromer, avontuurlijk en altijd op ontdekkingstocht. Je hebt een rijke fantasie en ziet overal nieuwe mogelijkheden. Je brengt avontuur en verrassing in het leven!",
        characteristics: ["Dromerig", "Avontuurlijk", "Verdwaald", "Fantasierijk"]
    },
    smeerpoetspiet: {
        name: "Piet de Smeerpoets",
        emoji: "🧽",
        description: "Jij bent een ware schoonmaakfanaat! Net als Piet de Smeerpoets houd je van netheid en orde. Je bent geduldig, secuur en vindt voldoening in een schone omgeving. Je bent betrouwbaar en andere Pieten weten dat ze op jouw kunnen rekenen voor een schone boel. Je maakt alles weer blinkend schoon!",
        characteristics: ["Schoon", "Geduldig", "Secuur", "Betrouwbaar"]
    },
    rijmpiet: {
        name: "Rijmpiet",
        emoji: "📝",
        description: "Jij bent een dichter in hart en nieren! Net als Rijmpiet ben je dol op rijmen, dichten en woordspelletjes. Je bent creatief met taal, hebt een rijke fantasie en kunt urenlang bezig zijn met het vinden van het perfecte rijmwoord. Je brengt poëzie en creativiteit in het leven van anderen!",
        characteristics: ["Dichter", "Creatief", "Taalgevoelig", "Fantasierijk"]
    },
    slimpiet: {
        name: "Slimpiet",
        emoji: "🧠",
        description: "Jij bent een briljante denker! Net als Slimpiet ben je slim, intelligent en altijd bezig met het oplossen van complexe problemen. Je bent analytisch, logisch en andere Pieten komen bij jou voor slimme oplossingen. Je hebt een scherpe geest en weet dat kennis macht is!",
        characteristics: ["Slim", "Intelligent", "Analytisch", "Oplossingsgericht"]
    }
};

// Quiz state
let currentQuestion = 0;
let scores = {
    hoofdpiet: 0,
    snoeppiet: 0,
    muziekpiet: 0,
    knutselpiet: 0,
    boekpiet: 0,
    wellespiet: 0,
    pietjepaniek: 0,
    vergeetpiet: 0,
    mallepiet: 0,
    proefpiet: 0,
    verdwaalpiet: 0,
    smeerpoetspiet: 0,
    rijmpiet: 0,
    slimpiet: 0
};

// DOM elementen
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const progressBar = document.getElementById('progress');
const resultPiet = document.getElementById('result-piet');
const resultDescription = document.getElementById('result-description');
const chartCanvas = document.getElementById('pepernoot-chart');
const chartLegend = document.getElementById('chart-legend');
const statsSection = document.getElementById('stats-section');
const toggleStatsBtn = document.getElementById('toggle-stats-btn');

// Kleuren per Piet-type (voor chart)
const pietColors = {
    hoofdpiet: '#4a5568',
    snoeppiet: '#dd6b20',
    muziekpiet: '#63b3ed',
    knutselpiet: '#68d391',
    boekpiet: '#b794f6',
    wellespiet: '#f6ad55',
    pietjepaniek: '#feb2b2',
    vergeetpiet: '#a0aec0',
    mallepiet: '#fbb6ce',
    proefpiet: '#81e6d9',
    verdwaalpiet: '#b794f4',
    smeerpoetspiet: '#7dd3fc',
    rijmpiet: '#f687b3',
    slimpiet: '#9f7aea'
};

// Event listeners
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);
if (toggleStatsBtn) {
    toggleStatsBtn.addEventListener('click', () => {
        const willShow = statsSection.classList.contains('hidden');
        statsSection.classList.toggle('hidden');
        toggleStatsBtn.setAttribute('aria-expanded', String(willShow));
        toggleStatsBtn.textContent = willShow ? 'Verberg statistieken' : 'Toon statistieken';
        if (willShow) {
            renderPepernootChart(scores);
            renderLegend(scores);
        }
    });
}

// Functies
function startQuiz() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
}

function showQuestion() {
    const question = quizData[currentQuestion];
    questionText.textContent = question.question;
    currentQuestionSpan.textContent = currentQuestion + 1;
    totalQuestionsSpan.textContent = quizData.length;
    
    // Update progress bar
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    progressBar.style.width = progress + '%';
    
    // Leeg antwoorden container
    answersContainer.innerHTML = '';
    
    // Shuffle en voeg antwoorden toe
    const shuffled = shuffleArray(question.answers);
    shuffled.forEach((answer) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer.text;
        button.addEventListener('click', () => selectAnswer(answer.type));
        answersContainer.appendChild(button);
    });
}

function selectAnswer(type) {
    // Markeer geselecteerd antwoord
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach(btn => btn.classList.remove('selected'));
    event.target.classList.add('selected');
    
    // Verhoog score
    scores[type]++;
    
    // Wacht even voor visuele feedback
    setTimeout(() => {
        currentQuestion++;
        
        if (currentQuestion < quizData.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 500);
}

function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    // Bepaal winnende Piet type
    let maxScore = 0;
    let winner = 'hoofdpiet';
    
    for (const type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            winner = type;
        }
    }
    
    const pietResult = pietTypes[winner];
    
    // Verwijder alle piet-klassen en voeg de juiste toe
    resultPiet.className = 'result-piet piet-' + winner;
    
    // Toon resultaat
    resultPiet.innerHTML = `
        <h3>Je bent: ${pietResult.name}!</h3>
        <span class="piet-emoji">${pietResult.emoji}</span>
        <div class="piet-characteristics">
            <strong>Jouw kenmerken:</strong>
            <ul>
                ${pietResult.characteristics.map(char => `<li>${char}</li>`).join('')}
            </ul>
        </div>
    `;
    
    resultDescription.innerHTML = `<p>${pietResult.description}</p>`;

    // Statistieken standaard verborgen; render bij toggle
    if (statsSection && !statsSection.classList.contains('hidden')) {
        renderPepernootChart(scores);
        renderLegend(scores);
    }
}

function restartQuiz() {
    // Reset alles
    currentQuestion = 0;
    scores = {
        hoofdpiet: 0,
        snoeppiet: 0,
        muziekpiet: 0,
        knutselpiet: 0,
        boekpiet: 0,
        wellespiet: 0,
        pietjepaniek: 0,
        vergeetpiet: 0,
        mallepiet: 0,
        proefpiet: 0,
        verdwaalpiet: 0,
        smeerpoetspiet: 0,
        rijmpiet: 0,
        slimpiet: 0
    };
    
    // Ga terug naar start scherm
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
    // Statistieken verbergen en knop resetten
    if (statsSection) {
        statsSection.classList.add('hidden');
    }
    if (toggleStatsBtn) {
        toggleStatsBtn.textContent = 'Toon statistieken';
        toggleStatsBtn.setAttribute('aria-expanded', 'false');
    }
}

// Utility: shuffle array
function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// Render de pepernoot piechart
function renderPepernootChart(scoreMap) {
    if (!chartCanvas) return;
    const ctx = chartCanvas.getContext('2d');
    const w = chartCanvas.width;
    const h = chartCanvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const r = Math.min(w, h) / 2 - 8;

    // Wis canvas
    ctx.clearRect(0, 0, w, h);

    // Teken cirkelrand eerst (voor een nette aflijning)
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.strokeStyle = '#8a5a2b';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Emoji/koek-achtergrond – clip op cirkel en centreer exact met tekst-metrics
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    const emoji = '🍪';
    const baseSize = 100; // px
    ctx.font = `${baseSize}px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif`;
    let metrics = ctx.measureText(emoji);
    const baseWidth = metrics.width;
    const baseHeight = (metrics.actualBoundingBoxAscent || baseSize * 0.8) + (metrics.actualBoundingBoxDescent || baseSize * 0.2);
    const diameter = r * 2;
    const scale = Math.min(diameter / baseWidth, diameter / baseHeight) * 1.30; // nog een stap groter voor vollere cirkel
    const finalSize = Math.floor(baseSize * scale);

    ctx.font = `${finalSize}px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    metrics = ctx.measureText(emoji);
    const ascent = metrics.actualBoundingBoxAscent || finalSize * 0.8;
    const descent = metrics.actualBoundingBoxDescent || finalSize * 0.2;
    const height = ascent + descent;
    const baselineY = cy + (ascent - height / 2);
    ctx.fillText(emoji, cx, baselineY);
    ctx.restore();

    // Bereken totaal
    const entries = Object.entries(scoreMap).filter(([, v]) => v > 0);
    const total = entries.reduce((sum, [, v]) => sum + v, 0);
    if (total === 0) return; // geen scores, niets tekenen

    // Teken segmenten
    let start = -Math.PI / 2; // start bovenaan
    entries.forEach(([type, value]) => {
        const angle = (value / total) * Math.PI * 2;
        const end = start + angle;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, r, start, end);
        ctx.closePath();
        // Semi-transparante kleur zodat emoji zichtbaar blijft
        const color = pietColors[type] || '#444';
        ctx.fillStyle = hexToRgba(color, 0.65);
        ctx.fill();
        start = end;
    });

    // Emoji is de achtergrond; geen extra textuur nodig
    // Herteken de cirkelrand zodat segmenten de rand niet overschilderen
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.strokeStyle = 'rgba(138, 90, 43, 0.9)';
    ctx.lineWidth = 4;
    ctx.stroke();
}

// (Geen extra kruimel/scheur-effecten nodig bij emoji-achtergrond)

function hexToRgba(hex, alpha = 1) {
    const clean = hex.replace('#', '');
    const bigint = parseInt(clean.length === 3 ? clean.split('').map(c => c + c).join('') : clean, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Legenda met percentages
function renderLegend(scoreMap) {
    if (!chartLegend) return;
    const entries = Object.entries(scoreMap).filter(([, v]) => v > 0);
    const total = entries.reduce((sum, [, v]) => sum + v, 0);
    // Sorteer op aflopend percentage
    entries.sort((a, b) => b[1] - a[1]);
    const items = entries.map(([type, value]) => {
        const percent = Math.round((value / total) * 100);
        const color = pietColors[type] || '#444';
        const name = pietTypes[type]?.name || type;
        return `
            <div class="legend-item">
                <span class="legend-swatch" style="background:${color}"></span>
                <span class="legend-label">${name}</span>
                <span class="legend-percent">${percent}%</span>
                <span class="legend-points">(${value} punt${value === 1 ? '' : 'en'})</span>
            </div>
        `;
    });
    chartLegend.innerHTML = items.length ? items.join('') : '<p>Geen verdeling beschikbaar.</p>';
}