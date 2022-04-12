//  Given two integer arrays nums1 and nums2, return an array of their intersection.
//Each element in the result must appear as many times as it shows in both arrays and you may
//return the result in any order.

//Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

const intersect = function (nums1, nums2) {
  let final = [];
  let len1 = nums1.length
  let len2 = nums2.length

  nums1.forEach((num) => {
    if (nums2.includes(num)) {
      let num2Idx = nums2.indexOf(num);
      nums2.splice(num2Idx, 1);

      final.push(num);
     
    }
  });

  // for(i=0; i<len1; i++){
  //   for(j=0; j<len2; j++){
  //     if(nums1[i] == nums2[j]){
  //       final.push(nums1[i])
  //     }
  //   }
  // }


 console.log(final);
};

intersect([4,9,5], [9,4,9,8,4]);