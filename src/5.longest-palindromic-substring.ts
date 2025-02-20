/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(string: string) {
  let result = '';
  let resultLength = 0;
  const stringLength = string.length;

  determinePalindrome(true);
  determinePalindrome(false);

  function determinePalindrome(isOdd: boolean) {
    for (let i = 0; i < stringLength; i++) {
      let leftIndex = i;
      let rightIndex = isOdd ? i : i + 1;

      while (
        leftIndex >= 0 &&
        rightIndex < stringLength &&
        string[leftIndex] === string[rightIndex]
      ) {
        const currentLength = rightIndex - leftIndex + 1;
        if (currentLength > resultLength) {
          result = string.slice(leftIndex, rightIndex + 1);
          resultLength = currentLength;
        }
        leftIndex--;
        rightIndex++;
      }
    }
  }

  return result;
}

// @lc code=end

export { longestPalindrome };
