//  Given two integer arrays nums1 and nums2, return an array of their intersection.
//Each element in the result must appear as many times as it shows in both arrays and you may
//return the result in any order.

//Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

const intersect = function (nums1, nums2) {
  let final = [];

  nums1.forEach((num) => {
    if (nums2.includes(num)) {
      let num2Idx = nums2.indexOf(num);
      nums2.splice(num2Idx, 1);

      final.push(num);
     
    }
  });


 console.log(final);
};

intersect([4,9,5], [9,4,9,8,4]);