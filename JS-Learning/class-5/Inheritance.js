// 1) By using class concept
// class Animal{
//     static countAnimals = 0;
//     constructor(name){
//         this.name =  name;
//         // this.breed = breed;
//         Animal.countAnimals++;
//     }
//     makeSound(){
//         console.log("Hey,",this.name ,"is making sound")
//     }
// }

// class Dog extends Animal{
//     constructor(name,breed){
//         super(name);
//          super is the keyword which 
//          refers the parent constructor
//         this.breed = breed;
//     }
//     makeSound(){
//         console.log("Hey this Dog",this.name,"having breed ",this.breed);
//     }
// }

// const dog1 = new Dog("John","Labra");
// const dog2 = new Dog("Nitin","Golden Retriever");
// dog1.makeSound();
// const animal1 = new Animal("Lion");
// animal1.makeSound();
// console.log(Animal.countAnimals)

// ______________________________________________________

// same with contructor function

// function Animal(name){
// this.name =  name;
// Animal.AnimalCount++;
// }
// Animal.AnimalCount = 0;
// Animal.prototype.makeSound = function () {
//   console.log(`${this.name} makes a sound.`);
// };

// function Dog(name,breed){
//     Animal.call(this,name);
//     this.breed = breed;
// }

// setting the child class to parent one

// 1) Using Object.setPrototypeOf() Method
//Not recommended to use this function 

// Object.setPrototypeOf(Dog.prototype,Animal.prototype);
// const d1 = new Dog("Duke","GoldenRetriever");
// d1.makeSound();
// const a1 = new Animal("Sophey");
// a1.makeSound();

// 2) Object.create() method
// Object.create() is used to link the 
// child’s prototype 
// to the parent’s prototype
//  without modifying the parent.
// Resetting the constructor 
// ensures instances correctly point
//  back to their own constructor.
Dog.prototype = Object.create(Animal.prototype);
// create a new Object Dog and creates a prototypal
// chain with Aninmal
// Dog.prototype -->> Animal.prototype -->> Object.prototype -->> null
// Dog.prototype.constructor becomes:
// Dog.prototype.constructor === Animal ❌
// In order to change this pointing to animal
//  constructor we need next line.
Dog.prototype.constructor = Dog;
// to set the animal contructor to the dog constructor.

Dog.prototype.makeSound = function () {
  console.log("Hey, this Dog", this.name, "having breed", this.breed);
};
const d1 = new Dog("Spuni", "GS");
d1.makeSound();