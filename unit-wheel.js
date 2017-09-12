var wheel = require('./RouletteWheel');

const num = 3000;
const pop = 50;
var res = [];

for (let i=0; i<(pop); i++) {
    res[i] = 0;
}

for (let i=0; i<num; i++) {
  var x = wheel(3, 0, pop);
  res[x] += 1;
}

for (let i=0; i<(pop); i++) {
  var bar = "";
  for (let j=0; j<res[i]; j++) {
    bar += "="
  }
  console.log(`${i}: ${bar}`);
}
