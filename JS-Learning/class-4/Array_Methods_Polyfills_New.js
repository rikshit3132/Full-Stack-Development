// Array Methods
// JS Array is dynamic

// 1) Map
// Map takes 3 things internally in callback,
// 1. currentValue --- this[i]
// 2. currentIdx --- i
// 3. wholeArray ---- this

// callback

// Array.prototype.myMap = function(callback){
//      if (this == null) {
//     throw new TypeError("Array.prototype.myMap called on null or undefined");
//   }

//   if (typeof callback !== "function") {
//     throw new TypeError(callback + " is not a function");
//   }
//     const ansArr =  [];
//     for(let i = 0; i < this.length; i++){
//         ansArr.push(callback(this[i],i,this));
//     }
//     return ansArr;
// }
// const arr = [1,2,3,4,5]
// const newArray = arr.myMap((element) => element * element);
// console.log(newArray)//[1,4,9,16,25]

// 2 push()
// it returns the length of new Array
// insert element at end of Array

// Array.prototype.myPush = function(value){
// if (this.length === 0 && !value) return 0;
// const newLen = this.length;
// this[newLen] = value;
// return this.length;
// }
// const arr2 = [1,2,[3,4,5],9];
// const ans = arr2[2].myPush(12)
// console.log(arr2)//5

// 3) pop()
// it returns the deleted value
// delete element from end of Array
// Array.prototype.myPop = function(){
//  if (this.length === 0) return undefined;
// const actualLength = this.length;
// const value = this[actualLength - 1];
// return value;
// }

// const arr3 = [1,2,3,[4,6,12,13],4,5];
// console.log(arr3[3].myPop());//5

// 4) unshift()
// it returns length of new Array just like push
// insert element at start of an Array
// if (this.length === 0 && !value) return 0;
// Array.prototype.myUnshift = function(value){
//     if (this.length === 0 && !value) return 0;
//     const newLen = this.length + 1;
//     for(let i = newLen - 1; i >= 0; i--){
//         this[i] = this[i - 1];
//     }
// this[0] = value;
// return this.length;
// }

// const arr = [5,[6,9,12,19],7,8]
// const ans = arr[1].myUnshift(1000);
// console.log(ans)//5

// 5) shift()
// It returns the deleted element from the start of an array

// Array.prototype.myShift = function(){
//     if (this.length === 0) return undefined;
//     const value = this[0];
//     for(let i = 1; i < this.length -1; i++){
//         this[i - 1] = this[i];
//     }
//     this.length--;
//     return value;
// }
// const arr = [5,[6,9,12,19],7,8]
// const ans = arr[1].myShift();
// console.log(ans)//6

// 6) includes()
// check whether element exist in an array or not
// returns true or false

// Array.prototype.myIncludes = function(value){
//     if(value === NaN){
//         return false;
//     }
//     for(let i = 0;i < this.length; i++){
//         if(this[i] === value){
//             return true;
//         }
//     }
//     return false;
// }
// const arr = [1,2,3,[4,5,6,7]]
// console.log(arr[3].myIncludes(NaN))//true

// 7) indexOf
// It returns the index of element present in an array
// if present returns idx otherwise -1

// Array.prototype.myIndexOf = function(value){
//     if(value === NaN){
//         return -1;
//     }
// for(let i = 0; i < this.length; i++){
//     if(this[i] === value){
//         return i;
//     }

// }
//  return -1;
// }

// const arr = [1,2,3,[4,5,6,7]]
// console.log(arr[3].myIndexOf(NaN))

// 8) lastIndexOf()
// returns the rightmost endest index of repeating elements or just element,
// if present, otherwise returns -1
// Array.prototype.myLastIdxOf = function(value){
// if(NaN){
//     return -1;
// }
// for(let i = this.length - 1; i >= 0; i--){
//     if(this[i] === value){
//         return i;
//     }
// }
// return -1;
// }

// const arr = [1,2,3,[4,5,6,7,8,5,1,2]]
// console.log(arr[3].myLastIdxOf(50))

// 9) Myfind()
// It returns element of an array based on the condition mentioned on callback
// if condition matches returns the element otherwise undefined
// callback

// Array.prototype.myFind = function(callback){
//     if(typeof callback !== 'function'  || !callback){
//         throw new TypeError('callbacks type should have function')
//     }
// for(let i = 0;i < this.length; i++){
//     if(callback(this[i],i,this)){
//     return this[i];
// }
// }
// return undefined;
// }
// const arr = [1,2,4,5,6,7,4]
// const val = 6;
// const ans = arr.myFind((x) =>  x < val); // 1
// console.log(ans)

// 10) findIndex()
// It returns the index of the element specified in callback.
// if true returns idx otherwise -1. It did'nt returns undefined
// callback

// Array.prototype.myFindIdx = function(callback){
//     if(typeof callback !== 'function'){
//         return new TypeError(callback,"Should be function")
//     }
//     for(let i = 0; i < this.length; i++){
//         if(callback(this[i],i,this)){
//             return i;
//         }
//     }
//     return -1;
// }

// const arr = [1,2,3,4,5,[7,8,9]];
// console.log(arr.myFindIdx((x) => x=== 4)) //3

// 11) myFilter()
// filter returns the elements which returs false according to the callback
// those values which gives false stored in an array and returned
// callback
// not for nested array

// Array.prototype.myFilter = function(callback){
//     if(typeof callback !=='function'){
//         throw new TypeError(callback,"is not function");
//     }
//     const ans = []
//     for(let i = 0; i < this.length; i++){
//         if(callback(this[i],i,this)){
//             ans.push(this[i]);
//         }
//     }
//     return ans;
// }
// const arr = [1,2,3,4,5,7,8,9];

// const ans = arr.filter((x) => x % 3);
// console.log("Using filter",ans);
// const ans2 = arr.myFilter((x) => x % 3);
// console.log("using myFilter",ans2);

// myFilter for nested array

// Array.prototype.myFilter2 = function(callback){
//     const ans = []
// for(let i = 0; i < this.length; i++){
//     if(Array.isArray(this[i])){
//     ans.push(...this[i].myFilter2(callback))
// }else{
//     if(callback(this[i],i,this)){
//         ans.push(this[i]);
//     }
// }
// }
// return ans;
// }
// const arr = [1,2,3,4,[5,7,8],9];
// const ans = arr.myFilter2((x) => x === 8)
// console.log(ans)

// 12) reduce
// very important in perspective of interviews

// Array.prototype.myReduce = function(callback,initialVal){

//     let acc;
//     let i;
//     if(initialVal !== undefined){
//         acc = 0;
//         i = 0;
//     }else{
//         acc = this[0];
//         i = 1
//     }
//     for( i ; i < this.length; i++){
//         acc = callback(acc,this[i],i,this);
//     }
//     return acc;

// }

// const arr = [2,3,4,5,6]
// const sum = arr.myReduce((acc,val) =>{
//     return acc+val;
// } ,0);
// console.log(sum)


// 13)  some()
// It checks is any element which satisfy the condition.
// it stops early,retuns true or false.
// if any of one satisfies it returns true
// callback
// ANY true ? -->> returns true

// Array.prototype.mySome = function(callback){
//     for(let i = 0; i < this.length; i++){
//         if(callback(this[i],i,this)){
//             return true;
//         }
//     }
//     return false;
// }

// const arr = [1,5,7,3,9];
// const ans = arr.mySome((val) => {
//     console.log(val);
//     return val > 6
// })
// console.log(ans)

// 14) myEvery()
// It checks is every element  satisfy the condition.
// it does'nt stops early,retuns true or false.
// if every one satisfies condition, it returns true

// Array.prototype.myEvery = function(callback){
//     for(let i = 0; i < this.length; i++){
//         if(!callback(this[i],i,this)){
//             return false;
//         }
//     }
//     return true;
// }

// const arr = [1,5,6,8,4]
// const ans = arr.myEvery((ele) => {
//     console.log(ele);
//     return ele < 5
// })
// console.log(ans);

// 15) mySlice()
// In order to find the index values
// for given negative indexes
// arr -> [1,5,6,8,4] idx[-1,-4]
// than in order to find idx1 -> length + idx1
// idx2 -> length + idx2
// no callback

// Array.prototype.mySlice = function(start,end){
//     const result = [];

//     start =  start === undefined ? 0 : start;
//     end =  end === undefined ? 0 : end;
    
//     if(start < 0){
//         start = Math.max(0,this.length + start)
//     }else{
//         start = Math.min(start,this.length)
//     }

//      if (end < 0) {
//        end = Math.max(0, this.length + end);
//      } else {
//        end = Math.min(end, this.length);
//      }
//      for(let i = start; i < end; i++){
//         result.push(this[i]);
//      }
//      return result;
// }
// const arr = [1,3,4,6,7,8]
// const ans = arr.mySlice(0,-2)
// console.log(ans);
// const ans2 = arr.slice(0,-2);
// console.log(ans2);

// 16) myForEach()
// used for iteration
// Array.prototype.myForEach = function(callback){
//   for(let i = 0; i < this.length; i++){
//     callback(this[i], i, this);
//   }
// }
// const arr = [1,2,3,4,5]
// arr.myForEach((ele) => {
//     process.stdout.write((ele + 10) + " ");
   
// })



