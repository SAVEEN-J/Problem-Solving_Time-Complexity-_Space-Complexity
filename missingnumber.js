let array = [1, 3, 5, 2, 7];

function findMissingNumber(arr) {
    // Calculate the sum of numbers from 1 to the maximum number in the array
    let n = Math.max(...arr);
    let sum = (n * (n + 1)) / 2;

    // Subtract the sum of array elements from the sum of the sequence
    for (let num of arr) {
        sum -= num;
    }

    return sum;
}

console.log("Missing number:", findMissingNumber(array));
