//Write a recursive function to calculate the nth Fibonacci number.
function fibonacci(n) {
  //n = 0 and n = 1
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    // Recursive-sum of previous two Fibonacci numbers
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(10)); // Output: 55
