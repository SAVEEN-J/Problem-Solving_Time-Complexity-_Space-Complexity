//Write a recursive function to calculate the factorial of a number.
function factorial(n) {
    //factorial of 0 is 1
    if (n === 0) {
        return 1;
    }
    // Recursive- multiply n by factorial of (n-1)
    else {
        return n * factorial(n - 1);
    }
}


console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)
