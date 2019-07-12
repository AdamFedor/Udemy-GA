// Write a program that will read 2 text files and determine top 10 words that occur
// in both files sorted by number of total occurences. Number of occurances should
// be printed as well.

// Actions
// Fundamental flaw in forEach loop. It is adding each character count for the entire word.

const fs = require('fs');
let obj = {};

let list1 = './list1.txt';
let list2 = './list2.txt';

let file1 = new Promise((resolve, reject) => {
    fs.readFile(list1, 'utf8', function (err, data) {
        if (err) {
            reject(err);
        } else {
            let arr = data.split(/\n/).forEach((element) => {
                obj[element] = (obj[element] || 0) + 1;
            });
            resolve();
        };
    });
});

let file2 = new Promise((resolve, reject) => {
    fs.readFile(list2, 'utf8', function (err, data) {
        if (err) {
            reject(err);
        } else {
            let arr = data.split(/\n/).forEach((element) => {
                obj[element] = (obj[element] || 0) + 1;
            });
            resolve();
        };
    });
});

let mergeTen = () => {
// Switching to async to promises, instead just storing in global obj
// Output the top 10 with values.
// Sorting focus on data that is sorted, random, nearly sorted, and reverse.
// Since unique vals, sort criterion does not focus on when only a few values are no longer unique.);
    // let mergedArray = Object.values(obj).sort((a, b) => {return obj[a]-obj[b]})
    // let mergedArray = Object.entries(obj)
    // console.log(mergedArray);

}

Promise.all([file1, file2]).then(val => {mergeTen()}).catch(err => console.error(err))