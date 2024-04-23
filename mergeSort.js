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

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array is:", mergeSort(arr));


// Merge sort is a popular comparison-based sorting algorithm that follows the divide-and-conquer paradigm. The concept of merge sort involves dividing the input array into smaller subarrays until each subarray contains only one element. Then, it merges these subarrays in a sorted order until only one sorted array remains.

// Here's how the merge sort algorithm works:

// Divide: Split the input array into two halves recursively until each subarray has only one element.
// Conquer: Merge the smaller sorted subarrays into larger sorted subarrays until the entire array is sorted.
// The key operation in merge sort is the merging step, where two sorted subarrays are combined to form a single sorted array. This merging process takes advantage of the fact that both subarrays are already sorted.

// Sorted array is: [11, 12, 22, 25, 34, 64, 90]
// In the mergeSort function, we recursively split the input array into smaller halves until each subarray has only one element. Then, in the merge function, we merge the sorted subarrays back together in sorted order. This process continues until the entire array is sorted.