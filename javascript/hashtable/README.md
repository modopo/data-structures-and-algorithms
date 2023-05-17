# Hashtable

## Description
Implement binary tree

## Whiteboard Process
![image](./binary_tree.png)
![image](./fizzBuzz.png)

## Approach & Efficiency

### Repeated Word

### Tree Intersection

The time complexity of this tree_intersection function is O(N+M), where N and M are the number of nodes in tree1 and tree2, respectively. This is because we need to traverse both trees to build the hash table and then traverse the second tree again to find any common nodes.

The space complexity of this function is O(N) because we are storing the values of the first tree in a hash table. The hash table can hold up to N unique values, which is the number of nodes in tree1. The intersectionArr array also takes up additional space that depends on the number of nodes common to both trees.

## Solution ##
![repeated-word.js](./repeated-word.js)
![tree-intersection.js](./tree-intersection.js)
