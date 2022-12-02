// Singly Linked List
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}
export let firstNodeList = new SinglyLinkedList();
firstNodeList.push(1);
firstNodeList.push(2);
firstNodeList.push(3);
firstNodeList.push(4);
firstNodeList.push(5);
export let secondNodeList = new SinglyLinkedList();
secondNodeList.push(1);
secondNodeList.push(2);
secondNodeList.push(3);
secondNodeList.push(4);
secondNodeList.push(5);
secondNodeList.push(6);
