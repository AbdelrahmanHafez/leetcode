/*
 * @lc app=leetcode id=10 lang=typescript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
function isMatch(string: string, pattern: string): boolean {
  const cache: Record<string, boolean> = {};

  return memoizedIsMatch(0, 0);

  function memoizedIsMatch(i: number, j: number): boolean {
    const cacheKey = `${i},${j}`;
    if (cache[cacheKey] !== undefined) {
      return cache[cacheKey];
    }

    const isStringInBound = i < string.length;
    const isPatternInBound = j < pattern.length;

    if (isStringInBound === false && isPatternInBound === false) {
      cache[cacheKey] = true;
      return true;
    }

    if (isPatternInBound === false) {
      cache[cacheKey] = false;
      return false;
    }

    const isCurrentCharacterMatch = string[i] && (string[i] === pattern[j] || pattern[j] === '.');

    if (pattern[j + 1] === '*') {
      const noStarValue = memoizedIsMatch(i, j + 2);
      const starValue = isCurrentCharacterMatch && memoizedIsMatch(i + 1, j);
      cache[cacheKey] = noStarValue || starValue;
      return noStarValue || starValue;
    }

    if (isCurrentCharacterMatch) {
      cache[cacheKey] = memoizedIsMatch(i + 1, j + 1);
      return cache[cacheKey];
    }

    cache[cacheKey] = false;
    return false;
  }
}

// @lc code=end
export { isMatch };