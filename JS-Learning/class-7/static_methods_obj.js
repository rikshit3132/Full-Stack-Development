// Static methods of Object in JavaScript
// Object.methodName()

// 1) Object.assign(target, ...sources)
// Copies the properties from source 
// object into target obj.

// const obj = {
//     name: "Rampyari",
//     age: 21,
//     address : {
//         city: "Rohru",
//         pincode: 10019
//     }
// }
// const newObj = {};
// Object.assign(newObj,obj);//shallow copy
// console.log(newObj.name);//Rampyari
// newObj.address.city = "Shimla";
// console.log(newObj.address.city);//shimla
// console.log(obj.address.city);//shimla

// 2) Object.create(proto, properties?)
// Creates a new object with a specified prototype.
// const user = {
//     name: "Rahul",
//     age : 32,
//     address : {
//         city : "chd",
//         pincode : 12882
//     }
// }
// const user2 = Object.create(user);
// console.log(user2.name);//rahul
// console.log(user2);//{}
// Used for prototypal inheritance

//3) Object.keys(obj)
// Returns array of keys of an object.
// const obj = { a: 1, b: 2 };
// console.log(Object.keys(obj)); // ["a", "b"]

// 4)Object.values(obj)
// Returns array of values of an object.
// const obj = { a: 1, b: 2 };
// console.log(Object.values(obj)); //[1,2]

// 5)Object.Entries(obj)
// Returns array of key-value pair of an object.
// const obj = { a: 1, b: 2 };
// console.log(Object.entries(obj));[ [ 'a', 1 ], [ 'b', 2 ] ]
// very useful for loops
// for (const [key, value] of Object.entries(obj)) {
//   console.log(key, value);
// }
// a 1
// b 2

//6) Object.fromEntries(iterable)
// Converts entries back to object.
// const arr = [
//   ["a", 1],
//   ["b", 2],
// ];
// const obj = Object.fromEntries(arr);
// console.log(obj);//{ a: 1, b: 2 }

// 7)Object.freeze(obj)
// Makes object immutable.
// Cannot add, delete, modify
// const obj = {
//     name:"sahil",
//     age:54
// }
// Object.freeze(obj);
// obj.name = "Manik";//ignored
// console.log(obj.name)//sahil
// delete obj.name;//ignore
// console.log(obj);//{ name: 'sahil', age: 54 }

// 8) Object.seal(obj)
// Prevents adding/deleting properties
// (but allows modification)

// const obj2 = {
//     name:"sahil",
//     age:54
// }
// Object.seal(obj2);
// obj2.name = "Manik";
// console.log(obj2.name);//manik
// delete obj2.name;
// console.log(obj2);//{ name: 'Manik', age: 54 }
// obj2.marks = 99;
// console.log(obj2.marks);//undefined

// 9) Object.preventExtensions(obj)
// Stops adding new properties.
// const obj3 = {
//     name:"sahil",
//     age:54
// }
// Object.preventExtensions(obj3);
// obj3.age= 34;
// console.log(obj3.age);//34 can modify
// obj3.isStudent = true;
// console.log(obj3.isStudent);//undefined not allowed
// delete obj3.name;//allowed delete name 
// console.log(obj3);//{ age: 34 }

// 10) Object.getPrototypeOf(obj)
// Returns prototype.

// const user = {
//     name :"Sharan",
//     age : 27
// }
// console.log(Object.getPrototypeOf(user));

// 11) Object.getOwnPropertyDescriptor(obj, prop)
// const obj = {
//     name : "Jam",
//     age : 32
// }
// const ansObj = Object.getOwnPropertyDescriptor(obj, "age");
// console.log(ansObj)
// { value: 32, writable: true, 
// enumerable: true, configurable: true }

// 12) Object.defineProperty(obj, prop, descriptor)
// const obj = {
//     name : "Rahul",
//     age : 32,
//     marks : 54.5
// }

// const ansObj = Object.getOwnPropertyDescriptor(obj, "age");
// console.log(ansObj)

//  Object.defineProperty(obj, "age", { writable : false});
//  const ansObj2 = Object.getOwnPropertyDescriptor(obj, "age");
//  console.log(ansObj2);
//  obj.age = 74;//not changed because writable false
//  console.log(obj.age);//32

//  13)Object.getOwnPropertyNames(obj)

// Includes non-enumerable keys.

// const obj = {
//     name : "John",
//     age :54
// }
// const ans = Object.getOwnPropertyNames(obj);
// console.log(ans);//[ 'name', 'age' ]

// 14)Object.getOwnPropertySymbols(obj)

//  const obj = {
//     name : "John",
//     age :54
// }
// const ans = Object.getOwnPropertySymbols(obj);
// console.log(ans);//[]

// 15) Object.isFrozen(obj)
//  Object.isSealed(obj)
// Object.isExtensible(obj)

// const obj = {
//     name :"Sam",
//     age : 21,
//     psp : 76
// }
// console.log(Object.isFrozen(obj))//false
// Object.freeze(obj);
// console.log(Object.isFrozen(obj));//true
// console.log(Object.isSealed(obj));//true
// console.log(Object.isExtensible(obj));//false