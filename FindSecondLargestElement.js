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





 
// function findSecondLargest(arr) {
//     if (arr.length < 2) {
//         return null;  // Return null if the array has less than two elements
//     }
    
//     let largest = arr[0];
//     let secondLargest = arr[1];

//     // Ensure largest and secondLargest are correctly assigned
//     if (largest < secondLargest) {
//         [largest, secondLargest] = [secondLargest, largest];
//     }
    
//     for (let i = 2; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             secondLargest = largest;
//             largest = arr[i];
//         } else if (arr[i] > secondLargest && arr[i] !== largest) {
//             secondLargest = arr[i];
//         }
//     }
    
//     return secondLargest;
// }

// const array = [5, 9, 3, 17, 2, 8];
// console.log("Second largest element in the array:", findSecondLargest(array));




// function findSecondLargest(arr) {
//     if (arr.length < 2) {
//         return null;  // Return null if the array has less than two elements
//     }
    
//     // Sort the array in descending order
//     arr.sort((a, b) => b - a);
    
//     // The second element after sorting will be the second largest
//     return arr[1];
// }


// const array = [5, 9, 3, 17, 2, 8];
// console.log("Second largest element in the array:", findSecondLargest(array));




// function findSecondLargest(arr) {
//     if (arr.length < 2) {
//         return null;  // Return null if the array has less than two elements
//     }
    
//     let largest = arr[0];
//     let secondLargest = -Infinity;

//     for (let i = 1; i < arr.length; i++) {
//         const current = arr[i];
//         if (current > largest) {
//             secondLargest = largest;
//             largest = current;
//         } else if (current < largest && current > secondLargest) {
//             secondLargest = current;
//         }
//     }
    
//     return secondLargest;
// }


// const array = [5, 9, 3, 17, 2, 8];
// console.log("Second largest element in the array:", findSecondLargest(array));
