const shortVersionBtn = document.getElementById("short-version-btn");
const fullVersionBtn = document.getElementById("full-version-btn");
const startBtns = document.querySelectorAll("#start-btns-container button");
const quizMainArea = document.getElementsByTagName("main")[0];
console.log(quizMainArea);
const quizGreeting = document.getElementById("quiz-greeting");
//const questionArea = document.getElementById("question-area");
const questionArea = document.createElement("div");
questionArea.setAttribute("id", "question-area");
const resultsArea = document.createElement("div");
resultsArea.setAttribute("id", "results-area");
//const resultsArea = document.getElementById("results-area");

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
// Function to randomly shuffle order of array:
const randomlyShuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
let usedQuestionsArray;

// Function to set the number of questions in game, depending on what user selects:
// Call in EL that is applied to each of the start buttons, located towards end of this document.
let questionsInGame;
const getNumOfQuestions = (btn) => {
  btn.id === "play-short-version-btn"
    ? (questionsInGame = 2) // EVENTUALLY CHANGE TO 10
    : (questionsInGame = allQuestionsArray.length);
  console.log(questionsInGame);
};

// Init variable that tallies questions answered. Should be incremented by one every time a question is answered. Init at -1 so that index 0 of usedQuestionsArray is called on the first question, and so forth. Aligns w/ zero-indexing of arrays & done to avoid confusion about this.
let questionIndex = -1;

// Init score:
let score = 0;

// Function to populate questionArea with a question:
const populateQuestionArea = () => {
  questionArea.innerHTML +=
    "<div id='progress'>" +
    (questionIndex + 1) +
    " / " +
    usedQuestionsArray.length +
    "</div>" +
    "<div id='question'><header id='question-header'>" +
    usedQuestionsArray[questionIndex].question +
    "</header><div id='options-container'></div></div>";
};

// For every option of a given question, create a button:
// Param should be a question. In toNext(), usedQuestionsArray[questionIndex] will be passed into it when it's called.
const displayOptions = (currentQuestion) => {
  //const currentQuestionArea = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");

  // Create button elem for each question option:
  let questionOptions = Object.entries(currentQuestion.options[0]);
  questionOptions = randomlyShuffleArray(questionOptions);
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

// Get different feedback messages for end of quiz:
let feedbackComment;
const getFeedbackComment = () => {
  let percentage = score / usedQuestionsArray.length;
  if (percentage === 1) {
    feedbackComment = "Hope you feel proud of yourself.";
  } else if (percentage >= 0.9) {
    feedbackComment = "Nice job!";
  } else if (percentage >= 0.8) {
    feedbackComment = "Not bad!";
  } else if (percentage >= 0.7) {
    feedbackComment = "Not too bad...";
  } else if (percentage >= 0.6) {
    feedbackComment = "An average performance...";
  } else if (percentage >= 0.2) {
    feedbackComment = "A mediocre performance...";
  } else {
    feedbackComment = "You should go read an encyclopedia.";
  }
  return feedbackComment;
};

const toNext = () => {
  // Increment questionIndex by one:
  questionIndex++;
  // IF questionIndex is zero (if on first question), delete the quiz greeting from the DOM, display info for first question.
  // ELSE IF: handle last-question scenario. questionArea is removed from DOM, info is added to resultsArea.
  // ELSE: Move from one question to another. Current question is removed from DOM, info for next question is displayed.
  if (questionIndex === 0) {
    // Remove greeting from DOM:
    quizMainArea.removeChild(quizMainArea.children[0]);
    // Append question area to DOM:
    quizMainArea.appendChild(questionArea);
    populateQuestionArea();
    // Display answer options:
    displayOptions(usedQuestionsArray[questionIndex]);
  } else if (questionIndex === usedQuestionsArray.length) {
    // Remove question area from DOM:
    quizMainArea.removeChild(quizMainArea.children[0]);
    // Append results area to DOM:
    quizMainArea.appendChild(resultsArea);
    // Get feedback comment:
    getFeedbackComment();
    // Add info to resultsArea:
    resultsArea.innerHTML +=
      "<h1 id='results-header'>Out of " +
      usedQuestionsArray.length +
      " questions, you answered " +
      score +
      " correctly." +
      "</h1><p>" +
      feedbackComment +
      "</p><div id='end-of-quiz-options'>" +
      "<a href='./index.html' title='Return to Homepage'><button id='back-to-homepage'>Return to Homepage</button></a>" +
      "<button id='play-again-btn' title='Play Again!' onclick='window.location.reload()'>Play Again!</button>" +
      "</div>";
  } else {
    // Delete current question's progress indicator from DOM:
    questionArea.removeChild(questionArea.firstChild);
    // Delete current question from DOM:
    questionArea.removeChild(questionArea.firstChild);
    populateQuestionArea();
    // Display answer options:
    displayOptions(usedQuestionsArray[questionIndex]);
  }

  // Add EL on click of each option that will call toNext() to display next question:
  // Must be called here inside toNext() as the displayed options vary with each new question.
  const displayedOptions = document.querySelectorAll(
    "#options-container button"
  );
  for (let option of displayedOptions) {
    option.addEventListener("click", function () {
      // If option is right answer, add one to score:
      if (option.id === "rightAnswer") {
        score++;
      }
      console.log(score);
      toNext();
    });
  }
};

// Add EL for click of start button:
for (let btn of startBtns) {
  btn.addEventListener("click", function () {
    getNumOfQuestions(btn);
    usedQuestionsArray = randomlyShuffleArray(allQuestionsArray);
    toNext();
  });
}
