// 1) Function Declaration
// function sayHi(name){
//     console.log("Hello my name is:",name);
// }
// sayHi("Kunal")

// 2) Function Expression
// const sayHi = function(name){
// console.log("Hello my name is:", name);
// }
// sayHi("Tom")

// 3) Arrow Functions
// const sayHi = (name)=>{
// console.log("Hello my name is:", name);
// }
// sayHi("Jam")

// 4) Anonymous Function
// A functions which does'nt have name
// Mostly used in callbacks
// Example:-
// setTimeout(() => {
//   console.log("Hello My name is Jane");
// }, 2000)

// 5) IIFE (Immediately Invoked Function Expression)
// A function that runs immediately after it is defined.
// (function () {
//   console.log("I run immediately");
// })();

// 6) Callback Function
// A function passed as an argument
// to another function.
// function message(name,callback){
// console.log(`Hello ${name} you're welcome to here`);
// callback() ;
// }
// function bye(){
//     console.log("bye");
// }
// message("Rohit",bye)

// 7) Higher Order Function

// A function that takes another function as
//  argument or returns a function.

// function multiplyBy(n) {
//   return function (x) {
//     return x * n;
//   };
// }

// const double = multiplyBy(2);
// console.log(double(5));//10