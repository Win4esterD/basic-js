const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  let new_string = '';

  if(!options.repeatTimes){
    options.repeatTimes = 1;
  }
  

  /* if(!options.additionRepeatTimes){
    options.additionRepeatTimes = options.repeatTimes
  } */

  options.additionRepeatTimes = options.repeatTimes
  
  if(!options.separator){
    options.separator = '+'
  }
  if(!options.additionSeparator){
      options.additionSeparator = '|'
  }

  if(!options.addition){
    options.addition = '';
  }

  for(let i = 0; i<options.repeatTimes; i++){
    new_string += str;
    if(options.additionRepeatTimes > 0){
      new_string += options.addition
      options.additionRepeatTimes -= 1
    }
    if(i<options.repeatTimes-1){
      new_string += options.separator;
    }
  }

  return new_string;
}

module.exports = {
  repeater
};
