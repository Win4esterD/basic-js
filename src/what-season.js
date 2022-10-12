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

  if(date == undefined){
    return 'Unable to determine the time of year!';
  }

  if(date instanceof(Date) != true || date == Date()){
    // let err = new Error("Invalid date!");
    throw new Error("Invalid date!")
    }


  if(date.getMonth() <= 1 || date.getMonth() == 11){
    return seasons[0];
  }else if(date.getMonth() <= 4){ //Spring
    return seasons[1];
  }else if(date.getMonth() <= 7){ //Summer
    return seasons[2];
  }else if (date.getMonth() <= 10){ //Autumn
    return seasons[3];
  }
}

module.exports = {
  getSeason
};
