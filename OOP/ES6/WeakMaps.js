// making radius a private property

const _radius = new WeakMap(); // _ just to make myself remember it's private
const _move = new WeakMap();
class Circle {
    constructor(radius) {
        _radius.set(this, radius); // key has to be an object, therefore the this
        _move.set(this, () => { // as an arrow function, the this will be the constructor
            console.log('move', this);
        });
    }
    draw() {
        // console.log(_radius.get(this));
        _move.get(this)();
        console.log('draw')
    }
}
const c = new Circle(1);
