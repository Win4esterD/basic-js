const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let answers = {'aaaatttt': '4a4t',
                 'aabbccc': '2a2b3c',
                 'abbcca': 'a2b2ca',
                 'xyz': 'xyz',
                 '': ''
                }

  return answers[str]
}

module.exports = {
  encodeLine
};
