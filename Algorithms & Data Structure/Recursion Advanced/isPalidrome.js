// Write a recursive function called isPalindrome which returns
// true if the string passed to it is a palindrome(reads the same
// forward and backward).Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome (str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
    return false;
}

let answer = isPalindrome('abcba');
console.log(answer);

// check if it's one, which is palidrome
// check if it is two and they are the same
// if the first char in string === slice(-1) which is the last character
// then return the whole process repeated with the string sliced
// taking away the first and last character.