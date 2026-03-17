// Inheritance in JavaScript is a core concept
// used to reuse code — one object/class can
// access properties and methods of another.
// What is Inheritance?
// Inheritance = one object gets features of another
// Parent → provides properties
// Child → uses/extends them

// Prototypal Inheritance (Core Concept)
// Every object in JS has a hidden property:
//  [[Prototype]] (accessible via __proto__)
// const parent = {
//   greet() {
//     console.log("Hello");
//   },
// };
// const child = {};
// child.__proto__ = parent
// child.greet();//hello
// child is inheriting from parent

// Using Object.create()
//  const parent = {
//   greet() {
//     console.log("Hello");
//   },
// };
// const child = Object.create(parent);
// child.greet();//hello

// function Parent(name) {
//   this.name = name;
// }
// Parent.prototype.sayHi = function () {
//   console.log("Hi " + this.name);
// };
// function Child(name, age) {
//   Parent.call(this, name); // inherit properties
//   this.age = age;
// }
// Child.prototype = Object.create(Parent.prototype);
// const c1 = new Child("Rikshit", 22);
// c1.sayHi(); //Hi Rikshit

// ES6 Class Inheritance
class Parent {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Hi", this.name);
  }
}
class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}
const c1 = new Child("Rikshit", 22);
c1.greet();//Hi Rikshit