// // This is the old way.
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// }

// Now the ES6 way with Classes
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Instance Method
    draw() {
        // this goes on the prototype
        console.log('draw');
    }

    // Static Method
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const circle = Circle.parse('{"radius": 1}');
console.log(circle);