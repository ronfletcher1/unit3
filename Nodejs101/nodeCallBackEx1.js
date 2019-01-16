// Exercise #1
// 1. Write a function that takes a callback (function) 
// as a parameter. Run that function inside of your function.

function win(){

}
console.log(typeof(win));

const myWinner = (n)=>{
    console.log(n + 5);
    // console.log(n)
}
function myNewWinner(callback){
   callback(5);
}
myNewWinner(myWinner);
// myNewWinner(6)


// 2. Add an arguement "n" to your callback. 
// Print off the value of n inside of the function.
// myNewWinner(myWinner(1));