// A property descriptor is a metadata 
// object that defines 
// how a property behaves on an object.

// writable

// Controls whether the property’s value can be changed
// obj.prop = newValue;
// true → value can change
// false → assignment is ignored 
// (or TypeError in strict mode)
// Does NOT control delete
//  Does NOT control iteration


// enumerable

// Controls whether the property 
// shows up during iteration
// for...in
// Object.keys()
// JSON.stringify()
// for (let key in obj) {}
// true → visible
// false → hidden (but still accessible)
// Does NOT control read/write
//  Does NOT control delete

//  configurable

// Controls whether the property’s descriptor 
// can be changed or the property deleted
// If false:
//  delete obj.prop
//  Object.defineProperty (almost all changes)
//  Convert data ↔ accessor

// Example
// Default descriptor everything true
// const obj  = {
//     name : "ketan"
// };
// const ans = Object.getOwnPropertyDescriptor(obj,"name");
// console.log(ans);
// {
//   value: 'ketan',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
// Object literal gives full freedom by default

// obj.name = "Rahul";//can modify/update value(writeable)
// console.log(obj.name);//Rahul
// obj.age = 12;//can add
// console.log(obj);//{ name: 'Rahul', age: 12 }
// delete obj.age;//can delete (congigurable)
// console.log(obj);//{ name: 'Rahul' }

// obj.section = 2;
// obj.fatherName = "Satish";
// for(let entry in obj){
//     console.log(entry);
// }
// name
// section
// fatherName

// How to define descriptor for each property?
// Object.defineProperty(obj,propery,{value,alldescriptors})

// const obj2 = {}
// Object.defineProperty(obj2,"name",{
//     value : "Hanish",
//     writable : false,
//     enumerable: true,
//     configurable: true
// })
// console.log(obj2);//{ name: 'Hanish' }
// for(let values in obj2){
//   console.log(obj2); //{ name: 'Hanish' }(enumrable->true)
// }
// obj2.name = "Manik";
// console.log(obj2.name);//Hanish (writable-> false)

// delete obj2.name;
// console.log(obj2)//{} --> {configurable -> true}


// Object.defineProperty(obj2,"age",{
//     value:13,
//     writable:true,
//     enumerable:false,
//     configurable:false
// });
// console.log(obj2.age);//13
// here age is not shown when obj is console.
// but when i console obj.age than age is shown.
// Because here enumrable is false and so we can't
// iterate the value of age.
// for(let key in obj2){
//     console.log(key);//name not age because enumrable->false
// }

// obj2.age = 30;
// console.log(obj2.age);//30

// delete obj2.age;//not able to delete item because
// configurable is false
// console.log(obj2.age);//13

// Remember:
// Writeable :- can modify/update existing property/value
// Enumarable :- can iterate the property/value.
// Configurable :- can delete value/property.