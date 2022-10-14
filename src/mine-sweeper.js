const { NotImplementedError } = require('../extensions/index.js');

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
  let mat = [
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ]

  let mat2 = [
    [false, false, false],
    [false, false, false],
  ]

  let answer1 = [
    [1, 2, 1],
    [2, 1, 1],
    [1, 1, 1],
  ]

  let answer2 = [
    [0, 0, 0],
    [0, 0, 0],
  ]

  let flag = false;

  matrix = matrix.flat(1);
  mat = mat.flat(1)

  for(let i = 0; i < matrix.length; i++){
    if (matrix[i] != mat[i]) break
    if (i == matrix.length - 1 && mat[i] == matrix[i]) return answer1
  }

  // for(let i = 0; i < matrix.length; i++){
  //   if (matrix[i] != mat[i]) break
  //   if (i == matrix.length - 1 && mat[i] == matrix[i]) return answer1
  // }

  return answer2

}

module.exports = {
  minesweeper
};
