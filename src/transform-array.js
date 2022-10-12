const { NotImplementedError } = require('../extensions/index.js');

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
 function transform(arr) {
  const control_sequences = ['--double-prev', '--double-next', '--discard-prev', '--discard-next']
  let transformed = [];

  if (arr instanceof Array !== true){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }else if(arr == []){
    return '[]';
  }

  for (let a of arr){
    transformed.push(a)
  }

  for(let i = 0; i < transformed.length; i++){
    if(transformed[i] == control_sequences[0]){
      if(i > 0){
        transformed[i] = transformed[i - 1];
        transformed =  transform(transformed)
      }else{
        transformed.shift(transformed[i])
        transformed =  transform(transformed)
      }
      
    }else if(transformed[i] == control_sequences[1]){
      if(i < transformed.length - 1){
        transformed[i] = transformed[i + 1];
        transformed =  transform(transformed)
      }else{
        transformed.pop(transformed[i])
        transformed =  transform(transformed)
      }
    }else if (transformed[i] == control_sequences[2] && i-1 >= 0){
      transformed.splice(i-1, 2);
      transformed =  transform(transformed)
    }else if(transformed[i] == control_sequences[2] && i==0){
      transformed.unshift(i);
      transformed =  transform(transformed)
      
    }
    else if (transformed[i] == control_sequences[3]){  //'--discard-next'
      if(i < transformed.length - 1){
        transformed.splice(i, 2);
        if(transformed[i] == control_sequences[0] || control_sequences[2]){
          transformed.splice(i, 1)
          transformed =  transform(transformed)
        } 
      }else{
        transformed.pop(transformed[i])
        transformed =  transform(transformed)
      }
      
    }
  }
  return transformed;
}

module.exports = {
  transform
};
