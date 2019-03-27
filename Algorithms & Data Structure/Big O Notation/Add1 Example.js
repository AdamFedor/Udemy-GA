// Examples of time, but time is subjective to what is running it.
// So this is not the right path to follow.

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed for the first: ${(t2 - t1) / 1000 } seconds.`)
// console.log(addUpTo(6));
// results in about 1.24 seconds

function addUpTo2(n) {
    return n * (n+1)/2;
}

let t3 = performance.now();
addUpTo(1000000000);
let t4 = performance.now();
console.log(`Time Elapsed for the second: ${(t3 - t4) / 1000 } seconds.`)
// console.log(addUpTo2(6))
// results in about 0.0001 seconds

// Both work the same but the second ends up significantly shorter.