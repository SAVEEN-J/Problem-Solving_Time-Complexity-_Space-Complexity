
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




// 0: The sequence starts with 0.
// 1: Then comes 1, which is the next number.
// 1: To get the third number, you add the two preceding numbers: 0 + 1 = 1.
// 2: To get the fourth number, add the last two numbers: 1 + 1 = 2.
// 3: The fifth number is obtained by adding the last two numbers: 1 + 2 = 3.
// 5: To get the sixth number, add the last two numbers: 2 + 3 = 5.
// 8: The seventh number is obtained by adding the last two numbers: 3 + 5 = 8.
// 13: The eighth number is obtained by adding the last two numbers: 5 + 8 = 13.
// 21: The ninth number is obtained by adding the last two numbers: 8 + 13 = 21.
// 34: Finally, the tenth number is obtained by adding the last two numbers: 13 + 21 = 34.