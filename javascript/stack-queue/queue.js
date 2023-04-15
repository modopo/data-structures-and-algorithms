'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.front === null) {
      this.front = newNode;
      this.rear = newNode;
    }

    this.rear.next = newNode;
    this.rear = newNode;
  }

  dequeue() {
    try {
      let removed = this.front;

      this.front = removed.next;
      removed.next = null;

      return removed.value;
    } catch(e) {
      return e.name;
    }
  }

  peek() {
      return this.front.value;
    }

    isEmpty() {
      return this.front === null;
    }
  }

module.exports = Queue;