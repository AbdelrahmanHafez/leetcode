/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(targetNumber: number): boolean {
  const originalNumber = targetNumber;

  if (targetNumber < 0 || (targetNumber % 10 === 0 && targetNumber !== 0)) {
    return false;
  }

  let reversedNumber = 0;

  while (targetNumber > 0) {
    reversedNumber = reversedNumber * 10 + targetNumber % 10;
    targetNumber = Math.floor(targetNumber / 10);
  }

  return originalNumber === reversedNumber || originalNumber === Math.floor(reversedNumber / 10);
}
// @lc code=end
export { isPalindrome };