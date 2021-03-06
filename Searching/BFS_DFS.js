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

  // remove(value) {
  //   if (!this.root) {
  //     return false;
  //   }

  //   currentNode = this.root;
  //   parentNode = null;

  //   while (currentNode) {
  //     if (value < currentNode.value) {
  //       //left
  //       parentNode = currentNode;
  //       currentNode = currentNode.left;
  //     } else if (value > currentNode) {
  //       parentNode = currentNode;
  //       currentNode = currentNode.right;
  //     } else if (value === currentNode) {
  //       //get to work here

  //       //option 1: if there's no right child
  //       if (currentNode.right == null) {
  //         if ((parentNode = null)) {
  //           this.root = currentNode.left;
  //         } else {
  //           //if parent > current value,current value is going to be a left node of the parent
  //           if (currentNode.value < parentNode.value) {
  //             parentNode.left = currentNode.left;
  //           } else if (currentNode.value > parentNode.value) {
  //             parentNode.right = currentNode.left;
  //           }
  //         }
  //       } else if (currentNode.right.left == null) {
  //         if (parentNode == null) {
  //           this.root = currentNode.left;
  //         } else {
  //           currentNode.right.left = currentNode.left;

  //           //if parent > current, make right child of the left the parent
  //           if (currentNode.value > parentNode.value) {
  //             parentNode.left = currentNode.right;

  //             //if parent is < current, make the right child a right child of the parent
  //           } else if (currentNode.value > parentNode.value) {
  //             parentNode.right = currentNode.right;
  //           } else if(currentNode.right.left === null){

  //           }
  //         }
  //       }
  //     }
  //   }
  // }

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

  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    console.log(list);
    return list;
  }

  DFSInOrder() {
    return traverseInOrder(this.root, []);
  }
  DFSPreOrder() {
    return traversePreOrder(this.root, []);
  }
  DFSPostOrder() {
    return traversePostOrder(this.root, []);
  }
}

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  console.log(list);
  return list;
}
function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  console.log(list);
  return list;
}
function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  console.log(list);
  return list;
}

const BST = new BinarySearchTree();
BST.insert(5);
BST.insert(3);
BST.insert(8);
BST.insert(4);
BST.insert(6);
BST.insert(2);
BST.insert(9);

// BST.remove(9);
// console.log(BST.lookUp(6));
// BST.breadthFirstSearch();
// BST.DFSInOrder();
// BST.DFSPreOrder();
// BST.DFSPostOrder();

//     5
//  3      8
//2   4  6   9
