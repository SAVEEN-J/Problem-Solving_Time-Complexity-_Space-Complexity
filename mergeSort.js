function mergeSort(arr) {
    // Base case: if the array has only one element or is empty, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    // Recursively sort the two halves
    const sortedLeftHalf = mergeSort(leftHalf);
    const sortedRightHalf = mergeSort(rightHalf);

    // Merge the sorted halves
    return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(leftArr, rightArr) {
    let mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and merge them in sorted order
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            mergedArr.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            mergedArr.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate remaining elements from leftArr and rightArr
    return mergedArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

// Example usage:
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array is:", mergeSort(arr));
