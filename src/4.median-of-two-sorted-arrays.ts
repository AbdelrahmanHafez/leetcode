/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let A = nums1;
  let B = nums2;
  if (A.length > B.length) {
    [A, B] = [B, A];
  }
  const totalLength = A.length + B.length;
  const halfTotal = Math.floor((totalLength + 1) / 2);

  let start = 0;
  let end = A.length;

  while (start <= end) {
    const i = Math.floor((start + end) / 2);
    const j = halfTotal - i;

    const ALeft = A[i - 1] ?? -Infinity;
    const ARight = A[i] ?? Infinity;
    const BLeft = B[j - 1] ?? -Infinity;
    const BRight = B[j] ?? Infinity;

    if (ALeft <= BRight && BLeft <= ARight) {
      if (totalLength % 2 === 1) {
        return Math.max(ALeft, BLeft);
      } else {
        return (Math.max(ALeft, BLeft) + Math.min(ARight, BRight)) / 2;
      }
    } else if (ALeft > BRight) {
      end = i - 1;
    } else {
      start = i + 1;
    }
  }

  throw new Error('Input arrays are not sorted correctly.');
}

// @lc code=end
export { findMedianSortedArrays };
