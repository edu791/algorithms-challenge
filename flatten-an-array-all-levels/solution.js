function flattenArray(list) {
  const newList = [];
  for (let i = 0; i < list.length; i++) {
    // Check if list[i] is an array
    if (list[i].length !== undefined) {
      const subArray = flattenArray(list[i]);
      for (let j = 0; j < subArray.length; j++) {
        newList.push(subArray[j]);
      }
    } else {
      newList.push(list[i]);
    }
  }
  return newList;
}

console.log(JSON.stringify(flattenArray([1, [2, 3], [[4, 5]], [6, []]]))) // Should be [1, 2, 3, 4, 5, 6]
console.log(JSON.stringify(flattenArray([2, 3]))) // Should be [2, 3]
