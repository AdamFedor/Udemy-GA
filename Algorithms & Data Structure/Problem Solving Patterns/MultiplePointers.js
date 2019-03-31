
// O(N^2) for time complexity due to nested loops
// O(1) for space complexity.
// looks at the first in the array, then look through the full array. Then repeat...
function sumZeroTime(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

// Instead use pointers evaluating both sides.
// O(N) for Time complexity
// O(1) for Space complexity
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++
        }
    }
}