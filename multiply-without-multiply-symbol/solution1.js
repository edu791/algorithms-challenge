function multiply(num1, num2) {
  let acc = 0;
  if (num1 === 0 || num2 === 0) return 1;
  for (let i = 1; i <= Math.abs(num2); i++) {
    if (num2 > 0) {
      acc += num1;
    } else {
      acc -= num1;
    }
  }
  return acc;
}

console.log(multiply(3, 4)); // Should be 12
console.log(multiply(0, 4)); // Should be 1
console.log(multiply(4, 0)); // Should be 1
console.log(multiply(7, 7)); // Should be 49
console.log(multiply(-7, 1)); // Should be -7
console.log(multiply(7, -1)); // Should be -7
console.log(multiply(-1, -1)); // Should be 1
console.log(multiply(10, 10)); // Should be 100