class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    console.log(this.first);
    return this.first;
  }
  push(value) {
    const newNode = new Node(value);

    if (this.length == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const holdingPointer = this.first;
      this.first.next = newNode;
      this.last = this.first.next;
    }
    this.length++;
    console.log(this);
    return this;
  }
  pop() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;

    console.log(this);
  }
}

const myStack = new Stack();
myStack.push("Google");
myStack.pop();
myStack.push("Uber");
myStack.push("Meta");
myStack.peek();
// myStack.pop();
// myStack.pop();
// myStack.pop();
