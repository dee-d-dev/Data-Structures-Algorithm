function singleN(nums) {
  // let right = 0;

  // let len = nums.length;
  //   while (right < len) {
  //     nums.sort();
  //     console.log(nums);
  //     if (nums[right] != nums[right + 1]) {
  //         right++;
  //     }
  //     // right++
  //     console.log(right)
  //   }

  // nums.sort()
  //     console.log(nums);

  // for (i = 0; i < len; i++) {
  //   if (nums[i] != nums[i + 1]) {
  //     console.log(nums[i]);
  //   }
  //   i++;
  // }

  //Using Set
  let numbers = new Set()
    
  for(num of nums){
    if(numbers.has(num)){
      numbers.delete(num)
    }else{
      numbers.add(num)
    }
  }
    
  console.log(Array.from(numbers)[0]);
};


singleN([4, 1, 2, 1, 2]);
