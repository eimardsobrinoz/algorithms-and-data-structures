class BST {
    constructor() {
      this.root = null;
    }
  
    add(value) {
      if (!this.root) {
        return (this.root = new Node(value));
      }
      let currentNode = this.root;
      for(;true;) {
        if (currentNode.value > value) {
          if(!currentNode.left) {
            return (currentNode.left = new Node(value));
          }
          currentNode = currentNode.left;
        } else {
          if(!currentNode.right) {
            return (currentNode.right = new Node(value));
          }
          currentNode = currentNode.right;
        }
      }
    }
  
    toObject() {
      return this.root;
    }
  
  }
  
  class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  let array: number = [3, 1, 4, 5, 1, 10, 2, 9, 8];
  let myBst = new BST();
  array.forEach( (num: number) => myBst.add(num));
  console.dir(myBst.toObject(), { depth: null });