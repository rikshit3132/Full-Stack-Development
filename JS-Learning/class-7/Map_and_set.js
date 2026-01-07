// A Map is a collection of 
// key–value pairs where keys can be of ANY type.

// creation of map
// const map = new Map();
// Maps Methods

// 1) set -> used to set the value wrt to key
// map.set("name", "Ketan");
// map.set(1, "one");
// map.set(true, "yes");

// 2) get -> used to find the value at particular key.
// console.log(map.get("name"));//ketan
// console.log(map.get(true));//yes
// console.log(map.get(1));//one

// 3) has(key) -> check key exist in map or not 
// console.log(map.has("name"));//true

// console.log(map.has(true));//true

// 4) map.delete(key) -> delete the key-value pair
// map.delete(1);
// console.log(map.get(1));//undefined

// 5) map.clear() -> clears all the key-value pair
// map.clear();
// map.set("age",20);
// for (let [key, value] of map) {
//   console.log(key, value);
// }
// console.log("end")

// 6) map.size ->used to find the size of my map
// console.log(map.size);//3

// 7)Iterating a Map
// for (let [key, value] of map) {
//   console.log(key, value);
// }
// name ketan
// 1 one
// true yes

// map.forEach((value, key) => { //order is preserved
//   console.log(key, value);
// });
// name ketan
// 1 one
// true yes



// Set in JavaScript

// A Set is a collection of UNIQUE values.

// creation of set
// const set = new Set();

// methods of set

// 1)se.add(val) -> val into set
// set.add(1);
// set.add(2);
// set.add(3);
// console.log(set);//Set(3) { 1, 2, 3 }
// set.add(1);
// console.log(set);//Set(3) { 1, 2, 3 }

// 2)set.has(value) -> set has val or not
// console.log(set.has(3));//true
// console.log(set.has(10));//false

// 3)set.delete(value) -> delete val from set
// set.delete(2);
// console.log(set);//Set(2) { 1, 3 }

// 4) set.size ->checks the size of set
// console.log(set.size);//3

// 5)set.clear() -> clears all val
// set.clear();
// console.log(set);//Set(0) {}

// Iterating Sets
// for (let val of set) {
//   console.log(val);
// }
// 1
// 2
// 3

// set.forEach((val) => {
//   console.log(val);
// });

// 1
// 2
// 3

// Set reference equality (INTERVIEW TRAP)
// const set = new Set();

// set.add({ a: 1 });
// set.add({ a: 1 });

// console.log(set.size); // 2
// Objects are compared by reference, not structure.


// Map → key–value, any key, ordered
// Set → unique values, fast lookup