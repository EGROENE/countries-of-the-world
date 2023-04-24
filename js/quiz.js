const shortVersionBtn = document.getElementById("play-short-version-btn");
const fullVersionBtn = document.getElementById("play-full-version-btn");
const startBtns = document.querySelectorAll("#start-btns-container button");
const quizMainArea = document.getElementsByTagName("main")[0];
const quizGreeting = document.getElementById("quiz-greeting");
const questionArea = document.createElement("div");
questionArea.setAttribute("id", "question-area");
const resultsArea = document.createElement("div");
resultsArea.setAttribute("id", "results-area");

// Function to change bg image. Should also be called in toNext():
const quizBGImages = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29vbCUyMHdvcmxkJTIwcGljdHVyZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1609042796019-65df356d0e0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2VobHN0ZWluaGF1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1574452030370-bf2ebf9292fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVyY2h0ZXNnYWRlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1586593794369-c9afd3ee5e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVyY2h0ZXNnYWRlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1573592234083-c0b2fbda21bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlcmNodGVzZ2FkZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1528484786961-e60128675768?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlcmNodGVzZ2FkZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1565969358191-749f3c6dec6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlaWJ1cmclMjBpbSUyMGJyZWlzZ2F1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1565969359196-3aa336eb29a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlaWJ1cmclMjBpbSUyMGJyZWlzZ2F1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1634412116682-a692f58c8e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlaWJ1cmclMjBpbSUyMGJyZWlzZ2F1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1634412116680-4327e30eccfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWlidXJnJTIwaW0lMjBicmVpc2dhdXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1517094629229-f5e0c2f88440?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFsYXNrYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1574866412308-32d9023633dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsYXNrYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/flagged/photo-1496517125700-5d0675f681f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFsYXNrYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1578305035108-429188b9ede6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5ldyUyMHplYWxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1604038484630-3c95cf1459a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG5ldyUyMHplYWxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1591554338378-6dcc422b8249?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG5ldyUyMHplYWxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fG5ldyUyMHplYWxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1595125990323-885cec5217ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG5ldyUyMHplYWxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1565670105658-ea35d27f7de7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VhZGFsYWphcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1563038371-0b28829557e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3VhZGFsYWphcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1599624893198-d000bdd8bef8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3VhZGFsYWphcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1552929635-1d39dd7dcb33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGd1YWRhbGFqYXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1617482594871-04a5dc494612?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGd1YWRhbGFqYXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1562772867-bb80d28151f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9sbGFuZCUyMG1pY2hpZ2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1487006113199-30fc89dd54e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG9sbGFuZCUyMG1pY2hpZ2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1574379445053-1226a2aa2c58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhvbGxhbmQlMjBtaWNoaWdhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1546869357-184a730b0a31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvbGxhbmQlMjBtaWNoaWdhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1563597187-4691653d13a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvbGxhbmQlMjBtaWNoaWdhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1575408264798-b50b252663e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJpem9uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1532295039064-229629db1073?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJpem9uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXJpem9uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://plus.unsplash.com/premium_photo-1675826774823-88bd1cf6809a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFyaXpvbmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWlhbWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWlhbWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1589083130544-0d6a2926e519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1pYW1pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1562517634-baa2da3acfbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pYW1pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1603888613934-ee2f7d143dd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1pYW1pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1608135003575-9b587f3b0cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1pYW1pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXRhbHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aXRhbHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGl0YWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1551867633-194f125bddfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVkYXBlc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1577366763043-af2d723055ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVkYXBlc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1572085313473-08e54ae31fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmllbm5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1603804995518-fff3be6f4c58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHZpZW5uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1592664821916-451a975d005f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHZpZW5uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1615296116687-2e7a48460f18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVybGluJTIwd2FsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1592593205383-6182d2416758?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJlcmxpbiUyMHdhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1462400362591-9ca55235346a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGF3YWlpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1471079502516-250c19af6928?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhhd2FpaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFwYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amFwYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1602940659805-770d1b3b9911?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3RhdHVlJTIwb2YlMjBsaWJlcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhemlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1585436249848-3a8210d46a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJyYXppbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1606958518081-387ad1c068b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJyYXppbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
];
const setQuizBG = () => {
  let randIndex = Math.floor(Math.random() * quizBGImages.length);
  document.body.style.backgroundImage = "url(" + quizBGImages[randIndex] + ")";
  document.body.style.height = "97vh";
};
// BG image should only display on larger devices. Else, solid color should be the BG:
if (window.screen.width > 500) {
  setQuizBG();
}

const allQuestionsArray = [
  {
    question: "True or False: The population of Canada is over 50 million.",
    options: [{ wrongAnswer: "true", rightAnswer: "false" }],
  },
  {
    question:
      "True or False: Christmas Island is located in the Arctic Circle, near the North Pole.",
    options: [{ wrongAnswer: "true", rightAnswer: "false" }],
  },
  {
    question: "Which country borders both North Korea & Poland?",
    options: [
      {
        wrongAnswer1: "Azerbaijan",
        wrongAnswer2: "China",
        rightAnswer: "Russia",
      },
    ],
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
    question: "Which of these is the proper name?",
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
      "The flag of which country could most easily be mistaken for the Red Cross?",
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
  console.log(percentage);
  if (percentage === 1) {
    return "Hope you feel proud of yourself.";
  } else if (percentage >= 0.9) {
    return "Nice job!";
  } else if (percentage >= 0.8) {
    return "Not bad!";
  } else if (percentage >= 0.7) {
    return "Not too bad...";
  } else if (percentage >= 0.6) {
    return "An average performance...";
  } else if (percentage >= 0.2) {
    return "A mediocre performance...";
  } else {
    return "You should go read an encyclopedia.";
  }
};

const toNext = () => {
  // Change bg image (on larger screens):
  if (window.screen.width > 500) {
    setQuizBG();
  }
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
