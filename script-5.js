const questions = [
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Venus", "Jupiter"],
        correct: "Mars"
    },
    {
        question: "What is the capital of Japan?",
        answers: ["Tokyo", "Seoul", "Bangkok", "Beijing"],
        correct: "Tokyo"
    },
    {
        question: "Who wrote Romeo and Juliet?",
        answers: ["William Shakespeare", "Victor Hugo", "Charles Dickens", "J.K. Rowling"],
        correct: "William Shakespeare"
    },
    {
        question: "Which animal is the largest mammal?",
        answers: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
        correct: "Blue Whale"
    },
    {
        question: "How many continents are there on Earth?",
        answers: ["5", "6", "7", "8"],
        correct: "7"
    }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");

// ⭐ NEW: progress text
const progressEl = document.createElement("p");
progressEl.style.marginBottom = "10px";
progressEl.style.fontWeight = "bold";
questionEl.before(progressEl);

// show question
function showQuestion() {

    answersEl.innerHTML = "";

    const current = questions[currentIndex];

    // ⭐ progress feature
    progressEl.textContent = `Question ${currentIndex + 1} / ${questions.length}`;

    questionEl.textContent = current.question;

    current.answers.forEach(answer => {

        const btn = document.createElement("button");
        btn.textContent = answer;

        btn.addEventListener("click", () => checkAnswer(btn, answer));

        answersEl.appendChild(btn);
    });
}

// check answer + feedback
function checkAnswer(button, selectedAnswer) {

    const correctAnswer = questions[currentIndex].correct;

    const allButtons = answersEl.querySelectorAll("button");
    allButtons.forEach(btn => btn.disabled = true);

    let feedback = document.createElement("p");
    feedback.style.marginTop = "10px";
    feedback.style.fontWeight = "bold";

    if (selectedAnswer === correctAnswer) {
        button.style.background = "#9aeabc";
        feedback.textContent = "Correct ✅";
        score++;
    } else {
        button.style.background = "#ff9393";
        feedback.textContent = "Wrong ❌";
    }

    // highlight correct answer
    allButtons.forEach(btn => {
        if (btn.textContent === correctAnswer) {
            btn.style.background = "#9aeabc";
        }
    });

    answersEl.appendChild(feedback);

    // next question delay
    setTimeout(() => {
        currentIndex++;
        if (currentIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

// final result + restart button
function showResult() {

    answersEl.innerHTML = "";

    progressEl.textContent = "";

    questionEl.textContent = `Quiz Finished!`;

    const result = document.createElement("h2");
    result.textContent = `Your Score: ${score} / ${questions.length}`;

    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart Quiz";
    restartBtn.style.marginTop = "20px";

    restartBtn.addEventListener("click", () => {
        currentIndex = 0;
        score = 0;
        showQuestion();
    });

    answersEl.appendChild(result);
    answersEl.appendChild(restartBtn);
}

// start
showQuestion();