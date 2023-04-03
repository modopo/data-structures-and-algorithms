# Reversing An Array #

## Whiteboard Process ##

***

### Problem Domain ###

Write a function that takes in an array of numbers as an argument. The function should return an array with the elements reversed without using any built-in methods.

Input: an array of numbers

Output: return the array with the elements in reversed order

### Visualization ###

Odd length array\
[3, 5, 6, 7, 8, 3, 2, 7, 9]  ->  [ 9, 7, 2, 3, 8, 7, 6, 5, 3]

index swap\
0 <-> 8,
1 <-> 7,
2 <-> 6,
3 <-> 5

Even length array\
[2, 3, 6, 8, 9, 3]  ->  [3, 9, 8, 6, 3, 2]

index swap

0 <-> 5,
1 <-> 4,
2 <-> 3

### Algorithm ###

- Create function that accepts array of elements
- Iterate through array with two iterator
  - one starts from the beginning of array and increments
  - other starts at the end of the array and decrements
  - stop when start is greater than end
- Deconstruct assign the values by the two iterator, by using the opposite iterator as indexes

### Psuedo Code ###

function reverseArray (some arr with elements)\
for loop with 2 iterators

- start = 0, end = arr.length - 1
- condition to stop: start < end
- start++, end--
  
- do [ arr[start], arr[end] ] = [ arr[end], arr[start] ];

### Step Through ###

arr = [1, 2, 3, 4, 5]

| start | end | array |
|---|---|---|
| 0 | 4 | [5, 2, 3, 4, 1] |
| 1 | 3 | [5, 4, 3, 2, 1] |
| 2 | 2 | 2 < 2 (false)

## Approach & Efficiency ##

***

Time complexity should be O(n) since the algorithm interates through the array halfway (n/2 swaps).

Space complexity should be also O(n) since the array is mutated in place and no additional space is used in the array.


## Solution ##
![reverse-array.js](./reverse-array.js)

## Testing ##
![reverse-array.test.js](./__tests__/reverse-array.test.js)