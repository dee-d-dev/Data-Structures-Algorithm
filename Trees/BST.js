console.log(-Infinity);

//leetcode.com/problems/number-of-different-integers-in-a-string/

/*
    regex //
"a123bc34d8ef34"
turn this string into an array 
loop through it and replace non-digits with space

return
" 123  34 8  34  7"
[123, 34, 8, 34]

ans = 3

*/

https: function isDigit(numset, letter) {
  if (numset.has(letter)) {
    return true;
  }
  return false;
}

var numDifferentIntegers = function (word) {
  if (word == "") {
    return word;
  }
  let numset = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

  let curr = "";
  let ints = new Set();
  for (letter of word) {
    if (isDigit(numset, letter)) {
      curr += letter;
    } else {
      if (curr != "") {
        ints.add(curr);
      }
      curr = "";
    }
  }

  if (curr != "") {
    ints.add(curr);
  }

  return ints.size;

  // "a123bc34d8ef34c7d7"

  // int = [123, 34, 8]
  // curr = 34
};

console.log(numDifferentIntegers("a123bc34d8ef34c7d7"));
