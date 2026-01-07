// Classes in JavaScript (ES6)
// A class is a blueprint for creating objects.
// class Person{
//     static countPersons = 0;
//     constructor(name,age){
//         this.age = age;
//         this.name = name;
//         Person.countPersons++;
//     }
//     printName(){
//         console.log("Hey","My name is ",this.name,"and my age is ",this.age);
//     }
// }
// const p1 = new Person("Rahul",28);
// const p2 = new Person("Manik", 23);
// const p3 = new Person("Rohit", 21);
// console.log(p1.name)
// console.log(p2.name)
// console.log(p3.name)
// console.log(Person.countPersons);

// same using constructor function
// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     Person.countPersons++;
// }
// Person.countPersons = 0;
// Person.prototype.printName = function(){
//     console.log("Hey", "My name is ", this.name, "and my age is ", this.age);
// }
// const p5 = new Person("Mohit",12);
// const p6 = new Person("Sachin",40);
// p5.printName();
// console.log(Person.countPersons);
