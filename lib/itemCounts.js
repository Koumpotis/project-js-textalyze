/**
 * Given an input Array, returns an object containing the count of each item in the input.
 *
 * @param {Array} array - The array of items to count
 * @returns {object} An object containing the counts of the items in the input array
 */
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
console.log(itemCounts([1, 2, 3, 3, 4]));
console.log(itemCounts(['hello', 'hello', 'world', 'a', 'b', 'a']));

module.exports = itemCounts;
