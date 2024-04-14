function findCommonElements(arr1, arr2) {
    // Create a Set to store unique elements of arr1
    let set = new Set(arr1);
    // Initialize an array to store common elements
    let commonElements = [];
    
    // Iterate through arr2 and check if each element exists in the Set
    for (let element of arr2) {
        if (set.has(element)) {
            commonElements.push(element);
            // Remove the element from the Set to avoid duplicates
            set.delete(element);
        }
    }
    
    return commonElements;
}


let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];
let result = findCommonElements(array1, array2);
console.log(result); // Output: [3, 4, 5]
