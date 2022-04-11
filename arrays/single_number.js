function singleN(nums) {
  let right = 1;
  let left = 1;
  let len = nums.length;
  while (right < len) {
    nums.sort();
    console.log(nums);
    if (nums[right] != nums[right - 1]) {
      // console.log(nums[right-1]);
      left++
    }
    right++;
  }
}

// singleN([4, 1, 2, 1, 2]);

