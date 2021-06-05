class ArrayList {
    length = 0;
    constructor() {
     this.data = {};
    }
    push(value) {
     this.data[this.length] = value;
     this.length++;
    }
    pop() {
     const lastIbdex = this.length - 1;
     return this.delete(lastIbdex);
    }
    get(index) {
     return this.data[index];
    }
    delete(index) {
     const deleted = this.data[index];
     this._collapseTo(index);
     return deleted;
    }
    _collapseTo(index) {
     for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
     }
     delete this.data[this.length - 1]; // delete undefined last item
     this.length --;
    }
}
   
   const list = new ArrayList();
   list.push('one');
   list.push('two');
   list.push('three');
   console.log( 'Element removed: ', list);
   console.log( 'Element removed: ', list.pop());
   console.log( 'Element removed: ', list);
   