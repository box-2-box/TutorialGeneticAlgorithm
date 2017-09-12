var Chromosome = require('./Chromosome');
var spin = require ("./RouletteWheel");
var random = require('random-seed').create();

const chromosomeLength = 9;
const crossoverRate = .7;
const goal = 20;


function Population(size) {
  this.size = size;
  this.members = [];
  for (var i=0; i<this.size; i++) {
    this.members.push(new Chromosome(chromosomeLength));
  }
}

Population.prototype.sort = function() {

  var sorted = [];

  while (this.members.length > 0) {
    var largest = 0;
    for (let j=1; j<this.members.length; j++) {
      if (this.members[j].fitness(goal) > this.members[largest].fitness(goal)) {
        largest = j;
      }
    }
    sorted.push(this.members[largest]);
    this.members.splice(largest, 1);
  }

  this.members = sorted;
}


Population.prototype.nextGeneration = function() {
  var newPop = [];
  this.sort();

  while(newPop.length < this.size) {
    var c1 = spin(3, 0, this.size-1);
    var c2 = spin(3, 0, this.size-1);

    // find diffrent chromosome for mate
    while (c1 == c2) {
      c2 = spin(3, 0, this.size-1);
    }
    // console.log(`Round ${newPop.length}`);
    // console.log(`C1[${c1}] - ${this.members[c1.toString()]}`);
    // console.log(`C2[${c2}] - ${this.members[c2.toString()]}`);


    var rate = random.intBetween(1, 7);
    console.log(`C1: ${c1} C2: ${c2} Rate: ${rate}`);
    newPop.push(this.members[c1].crossover(this.members[c2], rate));
    //newPop.push(this.members[c2].crossover(this.members[c1], rate));

    // console.log(`C1+2[${newPop.length-2}] - ${newPop[newPop.length-2]}`);
    // console.log(`C2+1[${newPop.length-1}] - ${newPop[newPop.length-1]}`);
  }

  for (let i=0; i<this.size; i++) {
    this.members[i].overwrite(newPop[i]);
    // console.log(this.members[i].toString());
    // console.log(this.members[i].toString());
  }
  for (let i=0; i<this.size; i++) {
    this.members[i].mutate();
  }
}

module.exports = Population;
