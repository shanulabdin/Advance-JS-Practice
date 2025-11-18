const input = document.querySelector('#input');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskTitle = document.querySelector('#taskTitle');
const taskContainer = document.querySelector('#taskContainer');
const taskCheck = document.querySelector('.taskCheck');

const delTaskBtns = document.querySelectorAll('.delTaskBtns');

addTaskBtn.addEventListener('click', () => {
  addTask();
})

delTaskBtns.forEach(delTaskBtn => {
  delTaskBtn.addEventListener('click', (event) => {
    const clickedBtn = event.target;
    const parentBox = clickedBtn.parentNode;
    parentBox.style.display = 'none';
  })
})

function addTask(){
  const taskInput = input.value;

  if(!taskInput) return;
  taskContainer.innerHTML +=
    `<li class="task">
      <div class="taskCheck">
        <input class="taskCheck" type="checkbox">
        <p class="taskTitle" id="taskTitle">${taskInput}</p>
      </div>
      <button class="delTaskBtns">-</button>
    </li>`;
    
  input.value = '';
}
