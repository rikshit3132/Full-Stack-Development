import fs from "fs";

// Reading file in sync usecase

// console.log("Reading file start");
// const data = fs.readFileSync("./f1.txt");
// console.log(data.toString());
// console.log("Reading file Done!!");

// write something in file

// console.log("Writing in file..");
// fs.writeFileSync("./f1.txt","Hello, Iam from f1. But iam updated now.")
// const ans = fs.readFileSync("./f1.txt","utf-8");
// console.log(ans);
// console.log("Writing is finished..");

// append more item into file

// console.log("Appending some text in file..");
// fs.appendFileSync("./f1.txt", "\nI am new line of f1 2nd.");
// const ans = fs.readFileSync("./f1.txt","utf-8");
// console.log(ans);
// console.log("Appending is over..");

// unlink or delete file
// console.log("Unlink the file!!");
// fs.unlinkSync("./f1.txt");
// console.log("file Unlink successfully!!");

// make/ create folder in sync
// console.log("Making folder");
// fs.mkdirSync("newFoder");
// console.log("Folder made successfully!");