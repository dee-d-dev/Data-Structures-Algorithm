class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    this.array = [];
  }
  peek() {
    console.log(this.array[this.array.length - 1]);
  }
  push(value) {
    this.array.push(value);
    console.log(this);
  }
  pop() {
    this.array.pop();

    console.log(this);
  }
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Uber");
myStack.push("Meta");
myStack.peek();
myStack.pop();
// myStack.pop();
// myStack.pop();
