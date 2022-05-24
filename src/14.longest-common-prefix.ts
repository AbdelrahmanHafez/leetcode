/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strings: string[]): string {
  if (strings.length === 0) {
    return '';
  }

  strings.sort((a, b) => a.length - b.length);

  let [result] = strings;

  for (let i = 1; i < strings.length; i++) {
    const string = strings[i];
    while (string.indexOf(result) !== 0) {
      result = result.slice(0, result.length - 1);
    }
  }


  return result;
}
// @lc code=end

export { longestCommonPrefix };