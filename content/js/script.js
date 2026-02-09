const startBox = document.getElementById("startBox");
const aBox = document.getElementById("aBox");
const qBox = document.getElementById("qBox");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

let btn1Answer;
let btn2Answer;
let btn3Answer;
let btn4Answer;

const qTitle = document.getElementById("qTitle");
const qText = document.getElementById("qText");

const resultScore = document.getElementById("resultScore");

let currentQ = 0;
let playerScore = 0;

const shuffleButtons = [0, 1, 2, 3];

const questionsArr = [
  "Which HTML tag is used to create a paragraph?",
  "How do you make an input-field for users to type text?",
  "How do you link an external CSS file in HTML?",
  "Which CSS property changes the size of text?",
  "Which property is used to change the background color in CSS?",
  "In JavaScript, how do you write 'Hello World' to the console?",
  "Which tag is used to display an image on a webpage?",
  "How do you create a comment in HTML?",
  "Which tag is used to create a clickable link in HTML?",
  "What is the correct way to write an if statement in JavaScript?",
];

const choicesArr = [
  ["<div>", "<p>", "<span>", "<h1>"],
  ['<input type="text">', "<textarea>", "potato", "<form>"],
  [
    '<link rel="stylesheet" href="style.css">',
    '<script src="style.css">',
    '<css src="style.css">',
    '<style href="style.css">',
  ],
  ["font-size", "text-size", "font-style", "text-style"],
  ["color", "background-color", "bgcolor", "font-color"],
  [
    'console.print("Hello World")',
    'console.log("Hello World")',
    'print.console("Hello World")',
    'echo("Hello World")',
  ],
  ["<img>", "<image>", "<picture>", "<figure>"],
  [
    "// This is a comment",
    "<!-- This is a comment -->",
    "/* This is a comment */",
    "# This is a comment",
  ],
  ["<link>", "<a>", "<href>", "<button>"],
  ["if i equals 5 then", "if (i == 5) { }", "if i == 5:", "if i = 5 { }"],
];

const correctAnswers = [1, 0, 0, 0, 1, 1, 0, 1, 1, 1];

const playerAnswers = new Array();

/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);

btn1.addEventListener("click", () => collectAnswer(btn1Answer));
btn2.addEventListener("click", () => collectAnswer(btn2Answer));
btn3.addEventListener("click", () => collectAnswer(btn3Answer));
btn4.addEventListener("click", () => collectAnswer(btn4Answer));

function startQuiz() {
  startBox.style.display = "none";
  aBox.style.display = "grid";
  changeQ();
}

function changeQ() {
  qTitle.textContent = `Question ${currentQ + 1}: `;
  qText.textContent = questionsArr[currentQ];

  shuffleButtons.sort(() => Math.random() - 0.5);

  btn1.textContent = choicesArr[currentQ][shuffleButtons[0]];
  btn1Answer = shuffleButtons[0];

  btn2.textContent = choicesArr[currentQ][shuffleButtons[1]];
  btn2Answer = shuffleButtons[1];

  btn3.textContent = choicesArr[currentQ][shuffleButtons[2]];
  btn3Answer = shuffleButtons[2];

  btn4.textContent = choicesArr[currentQ][shuffleButtons[3]];
  btn4Answer = shuffleButtons[3];
}

function collectAnswer(chosenAnswer) {
  playerAnswers.push(chosenAnswer);

  currentQ++;
  if (currentQ < questionsArr.length) {
    changeQ();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  qBox.style.display = "none";
  aBox.style.display = "none";

  endBox.style.display = "flex";

  for (let i = 0; i < playerAnswers.length; i++) {
    if (playerAnswers[i] === correctAnswers[i]) {
      playerScore++;
    }
  }

  resultScore.textContent = `${playerScore} / ${questionsArr.length}`;
}

function restartQuiz() {
  currentQ = 0;
  playerScore = 0;
  playerAnswers.length = 0;

  qBox.style.display = "flex";
  aBox.style.display = "grid";

  endBox.style.display = "none";
  changeQ();
}
