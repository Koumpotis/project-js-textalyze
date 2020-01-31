
function itemFrequency(array) {
  let characterFrequency = {};
  let totalCount = 0;

  for (let item of array) {
    totalCount += 1;
    if (!characterFrequency[item]) {
      characterFrequency[item] = 1;
    } else {
      characterFrequency[item] += 1;
    }
  } for (let keys of Object.keys(characterFrequency)) {
    characterFrequency[keys] = (characterFrequency[keys] / totalCount) * 100
  }
  for (let keys of Object.keys(characterFrequency)) {
    let symbols = ':';
    let values = characterFrequency[keys];
    for (let a = 0; a < values; a += 1) {
      symbols = symbols + ')';
    }
    console.log(`${keys}: ${values} % ${symbols}`);
  }
}

console.log(itemFrequency(['h', 'e', 'y', 'y', 'e', 'e']));
