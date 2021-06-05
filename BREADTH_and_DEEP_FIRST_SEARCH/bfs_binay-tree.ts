class MyQueue<T> {
    private items: T[] = [];
    addItem(item: T) {
      this.items.push(item);
    }
    pop(): T {
      return this.items.shift();
    }
    isEmpty(): boolean {
      return this.items.length == 0;
    }
  }
  
  class MyTreeNode<T> {
    private key: T;
    private leftChild?: MyTreeNode<T>;
    private rightChild?: MyTreeNode<T>;
    constructor(newKey: T) {
      this.key = newKey;
    }
  
    getKey = ():T => this.key;
    setLeftChild = (node: MyTreeNode<T>) => this.leftChild = node;
    setRightChild = (node: MyTreeNode<T>) => this.rightChild = node;
    getLeftChild = (): MyTreeNode<T> => this.leftChild;
    getRightChild = (): MyTreeNode<T> => this.rightChild;
  }
  
  class MyBinaryTree<T> {
    private root: MyTreeNode<T>;
    setRoot= (node: MyTreeNode<T>) => this.root = node;
    addNode(key: T): void {
      this.root = this.addNodeByRecursion(this.root, key);
    }
    addNodeByRecursion(node: MyTreeNode<T>, key: T): MyTreeNode<T> {
      if (node == null) {
        return new MyTreeNode<T>(key);
      } 
      if (node.getKey() > key) {
        node.setLeftChild(this.addNodeByRecursion(node.getLeftChild(), key));
      } else  if (node.getKey() < key) {
        node.setRightChild(this.addNodeByRecursion(node.getRightChild(), key));
      }
      return node;
    }
  
    levelOrderTraversal(from?: number) {
      if (!this.root) return;
        const nodes: MyQueue<MyTreeNode<T>> = new MyQueue<MyTreeNode<T>>();
        nodes.addItem(this.root);
        while(!nodes.isEmpty()) {
          const nodeAux: MyTreeNode<T> = nodes.pop();
          console.log("key is:" + nodeAux.getKey());
          if (nodeAux.getLeftChild()) {
            nodes.addItem(nodeAux.getLeftChild());
          }
          if (nodeAux.getRightChild()) {
            nodes.addItem(nodeAux.getRightChild());
          }
      }
    }
  }
  
  let tree = new MyBinaryTree<number>();
  tree.addNode(7);
  tree.addNode(8);
  tree.addNode(4);
  tree.addNode(3);
  tree.addNode(5);
  tree.addNode(2);
  tree.addNode(9);
  tree.addNode(11);
  tree.levelOrderTraversal();