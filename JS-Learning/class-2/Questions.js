// call,apply,bind Examples




// Print full name using call method
// let person = {
//   first: "Amit",
//   last: "Sharma"
// };

// function printName() {
//   console.log(this.first + " " + this.last);
// }
// printName.call(person);

// Pass arguments using call
// function greet(message) {
//   console.log(message + ", " + this.name);
// }

// let user = { name: "Rohit" };

// greet.call(user,"Hello!!")

// Use apply to find max

// let arr = [2, 8, 4, 6, 10];
// let ans = Math.max.apply(null,arr);
// console.log(7000)

// use apply to find sum
// Array.sum.prototype = function(arr){
//   let sum = 0;
//   for(let i = 0; i < this.length; i++){
//     sum += this[i];
//   }
//   return sum;
// }
// let arr = [2, 8, 4, 6, 10];
// let ans = Array.prototype.sum.apply(arr);
// console.log(ans)

// Using bind to set permanent this
// let obj = {
//   x: 10,
//   getX: function () {
//     console.log(this.x);
//   }
// }
// let newObj = {
//     x : 50
// }
// const getAns = obj.getX.bind(newObj);
// // console.log(getAns(50))
// getAns();

// Borrow method using call
// let student = {
//   name: "Rahul",
//   print: function () {
//     console.log("Student: " + this.name);
//   }
// };

// let teacher = {
//   name: "Kiran"
// };


// Use call so that teacher uses the student’s 
// print method.
// student.print.call(teacher);

// Apply with multiple parameters
// function area(a, b,c) {
//   return a * c;
// }

// let arr = [10,20,30];
// const ans = area.apply(null,arr);//200
// console.log(ans)
// Use apply to pass [10, 20] 
// and get the area.

// Bind inside setTimeout
// let game = {
//   score: 100,
//   showScore() {
//     console.log(this.score);
//   }
// };


//  Use bind so that after 2 seconds
// showScore prints 100.

// setTimeout(game.showScore.bind(game), 2000);


// Convert arguments object to array using call
// function convert() {
//   // convert arguments → array using call
//   let ansArr = Array.prototype.slice.call(arguments
//   );
//   return ansArr;
// }
// let ans = convert(1, 2, 3, 4);
// console.log(ans);

//  Array.prototype.slice.call(arguments)



// ADVANCED QUESTIONS (INTERVIEW LEVEL)
// 9️⃣ Fix this bug using bind
// let counter = {
//   value: 0,
//   increment() {
//     this.value++;
//     console.log(this.value);
//   }
// };

// let bindAns = counter.increment.bind(counter);
// let bindAns2 = counter.increment.bind(counter);
// let bindAns3 = counter.increment.bind(counter);
// let bindAns4 = counter.increment.bind(counter);
// bindAns();
// bindAns2();
// bindAns3();
// bindAns4();


// 👉 Use bind to fix this so it works correctly.



// Borrow array methods using call
// let obj = {
//   0: "a",
//   1: "b",
//   2: "c",
//   length: 3
// };

// let ans = Array.prototype.join.call(obj,'-');
// console.log(ans)
//  Use call so that join prints "a-b-c".


// let numbers = [1, 2, 3];

// function customMap(callback) {
//   // use this inside callback
//   let arrAns = Array.prototype.map.call(this,callback);
//   return arrAns;
// }
// let ans = customMap.call(numbers,x => x * 2);
// console.log(ans)
// Let customMap work like Array.prototype.map 
// using call.

// Using apply to merge arrays

// let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];
// let ans = Array.prototype.push.apply(arr1,arr2);
// console.log(arr1)


// Reusable method borrowing
// let employee = {
//   details() {
//     console.log(this.name + " | " + this.age);
//   }
// };

// let e1 = { name: "Ravi", age: 22 };
// let e2 = { name: "Megha", age: 25 };
// employee.details.call(e1);
// employee.details.call(e2);

//  Use call to borrow details for both objects.

// Bind partially applied functions
// function multiply(a, b) {
//   return a * b;
// }

// let mulAns = multiply.bind(null,10);
// let sol = mulAns(20);
// console.log(sol)
//  Use bind to create a function double 
// that always multiplies by 2.