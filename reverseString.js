// Write a recursive function to reverse a string.
function reverseString(str) {
    // if the string is empty or has only one character, return the string itself
    if (str === "" || str.length === 1) {
        return str;
    } else {
        // Recursive-concatenate the last character with the reversed substring
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseString("hello")); // Output: "olleh"
