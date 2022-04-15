// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

let twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let index = nums.indexOf(target - nums[i], i + 1);
    if (index !== -1) {
      console.log([i, index]);
    }
  }
};

twoSum([2, 7, 11, 15], 9);