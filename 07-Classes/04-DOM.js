const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskContainer = document.querySelector('#taskContainer');


// add task function
function addTask(){
  const inputText = taskInput.value.trim();

  if(inputText !== ''){
    taskContainer.innerHTML += `
    <li class="task">
    <div class="itemContainer">
    <input class="taskCheck" type="checkbox">
    <p class="taskTitle">${inputText}</p>
    </div>
    <button class="delTaskBtns">-</button>
    </li>
    `;
  }
  taskInput.value = '';
  taskInput.focus();
}

addTaskBtn.addEventListener('click', () => {
  addTask();
});
taskInput.addEventListener('keydown', (event) => {
  if(event.key === 'Enter'){
    addTask();
  }
});


// delete task
function deleteTask(event){
  const clickedItem = event.target;
  
  if(clickedItem.classList.contains('delTaskBtns')){
    const closestLi = clickedItem.closest('li');
    closestLi.remove();
  }
};

taskContainer.addEventListener('click', deleteTask);