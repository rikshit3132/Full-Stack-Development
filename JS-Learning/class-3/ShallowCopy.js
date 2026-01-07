// How to make a shallow copy
// Using spread operator

// let arr = [1,2,3,4];
// let clone = [...arr];
// console.log("Original Array:",[...arr]);
// console.log("Cloned Array",[...clone]);

// Using slice Method
// let arr = [1,2,3,4];
// let clone = arr.slice();
// console.log("Original Array:",[...arr]);
// console.log("Cloned Array",[...clone]);


// let arr = [1, 2, { x: 10 }];
// let copy = arr.slice();//[1, 2, { x: 10 }]
// copy[2].x = 500;
// console.log(arr[2].x); // 500 same value 
// shallow copy not work for 2 level clone system



// Using Array.from() Method
// let arr = [1, 2, { x: 10 }];
// let copy = Array.from(arr); //[1, 2, { x: 10 }]
// copy[2].x = 111;
// console.log(arr[2].x); // 111

//  using Object.assign({}, obj)

// Works for objects only.

// let obj = { a: 1, b: { x: 10 } };
// let copy = Object.assign({}, obj); //{ a: 1, b: { x: 10 } }

// copy.b.x = 200;
// console.log(obj.b.x); // 200



// Using concat() for Arrays
// let arr = [1, 2, { x: 10 }];
// let copy = [].concat(arr);

// Proof:
// copy[2].x = 777;
// console.log(arr[2].x); // 777
