// creating an object with 3 parameters
let myComputer = {
operatingSytem: 'mac',
screenSize: '15 inches',
purchaseYear: 2011
}
console.log(myComputer)

let myName = {
  name: 'Lee',
  sayName: function() { // creating a function in an object
    console.log(this.name)  // using "this" lookes inside the oject adding.name specifies the location more
  }
}
myName.sayName()