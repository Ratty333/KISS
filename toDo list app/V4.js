// working with the objects in the array

let todoList = {
  toDo: [], // make a empty array
  sayTodo: function(){ // print to console
   console.log('My Todo list', this.toDo);
  },
  addToDo: function(todoText){ // adds items as an object and print ot console
    this.toDo.push({
      todoText: todoText, // object name = object text
      comp: false  // Boolean value for completed or not
    }),
     this.sayTodo();
    },
  // change item and print to console
  changeTodo: function(position,todoText) { 
   // this.toDo[position] = update; (replaced with bellow item to work for objects)
   this.toDo[position].todoText = todoText,
    this.sayTodo();
  },
  removeTodo: function(position) { // remove an item and print to console
    //this.toDo.splice(position,1);
    delete this.toDo[position];
    this.sayTodo();
      },
  toggleCompleted: function(position) {
    let todo = this.toDo[position];
    todo.comp = !todo.comp;
    this.sayTodo()
  },
  

};
todoList.addToDo('test');
todoList.addToDo('Fingers Crossed');
todoList.changeTodo(0,'test updated');
todoList.toggleCompleted(0);
todoList.removeTodo(0);
console.log(todoList.length)