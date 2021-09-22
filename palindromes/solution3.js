function isPalindrome(text) {
  const cleanText = text.trim().toLowerCase().replace(/\s/g, '');
  const reversedText = Array(cleanText.length);
  for (let i = 0; i < cleanText.length; i++) {
    reversedText[i] = cleanText[cleanText.length - 1 - i];
  }
  return cleanText === reversedText.join('');
}

console.log(isPalindrome('kayak')); // should be true
console.log(isPalindrome('hello')); // should be false
console.log(isPalindrome('level')); // should be true
console.log(isPalindrome('woow')); // should be true
console.log(isPalindrome('was it a car or a cat i saw')); // should be true
console.log(isPalindrome('too bad I hid a boot')); // should be true
