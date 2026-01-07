// Bind returns a new function 
// that remembers the original function, 
// the bound this, and partial arguments
//  using closure, 
// and executes later with merged arguments.

let obj = {
  fname: "Tavish",
  lname: "Kumar",
  printName: function (name, age) {
    console.log(
      "My first name is: ",
      this.fname,
      "and last name is: ",
      this.lname
    );
    console.log("My name is: ", name, "and age is:", age);
  },
};
let obj2 = {
  fname: "Kavya",
  lname: "Raina",
};
Function.prototype.myBind = function(context,...direct){
    if (typeof this !== "function") {
      throw new TypeError("Bind must be called on a function");
    }
    if(context == null || context == undefined){
        context = globalThis;
    }
    const myFunction = this;

    return function(...indirect){
        const fnSymbol = Symbol();
        context[fnSymbol] = myFunction;
        context[fnSymbol](...direct,...indirect);
        delete context[fnSymbol];
    }
}
 const bindAns = obj.printName.myBind(obj2,"Manik");
 bindAns(32);

//  Method	                Time Complexity
// call	                     O(N)
// apply	                 O(N)
// bind (creation)	        O(M)
// bind (execution)	        O(M + K)