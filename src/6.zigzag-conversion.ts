/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
function convert(string: string, numRows: number) {
  if (numRows === 1) {
    return string;
  }
  const matrix = createMatrix(numRows);
  fillMatrix(string, numRows, matrix);

  const zigzaggedString = convertMatrixToString(matrix);
  return zigzaggedString;
}

// @lc code=end

export { convert as convertToZigzag };

function fillMatrix(string: string, numRows: number, matrix: any[]) {
  let currentRowIndex = 0;
  let directionIndex = -1;

  for (const character of string) {
    const isFirstOrLastRow = currentRowIndex === 0 || currentRowIndex === (numRows - 1);
    if (isFirstOrLastRow) {
      directionIndex *= -1;
    }

    matrix[currentRowIndex].push(character);

    currentRowIndex += directionIndex;
  }
}

function createMatrix(numRows: number) {
  const matrix = [];

  for (let i = 0; i < numRows; i++) {
    matrix[i] = [];
  }
  return matrix;
}

function convertMatrixToString(matrix: string[][]) {
  let result = '';

  for (let i = 0; i < matrix.length; i++) {
    result += matrix[i].join('');
  }
  return result;
}