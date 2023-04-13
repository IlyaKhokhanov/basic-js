const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = JSON.parse(JSON.stringify(matrix));

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      let count = 0;

      if (y > 0 && x > 0 && matrix[y - 1][x - 1]) count++;
      if (y > 0 && matrix[y - 1][x]) count++;
      if (y > 0 && x <= matrix[0].length - 1 && matrix[y - 1][x + 1]) count++;
      if (x > 0 && matrix[y][x - 1]) count++;
      if (x < matrix[0].length - 1 && matrix[y][x + 1]) count++;
      if (x > 0 && y < matrix.length - 1 && matrix[y + 1][x - 1]) count++;
      if (y < matrix.length - 1 && matrix[y + 1][x]) count++;
      if (
        y < matrix.length - 1 &&
        x < matrix[0].length - 1 &&
        matrix[y + 1][x + 1]
      )
        count++;

      res[y][x] = count;
      count = 0;
    }
  }
  return res;
}

module.exports = {
  minesweeper,
};
