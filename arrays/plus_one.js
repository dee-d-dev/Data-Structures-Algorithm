let plusOne = function (digits) {
  let len = digits.length - 1;

  for (i = len; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      console.log(digits)
      return digits;
    }
  }
  digits.unshift(1);

  console.log(digits)
  return digits;
};

plusOne([1,1,0])
