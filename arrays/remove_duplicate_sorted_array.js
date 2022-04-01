let  removeDuplicates = function (nums) {
  let l = 0;

  // right pointer to loop through the array
  for (let r = 1; r < nums.length; r++) {
    if (nums[l] === nums[r]) {
      // go to next iteration
      continue;
    }

    //update the array
    nums[++l] = nums[r];
  }
  console.log(l + 1); // since l start counting from 0
};

removeDuplicates([1,1,2])