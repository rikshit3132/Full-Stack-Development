// Currying is a technique of transforming a 
// function with multiple arguments into 
// a sequence of functions, 
// each taking a single argument.

// Each inner function remembers the
//  previous arguments via closures.
// This allows partial application of functions.

// “Function currying is defined as
//  the calling of all the functions one 
// inside the other and call it in one line
//  by passing arguments to each of the parentheses.

// Function currying is a technique 
// of transforming a function that takes 
// multiple arguments into a sequence of 
// nested single-argument functions, 
// where each inner function remembers 
// previous arguments using closures,
//  allowing the function to be called in one line.
// example-1
// function sum(a){
//     return function(b){
//         return a + b;
//     }
// }
// const resSum = sum(10);
// const ans = resSum(20);
// console.log(ans);


// Example - 2
// Multi-argument Currying
// function multiply(num1){
//     return function(num2){
//         return function(num3){
//             return num1*num2*num3;
//         }
//     }
// }
// const ans = multiply(10)(20)(11);
// This is the function currying

// console.log(ans);

// Example-3
// function outer(a){
//     return function(b){
//         return function(){
//             return a * b;
//         }
//     }
// }
// const ans = outer(10)(2)();//20
// console.log(ans);

// Example-4
// function greet(greeting) {
//   return function(name) {
//     console.log(`${greeting}, ${name}!`);
//   };
// }

// const sayHello = greet("Hello");
// sayHello("Risku"); // Hello, Risku!
// sayHello("Alice"); // Hello, Alice!
// greet("Hello")("Rishu");//same as previous lines


// Key Points for Interviews 🔑

// Currying = splitting arguments into 
// single-argument functions

// Closure = remembers previous arguments/state

// Every curried function uses closure

// Not every closure is currying (important distinction)

// Memory Model (Internals)
// multiply(2)(3)(4)


// Heap stores:

// Closure1: a=2
// Closure2: a=2, b=3
// Closure3: a=2, b=3, c=?  → executes calculation
// Each closure preserves variables from outer functions
// Memory is live until execution is complete


// Important questions
// Que-1

// Sum Function with Unknown Number of Calls
// function sum(a) {
//   let total = a;

//   function inner(b) {
//     if (b === undefined) return total; // final call with ()
//     total += b;
//     return inner; // return inner function to chain
//   }

//   return inner;
// }

// console.log(sum(1)(2)(3)());  // 6
// console.log(sum(5)(10)(-2)()); // 13


// Dynamic Currying with Multiple Arguments
// multiply(2)(3)(4); // 24
// multiply(5)(1)(0); // 0

// function multiply(a){
//     return function(b){
//         return function(c){
//             return a*b*c;
//         }
//     }
// }
// const ans1 = multiply(2)(3)(4);//24
// console.log(ans1)
// const ans2 = multiply(5)(1)(0);//0
// console.log(ans2)


//Curried Counter Function
// console.log(counter(5)()); 
// function counter(para){
//     let count = 0;
//     return function(){
//         count += para;
//         return count;
//     }
// }
// console.log(counter(5)());//5
// console.log(counter(8)());//8
// console.log(counter(12)());//12

// changes in previous example
// const counter = createCounter();
// console.log(counter(5)()); // 5
// console.log(counter(3)()); // 8
// console.log(counter(2)()); // 10
// function createCounter(){
//     let count = 0; 
//     return function counter(para){
//         count += para;
//         return function(){
//             return count;
//         }
//     }
// }
// const counter = createCounter();
// console.log(counter(5)()); // 5