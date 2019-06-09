function linearSearch (arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}
linearSearch([34,6,2,1,78], 2)