// function FactorialRecursionIterative(number) {
//   let answer = 1;
//   for (i = 1; i <= number; i++) {
//     answer = i * answer;
//   }

//   console.log(answer);
// }

function FactorialRecursionRecursive(number) {
  if (number === 2) {
    return 2;
  }

  let answer = number * FactorialRecursionRecursive(number - 1);
  console.log(answer);
  return answer;
}

// FactorialRecursionIterative(5);
FactorialRecursionRecursive(6);
