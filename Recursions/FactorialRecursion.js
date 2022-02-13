function FactorialRecursion(number) {
  let answer = 1;
  for (i = 1; i <= number; i++) {
    answer = i * answer;
  }

  console.log(answer);
}

FactorialRecursion(2);
