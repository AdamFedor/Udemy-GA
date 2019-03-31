// write a function called sameFrequency.
// Given two positive integers, find out if the two numbers
// have the same frequency of digits.

// Your solution MUST have the following complexities:
// Time: O(N)

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578,5879385) // true
// sameFrequency (22,222) // false

function sameFrequency (val1,val2) {
    if (val1.length !== val2.length) {
        return false;
    }
    let obj1 = {};
    let obj2 = {};
    // Splitting the numbers
    let arr1 = val1.toString().split('');
    let arr2 = val2.toString().split('');
    // push to objects
    for (let val of arr1) {
        obj1[val] = (obj1[val] || 0) + 1
    }
    for (let val of arr2) {
        obj2[val] = (obj2[val] || 0) + 1
    }
    for (let key in obj1) {
        // if found in both objects
        if (!(key in obj2)) {
            return false;
        }
        // if quantity is in both objects
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
};

let result = sameFrequency(1213,3121);
console.log(result);