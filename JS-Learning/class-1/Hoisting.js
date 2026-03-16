// var

// console.log(a);// undefined
// var a = 10;
// js treats var like variables like this
// when doing hoisting
// var a;
// console.log(a); // undefined
// var a = 10;
// Reason: variable exists but value not assigned yet.

// let
// console.log(a) // ref error
// let a = 10
// Reason: variable is in Temporal Dead Zone (TDZ).
// TDZ (Temporal Dead Zone)
// start of block → until variable initialization

// const

// const behaves same as let in hoisting.
// console.log(a);//ref error
// const a = 10;
// because const also in tdz.

// "var is hoisted and initialized with undefined, 
// while let and const are 
// hoisted but remain in the Temporal Dead Zone 
// until initialization."
