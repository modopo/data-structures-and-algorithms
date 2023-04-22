'use strict';

const { BinaryTree, Node } = require('./binary-tree');

class BinarySearchTree extends BinaryTree {

  add(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;

      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            break;
          }
          current = current.right;
        }
      }
    }
  }

  contains(value) {
    let current = this.root;

    while(current) {
      if (value === current.value) {
        return true;
      } else if (value > current.value) {
        current = current.right;
      } else if (value < current.value) {
        current = current.left;
      }
    }

    return false;
  }
}

module.exports = {
  BinarySearchTree
}