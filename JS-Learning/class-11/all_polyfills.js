// All method in polyfill -> takes array of promises
// and retuns if all the promises are resolved
// otherwise returns the rejected ones.

const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);
const promise4 = 40;

// my logic for myCall func. polyfill
Promise.myAll = (promises)=>{
    return new Promise((resolve,reject) =>{
        let res = [];
        let remaining = promises.length;
        if (remaining === 0) {
          return resolve([]);
        }
        for(let i = 0; i < promises.length; i++){
            Promise.resolve(promises[i]).then((data)=>{
                res[i] = data;
                remaining--;
                if(remaining === 0){
                    return resolve(res);
                }
            }).catch((error) =>{
                return reject(error);
            })
        }
        
    })
}

// consuming value from myAll func.
const ans = Promise.myAll([promise1, promise2, promise3, promise4]);
ans.then((data) =>{
    console.log("My call",data);
}).catch((err) =>{
    console.log(err);
}).finally(() =>{
    console.log("always execute");
})


// All func. provided by promises
const ansAll = Promise.all([promise1, promise2, promise3, promise4]);
// console.log(ansAll);//pending state

// consuming the value from promise.
ansAll.then((data) =>{
   console.log("Inbuild call", data);
})
.catch((err) =>{
    console.log(err);
})
.finally(() =>{
    console.log("Always executes");
})