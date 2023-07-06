let questions = [

    {
        "html": [
            {
                "question": "Wer hat HTML erfunden?",
                "answer_1": "Robbie William's",
                "answer_2": "Lady Gaga",
                "answer_3": "Tim Bernes-Lee",
                "answer_4": "Justin Bieber",
                "right_answer": 3
            },
            {
                "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
                "answer_1": "Text fett",
                "answer_2": "Container",
                "answer_3": "Ein Link",
                "answer_4": "Kursiv",
                "right_answer": 3
            },
            {
                "question": "Wie bindet man eine Website in eine Website ein?",
                "answer_1": "&lt;iframe&gt;, &lt;frame&gt;, and &lt;frameset&gt",
                "answer_2": "&lt;iframe&gt;",
                "answer_3": "&lt;frame&gt;",
                "answer_4": "&lt;frameset&gt",
                "right_answer": 3
            },
            {
                "question": "Wie definitiert man in Javascript eine Variable?",
                "answer_1": "let 100 = rate;",
                "answer_2": "100 = let rate;",
                "answer_3": "rate = 100",
                "answer_4": "let rate = 100;",
                "right_answer": 4
            },
        ],

        "css": [
            {
                "question": "Was ist CSS?",
                "answer_1": "Cascading Style Sheets",
                "answer_2": "Context Style Sheets",
                "answer_3": "Creative Style Sheets",
                "answer_4": "Coded Style Sheets",
                "right_answer": 1
            },
            {
                "question": "Welches ist das Schlüsselelement des CSS-Layouts?",
                "answer_1": "HTML-Tags",
                "answer_2": "Gruppierung",
                "answer_3": "Box-Modell",
                "answer_4": "Seitenlayout",
                "right_answer": 3
            },
            {
                "question": "Welches ist keine Eigenschaft, die in CSS definiert werden kann?",
                "answer_1": "Größe",
                "answer_2": "Form",
                "answer_3": "Farbe",
                "answer_4": "Name",
                "right_answer": 4
            },
            {
                "question": "Wie wird ein <div>-Container in einer Flex-Box horizontal zentriert?",
                "answer_1": "align-text: center;",
                "answer_2": "align-items: center;",
                "answer_3": "justifiy-content: center;",
                "answer_4": "position: center;",
                "right_answer": 3
            },

        ],

        "js": [
            {
                "question": "Was ist eine Funktion in JavaScript?",
                "answer_1": "Eine Funktion ist ein Abschnitt des Codes, den man mehrmals verwenden kann.",
                "answer_2": "Eine Funktion ist ein weiteres Element einer Beschreibungssprache.",
                "answer_3": "Eine Funktion ist ein Abschnitt des Codes, der den Style eines Objektes bestimmt.",
                "answer_4": "Eine Funktion ist ein Grundbaustein in JavaScript",
                "right_answer": 1
            },
            {
                "question": "Was ist JavaScript?",
                "answer_1": "JavaScript ist eine Skriptsprache, die speziell für die Astrophysik entwickelt wurde.",
                "answer_2": "JavaScript ist nur eine objektorientierte Programmiersprache.",
                "answer_3": "JavaScript ist keine sehr benutzerfreundliche Programmiersprache.",
                "answer_4": "JavaScript dient dem Hinterlegen von Logik und dynamischem Verhalten von Webseiten und Anwendungen.",
                "right_answer": 4
            },
            {
                "question": "Wie bindet man eine Website in eine Website ein?",
                "answer_1": "&lt;iframe&gt;, &lt;frame&gt;, and &lt;frameset&gt",
                "answer_2": "&lt;iframe&gt;",
                "answer_3": "&lt;frame&gt;",
                "answer_4": "&lt;frameset&gt",
                "right_answer": 2
            },
            {
                "question": "Wie definitiert man in Javascript eine Variable?",
                "answer_1": "let 100 = rate;",
                "answer_2": "100 = let rate;",
                "answer_3": "rate = 100",
                "answer_4": "let rate = 100;",
                "right_answer": 4
            },
        ],


        "java": [
            {
                "question": "Welche Version von Java wird zurzeit am häufigsten verwendet?",
                "answer_1": "Java 1.4",
                "answer_2": "Java 2",
                "answer_3": "Java 8",
                "answer_4": "Java 12",
                "right_answer": 3
            },
            {
                "question": "Was sind die grundlegenden Merkmale der Programmiersprache Java?",
                "answer_1": "Objektorientierung, dynamisches Typing und Referenztypen",
                "answer_2": "Objektorientierung, statisches Typing und Referenztypen",
                "answer_3": "Komposition, dynamisches Typing und Referenztypen",
                "answer_4": "Komposition, statisches Typing und Referenztypen",
                "right_answer": 1
            },
            {
                "question": "Welche Arten von Anwendungen können mit Java erstellt werden?",
                "answer_1": "Webanwendungen",
                "answer_2": "Anwendungen für Smartphones",
                "answer_3": " Desktop-Anwendungen",
                "answer_4": "Alle oben genannten",
                "right_answer": 4
            },
            {
                "question": "Was sind die Vorteile, die Java zu anderen Programmiersprachen bietet?",
                "answer_1": "Portabiltät und Robustheit",
                "answer_2": "Portabilität und Langlebigkeit",
                "answer_3": "Flexibilität und Robustheit",
                "answer_4": "Flexibilität und Langlebigkeit",
                "right_answer": 1
            }

        ]
    }

];

let questionCount = 0;  // Bei welcher Frage wir aktuell sind
let answerLimit = 0; // Limit maximal 1, dann können keine weiteren Antworten mehr geklickt werden
let rightAnswerCount = 0; // Zähler für die richtigen Fragen
let topic = 'html';
let AUDIO_SUCCESS = new Audio('./sounds/right.mp3');
let AUDIO_FAIL = new Audio('./sounds/wrong.mp3');

function init() { // Funktion, die aufgerufen wird beim Start des Quizes und nach jeder Frage
    showQuestion();
    ShowQuestionNumber();
}

function getTopic(i) { // Funktion fürs Auswählen des Themas + Einfügen in die Startseite des Quizes
    topic = i;
    let upperCase = topic.toUpperCase();

    document.getElementById('topic-headline').innerHTML = /*html*/`
        The Awesome ${upperCase} Quiz
        `;
}

function navigateQuestionsForward() { //solange der Zähler unter 3 ist, wird der Fragen-Zähler um 1 erhöht und die Progressbar um 1 erweitert
    if (questionCount < questions[0][topic].length - 1) {
        updateProgressBar();
        questionCount++;
        removeBackground();
        init();
    } else if (questionCount == questions[0][topic].length - 1) { // letzte Seite wird aufgerufen für das Ergebnis
        updateProgressBar();
        CompletionPage();
        hideNavigationArrows();
    }
    answerLimit = 0; // Das Limit der Antworten wird wieder resettet auf 0 für die nächste Frage
    showNavigationArrows();
}

function CompletionPage() {
   return document.getElementById('content-question').innerHTML = /*html*/`
    <div class = "brainresult"><img src="./img/brain result.png" alt="">
    <h3>COMPLETE</h3>
    <h3>HTML QUIZ</h3>
    <span class="score">YOUR SCORE: ${rightAnswerCount}/4</span>
    </div>
    <button class="share-button" onclick="showPopup()">SHARE</button>
    <a href="./index.html"><button class="button-start-position" id="back-to-start">Back to Start</button></a>
    `;
}

function removeBackground() { //bei allen 4 Fragen werden die Hintergründe entfernt
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`question-card${i}`).classList.remove('rightAnswer');
        document.getElementById(`question-card${i}`).classList.remove('wrongAnswer');
    }
}

function updateProgressBar() {
    let percentage = (questionCount + 1) / questions[0][topic].length;
    percentage = percentage * 100;
    document.getElementById('progress').style.width = `${percentage}%`; // Progressbar-Breite
}

function hideNavigationArrows() {
    document.getElementById('arrow-right').classList.add('hide');
}

function showNavigationArrows() {
    document.getElementById('arrow-right').disabled = true;
}

function showQuestionCards() { // Anzeigen der Quistion-Cards
    document.getElementById('content-question').innerHTML = /*html*/ `
    <h2 id="question"></h2>
                    <div class="question-card" id="question-card1" onclick="checkAnswer(1)">
                        <div class="letter">A</div>
                        <span id="answer1"></span>
                    </div>
                    <div class="question-card" id="question-card2" onclick="checkAnswer(2)">
                        <div class="letter">B</div>
                        <span id="answer2"></span>
                    </div>
                    <div class="question-card" id="question-card3" onclick="checkAnswer(3)">
                        <div class="letter">C</div>
                        <span id="answer3"></span>
                    </div>
                    <div class="question-card" id="question-card4" onclick="checkAnswer(4)">
                        <div class="letter">D</div>
                        <span id="answer4"></span>
                    </div>
                    <div id="questionCount"></div>
    `;
    init();
}

function showQuestion() { // Die Fragen werden in den Question-Cards hinzugefügt und unterhalb die Pfeile ergänzt für die Navigation
    if (document.getElementById('question')) {
        let currentQuestion = questions[0][topic][questionCount]['question'];
        document.getElementById('question').innerHTML = `${currentQuestion}`;
        for (let i = 1; i < questions[0][topic].length + 1; i++) {
            document.getElementById(`answer${i}`).innerHTML = /* html */ `<p>${questions[0][topic][questionCount][`answer_${i}`]}</p>`;
        }
        document.getElementById('nav-bottom').innerHTML = /* html */` 
            <div class="nav-bottom-placeholder"></div> 
            <div class="nav-bottom-container">
                <a>
                <button class="arrow-icon" id="arrow-right" onclick="navigateQuestionsForward()" disabled><img
                src="./img/chevron-right-black.svg" id="arrow-img"></button>
                </a>
            </div>
            `;
    }
}

function ShowQuestionNumber() { // Anzeige der Fragennummer
    let ShowQuestionNumber = document.getElementById('questionCount');
    if (ShowQuestionNumber) {
        ShowQuestionNumber.innerHTML = `Frage ${questionCount + 1} von ${questions[0][topic].length}`;
    }
}

function checkAnswer(chosenAnswer) {
    answerLimit++; // Beim Anwählen der Frage wird das Limit von 1 erreicht und keine weitere ist anklickbar

    if (answerLimit === 1) {
        let rightAnswer = questions[0][topic][questionCount]['right_answer'];
        if (chosenAnswer === rightAnswer) { // stimmt die Antwort des Benutzers mit der richtigen Antwort überein
            document.getElementById(`question-card${chosenAnswer}`).classList.add('rightAnswer');
            AUDIO_SUCCESS.play();
            rightAnswerCount++; // Der Zähler für die richtige Antwort wird um 1 erhöht
            enableNavigationArrows();
        } else {
            document.getElementById(`question-card${chosenAnswer}`).classList.add('wrongAnswer'); // bei einer falschen Antwort, wird sowohl die falsche als auch die richtige markiert
            document.getElementById(`question-card${rightAnswer}`).classList.add('rightAnswer');
            AUDIO_FAIL.play();
            enableNavigationArrows();

        }
    }
}

function enableNavigationArrows() {
    document.getElementById('arrow-right').disabled = false;
    document.getElementById('arrow-right').style = "background-color: #9db1e786";
    document.getElementById('arrow-img').style.cursor = "pointer";
}

function showPopup() {
    document.getElementById('popup-background').style = "";
    document.getElementById('input').value = `https://testlink.de/?id=testid&myresult=${rightAnswerCount}/${questionCount+1}`;
}

function closePopup() {
    document.getElementById('popup-background').style = "display: none";
    document.body.style.backgroundColor = "";
}

function notClose(event) {
    event.stopPropagation();
}