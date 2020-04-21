// giving obejects in the array 2 properties


let todoList = {
  toDo: [], // make a empty array
  sayTodo: function(){ // print to console
   console.log(this.toDo[this.todoText]);
  },
  addToDo: function(todoText){ // adds items as an object and print ot console
    this.toDo.push({
      todoText: todoText, // object name = object text
      comp: false  // Boolean value for completed or not
    });
    },
  // change item 
  changeTodo: function(position,todoText) { 
   this.toDo[position].todoText = todoText;
  },
  removeTodo: function(position) { // remove an item
    delete this.toDo[position];
      },
  toggleCompleted: function(position) {
    let todo = this.toDo[position];
    todo.comp = !todo.comp;
  },
};

todoList.addToDo('test');
todoList.addToDo('Fingers Crossed');
todoList.changeTodo(0,'test updated');
todoList.toggleCompleted(0);
todoList.addToDo('Bacon')
todoList.addToDo('Cheese')
console.log(todoList.length)
for (let i=0;i<todoList.toDo.length;i++){console.log(todoList.toDo[i].todoText)}