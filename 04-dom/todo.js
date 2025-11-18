const input = document.querySelector('#input');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskContainer = document.querySelector('#taskContainer');
const delTaskBtns = document.querySelectorAll('.delTaskBtns');

// add items
function addTask(){
  const taskInput = input.value;

  if(!taskInput) return;
  taskContainer.innerHTML +=
    `<li class="task">
      <div class="taskCheck">
        <input class="taskCheck" type="checkbox">
        <p class="taskTitle">${taskInput}</p>
      </div>
      <button class="delTaskBtns">-</button>
    </li>`;
    
  input.value = '';
  input.focus();
}
addTaskBtn.addEventListener('click', () => {
  addTask();
})

// delete items
taskContainer.addEventListener('click', (event) => {
  const clickedItem = event.target;
  if(clickedItem.classList.value === 'delTaskBtns'){
    const closestLi = clickedItem.closest('li');
    closestLi.remove();
  }
})