// Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Implement KthLargest class:

// KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
// int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.

var KthLargest = function (k, nums) {
  this.k = k;
  this.arr = nums.sort((a, b) => b - a);
  this.arr.length = this.arr.length > k ? k : this.arr.length;
};

KthLargest.prototype.add = function (val) {
  const insert = () => {
    if (this.arr[this.arr.length - 1] < val || this.arr.length < this.k) {
      this.arr.push(val);
      this.arr = this.arr.sort((a, b) => b - a);
      this.arr.length = this.arr.length > this.k ? this.k : this.arr.length;
    }
  };
  insert();
  return this.arr[this.arr.length - 1];
};


