const transpose = require('./transpose.js')

const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
    if (horizontalJoin.includes(word)) {
      return true
    } else {
      return false
    }
  }
  
  const vertical = transpose(letters);
  const verticalJoin = vertical.map(ls => ls.join(''))
  for (c of verticalJoin) {
    if (verticalJoin.includes(word)) {
      return true
    } else {
      return false
    }
  }
  const horizAndVertArrays = [horizontalJoin, verticalJoin];
}



module.exports = wordSearch