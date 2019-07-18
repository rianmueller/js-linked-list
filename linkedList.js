/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }

  // 1) Add a new node to the current tail
  // 2) Update the current tail's next to the new node
  // 3) Update your linked list to point tail to the new node

  function add(value) {
    let newNode = {};
    newNode.value = value;
    newNode.next = null;
    let current = head;
    if (head === null) {
      head = newNode;
    } else {
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    tail = newNode;
    // console.log("THE NEW VALUE IS: " + value);
    // console.log(newNode);
    // console.log(head);
    return newNode;
  }

  // 1) Find the node you are searching for and keep track of previous node
  // 2) When found, update previous node's next to point to the next node referenced by node to be deleted
  // 3) Delete found node from memory

  function remove() {
    return;
  }

  // 1) Start at the head node of your linked list
  // 2) Check if value matches what you're searching for, if found return that node
  // 3) If not found, move to the next node via current node's .next property
  // 4) Repeat until .next is null (tail / end of list)

  let current = head;

  function get(number) {
    if (number < 0) {
      return;
    }
    if (number === 0) {
      console.log("THE NODE AT POSITION " + number + " IS: ");
      console.log(current);
      return current;
    }
    if (number > 0) {
      current = current.next;
      get(--number);
      // console.log(current);
      return current;
    }
  }

  // 1) Find the position/node in your linked list where you want to insert your new node after
  // 2) Update the next property of the new node to point to the node that the target node currently points to
  // 3) Update the next property of the node you want to insert after to point to the new node

  function insert() {
    return;
  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };
}
