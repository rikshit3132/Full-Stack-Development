// promise example

// const promise1 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         resolve("Iam promise1");
//     },1500);
//     reject("Iam rejected");
// });
// promise1
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// But problem when fetch defferent and large data
// because of chaining here
// for example:-
//fetchUser()
//   .then((user) => fetchPosts(user))
//   .then((posts) => fetchComments(posts))
//   .then((comments) => console.log(comments))
//   .catch((err) => console.log(err));

// async func. returns a promise
// async function printName(params) {
//     return params;
// }
// let ans = printName("Rahu");
// console.log(ans);//Promise { 'Rahu' }

// async function func() {
//     return 10;
// }
// console.log(func());// Promise { 10 }

// function hi(){
//     return Promise.resolve(100);
// }
// console.log(hi());//Promise { 100 }

// what exactly is await ?
// code without await
//  function sayHi(){
//   return Promise.resolve("Hie my name is Ashish");
// };
// console.log(sayHi());//Promise { 'Hie my name is Ashish' }
// You don’t want the box
// You want the value inside

// Enter await
// async function main() {
//   let data = await sayHi();
//   console.log(data);
// }

// main();
// Example to visualize
// console.log("Start");
// async function test() {
//   console.log("Inside function");
//   let data = await new Promise((resolve) =>
//     setTimeout(() => resolve("Done"), 2000),
//   );
//   console.log(data);
// }
// test();
// console.log("End");
// O/p -> Start ->Inside function ->End -> (wait 2 sec)-> Done

// file system Example using promise
// const fs = require("fs");

// function readTxtFile(path){
//     return new Promise((resolve,reject) =>{
//          fs.readFile(path,"utf-8",(err,data) =>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         })

//     })
// }

// const ans = readTxtFile("f2.txt");
// ans.then((data) =>{
// console.log(data);
// }).catch((err) =>{
// console.log("Error",err);
// })

// file system example using async/await
// const fs = require("fs");

// console.log("Before Reading file");
// async is used to declare promise
// and it tells that it will return promise
//  function readTxtFile(path){
// return new Promise((resolve,reject) =>{
//      fs.readFile(path,"utf-8",(err,data) =>{
//         if(err){
//             reject(err);
//         }else{
//             resolve(data);
//         }
//     })

// })
//  return fs.readFile(path,"utf-8");
// }

// await is using when to consume promise
// async function main(){
//     try{
//     const data = await readTxtFile("f1.txt");
//     console.log(data);
//     }catch(err){
//         console.log("Error exist: ",err);
//     }
// }
// main();
// console.log("After reading file");

// Questions on Async/Await
// Example-1
// async function foo() {
//   return 100;
// }
// console.log(foo());//Promise { 100 }
// async.func. returns a promise what ever values to give.
// same as Promise.resolve(100)
// async wraps any return value in Promise.resolve()

// Example-2
// async function test() {
//   let x = await 10;
//   console.log(x);//10
// }

// test();
// await Promise.resolve(10)
// await works on any value

// Example - 3

// console.log("A");

// async function test() {
//   console.log("B");
//   await Promise.resolve();
//   console.log("C");
// }

// test();
// console.log("D");
// O/P -> A -> B -> D-> C
// await moves remaining code to microtask queue

// Example-4
// async function test() {
//   console.log("1");
//   await Promise.resolve();
//   console.log("2");
// }

// setTimeout(() => console.log("3"), 0);
// test();
// console.log("4");

// o/p -> 1-> 4 -> 2-> 3
// await → microtask
// setTimeout → macrotask
//Microtasks run before macrotasks

// Example - 5
// async function test() {
//   try {
//     await Promise.reject("Failed");
//   } catch (e) {
//     console.log(e);
//   }
// }

// test();//failed
// Rejected promise = throw in await

// Example-6
// async function test() {
//   let data = Promise.resolve("Hello");
//   console.log(data);
// }

// test(); //Promise { 'Hello' }
// use await or then in order to get hello.
// Promise { 'Hello' } means the promise is already
// fulfilled with value 'Hello', but you are logging
// the promise itself, not the resolved value.

// Example-7
// Sequential vs Parallel (PERFORMANCE QUESTION)
// function delay(ms) {
//   return new Promise((res) => setTimeout(res, ms));
// }

// async function test() {
//   await delay(2000);
//   await delay(2000);
//   console.log("Done");
// }

// test();
// takes 4 seconds

// Optimized Version
// async function test() {
//   let p1 = delay(2000);
//   let p2 = delay(2000);

//   await Promise.all([p1, p2]);
//   console.log("Done");
// }
// test();
// only 2 seconds

// Example - 8
// async function test() {
//   for (let i = 1; i <= 3; i++) {
//     await Promise.resolve(i);
//     console.log(i);
// }
// O/p 1 -> 2-> 3

// Example - 9
// Parallel Loop (Correct way)
// async function test() {
//   let promises = [1,2,3].map(i => Promise.resolve(i));
//   let result = await Promise.all(promises);
//   console.log(result);
// }

// test();

// Example - 10
// async without await
// async function test() {
//   console.log("Hello");
// }

// test();
// console.log("World");
// o/p hello world

// Example - 11
// async function test() {
//   console.log("Start");
//   await new Promise((res) => setTimeout(res, 3000));
//   console.log("End");
// }

// test();
// console.log("Outside");
// o/p -> start -> outside -> end
// await pauses only the function, NOT the event loop

// Example - 12
// Top-Level await (MODERN JS)
// let data = await Promise.resolve("Top Level");
// console.log(data); // Top Level
// Allowed only in ES modules
// Not allowed in normal scripts