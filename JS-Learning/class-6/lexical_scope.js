//Lexical scope is the chain of scopes 
// determined at the time a function is defined,
//  starting from the function’s own scope, through 
// its outer (parent) scopes, up to the global scope.

// Lexical scope is the scope chain determined 
// by the location where a function is defined, 
// extending through its parent scopes up 
// to the global scope.

//Lexical scope means where a variable is 
// written in the code 
// decides where it can be accessed.
//Every closure uses lexical scope, but not 
// every lexical scope creates a closure.

// Lexical Scope (NO closure)

// let a = 10;

// function outer() {
//   let b = 20;

//   function inner() {
//     console.log(a, b);//10 20
//   }

//   inner();
// }

// outer();


// Memory difference
// Lexical Scope
// outer() running
//  └─ inner() uses x
// outer() ends
//  ❌ nothing preserved

// Closure
// outer() ends
// inner() still alive
// x preserved in memory