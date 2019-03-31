// Goal: count unique values in an array

// My initial approach O(N) for time complexity
// O(N) on space due to the unknown size of the object.
function countUniqueValuesObject(arr) {
    let obj1 = {};
    for (let val of arr) {
        obj1[val] = (obj1[val] || 0) +1 // doesn't require to add 1. But shows quantity if needed elsewhere.
    }
    let count = Object.keys(obj1).length;
    return count;
}
let myApproach = countUniqueValuesObject([1,2,2,3,3,3,4,5]);
console.log(myApproach);

// Refactored using Multiple Pointers
// O(N) on time and O(1) on space
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    var i = 0;
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1, 2, 2, 5, 7, 7, 99])