const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function reverser(domain){
  return domain.split('.').reverse().join('.')
}


function getDNSStats(domains) {
let domain_counter = {}
let dots_counter = []

if(domains == undefined){
  return {}
}

for(let domain of domains){
  let reversed_domain = reverser(domain);
  for(let i = 0; i<reversed_domain.length; i++){
    if(reversed_domain[i] == '.' || i == reversed_domain.length - 1){
      if(Object.keys(domain_counter).includes('.' + dotChecker(reversed_domain.slice(0, i+1)))){
        domain_counter['.' + dotChecker(reversed_domain.slice(0, i+1))] += 1
      }else{
        domain_counter['.' + dotChecker(reversed_domain.slice(0, i+1))] = 1
      }
    }
  }
}
return domain_counter
}

function dotChecker(str){
if(str[str.length-1] == '.'){
  return str.slice(0, str.length-1)
  }

  return str;
}

module.exports = {
  getDNSStats
};
