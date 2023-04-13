const startQuizBtn = document.getElementById("start-quiz-btn");
const quizGreeting = document.getElementById("quiz-greeting");
const questionArea = document.getElementById("question-area");

const allQuestionsArray = [
  {
    question: "True or False: The population of Canada is over 50 million.",
    options: [{ wrongAnswer: "true", rightAnswer: "false" }],
  },
  {
    question: "Which is a border country of Suriname?",
    options: [
      {
        wrongAnswer1: "Namibia",
        wrongAnswer2: "Zambia",
        wrongAnswer3: "Ghana",
        rightAnswer: "Brazil",
      },
    ],
  },
  {
    question: "What side of the road does India drive on?",
    options: [
      {
        wrongAnswer: "Right",
        rightAnswer: "Left",
      },
    ],
  },
];

// Put random questions into array, then use this array to populate question area:
let usedQuestionsArray = [];
// Randomly shuffle order of allQuestionsArray:
for (let i = allQuestionsArray.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [allQuestionsArray[i], allQuestionsArray[j]] = [
    allQuestionsArray[j],
    allQuestionsArray[i],
  ];
}
console.log(allQuestionsArray);
// Eventually, push only 10 questions to usedQuestionsArray
for (
  let i = 0;
  i < allQuestionsArray.length - (allQuestionsArray.length - 2);
  i++
) {
  usedQuestionsArray.push(allQuestionsArray[i]);
}
console.log(usedQuestionsArray);

// Init variable that tallies questions answered. Should be incremented by one every time a question is answered.
let questionIndex = 0;

// For every option of a given question, create a button:
// Param should be a question. In toNext(), usedQuestionsArray[questionIndex] will be passed into it when it's called.
const displayOptions = (currentQuestion) => {
  const currentQuestionArea = document.getElementById("question");
  // Create button elem for each question option:
  let questionOptions = Object.entries(currentQuestion.options[0]);
  console.log(questionOptions);
  // For every entry of questionEntries, create button with entry info:
  for (let option of questionOptions) {
    let optionButton = document.createElement("button");
    optionButton.setAttribute("id", option[0]);
    optionButton.innerText += option[1];
    // append elem to question (inside question area):
    currentQuestionArea.appendChild(optionButton);
  }
};
// Call in toNext() after populating questionArea innerHTML
//displayOptions();

const toNext = () => {
  if (questionIndex === 0) {
    // Hide greeting upon clicking start quiz btn:
    quizGreeting.style.display = "none";
  } else {
    // Hide current question:
    questionArea.removeChild(questionArea.firstChild);
  }
  // Display question area:
  questionArea.style.display = "flex";
  // Display next question:
  questionArea.innerHTML +=
    "<div id='question'><header id='question-header'>" +
    usedQuestionsArray[questionIndex].question +
    "</header></div>";
  displayOptions(usedQuestionsArray[questionIndex]);
};

// Add EL for click of start button:
startQuizBtn.addEventListener("click", function () {
  toNext();
});
