const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];

  if(typeof date.getMonth != 'function'){
    return "Unable to determine the time of year";
  }else if(date.getMonth > 3){
    return seasons[0];
  }else if(date.getMonth < 6){
    return seasons[1];
  }else if(date.getMonth > 9){
    return seasons[3];
  }else if (date.getDate < 12){
    return seasons[4];
  }
}

module.exports = {
  getSeason
};
