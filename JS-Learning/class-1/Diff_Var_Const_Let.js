// var variable

//    1) scope of var variable are global and functional scoped
// var greeter = "hey hi";

//     function newFunction() {
//         console.log(greeter)
//         var greeter = "hello";
//         {
//             var greeter = "Hiie"
//         }
// console.log(greeter);
// console.log(greeter)
// }
// newFunction();
// console.log(greeter)

// 2)redeclare and updation:-var can be
//  redeclare and updated in future
// var fName = "sundar";
// fName = "Rahul";
// console.log(fName)
// var fName = "Manish"
// console.log(fName)

// 3) Hoisting:- Means variables and functions 
// declaration is moved upwards before code execution.

// console.log(message);
// var message = "Hie,Good morning";

// let variables:-1) scope of let variable are 
// block and functional scoped

// let fruit = "Mango";
// console.log(fruit);
// function printFruit() {
//   let fruit = "Papaya";
//   console.log(fruit);
// }
// printFruit();
// console.log(fruit);

// var standard = 3;
// function sayHi(){
//     if(standard > 3){
//         console.log(standard)
//         var standard = 9
//     }
//     console.log(standard)
// }
// sayHi();
// console.log(standard)

// const hello = "Hi My name is ABC";
// function printHello() {
//   console.log(hello);
//   hello = "Hiee";
//   if (hello) {
//     console.log(1);
//   }
// }
// printHello();
// console.log(hello);


// const message = "hi,come here"
// function printMsg(){
//     var message = "Hahaha"
//     console.log(message)
//     if(message){
//         console.log(message)
//         var message = "Hieee"
//     }
//     console.log(message)
// }
// printMsg()
// console.log(message)

let fruit = "Mango"
console.log(fruit)
function printFruit(){
    let fruit = "Apple"
    console.log(fruit)
}
printFruit();
console.log(fruit)

