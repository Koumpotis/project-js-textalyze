function itemCounts(array) {
  let counts = {};

  for (let item of array) {
    if (!counts[item]) {
      counts[item] = 1;
    } else {
      counts[item] += 1;
    }
  } return counts;
}

// console.log(itemCounts([1, 2, 3, 3, 4]));
// console.log(itemCounts(['hello', 'hello', 'world', 'a', 'b', 'a']));

module.exports = itemCounts;
