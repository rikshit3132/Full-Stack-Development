// function Person(){

// }
// console.log(Person.prototype)

// Questions

// function A() {}
// A.prototype.x = 10;

// const obj = new A();

// console.log(obj.x);

function A() {}
const obj = new A();

A.prototype.x = 20;

console.log(obj.x);