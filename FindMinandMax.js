function findMaxAndMin(arr) {
    if (arr.length === 0) {
        return { max: undefined, min: undefined };
    }

    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return { max, min };
}

const array = [3, 1, 7, 4, 9, 2];
const result = findMaxAndMin(array);
console.log("Maximum element:", result.max); // Output: 9
console.log("Minimum element:", result.min); // Output: 1
