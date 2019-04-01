// Write a function called isSubsequence which takes in two strings and
// checks whether the characters in the first string form a subsequence
// of the characters in the second string. In other words, the function
//should check whether the characters in the first string appear
//somewhere in the second string, without their order changing.

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting') // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'cba') // false

// Must meet the following complexities: Time O(N + M), Space O(1)

function isSubsequence (str1,str2) {
    // modify the string received and add to it when it matches
    // each char in order. That way once it runs through all, it's true
    // otherwise false.
    let minChar = 1;
    console.log(str2.length)
}
isSubsequence('abc','')

 // similar
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