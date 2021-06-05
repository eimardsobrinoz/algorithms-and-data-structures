class MaxBinaryHeap {
    private _values: Array<number> = [];
    constructor () {
      this._values = [];
    }
    get values(): Array<number> {
      return this._values;
    }
    set setValues(newValues: Array<number>): void {
       this._values = newValues;
    }
  
    public insert(newValue: number): boolean {
      if (this.values.length === 0) {
        this._values.push(newValue);
        return true;
      }
      this._values.push(newValue);
      return this.bubbleUp();
    }
    private bubbleUp(): boolean {
      let index: number = this.values.length-1;
      let element: number = this.values[index];
      let parentIndex: number = Math.floor((index - 1) / 2);
      while (parentIndex >= 0 && element > this._values[parentIndex]) {
        this._values[index] = this._values[parentIndex];
        this._values[parentIndex] = element;
  
        index = parentIndex;
        parentIndex = Math.floor((index - 1)/ 2);
      }
      return true;
    };
    public extractMax(): number {
      if (this.values.length === 0) return null;
      let max: number = this._values[0];
      let end: number = this._values.pop();
  
      if(this.values.length > 0) {
        this._values[0]= end;
        this.sinkDown();
      }
      return max;
    }
    sinkDown(): void {
      let swap: boolean =false,
          swapIndex: number = 0,
          parentIndex: number = 0,
          leftChildIndex: number = 0,
          rightChildIndex: number = 0,
          nodeToSink:number = this._values[parentIndex],
          valuesLength:number = this._values.length;
  
        let leftChild: number = null;
        let rightChild: number = null;
  
      for(;true;) {
        leftChildIndex = (2*parentIndex) +1;
        rightChildIndex = (2*parentIndex) +2;
        let leftChild: number = null;
        let rightChild: number = null;
  
        if(leftChildIndex < valuesLength) {
          leftChild = this._values[leftChildIndex];
          if(leftChild > nodeToSink) {
            swap = true;
            swapIndex = leftChildIndex;    
          }
        }    
        if(rightChildIndex < valuesLength) {
          rightChild = this._values[rightChildIndex];
          if ( (swap && rightChild > leftChild) ||
          (!swap && rightChild > nodeToSink)) {
            swap = true;
            swapIndex = rightChildIndex;
          }
        }
        if (swap) {
          this._values[parentIndex] = this._values[swapIndex];
          this._values[swapIndex] = nodeToSink;
          parentIndex = swapIndex;
          swap = false;
        } else return;
      }
    }
  }
  
  const binaryHeap: MaxBinaryHeap = new MaxBinaryHeap();
  binaryHeap.insert(1);
  binaryHeap.insert(3);
  binaryHeap.insert(7);
  binaryHeap.insert(6);
  binaryHeap.insert(5);
  binaryHeap.insert(4);
  binaryHeap.insert(2);
  binaryHeap.insert(8);
  console.log('before extract: ', binaryHeap);
  const maxHeap: number = binaryHeap.extractMax();
  console.log('extract: ', maxHeap);
  console.log('after extract: ', binaryHeap);