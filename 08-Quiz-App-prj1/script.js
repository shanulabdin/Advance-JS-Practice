const newQuestion = document.querySelector('.newQuestion');
const nextButton = document.querySelector('#nextButton');

nextButton.addEventListener('click', nextQuestion);

function nextQuestion(){
  newQuestion.innerHTML = `
  <div id="questionContainer">
  <p class="question">What is the biggest city in the world.</p>
  </div>
  
  <div id="optionContainer">
  <button class="answerButton">Karachi</button>
  <button class="answerButton">Tokyo</button>
  <button class="answerButton">Delhi</button>
  <button class="answerButton">New York</button>
  </div>
  `;
}