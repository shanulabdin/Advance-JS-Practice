class TodoItem {
  constructor(task = 'New Task', completed = false){
    this.task = task;
    this.completed = completed;
  }
  toggle(){
    this.completed = !this.completed;
  }
  toString(){
    return this.completed ? `[X] ${this.task}` : `[ ] ${this.task}`;
  }
}

const task1 = new TodoItem('Buy Milk', true);
console.log(task1.toString());
task1.toggle();
console.log(task1.toString());

const task2 = new TodoItem('Workout', false);
console.log(task2.toString());
task2.toggle();
console.log(task2.toString());

const task3 = new TodoItem();
console.log(task3.toString());
task3.toggle();
console.log(task3.toString());