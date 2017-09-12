var random = require('random-seed').create();

function RouletteWheel(iterations, min, max) {
  var randMax = Math.floor(max / iterations);
  var sum = 0;

  for (let i=0; i<iterations; i++) {
    sum += random.intBetween(min, randMax);
  }

  var val = (max/2) - sum;
  if (val < 0) {
    return (val * -2) - 1;
  } else {
    return val * 2;
  }
}

module.exports = RouletteWheel;

// -3-> 5
// -2-> 3
// -1-> 1
// 0 -> 0
// 1 -> 2
// 2 -> 4
// 3 -> 6
// 4 -> 8
