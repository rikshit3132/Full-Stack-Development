//synchronous JS
//One task at a time, in order, blocking the next task.
// Note:-JS waits for the current line to 
// finish before moving forward.

// Real Example
// You are in a single-person ticket counter:
// Person 1 → done
// Person 2 → done
// Person 3 → done
// My-Turn -> processing...
// No skipping. No parallel work.

// Note:- JS is sync. by default.
// Executes one line at a time in serial manner.
// console.log("A");
// console.log("B");
// console.log("C");
// A → B → C
// Each line blocks the next line until finished.

// what blocks meaning here?
// JS cannot do anything else until 
// the current task finishes.
// console.log("Start");

// for (let i = 0; i < 100000; i++) {
//     console.log("In a loop: ",i);
// }
// this is the large task to do.
// takes much time to execute.
// console.log("End");
// It means that in sync. JS even the short task 
// have to wait for long time if long task comes before it.
// It is not the optimized approach.
// What happens?
// -> Browser freezes
// -> UI hangs
// -> Buttons don’t respond
// Start → (long loop) → End
// This is the problem with synchronous JS

// Js is Single Threaded.why?

// One call stack
// One execution path
// One instruction at a time
// JavaScript Engine
// ┌───────────────┐
// │  Call Stack   │  ← Only ONE
// └───────────────┘

// what is Aync. JS?
// Asynchronous code allows JS to start a 
// task and continue executing other 
// code without waiting for it to finish.

// -> JS does not wait
// -> JS does not block
// -> JS comes back later

// Example of asyc. JS(setTimeOut()) ?
// console.log("start");
// setTimeout(() =>{
//     console.log("Iam at setTimeOut");
// },2000)
// console.log("End");
// O/P:- start-->>End-->>Iam at setTimeOut
// setTimeout is asynchronous.

// How Aync. JS works behind the seen?
// Main components:-
// -> Call Stack
// -> Browser/Web APIs
// -> Callback Queue
// -> Event Loop

// step-1
// console.log("Start");

// setTimeout(() => {
//   console.log("Timer");
// }, 0);

// console.log("End");
// works same as async.setTimeout() 
// did'nt run immidiately.

// Step 2: Browser API
// Timer runs in background
// JS continues execution
// Browser API → Timer running

// Step 3: Callback Queue
// After timer finishes:
// Callback Queue: [ console.log("Timer") ]

// Step 4: Event Loop
// Event loop checks:
// Is call stack empty? 
// Move callback to stack
// Final Output
// Start
// End
// Timer


// Asynchronous code never interrupts synchronous code
// It waits until:
// Call stack is EMPTY

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// for (let i = 0; i < 1e9; i++) {}

// console.log("C");
// A -> C -> B
