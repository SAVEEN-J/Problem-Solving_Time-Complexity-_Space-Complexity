function rotateArrayRight(arr, k) {
    const n = arr.length;
    // Calculate the effective number of rotations
    k = k % n;
    // Reverse the entire array
    reverseArray(arr, 0, n - 1);
    // Reverse the first k elements
    reverseArray(arr, 0, k - 1);
    // Reverse the remaining elements
    reverseArray(arr, k, n - 1);
}

// Helper function to reverse a portion of an array
function reverseArray(arr, start, end) {
    while (start < end) {
        // Swap elements at start and end indices
        [arr[start], arr[end]] = [arr[end], arr[start]];
        // Move towards the center of the array
        start++;
        end--;
    }
}

// Example usage:
let myArray = [1, 2, 3, 4, 5];
let k = 2;
rotateArrayRight(myArray, k);
console.log(myArray); // Output: [4, 5, 1, 2, 3]
