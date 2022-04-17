/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]) {
  const { halfMergedArray, arraysTotalLength } = mergeSortedArrays(nums1, nums2);
  if (arraysTotalLength % 2 === 0) {
    return (halfMergedArray[halfMergedArray.length - 2] + halfMergedArray[halfMergedArray.length - 1]) / 2;
  }

  return halfMergedArray[halfMergedArray.length - 1];
}
// @lc code=end
export { findMedianSortedArrays };

function mergeSortedArrays(nums1: number[], nums2: number[]) {
  const arraysTotalLength = nums1.length + nums2.length;

  let index1 = 0;
  let index2 = 0;
  const halfMergedArray = [];

  while (halfMergedArray.length <= arraysTotalLength / 2) {
    if (
      (nums1[index1] !== undefined && nums1[index1] < nums2[index2]) ||
       nums2[index2] === undefined
    ) {
      halfMergedArray.push(nums1[index1]);
      index1++;
    } else {
      halfMergedArray.push(nums2[index2]);
      index2++;
    }
  }
  return { halfMergedArray, arraysTotalLength };
}