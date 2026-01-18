// race:-race will returns the one, irrespective of
// whether selected or rejected 
// which one is the faster or executes first.

// creation of promises p1,p2 and p3.
const p1 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve("Iam from p1");
    },1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Iam from p2");
  }, 200);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Iam from p3");
  }, 3000);
});

// My race method
Promise.myRace = (promise) =>{
    return new Promise((resolve,reject) =>{

        for (let i = 0; i < promise.length; i++) {
          Promise.resolve(promise[i])
            .then((data) => {
              resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
        }
    })
}
const myAnsRace = Promise.myRace([p1,p2,p3]);
myAnsRace.then((data) =>{
    console.log(data);
})
.catch((err) =>{
    console.log(err);
})

// Inbuild race method
const ansRace = Promise.race([p1,p2,p3]);
ansRace.then((data) =>{
    console.log(data);
})
.catch((err) => {
    console.log(err);
})