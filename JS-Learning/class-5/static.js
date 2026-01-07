// In JavaScript, static variables and static
//  methods belong to the class / constructor 
// itself, not to its objects (instances).
// static → belongs to class
// no static → belongs to object

// 1) In conctructor function
// Static variables
// function Counter(name){
//     Counter.persons++;
//     console.log("The count of persons are:",Counter.persons);
// }
// Counter.persons = 0;
// const d1 = new Counter("Rohan");
// console.log(Counter.persons);

// static methods

// function Person(name){
//     this.name = name;
//     Person.count++;
// }
// Person.count = 0;
// Person.sayHi = function(name){
// console.log(`Hello my name is:${name}`)
// }
// const p1 = new Person("Raman");
// Person.sayHi("Rahul");
// console.log(Person.count);
// Person.sayHi("rahul");

// static methods inside class
class User{
    static count = 0;
    constructor(name,age){
        this.name = name;
        this.age = age;
        User.count++;
    }
    static sayHi(name,age){
        console.log(`Hello, My name is ${name} and my age is ${age}`);
    }
}
const u1 = new User("Manik",30);
User.sayHi("abx",12);