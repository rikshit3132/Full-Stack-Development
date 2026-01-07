// WeakMap → object keys, GC-safe
// WeakSet → object values, GC-safe

// WeakMap
// Keys must be objects
// No iteration
// Garbage collected automatically

// let obj = { fname: "firtname" };
// const obj1 = { key: "lastname" };
// const obj3 = { key: "firtname" };
// const obj4 = { key: "lastname" };
// const weakmap = new WeakMap();
// console.log(typeof weakmap)//Object
// weakmap.set(obj,"Rahul");
// weakmap.set(obj1,"kumar")
// console.log(weakmap);// Rahul Kumar
// weakmap.delete(obj);
// console.log(weakmap)//WeakMap {}


// WeakSet
// Stores objects only
// Weak references
// No size / iteration
// Used for:
// Private data
// Memory-safe caching

// let obj2 = { key: "firtname" };
// const obj3 = { key: "lastname" };
// const set1 = new WeakSet();
// set1.add(obj2);
// set1.add(obj3);
// console.log(set1);//object object
// console.log(set1.has(obj2));//true
// obj2 = {key : "myname"};
// console.log(set1);
// console.log(set1.has(obj2));


// Strong reference (Array / Set)
// let obj = { a: 1 };
// const set = new Set();

// set.add(obj);
// obj = null;

// object still exists because Set holds it
//  Memory NOT freed


// Weak reference (WeakSet)
// let obj = { a: 1 };
// const ws = new WeakSet();

// ws.add(obj);
// obj = null;

// object is now eligible for garbage collection
//  Memory CAN be freed
// This is the entire purpose of WeakSet.