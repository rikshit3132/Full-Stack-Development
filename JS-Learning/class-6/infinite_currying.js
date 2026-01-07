// Infinite currying allows a function 
// to be called any number of times with 
// single arguments and produces a final 
// result when a terminating condition is met.

// Core idea behind infinite currying

// It works because of closures:
// One variable is stored in closure (e.g. total)
// Every function call updates that variable
// The same function is returned again and again
// Final empty call () tells JS: “stop and return result”

// function sum(a) {
//   let total = a;

//   function inner(b) {
//     if (b === undefined) return total; // termination
//     total += b;
//     return inner; // return same function
//   }

//   return inner;
// }
// const res = sum(10)(20)();
// console.log(res)

// Interview Trap #1: Why return inner?
// return inner;
// Because:
// We want chaining
// Same function keeps getting called
// Same closure keeps state
// If you return a new function, state breaks.

// 6Interview Trap #2: Why not recursion?
// This is not recursion:
// No new stack frames repeatedly
// Same function reference reused
// State lives in closure, not stack


// Infinite currying WITHOUT empty ()
// Another popular interview variant:
// sum(1)(2)(3).valueOf() // 6

// function sum(a) {
//   let total = a;

//   function inner(b) {
//     total += b;
//     return inner; 
//   }
// inner.valueOf = function(){
//     return total;
// }
//   return inner;
// }
// const res = sum(112)(120).valueOf();
// console.log(res);