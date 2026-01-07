

// class Shapes {
//   static countShapes = 0;
//   constructor(name) {
//     this.name = name;
//     Shapes.countShapes++;
//   }
// }
// class Circle extends Shapes{
//     constructor(name,type){
//         super(name);
//         this.type = type;
//     }
//     area(radius){
//         return Math.pi*radius*radius;
//     }
// }
// class Rectangle extends Shapes{
//     constructor(name,type){
//         super(name);
//         this.type = type;
//     }
//     area(len,bre){
//         return len*bre;
//     }
// }
// const rectangle = new Rectangle("john","Rectangle");
// console.log(rectangle.type)
// const circle = new Circle("jonny", "Circle");
// // console.log(rectangle.area(7,2))
// // console.log(Rectangle.countShapes)
// console.log(circle.area(7))


// ______________________________________________

// constructor function
function Shapes(name){
    this.name = name;
    Shapes.countShapes++;
}
Shapes.countShapes = 0;

function Circle(name,type){
    Shapes.call(this,name);
    this.type = type;
}

Circle.prototype = Object.create(Shapes.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.area = function (radius) {
  return 3.14 * radius * radius;
};
function Rectangle(name,type){
    Shapes.call(this,name);
    this.type = type;
}

Rectangle.prototype = Object.create(Shapes.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function (len, bre) {
  return len * bre;
};
const rectangle = new Rectangle("Mohan","Rectangle");
console.log(rectangle.name,rectangle.type)
console.log(rectangle.area(7,4));
const circle = new Circle("Ram","Circle");
console.log(circle.name,circle.type);
console.log(circle.area(7))