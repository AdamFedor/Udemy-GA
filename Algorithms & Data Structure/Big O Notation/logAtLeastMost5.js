function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5,n); i++) {
        console.log(i);
    }
} // this is O(n)
logAtLeast5(10);

function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
} // this is O(1) if above 5. So it's O(1).
// this doesn't do anything if the value of n is 0 or negative.
logAtMost5(10);