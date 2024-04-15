// 1 .Explain the Fibonacci series and write a function to generate the first n numbers in the Fibonacci sequence.
function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const fibonacciSequence = [0, 1]; // Initialize the sequence with the first two Fibonacci numbers

    for (let i = 2; i < n; i++) {
         fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2]; 
  
    }

    return fibonacciSequence;
}

const fibonacciSequence = generateFibonacci(7);
console.log("Fibonacci Sequence:", fibonacciSequence); //Fibonacci Sequence: [0, 1, 1, 2, 3, 5, 8]




// Understanding the Problem:

// The Fibonacci series is a sequence of numbers where the next number is found by adding up the two numbers before it. The sequence starts with 0 and 1. The next numbers in the series are 1, 2, 3, 5, 8, and so on.

// F(n) = F(n-1) + F(n-2)
//The Fibonacci sequence starts as follows: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//Each number is the sum of the two preceding ones:
// 
//              F(0) = 0
//              F(1) = 1
// 0 + 1 = 1,   F(2) = F(1) + F(0)   => 1 + 0  => 1
// 1 + 1 = 2,   F(3) = F(2) + F(1)   => 1 + 1  => 2  
//1 + 2 = 3,    F(4) = F(3) + F(2)   => 2 + 1  => 3 
// 2 + 3 = 5,   F(5) = F(4) + F(3)   => 3 + 2  => 5
// 3 + 5 = 8,   F(6) = F(5) + F(4)   => 5 + 3  => 8
// 5+ 8=13,
//8+13 =21  etc 
