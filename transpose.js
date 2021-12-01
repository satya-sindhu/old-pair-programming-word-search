const transpose = function (matrix) {
    let newMatrix = [];
    
    for (let i =  0; i < matrix[0].length; i++) { //create an empty array to transpose #length 1st array = #rows NewArray
      newMatrix.push([]);
    }
    for (let r = 0; r < matrix.length; r++) { //loop rows
      for (let c = 0; c < matrix[r].length; c++) { //loop collumns
        newMatrix[c][r]  = matrix[r][c];
      }
    }
      return newMatrix;
  };
  module.exports = transpose