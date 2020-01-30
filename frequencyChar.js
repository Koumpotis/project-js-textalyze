function itemFrequency(array) {
    let characterFrequency = {};
    let totalCount = 0
  
    for (let item of array) {
        totalCount+= 1
      if (!characterFrequency[item]) {
        // if not in the dictionary
        characterFrequency[item] = 1;
      } else {
        characterFrequency[item] += 1;
      }
    } for (let keys of Object.keys(characterFrequency)) {
       characterFrequency[keys]= (characterFrequency[keys]/totalCount) 
    
    }
    return characterFrequency
}
console.log(itemFrequency(['h', 'e', 'y', 'e', 'e']));
    // } return characterFrequency;