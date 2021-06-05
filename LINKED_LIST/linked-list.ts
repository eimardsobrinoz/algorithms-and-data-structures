class Node<T> {
    public next: Node<T> = null;
    public previous: Node<T> = null;
    constructor(public value: T) {}
}
  
class MyLinkList<T> implements LinkListInterface {
private head: Node<T> = null;
constructor(){}

addAtTheBeginning(data: T): Node<T> {
    const newNode: Node<T> =  new Node<T>(data);
    if (!this.head) this.head = newNode;
    else {
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
    }
    return newNode;
}

addAtTheEnd(data: T): Node<T> {
    const newNode: Node<T> =  new Node<T>(data);
    if (!this.head) this.head = newNode;
    else {
    const getLastNode =  (node: Node<T>) => {
        return node.next ? getLastNode(node.next) : node;
    };
    const lastNode: Node<T> =  getLastNode(this.head);
    lastNode.next = newNode;
    newNode.previous = lastNode;
    }
    return newNode;
}

delete(node: Node<T>): void {
    console.log('emilio to delete: ', node);
    if (!node.previous) this.head = node.next;
    else {
    const previous: Node<T> = node.previous;
    const next: Node<T> = node.next;
    previous.next = node.next;
    if (next) next.previous = previous;
    }
}
traverse(): T[] {
    const array: T[] = [];
    if (!this.head) return array;
    else {
    const getNextNode = (node: Node<T>) => {
        array.push(node);
        return node.next ? getNextNode(node.next) : array;
    };
    return getNextNode(this.head);
    }
}
size(): number {
    return this.traverse().length;
}
search( compareTo:(data: T) => boolean ): Node<T> {
    if (!this.head) return null;
    else {
    const checkNode = (node: Node<T>) => {
        if (compareTo(node.value)) return node;
        else return node.next ? checkNode(node.next) : null;
    };
    return checkNode(this.head);
    }
}
}

interface LinkListInterface {
addAtTheBeginning(data: T): Node<T>;
addAtTheEnd(data:T):Node<T>;
delete(node: Node<T>): void;
traverse(node: Node<T>): T[];
search( compareTo:(data: T) => boolean ): Node<T>;
size(): number
};
interface City {
cityName: string;
}
  
  const madrid: City = { cityName: 'Madrid'};
  const barcelona: City = { cityName: 'Barcelona'};
  const sevilla: City = { cityName: 'Sevilla'};
  const milton: City = { cityName: 'Milton Keynes'};
  const cities: MyLinkList<City> = new MyLinkList <City>();
  cities.addAtTheBeginning(madrid);
  cities.addAtTheBeginning(barcelona);
  cities.addAtTheBeginning(sevilla);
  cities.addAtTheEnd(milton);
  console.log('testing linkedList: ', cities);
  console.log('testing linkedList traverse: ', cities.traverse());
  console.log('testing linkedList size: ', cities.size());
  const isMadrid = (data: City) => data.cityName === 'Madrid';
  const madridNode: Node<City> = cities.search(isMadrid);
  cities.delete(madridNode);
  console.log('testing linkedList length: ', cities.size())
  console.log('testing linkedList search: ', cities.traverse())
  
  