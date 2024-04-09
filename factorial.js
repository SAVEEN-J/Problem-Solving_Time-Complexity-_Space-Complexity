// 2  Write a function that takes a number as input and returns the factorial of that number.

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

const num = 5;
console.log("Factorial of", num, "is:", factorial(num));




// Understanding the Problem:

// Factorial of a number is the product of all positive integers less than or equal to that number. For example, the factorial of 5 (denoted as 5!) is calculated as: 5! = 5 × 4 × 3 × 2 × 1 = 120.