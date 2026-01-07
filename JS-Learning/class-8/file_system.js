// JavaScript runs in two main environments:
// Browser :- NO direct file system access 
// (for security reasons)
// Node.js:-yes,full file system access
//  using built-in modules.

// why browser unable to access ?
// Example:-
// readFile("C:/Users/passwords.txt");
// Any website could:
// Read your personal files
// Steal data
// Access system files

// fs is a Node.js built-in module that allows:
// reading files
// writing files
// deleting files
// creating folders

// const fs = require("fs");
// Node.js provides TWO versions for almost every fs operation:
// Synchronous-- >> readFileSync();
// Asynchronous -- >> readFile()

// 1) Synchronous file reader
// const fs = require("fs");
// console.log("Start");
// const data = fs.readFileSync("./f1.txt", "utf8");
// console.log(data);
// console.log("End");
// O/P -> start -> Hello my name pikachu.(f1.txt)->End

// Async file reader
// const fs = require("fs");
// console.log("start");
//  fs.readFile("f1.txt", "utf8",(err,data) => {
//     if(err){
//         console.log("Error Msg: ",err);
//         return;
//     }
//      console.log(data);
//  });

//  console.log("End");
// O/P -> start -> End -> Hello my name pikachu.(f1.txt).