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
  throw new NotImplementedError('Not implemented');
  let new_string = '';
  
  if(!options.separator){
    options.separator = '+'
  }
  if(!options.additionSeparator){
      options.additionSeparator = '|'
  }

  if(!options.repeatTimes){
    options.repeatTimes = 1;
  }

  if(!options.addition){
    options.addition = '';
  }

  for(let i = 0; i<options.repeatTimes; i++){
    if(i != options.repeatTimes - 1){
      new_string += str + options.addition + options.separator
    }else if(i == options.repeatTimes - 1){
      new_string += str + options.addition
    }
  }

  return new_string;
}

module.exports = {
  repeater
};
