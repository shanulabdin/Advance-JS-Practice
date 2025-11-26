const newQuestion = document.querySelector('.newQuestion');
const nextButton = document.querySelector('#nextButton');

const questions = [
  {
    question: 'What color is the sky on a clear day?',
    options: ['green', 'blue', 'red', 'yellow'],
    correct: 'blue'
  },
  {
    question: 'How many days are in a week?',
    options: ['5', '6', '7', '8'],
    correct: '7'
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '5', '4', '6'],
    correct: '4'
  },
  {
    question: 'What do bees make?',
    options: ['milk', 'honey', 'cheese', 'water'],
    correct: 'honey'
  },
  {
    question: 'What is the first month of the year?',
    options: ['March', 'December', 'January', 'April'],
    correct: 'January'
  },
  {
    question: 'What planet do we live on?',
    options: ['Mars', 'Earth', 'Jupiter', 'Venus'],
    correct: 'Earth'
  },
  {
    question: 'Which animal is known as the "King of the Jungle"?',
    options: ['Tiger', 'Elephant', 'Lion', 'Bear'],
    correct: 'Lion'
  },
  {
    question: 'How many legs does a spider have?',
    options: ['6', '8', '10', '4'],
    correct: '8'
  },
  {
    question: 'What is the opposite of “up”?',
    options: ['Right', 'Down', 'Over', 'In'],
    correct: 'Down'
  },
  {
    question: 'What do you call frozen water?',
    options: ['Ice', 'Steam', 'Snow', 'Cloud'],
    correct: 'Ice'
  }
]
let nextIndex = 0;

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
      b.classList.add('wrong')
    } else {
      b.classList.add('correct')
    }
  }))

  nextIndex++;
}
nextButton.addEventListener('click', nextQuestion);
nextQuestion();