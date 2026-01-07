//  Question - 1

// var a = 10;

// function fn() {
//   console.log("I am fn"); // 1

//   function inner() {
//     console.log("I am inner"); // 2
//   }
//   inner();
//   var c = 10;
//   console.log(c);//10
// }

// fn();

// Question - 2
// function real() {
//   console.log("I am real. Always run me");
// }
// function real() {
//   console.log("No I am real one ");
// }
// real();
// function real() {
//   console.log("You both are wasted");
// }

// Question-3
// var a = 10;
// console.log(a);//10

// function fn() {
//   let a = 20;
//   console.log(a);//20
//   a++;
//   console.log(a);//21
//   if (a) {
//     let a = 30;
//     a++;
//     console.log(a);//31
//   }
//   console.log(a);//31
// }
// fn();
// console.log(a);//10



// Question - 4

let fruits = "apple";
console.log(fruits); // apple
{
    console.log(fruits);
  let fruits;
  console.log(fruits);
  fruits = "orange";
  {
    console.log(fruits);
    let fruits;
  }
  console.log(fruits);
}
console.log(fruits);