const fs = require("fs");
const promise = fs.promises.readFile("./f2.txt","utf-8");
// promise.finally(() => {
//   console.log("Code executed - 1");
// });
// promise.then((data) =>{
//     console.log("1st then: ",data);
// });
// promise.then((data) => {
//   console.log("2nd then: ",data);
// });
// promise.catch((err) =>{
//     console.log("catch - 1: ",err);
// });
// promise.catch((err) => {
//   console.log("catch - 2: ", err);
// });
// promise.finally(() => {
//   console.log("Code executed - 2");
// });

// chaining
// every then and catch always returns promise
promise
  .then((data) => {
    console.log("then - 1: ", data);
    // return Promise.resolve(data)
    // by default it is just same as
    return data;
  })
  .finally(() => {
    console.log("finally - 1");
  })
  .catch((err) => {
    console.log("catch - 1: ", err);
    return err;
    // by default it is just same as
    // return Promise.resolve(err)
  })
  .then((err) => {
    console.log("err gets from catch - 1: ", err);
  })
  .catch((err) => {
    console.log("catch - 1: ", err);
  })
  .finally(() => {
    console.log("finally - 2");
  });