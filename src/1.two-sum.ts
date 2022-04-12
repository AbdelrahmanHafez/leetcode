/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number) {
  const map = {};
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    map[nums[i]] = i;

    const num = map[nums[i]];
    const complement = target - num;

    const complementIndex = map[complement];

    if (complementIndex !== undefined && complementIndex !== i) {
      return [i, complementIndex];
    }
  }
}
// @lc code=end
export { twoSum };