const quesJSON = [
  {
    correctAnswer: "Three ",
    option: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: "L. Frank Baum",
    option: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: "Atlanta United",
    option: [
      "Atlanta United",
      "Atlanta Impact",
      "Atlanta Bulls",
      "Atlanta Stars",
    ],
    question: "Which of these is a soccer team based in Atlanta?",
  },
  {
    correctAnswer: "A Nanny",
    option: ["A Sow", "A Lioness", "A Hen", "A Nanny"],
    question: "A female goat is known as what?",
  },
  {
    correctAnswer: "P. L. Travers",
    option: [
      "J. R. R. Tolkien",
      "P. L. Travers",
      "Lewis Carroll",
      "Enid Blyton",
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
];

// Score
let tScore = 0;
let currentQue = 0;
const totalScore = quesJSON.length;

//Accessing all the elements:
const queElement = document.getElementById("question");
const optElement = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextButton = document.getElementById("next");
const finalSubmit = document.getElementById("submit");

// finalSubmit.addEventListener("click", () => {
//   nextQue();
//   scoreEl.textContent = `Score: ${tScore}/${totalScore}`;
//   nextButton.addEventListener("click", () => {
//     nextQue();
//     scoreEl.textContent = `Score: ${tScore}/${totalScore}`;
//   });
// });
//nextButton.disabled = true;

finalSubmit.addEventListener("click", () => {
  // Enable the next button after submit
  //nextButton.disabled = false;
  nextQue();
  scoreEl.textContent = `Score: ${tScore}/${totalScore}`;
});

// Event listener for the next button
nextButton.addEventListener("click", () => {
  nextQue();
  scoreEl.textContent = `Score: ${tScore}/${totalScore}`;
  // Disable the next button again after it's clicked
  // nextButton.disabled = true;
});

showQuestion();
//option button
// for (let i of option) {
//   const optButton = document.createElement("button");
//   optButton.textContent = i;
//   optElement.appendChild(optButton);
// }
function showQuestion() {
  //Destructring
  const { correctAnswer, option, question } = quesJSON[currentQue];
  queElement.textContent = question;

  const suffling = suffleOption(option);

  suffling.forEach((i) => {
    const optButton = document.createElement("button");
    optButton.textContent = i;
    optElement.appendChild(optButton);

    //event handling for button
    optButton.addEventListener("click", () => {
      if (i == correctAnswer) {
        tScore++;
      } else {
        tScore = tScore - 0.5;
      }
      // console.log(i);
      scoreEl.textContent = `Score: ${tScore}/${totalScore}`;
      // queElement.textContent = "Quiz Completed, Thanks for participate!!";
      // optElement.textContent = "";
      nextQue();
    });
  });
}

// next question
function nextQue() {
  currentQue++;
  optElement.textContent = "";
  if (currentQue >= quesJSON.length) {
    queElement.textContent = "Quiz Completed, Thanks for participate!!";
    nextButton.remove;
    finalSubmit.remove;
  } else {
    showQuestion();
  }
}

// suffle options

function suffleOption(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [options[i], options[j]] = [options[j], options[i]];
    return options;
  }
}
