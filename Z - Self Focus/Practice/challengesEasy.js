// coderbyte

// Have the function FirstReverse(str) take the str parameter being passed and
// return the string in reversed order. For example: if the input string is
// "Hello World and Coders" then your program should return the string sredoC
// dna dlroW olleH.

function firstReverse(str) {
    var answer = "";
    var splitIt = str.split('');
    for (var i = 0; i < str.length; i++) {
        answer = splitIt[i] + answer;
    }
    return answer;
}

let stringForReverse = 'Example of a string';
let FirstReverseAnswer = firstReverse(stringForReverse);
console.log('--- firstReverse');
console.log(stringForReverse, " --> ", FirstReverseAnswer);
console.log('======================================')

// Have the function FirstFactorial(num) take the num parameter being passed
// and return the factorial of it. For example: if num = 4, then your program
// should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be
// between 1 and 18 and the input will always be an integer. 

function firstFactorial(num) {
    var val = 1;
    for (var i = 1; i <=num; i++) {
        val = val * i;
    }
    return val;
}

let valueForFactorial = 4;
let FirstFactorialAnswer = firstFactorial(valueForFactorial);
console.log('--- firstFactorial');   
console.log(valueForFactorial, " --> ", FirstFactorialAnswer);
console.log('======================================')

// Have the function LongestWord(sen) take the sen parameter being passed
// and return the largest word in the string. If there are two or more words
// that are the same length, return the first word from the string with that
// length. Ignore punctuation and assume sen will not be empty. 

// function longestWord(sen) {

//     return sen;
// }
// let valueFirstLongest = 'fun & !!time';
// let valueSecondLongest = 'I love dogs';
// let firstLongestWord = longestWord(valueFirstLongest); // time
// let secondLongestWord = longestWord(valueSecondLongest); // love
// console.log('--- longestWord');
// // console.log(valueFirstLongest, " --> ", firstLongestWord);
// // console.log(valueSecondLongest, " --> ", secondLongestWord);
// console.log('======================================')

// Have the function LetterChanges(str) take the str parameter being passed
// and modify it using the following algorithm. Replace every letter in the
// string with the letter following it in the alphabet (ie. c becomes d, z
// becomes a). Then capitalize every vowel in this new string (a, e, i, o,
// u) and finally return this modified string. 

function letterChanges(str) {
    let sourceStr = str.split('');
    let exportStr = '';
    for (i = 0; i < str.length; i++) {
        let originalLetter = sourceStr[i].charCodeAt(0);
        if (originalLetter > 64 && originalLetter < 123) {
            let newLetter = String.fromCharCode(originalLetter + 1);
            if (newLetter === 'a' || newLetter === 'e' || newLetter === 'i' || newLetter === 'o' || newLetter === 'u') {
                exportStr = exportStr + newLetter.toUpperCase();
            } else {
                exportStr = exportStr + newLetter;
            };
        } else {
            exportStr = exportStr + sourceStr[i];
        };
    };
    return exportStr;
};

let valueFirstLetter = "hello*3";
let valueSecondLetter = "fun times!";
let firstLetterChanges = letterChanges(valueFirstLetter); // lfmmp*3;
let secondLetterChanges = letterChanges(valueSecondLetter); // "gvO Ujnft!"
console.log('--- letterChanges'); 
console.log(valueFirstLetter, " --> ", firstLetterChanges);
console.log(valueSecondLetter, " --> ", secondLetterChanges);
console.log('======================================')

// Have the function SimpleAdding(num) add up all the numbers from 1 to num.
// For example: if the input is 4 then your program should return 10 because
// 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number
// from 1 to 1000. 

function simpleAdding(num) {
    let val = 0;
    if (num > 1000 || num < 1) return;
    for (var i = 1; i < num + 1; i++) {
        val = val + i;
    };
    return val;
}

let firstSimpleNum = 12;
let secondSimpleNum = 140;
let firstSimpleAdding = simpleAdding(firstSimpleNum); // 78
let secondSimpleAdding = simpleAdding(secondSimpleNum); // 9870
console.log('--- simpleAdding');
console.log(firstSimpleNum, " --> ", firstSimpleAdding);
console.log(secondSimpleNum, " --> ", secondSimpleAdding);
console.log('======================================');

// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 

// function letterCapitalize(str) {
 
//     return str;

// }

// let firstletterCapitalize = letterCapitalize("hello world") // Hello World
// let secondletterCapitalize = letterCapitalize("i ran there") // I Ran There
// console.log('--- letterCapitalize');

// console.log('======================================')