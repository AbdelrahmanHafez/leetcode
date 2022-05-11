/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
const MAX_INT = 2 ** 31 - 1;
const MIN_INT = (-2) ** 31;

function myAtoi(s: string): number {
  const matchResult = s.trimStart().match(/^[+-]?\d+(\.\d+)?/);

  const stringifiedNumber = matchResult?.[0] || '0';

  const num = parseInt(stringifiedNumber, 10);

  if (num > MAX_INT) {
    return MAX_INT;
  } else if (num < MIN_INT) {
    return MIN_INT;
  }

  return num;
}
// @lc code=end

export { myAtoi as stringToInteger };