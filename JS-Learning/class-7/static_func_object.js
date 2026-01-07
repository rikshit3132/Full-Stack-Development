// A static function:
// Is called using the class or object name
// Cannot be accessed using this on an instance
// Is mainly used for utility/helper logic

const { multiply } = require("lodash");

// 1) static method in ES6 classes

// class Student{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     static greet(){
//         console.log("my name is ",this.name);
//     }
// }
// const s1 = new Student("Manik",12);
// Student.greet();//My name is Student.
// static refers to the class not the obj itself.

// class MathUtils {
//   static add(a, b) {
//     return a + b;
//   }

//   static square(n) {
//     return n * n;
//   }
// }

// const m1 = new MathUtils();
// const add1 = m1.add(1,2);//m1.add is not a function(TypeError)
//  const ans = MathUtils.add(10,20);
//  console.log(ans)//30
//  const ans2 = MathUtils.square(13);
//  console.log(ans2)//169

// The static func refers to the classes 
// not the instances created.


// 2) Static Methods Using Constructor Function

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// Person.display = function(){
//     console.log("My name is ", this.name)
// }

// const p1 = new Person("Kamal",32);
// p1.display();//p1.display is not a function(TypeError)
// Here also calling using the instance of person.
// so gives type Error
// Person.display();//My name is Person

// check whether the typed name length is > 3 or not ?
// function User(name){
// this.name = name;
// }
// User.isNameLenValid = function(name){
//     if(name == undefined){
//         return false;
//     }
//     return name.length > 2;
// }
// const ans = User.isNameLenValid("shshs");
// console.log(ans);
// const ans2 = new User("Krish");
// console.log(ans2.isNameLenValid());//TypeError: ans2.isNameLenValid is not a function


// 3) Static Functions on Plain Objects
// const user = {
//     add(a,b){
//         return a + b;
//     },
//     multiply(a,b){
//         return a*b;
//     }
// }
// console.log(user.add(12,13));
// console.log(user.multiply(12, 13));

// 4 static method + inheritance

// class Animal{
//     static count = 0;
//     constructor(type){
//         this.type = type;
//         Animal.count++;
//     }
//     static sound(name){
//         console.log("This aminal name is",name);
//     }
// }
// class Dog extends Animal{
//     constructor(type){
//         super(type);
//     }
//     static sound(name){
//         console.log("This",name,"is barking")
//     }
// }
// const d1 = new Dog("Dog1");
// const d2 = new Dog("Dog2");
// d1.sound("Jam");
// Dog.sound("Jack")
// Dog.sound("Jee")
// console.log(Animal.count)

// 5) Static vs Instance Methods (Interview Favorite)
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log("Hi", this.name);
//   }

//   static isPerson(obj) {
//     return obj instanceof Person;//is obj object of Person
//   }
// }

// const p = new Person("Rahul");
// p.greet();//
// p.isPerson(p);//TypeError: p.isPerson is not a function
// console.log(Person.isPerson(p));//true

// Built-in Static Methods
// Math.max(10, 20);
// Object.keys(obj);
// Array.isArray(arr);
// JSON.parse(str);
// Date.now();

// Can static methods use this?
// Yes, but this refers to the class, not instance

// class Test {
//      name = "Sam"
//   static show(name) {
//     console.log(this.name);
//   }
// }

// Test.show("Manik"); // Test


// class Test {
//     static name = "Sam"
//   static show(name) {
//     console.log(this.name);
//   }
// }

// Test.show("Manik"); // Sam