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
    if (str1.length < minChar || str2.length < minChar) {
        return false;
    };
    let i = 0;
    let j = 0;
    while (i < str1.length) {
        if (str1[i] === str2[j]) {
            i++;
            j++;
        } else if (j < str2.length) {
            j++;
        } else if (j === str2.length && i !== str1.length) {
            return false
        }
    }
    return true;
}
let answer = isSubsequence('abc','abbbbc');
console.log("answer: ", answer)

// Another example of iterative
function isSubsequence1(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }

  // Another example recurisve but not Space O(1)
  function isSubsequence2(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
  }