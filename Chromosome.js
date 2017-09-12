var Gene = require('./RandomGene');
var random = require('random-seed').create();

const geneLength = 4;
const mutationRate = .08;

function Chromosome(length) {
  this.length = length;
  this.genes = [];
  for (var i=0; i<this.length; i++) {
    this.genes.push(new Gene(geneLength));
  }
}

Chromosome.prototype.mutate = function() {
  for (let i=0; i<this.length; i++) {
    for (let j=0; j<geneLength; j++) {
      var r = random.random();
      // console.log(`R=${r} - ${i}-${j}`);
      if (r <= mutationRate) {
        this.genes[i].mutate(j);
        // console.log(`****************** Mutation: ${i}-${j}*******************`);
      }
    }
  }
}

Chromosome.prototype.overwrite = function(newGenes) {
  for (let i=0; i<this.length; i++) {
    this.genes[i] = newGenes[i];
  }
}


Chromosome.prototype.fitness = function(goal) {
  return goal - this.decode() == 0 ? 0 : Math.abs(1 / (goal - this.decode()));
}

Chromosome.prototype.toString = function() {
  var text = "";
  for (var i=0; i<this.length; i++) {
    text += this.genes[i].toString() + "-";
  }
  return text;
}

Chromosome.prototype.toEquation = function() {
  var text = "";
  for (var i=0; i<this.length; i++) {
    var val = this.genes[i].toInt();

    if (val >= 0 && val <= 9) {
      text += val + " ";
    } else if (val == 10) {
      text += "+ ";
    } else if (val == 11) {
      text += "- ";
    } else if (val == 12) {
      text += "* ";
    } else if (val == 13) {
      text += "/ ";
    }
  }
  return text;
}

Chromosome.prototype.decode = function() {

  var val1,val2,valOp = 0;
  var indexVal1,indexVal2,indexOp = 0;

  // find the first number; quit if not found
  var indexVal1 = this.findNextNumber(0);
  if (indexVal1 >= 0 && indexVal1 < this.length) {
    val1 = this.genes[indexVal1].toInt();

    // loop while there are still tokens to parse
    while (true) {
      // find next token; break loop if no tokens found
      indexOp = this.findNextOperator(indexVal1);
      if (indexOp < 0) break;

      indexVal2 = this.findNextNumber(indexOp);
      if (indexVal2 < 0) break;


      val2 = this.genes[indexVal2].toInt();
      valOp = this.genes[indexOp].toInt();

      val1 = calculate(val1, val2, valOp);

      indexVal1 = indexVal2 + 1;
      indexOp = indexVal2 + 2;
    }
  }

  return val1;
}


Chromosome.prototype.findNextNumber = function(start) {
  for (var i=start; i<this.length; i++) {
    if (geneType(this.genes[i].toInt()) === 0) {
      return i;
    }
  }

  return -1;
}

Chromosome.prototype.findNextOperator = function(start) {
  for (var i=start; i<this.length; i++) {
    if (geneType(this.genes[i].toInt()) === 1) {
      return i;
    }
  }

  return -1;
}

// Swap genes from left side of this and right side of mate
Chromosome.prototype.crossover = function(mate, swapAt) {

  var val = [];
  for (let i=0; i<this.length; i++) {
      val[i] = i < swapAt ? this.genes[i] : mate.genes[i];
  }
  return val;
}


// takes int
// return 0 if number
// return 1 if operator
// return undefined if not number or operator
function geneType(val) {
  if (val >= 0 && val <= 9) {
    return 0;
  } else if (val >=10 && val <= 13) {
    return 1;
  } else {
    return undefined;
  }
}


function calculate(num1, num2, op) {
  if (op == 10) {
    return num1 + num2;
  } else if (op == 11) {
    return num1 - num2;
  } else if (op == 12) {
    return num1 * num2;
  } else if (op == 13 && num2 != 0) {
    return num1 / num2;
  } else {
    return num1;
  }
}


module.exports = Chromosome;
