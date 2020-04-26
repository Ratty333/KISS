// removing loops and adding forEach.


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
    this.toDo.forEach(function(toDos){
      if (toDos.comp === true){
        compItems++;
        }
      })
    };
     /*if true make false
     for (let i=0 ; i<totalItems ; i++){
      if (this.toDo[i].comp === true){compItems++};
      console.log(compItems)
    };
    if (totalItems === compItems) {
      for (let i=0;i<totalItems;i++){
        this.toDo[i].comp = false}}
        else {
        for (let i=0;i<totalItems;i++){
        this.toDo[i].comp = true}
        };*/
        // if true make false
    this.toDo.forEach(toDos){
      if (totalItems === toDos.comp){toDos.comp = false
      }else{ // make true if false
        toDos.comp = true
      }
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
let userView = {
  dispayTodo: function(){ 
    let todoUI = document.querySelector('ul');
    todoUI.innerHTML ='';
    todoList.toDo.forEach(function(toDos, position){
      let todoLi = document.createElement('li');
      let todoTextWithCompletion = '';
      if (toDo.comp === true){
      todoTextWithCompletion = '(x) '+ toDos.todoText
      }else{
      todoTextWithCompletion = '( ) '+ toDos.todoText
      }
      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todoUI.appendChild(todoLi);
    },this)


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