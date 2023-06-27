let questions = [
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
    },
];

let questionCount = 0;
let answerLimit = 0;
let rightAnswerCount = 0;

function init() {
    showQuestion();
    ShowQuestionNumber();
};

function navigateQuestionsForward() {

    if (questionCount < 3) {
        questionCount++;
        document.getElementById('progress1').classList.add(`progress${questionCount+1}`);
        removeBackground();
        init();
    }

    else if (questionCount == 3) {
        document.getElementById('content-question').innerHTML = /*html*/`
            <h1>Du hast ${rightAnswerCount} von 4 Fragen richtig beantwortet.</h1>
            `;
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
    let currentQuestion = questions[questionCount]['question'];

    document.getElementById('question').innerHTML = `${currentQuestion}`;

    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer${i}`).innerHTML = /* html */ `<p onclick="checkAnswer(${i})">${questions[questionCount][`answer_${i}`]}</p>`;
    }
};

function ShowQuestionNumber() {
    let ShowQuestionNumber = document.getElementById('question1');
    ShowQuestionNumber.innerHTML = `Frage ${questionCount + 1} von ${questions.length}`;
};

function checkAnswer(i) {
    answerLimit++;

    if (answerLimit === 1) {

        let chosedAnswer = i;
        let rightAnswer = questions[questionCount]['right_answer'];

        if (chosedAnswer === rightAnswer) {
            document.getElementById(`question-card${i}`).classList.add('rightAnswer');
            rightAnswerCount++;
        }

        else {
            document.getElementById(`question-card${i}`).classList.add('wrongAnswer');
        }

    }
}