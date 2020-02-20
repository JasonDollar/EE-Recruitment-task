String.prototype.info = function() {
  return {
    length: this.length,
    firstChar: this[0],
    lastChar: this[this.length - 1],
  }
}


// rezultat widoczny w konsoli
console.log('foobar'.info())