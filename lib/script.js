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
  choice.addEventListener("click", () => setTimeout(nextQuestion, 200));
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

choices.forEach((choice) => {
  choice.addEventListener("click", calculateScore);
});

function calculateScore(e) {
  if (e.target.classList.value === "choices correct") {
    score += 1;
    if (score === 0) {
      finalScore.innerText = `You knew ${score}/10 cocktails!`;
      result.innerText =
        "Uhhhh....you must be a Bud Light kinda guy/girl!";
    } else if (score === 1) {
      finalScore.innerText = `You knew ${score}/10 cocktails!`;
      result.innerText =
        "Uhhhh....you must be a Bud Light kinda guy/girl!";
    } else if (score === 2) {
      finalScore.innerText = `You knew ${score}/10 cocktails!`;
      result.innerText =
        "Uhhhh....you must be a Bud Light kinda guy/girl!";
    } else if (score === 3) {
      finalScore.innerText = `You knew ${score}/10 cocktails!`;
      result.innerText =
        "Uhhhh....you must be a Bud Light kinda guy/girl!";
    } else if (score === 4) {
      finalScore.innerText = `You knew ${score}/10 cocktails!`;
      result.innerText =
        "Stop ordering Long Island Iced Teas and broaden your horizons...";
    } else if (score === 5) {
      finalScore.innerText = `You knew ${score}/10 cocktails!`;
      result.innerText =
        "Stop ordering Long Island Iced Teas and broaden your horizons...";
    } else if (score === 6) {
      finalScore.innerText = `You knew ${score}/10 cocktails!`;
      result.innerText =
        "It's 5'oclock somewhere, you've earned yourself a drink!";
    } else if (score === 7) {
      finalScore.innerText = `You knew ${score}/10 cocktails!`;
      result.innerText =
        "It's 5'oclock somewhere, you've earned yourself a drink!";
    } else if (score === 8) {
      finalScore.innerText = `You knew ${score}/10 cocktails!`;
      result.innerText =
      "It's 5'oclock somewhere, you've earned yourself a drink!";
    } else if (score === 9) {
      finalScore.innerText = `You knew ${score}/10 cocktails!`;
      result.innerText =
      "It's 5'oclock somewhere, you've earned yourself a drink!";
    } else if (score === 10) {
      finalScore.innerText = `You knew ${score}/10 cocktails!`;
      result.innerText =
        "Damn you're good! You must be an alcoholic....First round's on you!";
    }
  }
}

restart.addEventListener("click", () => {
  score = 0;
  currentQuestion = 0;
  previousQuestion = 0;
  endGame.style.display = "none";
  question[currentQuestion].style.display = "block";

  choices.forEach((option) => {
    choice.style.backgroundColor = "";
  });
});

incorrectAnswers.forEach((incorrect) => {
  incorrect.addEventListener("click", () => {
    incorrect.style.backgroundColor = "red";
  });
});

correctAnswers.forEach((correct) => {
  correct.addEventListener("click", () => {
    correct.style.backgroundColor = "green";
  });
});
