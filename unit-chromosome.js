var Chromosome = require('./Chromosome');

const chromosomeLength = 9;

function create() {
  return new Chromosome(chromosomeLength);
}

function testCreate() {
  var c = create();
  for (var i=0; i<chromosomeLength; i++) {
    console.log(c.genes[i].toString());
  }
}


function testDecode() {
  var c = create();
  console.log(`String: ${c.toString()}`);
  console.log(`Eq: ${c.toEquation()}`);
  console.log(`Value: ${c.decode()}`);
  console.log(`Fitnes: ${c.fitness(30)}`);
}

function testCrossover() {

  var c = create();
  var d = create();

  console.log(`String 1 before: ${c.toString()}`);
  console.log(`String 2 before: ${d.toString()}`);
  var a = c.crossover(d, 5);
  var b = d.crossover(c, 5);
  console.log(`String 1 after : ${a.toString()}`);
  console.log(`String 2 after : ${b.toString()}`);
}

function testOverwrite() {
  var c = create();
  var d = create();

  console.log(`String 1 before: ${c.toString()}`);
  console.log(`String 2 before: ${d.toString()}`);
  c.overwrite(d.genes);
  console.log(`String 1 after : ${c.toString()}`);

}

function testMutation() {
  var c = create();
  console.log(`String 1 before: ${c.toString()}`);
  c.mutate();
  console.log(`String 1 before: ${c.toString()}`);

}

//testCrossover();
// testDecode();
// testOverwrite();
testMutation();
