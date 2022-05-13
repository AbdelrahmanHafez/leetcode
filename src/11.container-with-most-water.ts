/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(heights: number[]): number {
  let startIndex = 0;
  let endIndex = heights.length - 1;

  let currentArea = 0;

  while (startIndex < endIndex) {
    const startHeight = heights[startIndex];
    const endHeight = heights[endIndex];

    currentArea = Math.max(
      currentArea,
      (endIndex - startIndex) * Math.min(startHeight, endHeight)
    );
    if (startHeight < endHeight) {
      startIndex++;
    } else {
      endIndex--;
    }
  }

  return currentArea;
}
// @lc code=end

export { maxArea };