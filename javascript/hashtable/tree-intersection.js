'use strict';
const HashTable = require('./hashtable');

function treeIntersection(tree1, tree2) {
  let table = new HashTable();
  let result = [];

  function traverseTree(node) {
    if (!node) return;

    table.set(node.value, true)

    traverseTree(node.left);
    traverseTree(node.right);
  }

  function findDuplicates(node) {
    if (!node) return;

    if (table.get(node.value)) {
      result.push(node.value);
    }

    findDuplicates(node.left);
    findDuplicates(node.right);
  }

  traverseTree(tree1.root);
  findDuplicates(tree2.root);

  return result;
}

module.exports = treeIntersection;