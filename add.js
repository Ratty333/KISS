function showMessage(message) {
    document.getElementById('message').textContent = message
};
console.log('Hello World!!');

console.log(typeof'nerds');
console.log(typeof 123);
console.log(typeof'True');

let Mood = true;

if(Mood !== true){
    console.log('Im Happy!')
}
else{
    console.log('Drink More!!')
};
let shot = Math.random();
let score = shot * 100 ;
let newscore = Math.round(score);
console.log(shot);
console.log(score);
console.log(newscore);

let result = 0
if(newscore % 2 === 0){
    let result = 'Even'
    showMessage(result)
}
else{
    let result = 'Odd' 
    showMessage(result)  
}


