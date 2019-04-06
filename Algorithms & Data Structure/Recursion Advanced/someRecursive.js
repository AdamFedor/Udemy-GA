// Write a recursive function called someRecursive which accepts an array
/// and a callback. The function returns true if a single value in the array
// returns true when passed to the callback. Otherwise it returns false.

const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1), callback);
}

let answer = someRecursive([1, 2, 4], isOdd);
console.log(answer);

// if length is 0 then false
// if callback is true where in this case, isOdd returns true
// if the callback is not true, slice. And repeat.
// if the array returns no true it will eventually be 0 and false
// if the array evventually returns a truthy argument, it becomes true