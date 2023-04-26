'use strict';

function breadthFirst(tree) {
  let result = [];
  let tracker = [tree.root];

  while (tracker.length > 0) {
    const node = tracker.shift();
    result.push(node.value);

    if (node.left) {
      tracker.push(node.left);
    }
    if (node.right) {
      tracker.push(node.right);
    }
  }

  return result;
}

module.exports = breadthFirst;