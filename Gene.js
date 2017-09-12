function Gene(length) {

  this.length = length;
  this.value = [];
  for (var i=0; i<this.length; i++) {
    this.value.push(0);
  }
}

Gene.prototype.mutate = function(index) {
  if (index < this.length) {
    this.value[index] == 0 ? this.value[index] = 1 : this.value[index] = 0;
  }
}

Gene.prototype.getValue = function(index) {
  if (index < this.length && index >= 0) {
    return this.value[index];
  } else {
    return undefined;
  }
}

Gene.prototype.toString = function() {
  var text = "";
  for (var i=this.length-1; i>=0; i--) {
    text += this.value[i];
  }
  return text;
}

Gene.prototype.toInt = function() {
  var total = this.getValue(0);

  for(var i=1; i<this.length; i++) {
    var value = 1;
    if (this.getValue(i) > 0) {
      for (var j=1; j<=i; j++) {
        value *= 2;
      }
      total += value;
    }
  }
  return total;
}

module.exports = Gene;
