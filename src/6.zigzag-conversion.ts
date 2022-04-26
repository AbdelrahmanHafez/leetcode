/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
function convert(s: string, numRows: number) {
  const matrix = createMatrixFromString(s, numRows);

  let zizaggedString = '';
  for (const row of matrix) {
    for (const character of row) {
      if (character !== undefined) {
        zizaggedString += character;
      }
    }
  }
  return zizaggedString;
}


function createMatrixFromString(string: string, numRows: number) {
  const matrix = new Array(numRows).map(() => []);

  const currentColumnIndex = 0;
  const currentRowIndex = 0;

  for (let i = 0; i < string.length; i++) {
    const character = string[i];
    matrix[currentRowIndex][currentColumnIndex] = character;

    if (currentRowIndex === 0) {

    }
  }

  return matrix;
}

// @lc code=end

export { convert as convertToZigzag };