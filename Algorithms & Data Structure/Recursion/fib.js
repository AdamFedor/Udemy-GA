// Write a recursive function called fib which accepts a
// number and returns the nth number in the Fibonacci
// sequence. Recall that the Fibonacci sequence is the
// sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which
// starts with 1 and 1, and where every number thereafter
// is equal to the sum of the previous two numbers.

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n) {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2)
}

let answer = fib(4);
console.log(answer);

// Returns 2 arguments added together
// Let's use 4 as the argument
// Argument 1: fib(4-1) { (3-1) {(1)} + (3-2) {(1)} } // 2 hits the base case 2x times
// Agrument 2: fib(4-2) {(1)} // 1 because it hits the base case
// Therefore 2 + 1 === 3

// The return of fib each returns a potential of 2 new
// arguments within, for each of the two it returns another
// 2 possible until the base case.