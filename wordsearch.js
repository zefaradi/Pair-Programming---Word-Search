const wordSearch = (letters, word) => {
  if (letters.length === 0 || letters === undefined) {
    console.log("Array is empty");
    return false;
  }
  
  const rows = letters.length;
  const cols = letters[0].length;
  let accumulator = [];
  for (let col = 0; col < cols; col++) accumulator[col] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      accumulator[col][row] = letters[row][col];
    }
  }

  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
      if (l.includes(word)) return true
  }

  const verticalJoin = accumulator.map((ls) => ls.join(""));
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
}

module.exports = wordSearch