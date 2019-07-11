// Write a program that will read 2 text files and determine top 10 words that occur
// in both files sorted by number of total occurences. Number of occurances should
// be printed as well.

const fs = require('fs');
const async = require('async');

let list1 = './list1.txt';
let list2 = './list2.txt';
// let obj = {};

let callback = function (err, data) {
    if (err) {
        // return console.error(err);
        reject(err);
    } else {
        let arr = data.split('\n').forEach(function (element) {
            // loop in loop isn't as efficient as it could be straight to object
            for (let val of element) {
                obj[element] = (obj[element] || 0) + 1
            }
        });
        console.log(obj['Sonus Faber']);
        resolve("done");
        // return obj;
    }
}

let file1 = () => {
    return new Promise((resolve, reject) => {
        let obj = {}
        let comp = fs.readFile(list1, 'utf8', function (err, data) {
            if (err) {
                reject(err);
            } else {
                let arr = data.split('\n').forEach(function (element) {
                    for (let val of element) {
                        obj[element] = (obj[element] || 0) + 1
                    }
                });
                console.log(obj['Sonus Faber']);
                resolve(obj);
            };
        });
    });
};

let file2 = () => {
    return new Promise((resolve, reject) => {
        let obj = {}
        let comp = fs.readFile(list1, 'utf8', function (err, data) {
            if (err) {
                reject(err);
            } else {
                let arr = data.split('\n').forEach(function (element) {
                    for (let val of element) {
                        obj[element] = (obj[element] || 0) + 1
                    }
                });
                console.log(obj['Sonus Faber']);
                resolve(obj);
            };
        });
    });
};

file1().then(val => console.log(val['Sonus Faber']))


// Merge Pseudocode
// 1. Search through object by key and store in an array
// 2. Pivot the object sorting and placing - play on efficiency of the sort
// 3. Output the top 10 with values.