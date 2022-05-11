/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
const MAX_INT = 2 ** 31 - 1;
const MIN_INT = (-1 * 2) ** 31;

function reverse(x: number): number {
  const numberMultiplier = x < 0 ? -1 : 1;
  const absoluteNumber = Math.abs(x);
  const reversedNumber = Number(absoluteNumber.toString().split('').reverse().join('')) * numberMultiplier;

  if (reversedNumber > MAX_INT || reversedNumber < MIN_INT) {
    return 0;
  }

  return reversedNumber;
}
// @lc code=end

export { reverse as reverseInteger };