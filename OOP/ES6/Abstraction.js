class Example {
    constructor(something) {
        this.something = something; // public by default
    }
}

const s = new Example(1);
s.something // this is public

// Some put an _ after the dot operator. But this is not abstraction!
// This is just a habit, and it can be accessed the same above
// Example: this._something = something;

const _draw = Symbol();
const _radius = Symbol();
class Circle {
    constructor(radius) {
        this[_radius] = radius;
    }
    [_draw]() {}
}

const c = new Circle(1);

const key = Object.getOwnPropertySymbols(c) // hack around this approach
console.log(c[key]) // not what to do, this is just to show
