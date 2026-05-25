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

const questionBox = document.getElementById("question");
const answersBox = document.getElementById("answers");

// show question
function showQuestion() {

    answersBox.innerHTML = "";

    let current = questions[currentIndex];

    questionBox.textContent = current.question;

    current.answers.forEach(answer => {

        const btn = document.createElement("button");
        btn.textContent = answer;

        btn.addEventListener("click", () => {
            handleAnswer(answer);
        });

        answersBox.appendChild(btn);
    });
}

// handle click
function handleAnswer(selected) {

    let correct = questions[currentIndex].correct;

    if (selected === correct) {
        score++;
    }

    currentIndex++;

    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// final score
function showResult() {
    questionBox.textContent = `Quiz finished! You scored ${score} / ${questions.length}`;
    answersBox.innerHTML = "";
}

// start quiz
showQuestion();