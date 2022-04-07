
// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the smallest possible weight of the left stone. If there are no stones left, return 0.

// Input: stones = [2, 7, 4, 1, 8, 1];
// Output: 1;

var lastStoneWeight = function (stones) {
  stones.sort((a, b) => a - b);
  for (let i = stones.length - 1; i > 0; i--) {
    stones[i - 1] = stones[i] - stones[i - 1];
    stones.sort((a, b) => a - b);
  }
  console.log(stones[0]);
};

lastStoneWeight([2, 7, 4, 1, 8, 1]);