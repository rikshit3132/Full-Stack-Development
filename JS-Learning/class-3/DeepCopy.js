import _ from "https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/lodash.min.js";
// Deep copy in JavaScript means creating a
// completely new independent copy
// of an object or array,
// including all nested objects.
// Changes to the copied object will not
//  affect the original.

// Copies all levels of the object
// Does NOT share references
// Changes in one do NOT affect the other

// Example
// let original = { a: 1, b: { c: 2 } };
// let copy = deepCopy(original);

// copy.b.c = 999;

// console.log(original.b.c);// 2
// console.log(copy.b.c);// 999

// let arr = [1,2,3,[10,11]];
// let arr2 = [...arr];
// arr2[3][0] = 999;
// console.log(arr[3])//999
// console.log(arr2[3]);//999
// It means the address of inner arrays are same and
// need to deep clone in order to change the address.

// Methods to do deep clones
// 1) structuredClone()
// Doesn't support functions
// Deep copy
// ✔ Handles nested objects
// ✔ Handles arrays, Map, Set, Date, RegExp

// let arr = [1,2,3,[10,11]];
// let arr2 = structuredClone(arr);
// arr2[3][0] = 888;
// console.log(arr[3])//[10,11]
// console.log(arr2[3]);//[888,11]

// 2) Deep Copy using JSON.stringify()
// Works ONLY if:

// ❌ No functions
// ❌ No undefined
// ❌ No dates
// ❌ No regex
// ❌ No circular references

// let array = [1,2,3,4,[6,7,9]];
// let array2 = JSON.parse(JSON.stringify(array));
// array2[4][1] = 10001
// console.log(array[4][1]);
// console.log(array2[4][1])

// 3) Custom Deep copy Function
// tc:O(n) and sc:O(n + D) where D is recursive Depth
// function deepCopy(obj){
//     if(obj == null || typeof obj != 'object'){
//         // checking whether obj is null or not object
//         return obj;
//     }
//     if(Array.isArray(obj)){
//        let newArr = obj.map(item => deepCopy(item));
//        return newArr;
//         // if obj is araay than copy all the
//         // elements into new array
//     }
//     let newObj = {};
//     for(let key in obj){
//         newObj[key] = deepCopy(obj[key])
//         // if obj is object,than copy all the keys and
//         // values into the newly created obj
//         //one by one
//     }
//     return newObj;
// }

// let person = {
//     name : 'Alice',
//     hobbies: ["Reading","Gaming"],
//     Address: {city : "Delhi",pincode : 10001}
// }
// let clonePerson = deepCopy(person);
// clonePerson.hobbies[1] = "Dancing"
// clonePerson.Address.city = 'Mumbai';
// console.log(clonePerson.hobbies[1], " ", clonePerson.Address.city);
// console.log(person.hobbies[1]," ",person.Address.city);
// Dancing   Mumbai
// Gaming   Delhi

// 4) Using lodash i can make deep clone
// using _.cloneDeep() fun

let obj = { a: 1, b: { c: 2 }, d: 3 };
let cloneObj = _.cloneDeep(obj);
cloneObj.b.c = 100;
console.log(obj.b.c);//2
console.log(cloneObj.b.c);//100
