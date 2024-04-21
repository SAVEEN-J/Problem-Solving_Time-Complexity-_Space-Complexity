function selectionSort(arr) {
    var n = arr.length;
    // Traverse through all array elements
    for (var i = 0; i < n; i++) {
        // Find the minimum element in unsorted array
        var min_index = i;
        for (var j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        // Swap the found minimum element with the first element
        var temp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = temp;
    }
    return arr;
}


var arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array is:", selectionSort(arr));
