function getBiggest(list) {
  let biggest = list[0];
  for (let i = 0; i < list.length; i++) {
    if (list[i] > biggest) biggest = list[i];
  }
  return biggest;
}

console.log(getBiggest([4, 100, 354, 2, 32, 16])); // Should be 354
console.log(getBiggest([400, 1, 5, 2])); // Should be 400
console.log(getBiggest([4, 1, 5, 292])); // Should be 292
console.log(getBiggest([-4, 1, -5, -292])); // Should be 1
console.log(getBiggest([-8, -3, -5, -100])); // Should be -3
