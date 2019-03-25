function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
};

function Shape() {

};

Shape.prototype.duplicate = function () {
    console.log('duplicate');
};

function Circle() {

};

extend(Circle, Shape);

// must be after extend(Circle, Shape);
Circle.prototype.duplicate = function () {
    // pulling from the parents prototype
    Shape.prototype.duplicate.call(this)
    // adding to the current prototype
    console.log('duplicate circle');
};

const c = new Circle();