var Gene = require('./Gene');
var random = require('random-seed').create();


function RandomGene(length) {
  this.length = length;
  this.value = [];
  for (var i=0; i<this.length; i++) {
    this.value.push(random.intBetween(0,1));
  }
}

RandomGene.prototype = new Gene();

module.exports = RandomGene;
