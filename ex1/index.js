//Ex1.Your task is to create a Circle constructor that creates a circle with a radius provided by an argument.
//  The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r)
//  which give both respective areas and perimeter (circumference).
function circle(radius) {
  this.radius = radius;
  // area method
  this.area = function () {
    return Math.PI * this.radius * this.radius;
  };
  // perimeter method
  this.perimeter = function () {
    return 2 * Math.PI * this.radius;
  };
}
var c = new circle(3);
console.log("Area =", c.area().toFixed(2));
console.log("perimeter =", c.perimeter().toFixed(2));
