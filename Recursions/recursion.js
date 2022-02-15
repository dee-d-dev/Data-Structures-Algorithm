let counter = 0;
function Recursion() {
  console.log("hello world");
  if (counter == 5) {
    return console.log("Thanks for looping");
  }
  counter++;
  Recursion();
}

Recursion();

// function reverseString(str) {
//   let reverseStr = str.split("").length - 1;
//   let rString = [];

//   for (i = reverseStr; i >= 0; i--)
//     if (str.length > 1) {
//       rString.push(str[i]);
//     }
//   return rString.join("");
// }

// reverseString("boy");
