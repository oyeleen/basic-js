const { NotImplementedError } = require('../lib');

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
  let height = matrix.length;
  let width = matrix[0].length;
  let result = Array.from(Array(height), () => new Array(width));
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      result[i][j] = getMines(i - 1, j - 1, matrix) + getMines(i, j - 1, matrix) + getMines(i + 1, j - 1, matrix) +
        getMines(i - 1, j, matrix) + getMines(i + 1, j, matrix) +
        getMines(i - 1, j + 1, matrix) + getMines(i, j + 1, matrix) + getMines(i + 1, j + 1, matrix);
    }
  }
  return result;
}

function getMines(i, j, matrix) {
  if (i < 0 || j < 0 || i > matrix.length - 1 || j > matrix[i].length - 1) return 0;
  return + matrix[i][j];
}

module.exports = {
  minesweeper
};
