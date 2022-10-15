const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

 
class VigenereCipheringMachine {
  
  constructor(x){
    if(x == false){
      this.direction = false;
    }else{
      this.direction = true;
    }
  }
  encrypt(word, keyword) {
    if(word == undefined || keyword == undefined){
      throw new Error('Incorrect arguments!')
    }
      let key_equal = ''
      let cypher = ''

      let alphabet = [
      'a', 'b', 'c', 'd', 'e', 'f',
      'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r',
      's', 't', 'u', 'v', 'w', 'x',
      'y', 'z'
    ]

    const spec_chars = ['!', '!', '.', '(',')', ' ', '?', '1', '2', '3', 
 '4', '5', '6', '7', '8', '9', '0', ':', ',', '^', '|', '&', '$', '|', '-', '/', '*', '+', '%', '@', '#']

    let counter = 0;

    word = word.toLowerCase()
    keyword = keyword.toLowerCase()


    for(let i = 0; i < word.length; i++){
      if(spec_chars.includes(word[i])){
        key_equal += word[i]
      }else{
        key_equal += keyword[counter]
        counter++
        if(counter > keyword.length - 1) counter = 0;
      }
    }

    for(let i = 0; i < word.length; i++){
      let cyph = alphabet.indexOf(word[i]) + alphabet.indexOf(key_equal[i])
      if(spec_chars.includes(word[i])){
        cypher += word[i];
        continue
      }
      if(cyph < 26){
        cypher += alphabet[cyph]
      }else(
        cypher += alphabet[cyph - 26]
      )
    }
    if(this.direction == true) {
      return cypher.toUpperCase()
    }else{
      return cypher.toUpperCase().split('').reverse().join('')
    }
      }

  decrypt(word, keyword){
    if(word == undefined || keyword == undefined){
      throw new Error('Incorrect arguments!')
    }
      let key_equal = ''
      let cypher = ''

      let alphabet = [
      'a', 'b', 'c', 'd', 'e', 'f',
      'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r',
      's', 't', 'u', 'v', 'w', 'x',
      'y', 'z'
    ]

    const spec_chars = ['!', '!', '.', '(',')', ' ', '?', '1', '2', '3', 
 '4', '5', '6', '7', '8', '9', '0', ':', ',', '^', '|', '&', '$', '|', '-', '/', '*', '+', '%', '@', '#']
    let counter = 0;

    word = word.toLowerCase()
    keyword = keyword.toLowerCase()


    for(let i = 0; i < word.length; i++){
      if(spec_chars.includes(word[i])){
        key_equal += word[i]
      }else{
        key_equal += keyword[counter]
        counter++
        if(counter > keyword.length - 1) counter = 0;
      }
    }

    for(let i = 0; i < word.length; i++){
      let cyph = alphabet.indexOf(word[i]) - alphabet.indexOf(key_equal[i])
      if (cyph < 0) cyph+= 26

      if(spec_chars.includes(word[i])){
        cypher += word[i];
        continue
      }else{
        cypher += alphabet[cyph];
      }    
    }
    if(this.direction == true) {
      return cypher.toUpperCase()
    }else{
      return cypher.toUpperCase().split('').reverse().join('')
    }
 }
}

module.exports = {
  VigenereCipheringMachine
};
