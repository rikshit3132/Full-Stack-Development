// allSettled:- It will retuns the status of all promises
// irrespective of resolve or rejected as array of objects.

const promise1 = Promise.resolve(10);
const promise2 = Promise.reject(20);
const promise3 = Promise.resolve(30);
const promise4 = 40;

// This is my created allsettled method,
// takes arr of promise and returns the corresponding
// resolve and reject with value
Promise.myAllSettled = (promise) =>{
    return new Promise((resolve,reject) =>{
        let arr = [];
        let remaining = promise.length;
        if (remaining === 0) return resolve([]);
        for (let i = 0; i < promise.length; i++) {
          Promise.resolve(promise[i])
            .then((data) => {
              arr[i] = { status: "fullfilled", value: data };
            })
            .catch((err) => {
              arr[i] = { status: "rejected", reason: err };
            }).finally(() =>{
              remaining--;
              if(remaining === 0){
                resolve(arr);
              }
            });
        }
        
    })
}

// consuming data from myAllSettled method,
const ans = Promise.myAllSettled([promise1,promise2,promise3,promise4]);
ans.then((data)=>{
  console.log("My AllSettle: ",data);
})
.catch((error) =>{
  console.log(error);
}).finally(() =>{
  console.log("Executes definitely..");
})

// inbuilt allSettled method
console.log("=================================");
const ans2 = Promise.allSettled([promise1,promise2,promise3,promise4]);
ans2.then((data) =>{
  console.log("data from inbuilt allSettled: ",data);
})
.catch((err) =>{
  console.log(err);
})

