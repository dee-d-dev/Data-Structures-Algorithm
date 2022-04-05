// let  removeDuplicates = function (nums) {
//   let l = 0;

//   // right pointer to loop through the array
//   for (let r = 1; r < nums.length; r++) {
//     if (nums[l] === nums[r]) {
//       // go to next iteration
//       continue;
//     }

//     //update the array
//     nums[++l] = nums[r];
//   }
//   console.log(l + 1); // since l start counting from 0
// };

let removeDuplicates = function (nums) {
  // for (let i = 0; i < nums.length; i++) {
  //   nums.splice(i, nums.lastIndexOf(nums[i]) - i);
  // }

  // console.log(nums.length);
  //[1,1,2] [1,2,2]
  let low = 1;//2
  let high = 1; //3
  let len = nums.length;

  while (high < len) {
    if (nums[high] !== nums[high - 1]) {
      nums[low] = nums[high];
      low++;
    }
    high++;
  }

  console.log(low);
};

removeDuplicates([1, 1, 2]);
