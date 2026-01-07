// A polyfill is a piece of JavaScript code (or plugin) 
// that adds functionality to older browsers that 
// don’t support certain modern features.
// It “fills in” the missing functionality.
// Essentially, it’s like a patch for old browsers.


// Remember it like this:
//“If the browser doesn’t know this feature, here’s a 
// JavaScript version that behaves the same.”

// Why Do We Need Polyfills?

// Modern JavaScript (ES6/ES7/ESNext) introduces 
// new features, like:
// Array.prototype.includes()
// Promise
// fetch()
// Object.assign()
// async/await

// let arr = [1, 2, 3];
// console.log(arr.includes(2)); // ❌ Error in older browsers
// 1)
// if (!Array.prototype.includes) {
  // Add the function if it doesn't exist
// }
// Array.prototype.includes is undefined in old browsers.

// So this code says: “If this function doesn’t exist,
//  define it.”

// 2)
// How the polyfill works
// Array.prototype.includes = function (value) {
//   return this.indexOf(value) !== -1;
// };


// this refers to the array you call .includes() on.
// .indexOf(value) checks if value exists in the array:
// Returns -1 if not found.
// Returns 0 or higher if found.
// !== -1 converts it to true/false.
// So basically, it mimics .includes() behavior.

// Full code of includes
// if(!Array.prototype.includes){
// Array.prototype.includes = function(value){
//     return this.indexOf(value) !== -1;
//     }
// }
// let arr  = [2,3,5,6,7];
// console.log(arr.includes(3))

// Key Takeaways
// The polyfill adds the missing function to 
// arrays if the browser doesn’t have it.
// After adding the polyfill, you can safely 
// use .includes() even in old browsers.
// Polyfills do not replace modern browsers’ native
//  implementations; they only provide functionality 
//  where missing.