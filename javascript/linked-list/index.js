'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.current = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      this.current = current.next;
    }
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    let current = this.head;
    let nextNode;

    if (current.value === value) {
      nextNode = current;
      newNode.next = nextNode;
    } else {
      while (current.next.value !== value) {
        current = current.next;
      }
      nextNode = current.next
      current.next = newNode;
      newNode.next = nextNode;
    }

  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    let current = this.head;
    let nextNode;

    if (current.value === value) {
      nextNode = current.next;
      current.next = newNode;
      newNode.next = nextNode;
    } else {
      while (current.value !== value) {
        current = current.next;
      }
      nextNode = current.next
      current.next = newNode;
      newNode.next = nextNode;
    }

  }

  kthFromEnd(k) {
    let p1 = this.head;
    let p2 = this.head;

    for (let idx = 0; idx < k; idx++) {
      p2 = p2.next;
    }

    while (p2.next !== null) {
      p1 = p1.next;
      p2 = p2.next;
    }
    return p1.value;
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  traverse() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    result += 'NULL'
    return result;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function ziplists(list1, list2) {
  let currentNode1 = list1.head;
  let currentNode2 = list2.head;
  let prevNode = null;

  while (currentNode1 !== null && currentNode2 !== null) {
    let nextNode1 = currentNode1.next;
    let nextNode2 = currentNode2.next;

    // Link the nodes from list2 into list1
    currentNode1.next = currentNode2;
    currentNode2.next = nextNode1;

    // Update the current nodes and the previous node
    prevNode = currentNode2;
    currentNode1 = nextNode1;
    currentNode2 = nextNode2;
  }

  // Append remaining nodes from list2
  if (currentNode2 !== null) {
    prevNode.next = currentNode2;
  }

  return list1;
}

module.exports = {
  LinkedList,
  ziplists
}