function binarySearch(arr, val) {
    var start = 0;
    var end = arr.length -1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== val && start <= end) {
        if (val < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === val ? middle : -1;
}
binarySearch([2,5,6,9,13,15,28,30], 13)