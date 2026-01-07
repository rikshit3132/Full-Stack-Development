// 1) map() polyfills
// Array.prototype.myMap = function(callback){
// const ansArr = [];
// for(let i = 0; i < this.length; i++){
//     ansArr.push(callback(this[i],i,this));
// }
// return ansArr;
// }
// const arr = [1,2,3,4];
// const ans = arr.myMap(x => x * 10);
// console.log(ans);


// 2) push() polyfills
// Array.prototype.myPush = function(value){
//     const n = this.length;
//     this[n] = value;
//     return this;
// }
// const arr = [1,[2,5,7,8],3]
// const ans = arr[1].myPush(19);
// console.log(arr);

// 3) pop() polyfills
// Array.prototype.myPop = function(){
//     let n = this.length;
//     this.length = n - 1;
//     return this;
// }
// const ans = [1,2,3,4,5].myPop();
// console.log(ans);

// 4)unshift() Polyfills
// Array.prototype.myUnshift = function(value){
//     const n = this.length;
//     this.length = n + 1;
//     for(let i = this.length - 1; i >= 0; i--){
//         this[i] = this[i - 1];
//     }
//     this[0] = value;
// }
// const arr = [5,[6,9,12,19],7,8];
// arr[1].myUnshift(100);
// console.log(arr);

// 5) shift() polyfills

// Array.prototype.myShift = function(){

//  for(let i = 1; i < this.length; i++){
//     this[i - 1] = this[i];
//  }
//  this.length--;
// }
// const arr = [4,5,6,7,1]
// arr.myShift();
// console.log(arr);//[5,6,7,1]

// 6) includes() polyfill
// true or false
// Array.prototype.myIncludes = function(value){
//     for(let i = 0; i < this.length; i++){
//         if(this[i] === value){
//             return true;
//         }
//     }
//     return false;
// }
// const arr = [1,2,3,4];
// const ans = arr.myIncludes(3);
// console.log(ans);//true

// 7) indexOf() polyfills
// Array.prototype.myIndexOf = function(value){
//     for(let i = 0; i < this.length; i++){
//         if(this[i] === value){
//             return i;
//         }
//     }
//     return -1;
// }
// const arr = [5,3,7,8,3,92];
// const idxReturned = arr.myIndexOf(100);//-1
// console.log(idxReturned);//-1

// 8) lastIndexOf() polyfills

// Array.prototype.mylastIndexOf = function(value){
//     for(let i = this.length - 1; i >= 0; i--){
//         if(this[i] === value){
//             return i;
//         }
//     }
//     return -1;
// }
// const  arr = [1,2,3,4,5,2,2,3,4,2,3,5,5];
// const lastidxReturned = arr.lastIndexOf(2);
// console.log(lastidxReturned);//9


// 9) find() polyfills
// Array.prototype.myFind = function(callback){
// for(let i = 0; i < this.length; i++){
//     if(callback(arr[i],i,arr)){
//         return arr[i];
//     }
// }
// return undefined;
// }
// const arr = [{id : 1},{id : 2}];
// const ans = arr.myFind((u)=> u.id === 2);
// console.log(ans);//{id : 2}
// const ans2 = arr.myFind((u)=> u.id === 6);
// console.log(ans2);//undefined
// Note :- The callback take 3 things
// callback(arr[i],i,arr)
// 1) arr[i]
// 2) i
// 3) arr itself

// 10) findIndex()
// Array.prototype.MyfindIndex = function(callback){
// for(let i = 0; i < this.length; i++){
//     if(callback(arr[i],i,arr)){
//         return i;
//     }
// }
// return -1;
// }
// const arr = [{id : 1},{id : 2},{id: 3}];
// const ans = arr.MyfindIndex((u) => u.id === 3);//2
// console.log(ans);//2

// 11) filter() polyfills ==>> callback fun

// for only 1 level array
// Array.prototype.myFilter = function (callback) {
//   const arrAns = [];
//   for (let i = 0; i < this.length; i++) {
//       if (callback(this[i], i, this)) {
//         arrAns.push(this[i]);
//       }
//   }
//   return arrAns;
// };
// const arr = [1, 2, 3, 5, 6];
// const newArrAns = arr.myFilter((x) => x % 2 === 1);
// console.log(newArrAns);//[1,3,5]

// for 2 level array
// nested array
// Array.prototype.myFilter = function(callback){
//     const arrAns = [];
//     for(let i = 0; i < this.length; i++){
//         if (Array.isArray(this[i])) {
//          arrAns.push(...this[i].myFilter(callback));
         
//         }else{
//          if (callback(this[i], i, this)) {
//            arrAns.push(this[i]);
//          }
//         }
        
//     }
//     return arrAns;
// }
// const arr = [1,2,3,5,[11,23,12],6];
// const newArrAns = arr.myFilter((x) => x % 2 === 1);
// console.log(newArrAns);//[1,3,5,11,23]

// 12) reduce() polyfill -->> callback fun
// Array.prototype.myReduce =  function(callback,initialValue){
    // this -> arr
//     let acc;
//     let i;
//     if(initialValue !== undefined){
//         acc = 0;
//         i = 0;
//     }else{
//         acc = arr[0];
//         i = 1;
//     }
//      for ( i ; i < this.length; i++) {
//        acc = callback(acc, this[i],i,this);
//      }
//      return acc;
// }
// const arr  = [1,2,4,5,8];
// let ans = arr.myReduce((sum,val) => sum + val,undefined);
// console.log(ans)

// 13)slice() polyfills

//   Array.prototype.mySlice = function (start, end) {
//     const result = [];
//     const len = this.length;

//     // default values (important for arr.slice())
//     start = start === undefined ? 0 : start;
//     end = end === undefined ? len : end;

//     // normalize start (0-based)
//     if (start < 0) start = Math.max(len + start, 0);
//     else start = Math.min(start, len);

//     // normalize end (0-based, exclusive)
//     if (end < 0) end = Math.max(len + end, 0);
//     else end = Math.min(end, len);

//     // build result
//     for (let i = start; i < end; i++) {
//       result.push(this[i]);
//     }

//     return result;
//   };

// const arr = [12,32,5,23,65,67,43];
// const ans = arr.mySlice(1,-3);
// console.log(ans);


// https://chatgpt.com/c/69520c3c-8d70-8321-84d9-14b248065f70