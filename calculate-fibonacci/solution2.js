// Using memoization

function fib(num, memo = {}) {
  if (num in memo) return memo[num];
  if (num <= 1) return num;
  memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
  return memo[num];
}

console.log(fib(0)); // Should be 0
console.log(fib(1)); // Should be 1
console.log(fib(2)); // Should be 1
console.log(fib(3)); // Should be 2
console.log(fib(4)); // Should be 3
console.log(fib(5)); // should be 5
console.log(fib(6)); // should be 8
console.log(fib(7)); // should be 13
console.log(fib(50)); // should be 12586269025