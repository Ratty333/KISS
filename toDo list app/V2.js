// making a function to display, add, change and remove array items
function displayToDo(){
  console.log('ToDo:' ,toDo);
}
displalayToDo()
// makinga funciton to add items to the array
function addItems(item){
  toDo.push(item);
  displayToDO();
}
addItems('Sugar');
// adding a function to change items in an array
function changeToDo(position, newValue){
  toDo[position] = newValue;
  displayToDo();
}
// making a function to delete items from the array
function removeItem(position){
  toDo.splice(position,1);
  displayToDo();
}
