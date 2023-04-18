const shortVersionBtn = document.getElementById("play-short-version-btn");
const fullVersionBtn = document.getElementById("play-full-version-btn");
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
  {
    question: "What side of the road does Ireland drive on?",
    options: [
      {
        wrongAnswer: "Right",
        rightAnswer: "Left",
      },
    ],
  },
  {
    question: "What side of the road does Spain drive on?",
    options: [
      {
        wrongAnswer: "Left",
        rightAnswer: "Right",
      },
    ],
  },
  {
    question: "True or False: The United States has an official language.",
    options: [
      {
        wrongAnswer: "True",
        rightAnswer: "False",
      },
    ],
  },
  {
    question: "How many official languages are there in Switzerland?",
    options: [
      {
        wrongAnswer1: "2",
        wrongAnswer2: "3",
        wrongAnswer3: "5",
        rightAnswer: "4",
      },
    ],
  },
  {
    question: "What is the capital of South Africa?",
    options: [
      {
        wrongAnswer1: "Bloemfontein",
        wrongAnswer2: "Pretoria",
        wrongAnswer3: "Cape Town",
        rightAnswer: "*all of these*",
      },
    ],
  },
  {
    question:
      "True or False: 'Saint Martin' & 'Sint Maarten' are just two different names for the same country.",
    options: [
      {
        wrongAnswer: "True",
        rightAnswer: "False",
      },
    ],
  },
  {
    question: "Which of the following is NOT a part of the United Kingdom?",
    options: [
      {
        wrongAnswer1: "Northern Ireland",
        wrongAnswer2: "England",
        wrongAnswer3: "Scotland",
        rightAnswer: "Ireland",
      },
    ],
  },
  {
    question: "True or False: Mexico is a part of North America.",
    options: [
      {
        wrongAnswer: "False",
        rightAnswer: "True",
      },
    ],
  },
  {
    question:
      "Which of these countries has an eerily similar flag to that of Indonesia?",
    options: [
      {
        wrongAnswer1: "Zambia",
        wrongAnswer2: "Qatar",
        rightAnswer: "Monaco",
      },
    ],
  },
  {
    question:
      "Which of these countries has an eerily similar flag to that of Japan?",
    options: [
      {
        wrongAnswer1: "Malaysia",
        wrongAnswer2: "Brunei",
        rightAnswer: "Bangladesh",
      },
    ],
  },
  {
    question:
      "Which of these countries has an eerily similar flag to that of Ireland?",
    options: [
      {
        wrongAnswer1: "Moldova",
        wrongAnswer2: "Niue",
        rightAnswer: "Ivory Coast",
      },
    ],
  },
  {
    question:
      "Which of these countries has an eerily similar flag to that of the Netherlands?",
    options: [
      {
        wrongAnswer1: "Hungary",
        wrongAnswer2: "Caribbean Netherlands",
        rightAnswer: "Luxembourg",
      },
    ],
  },
  {
    question:
      "Which of these countries has an eerily similar flag to that of the United States?",
    options: [
      {
        wrongAnswer1: "American Samoa",
        wrongAnswer2: "U.S. Virgin Islands",
        rightAnswer: "Liberia",
      },
    ],
  },
  {
    question:
      "Which of these countries has an eerily similar flag to that of Qatar?",
    options: [
      {
        wrongAnswer1: "Fiji",
        wrongAnswer2: "United Arab Emirates",
        rightAnswer: "Bahrain",
      },
    ],
  },
  {
    question: "True or False: Russian is an official language of Azerbaijan.",
    options: [
      {
        wrongAnswer: "False",
        rightAnswer: "True",
      },
    ],
  },
  {
    question: "True or False: North Korea shares a border with Russia.",
    options: [
      {
        wrongAnswer: "False",
        rightAnswer: "True",
      },
    ],
  },
  {
    question: "True or False: South Korea shares a border with China.",
    options: [
      {
        wrongAnswer: "True",
        rightAnswer: "False",
      },
    ],
  },
  {
    question: "True or False: Arabic is an official language of Turkey.",
    options: [
      {
        wrongAnswer: "True",
        rightAnswer: "False",
      },
    ],
  },
  {
    question:
      "True or False: Vatican City is a part of Italy, not its own, separate country.",
    options: [
      {
        wrongAnswer: "True",
        rightAnswer: "False",
      },
    ],
  },
  {
    question: "True or False: Thailand borders China.",
    options: [
      {
        wrongAnswer: "True",
        rightAnswer: "False",
      },
    ],
  },
  {
    question: "True or False: India's population is over 2 billion.",
    options: [
      {
        wrongAnswer: "True",
        rightAnswer: "False",
      },
    ],
  },
  {
    question: "Which language, besides Turkmen, is spoken in Turkmenistan?",
    options: [
      {
        wrongAnswer1: "Arabic",
        wrongAnswer2: "Turkish",
        rightAnswer: "Russian",
      },
    ],
  },
  {
    question: "What is the capital of Laos?",
    options: [
      {
        wrongAnswer1: "Hong Kong",
        wrongAnswer2: "Hanoi",
        rightAnswer: "Vientiane",
      },
    ],
  },
  {
    question: "What is the currency of Switzerland?",
    options: [
      {
        wrongAnswer: "Euro",
        rightAnswer: "Swiss Franc",
      },
    ],
  },
  {
    question: "What is the currency of the British Virgin Islands?",
    options: [
      {
        wrongAnswer1: "British Pound",
        wrongAnswer2: "Euro",
        rightAnswer: "U.S. Dollar",
      },
    ],
  },
  {
    question: "What of these is the proper name?",
    options: [
      {
        wrongAnswer1: "Democratic Republic of the Congo",
        wrongAnswer2: "Republic of the Congo",
        rightAnswer: "These are two separate countries",
      },
    ],
  },
  {
    question:
      "Which of the following countries does NOT have a bird on its flag?",
    options: [
      {
        wrongAnswer1: "Mexico",
        wrongAnswer2: "Montenegro",
        wrongAnswer3: "American Samoa",
        rightAnswer: "Lebanon",
      },
    ],
  },
  {
    question: "True or False: Malay is the official language of 3 countries.",
    options: [
      {
        wrongAnswer: "False",
        rightAnswer: "True",
      },
    ],
  },
  {
    question: "True or False: Spanish is an official language of Gibraltar.",
    options: [
      {
        wrongAnswer: "True",
        rightAnswer: "False",
      },
    ],
  },
  {
    question: "True or False: There are 2 Guyanas.",
    options: [
      {
        wrongAnswer: "False",
        rightAnswer: "True",
      },
    ],
  },
  {
    question: "True or False: Algeria & Slovakia are in the same time zone.",
    options: [
      {
        wrongAnswer: "False",
        rightAnswer: "True",
      },
    ],
  },
  {
    question: "True or False: France officially has 14 time zones.",
    options: [
      {
        wrongAnswer: "False",
        rightAnswer: "True",
      },
    ],
  },
  {
    question:
      "True or False: German is an official language of a country outside of Europe.",
    options: [
      {
        wrongAnswer: "False",
        rightAnswer: "True",
      },
    ],
  },
  {
    question:
      "In which country would this sentence be best understood: 'I busted me plugga!'?",
    options: [
      {
        wrongAnswer1: "Ireland",
        wrongAnswer2: "Canada",
        rightAnswer: "Australia",
      },
    ],
  },
  {
    question: "Tripoli is a ...",
    options: [
      {
        wrongAnswer: "city in Italy",
        rightAnswer: "city in Libya",
      },
    ],
  },
  {
    question:
      "Which country's flag is most similar to that of the state of Texas?",
    options: [
      {
        wrongAnswer1: "Cuba",
        wrongAnswer2: "Dominican Republic",
        wrongAnswer3: "Puerto Rico",
        rightAnswer: "Chile",
      },
    ],
  },
  {
    question: "In which body of water is Cyprus located?",
    options: [
      {
        wrongAnswer1: "Gulf of Mexico",
        wrongAnswer2: "Pacific Ocean",
        wrongAnswer3: "Aegean Sea",
        rightAnswer: "Mediterranean Sea",
      },
    ],
  },
  {
    question: "The flag of which country contains a celestial body?",
    options: [
      {
        wrongAnswer1: "Lebanon",
        wrongAnswer2: "Lesotho",
        wrongAnswer3: "Serbia",
        rightAnswer: "Maldives",
      },
    ],
  },
  {
    question:
      "The flag of which country is the same as Austria's, just rotated 90 degrees?",
    options: [
      {
        wrongAnswer1: "Singapore",
        wrongAnswer2: "Yemen",
        wrongAnswer3: "Seychelles",
        rightAnswer: "Peru",
      },
    ],
  },
  {
    question: "The flags of which countries are the most similar?",
    options: [
      {
        wrongAnswer1: "Congo & DR Congo",
        wrongAnswer2: "Ukraine & the United States",
        wrongAnswer3: "Turkmenistan & Uzbekistan",
        rightAnswer: "Turkey & Tunisia",
      },
    ],
  },
  {
    question:
      "The flags of which country could most easily be mistaken for the Red Cross?",
    options: [
      {
        wrongAnswer1: "Sweden",
        wrongAnswer2: "St. Kitts & Nevis",
        wrongAnswer3: "Svalbard & Jan Mayen",
        rightAnswer: "Switzerland",
      },
    ],
  },
  {
    question: "What is the currency of Hungary?",
    options: [
      {
        wrongAnswer: "Euro",
        rightAnswer: "Forint",
      },
    ],
  },
];
//fullVersionBtn.innerHTML += " (" + allQuestionsArray.length + " Questions)";

// Put random questions into array, then use this array to populate question area:
// Function to randomly shuffle order of array:
const randomlyShuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
randomlyShuffleArray(allQuestionsArray);

// Function to set the number of questions in game, depending on what user selects:
// Call in EL that is applied to each of the start buttons, located towards end of this document.
let numOfQuestionsInGame;
const getNumOfQuestions = (btn) => {
  btn.id === "play-short-version-btn"
    ? (numOfQuestionsInGame = 10)
    : (numOfQuestionsInGame = 25);
  console.log(numOfQuestionsInGame);
};

let usedQuestionsArray = [];
// Function to get usedQuestionsArray:
const getUsedQuestionsArray = () => {
  for (
    let i = 0;
    i <
    allQuestionsArray.length -
      (allQuestionsArray.length - numOfQuestionsInGame);
    i++
  ) {
    usedQuestionsArray.push(allQuestionsArray[i]);
  }
  console.log(usedQuestionsArray);
  return usedQuestionsArray;
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
const feedbackComment = () => {
  let percentage = score / usedQuestionsArray.length;
  switch (percentage) {
    case percentage === 1:
      return "Hope you feel proud of yourself.";
    case percentage >= 0.9:
      return "Nice job!";
    case percentage >= 0.8:
      return "Not bad!";
    case percentage >= 0.7:
      return "Not too bad...";
    case percentage >= 0.6:
      return "An average performance...";
    case percentage >= 0.2:
      return "A mediocre performance...";
    default:
      return "You should go read an encyclopedia.";
  }
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
    // Add info to resultsArea:
    resultsArea.innerHTML +=
      "<h1 id='results-header'>Out of " +
      usedQuestionsArray.length +
      " questions, you answered " +
      score +
      " correctly." +
      "</h1><p>" +
      feedbackComment() +
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
    getUsedQuestionsArray();
    //usedQuestionsArray = randomlyShuffleArray(allQuestionsArray);
    toNext();
  });
}
