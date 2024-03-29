# Trees

## Description
Implement binary tree

## Whiteboard Process
![image](./binary_tree.png)
![image](./fizzBuzz.png)

## Approach & Efficiency

### Binary Tree

* Implement a Node class that constructs an object that has a value, has a left, and has a right property.
* Create a Binary Tree object that has a root that points to null or another Node.

The time complexity of adding a node to a binary tree is O(log n) in the average case and O(n) in the worst case, where n is the number of nodes in the tree. The worst-case scenario occurs when the tree is unbalanced and has a height of n, causing the new node to be inserted at the deepest level of the tree, which requires traversing all the nodes.

Space complexity of adding a node to a binary tree is O(1) because it requires a constant amount of space (just one Node object) to store the new node.

### Find Max

* Find the max value in the in a binary tree
* Traverse the whole tree and keep a separate variable to keep track of any number that is higher.

The time complexity of adding a node to a binary tree is O(log n) in the average case and O(n) in the worst case, where n is the number of nodes in the tree. The worst-case scenario occurs when the tree is unbalanced and has a height of n, causing the new node to be inserted at the deepest level of the tree, which requires traversing all the nodes.

Space complexity of adding a node to a binary tree is O(1) because it requires a constant amount of space (just one Node object) to store the new node.

### Breadth First

* Return an array of values when traversing a tree breadth first
* Each layer will be read left to right, top to bottom

The time and space complexity is O(n) because each node of the tree is accessed. The value once accessed, is pushed into an array that grows in size to the number of nodes in the tree.

### FizzBuzz

* Recreate k-ary tree with the values of each node modified with the following ruleset:
  * if divisible by 3, replace iwht 'Fizz'
  * if divisible by 5, replace with 'Buzz'
  * if divisible by 3 and 5, replace with 'FizzBuzz'
  * if none of the above, replace with string version of value

* Create K-ary tree class
* Create insert() method in class
* Traverse breadth first three
* When accessing each node, apply the ruleset to the value and insert result into a new K-ary tree

The time complexity is O(n) since we are traversing through all the nodes of the k-ary tree.
The space complexity is also O(n), since we are creating another tree with the same amount of nodes in the ingested tree.

## Solution ##
![binary-tree.js](./binary-tree.js)
![binary-search-tree.js](./binary-search-tree.js)
![breadth-first.js](./breadth-first.js)
![k-ary-tree.js](./k-ary-tree.js)

## Testing ##
![binary-tree.test.js](./binary-tree.test.js)
![k-ary-tree.test.js](./k-ary-tree.test.js)
