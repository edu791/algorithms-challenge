// Using memoization

function gridTraveler(m, n, memo = {}) {
  const memoKey = m + ',' + n;
  if (memoKey in memo) return memo[memoKey];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[memoKey] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[memoKey];
}

console.log('1,1 => ', gridTraveler(1, 1)); // Should be 1
console.log('2,2 => ', gridTraveler(2, 2)); // Should be 2
console.log('2,3 => ', gridTraveler(2, 3)); // Should be 3
console.log('3,3 => ', gridTraveler(3, 3)); // Should be 6
console.log('3,4 => ', gridTraveler(3, 4)); // Should be 10
console.log('6,6 => ', gridTraveler(6, 6)); // Should be 252
console.log('16,16 => ', gridTraveler(16, 16)); // Should be 155117520