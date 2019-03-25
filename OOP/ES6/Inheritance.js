class Shape {
    constructor(color) {
        this.color = color;
    }
    move() {
        console.log('move');
    }
}

// everything in the class below will be added to the Circle's prototype
// Shape will be part of the prototypes prototype
class Circle extends Shape { // extends and what it inherits from
    // since Shape has a constructor, I must add call it and call super constructor
    constructor(color) {
        // super() is used where the color is being use
        super(color);
    }

    draw() {
        console.log('draw')
    }
}

const c = new Circle(red, 1);