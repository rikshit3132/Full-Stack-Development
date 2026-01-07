// Destructuring is a feature that allows you to 
// extract values from arrays or properties 
// from objects and store them in variables easily.

// It reduces long, repetitive code and makes 
// it readable.

// 1) Array Destructuring

let arr = [10, 20, 30];
let[a,b,c] = arr;
console.log(a,b,c);//10,20,30

// 2)Skipping values:
let arr2 = [1, 2, 3, 4];
let[first, , third] = arr2;
console.log(first,third)//1,3

// 3)Using rest
let arr3 = [1, 2, 3, 4, 5];
let[one,two,...rest] = arr3;
console.log(one, two, rest);

// Swapping values (very common in interviews)
let x = 10;
let y = 20;
[x,y] = [y,x];
console.log(`x is:${x} and y is:${y}`);


// Changing variable names:
let user = {
  id: 101,
  username: "risku"
};

let{id : userId,username : uName} = user;
console.log(userId,uName)


// Destructuring with default values:
let obj = { t: 10 };

let { t, p = t } = obj;

console.log(t); // 10
console.log(p); // 10
console.log(obj);


// Nested Object Destructuring:
let person = {
  name: "Bob",
  address: {
    city: "Mumbai",
    pin: 400001
  }
};

let { address: { city, pin } } = person;

console.log(city); // Mumbai

// Function Parameter Destructuring
// Very powerful & used in React.
// For objects:
function printUser({ name, age }) {
  console.log(name, age);
}

printUser({ name: "Sam", age: 25 });

// Destructuring + Spread/Rest Combo
// Very common when copying objects.

// let person = { name: "A", age: 20, city: "Delhi" };
// let { name, ...rest } = person;

// console.log(name); // A
// console.log(rest); // { age: 20, city: 'Delhi' }

// Practical Example (Most Asked in Interviews)
let person2 = {
  name: "Alex",
  settings: {
    theme: "dark",
  }
};

let {
  name,
  settings: { theme, language = "en" },
} = person2;

console.log(theme);     // dark
console.log(language);  // en
