/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]) {
  const sortedArray = nums1.concat(nums2).sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedArray.length / 2);

  if (sortedArray.length % 2 === 0) {
    return (sortedArray[middleIndex] + sortedArray[middleIndex - 1]) / 2;
  }

  return sortedArray[middleIndex];
}
// @lc code=end
export { findMedianSortedArrays };