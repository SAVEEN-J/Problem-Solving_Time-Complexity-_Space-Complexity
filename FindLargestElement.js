
//////2 .Write a function to find the largest element in an array.
function findLargestElement(array) {
    // debugger
    if (array.length === 0) {
        return undefined; // If array is empty, return undefined
    }
//* It only uses a constant amount of extra space for variables like i and largest. Therefore, the space complexity of the function is O(1)

    let largest = array[0]; // Assume first element is the largest

 //* time complexity of this  O(n). because  The loop iterates through the array once. Since it goes through each element exactly once.

    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i]; // Update largest if current element is greater
        }
    }

    return largest;
}


const arr = [10, 5, 20,300, 15, 30];
console.log("Largest element in an array :",findLargestElement(arr)); // Output: 300
// Time complexity: O(n)
// Space complexity: O(1)
