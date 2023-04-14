const shortVersionBtn = document.getElementById("short-version-btn");
const fullVersionBtn = document.getElementById("full-version-btn");
const startBtns = document.querySelectorAll("#start-btns-container button");
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

// Make this a function to be called inside EL for each start btn at end of doc
let questionsInGame;
const getNumOfQuestions = (btn) => {
  btn.id === "play-short-version-btn"
    ? (questionsInGame = 2) // EVENTUALLY CHANGE TO 10
    : (questionsInGame = allQuestionsArray.length);
  console.log(questionsInGame);
};

// Eventually, push only 10 questions to usedQuestionsArray
// Make this a function to be called inside EL for each start btn at end of doc
const getUsedQuestionsArray = () => {
  for (
    let i = 0;
    i < allQuestionsArray.length - (allQuestionsArray.length - questionsInGame);
    i++
  ) {
    usedQuestionsArray.push(allQuestionsArray[i]);
  }
  console.log(usedQuestionsArray);
};

// Init variable that tallies questions answered. Should be incremented by one every time a question is answered. Init at -1 so that index 0 of usedQuestionsArray is called on the first question, and so forth.
let questionIndex = -1;

// For every option of a given question, create a button:
// Param should be a question. In toNext(), usedQuestionsArray[questionIndex] will be passed into it when it's called.
const displayOptions = (currentQuestion) => {
  //const currentQuestionArea = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");

  // Create button elem for each question option:
  let questionOptions = Object.entries(currentQuestion.options[0]);
  console.log(questionOptions);

  // For every entry of questionEntries, create button with entry info:
  for (let option of questionOptions) {
    let optionButton = document.createElement("button");
    let optionRightOrWrong = option[0];
    let optionText = option[1];
    optionButton.setAttribute("id", optionRightOrWrong);
    optionButton.innerText += optionText;
    // Append elem to question (inside question area):
    optionsContainer.appendChild(optionButton);
  }
};

const toNext = () => {
  // Increment questionIndex by one:
  questionIndex++;
  // If questionIndex is zero, hide the quiz greeting:
  if (questionIndex === 0) {
    // Hide greeting upon clicking start quiz btn:
    quizGreeting.style.display = "none";
    // Else, remove current question from the DOM:
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
    "</header><div id='options-container'></div></div>";
  // Display answer options of next question:
  displayOptions(usedQuestionsArray[questionIndex]);

  // Handle last-question scenario:

  // Add EL on click of each option that will call toNext():
  const displayedOptions = document.querySelectorAll(
    "#options-container button"
  );
  for (let option of displayedOptions) {
    option.addEventListener("click", function () {
      toNext();
    });
  }
};

// Add EL for click of start button:
for (let btn of startBtns) {
  btn.addEventListener("click", function () {
    getNumOfQuestions(btn);
    getUsedQuestionsArray();
    toNext();
  });
}
