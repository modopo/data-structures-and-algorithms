'use strict';

class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

class kAryTree {
  constructor(k) {
    this.root = null;
    this.k = k;
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    let queue = [this.root];

    while (queue.length) {
      const node = queue.shift();

      if (node.children.length < this.k) {
        node.children.push(new Node(value));
        return;
      }

      queue.push(...node.children);
    }
  }

  fizzBuzz() {
    let newTree = new kAryTree(this.k);

    if (!this.root) {
      return newTree;
    }

    let queue = [this.root];

    while (queue.length) {
      const node = queue.shift();

      if (node.value % 3 === 0 && node.value % 5 === 0) {
        newTree.insert('FizzBuzz');
      } else if (node.value % 3 === 0) {
        newTree.insert('Fizz');
      } else if (node.value % 5 === 0) {
        newTree.insert('Buzz');
      } else {
        newTree.insert(node.value.toString());
      }

      queue.push(...node.children);
    }

    return newTree;
  }

  traverse() {
    if (!this.root) {
      return [];
    }

    const queue = [this.root];
    const result = [];

    while (queue.length) {
      const node = queue.shift();
      result.push(node.value);
      queue.push(...node.children);
    }

    return result;
  }
}

module.exports = kAryTree;