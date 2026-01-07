//      this on Non-Strict Mode

// 1) Calling this by itself or globally
// this -> window object when called from root file
// In Global Execution context this refers to window object
// console.log("Hello My name is", this);

// 2) for execution context created with method call
// (calling with object), then this will point to object itself
// calling object function use of this

// example-1
// const captainAmerica = {
//   name: "Steve Rogers",
//   isAvenger: true,
//   address: {
//     city: "brooklyn",
//     state: "new york",
//   },
//   movies: ["first avenger", "civil war", "infinity war"],
//   saveTheWorld: function () {
//     console.log("On the way ! consider it done", this);
//   },
// };
// captainAmerica.saveTheWorld();

// example-2

// const person = {
//     fName : 'Rahul',
//     lName : 'Kumar',
//     age : 12,
//    getFullName  : function(){
//         return this.fName + ' ' +this.lName;
//    }
// }
// console.log("The name of the person is: ",person.getFullName());

// 3) when this is invoked inside simple function
// call this refers to window object
// For execution context created with function call(calling without object),
// this will point to window
// in strict mode this point to undefined

// function printName(){
//     console.log("Hi,My name is",this);
// }
// printName();

// 4)arrow function doesnt have this, how does this in this context
// it refers to parent context this
// Parent means the outer function it have

// const person = {
//     fName : 'Rishu',
//     lName :'Kumar',
//     getName :()=>{
//         return this.fName+" "+this.lName;
//     }
// }
// console.log("My name is: ",person.getName());

//  o/p is undefined undefined
// This is because arrow functions does'nt have its own
//  this, so it will go to outer scope till
//  global execution scope

// const captainAmerica1 = {
//   name: "Steve Rogers",
//   isAvenger: true,
//   address: {
//     city: "brooklyn",
//     state: "new york",
//   },
//   movies: ["first avenger", "civil war", "infinity war"],
//   saveTheWorld: function () {
//     console.log("On the way ! consider it done", this); //captainAmerica1
// function abc() {
//   console.log("Inside abc captain america object", this); window
// }
//     const abc = () => {
//       console.log("Inside abc arrow func", this);//captainAmerica1
//     };
//     abc();
//   },
// };

// captainAmerica1.saveTheWorld();

//      Non Strict Mode

// GEC  -------->>>window
// Method call(Obj call)----->>>object
// function call ----->>window
// Arrow function ------->>>>parent this or   outer scope this

// this on Strict Mode

// Everything will be same except the function call having this will output as undefined.

// function printName() {
//   console.log("Hello My name is:", this);
// }
// printName();//undefined

// const captainAmerica1 = {
//   name: "Steve Rogers",
//   isAvenger: true,
//   address: {
//     city: "brooklyn",
//     state: "new york",
//   },
//   movies: ["first avenger", "civil war", "infinity war"],
//   saveTheWorld: function () {
//     console.log("On the way ! consider it done", this); //captainAmerica1
// function abc() {
//   console.log("Inside abc captain america object", this);//undefined
// }
//     const abc = () => {
//       console.log("Inside abc arrow func", this);//captainAmerica1
//     };
//     abc();
//   },
// };
// captainAmerica1.saveTheWorld();

// 

const ladder = {
  stop: 0,
  up() {
    this.stop++;
    return this;
    
  },
  down() {
    this.stop--;
    return this;
    
  },
  showStep: function () {
    console.log(this.stop);
    return this;
    
  },
};
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();
// same thing but using chaining in one line
// this is called the chaining in js

ladder.up().up().up().down().showStep();
