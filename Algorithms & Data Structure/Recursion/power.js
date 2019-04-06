// Function called power() that accepts a base and exponent.
// Should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()
// Do not worry about negative bases and exponents.

// power(2,0) // 1 since exponent of 0 results in 1.
// power(2,2) // 4
// power(2,4) // 16

function power(base1,exp1) {
    if (exp1 === 0){
        return 1
    }
    return base1 * power(base1, exp1-1)
}
let answer = power(2,4);
console.log(answer);
// 2 * 2 * 2 * 2
// Since this is the base1 times the formula which is the base
// where the exp1 is getting reduced. Once it's done, return 1
// tops the loop but the return is the formula base1 * ...