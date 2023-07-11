let start = document.querySelector(".start");
let intro = document.querySelector(".intro");
let endGame = document.querySelector(".endGame");
let result = document.querySelector(".result");
let finalScore = document.querySelector(".finalScore");
let restart = document.querySelector(".restart");

let incorrectAnswers = document.querySelectorAll(".incorrect");
let correctAnswers = document.querySelectorAll(".correct");

let question = document.querySelectorAll(".question");
let choices = document.querySelectorAll(".choices");

let currentQuestion = 0;
let previousQuestion = 0;

let score = 0;

start.addEventListener("click", startGame);
function startGame() {
  question[currentQuestion].style.display = "block";
  intro.style.display = "none";
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => setTimeout(nextQuestion, 500));
});

function nextQuestion() {
  previousQuestion = currentQuestion;
  currentQuestion++;
  if (currentQuestion === question.length) {
    question[previousQuestion].style.display = "none";
    endGame.style.display = "block";
  } else {
    question[previousQuestion].style.display = "none";
    question[currentQuestion].style.display = "block";
  }
}