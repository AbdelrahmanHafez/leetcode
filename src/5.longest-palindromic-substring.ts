/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(string: string) {
  const state: IState = {
    startIndex: 0,
    length: 0
  };

  getLongestFromString(state, string, false);
  getLongestFromString(state, string, true);

  return string.slice(state.startIndex, state.startIndex + state.length);
}

function getLongestFromString(
  state: IState,
  string: string,
  isOdd: boolean
) {
  const stringLength = string.length;

  for (let i = 0; i < stringLength; i++) {
    let leftIndex = i;
    let rightIndex = isOdd ? i : i + 1;

    while (leftIndex >= 0 && rightIndex < stringLength && string[leftIndex] === string[rightIndex]) {
      if (rightIndex - leftIndex + 1 > state.length) {
        state.startIndex = leftIndex;
        state.length = rightIndex - leftIndex + 1;
      }
      leftIndex--;
      rightIndex++;
    }
  }
}

interface IState {
  startIndex: number;
  length: number;
}

// // @lc code=end

export { longestPalindrome };