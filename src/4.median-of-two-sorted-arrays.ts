/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const totalLength = nums1.length + nums2.length;
  const iterationsCount = totalLength / 2 + 1;
  let i = 0;
  let j = 0;
  let previous = 0;
  let current = 0;

  for (let count = 0; count < iterationsCount; count++) {
    previous = current;
    if (i < nums1.length && (j >= nums2.length || nums1[i] < nums2[j])) {
      current = nums1[i++];
    } else {
      current = nums2[j++];
    }
  }

  if (totalLength % 2 === 0) {
    return (previous + current) / 2;
  }
  return previous;
}

// @lc code=end
export { findMedianSortedArrays };
