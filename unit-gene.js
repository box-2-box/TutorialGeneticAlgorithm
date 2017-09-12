var Gene = require('./Gene');

//
// gene1.create(4, [0,1,0,0]);
// console.log(gene1.printValue());
// for (var a=0; a<gene1.length; a++) {
//   console.log(gene1.getValue(a));
// }
//
//
// gene2.create(4, [1,1,0,0]);
// console.log(gene2.printValue());
// for (var b=0; b<gene2.length; b++) {
//   console.log(gene2.value[b]);
// }

// var gene1 = new gene();
// var gene2 = new gene(4);
// gene2.value[0] = 1;
// gene2.value[1] = 1;
// gene2.value[2] = 1;
// gene2.value[3] = 1;
// gene1.createRandom(4);
// console.log(gene1.printValue());
//
// gene2.createRandom(8);
// console.log(gene2.printValue());

// console.log(gene1.length);
// console.log(gene2.length);

// console.log(gene1.printValue());
// console.log(gene2.toString());
// console.log(gene2.toInt());

function testMutation() {
  var gene = new Gene(4);
  gene.value[0] = 1;
  gene.value[1] = 1;
  gene.value[2] = 1;
  gene.value[3] = 1;

  console.log(gene.toString());
  gene.mutate(0);
  console.log(gene.toString());
}

testMutation();
