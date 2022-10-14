const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

 function elRepeatCounter(array, el){
  let counter = 0;
  for(ar of array){
    if(ar == el){
      counter += 1
    }
  }
  return counter;
}

 function renameFiles(names) {
  let new_arr = [];
  let counter_call = {};

  for(let name of names){
    if(elRepeatCounter(new_arr, name) == 0){
      counter_call[name] = 1
      new_arr.push(name)
    }else if(elRepeatCounter(new_arr, name) > 0){
      new_arr.push(name + `(${counter_call[name] ?? 1})`)
      counter_call[name] += 1;
    }
  }
  return new_arr
}

module.exports = {
  renameFiles
};
