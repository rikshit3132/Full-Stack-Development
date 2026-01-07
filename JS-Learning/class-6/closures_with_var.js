// Classic Interview Trap

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }


// Why this happens (closure + var)
// Step-by-step 🧠

// var i → one variable in the 
// surrounding function (or global)
// All callbacks close over the same i
// Loop finishes → i = 3
// After 1 second, callbacks run
// They all read the same final value

// Memory picture
// Heap (Closure):
//   i = 3
// Callbacks:
//   f1 → i
//   f2 → i
//   f3 → i


// How let fixes this

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
// let is block-scoped
// New i per iteration
// New closure per iteration


// When using var, closures created 
// inside loops share the same variable 
// because var is function-scoped, 
// leading to unexpected results in asynchronous code.

// Fixing var using IIFE (OLD but IMPORTANT)
// “The IIFE creates a new scope per iteration, 
// copies the current value of i into j, and 
// the setTimeout callback forms a closure over j, 
// so each callback logs its own preserved value.”
// for (var i = 0; i < 3; i++) {
//   (function (j) {
//     setTimeout(function () {
//       console.log(j);
//     }, 1000);
//   })(i);
//    Why does this work?
// ✔ Because each IIFE creates a new
//  lexical environment
// ✔ Closure stores j, not i
// }

// Exapmle:-3
// function buildFunctions() {
// let arr = [];

//   for (var i = 0; i < 3; i++) {
//     arr.push(function () {
//       console.log(i);
//     });
//   }

//   return arr;
// }

// const fns = buildFunctions();
// fns[0]();//3
// fns[1]();//3
// fns[2]();//3

// using IIFE
// let arr =[];
// for(var i = 0; i < 3; i++){
// arr.push(
//   (function (j) {
//     return function () {
//       console.log(j);
//     };
//   })(i)
// )};
// arr[0]();//0
// arr[1]();//1
// arr[2]();//2

