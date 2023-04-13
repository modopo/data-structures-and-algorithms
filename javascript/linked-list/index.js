'use strict';

class LinkedList {
  constructor() {
    this.head = null;
    this.current = this.head;
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
    }

    while (current.value !== value) {
      current = current.next;
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
    while (current) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    result += 'NULL';
    return result;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = LinkedList;
