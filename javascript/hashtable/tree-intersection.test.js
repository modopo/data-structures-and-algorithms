'use strict';

const treeIntersection = require('./tree-intersection');
const { BinarySearchTree } = require('../tree/binary-search-tree');

let tree1 = new BinarySearchTree();
let tree2 = new BinarySearchTree();

tree1.add(150);
tree1.add(100);
tree1.add(250);
tree1.add(75);
tree1.add(160);
tree1.add(200);
tree1.add(350);
tree1.add(125);
tree1.add(175);
tree1.add(300);
tree1.add(500);

tree2.add(42);
tree2.add(100);
tree2.add(600);
tree2.add(15);
tree2.add(160);
tree2.add(200);
tree2.add(350);
tree2.add(125);
tree2.add(175);
tree2.add(4);
tree2.add(500);

describe("Testing to see all intersection for two trees", () => {
  test('Standard 2 trees with some intersection', () => {
    console.log(treeIntersection(tree1, tree2))
    expect(treeIntersection(tree1, tree2)).toEqual([100, 160, 125, 200, 175, 350, 500])
  })
})
