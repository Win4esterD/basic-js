const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let numString = n.toString();

  function numSum(numString){
    let temp_sum = 0;
    for (num of numString){
      temp_sum += Number(num)
          }
          return temp_sum
      }

  while(numString.length){
    if(numString.length == 1){
      return Number(numString);
    }else if(numString.length > 1){
      numString = String(numSum(numString))
    }
  } 
}

module.exports = {
  getSumOfDigits
};
