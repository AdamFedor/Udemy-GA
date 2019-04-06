function outer(input){
    var outerScopedVariable = []
    function helper(helperInput) {
        // modify the outerScopedVariable
        helper(helperInput--)
    }
    helper(input)
    return outerScopedVariable;
}

function collectOddValues(arr) {
    let result = []
    function helper(helperInput){
        if (helperInput.length === 0) {
            return;
        }
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helper(helperINput.slice(1))
    }
    helper(arr)
    return result;
}

// Pure recursion of collectOddValues
function collectOddValuesPure(arr) {
    let newArr = [];
    if (arr.length === 0) {
        return newArr;
    }
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValuesPure(arr.slice(1)));
    return newArr;
}
let answer = collectOddValues([1,2,3,4,5]);
console.log(answer);