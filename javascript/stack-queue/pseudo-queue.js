'use strict';

const Stack = require('./stack');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class PsuedoQueue {
  constructor() {
    this.enqueueStack = new Stack;
    this.dequeueStack = new Stack;
  }

  enqueue(value) {
    const newNode = new Node(value);

    this.enqueueStack.push(newNode);
  }

  dequeue() {
    try {
      if (this.dequeueStack.isEmtpy()) {
        while(!this.enqueueStack.isEmtpy()) {
          let temp = this.enqueueStack.pop();
          this.dequeueStack.push(temp);
        }
      
        let result = this.dequeueStack.pop();

        while(!this.dequeueStack.isEmtpy()) {
          let temp = this.dequeueStack.pop();
          this.enqueueStack.push(temp);
        }

        return result;
      }
    } catch (e) {
      return e.name;
    }
  }
}

module.exports = PsuedoQueue;