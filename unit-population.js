var Population = require('./Population');

const populationSize = 20;
const goal = 20;

var population = new Population(populationSize);

function logPopulation()
{
  population.sort();
  for (var i=0; i<populationSize; i++) {
    // console.log(`Member ${i+1}`);
    console.log(`${population.members[i].toString()} Fitnes: ${population.members[i].fitness(goal)} Equation: ${population.members[i].toEquation()} = ${population.members[i].decode()}`);
  }
}

function testCrossover() {

  population.sort();

  for(let i=0; i<60; i++) {

    if (population.members[0].fitness(goal) == 0) {
      console.log(`\n=========== Success in Gen ${i} ==============\n`);
      break;
    }

    console.log(`\n----Gen ${i} ----\n`)
    logPopulation();
    console.log("=====================");
    population.nextGeneration();
    console.log("=====================");
    logPopulation();

  }
}

testCrossover();
