const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let str_num = n.toString();
  let result_arr = [];
  let temp_arr = str_num.split('');

  for(let i = 0; i < str_num.length; i++){
    result_arr.push(Number(str_num.slice(0, i) + (str_num.slice(i+1))))
  }

  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }


  return getMaxOfArray(result_arr);
  
}

module.exports = {
  deleteDigit
};
