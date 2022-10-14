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
 function repeater(str, options){
  let repeated = '';
  let separator = options.separator === undefined ? '+' : options.separator;
  let repeatTimes = options.repeatTimes === undefined ? 0 : options.repeatTimes;
  let addition = '';
  let additionSeparator = options.additionSeparator === undefined ? '|': options.additionSeparator;
  let additionRepeatTimes = options.additionRepeatTimes === undefined ? 0 : options.additionRepeatTimes;

  if(options.additionRepeatTimes === undefined && options.addition !== undefined){
    addition += options.addition
  }else{
    for(let i = 0; i < additionRepeatTimes; i++){
      addition += options.addition + additionSeparator
    }
    addition = addition.slice(0, -additionSeparator.length)
  }
  if(options.repeatTimes === undefined && str !== undefined){
    repeated += str + addition
  }else{
    for(let i = 0; i < repeatTimes; i++){
      repeated += str + addition + separator
    }
    repeated = repeated.slice(0, -separator.length);
  }
  return repeated
}

module.exports = {
  repeater
};
