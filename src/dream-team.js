const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    let strings = [];
    if(Array.isArray(members) == false || typeof(members) === 'number' || members == null){
      return false;
    }
    
    if(typeof(members) == 'object' && members != null && members != 'undefined'){
      for(let member of members){
        if(typeof(member) == 'string'){
          for(let i = 0; i<member.length; i++){
            if(member[i] != ' '){
              strings.push(member[i].toUpperCase())
              break
            }
          }
          }
      }
    }

    strings = strings.sort();
    return strings.join('')
}

module.exports = {
  createDreamTeam
};
