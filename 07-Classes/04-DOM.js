const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskContainer = document.querySelector('#taskContainer');

class Todo{
  constructor(id, name = 'New Task', completed = false){
    this.id = id;
    this.name = name;
    this.completed = completed;
  }
  toggle(){
    this.completed = !this.completed;
  }
}

class TodoList{
  constructor(){
    this.todos = [];
  }
  add(inputText){
    const todo = new Todo(nextId++, inputText);
    this.todos.push(todo);
    console.log(this.todos);
    return todo;
  }
  delete(id){
    const index = this.todos.findIndex(t => t.id === id);
    if (index === -1) return;
    this.todos.splice(index, 1);
  }
  toggle(id){
    const index = this.todos.findIndex(t => t.id === id);
    if (index === -1) return;
    this.todos[index].toggle();
  }
}

const todoList = new TodoList();

let nextId = 0;

// add task function
function addTask() {
  const inputText = taskInput.value.trim();
  if (!inputText) return;
  
  const todo = todoList.add(inputText);

  const newTask = document.createElement('li');
  newTask.classList.add('task');
  newTask.dataset.id = todo.id;
  taskContainer.appendChild(newTask);

  newTask.innerHTML = `
    <div class="itemContainer">
      <input class="taskCheck" type="checkbox">
      <p class="taskTitle">${inputText}</p>
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
  if (event.key === 'Enter') {
    addTask();
  }
});

// delete task
function deleteTask(event) {
  const clickedItem = event.target;
  
  if (clickedItem.classList.contains('delTaskBtns')) {
    const closestLi = clickedItem.closest('li');
    const closestLiId = Number(closestLi.dataset.id);
    
    todoList.delete(closestLiId);
    closestLi.remove();
  }
}

taskContainer.addEventListener('click', deleteTask);

// task done
function taskDone(event) {
  const clickedItem = event.target;
  
  if (clickedItem.classList.contains('taskCheck')) {
    clickedItem.closest('div').classList.toggle('completed');

    const closestLi = clickedItem.closest('li');
    const closestLiId = Number(closestLi.dataset.id);

    
    todoList.toggle(closestLiId);
  }
}

taskContainer.addEventListener('click', taskDone);
