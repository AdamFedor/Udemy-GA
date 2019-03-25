// Implementation Detail
const _radius = new WeakMap(); // cannot be accessed via the other module

// Public Interface
class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log('Circle with radius ' + _radius.get(this));
    }
}

module.exports = Circle;