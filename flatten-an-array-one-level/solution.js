function flattenArray(list) {
  const newList = [];
  for (let i = 0; i < list.length; i++) {
    // Check if list[i] is an array
    if (list[i].length) {
      for (let j = 0; j < list[i].length; j++) {
        newList.push(list[i][j]);
      }
    } else {
      newList.push(list[i]);
    }
  }
  return newList;
}

console.log(JSON.stringify(flattenArray([1, [2, 3], [[4, 5]], [6, []]]))) // Should be [1, 2, 3, [4, 5], 6, []]
