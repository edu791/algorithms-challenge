function repeated(text) {
  const lowered = text.toLowerCase();
  const splitted = lowered.split(' ');
  const repeated = {};
  for (let i = 0; i < splitted.length; i++) {
    if (repeated.hasOwnProperty(splitted[i])) {
      repeated[splitted[i]] = repeated[splitted[i]] + 1;
    } else {
      repeated[splitted[i]] = 1;
    }
  }
  return repeated;
}

console.log(repeated('Hello World goodbye world')); // Should be {hello: 1, world: 2, goodbye: 1}
