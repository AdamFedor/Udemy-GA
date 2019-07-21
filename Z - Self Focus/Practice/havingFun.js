// take an array, return the logarithm and then value rounded down each value
// why? doesn't matter, just practicing Math.something
// recursively, each time remove the last value in the array
// the final loop has only one value in the array and returns
let roundedLog = () => {
    obj[arr1.length - 1] = Math.floor(Math.log(arr1[arr1.length - 1]));
    arr1.splice(arr1.length - 1);
    if (arr1.length < 1) {
        return;
    };
    roundedLog();
};

let arr1 = [100000000000, 5, 20000, 8, 200];
let obj = {};

roundedLog();
console.log('----------------');
console.log('roundedLog:');
console.log(obj);
console.log('----------------');

// loop through a function that creates random numbers
// the output of these numbers are then added in order to an array

let randomVal = (num) => {
    obj = {};
    for (var i = 0; i < num; i++) {
        obj[i] = Math.ceil(Math.random() * 100);
    };
    for (var val in obj) {
        arr2.push([val, obj[val]]);
        arr2.sort((a, b) => { return b[1] - a[1] });
    };
};

loopQuantity1 = 5;
let arr2 = [];

randomVal(loopQuantity1);
console.log('----------------');
console.log('randomVal:');
console.log(arr2);
console.log('----------------');

// refactor the randomVal to take on a merge sort
// this takes it to O(n log n) time and O(n) space.
    // MergeIt Pseudo
        // Return if array is 1 or less
        // Identify the middle
        // Split out the left side and the right side
        // Recursively repeat for each the left and right side
        // Return the merged sort cycling through the two arrays from left to right
        // Push results into array
    // Merge Pseudo
        // While both arrays have size, loop through
            // While left is greater than right, then left, left++
            // Else right is greater than left, then right, right++
            // Continue till one array runs out of length
        // While left arr has anything remaining, then left, left++
        // While right arr has anything remaining, then right, right++
        // return the new arr

let refactorVal = (num) => {
    arrRandom = [];
    for (var i = 0; i < num; i++) {
        arrRandom.push(Math.ceil(Math.random() * 100));
    };
    let mergeIt = (arr) => {
        if (arr.length <= 1) return arr;
        let middlePoint = Math.floor(arr.length / 2);
        let leftArr = mergeIt(arr.slice(0,middlePoint));
        let rightArr = mergeIt(arr.slice(middlePoint));
        return merge(leftArr, rightArr);
    };
    let merge = (leftArr, rightArr) => {
        let arr = [];
        let i = 0;
        let j = 0;
        while (i < leftArr.length && j < rightArr.length) {
            if (leftArr[i] > rightArr[j]) {
                arr.push(leftArr[i]);
                i++;
            } else {
                arr.push(rightArr[j]);
                j++;
            };
        };
        while (i < leftArr.length) {
            arr.push(leftArr[i]);
            i++;
        };
        while (j < rightArr.length) {
            arr.push(rightArr[j]);
            j++;
        }
        return arr;
    };
    arr3 = mergeIt(arrRandom);
};

loopQuantity2 = 5;
let arr3 = [];

refactorVal(loopQuantity2);
console.log('----------------');
console.log('refactorVal:');
console.log(arr3);
console.log('----------------');