// Array methods in js all types




// 1)checking and length

// a) Array.isArray() method
// this is used to check whether the particular piece
// of code pass in () is array or not.
// console.log(Array.isArray([1,23,4]));
// here [1,23,4] is an array.
// console.log(Array.isArray([]));//true
// console.log(Array.isArray());//false
// console.log(Array.isArray(1,2,3));//false

// b) Array.length
// It is used to find the length of an array 
// let arr = [12,13,14];
// console.log(arr.length);//3
// we can truncate this arr using arr.length
// arr.length = 2;//[12,13]
// console.log(arr);

// 2) Addition and Deletion of Elements

// a) push() tc:O(1)
// It will push the element at the end of an array.
// let arr = [1,2,3,[4,5,6]];
// arr.push(10);//10 is added at the last
// console.log(arr);//[1,2,3,[4,5,6],10]
// arr[3].push(100);//push element at the end of index 3
// console.log(arr);//[1,2,3,[4,5,6,100],10]

// b) pop() tc:O(1)
// It deletes the element from the end of an array.
// Also it retuns the popped element like here x is 
// returned value by pop()
// let arr = [1,2,[3,9,18,27],4];
// let x = arr.pop();//deletes 4
// console.log(arr);// [1,2,[39,18,27]];
// console.log(x);//4

// c) unshift() tc:-O(n)
// It will add the element at the 0th idx of an array.
// Most conslier operation than push()
// const arr = [5,4,3,6,[99,100]];
// arr.unshift(100);//100 at idx 0
// console.log(arr);//[100,5,4,3,6]
// arr[4].unshift(1000);//[5,4,3,6,[1000,99,100]]
// console.log(arr)//[5,4,3,6,[1000,99,100]]

// d) shift() tc:O(n)
// It deletes the element at the idx 0.
// const arr = [[1,4,6,7],2,3,4,5]
// arr.shift();//[2,3,4,5]
// console.log(arr);//[2,3,4,5]
// let x = arr[0].shift();// delete the 1st val at idx 0
// console.log("Array is: ",arr);//[[4,6,7],2,3,4,5]
// console.log("Deleted value is: ",x);//1

// 3) Search and Check

// a) includes()
// It will check whether particular element passed at
//  () exist in an array or not.
// It returns the boolean value if exist -->> true
//  not exist -->> false
// const arr = [1,2,3,4,[5,7,8],14];
// const boolAns = arr.includes(4);//4 exist at idx 3
// console.log(boolAns);//true.
// const boolAns = arr[4].includes(7);//7 exist at idx 4
// console.log(boolAns);//true
// const boolAns = arr[4].includes(100);//100 not exist
// console.log(boolAns)//false

// 2) indexOf()
// It returns the index of particular item passed in ()
// if exist -->> returns idx
// not exist -->> return -1
// const arr = [1,[2,5,6],3,[10,13,14],17,19];
// const idxAns = arr.indexOf(3);// 2
// console.log(idxAns);// 2
// const idxAns = arr.indexOf(99);// -1
// console.log(idxAns);//-1
// const idxAns =  arr[3].indexOf(13);//1
// console.log(idxAns);//1

// 3) lastIndexOf()
// It will tell the last index of particular element
// in the array or the last occurence index.
// const arr = [1, [2, 5, 6], 3, [10, 13, 14], 17,3,3,3,19];
// const lastIdx = arr.lastIndexOf(3);//7
// console.log(lastIdx);//7

// 4) find()  ==>> callback fun
// it will returns the element once found.
// find() returns the FIRST element in the array 
// that satisfies the condition.
//  If no element matches → it returns undefined
// let users = [{ id: 1 }, { id: 2 }];
// const element = users.find((u) => u.id === 2);//{id: 2}
// console.log(element);//{id: 2}

// 5) findIndex() ===>> callback fun
// It will find the index of a particular element 
// in an array return idx -->>if exist
// return -1 -->> not exist
// let users = [{ id: 1 }, { id: 2 }];
// let idx = users.findIndex((u) => u.id === 2);//1
// console.log(idx);//1

// 4)Iteration (MOST ASKED)

// a)forEach()
// It will iterate element one by one in the array like
// normal for loop.
// It is not returning any array.
// const arr = [1, [2, 5, 6], 3, [10, 13, 14], 17, 19];
// arr.forEach((x) => console.log(x));
// 1,[2, 5, 6],3,[10,13,14],17,19

// b) map() tc:O(n) and sc:O(n)
// Used for tranformatiom
// map() creates a NEW array by applying a function
//  to every element of the original array.
// returns that new array
// let res = [1, 2, 3].map((x) => x * 2);//[2,4,6]
// console.log(res)

// map() does NOT modify original array
// map() always returns same length array
// map() skips empty slots (sparse arrays)
// const arr = [1, , 3];
// arr.map(x => x * 2);
// [2, , 6]
// map() is chainable
// [1,2,3]
  // .map(x => x * 2)
  // .map(x => x + 1);
// [3,5,7]

// map                             forEach
// return newArray               return undefined
// used for transformation       used for side effect
// Chainable                      not chainable

// c) filter()
// It will filter the elements inside an array 
// on the basis of callback condition.
// it returns the new Array and store the filtered data.
// const arr = [1,2,3,4,5,6];
// const newArrAns = arr.filter((x) => x % 2 === 1);
// console.log(newArrAns)

// d) reduce() 
// reduce has 4 things to understand
// 1) accumulator
// 2) value
// 3) operation
// 4) intial accumulator value
// what reduce do?
// It takes value one by one,do operations and 
// put value into the accumulator.

// find sum of elements of an array
// const arr = [1,2,3,4,5];
// const ans = arr.reduce((sum,value) => sum + value,0);
// console.log(ans);

// find max in an array
// const arr2 = [3,14,4,65,23,6];
// const ans = arr2.reduce((a,b) => {
//   return (a > b) ? a : b;
// },arr2[0])
// console.log(ans);

// find min in an array
// const arr = [93,54,21,43,65,10,12,14];
// const minEle = arr.reduce((min,b) => {
//   return min < b ? min : b;
// },arr[0]);
// console.log(minEle)


// e)Slice vs Splice (TOP INTERVIEW QUESTION)

// 1) slice
// It will slice the array starting from 
// the starting index and till lastIndex - 1
// 1st index value is inclusive and 
// last index value exclusive.
// const arr = [1,2,4,6,8,10,12,14];
// const ans = arr.slice(1,5);//elements from  idx 1 till 4
// console.log(ans);//[2,4,6,8]
