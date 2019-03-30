// Goal to confirm second array is the first array squared
// same([1,2,3]), [1,4,9])

function freqCounter (array1, array2) {
    // if array1.length === array2.length proceed
        // loop index of array1 with array2
            // if array1*array1 per index !== array2 then
                // return false
            // return true
    // This is an example of time complexity of N^2 and is impactful
        // this is because a for loop and indexOf() which is a loop

    if(array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        // Well in their example they are looking regardless of the index order
        let correctIndex = array2.indexOf(arr[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        // this removes from the array
        array2.splice(correctIndex,1)
    }
    return true;
}

// since the above was nested loops, so it's not ideal

// The refactored solution
function same (arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

var answer1 = same([1,2,2,3],[1,4,9,9]);
console.log(answer1);