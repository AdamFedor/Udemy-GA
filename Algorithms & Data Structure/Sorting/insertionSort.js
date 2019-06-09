function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        // console.log(arr);
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j+1] = currentVal;
        console.log(arr);
    }
    return arr;
}
insertionSort([3,1,2,9,76,4])