// Spread Operator
// Spread = EXPAND
// It expands (unpacks) an array/object 
// into individual elements.

// Examples of Spread
// copy array
// let arr = [1, 2, 3];
// let arr2 = [...arr];
// console.log(...arr2); 
// Output: 1 2 3
// It expands the array into individual values.


// Merge Arrays
// let arr1 = [1,2,3];
// let arr2 = [5,6,7];
// let ans = [...arr1,...arr2];
// console.log(ans);//1,2,3,5,6,7


// pass array to fun
// function sum(a, b, c) {
//   return a + b + c;
// }

// let arr = [10, 20, 30];
// let ans = sum(...arr);
// console.log(ans)//60

// Copy + Merge Objects
// let person = { name: "Ram" };
// let job = { role: "Developer" };
// let ans = {...person,...job};
// console.log(ans)
// {name: "Ram", role: "Developer"}

// Rest Operator
// Rest = COLLECT
// It collects multiple arguments into a single array.

// function sum(...nums){
//   let allSum = nums.reduce((a,b) => a+b,0);
//   return allSum;
// }
// let ans = sum(1,2,4,5);
// console.log(ans);//12


// Advanced Examples
// removes first element
// let arr = [1,2,3,4,5];
// let [first,...rest] = arr;
// console.log(first," ",rest)
// console.log(typeof first," ",typeof rest)


// merging objects with override
// let base = { x: 1, y: 2 };
// let update = { y: 100, z: 5 };
// let ans  = {...base,...update};
// console.log(ans)

// Rest with destructuring
// let obj = {a : 0,b : 1,c : 2,d :3};
// let{a,b,...rest} = obj;
// console.log(a," ",b);
// console.log(rest)


// let arr = [1, 2];
// let obj = { ...arr }; 
// console.log(obj);//{0:1,1:2}


// let obj = { a: 1, b: 2 };
// let newObj = { obj };
// console.log(newObj)//{{a: 1, b: 2}}
// console.log(obj)

// Output based Questions
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// console.log([arr1, arr2]);//[[1,2],[3,4]]
// console.log([...arr1, arr2]);//[1,2,[3,4]]
// console.log([...arr1, ...arr2]);//[1,2,3,4]


// function fun(a, ...rest) {
//   console.log(a, rest);//1,[2,3,4]
// }
// fun(1, 2, 3, 4);


// let obj = { a: 1, b: 2 };
// let newObj = { obj };
// console.log(newObj);//{{a: 1, b: 2}}
// console.log(obj);//{a: 1, b: 2}


// let obj = { a: 1, b: 2 };
// let clone = { ...obj };
// console.log(obj);//{ a: 1, b: 2 }
// console.log(clone);//{ a: 1, b: 2 }


// let arr = [...10];
// console.log(arr);//Type error because 10 is not iterable


// function add(a, b, ...rest) {
//   return a + b +rest.reduce((a,b) => a +b, 0);
// }
// let ans =add(1,2,3,4);
// console.log(ans)//10

// let msg = "hello";
// let ans = [...msg];
// console.log(ans[4])//o
// console.log(ans)//'h','e','l','l','o'


// let base = { x: 1, y: 2 };
// let update = { y: 100, z: 200 };
// console.log({...base,...update})//{x: 1,y: 100, z: 200}

// Tricky level Questions

// let arr = [1, 2, 3];
// let copy = arr;
// let clone = [...arr];

// copy.push(4);
// console.log(arr, clone);//[1,2,3,4],[1,2,3]

// let name = "Risku";
// console.log({ ...name });//'R','i','s','k','u'

// function demo(...args) {
//   console.log(args.length);//4
// }
// demo(...[1, 2, 3, 4]);


// let arr = [1, 2, [3, 4]];
// let shallow = [...arr];

// shallow[2][0] = 999;

// console.log(arr);//[1,2,[999,4]] 
// does not work in 2 level clone


// let obj = { a: 1, b: { c: 2 } };
// let copy = { ...obj };

// copy.b.c = 999;

// console.log(obj.b.c);///999 not work in 2 level clone

// let arr = [1, 2, 3];
// function test(x, y, z) {
//   console.log(x + y + z); //6
// }

// test(...arr);

// function fun(a, ...rest) {
//   return rest.map((x) => x * a);
// }
// console.log(fun(2, 3, 4, 5));//[6,8,10]

// let arr = [1, 2, 3, 4];
// let [a, ...b] = arr;

// console.log(a, b);//1,[2,3,4]


// let obj = { a: 1, b: 2, c: 3 };
// let { a, ...rest } = obj;

// console.log(rest);//{b: 2, c: 3}

// Important one
// function f(...args) {
//   console.log(args);
// }
// f([1, 2], ...[3, 4]);//[[1,2],3,4]


// let a = [1, 2];
// let b = [3, 4];
// let c = [...[a, b]];

// console.log(c);//[[1,2],[3,4]]


// console.log([...[1, 2],...[]]);//[1,2]

// let a = [1, 2];
// let b = [3, 4];

// let c = [...a, ...b];
// a.push(99);

// console.log(c);//[1,2,3,4]