function linearSearch(arr, target) {
    // Perform linear search on an array to find the target element.
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if found
        }
    }
    return -1; // Return -1 if not found
}


const arr = [4, 2, 7, 1, 9, 5];
const target = 1;
const result = linearSearch(arr, target);
if (result !== -1) {
    console.log(`Element ${target} found at index ${result}.`);
} else {
    console.log(`Element ${target} not found in the array.`);
}
