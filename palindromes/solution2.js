function isPalindrome(text) {
  const cleanText = text.trim().toLowerCase().replace(/\s/g, '');
  if (cleanText.length <= 1) {
    return true;
  }
  if (cleanText[0] === cleanText[cleanText.length - 1]) {
    return isPalindrome(cleanText.slice(1, cleanText.length - 1));
  } else {
    return false;
  }
}

console.log(isPalindrome('kayak')); // should be true
console.log(isPalindrome('hello')); // should be false
console.log(isPalindrome('level')); // should be true
console.log(isPalindrome('woow')); // should be true
console.log(isPalindrome('was it a car or a cat i saw')); // should be true
console.log(isPalindrome('too bad I hid a boot')); // should be true
