let array = [1, 3, 5, 2, 7,10];

// function findMissingNumbers(arr) {
    let maxNum = Math.max(...array);
    // console.log(maxNum);
    let missingNumbers = [];

    for (let i = 1; i <= maxNum; i++) {
        if (!array.includes(i)) {
            missingNumbers.push(i);
        }
    
    }

    // return missingNumbers;


// }
console.log("Missing numbers:",missingNumbers );
// console.log("Missing numbers:", findMissingNumbers(array));
