// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter
// of each string in the array.

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst(array) {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
    res.push(string);
    return res;
}

let answer = capitalizeFirst(['car', 'taco', 'banana']);
console.log(answer);

// If the array is only 1 then return the string with the first letter
// upercased and the array string at 1 (of 0 to infinity).
// array[0][0] is the first item in the array and the first char of that.
