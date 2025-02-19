/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const halfMergedArray: number[] = [];
  const totalLength = nums1.length + nums2.length;
  let i = 0;
  let j = 0;

  while (
    (i < nums1.length || j < nums2.length) &&
    halfMergedArray.length <= totalLength / 2
  ) {
    const n1 = nums1[i];
    const n2 = nums2[j];
    if ((n1 < n2 && n1 !== undefined) || n2 === undefined) {
      halfMergedArray.push(n1);
      i++;
    } else {
      halfMergedArray.push(n2);
      j++;
    }
  }
  if (halfMergedArray.length === 1) {
    return halfMergedArray[0];
  }
  const isEven = totalLength % 2 === 0;
  if (isEven) {
    const firstMedian = halfMergedArray[halfMergedArray.length - 2];
    const secondMedian = halfMergedArray[halfMergedArray.length - 1];

    return (firstMedian + secondMedian) / 2;
  }
  return halfMergedArray[halfMergedArray.length - 1];
}

// @lc code=end
export { findMedianSortedArrays };
