function Shape (color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

// use Shape's prototype - this gets more noisy
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
// Instead use
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius, color) {
    Shape.call(this,color);
    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function () {
    console.log('draw');
}

// Function Inheritance
function Square (size) {
    this.size = size;
}
// use Shape's prototype - using the more universal approach above in extend()
extend(Square, Shape);

const s = new Shape();
const c = new Circle(1, 'red');

console.log(c);