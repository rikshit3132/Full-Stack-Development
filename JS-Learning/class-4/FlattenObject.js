// flatening an object in JS

function flattenObj(obj,parentKey = "",res ={}){
  for(let key in obj){
    const newKey = parentKey ? parentKey +"."+key : key;
    if(typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])){
        flattenObj(obj[key],newKey,res);
    }else{
        res[newKey] = obj[key];
    }
  }
  return res;
}

const obj  = {
    name: "Rikshit",
    age : 26,
    address :{
        city:"Shimla",
        region:{
            code:"SH",
            pin:171001,
            population:17000,
            animals:{
                tiger:17777,
                dogs:1233,
                cats:1222
            },
            plants:{
                urban:2323,
                rural:34243
            }
        }
    }
}
const ans = flattenObj(obj);
console.log(ans);