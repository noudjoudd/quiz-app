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

// show question
function showQuestion() {

    answersEl.innerHTML = "";

    const current = questions[currentIndex];

    questionEl.textContent = current.question;

    current.answers.forEach(answer => {

        const btn = document.createElement("button");
        btn.textContent = answer;

        btn.addEventListener("click", () => checkAnswer(btn, answer));

        answersEl.appendChild(btn);
    });
}

// check answer + feedback (STEP 3 requirement)
function checkAnswer(button, selectedAnswer) {

    const correctAnswer = questions[currentIndex].correct;

    // disable all buttons after click
    const allButtons = answersEl.querySelectorAll("button");
    allButtons.forEach(btn => btn.disabled = true);

    // correct / wrong feedback
    if (selectedAnswer === correctAnswer) {
        button.style.background = "#9aeabc";
        score++;
    } else {
        button.style.background = "#ff9393";
    }

    // also highlight correct answer
    allButtons.forEach(btn => {
        if (btn.textContent === correctAnswer) {
            btn.style.background = "#9aeabc";
        }
    });

    // move to next question after short delay
    setTimeout(() => {
        currentIndex++;

        if (currentIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 800);
}

// final result + feedback display
function showResult() {

    answersEl.innerHTML = "";

    questionEl.textContent = `Quiz Finished!`;

    const result = document.createElement("div");
    result.innerHTML = `
        <h2>Your Score: ${score} / ${questions.length}</h2>
        <p>${score === questions.length ? "Perfect! 🎉" : "Good try 👍"}</p>
    `;

    answersEl.appendChild(result);
}

// start quiz
showQuestion();