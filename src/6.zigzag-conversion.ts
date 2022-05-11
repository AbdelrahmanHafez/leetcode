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

  const rows = Array(numRows).fill('');

  let currentRow = 0;
  let isGoingDown = false;

  for (let i = 0; i < string.length; i++) {
    const isFirstOrLastRow = currentRow === 0 || currentRow === numRows - 1;
    if (isFirstOrLastRow) {
      isGoingDown = !isGoingDown;
    }

    rows[currentRow] += string[i];

    if (isGoingDown) {
      currentRow++;
    } else {
      currentRow--;
    }

  }
  return rows.join('');
}

// @lc code=end

export { convert as convertToZigzag };