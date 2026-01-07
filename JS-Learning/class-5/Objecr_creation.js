// using Object.create() fun
const animal = {
    name : "Sehpherd",
  speak() {
    console.log(`${this.name} speaks`);
  }
};

const dog = Object.create(animal);
dog.name = "Tommy";
console.log(dog.name)
console.log(animal.name)
dog.speak(); 
animal.speak();
