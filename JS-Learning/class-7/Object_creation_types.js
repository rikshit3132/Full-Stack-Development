// Types of object creations
// 1) Object Literal
// This is the simplest way of creating an object.
// If i want to only create a single object 
// or static object,i use object literal for that.
// Verbose code → longer, more explicit, more lines

// const user = {
//     name: "Risku",
//     age: 22,
//     greet : function(){
//         console.log("Hello, my name is: ",this.name);
//     }
// }
// user.greet();

// Pros
// Simple & readable
// Fast to write
// Most commonly used
// Used when you need single or static objects
//  Cons
// Not good for creating many similar objects

// 2) Using new Object()
// Internally works same as object literals.
// verbose code:- meaning more lines needed to elaborate.
// As compared to obj literal.
// no extra benefits as compared to literals.
// const student = new Object();
// student.name = "Risku";
// student.age = 22;
// student.greet = function(){
//     console.log("Hello, My name is ",this.name);
// }
// console.log(student.age);
// student.greet();

// 3)Constructor functions

// It helps us to create multiple objects.
// It creates a new object, binds this, and returns it.
// function Student(name,age){
// this.name = name;
// this.age = age;
// }
// const s1 = new Student("Rohit",24);
// console.log(s1.name);// Rohit
// console.log(s1.age);// 24

// 4) Object.create()
// It is prototype based method used to 
// create similar object.
// Full control over prototype
// Memory efficient

// const user = {
//     name : "Risku",
//     age : 43,
//     greet : function(){
//         console.log("Hello, my name is ",this.name)
//     }
// }
// const newObj = Object.create(user);
// creates an empty object
// console.log(newObj);//{}
// newObj.name = "Manik";
// newObj.age = 12;
// console.log(newObj);// { name: 'Manik', age: 12 }

// 5) class based object ceation
// ES6 class based object creation
// class User {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log("Hello my name is",this.name);
//     }
// }

// const user1 = new User("Rahul",30);
// console.log(typeof user1)//object
// console.log(user1);//{ name: 'Rahul', age: 30 }
// user1.greet();//Hello my name is Rahul

// Classes are just syntactic sugar over
//  constructor + prototype
// Pros
// Clean
// Readable
// Industry standard

// 6) using factory Function
// function createUser(name,age){
//     return{
//         name,
//         age,
//         greet(){
//             console.log("Hello, my name is",this.name);
//         }
//     }
// }

//  const user1 = createUser("Jam", 31);
//  console.log(user1);
//  user1.greet()

//  No new
// Easy to understand
// Avoids this confusion

// Cons
// Methods recreated for each object

// 7) using Object.assign({},obj)
// const obj = {
//     name :"Kapil",
//     age : 21,
//     greet : function(){
//         console.log("Hello my name is",this.name);
//     }
// }
// const newObj = Object.assign({},obj);
// It will make the same shallow copy of an current obj.
// with all same parameters of obj.
// newObj.name = "Suman";
// newObj.age = 30;
// console.log(newObj)//{ name: 'Suman', 
// age: 30, greet: [Function: greet] }
// newObj.greet();//Hello my name is Suman

// 8) using spread operator
// const star = {
//     name : "John",
//     age : 22,
//     address: {
//         city : "Shimla",
//         pincode : 12345
//     },
//     isStudent : true
// }

// const newStar = {...star}//shallow clone
// console.log(star)
// console.log(newStar)
// newStar.address.city = "Chandigarh";
// console.log(star.address.city);//Chandigarh
// console.log(newStar.address.city);//Chandigarh