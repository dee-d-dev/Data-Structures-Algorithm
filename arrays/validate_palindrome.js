//I used two pointers for this
let s = ["r", "a", "c", "e", "c", "a", "r"];
let validPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return restPal(s, left, right - 1) || restPal(s, left + 1, right);
    }
    left++;
    right--;
  }
  console.log(true);
};

function restPal(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  console.log(true);
}
validPalindrome(s);
