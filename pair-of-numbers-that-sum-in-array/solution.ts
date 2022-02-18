const input = [9, 4, 10, 3, 39, 12, 1, 4, 6];

function twoSum(numbers: number[], target: number): number[] {
    const diffs: { [key: number]: number } = {};
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if (diffs[target - num]) {
            return [diffs[target - num], i];
        } else {
            diffs[num] = i;
        }
    }
    return [];
}

console.log(twoSum(input, 22)); // Should return [2, 5]
console.log(twoSum(input, 8)); // Should return [1, 7]