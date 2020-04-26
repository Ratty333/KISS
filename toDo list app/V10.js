/* Tidy code to remove elements that print in console as this is no longer needed, adding a click to delete funtion*/


<!DOCTYPE html>

<html>
  <head>
    <title>Ugly Todo List</title>
  </head>
  <body>
    <h1>Ugly Todo List Ver 1 !!</h1>
    <h2>First go at an app (Very Basic) </h2>
         
    <div>
    <button onclick="handlers.toggleAll()">Toggle All</button>
    </div>
    <div>
    <button onclick="handlers.addTodo()">Add</button>
    <input id="toDoTextInput" type="text">Text</input>
    </div>
    <div>
    <button onclick="handlers.changeTodo()">Change Todo</button>
    <input id="changeTodoPositionInput" type="number">Position</input>
    <input id="changeTodoTextInput" type="text">Text</input>
    </div>
    <div>
    <button onclick="handlers.toggleTodo()">Toggle Todo</button>
    <input id="toggleTodoInput" type="number">Position</input>
    </div>
    <div> 
    <ul>
    </ul>
    </div>

    <script>
//unlabled list <ul> (adds a bullet point)
let todoList = {
  toDo: [],
    addToDo: function(todoText){ 
    this.toDo.push({
      todoText: todoText,
      comp: false  
      }),
    },
    changeTodo: function(position,todoText) { 
   this.toDo[position].todoText = todoText,
    },
  removeTodo: function(position) { 
    this.toDo.splice(position,1);    
      },
  toggleCompleted: function(position) {
    let todo = this.toDo[position];
    todo.comp = !todo.comp;
  },
  toggleAll: function(){
    let totalItems = this.toDo.length;
    let compItems = 0;
    for (let i=0 ; i<totalItems ; i++){
      if (this.toDo[i].comp === true){compItems++};
    };
    if (totalItems === compItems) {
      for (let i=0;i<totalItems;i++){
        this.toDo[i].comp = false}}
        else {
        for (let i=0;i<totalItems;i++){
        this.toDo[i].comp = true}
      };
  },
};
let handlers = {
  },
  toggleAll:function(){todoList.toggleAll();
  },
  addTodo: function(){
    let todoTextInput = document.getElementById('toDoTextInput')
    todoList.addToDo(todoTextInput.value);
    toDoTextInput.value = '';
    userView.displayTodo();
  },
  changeTodo: function(){
    let changeTodoTextInput = document.getElementById('changeTodoTextInput');
    let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber,changeTodoTextInput.value);
    changeTodoTextInput.value = '';
    changeTodoPositionInput ='';
    userView.displayTodo();
  },
  deleteTodo: function(position){
    todoList.removeTodo(poition);
    userView.displayTodo();
  },
  toggleTodo: function(){
    let toggleTodoInput = document.getElementById('toggleTodoInput')
    todoList.toggleCompleted(toggleTodoInput.valueAsNumber);
    toggleTodoInput.value = '';
    userView.displayTodo();
  }
};
let userView = {/* making an object to adjust user view items*/
  dispayTodo: function(){ /* funtion to add lines in the list*/ 
    let todoUI = document.querySelector('ul');// looking for the ul in the documnet (very bad , works in this case as there is only one ul present)
    
    todoUI.innerHTML =''; /* clear the elements in the <ul> so it does not stack*/
    for (let i=0; i<todoList.toDo.length,i++;) {/* loop to print as many items as in the list*/
    let todoLi = document.createElement('li');
    let todoTextWithCompletion = '';
    let toDo = todoList.toDo[i];
    if (toDo.comp === true){
      todoTextWithCompletion = '(x) '+ toDo.todoText
    }else{
      todoTextWithCompletion = '( ) '+ toDo.todoText
    }

    todoLi.id = i;
    todoLi.textContent = todoTextWithCompletion;
    todoLi.appendChild(this.createDeleteButton());
    todoUI.appendChild(todoLi);
    }


  }
createDeleteButton: function(){
  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'deleteButton';
  return deleteButton
}
  setUpEventListeners: function() {
let todoUl = querySelector('ul');
todoUl.addEventListener('click', function(event){
  let eventClicked = event.target
  if (eventClicked.className === 'deleteButton'){
    handlers.deleteTodo(parseInt(eventClicked.target.parentNode.id))
  }
}
}

};
userView.setUpEventListeners();

    </script>
  </body>
  </html>