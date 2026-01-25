// console.log("Before");
// setTimeout(() => {
//   console.log("Hello Iam from Delhi");
// }, 2000);



// console.log("After");


// Exp-2
console.log("Before");
function task(time){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(time > 3000){
            reject(time);
            console.log("Unsuccessful???");
        }else{
            resolve(time);
            console.log("Successful...");
        }
      }, time);
    });
}
// console.log(promise);
const promise = task(5000);
promise.then((data) =>{
    console.log(data,"is less, so successful");
}).catch((err)=>{
    console.log(err,"is greater, so unsuccessful");
})
console.log("After");
