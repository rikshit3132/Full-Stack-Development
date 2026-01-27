
const fs = require("fs");

async function readTxtFile(path){
    return new Promise((resolve,reject) =>{
        fs.readFile(path,"utf-8",(err,data) =>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}
// try,catch and finally used when we are consuming
// data from server or anything.
// In order to avoid exceptions, use these.
async function main(){
    try{
const ans = await readTxtFile("f1.txt");
console.log(ans);
    }catch(err){
        console.log("Error happens: ");
    }finally{
        console.log("Always executes");
    }
}
main();