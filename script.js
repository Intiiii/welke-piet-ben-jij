// Quiz data met vragen en antwoorden
const quizData = [
    {
        question: "Wat is je favoriete bezigheid tijdens het sinterklaasfeest?",
        answers: [
            { text: "Cadeautjes inpakken en versieren", type: "hoofdpiet" },
            { text: "Snoepgoed maken en proeven", type: "snoeppiet" },
            { text: "Liedjes zingen en muziek maken", type: "muziekpiet" },
            { text: "Knutselen en creatief bezig zijn", type: "knutselpiet" }
        ]
    },
    {
        question: "Hoe los jij problemen op?",
        answers: [
            { text: "Ik blijf kalm en overzie het hele overzicht", type: "hoofdpiet" },
            { text: "Ik probeer eerst even iets lekkers te eten", type: "snoeppiet" },
            { text: "Ik zing een vrolijk liedje om de sfeer te verbeteren", type: "muziekpiet" },
            { text: "Ik maak iets creatiefs om het probleem op te lossen", type: "knutselpiet" }
        ]
    },
    {
        question: "Wat is je grootste talent?",
        answers: [
            { text: "Organiseren en leiding geven", type: "hoofdpiet" },
            { text: "Heerlijke recepten bedenken", type: "snoeppiet" },
            { text: "Muziek maken en entertainen", type: "muziekpiet" },
            { text: "Mooie dingen maken met mijn handen", type: "knutselpiet" }
        ]
    },
    {
        question: "Wat doe jij het liefst in je vrije tijd?",
        answers: [
            { text: "Plannen maken en lijstjes bijhouden", type: "hoofdpiet" },
            { text: "Nieuwe recepten uitproberen", type: "snoeppiet" },
            { text: "Naar muziek luisteren of zelf muziek maken", type: "muziekpiet" },
            { text: "DIY-projecten starten", type: "knutselpiet" }
        ]
    },
    {
        question: "Hoe reageer je als er iets misgaat?",
        answers: [
            { text: "Ik overzie de situatie en bedenk een plan", type: "hoofdpiet" },
            { text: "Ik zoek troost in iets lekkers", type: "snoeppiet" },
            { text: "Ik probeer het positief te houden met een liedje", type: "muziekpiet" },
            { text: "Ik ga aan de slag om het te repareren", type: "knutselpiet" }
        ]
    },
    {
        question: "Wat is je favoriete sinterklaaslekkernij?",
        answers: [
            { text: "Een goed georganiseerd bord met van alles", type: "hoofdpiet" },
            { text: "Zelfgemaakte chocoladeletters", type: "snoeppiet" },
            { text: "Pepernoten (vooral vanwege het ritme)", type: "muziekpiet" },
            { text: "Snoepgoed dat er ook nog eens mooi uitziet", type: "knutselpiet" }
        ]
    },
    {
        question: "Wat zou je meenemen naar een onbewoond eiland?",
        answers: [
            { text: "Een notitieboek om alles te plannen", type: "hoofdpiet" },
            { text: "Een voorraad lekker eten", type: "snoeppiet" },
            { text: "Een muziekinstrument", type: "muziekpiet" },
            { text: "Een doos met knutselspullen", type: "knutselpiet" }
        ]
    },
    {
        question: "Wat typeer jou het beste?",
        answers: [
            { text: "Ik ben een natuurlijke leider", type: "hoofdpiet" },
            { text: "Ik ben een genieter van het leven", type: "snoeppiet" },
            { text: "Ik ben altijd vrolijk en muzikaal", type: "muziekpiet" },
            { text: "Ik ben creatief en handig", type: "knutselpiet" }
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
    }
};

// Quiz state
let currentQuestion = 0;
let scores = {
    hoofdpiet: 0,
    snoeppiet: 0,
    muziekpiet: 0,
    knutselpiet: 0
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

// Event listeners
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);

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
    
    // Voeg antwoorden toe
    question.answers.forEach((answer, index) => {
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
}

function restartQuiz() {
    // Reset alles
    currentQuestion = 0;
    scores = {
        hoofdpiet: 0,
        snoeppiet: 0,
        muziekpiet: 0,
        knutselpiet: 0
    };
    
    // Ga terug naar start scherm
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
}