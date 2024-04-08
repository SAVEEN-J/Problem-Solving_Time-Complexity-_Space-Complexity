function areAnagrams(str1, str2) {
    // Clean the strings by removing non-alphabetic characters and converting to lowercase
    const cleanStr1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

    // If the lengths of the cleaned strings are different, they cannot be anagrams
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // Create an object to store the count of each character in the first string
    const charCount = {};

    // Iterate through the characters of the first cleaned string
    for (let char of cleanStr1) {
        // Increment the count of the character in the character count object
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Iterate through the characters of the second cleaned string
    for (let char of cleanStr2) {
        // If the character does not exist in the character count object or its count is already 0, return false
        if (!charCount[char]) {
            return false;
        }
        // Decrement the count of the character in the character count object
        charCount[char]--;
    }

    // If the second string is exhausted and all characters have corresponding counts in the character count object, return true
    return true;
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("debit card", "bad credit")); // Output: true
console.log(areAnagrams("heart", "earth")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false
