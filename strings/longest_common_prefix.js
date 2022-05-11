// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

var longestCommonPrefix = function (strs) {
  let longest = "";
  let compareIndex = 0;
  let compareWord = strs[0];

  for (let compareLetter of compareWord) {
    for (let i = 1; i < strs.length; i++) {
      let currLetter = strs[i][compareIndex];

      if (compareLetter != currLetter) {
        return longest;
      }
    }
    compareIndex++;
    longest += compareLetter;
  }
  return longest;
};