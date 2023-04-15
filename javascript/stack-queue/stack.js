'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);

    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    try {
      let temp = this.top;

      this.top = this.top.next;
      temp.next = null;

      return temp.value;
    } catch (e) {
      return e.name;
    }
  }

  peek() {
    return this.top.value;
  }

  isEmtpy() {
    return this.top === null;
  }

}



module.exports = Stack;