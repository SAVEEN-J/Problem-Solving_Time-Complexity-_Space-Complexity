//////// 1  Explain the concept of prime numbers and write a function to check if a given number is prime.
function isPrime(number) {
   
    if (number <= 1) {
        return false; // Numbers less than or equal to 1 are not prime //* time complexity is O(1) because it's a simple comparison.
    }
    if (number <= 3) {
        return true; // 2 and 3 are prime  //* time complexity is O(1) because it's a simple comparison.
    }
    
    // Check if the number is divisible by 2 or 3
    if (number % 2 === 0 || number % 3 === 0) {
        return false; // If divisible by 2 or 3, not prime  //* time complexity is O(1) because simple modulo operations.
    }
    
    // Iterate from 5 to the square root of the number

    //* It only uses a constant amount of extra space for variables like i. Therefore, the space complexity of the function is O(1)
   //* time complexity of this loop is O(sqrt(n)). because  loop iterates up to the square root of the given number.

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false; // If divisible by current number or (current number + 2), not prime 
        }
    }
    
    return true; // If not divisible by any smaller number, it's prime
}
console.log("is prime numbers :",isPrime(1001));
console.log("is prime numbers : ",isPrime(997)); 
// Time complexity: O(sqrt(n))
// Space complexity: O(1)



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


////////4 Write a function to find the nth Fibonacci number using iteration.
function findNthFibonacci(n) {
    if (n <= 0) {
        return undefined; // There is no Fibonacci number for n <= 0
    }

    if (n === 1 || n === 2) {
        return 1; // The first two Fibonacci numbers are both 1
    }
//*Initializing the variables Prev and Curr has a constant time complexity of O(1)
    let Prev = 0;
    let Curr = 1;
//*loop iterates from 3 to n ,n is the desired Fibonacci number ,the loop iterates up to n - 2 times, the time complexity of this loop is O(n)
    for (let i = 2; i <= n; i++) {
        Curr = Prev + Curr;
        Prev = Curr - Prev;
        }

    return Curr;
}

// Example usage:
console.log("find Fibonacci nth:",findNthFibonacci(9)); // Output: 34
//console.log("find Fibonacci nth:",findNthFibonacci(10)); // Output: 55

// A Fibonacci number is a sequence of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1.
// Fibonacci sequence:0 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
// Index:             0 1  2  3  4  5  6  7   8   9   10

// Time complexity: O(n)
// Space complexity: O(1)



//// 5 Write a function to calculate the factorial of a number using iteration.

function factorial(n) {
    if (n < 0) {
        return undefined; // Factorial is not defined for negative numbers
    }
//* Initializing the variable result and i has a constant time complexity of O(1)
    let result = 1;
//*The loop iterates from 2 to n. Since it goes through each integer exactly once the time complexity of this loop is O(n).
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

// Example usage:
console.log("factorial",factorial(5)); // Output: 120  5*4*3*2*1*=120

// Time complexity: O(n)
// Space complexity: O(1)