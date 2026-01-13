// getting the file f1
// const { error } = require("console");
// const { resolve } = require("dns");
const fs = require("fs");
// const { reject } = require("lodash");
// console.log("Before fetching file...")
// fs.readFile("./f1.txt",(error,data) =>{
//     if(error){
//         console.log("Error: ",error);
//         return;
//     }
//     console.log(data.toString());
// });

// fs.readFile("./f2.txt", (error, data) => {
//   if (error) {
//     console.log("Error: ", error);
//     return;
//   }
//   console.log(data.toString());
// });

// fs.readFile("./f3.txt", (error, data) => {
//   if (error) {
//     console.log("Error: ", error);
//     return;
//   }
//   console.log(data.toString());
// });

// fs.readFile("./f4.txt", (error, data) => {
//   if (error) {
//     console.log("Error: ", error);
//     return;
//   }
//   console.log(data.toString());
// });
// console.log("After fetching file !!!");

// Problem here is that the output is not in sync. way
// output mismatched everytime i run code.

// how to make it in sync?
// f1 -> f2 -> f3 -> f4
// One approach is put readfile one inside other.
// console.log("Before fetching file...");
// fs.readFile("./f1.txt", (error, data) => {
//   if (error) {
//     console.log("Error: ", error);
//     return;
//   }
//   console.log(data.toString());
//   fs.readFile("./f2.txt", (error, data) => {
//     if (error) {
//       console.log("Error: ", error);
//       return;
//     }
//     console.log(data.toString());
//     fs.readFile("./f3.txt", (error, data) => {
//       if (error) {
//         console.log("Error: ", error);
//         return;
//       }
//       console.log(data.toString());
//       fs.readFile("./f4.txt", (error, data) => {
//         if (error) {
//           console.log("Error: ", error);
//           return;
//         }
//         console.log(data.toString());
//       });
//     });
//   });
// });
// console.log("After fetching file !!!");

// Now it's in sync 
// but there is problem of callback hell or pyramid of doom.
// structure of code mess up.
// o/p before-> after->f1 -> f2 -> f3 -> f4
// here output in sync , but problem of callback hell.
// than the concept of promises comes into action.

// put in the call back functions
// what fs.readfile() has in parameters ?
// it has 1) file name
// 2) file type like utf-8 and ascii and all
// 3) call back fun
console.log("Before.");
function cb1(err,data){
    if(err){
      console.log(err);
      return;
    }
     console.log(data);
    fs.readFile("./f2.txt", "utf-8", cb2);
  }
  function cb2(err, data) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
    fs.readFile("./f3.txt", "utf-8", cb3);
  }
  function cb3(err, data) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
    fs.readFile("./f4.txt", "utf-8", cb4);
  }
  function cb4(err, data) {
    if (err) {
      console.log(err);
      return;
    }
     console.log(data);
  }
fs.readFile("./f1.txt","utf-8",cb1);
console.log("After");