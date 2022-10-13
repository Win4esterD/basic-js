const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain_array: [],
  getLength() {
    return this.chain_array.length
  },
  addLink: function(value = '') {
    this.chain_array.push(value)
    return this;
  },
  removeLink(position) {
    if(Number.isInteger(position) == false || position < 1 || position > this.chain_array.length - 1){
      this.chain_array = [];
      throw new Error('You can\'t remove incorrect link!');
    }else{
      this.chain_array.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain: function() {
    this.chain_array.reverse()
    return this
  },
  finishChain() {
    let chain = '';
    if (this.chain_array.length > 0) {
      chain += `( ${this.chain_array[0]} )`;
    }
    if (this.chain_array.length > 1) {
      for (let i = 1; i < this.chain_array.length; i++) {
        chain += `~~( ${this.chain_array[i]} )`;
      }
    }
    this.chain_array = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};
