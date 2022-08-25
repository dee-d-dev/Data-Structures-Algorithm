//0,1,1,2,3,5,8,13,21

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }

  let result = fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  console.log(result)
}

function fibonacciIterative(n) {
  let arr = [0, 1];
  for (i = 2; i < n + 1; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
}

fibonacciRecursive(3)

// fibonacciIterative();

//Using DYNAMIC PROGRAMMING
let calculations = 0;
function fibonacciMaster() {
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

// console.log(fibonacciMaster(10))
// fibonacciMaster(10);
// console.log(`calculation are ${calculations}`);
