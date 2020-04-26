/* Refactoring - Code refactoring is the process of restructuring existing computer code—changing the factoring—without changing its external behavior.*/
// making a toggle all to true / false

<!DOCTYPE html>

<html>
  <head>
    <title>Ugly Todo List</title>
  </head>
  <body>
    <h1>Ugly Todo List Ver 1 !!</h1>
    <h2>First go at an app (very Basic) </h2>
    <div>
    <button id="displyTodoButton">DisplayToDos</button>
    <button id="toggleAllButton">Toggle All</button>
    </div>

     
    <div>
    // can use an onclick atribute instead of id to run a function by the click.
    <button onclick="handlers.displayTodo()">DisplayTodos</button>
    <button onclick="handlers.toggleAll()">Toggle All</button>
    </div>
    // adding a "add" button and a text input box
    <div>
    <button onclick="handlers.addTodo()">Add</button>
    <input id="toDoTextInput" type="text">
    </div>
    <div>
    <button onclick="handler.changeTodo()">Change Todo</button>
    <input id="changeTodoPositionInput" type="number">
    <input id="changeTodoTextInput" type="text">
    </div>
    <div>
    <button onclick="handler.toggleTodo()">Delete</button
    <input id="toggleTodoInput" type="number">
    </div>
    <div>
    <button onclick="handler.deleteTodo()">Delete</button
    <input id="deleteTodoInput" type="number">
    </div>
    

    <script>
      // making a toggle all to true / false

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
  //toggle all to false if true
  toggleAll: function(){
    let totalItems = this.toDo.length;
    let compItems = 0;
    // finding out how many are true
    for (let i=0 ; i<totalItems ; i++){
      if (this.toDo[i].comp === true){compItems++};
      console.log(compItems)
    }
    // Case 1: toggle to false if true
    if (totalItems === compItems) {
      for (let i=0;i<totalItems;i++){
        this.toDo[i].comp = false};
      }
      // Case 2: making all true if not already
      else {
        for (let i=0;i<totalItems;i++){
        this.toDo[i].comp = true}
      }
    this.sayTodo()
  },
  

};
/*
Replaced by the bellow
// making a way to access the html button
let displayTodoButton = document.getElementById('displyTodoButton')
// making a way for the button to display the Todos
displayTodoButton.addEventListener('click',function(){
  todoList.sayToDo();
});
// making a way to access the toggle all button
let toggleAllButton = document.getElementById('toggleAllButton');
// making a way for the button to operate
toggleAllButton.addEventListener('click', function(){
  todolist.toggleAll();
});*/
let handlers = {
  displayTodo:function(){todoList.sayToDo();
  }
  toggleAll:function(){todolist.toggleAll();
  }
  addTodo: function(){
    let toDoTextInput = document.getElementById('toDoTextInput')todoList.addToDo;(todoTextInput.value);
    toDoTextInput.value = '';
  }
  changeTodo: function(){
    let changeTodoTextInput = document.getElementById('changeTodoTextInput');
    let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber,changeTodoTextInput.value);
    changeTodoTextInput.value = '';
    changeTodoPositionInput ='';
  }
  deleteTodo: function(){
    let deleteTodoInput = document.getElementById('deteteTodoInput');
    todoList.removeTodo(deleteTodoInput.valueAsNmber);
    deleteTodoInput.value = '';
  }
  toggleTodo: function(){
    let toggleTodoInput = document.getElementById('toggleTodoInput')
    todoList.toggleCompleted(toggleTodoInput.valueAsNumber);
    toggleTodoInput.value = '';
  }
};

};
    </script>
  </body>
  </html>