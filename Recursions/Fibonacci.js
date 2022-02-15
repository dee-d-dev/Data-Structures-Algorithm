//0,1,1,2,3,5,8,13,21

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

fibonacciRecursive(8);
