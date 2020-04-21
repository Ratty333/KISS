// giving more funtion to the console output via if, else functions.


let todoList = {
  toDo: [], // make a empty array
  sayTodo: function(){ // print to console
  // if (condition) {code if true}
  if (this.toDo.length === 0){console.log('Your todo list is empty!!');
  }else{
   console.log('My Todo list:');
   for (let i = 0; i < this.toDo.length;i++){
     if (this.toDo[i].comp === true){
       console.log('(x)', this.toDo[i].todoText);}
       else {console.log('( )',this.toDo[i].todoText);
       };
      }
        
   }},
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
    this.toDo.splice(position,1);    
    this.sayTodo();
      },
  toggleCompleted: function(position) {
    let todo = this.toDo[position];
    todo.comp = !todo.comp;
    this.sayTodo()
  },
  

};

todoList.sayTodo()
