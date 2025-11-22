const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskContainer = document.querySelector('#taskContainer');

class Todo{
  constructor(id, taskName = 'New Task', completed = false){
    this.id = id;
    this.taskName = taskName;
    this.completed = completed;
  }
  toggle(){
    this.completed = !this.completed;
  }
}
const todos = [];
let nextId = 0;

// add task function
function addTask(){
  const inputText = taskInput.value.trim();
  if(!inputText) return;
  
  const todo = new Todo(nextId++, inputText)
  todos.push(todo);

  const newTask = document.createElement('li');
  newTask.classList.add('task');
  newTask.dataset.id = todo.id;
  taskContainer.appendChild(newTask);

  newTask.innerHTML = `
    <div class="itemContainer">
    <input class="taskCheck" type="checkbox">
    <p class="taskTitle">${todo.taskName}</p>
    </div>
    <button class="delTaskBtns">-</button>
  `;
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
  };
}
taskContainer.addEventListener('click', taskDone);