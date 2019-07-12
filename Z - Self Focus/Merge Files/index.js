// Write a program that will read 2 text files and determine top 10 words that occur
// in both files sorted by number of total occurences. Number of occurances should
// be printed as well.

const fs = require('fs');
let obj = {};
let arr = [];

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

let exportTen = () => {
    for (var audiofool in obj) {
        arr.push([audiofool, obj[audiofool]])
        arr.sort((a, b) => { return b[1] - a[1] });
    }
    console.log(arr)
    let exportArr = arr.slice(0, 10);
    fs.writeFile('export.txt','',(err) => { // exports and wipes out history
        if (err) throw err;
        console.log('Exported successfully.')
    })
    for (var i = 0; i < (exportArr.length - 1); i++) {
        fs.appendFileSync('export.txt', exportArr[i]+'\n');
    }
    endArr = exportArr.length - 1;
    fs.appendFileSync('export.txt', exportArr[endArr]);
}

Promise.all([file1, file2]).then(val => {exportTen()}).catch(err => console.error(err))
