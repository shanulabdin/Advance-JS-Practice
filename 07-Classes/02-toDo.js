class TodoItems {
  constructor(task, completed){
    this.task = task;
    this.completed = completed;
  }
  toggle(){
    return this.completed = !this.completed;
  }
  toString(){
    return this.completed ? `[X] ${this.task}` : `[ ] ${this.task}`;
  }
}

const task1 = new TodoItems('Buy milk', true);
console.log(task1.toString());
task1.toggle();
console.log(task1.toString());

const task2 = new TodoItems('Workout', false);
console.log(task2.toString());
task2.toggle();
console.log(task2.toString());