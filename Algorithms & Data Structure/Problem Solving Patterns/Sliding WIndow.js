// take an array and sum n quantity together
// the sum can only take numbers next to each other
// if n = 3, then  take 3 array values next to each other
// return the largest. Return null if no array size.

function maxSubarraySumNested (arr, num) {
    if (num > arr.length) {
        return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

// var myAnswer = maxSubarraySumNested([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
// console.log(myAnswer);

// Refactored with the sliding window approach O(N)
function maxSubarraySum (arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]; // sums the first group
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
}
maxSubarraySum([1,2,3,4],2)