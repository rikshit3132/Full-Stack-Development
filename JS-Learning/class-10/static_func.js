// 1) All()
// This is the static func. of Promise which takes array
// of promises as argument and returns value if all are resolved
// if anyone is rejected all rejected and reject value returned
// if every promise resolved returns the all values.
// We can pass any value inside array,laterly it is converted
// into the promise by default.
// All the index value is just like this Promise.resolve(arr[i])

const { reject } = require("lodash");

// const p1 = Promise.resolve(1);
// const p2 = 2;
// const p3 = Promise.resolve(3);
// const p4 = Promise.reject(4);

// const sol = Promise.all([p1,p2,p3,p4]);

// sol.then((data) =>{
//     console.log(data);
// })
// .catch((err) =>{
//     console.log("Value is rejected",err);
// });
// O/P :- if selected:- [1,2,3,4]
// if data.toString() -->> 1,2,3,4
// O/P:- if rejected:- rejected one returned

// 2) Allsetteled() func. is also the static func. of promise
// which also takes array as argument
// It does'nt care about promise is resolved or rejected
// It only prints the array of objects of all the promises
// That, will have 2 thing one is value
// second is status  either resolved or rejected

// const solAllSetteled = Promise.allSettled([p1,p2,p3,p4]);

// solAllSetteled.then((data) =>{
//     console.log(data);
// })
// .catch((err) =>{
//     console.log(err);
// })
// o/p:-
// [
//   { status: 'fulfilled', value: 1 },
//   { status: 'fulfilled', value: 2 },
//   { status: 'fulfilled', value: 3 },
//   { status: 'fulfilled', value: 4 } 
// ]

// lets say 4th promise is rejected
// const p1 = Promise.resolve(1);
// const p2 = 2;
// const p3 = Promise.resolve(3);
// const p4 = Promise.reject(4);
// const solAllSetteled2 = Promise.allSettled([p1, p2, p3, p4]);

// solAllSetteled2
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//   [
//     { status: "fulfilled", value: 1 },
//     { status: "fulfilled", value: 2 },
//     { status: "fulfilled", value: 3 },
//     { status: "rejected", reason: 4 },
//   ];


// 3) Race :- It is also the static func. of promise
// which returns whether resolve or reject comes first
// The one which is faster will be taken and returned.

// const p1 = Promise.resolve(1);
// const p2 = 2;
// const p3 = Promise.resolve(3);
// const p4 = Promise.resolve(4);

// const ansRace = Promise.race([p1,p2,p3,p4]);

// ansRace.then((data) =>{
//     console.log(data);
// })
// .catch((err) =>{
//     console.log(err);
// });
// returned the fastest one resolve/rejected
// O/P:-here 1 is o/p

// 4) Any:- It is also the static func. of promise
// which returns only the resolved fastest one.
//  It takes only resolved promise and returned the fastest 
// among all of them.

// const p1 = Promise.resolve(1);
// const p2 = 2; //Promise.resolve(2);
// const p3 = Promise.resolve(3);
// const p4 = Promise.resolve(4);

// const ansAny = Promise.any([p1,p2,p3,p4]);

// ansAny.then((data) =>{
//     console.log(data);
// })
// .catch((err) =>{
//     console.log(err);
// })


// Examples of race and any

const promise5 = new Promise((resolve,reject) =>{
    try{
        setTimeout(() =>{
            reject("promise-5 resolved");
        },2000);
    }catch(err){
        reject(err);
    }
});

const promise6 = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve("promise-6 resolved");
    }, 3000);
  } catch (err) {
    reject(err);
  }
});

// Race example
// Promise.race([promise5,promise6]).then((data)=>{
//     console.log(data);
    // O/P :-promise 5 resolved
    // irrespective of the fact whether resolve
    // or reject which one is first to execute 
    // will be firstly printed and returned.
// }).catch((err) =>{
//     console.log(err);
// });

// Any example
Promise.any([promise5,promise6]).then((data) =>{
  console.log(data);
  // O/P :-promise 6 resolved
  //Out of all the resolve, the fastest which got executed
  // will be firstly printed and returned.
}).catch((err) =>{
    console.log(err);
})