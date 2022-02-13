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
