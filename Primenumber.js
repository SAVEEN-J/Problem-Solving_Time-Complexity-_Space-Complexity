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







