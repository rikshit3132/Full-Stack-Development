// const pokemon = {
//     firstName : "Pika",
//     lastName : "chu",
//     getpokemonFullName : function(){
//         return this.firstName + " "+this.lastName;
//     }
// }
// console.log(pokemon.getpokemonFullName())
// how binds works?
// Bind makes a replica of getpokemonFullName() and 
// store it into different function so that we can 
// use that in the future.

// function getName(){
//     console.log(this.getpokemonFullName()+' i love it!')
// }
// const getfullName = getName.bind(pokemon)
// getfullName()

// example-2
// const person1 = {
//   fname: "Sahil",
//   lname: "rana",
//   printName: function (name1, name2) {
//     console.log(`Hey,${this.fname} your last name is ${this.lname}`);
//     console.log(`I am working with ${name1} ${name2} `);
//   },
// };
// const person2 = {
//   fname: "Ankush",
//   lname: "Kumar",
// };
// const getName = person1.printName.bind(person2);
// getName("Mehul", "Sharma");
