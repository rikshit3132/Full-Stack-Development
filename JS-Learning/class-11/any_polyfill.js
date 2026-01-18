// any:- is the method,which returns only the values
// that has the resolve case not rejected one
// means the fastest in selected case.

const p1 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        reject("Iam from P1");
    },4000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Iam from P2");
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Iam from P3");
  }, 1000);
});
// My any func.
Promise.myAny = (promise) =>{
    return new Promise((resolve,reject) =>{
        let remaining = promise.length;
        const rejectedResults = {
          AggregateError: "All promises were rejected",
          errors: [],
        };
        
        for(let i = 0; i < promise.length; i++){
            Promise.resolve(promise[i]).then((data) =>{
                resolve(data);
            }).catch((error) =>{
                rejectedResults.errors[i] = error;
                remaining--;
                if(remaining === 0){
                    reject(rejectedResults);
                }
            })
        }
    })
}
// consume data
const myAnsAny = Promise.myAny([p1, p2, p3]);
myAnsAny.then((data) =>{
console.log("My any: ",data);
})
.catch((error) =>{
console.log(error);
}).finally(() =>{
    console.log("Final definitely executes!!");
})

// Inbuild any works?
const any = Promise.any([p1,p2,p3]);
any.then((data) =>{
    console.log("Inbuild: ",data);
})
.catch((error) =>{
    console.log(error);
})
