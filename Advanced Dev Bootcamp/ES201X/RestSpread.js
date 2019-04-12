// Flip

// Write a function called flip which accepts a function and a value for the keyword this.Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the parameters passed to the function REVERSED.HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked.You will have to make use of closure!

// flip(subtractFourNumbers, this, 1)(2, 3, 4) // -2
// flip(subtractFourNumbers, this, 1, 2)(3, 4) // -2
// flip(subtractFourNumbers, this, 1, 2, 3)(4) // -2
// flip(subtractFourNumbers, this, 1, 2, 3, 4)() // -2
// flip(subtractFourNumbers, this)(1, 2, 3, 4) // -2
// flip(subtractFourNumbers, this, 1, 2, 3)(4, 5, 6, 7) // -2
// flip(subtractFourNumbers, this)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) // -2
// flip(subtractFourNumbers, this, 11, 12, 13, 14, 15)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) // -22


function flip(fn, thisArg, ...outerArgs) {
    return function (...innerArgs) {
        let allArgs = outerArgs.concat(innerArgs).slice(0, fn.length)
        return fn.apply(thisArg, allArgs.reverse());
    }
}

// Bind

// Write a function called bind which accepts a function and a value for the keyword this.Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this.HINT - if you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked.You will have to make use of closure!

// bind(addFourNumbers, this, 1)(2, 3, 4) // 10
// bind(addFourNumbers, this, 1, 2)(3, 4) // 10
// bind(addFourNumbers, this, 1, 2, 3)(4) // 10
// bind(addFourNumbers, this, 1, 2, 3, 4)() // 10
// bind(addFourNumbers, this)(1, 2, 3, 4) // 10
// bind(addFourNumbers, this)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) // 10

function bind(fn, thisArg, ...outerArgs) {
    return function (...innerArgs) {
        return fn.apply(thisArg, [...outerArgs, ...innerArgs])
    }
}