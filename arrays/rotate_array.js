// Given an array, rotate the array to the right by k steps, where k is non-negative.


var rotate = function (nums, k) {
  k %= nums.length;

  const swap = (nums, i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  const reverse = (nums, left, right) => {
    while (left < right) {
      swap(nums, left, right);
      left++;
      right--;
    }
  };

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

// nums = [1, 2, 3, 4, 5, 6, 7];
// k = 3
rotate([1, 2, 3, 4, 5, 6, 7],3);