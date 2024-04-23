function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Partition the array into two subarrays
        const partitionIndex = partition(arr, low, high);

        // Recursively sort the two subarrays
        quickSort(arr, low, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    // Select the last element as the pivot
    const pivot = arr[high];
    let i = low - 1;

    // Move smaller elements to the left of the pivot
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    // Move pivot element to its correct position
    swap(arr, i + 1, high);

    // Return the index of the pivot element
    return i + 1;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array is:", quickSort(arr));



// Quick sort is another efficient comparison-based sorting algorithm that follows the divide-and-conquer paradigm. It works by selecting a pivot element from the array and partitioning the other elements into two subarrays according to whether they are less than or greater than the pivot. The two subarrays are then recursively sorted.

// Here's how the quick sort algorithm works:

// Divide: Select a pivot element from the array. Partition the array into two subarrays: elements less than the pivot and elements greater than the pivot.
// Conquer: Recursively apply quick sort to the two subarrays.
// Combine: No additional step is needed for combining because quick sort works in place.
// The choice of pivot greatly influences the performance of quick sort. A good pivot choice minimizes the size difference between the two partitions at each step. Common pivot selection methods include selecting the first element, last element, middle element, or a random element as the pivot.
// Sorted array is: [11, 12, 22, 25, 34, 64, 90]
// In the quickSort function, we recursively apply quick sort to the two subarrays created by the partitioning step. The partition function selects a pivot element, partitions the array around the pivot, and returns the index of the pivot element. Finally, the swap function is used to swap elements in the array.