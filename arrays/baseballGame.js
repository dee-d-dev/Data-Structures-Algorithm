
// You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

// At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:

// An integer x - Record a new score of x.
// "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
// "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
// "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
// Return the sum of all the scores on the record.

 

// Example 1:

// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.


let calPoints = function (ops) {
  const n = ops.length;
  const st = [];
  for (let i = 0; i < n; i++) {
    switch (ops[i]) {
      case "+": {
        const num1 = st.pop();
        const num2 = st[st.length - 1];
        st.push(num1);
        st.push(Number(num1) + Number(num2));
        break;
      }
      case "D": {
        const num1 = st[st.length - 1];
        st.push(num1 * 2);
        break;
      }
      case "C": {
        st.pop();
        break;
      }
      default: {
        st.push(ops[i]);
      }
    }
  }
  let ans = 0;
  for (let i = 0; i < st.length; i++) {
    ans += Number(st[i]);
  }
  return ans;
};