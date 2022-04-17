/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */


// @lc code=start

function lengthOfLongestSubstring(string: string): number {
  let maxCharactersCount = 0;

  const { length } = string;
  for (let i = 0; i < length; i++) {
    const substringCharacters = new Set();
    let substring = '';
    let j = i;

    while (string[j] !== undefined && substringCharacters.has(string[j]) === false) {
      substringCharacters.add(string[j]);
      substring += string[j];
      j++;
      if (maxCharactersCount < substring.length) {
        maxCharactersCount = substring.length;
      }
    }
  }


  return maxCharactersCount;
}

// @lc code=end

export { lengthOfLongestSubstring };