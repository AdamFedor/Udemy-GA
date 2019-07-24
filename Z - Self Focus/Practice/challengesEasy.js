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

function longestWord(sen) {

    return sen;
}
let valueFirstLongest = 'fun & !!time';
let valueSecondLongest = 'I love dogs';
let firstLongestWord = longestWord(valueFirstLongest); // time
let secondLongestWord = longestWord(valueSecondLongest); // love
console.log('--- longestWord');
// console.log(valueFirstLongest, " --> ", firstLongestWord);
// console.log(valueSecondLongest, " --> ", secondLongestWord);
console.log('======================================')

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
};

let firstSimpleNum = 12;
let secondSimpleNum = 140;
let firstSimpleAdding = simpleAdding(firstSimpleNum); // 78
let secondSimpleAdding = simpleAdding(secondSimpleNum); // 9870
console.log('--- simpleAdding');
console.log(firstSimpleNum, " --> ", firstSimpleAdding);
console.log(secondSimpleNum, " --> ", secondSimpleAdding);
console.log('======================================');

// Have the function LetterCapitalize(str) take the str parameter being passed
// and capitalize the first letter of each word. Words will be separated by
// only one space. 

function letterCapitalize(str) {
    let words = str.split (' ');
    strReturn = '';
    for (var i = 0; i < words.length; i++) {
        let newWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        strReturn = strReturn + ' ' + newWord;
    };
    return strReturn;
};

let firstLetter = "hello world";
let secondLetter = "i ran there";
let firstLetterCapitalize = letterCapitalize(firstLetter) // Hello World
let secondLetterCapitalize = letterCapitalize(secondLetter) // I Ran There
console.log('--- letterCapitalize');
console.log(firstLetter, " --> ", firstLetterCapitalize);
console.log(secondLetter, " --> ", secondLetterCapitalize);
console.log('======================================')

// Have the function SimpleSymbols(str) take the str parameter being passed
// and determine if it is an acceptable sequence by either returning the string
// true or false. The str parameter will be composed of + and = symbols with
// several characters between them (ie. ++d+===+c++==a) and for the string to
// be true each letter must be surrounded by a + symbol. So the string to the left
// would be false. The string will not be empty and will have at least one letter. 

// function simpleSymbols(str) {
//     return str;
// };

// let firstSymbols = "+d+=3=+s+";
// let secondSymbols = "f++d+";
// let firstSimpleSymbols = simpleSymbols(firstSymbols) // true
// let secondSimpleSymbols = simpleSymbols(secondSymbols) // false
// console.log('--- simpleSymbols');
// console.log(firstSymbols, " --> ", firstSimpleSymbols);
// console.log(secondSymbols, " --> ", secondSimpleSymbols);
// console.log('======================================');

// Have the function CheckNums(num1,num2) take both parameters being passed
// and return the string true if num2 is greater than num1, otherwise return
// the string false. If the parameter values are equal to each other then
// return the string -1. 

function checkNums(num1, num2) {
    if (num1 === num2) return -1;
    if (num1 < num2) {
        return true;
    } else {
        return false;
    }
};

let firstCheckNums = checkNums(3, 119) // true
let secondCheckNums = checkNums(67, 67) // -1
console.log('--- checkNums');
console.log('3, 119', " --> ", firstCheckNums);
console.log('67, 67', " --> ", secondCheckNums);
console.log('======================================');

// Have the function TimeConvert(num) take the num parameter being passed
// and return the number of hours and minutes the parameter converts to
// (ie. if num = 63 then the output should be 1:3). Separate the number of
// hours and minutes with a colon.

function timeConvert(num) {
    if (num <= 0) return;
    let hours = Math.floor(num/60);
    let minutes = num - (hours*60);
    return hours + ':' + minutes;
};

let firstTime = 126;
let secondTime = 45;
let firstTimeConvert = timeConvert(firstTime) // '2:6'
let secondTimeConvert = timeConvert(secondTime) // '0:45'
console.log('--- timeConvert');
console.log(firstTime, " --> ", firstTimeConvert);
console.log(secondTime, " --> ", secondTimeConvert);
console.log('======================================')

// Have the function AlphabetSoup(str) take the str string parameter being
// passed and return the string with the letters in alphabetical order (ie.
// hello becomes ehllo). Assume numbers and punctuation symbols will not be
// included in the string.

function alphabetSoup(str) {
    let sourceStr = str.split('');
    let exportStr = '';
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(sourceStr[i]);
    };
    arr.sort();
    for (let i = 0; i < str.length; i++) {
        exportStr = exportStr + arr[i];
    };
    return exportStr;
};

let firstSoup = 'coderbyte';
let secondSoup = 'hooplah';
let firstAlphabetSoup = alphabetSoup(firstSoup) // 'bcdeeorty'
let secondAlphabetSoup = alphabetSoup(secondSoup) // 'ahhloop'
console.log('--- alphabetSoup');
console.log(firstSoup, " --> ", firstAlphabetSoup);
console.log(secondSoup, " --> ", secondAlphabetSoup);
console.log('======================================');

// Have the function KaprekarsConstant(num) take the num parameter being
// passed which will be a 4-digit number with at least two distinct digits.
// Your program should perform the following routine on the number: Arrange
// the digits in descending order and in ascending order (adding zeroes to
// fit it to a 4-digit number), and subtract the smaller number from the bigger
// number. Then repeat the previous step. Performing this routine will always
// cause you to reach a fixed number: 6174. Then performing the routine on 6174
// will always give you 6174 (7641 - 1467 = 6174). Your program should return
// the number of times this routine must be performed until 6174 is reached.
// For example: if num is 3524 your program should return 3 because of the
// following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352,
// (3) 8532 - 2358 = 6174. 
// Hard challenges are worth 15 points and you are not timed for them.

// function kaprekarsConstant(num) {
// }

// let firstKaprekars = 2111;
// let secondKaprekars = 9831;
// let firstKaprekarsConstant = kaprekarsConstant(firstKaprekars) // 5
// let secondKaprekarsConstant = kaprekarsConstant(secondKaprekars) // 7
// console.log('--- alphabetSoup');
// console.log(firstKaprekars, " --> ", firstKaprekarsConstant);
// console.log(secondKaprekars, " --> ", secondKaprekarsConstant);
// console.log('======================================');