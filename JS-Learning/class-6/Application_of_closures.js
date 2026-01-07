//Data Hiding / Encapsulation (VERY IMPORTANT)
// function counter() {
//   let count = 0; // private

//   return {
//     increment() {
//       count++;
//       return count;
//     },
//     decrement() {
//       count--;
//       return count;
//     }
//   };
// }

// const c = counter();
// c.increment(); // 1
// c.increment(); // 2
// c.decrement(); // 1
// count cannot be accessed directly
// Used in modules, libraries;


// Currying & Partial Application
// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// const add10 = add(10);
// add10(5); // 15

// Callbacks & Async Code
// function fetchData(url) {
//   let startTime = Date.now();

//   setTimeout(function () {
//     console.log("Time taken:", Date.now() - startTime);
//   }, 1000);
// }

// fetchData();

// Event Handlers (DOM)
// function attachHandler(id) {
//   let count = 0;

//   document.getElementById(id).addEventListener("click", function () {
//     count++;
//     console.log(count);
//   });
// }


// Memoization (Performance Optimization)
// function memoize(fn) {
//   const cache = {};

//   return function (x) {
//     if (cache[x]) return cache[x];
//     cache[x] = fn(x);
//     return cache[x];
//   };
// }

// const square = memoize(n => n * n);
// square(5); // calculated
// square(5); // cached

