const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskContainer = document.querySelector('#taskContainer');


// add task function
function addTask(){
  const inputText = taskInput.value;

  taskContainer.innerHTML += `
    <li class="task">
      <div class="itemContainer">
        <input class="taskCheck" type="checkbox">
        <p class="taskTitle">${inputText}</p>
      </div>
      <button class="delTaskBtns">-</button>
    </li>
  `;
  taskInput.value = '';
  taskInput.focus();
}

addTaskBtn.addEventListener('click', () => {
  addTask();
});