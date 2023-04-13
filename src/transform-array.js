const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(array) {
  if (!Array.isArray(array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const discardNext = "--discard-next";
  const discardPrev = "--discard-prev";
  const doubleNext = "--double-next";
  const doublePrev = "--double-prev";

  let arr = [...array];

  makeTransform(arr);

  function makeTransform(arr) {
    if (arr.includes(discardNext)) {
      let inx = arr.indexOf(discardNext);
      if (inx === arr.length - 1) {
        splice(inx, 1);
      } else {
        arr.splice(inx, 2);
      }
      makeTransform(arr);
    }
    if (arr.includes(discardPrev)) {
      let inx = arr.indexOf(discardPrev);
      if (inx === 0) {
        arr.splice(inx, 1);
      } else {
        arr.splice(inx - 1, 2);
      }
      makeTransform(arr);
    }
    if (arr.includes(doubleNext)) {
      let inx = arr.indexOf(doubleNext);
      if (inx === arr.length - 1) {
        splice(inx, 1);
      } else {
        arr.splice(inx, 2, arr[inx + 1], arr[inx + 1]);
      }
      makeTransform(arr);
    }
    if (arr.includes(doublePrev)) {
      let inx = arr.indexOf(doublePrev);
      if (inx === 0) {
        arr.splice(inx, 1);
      } else {
        arr.splice(inx - 1, 2, arr[inx - 1], arr[inx - 1]);
      }
      makeTransform(arr);
    }
  }

  return arr;
}

module.exports = {
  transform,
};
