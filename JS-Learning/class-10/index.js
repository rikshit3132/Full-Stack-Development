const fs = require("fs");
const promise = fs.promises.readFile("./f1.txt");
// console.log(promise);//Promise {<pending>}

// case-1
// promise.then((data) =>{
//     console.log(data.toString());
// })
// promise.catch((err) => {
//   console.log("Catch: ",err);
// });
// promise.finally(() => {
//   console.log("Finally block always executes!!");
// });
// O/p-> then -->> finally


// case-2
// promise.finally(() => {
//   console.log("Finally block always executes!!");
// });
// promise.then((data) =>{
//     console.log(data.toString());
// })
// promise.catch((err) => {
//   console.log("Catch: ",err);
// });
// O/p -->> finally -->> then

// case-3
// multiple then multiple o/p of then
// multiple finally muliple o/p of finally

// promise.then((data) => {
//   console.log("then-1", data.toString());
// });
// promise.then((data) => {
//   console.log("then-2", data.toString());
// });
// promise.catch((err) => {
//   console.log("Catch: ", err);
// });
// promise.finally(() => {
//   console.log("Finally block - 1 executes!!");
// });
// promise.finally(() => {
//   console.log("Finally block - 2 executes!!");
// });

// case -4
// multiple finally 
// multiple catch -> multiple catch executes
// promise.catch((err) => {
//   console.log("Catch -1: ", err);
// });
// promise.then((data) => {
//   console.log("then-2", data.toString());
// });
// promise.catch((err) => {
//   console.log("Catch -2: ", err);
// });
// promise.finally(() => {
//   console.log("Finally block - 1 executes!!");
// });
// promise.finally(() => {
//   console.log("Finally block - 2 executes!!");
// });

// using the chainning

// promise.then((data) =>{
//     console.log(data.toString());
// }).catch((err) =>{
//     console.log(err);
// }).finally(() =>{
//     console.log("Finally executes");
// })
// O/P -> then -->> finally

// finally first
// promise.finally(() =>{
//     console.log("Finally executes");
// })
// .then((data) =>{
//     console.log(data.toString());
// }).catch((err) =>{
//     console.log(err);
// });
// O/p ->> finally -->> then


// 2 then block simultaneously - in chaining

// promise
//   .then((data) => {
//     console.log(data.toString());
//   })
//   .then((data) => {
//     console.log(data.toString());
//     // this will show the type error in chaining
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Finally executes");
//   });
//   O/P -->> f1 -->> typeError -->> finally

// resolving this problem by returning promise
promise
  .then((data) => {
    console.log(data.toString());
    // return promise;
    // same as Promise.resolve(data),
    // Promise.reject(data) and return promise
    // return data; // same as Promise.resolve(data)
    // considered as promise
    //  throw new Error("Error comes");
    // if error comes we can directly call here using above line
   
  })
  .catch((err) => {
    console.log("catch-1", err);
    // Only one catch executes in chaining
    
    return Promise.resolve(err);
    // if i return this catch-2 not going to run.
  })
  .then((data) => {
    console.log(data.toString());
    // this will show the type error in chaining
    // if iam not returning promise from first then
     throw new Error("Error comes");
  })
  .catch((err) => {
    console.log("catch-2", err);
  })
  .finally(() => {
    console.log("Finally executes");
  });