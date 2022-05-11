/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number) {
  if (x < 0) {
    return false;
  }

  const stringifiedNumber = x.toString();
  const { length } = stringifiedNumber;
  for (let i = 0; i < length / 2; i++) {
    if (stringifiedNumber[i] !== stringifiedNumber[length - i - 1]) {
      return false;
    }
  }

  return true;
}
// @lc code=end
export { isPalindrome };