const newQuestion = document.querySelector('.newQuestion');
const nextButton = document.querySelector('#nextButton');
const resultButton = document.querySelector('#resultButton');
const retryButton = document.querySelector('#retryButton');

const questions = [
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    correct: 'Jupiter'
  },
  {
    question: 'How many continents are there on Earth?',
    options: ['5', '6', '7', '8'],
    correct: '7'
  },
  {
    question: 'What do plants need to make food?',
    options: ['Moonlight', 'Starlight', 'Sunlight', 'Fire'],
    correct: 'Sunlight'
  },
  {
    question: 'Which animal can live both in water and on land?',
    options: ['Dog', 'Frog', 'Eagle', 'Shark'],
    correct: 'Frog'
  },
  {
    question: 'What is the capital of France?',
    options: ['Rome', 'Paris', 'Berlin', 'Madrid'],
    correct: 'Paris'
  },
  {
    question: 'How many sides does a triangle have?',
    options: ['2', '3', '4', '5'],
    correct: '3'
  },
  {
    question: 'What do cows drink?',
    options: ['Milk', 'Juice', 'Water', 'Tea'],
    correct: 'Water'
  },
  {
    question: 'Which fruit is yellow and curved?',
    options: ['Apple', 'Banana', 'Orange', 'Grape'],
    correct: 'Banana'
  },
  {
    question: 'What gas do humans need to breathe?',
    options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Helium'],
    correct: 'Oxygen'
  },
  {
    question: 'Which shape has four equal sides?',
    options: ['Rectangle', 'Triangle', 'Square', 'Circle'],
    correct: 'Square'
  }
]
let nextIndex = 0;

let correct = 0;
let wrong = 0;

function nextQuestion(){
  const currentQuestion = questions[nextIndex];
  newQuestion.innerHTML = `
    <div id="questionContainer">
      <p class="question">${currentQuestion.question}</p>
    </div>
    
    <div id="optionContainer">
      <button class="answerButton">${currentQuestion.options[0]}</button>
      <button class="answerButton">${currentQuestion.options[1]}</button>
      <button class="answerButton">${currentQuestion.options[2]}</button>
      <button class="answerButton">${currentQuestion.options[3]}</button>
    </div>
  `;

  const answerButtons = document.querySelectorAll('.answerButton');

  answerButtons.forEach(b => b.addEventListener('click', () => {
    if(b.textContent === currentQuestion.correct){
      b.classList.toggle('correct');
      correct++;
    } else {
      b.classList.toggle('wrong');
      wrong++;
    }
    answerButtons.forEach(b => b.disabled = true);
  }))

  nextIndex++;

  if(nextIndex > questions.length - 1){
    nextButton.style.display = 'none';
    resultButton.style.display = 'block';
  }

  let result = correct >= 4 ? 'Passed' : 'Failed';
  resultButton.addEventListener('click', () => {
    newQuestion.innerHTML = `
      <div id="showResult">
        <p>Correct: ${correct}</p>
        <p>Wrong: ${wrong}</p>
        <p>${result}</p>
      </div>
    `;
    resultButton.style.display = 'none';
    retryButton.style.display = 'block';
  })
}
nextButton.addEventListener('click', nextQuestion);
nextQuestion();

retryButton.addEventListener('click', () => {
  nextIndex = 0;
  correct = 0;
  wrong = 0;

  retryButton.style.display = 'none';
  resultButton.style.display = 'none';
  nextButton.style.display = 'block';
  nextQuestion();
})