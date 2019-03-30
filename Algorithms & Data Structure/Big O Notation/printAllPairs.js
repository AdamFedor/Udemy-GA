function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        } // this is O(n) = n(squared) - can't show the superscript of 2 to make it sqared
    }
}