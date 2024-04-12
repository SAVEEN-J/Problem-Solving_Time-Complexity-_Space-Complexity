//Write a recursive function to find the sum of digits of a number.
function sumOfDigits(number) {
    // If the number is less than 10, return the number itself
    if (number < 10) {
        return number;
    }
    // Recursive -Sum the last digit with the sum of the remaining digits
    else {
        return (number % 10) + sumOfDigits(parseInt(number / 10));
    }
}

const number = 12345;
console.log(`Sum of digits in ${number} is ${sumOfDigits(number)}`);
