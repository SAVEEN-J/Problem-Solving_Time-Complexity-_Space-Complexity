
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



function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    }
    // Recursive case: multiply n by factorial of (n-1)
    else {
        return n * factorial(n - 1);
    }
}


console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)
