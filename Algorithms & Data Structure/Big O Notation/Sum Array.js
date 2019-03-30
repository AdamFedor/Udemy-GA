function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    } // O(n) of space of ram since array gets larger based off of n. But O(1) when looking at the algorithm only.
    return total;
}