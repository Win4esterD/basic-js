const { NotImplementedError } = require('../extensions/index.js');

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
  function compareFn(a, b) {
    if (a > b) return 1; 
    if (a == b) return 0; 
    if (a < b) return -1; 
  }
  let indexes = [];
  let result = [];

  for(let i = 0; i < arr.length; i++){
    if (arr[i] == -1){
      indexes.push(i)
    }
  }

  result = arr.filter((ar) =>{
    if(ar != -1){
      return arr
    }
  })

  result.sort(compareFn)

  for(let ind of indexes){
    result.splice(ind, 0, -1)
  }

  // result.splice(4, 0, -1)

  return result
}

module.exports = {
  sortByHeight
};
