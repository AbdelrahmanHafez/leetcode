/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */


// @lc code=start

function lengthOfLongestSubstring(string: string): number {
  let startIndex = 0;
  let maxLength = 0;

  const stringLength = string.length;
  const charactersIndexesMap = new Map<string, number>();

  for (let i = 0; i < stringLength; i++) {
    const currentCharacter = string[i];
    const duplicateCharacterIndex = charactersIndexesMap.get(currentCharacter);
    charactersIndexesMap.set(currentCharacter, i);

    if (duplicateCharacterIndex >= startIndex) {
      startIndex = duplicateCharacterIndex + 1;
    }

    const currentLength = i - startIndex + 1;
    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }

  return maxLength;
}

// @lc code=end

export { lengthOfLongestSubstring };