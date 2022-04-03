function nextPermuatation(nums) {
  const len = nums.length - 1;
  //stores the first index and second index for swapping.
  let index;
  let secIndex;

  //get the first index
  for (index = len - 1; index >= 0; index--) {
    if (nums[index] < nums[index + 1]) {
      break;
    }
  }
  //if we don't find first index we don't find second index. we just reverse nums arr.
  //that means if we get [3,2,1] as input then our next permutation is [1,2,3].
  if (index < 0) {
    nums.reverse();
  } else {
    //find the second index from last.
    //if we find a value from back which is greater than value of index optained.
    for (secIndex = len; secIndex > index; secIndex--) {
      if (nums[secIndex] > nums[index]) {
        break;
      }
    }
    //swap values of index and secondindex.
    [nums[index], nums[secIndex]] = [nums[secIndex], nums[index]];

    //reverse values after the index value till last.
    let low = index + 1;
    let high = len;
    while (low < high) {
      [nums[low], nums[high]] = [nums[high], nums[low]];
      low++;
      high--;
    }
  }

  console.log(nums);
}

nextPermuatation([1, 3, 2]);
