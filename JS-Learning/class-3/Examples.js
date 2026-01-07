const person = {
    name:"Aman",
   printName : function(name, age){
    console.log("Hey My name is: ",this.name)
     console.log("Hey My name is: ",name,"and my age is",age);
   }
}
const user = {
    name : "Naresh"
}
person.printName.call(user,"Krish",43);
// person.printName.call(null);//undefined
// person.printName.call(undefined);//undefined