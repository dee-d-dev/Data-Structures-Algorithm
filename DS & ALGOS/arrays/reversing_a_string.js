//create a function that reverses a string:
//'Hi my name is adedotun' should be:
//'nutodeda sa eman ym iH'

const string = "Hi my name is adedotun";

function reverseString(str) {
  //check input
  if (!str || str.length < 2 || typeof str != "string") {
    return "Input words greater than 1 letter and don't input only numbers";
  }

  const backward = [];
  const itemsLength = str.length - 1;

  for (let i = itemsLength; i >= 0; i--) {
    backward.push(str[i]);
  }
  console.log(backward.join(""));
}

// reverseString(string);

//OR using built-in methods in JavaScript
function reverse2(str) {
  const backwards = str.split("").reverse().join("");
  console.log(backwards);
}

// reverse2(string)

//simplifying it using the arrow function
const reverse3 = str => console.log(str.split('').reverse().join(''))

reverse3(string)