// Given an array of integers and a number, write a function called
// maxSubarraySum, which finds the maximum sum of a subarray with the
// length of the number passed to the function. Note that a subarray
// must consist of consecutive elements from the original array. In
// the first example below, [100,200,300] is a subarray of the original
// array, but [100,300] is not.

// maxSubarraySum([100,200,300,400],2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20],4) // 39
// maxSubarraySum([-3,4,0,-2,6,-1],2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3],3) // null

// Constraints: Time O(N), Space O(1)

function maxSubarraySum (arr,val) {
    let max = 0;
    if (arr.length < val) {
        return null;
    }
    for (let i = 0; i < val; i++) { // first sum of values
        max += arr[i];
    }
    let temp = max;
    for (let i = val; i < arr.length; i++) { //uses ending position
        // adds and minuses to the array and checks for max
        temp = temp - arr[i - val] + arr[i];
        max = Math.max(max,temp)
    }
    return max;
};

let answer = maxSubarraySum ([1,4,2,10,23,3,1,0,20],4);
console.log("Answer: ", answer);