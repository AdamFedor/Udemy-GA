const Circle = function () {
    this.draw = function() {console.log(this);}
}

const c = new Circle();
c.draw();

const draw = c.draw;
draw(); // window object, not the Circle object