const fs = require('fs');
// console.log(fs)

// reading a file in async usecase
// fs.readFile('./example.txt',(err,data) =>{
//     if(err){
//         console.log("Error",err);
//         return;
//     }
//     console.log("Data",data.toString());

// })


// writing a file in async usecase
// fs.writeFile("./example.txt","Hello,Iam example",(err) =>{
//     if(err){
//         console.log("Error:",err);
//         return;
//     }
//     console.log("data is writtten")
// })

// rename a file in async usecase
// fs.rename("./example.txt","./demo.txt",(err)=>{
//     if(err){
//         console.log("Error:",err);
//         return;
//     }
//     console.log("file name has been changed")
// })


// delete a file in async usecase
// fs.unlink("./demo.txt",(err) => {
//     if (err) {
//       console.log("Error:", err);
//       return;
//     }
//     console.log("file name has been deleted");
// })


// update a file in async 
// fs.appendFile("./example.txt"," Me added some content",(err) =>{
//     if(err){
//         console.log("Error:",err);
//         return;
//     }
//     console.log("Content is updated")
// })

// CRUD - create,read,update,delete

// getting stats of a file
// fs.stat("./example.txt",(err,stat) => {
//     if(err){
//         console.log("Error:",err);
//         return;
//     }
//     console.log("File stats:",stat)
// })


// Making directories using mkdir
// const directory_name = "./my-directory";
// fs.mkdir(directory_name,(err) => {
//     if(err){
//         console.log("Error:",err);
//         return;
//     }
//     console.log(directory_name," has been created")
// })

// removing directory
// fs.rmdir(directory_name,(err) =>{
//       if(err){
//           console.log("Error:",err);
//           return;
//       }
//       console.log(directory_name," has been removed");
// })


// checking whether particular directory exist or not
// if(fs.existsSync("./my-directory")){
//     console.log("Exists");
// }else{
//     console.log("Does'nt Exists");
// }

// async way of checking whether directory exist?

// fs.access("./my-directory",fs.constants.F_OK,(err) =>{
//     if(err){
//         console.log("Directory does'nt exist -> Error:",err);
//         return;
//     }
//     console.log("Directory exist");
// })

// path module for files/directory
const path = require('path');
const Stream = require('stream');

// getting the base file -- here -> demo.txt
const base = path.basename("/path/to/the/demo.txt");
console.log(base)
// getting the all directory till file here ->
///path/to/the
const dirName = path.dirname("/path/to/the/demo.txt");
console.log(dirName)
// get the type of base file here -> .pdf
const typeFile = path.extname("/path/to/the/search.pdf");
console.log(typeFile)

// checking whether given path is absolute or not
// if yes -> true otherwise -> false
const absolutePath = path.isAbsolute("/path/to/the/search.pdf");
console.log(absolutePath)

// absolute path -->> root to exact file
// "/path/to/the/search.pdf" example of absolute path
// relative path -->> related to the file like "./example.txt"
// relative to current folder ./




// copy the content of source file to destination file

// fs.readFile("./common/sourceFile.txt",(err,data) =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data.toString());
//     fs.writeFile("./common/destinationFile.txt",data.toString(),(err) =>{
//         if(err){
//              console.log(err);
//              return;
//         }
//         console.log("Content is written from source to destination")
//     })
// })


// using streams
// in order to handle continuos and large amount of data

const readStream = fs.createReadStream("./common/sourceFile.txt");
const writeStream = fs.createWriteStream("./common/destinationFile.txt");
readStream.pipe(writeStream)