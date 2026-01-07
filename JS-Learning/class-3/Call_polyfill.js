const person = {
    fName : "Kshitij",
    printName : function(name){
        console.log(`Hey,My name is ${this.fName}`);
        console.log(`Hey,My other name is ${name}`);
    }
}
const user = {
    fName : "User-VIP-VVip",
}
const Animal = {
    fName : "Kangaroo",
    greet : function(fName){
        console.log("Hey,My name is",this.fName)
        console.log("Hey,My Other name is", fName);
    }
}
// person.printName.call(user,"Gold-User");


// Pollyfill of myCall
Function.prototype.myCall = function(context, ...args){
    if(context == null || context == undefined){
        context = globalThis;
        
    }
    // JS original call uses window
// So we copy that behavior.
   const fnSymbol =  Symbol(); 
//    this symbol() will creates a unique key 
// because any other variables can be repeated here
// makes conflict
    context[fnSymbol] = this;
    // context.temp = this;//equivalent to this
    context[fnSymbol](...args);
    // calling the borrowed function
    // context.temp(...args) likes this
    delete context[fnSymbol];
    // delete the made function
    // very important in perspective of memory
}
// person.printName.myCall(user,"Silver-user");
// person.printName.myCall(user,"raj")
// Animal.greet.myCall(person,"Manik");

// polyfill of myApply()
Function.prototype.myApply = function(context,argsArray){
        if(context == null || context == undefined){
        context = globalThis;
        }
        const fnSymbol = Symbol();
        context[fnSymbol] = this;
        context[fnSymbol]([...argsArray]);
        delete context[fnSymbol];
}
// person.printName.apply(user,["Satish"]);
person.printName.myApply(user, ["Tiger"]);
// "apply internally spreads the arguments array and calls the function with the given context."