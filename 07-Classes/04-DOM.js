const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskContainer = document.querySelector('#taskContainer');

class todoList{
  constructor(taskName = 'New Task', completed = false){
    this.taskName = taskName;
    this.completed = this.completed;
  }
  toggle(){
    this.completed = !this.completed;
  }
}

// add task function
let taskName;
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
  taskName = new todoList(inputText);
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


// task done
function taskDone(event){
  const clickedItem = event.target;
  
  if(clickedItem.classList.contains('taskCheck')){
    clickedItem.closest('div').classList.toggle('completed');
    taskName.toggle();
  };
}
taskContainer.addEventListener('click', taskDone);