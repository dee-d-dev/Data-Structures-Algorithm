function nextPermuatation(nums) {
  //[1,5,3]
  //   const len = nums.length - 1;
  //   //stores the first index and second index for swapping.
  //   let index;
  //   let secIndex;

  //   //get the first index
  //   for (index = len - 1; index >= 0; index--) {
  //     if (nums[index] < nums[index + 1]) {
  //       break;
  //     }
  //   }
  //   //if we don't find first index we don't find second index. we just reverse nums arr.
  //   //that means if we get [3,2,1] as input then our next permutation is [1,2,3].
  //   if (index < 0) {
  //     nums.reverse();
  //   } else {
  //     //find the second index from last.
  //     //if we find a value from back which is greater than value of index obtained.
  //     for (secIndex = len; secIndex > index; secIndex--) {
  //       if (nums[secIndex] > nums[index]) {
  //         break;
  //       }
  //     }
  //     //swap values of index and secondindex.
  //     [nums[index], nums[secIndex]] = [nums[secIndex], nums[index]];

  //     //reverse values after the index value till last.
  //     let low = index + 1;
  //     let high = len;
  //     while (low < high) {
  //       [nums[low], nums[high]] = [nums[high], nums[low]];
  //       low++;
  //       high--;
  //     }
  //   }

  let len = nums.length - 1;

  let idx;
  let secIdx;

  for (idx = len - 1; idx >= 0; idx--) {
    if (nums[idx] < nums[idx + 1]) {
      break;
    }
  }
  if (idx < 0) {
    console.log(nums.reverse());
  } else {
    for (secIdx = len; secIdx > idx; secIdx--) {
      if (nums[secIdx] > nums[idx]) {
        break;
      }
    }
  }

  [nums[idx], nums[idx + 1]] = [nums[idx + 1], nums[idx]];

  let low = idx + 1;
  let high = len;

  while (low < high) {
    [nums[low], nums[high]] = [nums[high], nums[low]];

    low++;
    high--;
  }

  console.log(nums);
}

nextPermuatation([1, 7, 7]);
