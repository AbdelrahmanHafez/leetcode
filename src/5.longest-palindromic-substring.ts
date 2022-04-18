/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(string: string) {
  let currentLongest = string[0] || '';
  let currentLongestLength = 1;

  ({ currentLongestLength, currentLongest } = getLongest(string, currentLongest, currentLongestLength, false));
  ({ currentLongestLength, currentLongest } = getLongest(string, currentLongest, currentLongestLength, true));
  return currentLongest;
}

function getLongest(
  string: string,
  currentLongest: string,
  currentLongestLength: number,
  isOdd: boolean
) {
  const stringLength = string.length;

  for (let i = 0; i < stringLength; i++) {
    let leftIndex = i;
    let rightIndex = isOdd ? i : i + 1;

    while (leftIndex >= 0 && rightIndex < stringLength && string[leftIndex] === string[rightIndex]) {
      if (rightIndex - leftIndex + 1 > currentLongestLength) {
        currentLongest = string.slice(leftIndex, rightIndex + 1);
        currentLongestLength = rightIndex - leftIndex + 1;
      }
      leftIndex--;
      rightIndex++;
    }
  }
  return { currentLongestLength, currentLongest };
}
// // @lc code=end

export { longestPalindrome };