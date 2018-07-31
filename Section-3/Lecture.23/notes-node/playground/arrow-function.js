var square1 = (x) => {
  var result = x * x;
  return result; // could do one line - just shows it clear.
}; // pass in x and square that number

// same as above but now it's one line and much more clean.
var square2 = (x) => x * x; // return the code on the right of the arrow.
// var square2 = x => x * x; works when only one argument exists excluding the ()

// update the value passed in to see it live via nodemon
// console.log (square2(9));

var user = {
  name: "Adam",
  sayHi: () => {
    console.log(`Hi`);
  },
  sayHiAlt () {
    console.log(arguments); // does not work with arrow functions
    console.log(`Hi. I'm ${this.name}`); // does not work with arrow functions
  }
};

user.sayHi(); // function runs when this method is called. The THIS binding pares to the parent binding.
user.sayHiAlt(1, 2, 3);
