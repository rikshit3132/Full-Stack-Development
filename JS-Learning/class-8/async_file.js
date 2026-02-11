import { error } from "console";
import fs from "fs";

// 1) reading files
// console.log("Reading file f1");
// fs.readFile("./f2.txt","utf-8",(error,data) =>{
//     if(error){
//         console.log("Hey,Iam error: ",error);
//     }
//     console.log(data);
// });
// console.log("Reading file f1 done!!");

// 2) write into file
// console.log("Writing in file f1!!");
// fs.writeFile("./f1.txt","Hie my name is f1",(err)=>{
//     if(err){
//         console.log("Iam error:",err);
//         return;
//     }
// });
// fs.readFile("./f1.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("Iam Error: ",err);
//         return;
//     }
//     console.log(data);
// });
// console.log("File Writing done!!");

// 3) make folder
// console.log("Making directory!!");
// fs.mkdir("newFolder",(err) =>{
//     if(err) return;
// });
// fs.readFile("./f1.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("Iam Error: ",err);
//         return;
//     }
//     console.log(data);
// });
// console.log("Folder making done!!");

// 4) append text into file
// console.log("Appending some data into file!!");
// fs.appendFile("./f1.txt","\nHello iam line 2",(err) =>{
//     if(err){
//         return;
//     }
// });
// fs.readFile("./f1.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("Iam Error: ",err);
//         return;
//     }
//     console.log(data);
// });
// console.log("File appending done!!");

// 5) Delete file
// console.log("Delete file f1");
// fs.unlink("./f1.txt",(err)=>{
//     if(err){
//         return;
//     }
// });
// fs.readFile("./f1.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("Iam Error: ",err);
//         return;
//     }
//     console.log(data);
// });
// console.log("File deletion done!!");