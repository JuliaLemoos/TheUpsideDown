const questions = [
    {
        question: "Qual o nome da cidade onde se passa Stranger Things?",
        answers: [
            { idResposta: 1, idPergunta: 1, textoResposta: "Hawkins", correct: true },
            { idResposta: 2, idPergunta: 1, textoResposta: "Springfield", correct: false },
            { idResposta: 3, idPergunta: 1, textoResposta: "Riverdale", correct: false },
            { idResposta: 4, idPergunta: 1, textoResposta: "Las Vegas", correct: false },
        ],
    },
    {
        question: "Qual jogo os amigos costumam jogar juntos?",
        answers: [
            { idResposta: 4, idPergunta: 2, textoResposta: "Monopoly", correct: false },
            { idResposta: 5, idPergunta: 2, textoResposta: "Xadrez", correct: false },
            { idResposta: 6, idPergunta: 2, textoResposta: "Dungeons & Dragons", correct: true },
            { idResposta: 7, idPergunta: 2, textoResposta: "Uno", correct: false },
        ],
    },
    {
        question: "Qual é o nome do mundo paralelo da série?",
        answers: [
            { idResposta: 8, idPergunta: 3, textoResposta: "Mundo Invertido", correct: true },
            { idResposta: 9, idPergunta: 3, textoResposta: "Submundo", correct: false },
            { idResposta: 10, idPergunta: 3, textoResposta: "Dimensão Sombria", correct: false },
            { idResposta: 11, idPergunta: 3, textoResposta: "Vale das Sombras", correct: false },
        ],
    },
    {
        question: "Qual personagem possui poderes telecinéticos?",
        answers: [
            { idResposta: 12, idPergunta: 4, textoResposta: "Max", correct: false },
            { idResposta: 13, idPergunta: 4, textoResposta: "Nancy", correct: false },
            { idResposta: 14, idPergunta: 4, textoResposta: "Eleven", correct: true },
            { idResposta: 15, idPergunta: 4, textoResposta: "Robin", correct: false },
        ],
    },
    {
        question: "Quem desaparece no início da primeira temporada?",
        answers: [
            { idResposta: 16, idPergunta: 5, textoResposta: "Dustim", correct: false },
            { idResposta: 17, idPergunta: 5, textoResposta: "Mike", correct: false },
            { idResposta: 18, idPergunta: 5, textoResposta: "Lucas", correct: false },
            { idResposta: 19, idPergunta: 5, textoResposta: "Will", correct: true },
        ],
    },
    {
        question: "Qual é o nome do monstro da primeira temporada?",
        answers: [
            { idResposta: 20, idPergunta: 6, textoResposta: "Vecna", correct: false },
            { idResposta: 21, idPergunta: 6, textoResposta: "Demogorgon", correct: true },
            { idResposta: 22, idPergunta: 6, textoResposta: "Mind Flayer", correct: false },
            { idResposta: 23, idPergunta: 6, textoResposta: "Shadow", correct: false },
        ],
    },
    {
        question: "Qual comida Eleven ama?",
        answers: [
            { idResposta: 24, idPergunta: 7, textoResposta: "Pizza", correct: false },
            { idResposta: 25, idPergunta: 7, textoResposta: "Hambúrguer", correct: false },
            { idResposta: 26, idPergunta: 7, textoResposta: "Waffles", correct: true },
            { idResposta: 27, idPergunta: 7, textoResposta: "Sorvete", correct: false },
        ],
    },
    {
        question: "Quem é o chefe de polícia de Hawkins que ajudou a encontrar Will?",
        answers: [
            { idResposta: 28, idPergunta: 8, textoResposta: "Hopper", correct: true },
            { idResposta: 29, idPergunta: 8, textoResposta: "Steve", correct: false },
            { idResposta: 30, idPergunta: 8, textoResposta: "Jonathan", correct: false },
            { idResposta: 31, idPergunta: 8, textoResposta: "Murray", correct: false },
        ],
    },
    {
        question: "Quais personagens trabalham na sorveteria Scoops Ahoy?",
        answers: [
            { idResposta: 32, idPergunta: 9, textoResposta: "Nancy e Jonathan", correct: false },
            { idResposta: 33, idPergunta: 9, textoResposta: "Steve e Robin", correct: true },
            { idResposta: 34, idPergunta: 9, textoResposta: "Dustin e Lucas", correct: false },
            { idResposta: 35, idPergunta: 9, textoResposta: "Mike e Max", correct: false },
        ],
    },
    {
        question: "Quem é o principal vilão da quarta temporada?",
        answers: [
            { idResposta: 36, idPergunta: 10, textoResposta: "Demogorgon", correct: false },
            { idResposta: 37, idPergunta: 10, textoResposta: "Mind Flayer", correct: false },
            { idResposta: 38, idPergunta: 10, textoResposta: "Vecna", correct: true },
            { idResposta: 39, idPergunta: 10, textoResposta: "Billy", correct: false },
        ],
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.textoResposta;
        button.dataset.idResposta = answer.idResposta;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(e) {
    answers = questions[currentQuestionIndex].answers;
    const correctAnswer = answers.filter((answer) => answer.correct == true)[0];

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.idResposta == correctAnswer.idResposta;
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Jogar de novo";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();