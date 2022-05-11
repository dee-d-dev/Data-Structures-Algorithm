// Implement strStr().

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

let strStr = function (haystack, needle) {
  let needleLength = needle.length;
  let haystackLength = haystack.length;

  if (needle === "" && haystack === "") {
    console.log(0);
  }

  for (let i = 0; i < haystackLength; i++) {
    if (haystack.substr(i, needleLength) === needle) {
      console.log(i);
      return
    } 
  }
  
};

strStr("hello", "ll");
