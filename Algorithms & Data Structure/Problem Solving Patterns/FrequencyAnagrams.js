// Anagram of course being any word or phrase being rewritten to another word. Cinema to Iceman
// Given two strings, write a function to determine if the second string is an anagram of the first.
// no spaces, all lower case a-z

function validAnagram (str1, str2) {
    if(str1.length !== str2.length) {
        console.log('nope');
        return false;
    }
    let arr1 = str1.split('')
    let arr2 = str2.split('')
    let firstObj = {}
    let secondObj = {}
    for (let val of arr1) {
        firstObj[val] = (firstObj[val] || 0) + 1
    }
    for (let val of arr2) {
        secondObj[val] = (secondObj[val] || 0) + 1
    }
    for (let key in firstObj) {
        if(!(key in secondObj)){
            return false
        }
        if(firstObj[key] !== secondObj[key]) {
            return false
        }
    }
    return true
}

// refactored below
function refactoredAnagram(first,second) {
    if (first.length !== second.length) {
        return false;
    }
    const lookup = {}
    var example = validAnagram('abcdefg','gfedcba')
    console.log(example)

    for (let i = 0; i < str1.length; i++) {
        let letter = first[i]; // so this doesn't have to be repeated over and over below
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
        return true;
    }
}