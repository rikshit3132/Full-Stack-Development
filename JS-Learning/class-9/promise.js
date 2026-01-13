

const fs = require("fs");
const { reject } = require("lodash");
// get  the access to the file system, using node js.

// console.log("Before fetching f1...");
// const mypromise = fs.promises.readFile("./f1.txt","utf-8");
// meaning of utf-8 means converting file into string format.
// console.log(mypromise);// it print object, not value
// console.log("After fetching f1 !!");

// how to print value in promise ?
// mypromise.then((data) =>{
//     console.log(data);
// })
// mypromise.catch((error) => {
//   console.log(error);
// });

// then catch finally
// promise => successfull (resolved) => then
// failure (rejected) => catch
// irrespective of successfull or failure 
// finally block will execute surely
// console.log("Before reading file..");
// const mypromise = fs.promises.readFile("./f4.txt","utf-8");
// console.log(mypromise);
// console.log("After reading file!!")

//  then:- runs when promise succesful.
// mypromise.then((data) =>{
//     console.log(data);
// });
// catch:- runs when there is failure or unsuccessful
// mypromise.catch((err) =>{
//     console.log(err);
// });
// finally:- always works irrespective of catch or then 
// runs or not.
// mypromise.finally(() =>{
// console.log("Finally block always execute");
// })

// promise chaining
// console.log("Before reading file..");
// const mypromise = fs.promises.readFile("./f6.txt","utf-8");
// console.log(mypromise);
// console.log("After reading file!!")

// mypromise.then((data) =>{
//     console.log("Succesful: ",data);
// }).catch((error) =>{
//    console.log("Unsuccessful: ",error)
// }).finally(() =>{
//     console.log("Finally always executes");
// })


// reading more than one files
// and read it using promise
// and file reading should be in sync.
// like f1 - f2 -f3 - f4
// console.log("Before reading all files...");
// const promise = fs.promises.readFile("./f1.txt","utf-8");
// promise.then((data) =>{
//     console.log(data);
//     const promise2 = fs.promises.readFile("./f2.txt","utf-8");
//     promise2.then((data) =>{
//         console.log(data);
//         const promise3 = fs.promises.readFile("./f3.txt","utf-8");
//         promise3.then((data) =>{
//             console.log(data);
//             const promise4 = fs.promises.readFile("./f4.txt","utf-8");
//             promise4.then((data) =>{
//                 console.log(data);
//             }).catch((err) =>{
//                 console.log(err);
//             })
//         }).catch((err) =>{
//             console.log(err);
//         })
//     }).catch((err) =>{
//         console.log(err);
//     })
// }).catch((err) =>{
//     console.log(err);
// });
// console.log("After files readed!!!");

// Here also it's looks like very complicated
// looks again like pyramid of doom or callback hell type.
// we need to eliminate this by reducing the code and
// do it in best way.
// 1st thing we can do is, eliminate multiple catch blocks.
// one catch is enough for all the errors for the files.

// console.log("Before reading all files...");
// const promise = fs.promises.readFile("./f1.txt","utf-8");
// promise.then((data) =>{
//     console.log(data);
//     const promise2 = fs.promises.readFile("./f2.txt","utf-8");
//     promise2.then((data) =>{
//         console.log(data);
//         const promise3 = fs.promises.readFile("./f3.txt","utf-8");
//         promise3.then((data) =>{
//             console.log(data);
//             const promise4 = fs.promises.readFile("./f4.txt","utf-8");
//             promise4.then((data) =>{
//                 console.log(data);
//             }).catch((err) =>{
//                 console.log(err);
//             })
//         })
//     })
//         });
        
// console.log("After files readed!!!");
// here, we eliminated the multiple catch blocks.
// but still it looks like callback hell.
// what is the remaining option ?
// return the created promise inside curr. promise.
// console.log("Before reading all files...");
// const promise = fs.promises.readFile("./f1.txt","utf-8");
// promise.then((futureVal) =>{
//     console.log(futureVal);
//     const promise2 = fs.promises.readFile("./f2.txt","utf-8");
//     return promise2;
// })
// .then((futureVal) =>{
//     console.log(futureVal);
//     const promise3 = fs.promises.readFile("./f3.txt","utf-8");
//     return promise3;
// })
// .then((futureVal) =>{
//     console.log(futureVal);
//     const promise4 = fs.promises.readFile("./f4.txt","utf-8");
//     return promise4;
// })
// .then((futureVal) =>{
//     console.log(futureVal);
// })
// .catch((err) =>{
//     console.log(err);
// })

// Last option is creating using full pledged promise
// console.log("Reading files before...Promise used---");
// function promiseReadFile(filepath){
//     return new Promise((resolve,reject) =>{
//         fs.readFile(filepath,(err,data) =>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data.toString());
//             }
//         })
//     })
// }

// const promise1 = promiseReadFile("./f1.txt");
// promise1
//   .then((val) => {
//     console.log(val);
//     return promiseReadFile("./f2.txt");
//   })
//   .then((val) => {
//     console.log(val);
//     return promiseReadFile("./f3.txt");
//   })
//   .then((val) =>{
//     console.log(val);
//     return promiseReadFile("./f4.txt");
//   })
//   .then((val) =>{
//     console.log(val);
//   })
//   .catch((err) =>{
//     console.log(err);
//   });
//   console.log("Reading files After!!!");