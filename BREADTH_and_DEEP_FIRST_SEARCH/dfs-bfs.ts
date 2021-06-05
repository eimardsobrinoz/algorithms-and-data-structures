class TreeNode<T> {
    private label: number;
    private data: T;
    constructor(label: number, data: T) {
      this.label = label;
      this.data = data;
    }
  }
  
  
  class Tree<T> {
    private root: TreeNode<T>;
    private adjacents: Array<Array<number>>;
    private nodes: Array<TreeNode<T>>;
    private allowCyclic: boolean;
    constructor(rootValue: T, allowCyclic: boolean = false) {
      this.root = new TreeNode<T>(0, rootValue);
      this.adjacents = []; 
      this.adjacents[0] = [];
      this.nodes = [];
      this.allowCyclic = allowCyclic;
    }
  
    addNode = (node: TreeNode<T>) => {
      this.adjacents[node.label] = [];
      this.nodes.push(node);
    };
  
    setConnection = (nodeLabel1: number, nodeLabel2: number) => {
      if(!this.allowCyclic && nodeLabel1 === nodeLabel2) throw Error('Graph cannot be cyclic');
      this.adjacents[nodeLabel1].push(nodeLabel2);
    };
  
    breadthFirstSearch(): Array<number> {
      const visited: Array<number> = [];
      let nodesProcessed: Array<number> = [0];
      while(nodesProcessed.length) {
        const nodeaux: number = nodesProcessed.shift();
        if (visited.indexOf(nodeaux) < 0) {
          nodesProcessed = nodesProcessed.concat(this.adjacents[nodeaux]);
          visited.push(nodeaux);
        }
      }
      return visited;
    }
  
    depthFirstSearch(): Array<number> {
      const visited: Array<number> = [];
      let nodesProcessed: Array<number> = [0];
      while(nodesProcessed.length) {
        const nodeaux: number = nodesProcessed.shift();
        if (visited.indexOf(nodeaux) < 0) {
          visited.push(nodeaux);
          // if(!this.adjacencies[nodeaux]) continue;
          nodesProcessed = this.adjacents[nodeaux].concat(nodesProcessed);
        }
      }
      return visited;
    }
  }
  
  const tree = new Tree(100);
  const node1 = new TreeNode(1, 99);
  const node2 = new TreeNode(2, 3);
  const node3 = new TreeNode(3, 19);
  const node4 = new TreeNode(4, -20);
  const node5 = new TreeNode(5, 33);
  const node6 = new TreeNode(6, 3663);
  const node7 = new TreeNode(7, 3663);
  const node8 = new TreeNode(8, 3663);
  const node9 = new TreeNode(9, 3663);
  tree.addNode(node1);
  tree.addNode(node2);
  tree.addNode(node3);
  tree.addNode(node4);
  tree.addNode(node5);
  tree.addNode(node6);
  tree.addNode(node7);
  tree.addNode(node8);
  tree.addNode(node9);
  tree.setConnection(0, 1);
  tree.setConnection(0, 2);
  tree.setConnection(2, 6);
  tree.setConnection(1, 3);
  tree.setConnection(1, 4);
  tree.setConnection(1, 5);
  tree.setConnection(3, 7);
  tree.setConnection(4, 8);
  tree.setConnection(4, 9);
  
  console.log('breadthFirstSearch(): ',tree.breadthFirstSearch()); 
  console.log('depthFirstSearch(): ',tree.depthFirstSearch()); 
  
  console.assert(JSON.stringify(tree.breadthFirstSearch()) === '[0,1,2,3,4,5,6,7,8,9]', 'BFS Wrong implementation');
  console.assert(JSON.stringify(tree.depthFirstSearch) === '[0,1,3,7,4,8,9,5,2,6]', 'DFS Wrong Implementation');
  