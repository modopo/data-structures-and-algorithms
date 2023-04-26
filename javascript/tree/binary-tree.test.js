'use strict';

const { BinarySearchTree } = require("./binary-search-tree");
const breadthFirst = require('./breadth-first');
const util = require('util');

describe('Testing binary tree alonside BST', () => {

  const bst = new BinarySearchTree();

  test('Make a tree from null', () => {
    bst.add(10);

    expect(bst.preOrder()).toEqual([10]);
  })

  test('Make a BST', () => {
    bst.add(6);
    bst.add(3);
    bst.add(14);
    bst.add(11);
    bst.add(27);
    bst.add(5);
    bst.add(9);

    expect(bst.preOrder()).toEqual([10, 6, 3, 5, 9, 14, 11, 27]);
  });

  test('preOrder correctly', () => {
    expect(bst.preOrder()).toEqual([10, 6, 3, 5, 9, 14, 11, 27])
  })

  test('inOrder correctly', () => {
    console.log(bst.inOrder());
    expect(bst.inOrder()).toEqual([3, 5, 6, 9, 10, 11, 14, 27])
  });

  test('postOrder correctly', () => {
    console.log(bst.postOrder());
    expect(bst.postOrder()).toEqual([5, 3, 9, 6, 11, 27, 14, 10])
  });

  test('Contains properly', () => {
    expect(bst.contains(5)).toEqual(true);
    expect(bst.contains(399)).toEqual(false);
  })

  test('Find max in tree', () => {
    bst.add(92349);
    expect(bst.findMax()).toEqual(92349);
  })

  test('Breadth first ordering output', () => {
    expect(breadthFirst(bst)).toEqual([10, 6, 14, 3, 9, 11, 27, 5, 92349])
  })
})