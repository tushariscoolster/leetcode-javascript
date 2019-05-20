//
// 485. Max Consecutive Ones

// https://leetcode.com/problems/max-consecutive-ones/

// Given a binary array, find the maximum number of consecutive 1s in this array.
//
//     Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:
//
//     The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === 1) nums[i] = nums[i - 1] + 1;
  }
  return Math.max(...nums);
};

findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]); //?
