//I used two pointers for this
// let s = ["r", "a", "c", "e", "c", "a", "r", "z"];
// let validPalindrome = function (s) {
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     if (s[left] !== s[right]) {
//       console.log(restPal(s, left, right - 1) || restPal(s, left + 1, right));
//     }
//     left++;
//     right--;
//   }
//   console.log(true);
// };

// function restPal(s, left, right) {
//   while (left < right) {
//     if (s[left] !== s[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   console.log(true);
// }
// validPalindrome(s);
// let s = ["r", "a", "c", "e", "c", "a", "r", "z"];

// let v_pal = (s) => {
//   const res = is_pal(s, 0, s.length - 1);
//   if (res == true) return true;
//   //   console.log(res[0]);
//   return is_pal(s, res[0], res[1] - 1) === true || is_pal(s, res[0] + 1, res[1]) == true;
// };

// let is_pal = (s, start, end) => {
//   while (start < end && s[start] == s[end]) {
//     start++;
//     end--;
//   }
//   //check palindrome
//   if (s[start] == s[end]) {
//     return true;
//   }
//   return [start, end];
// };

let s = ["r", "a", "c", "e", "c", "a", "r"];

let v_pal = function (s) {
  const check = (i, j) => {
    while (i < j) {
      if (s[i] != s[j]) return false;
      i++;
      j--;
    }
    return true;
  };

  i = 0;
  j = s.length - 1;

  while (i < j) {
    if (s[i] != s[j]) {
      return check(i + 1, j) || check(i, j - 1);
    }
    i++;
    j--;

    return true;
  }
};
v_pal(s);
