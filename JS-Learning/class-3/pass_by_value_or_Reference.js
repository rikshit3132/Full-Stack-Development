// For primitive types, the value is the actual data.

// For objects & arrays,
// the value is actually a reference to the data.

// So objects feel like “pass-by-reference,”
//  but technically they are:
// Pass-by-value of the reference.

// pass by value
// primitive Datatypes

// function change(x){
//     x = 99;
// }
// let c = 10;
// change(c);
// console.log(c);//10

// Non-primitives like obj,arr,fun
// pass by value of reference

// function ModifyObj(obj1){
//     obj1.x = 999;
// }
// let obj = {
//     x : 100
// }
// ModifyObj(obj);
// console.log(obj.x);//999

// When new obj is created in fun
// function ModifyObj2(obj2){
//     obj2 = {x : 990}//creating a new obj with all together
    // different memory reference
    // reassignment of new obj.
// }
// let obj = { x : 100};
// ModifyObj2(obj);
// console.log(obj.x);//100

// Summary

// Type	            Stored As	            Passed As	            Can function     change original?
// Primitive           actual value	        copy of value	                ❌ No
// Object / Array	    reference (address)	    copy of reference	        ✔ Only internal changes
// Function argument  	        —	                —	                        ❌ Never affects original
//  reassignment


// Examples
// Ques-1

// function test(obj) {
//   obj.a = 100;
//   obj = { a: 200 };
// }

// let x = { a: 1 };
// test(x);
// console.log(x.a);//100

// Que-2
// function change(obj) {
//   obj.name = "John";
// }
// let p = { name: "Mike" };
// change(p);
// console.log(p.name);//john

// Que-3
// function change(obj) {
//   obj = { name: "John" };//new obj is created and points
// //   to diff memory location
// }
// let p = { name: "Mike" };
// change(p);
// console.log(p.name);//mike
