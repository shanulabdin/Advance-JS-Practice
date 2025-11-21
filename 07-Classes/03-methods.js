class TodoList{
  constructor(){
    this.items = [];
  }
  add(text){
    this.items.push(text);
  }
  remove(i){
    this.items.splice(i, 1);
  }
  list(){
    console.log(this.items);
  }
}
const tasks = new TodoList();
tasks.items.push('buy milk', 'workout');
tasks.add('Journal');
tasks.add('Meditate');
tasks.add('Walk');
tasks.add('Food');
tasks.remove(2);
tasks.list();