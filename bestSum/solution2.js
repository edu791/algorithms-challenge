function howSum(targetSum, numbers, memo={}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const diff = targetSum - num;
    const diffResult = howSum(diff, numbers, memo);
    if (diffResult !== null) {
      memo[targetSum] = [...diffResult, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
}

console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])); // null
