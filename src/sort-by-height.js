const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sorted = arr.filter((item) => item > 0).sort((a, b) => a - b);
  let res = [];
  let count = 0;

  arr.forEach((item) => {
    if (item > 0) {
      res.push(sorted[count]);
      count++;
    } else {
      res.push(item);
    }
  });

  return res;
}

module.exports = {
  sortByHeight,
};
