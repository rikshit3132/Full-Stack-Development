// freeze, seal, and extensible are all about 
// controlling how an object can be modified
// What is extensible?

// An object is extensible if you can 
// add new properties to it.
// this is the default behaviour of any obj.
// const obj = {
//     name:"Hun",
//     age : 42
// }
// console.log(Object.isExtensible(obj));//true
// Prevent extensions
// 1) Object.preventExtensions(obj)
// Object.preventExtensions(obj);
// obj.age = 45
// console.log(obj.age);//45 modify allowed
// obj.isStudent = true;
// console.log(obj.isStudent);//undefined cannot add new items
// delete obj.name;//name deleted
// console.log(obj);//{ age: 45 }
// ✔ Can modify existing properties
// ✔ Can delete properties
// X Cannot add new properties

// 2)Object.seal(obj)
// const admin = {
//     userName : "Admin123",
//     age: 34,
//     ipAddress : "191.12.13.1"
// }
// console.log(admin)
// Object.seal(admin);//seal admin obj
// admin.age = 21;//allowed
// console.log(admin.age);//21 allowed modification
// admin.haveAccess = false;//not allowed
// console.log(admin);//false new value not allowed
// delete admin.ipAddress;//not allowed
// console.log(admin);//{ userName: 'Admin123', age: 21, haveAccess: false }

// const ans = Object.getOwnPropertyDescriptor(admin, "userName");
// console.log(ans)

// All properties become configurable: false
// Writable remains unchanged

// Sealing an object:
// Prevents adding new properties
// Prevents deleting existing properties
// Allows modifying existing values

// 3) Object.freeze(obj)

// Freezing is the strictest form of locking.
// writable: false;
// configurable: false;

// const admin2 = {
//     userName : "Admin123",
//     age: 34,
//     ipAddress : "191.12.13.1"
// }
// console.log(admin2)
// Object.freeze(admin2);
// admin2.userName = "Karan567";//not allowed(modification)
// console.log(admin2.userName);//Admin123 
// admin2.isStudent = true;//not allowed to add new val
// console.log(admin2.isStudent);//undefined
// delete admin2.userName;//not allowed
// console.log(admin2);//{ userName: 'Admin123', age: 34, ipAddress: '191.12.13.1' }

// const ans  = Object.getOwnPropertyDescriptor(admin2, "ipAddress");
// console.log(ans);
// {
//   value: '191.12.13.1',
//   writable: false,
//   enumerable: true,
//   configurable: false
// }

// Note:-freeze works only upto one level means
// only works till shallow copy

// const person = {
//     name : "Rahul",
//     age : 12,
//     address: {
//         city : "SHimla",
//         pincode: 1001
//     }
// }
// Object.freeze(person);
// person.address.city = "Chandigarh";
// console.log(person.address.city);//Chandigarh
// Not works for deep copy.

// freeze ⊂ seal ⊂ preventExtensions
// A frozen object is also sealed & non-extensible
// A sealed object is also non-extensible
// A non-extensible object may still be writable & configurable