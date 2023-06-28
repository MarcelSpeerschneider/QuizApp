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
                "answer_1": "&lt;iframe&gt;, &lt;frame&gt;, and &alt;frameset&gt",
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
                "answer_1": "JavaScript ist eine Skriptsprache, die speziell für das Web entwickelt wurde.",
                "answer_2": "JavaScript ist eine objektorientierte Programmiersprache.",
                "answer_3": "JavaScript ist eine sehr benutzerfreundliche Programmiersprache.",
                "answer_4": "JavaScript ist eine Programmiersprache, die für das Hinterlegen von Programmierlogik und dynamisches Verhalten der Webseiten und Anwendungen verwendet wird.",
                "right_answer": 4
            },
            {
                "question": "Wie bindet man eine Website in eine Website ein?",
                "answer_1": "&lt;iframe&gt;, &lt;frame&gt;, and &alt;frameset&gt",
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


        "java": [
            {
                "question": "Wer hat JAVA erfunden?",
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
                "answer_1": "&alt;iframe&gt;, &lt;frame&gt;, and &alt;frameset&gt",
                "answer_2": "&alt;iframe&gt;",
                "answer_3": "&lt;frame&gt;",
                "answer_4": "&alt;frameset&gt",
                "right_answer": 3
            },
            {
                "question": "Wie definitiert man in Javascript eine Variable?",
                "answer_1": "let 100 = rate;",
                "answer_2": "100 = let rate;",
                "answer_3": "rate = 100",
                "answer_4": "let rate = 100;",
                "right_answer": 4
            }

        ]
    }

];

let questionCount = 0;
let answerLimit = 0;
let rightAnswerCount = 0;
let topic = 'html';

function init() {
    showQuestion();
    ShowQuestionNumber();
};

function getTopic(i) {
    topic = i;
    init();
}

function navigateQuestionsForward() {

    if (questionCount < 3) {
        questionCount++;
        document.getElementById('progress1').classList.add(`progress${questionCount + 1}`);
        removeBackground();
        init();
    }

    else if (questionCount == 3) {
        document.getElementById('content-question').innerHTML = /*html*/`
            <div class = "brainresult"><img src="./img/brain result.png" alt="">
            <h3>COMPLETE</h3>
            <h3>HTML QUIZ</h3>
            <span class="score">YOUR SCORE: ${rightAnswerCount}/4</span>
            </div>
            <button class="share-button">SHARE</button>
            
            `;

            document.getElementById ('arrow-left').classList.add('hide');
            document.getElementById ('arrow-right').classList.add('hide');
    }
    answerLimit = 0;
};

function removeBackground() {

    for (let i = 1; i <= 4; i++) {
        document.getElementById(`question-card${i}`).classList.remove('rightAnswer');
        document.getElementById(`question-card${i}`).classList.remove('wrongAnswer');
    };

};


function navigateQuestionsBackward() {
    if (questionCount > 0) {
        questionCount--;
        init();
    }

    else {
        questionCount = 0;
        init();
    }

    answerLimit = 0;
};

function showQuestion() {
    let currentQuestion = questions[0][topic][questionCount]['question'];

    document.getElementById('question').innerHTML = `${currentQuestion}`;

    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer${i}`).innerHTML = /* html */ `<p>${questions[0][topic][questionCount][`answer_${i}`]}</p>`;
    }
};

function ShowQuestionNumber() {
    let ShowQuestionNumber = document.getElementById('question1');
    ShowQuestionNumber.innerHTML = `Frage ${questionCount + 1} von ${questions[0][topic].length}`;
};

function checkAnswer(i) {
    answerLimit++;

    if (answerLimit === 1) {

        let chosedAnswer = i;
        let rightAnswer = questions[0][topic][questionCount]['right_answer'];

        if (chosedAnswer === rightAnswer) {
            document.getElementById(`question-card${i}`).classList.add('rightAnswer');
            rightAnswerCount++;
        }

        else {
            document.getElementById(`question-card${i}`).classList.add('wrongAnswer');
        }

    }
}