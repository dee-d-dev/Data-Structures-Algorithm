class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  remove() {}

  lookUp(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        //left
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        //right
        currentNode = currentNode.right;
      } else if (currentNode.value == value) {
        return currentNode;
      }
    }
    return false;
  }
}

const BST = new BinarySearchTree();
BST.insert(5);
BST.insert(3);
BST.insert(8);
BST.insert(4);
BST.insert(6);
BST.insert(9);
console.log(BST.lookUp(85));

//     5
// 3      8
//2  4  6    9
