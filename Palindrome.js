function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Initialize pointers for the start and end of the string
    let start = 0;
    let end = cleanStr.length - 1;
    
    // Loop until the pointers meet in the middle
    while (start < end) {
      // Compare characters at the start and end pointers
      if (cleanStr[start] !== cleanStr[end]) {
        return false; // If characters don't match, not a palindrome
      }
      // Move pointers towards the middle
      start++;
      end--;
    }
    
    return true; // If loop completes, it's a palindrome
  }
  
  console.log(isPalindrome("racecar")); // Output: true
  console.log(isPalindrome("helloworld")); // Output: false
  

  













