// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

let topKFrequent = function (nums, k) {
  nums.sort((a, b) => a - b);
  let result = [];
  let arr = nums;

  if (arr.length === 1) {
    result.push(arr[0]);
    return result;
  } else {
    let max = 0;
    let id = 0;

    for (let j = 0; j < k; j++) {
      for (let i = 0; i < arr.length; i++) {
        let d = i + 1;
        let plus = 1;
        while (arr[d] === arr[i]) {
          plus += 1;
          d += 1;
        }

        if (plus > max) {
          max = plus;
          id = arr[i];
        }

        i = d - 1;
      }

      max = 0;
      result.push(id);

      arr = arr.filter((num) => num !== id);
    }

    return result;
  }
};
