// A closure is created when a function is defined 
// inside another function and the inner function
//  remembers and can access variables from 
// its outer (lexical) scope, 
// even after the outer function has finished execution.

// Function + its lexical scope = Closure
// Closures keep live references, not copies
// Closures capture variables based on 
// lexical scope, not call location, 
// and they capture live references, not values.


// How lexical scope works without closures:-

// var num = 10;
// function a(){
// var num = 40;
// console.log(num);//40
//It goes like lexical scope 
// firstly check the num value here in its body
// if present print it
// otherwise go where it is defined
// here it is defined in gec.
// b();
// }
// function b(){
//     console.log(num);//10
    // here b does'nt have its own value of num
    // it get the value from where it is defined
    // as it is defined in GEC and it get value from
    // there and print value of num.
// }
// a();

// GEC --->> a() -->> b() 
//  b checks value in gec not in a because b is defined
// in GEC.   

// How closures Work?
// b is inside a and b makes closure with a
// always remember inner fun makes
// closures with outer one
// var num = 20;
// function a(){
//     var num = 30;
//     console.log(num);
//     const b = function(){
//         console.log(num);
//     }
//     b();
// }
// a();

// Note:- In closures and normal fun we have to look 
// where fun is defined, than that fun will be access
// the value from that lexical scope to GEC scope.

// Example 1
// function counter(){
//     var count = 0;
//     function inner(){
//         count++;
//         return count;
//     }
//     return inner;
// }
// const outerfunc = counter();
// console.log(outerfunc());//1
// console.log(outerfunc());//2
// console.log(outerfunc());//3
// const outerfunc1 = counter();
// console.log(outerfunc1());//1


// Example 2;
// function(y) is making closures with adder fun taking 
// value of x from adder
// function adder(x){
//     return function(y){
//         return x + y;
//     }
// }
// const res = adder(10);
// const finalRes = res(5);
// console.log(finalRes); //15
// const finalRes1 = res(19);
// console.log(finalRes1);//29


// Example-3 Closures with setTimeout
// var is function-scoped
// One shared i
// Closure remembers the same variable
// Closures remember variables, not values.
// With var, there is only one variable, 
// so all closures print the same value.
// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);//o/p 4 4 4
//   }, 1000);
// }

// how to imporove this solution
// using let because let is blocked scoped
// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i); //o/p 1 2 3
//   }, 1000);
// }

// Example-4 data  hiding example

// function counter() {
//   let count = 0;

//   return {
//     increment() {
//       count++;
//       console.log(count);
//     },
//     decrement() {
//       count--;
//       console.log(count);
//     }
//   };
// }

// const c = counter();
// c.increment(); // 1
// c.increment(); // 2
// c.decrement(); // 1


// Example-5
// function test() {
//   let x = 5;
//   return function () {
//     console.log(x);
//   };
// }

// test()();//5
// If no arguments are being split across function calls, 
// it is NOT currying.
// Ask yourself:
// ❓ “Am I passing arguments step-by-step?”
// ✅ Yes → currying
// ❌ No → closure (or higher-order function)


// Working of closures
// Function defined → lexical scope fixed
// Function escapes → outer scope preserved
// Preserved scope → closure
// Function called later → uses preserved scope