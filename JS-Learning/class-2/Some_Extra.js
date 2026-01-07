// Array.prototype.sum = function () {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// };

// function print() {
//   // console.log(arguments);
//   //  slice arguments from 0 to any idx
//   // using slice method with call
//   // Way-1
//   const ansArr = Array.prototype.slice.call(arguments);
//   // way-2
//   // const ansArr2 = Array.from(arguments).slice(0,arguments.length - 1);
//   console.log("Sum is: ", sum.apply(null, ansArr));

//   // console.log(ansArr2)
// }
// print(1, 2, 3, 4);

// Array.prototype.sum = function () {
//   let total = 0;
//   // console.log(arguments)
//   for (let i = 0; i < this.length; i++) {
//     total += this[i];
//   }
//   return total;
// };

// function print() {
//   const ansArr = Array.prototype.slice.call(arguments);
//   console.log("Sum is:", ansArr.sum(arguments));
// }

// print(1, 2, 3, 4);

// Example 1 — basic
// const human = {
//   fullName : "Rahul Kumar",
//   age: 35
// }
// function printNameAndAge(args1,args2){
//   console.log(`My name is ${this.fullName}  and my age is ${this.age}`);
//    console.log(`My name is ${args1}  and my age is ${args2}`);
// }
// printNameAndAge.call(human,"sunny",32)

// Example 2 — method borrowing

// const person1 = {
//   hisName : "sahil",
//   age : 21
// }
// const person2 = {
//   hisName : "Raman",
//   age : 43
// }

// function getName(name,age){
//   console.log(`My name is ${this.hisName} & my age is ${this.age}`);
//   console.log(`My name is ${name} & my age is ${age}`);
// }
// getName.call(person1,"Karan",52);
// getName.call(person2)

// Example 3 — using call with arguments (older patterns)
// this doesnt work here because this refers to window or undefined
// function sum(){
//   const arr = Array.prototype.slice.call(arguments,0,arguments.length);
//   const sum = arr.reduce((a,b) => a+b,0);
//   return sum;
// }
// let ans = sum(1,2,3,4);
// console.log(ans)

// Example-4
// const person1 = {
//   name: "Alex",
//   greet: function(message){
//     console.log(`${message}! Iam ${this.name}`);
//   }
// }
// const person2 = {
//   name : "Bob"
// }
// person1.greet.call(person2,"Hieelo")
// person1.greet.call(person1,"Hieelo")

// Example-5
// function sum(...args){
//   return args.reduce((a,b) => a + b,0);
// }
// let ans = sum(1,2,3,4,5);
// console.log(ans)

// Ecample-6
// join() method
// It joins the no of elements in array using specified char
// let arr = [1, 3, 5, 6];
// console.log(arr.join("-"));
// call in 2 objects
// const arr = [1, 2, 3];
// const obj = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
// console.log(Array.prototype.join.call(obj,"-"))
// console.log(Array.prototype.join.apply(arr,["-"]))

// Example-7
//  Using call with multiple arguments
// function product(a,b,c){
//   return a*b*c;
// }
// console.log(product.call(null,3,2,5))



// Examples of apply
// Example - 1
// function add(a,b,c){
//   return a+b+c;
// }
// console.log(add.apply(null,[10,20,30]))

// Example-2
// const arr = [5, 1, 77, 22];
// const max = Math.max.apply(null, arr);
// console.log(max); // 77

// Example-3
// function joinAll() {
//   // Use apply to pass 'arguments' to Array.prototype.join
//   return Array.prototype.join.apply(arguments, [' - ']);
// }
// console.log(joinAll('a','b','c')); 


// examples of bind
// example-1
// const module = {
//   x : 45,
//   getX(){
//     return this.x;
//   }
// }

// const bindAns = module.getX.bind(module);
// console.log(bindAns())

// example-2
// const multiply = function(a,b){
//   return a * b;
// }
// let ans =  multiply.bind(null,10);
// console.log(ans(20));

// Prototype and prototypal inheritance
let parent = {
  greet: function() {
    console.log("Hello from parent");
  }
};

let child = {
  name: "Child"
};

child.__proto__ = parent; // set the prototype

child.greet(); // Hello from parent