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
console.log("is prime numbers :",isPrime(101));
console.log("is prime numbers : ",isPrime(999)); 
// Time complexity: O(sqrt(n))
// Space complexity: O(1)




// Prime numbers are natural numbers greater than 1 that have only two distinct positive divisors: 1 and themselves. In other words, a prime number is a whole number greater than 1 whose only factors are 1 and itself. For example, 2, 3, 5, 7, 11, and 13 are prime numbers.


// In the function isPrime, we have two special cases handled separately before entering the main loop:

// If the given number is less than or equal to 1 (number <= 1), we immediately return false. Numbers less than or equal to 1 are not considered prime by definition.

// If the given number is less than or equal to 3 (number <= 3), we immediately return true. This is because 2 and 3 are prime numbers, and we've already checked for numbers less than or equal to 1 in the previous step.

// Next, we have a check to see if the given number is divisible by 2 or 3:

// If the given number (number) is divisible by 2 (number % 2 === 0) or by 3 (number % 3 === 0), we immediately return false. This is because any number divisible by 2 or 3 (except for 2 and 3 themselves) cannot be prime.
// After handling these special cases, we enter the main loop:

// We start the loop with let i = 5, and we increment i by 6 in each iteration (i += 6). This is because we're taking advantage of the fact that all primes greater than 3 can be written in the form 
// 6
// �
// ±
// 1
// 6k±1.

// Inside the loop, we check if the given number (number) is divisible by the current value of i or by i + 2. If it is divisible by either of these values, we immediately return false, indicating that the number is not prime.

// We continue this process until 
// �
// ×
// �
// i×i becomes greater than the given number, at which point we've checked all potential factors up to the square root of the given number.

// If the given number passes through all these checks without being determined as non-prime, we return true, indicating that the number is prime.

// I hope this explanation clarifies the logic used in the function! Let me know if you have any further questions!




    // // Check for divisibility from 2 to the square root of the number
    // for (let i = 2; i * i <= number; i++) {
    //     if (number % i === 0) {
    //         return false; // If divisible by any number, not prime
    //     }
    // }






    // function isPrime5(number) {
  
    //     let count5=0;
    //     if(number == 2) return [count5 ,true]
    //     if(number % 2 == 0) return  [count5 ,false]
    
    //     for(let fact = 3 ; fact*fact <=number ; fact+=2){ // fact = fact + 2 its is shorthand
    //         count5++;
    //         if (number % fact === 0) {
    //             return  [count5 ,false]
    //         }
    //     }
    //     return  [count5 ,true]
      
    // }