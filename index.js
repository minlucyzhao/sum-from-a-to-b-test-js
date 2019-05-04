function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN <= 0 && toN <= 0 || toN < 0 || fromN > toN) {
    return 0;
  }
  return toN + sum(fromN, toN-1);
}

module.exports = sum;