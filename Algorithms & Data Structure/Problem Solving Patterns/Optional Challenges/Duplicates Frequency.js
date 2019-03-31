// Implement a function which accepts a variable number of args and checks
// whether there are any duplicates amonng the arguments passed in.
// Solvable via Freq Counter or multiple pointer patterns.

// areThere Duplicates(1,2,3) // false
// areThere Duplicates(1,2,2) // true
// areThere Duplicates('a','b','c','a') // true

// Restrictions: Time O(n), Space O(n)

function areThereDuplicatesCounter () {
    let obj = {};
    if (arguments.length < 2) {
        return false;
    }
    for (let argument of arguments) {
        if (obj[argument]) {
            return true;
        } else {
            obj[argument] = 1;
        }
    }
    return false;
}

let answer = areThereDuplicatesCounter('1','2','3','3');
console.log('Counter: ', answer);

// Class Answer for Frequency Counter
function areThereDuplicatesFreq() {
    let collection = {}
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for (let key in collection) {
        if (collection[key] > 1) return true
    }
    return false;
}

// Class Answer for Multiple Pointers
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}

// Class One Liner Answer
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}
// Set.size gives the quantity of unique arguments
// arguments.length give the number of arguments
// If unique equal length, then no duplicates.