function binarySearch(arr, target) {
    // Perform binary search on a sorted array to find the target element.
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

// Example usage:
const arr = [1, 2, 4, 5, 7, 9];
const target = 7;
const result = binarySearch(arr, target);
if (result !== -1) {
    console.log(`Element ${target} found at index ${result}.`);
} else {
    console.log(`Element ${target} not found in the array.`);
}
