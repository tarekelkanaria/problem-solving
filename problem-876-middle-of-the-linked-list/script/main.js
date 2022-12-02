// problem 876  Middle of the Linked List
import { firstNodeList, secondNodeList } from "../script/singleLinkedList.js";

var middleNode = function (head) {
  let current = head;
  let middle = head;
  //   loop while there is nodes in the linkedlist and current node isn't null
  while (current && current.next) {
    // give current two steps forward and middle one step
    current = current.next.next;
    middle = middle.next;
  }
  return middle;
};

console.log(middleNode(firstNodeList.head)); // Node{val: 3, next: Node}
console.log(middleNode(secondNodeList.head)); // Node{val: 4, next: Node}
