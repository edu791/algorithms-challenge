function isPalindrome(text) {
  const cleanText = text.trim().toLowerCase().replace(/\s/g, '');
  const textLength = cleanText.length;
  for (let i = 0; i <= textLength / 2; i++) {
    if (cleanText[i] !== cleanText[textLength - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('kayak')); // should be true
console.log(isPalindrome('hello')); // should be false
console.log(isPalindrome('level')); // should be true
console.log(isPalindrome('woow')); // should be true
console.log(isPalindrome('was it a car or a cat i saw')); // should be true
console.log(isPalindrome('too bad I hid a boot')); // should be true
