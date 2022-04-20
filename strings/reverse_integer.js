/*
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Example 1:

Input: x = 123
Output: 321
*/ 

let reverse = function (x) {
  const length = Math.abs(x).toString().length;
  let ans = 0;
  for (let i = 0; i < length; i++) {
    ans += (~~(x / 10 ** i) % 10) * 10 ** (length - 1 - i);
  }
  return Math.abs(ans) > 2 ** 31 ? 0 : ans;
};


reverse(123)