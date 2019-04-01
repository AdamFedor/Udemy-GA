// Write a function called averagePair.
// Given a sorted array of integers and a target average, determine if
// there is a pair of values in the array where the average of the pair
// equals the target average. There may be more than one pair that
// matches the average target.

// Bonus Constraints: Time O(N), Space O(1)
// averagePair([1,2,3],2.5) // true

// big assumption here! That the values are in order from low to high.

function averagePair (arr1, val1) {
    // loop through the two index spots
    if(arr1.length < 2) {
        return false;
    }
    let start = 0;
    let end = arr1.length-1; // since it starts on 0
    while (start < end) {
        let avgNum = (arr1[start] + arr1[end]) / 2
        if (avgNum === val1) return true
        else if (avgNum > val1) end--
        else start++
    }
    return false;
}

let answer = averagePair([1,3,3,5,6,7,10,12,19],8)
console.log(answer);
