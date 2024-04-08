////////////3  Write a function to find the second largest element in an array.

function findSecondLargestElement(array) {
    // If the array has less than 2 elements, there's no second largest element
    if (array.length < 2) {
        return undefined; // If array has less than 2 elements, return undefined
    }
//* Initializing the variables largest,i and secondLargest has a constant time complexity of O(1).

    let largest = array[0];
    let secondLargest = -Infinity; // Initializing to negative infinity

//* time complexity of this  O(n). because  The loop iterates through the array once. Since it goes through each element exactly once.
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            secondLargest = largest;
            largest = array[i];
        } else if (array[i] > secondLargest && array[i] !== largest) {
            secondLargest = array[i];
        }
    }

    return secondLargest !== -Infinity ? secondLargest : undefined;
}

const array = [10, 5, 25, 200,20, 15, 30 ,250];
console.log("Second largest element in an array :",findSecondLargestElement(array)); // Output: 200

// Time complexity: O(n)
// Space complexity: O(1)