// The super keyword in JavaScript is used in 
// class-based inheritance to access the parent (base)
//  class.
// Think of it as:
// 👉 “Call or access something from my parent class”


// In inheritance, a child class often wants to:
// Reuse parent constructor
// Call parent methods
// Extend parent behavior

// 1)Super in constructor
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); // calls Animal constructor
//     this.breed = breed;
//   }
// }

// const d1 = new Dog("Tommy", "Labrador");
// console.log(d1.name, d1.breed);

// Rule (Very important)
// You MUST call super() before using this
//  in a child constructor.

// 2) Calling parent Method from Child
// class Animal {
//   makeSound() {
//     console.log("Animal makes sound");
//   }
// }

// class Dog extends Animal {
//   makeSound() {
//     super.makeSound(); // parent method
//     console.log("Dog barks");
//   }
// }

// const d = new Dog();
// d.makeSound();

// 3) super in static methods

// class Animal {
//   static category() {
//     return "Living being";
//   }
// }

// class Dog extends Animal {
//   static category() {
//     return super.category() + " - Dog";
//   }
// }

// console.log(Dog.category());


// 4) super DOES NOT work with constructor functions ❌
// function Animal(name) {
//   this.name = name;
// }

// function Dog(name) {
//   super(name); // ❌ ERROR
// }

// same thing using call and apply
// function Animal(name) {
//   this.name = name;
// }

// function Dog(name) {
//   Animal.call(this,name); // ❌ ERROR
// }
// const d1 = new Dog("hurr");
// console.log(d1.name)


// 5) Correct way to access parent variables ✅
// ✔ Use this.variable
// class Parent {
//   constructor() {
//     this.x = 10;
//   }
// }

// class Child extends Parent {
//   print() {
//     console.log(this.x); // 10
//   }
// }
// const c1 = new Child();
// c1.print();


// 6)Static variables ARE accessible via super
// super works with static properties ONLY
//  inside static methods
// super is for accessing parent methods, 
// not parent instance variables. 
// Parent variables are accessed using this.
// class Parent {
//   static count = 5;
// }

// class Child extends Parent {
//   print() {
//     console.log(this.count);   // 5
//     console.log(super.count);   // ❌ (super not allowed here)
//   }

//   static show() {
//     console.log(super.count);   // 5
//   }
// }
// const c1 = new Child();
// c1.print();
// Child.show();