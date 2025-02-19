/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let maxLength = 0;
  const stringLength = s.length;
  const charactersSet = new Set<string>();

  for (let right = 0; right < stringLength; right++) {
    while (charactersSet.has(s[right])) {
      charactersSet.delete(s[left]);
      left++;
    }
    charactersSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
// @lc code=end

export { lengthOfLongestSubstring };
