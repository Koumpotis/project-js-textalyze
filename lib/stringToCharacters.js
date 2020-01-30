function stringToCharacters(string) {
    let finalArray = [];

    for (let character of string) {
        finalArray.push(character);
    } return finalArray
}

console.log(stringToCharacters('hello world'))
