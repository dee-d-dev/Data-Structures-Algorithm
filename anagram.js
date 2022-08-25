// let s = "anagramf";
// let t = "nagaram";

var anagram = (s, t) => {
  if (s.length != t.length) {
    console.log(false);
  }
  let count = {};
  let N = s.length;
  for (let char of s) {
    if (count[char] == undefined) {
      count[char] = 1;
    }

    count[char]++;

    // console.log("SCount:", count);
  }

  for (let char of t) {
    if (count[char] == undefined) {
      console.log(false);
    }
    count[char]--;
    // console.log("tCount:", count);
  }

  // console.log(true);
};
anagram("anagram", "nagaram");
