// looking at some basic steps in a todo list
// making an array, somewhere to store a list
function sayHiTo(person){
  console.log('Hi', person);
}
sayHiTo('Lee'); // doing this is the same as person = 'Lee'
// making an array
let toDo = ['Bacon','Eggs', 'Milk'];
// printing the array content to console
console.log(toDo);
// adding items to the end of the array
toDo.push('Sausages', 'Cheese');
console.log(toDo)
// changing an item within the array
toDo[1] = 'Beans';
console.log(toDo)
// cutting an item out from a specific location
toDo.splice(1,1); // (location, number of items to remove, item to add)
console.log(toDo);
// adding an item to a specific loacation
toDo.splice(2,0,'Bread', 'Flour');
console.log(toDo);
toDo.unshift('crisps'); // adds an item to the start .pop removes an item from the start
console.log(toDo);
toDo.push('Merlot'); // adds an item to the end
console.log(toDo);
