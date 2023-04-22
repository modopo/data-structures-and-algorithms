'use strict'

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let result = [];

    const traverse = (node) => {
      if (node !== null) {
        result.push(node.value);
        traverse(node.left);
        traverse(node.right);
      }
    };

    traverse(this.root);

    return result;
  }

  inOrder() {
    let result = [];

    const traverse = (node) => {
      if (node !== null) {
        traverse(node.left);
        result.push(node.value);
        traverse(node.right);
      }
    };

    traverse(this.root);

    return result;
  }

  postOrder() {
    let result = [];

    const traverse = (node) => {
      if (node !== null) {
        traverse(node.left);
        traverse(node.right);
        result.push(node.value);
      }
    };

    traverse(this.root);

    return result;
  }
}

module.exports = {
  BinaryTree,
  Node
}