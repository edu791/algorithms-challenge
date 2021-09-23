function cleanFalsyElementsFromArray(list) {
  for (let i = 0; i < list.length; i++) {
    if ([undefined, null, false, 0].includes(list[i])) {
      list.splice(i, 1);
      i--; // due the splice() method mutates the array, we need to decrement the iterator to avoid skipping elements
    }
  }
  return list;
}

console.log(cleanFalsyElementsFromArray([4, "hello", undefined, 0, "dog", true, false, 12, null])); // Should be [4, 'hello', 'dog', true, 12]
console.log(cleanFalsyElementsFromArray(["hello", 0, 0, true])) // Should be ['hello', true]
console.log(cleanFalsyElementsFromArray([undefined, null, false, 0])) // Should be []
