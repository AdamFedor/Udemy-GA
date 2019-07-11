// Write a program that will read 2 text files and determine top 10 words that occur
// in both files sorted by number of total occurences. Number of occurances should
// be printed as well.

const fs = require('fs');
const async = require('async');

let list1 = './list1.txt';
let list2 = './list2.txt';
let obj = {};

let callback = function (err, data) {
    if (err) {
        return console.error(err);
    } else {
        let arr = data.split('\n').forEach(function (element) {
            // loop in loop isn't as efficient as it could be straight to object
            for (let val of element) {
                obj[element] = (obj[element] || 0) + 1
            }
        });
        console.log(obj['Sonus Faber'])
        return obj;
    }
}

// must run these asynchronous
let file1 = () => {
    let comp = fs.readFile(list1, 'utf8', callback);
};

let file2 = () => {
    let comp = fs.readFile(list2, 'utf8', callback);
}

file1()