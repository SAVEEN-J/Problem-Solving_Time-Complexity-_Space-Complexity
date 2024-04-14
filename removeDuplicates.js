function removeDuplicates(arr) {
    // Create a Set from the array to automatically remove duplicates
    let uniqueSet = new Set(arr);
    // Convert the Set back to an array
    let uniqueArray = Array.from(uniqueSet);
    return uniqueArray;
}

// Example usage:
let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
let newArray = removeDuplicates(arrayWithDuplicates);
console.log(newArray); // Output: [1, 2, 3, 4, 5]
