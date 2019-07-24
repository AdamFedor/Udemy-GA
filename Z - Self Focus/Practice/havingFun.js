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
    arr3 = mergeIt(arrRandom);
};

let mergeIt = (arr) => {
    if (arr.length <= 1) return arr;
    let middlePoint = Math.floor(arr.length / 2);
    let leftArr = mergeIt(arr.slice(0, middlePoint));
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

loopQuantity2 = 5;
let arr3 = [];

refactorVal(loopQuantity2);
console.log('----------------');
console.log('refactorVal:');
console.log(arr3);
console.log('----------------');

// Search through a sorted array for a specific value, then remove it.
// Idea is to pivot sort through, then remove the index's value from the array.
    // findValAndReplace pseudocode
        // Look for an identified number in a sorted array
        // Find the middle of the array
        // Compare the index's value with the identified number
        // If the index is higher, the artifical start of the array is the middle++
        // Else the artificial end of the array is middle--
        // Recursively repeat until the array is found and the array is 1 or less

let findValAndReplace = (arr, val) => {
    idx = arr.length;
    let midPoint = Math.floor(arr.length/2);
    if (arr.length === 1) {
        if (arr[0] !== val) {
            console.log("didn't find it anywhere");
            // this is where I update the value of nothing returned
            return;
        };
    } else if (arr[midPoint] === val) {
        let afterMid = midPoint +1;
        console.log(afterMid)
        arr = arr.slice(midPoint, afterMid);
        console.log('midpoint found to equal value')
        console.log(arr)
        // this is where I update the value of something returned
        return;
    } else if (arr[midPoint] < val) {
        let newMid = midPoint++;
        arr = arr.slice(newMid);
        console.log('greater than');
        console.log(arr);
        console.log('==++++==');
        findValAndReplace(arr, val, idx);
    } else if (arr[midPoint] > val) {
        let newMid = midPoint--;
        arr = arr.slice(0,newMid);
        console.log('less than');
        console.log(arr);
        console.log('==----==');
        findValAndReplace(arr, val, idx);
    };
    return indexVal;
};

let arr4 = [1,2,4,55,60,75,82,83,84,90,91,93,97,100,104,105,150,152,155,200];
let findMe = 200;

console.log('----------------');
console.log('findValAndReplace:');
let answer = findValAndReplace(arr4, findMe);
console.log(answer);
console.log('----------------');