function itemFrequency(array) {
  let characterFrequency = {};
  let totalCount = 0

  for (let item of array) {
    totalCount += 1
    if (!characterFrequency[item]) {
      characterFrequency[item] = 1;
    } else {
      characterFrequency[item] += 1;
    }
  } for (let keys of Object.keys(characterFrequency)) {
    console.log(characterFrequency[keys]);
    console.log()
  }
}
console.log(itemFrequency(['h', 'e', 'y', 'e']));
    // } return characterFrequency;