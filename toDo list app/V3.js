// changing the array to an object{}

let todoList = {
  toDo: ['item 1', 'item 2', 'item 3'], // make array
  sayTodo: function(){ // print to console
   console.log('My Todo list', this.toDo);
  },
  addToDo: function(todo){ // adds items and print ot console
    this.toDo.push(todo);
    this.sayTodo();
  },
  changeTodo: function(position,update) { // change item and print to console
    this.toDo[position] = update;
    this.sayTodo();
  },
  removeTodo: function(position) { // remove an item and print to console
    this.toDo.splice(position,1);
    this.sayTodo();
      }

};


todoList.removeTodo(2);