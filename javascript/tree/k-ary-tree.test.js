'use strict';

const kAryTree = require('./k-ary-tree');

let normal = new kAryTree(3);

normal.insert(3);
normal.insert(3);
normal.insert(5);
normal.insert(15);
normal.insert(3);
normal.insert(5);
normal.insert(15);
normal.insert(1);
normal.insert(2);
normal.insert(4);
normal.insert(15);
normal.insert(15);
normal.insert(15);

let single = new kAryTree(3);

single.insert(3);

let empty = new kAryTree(3);

describe('Testing kArynormal fizzBuzz function', () => {
  test('Fizzbuzz on normal k-ary tree', () => {
    expect(normal.fizzBuzz().traverse()).toEqual([
      'Fizz',
      'Fizz', 'Buzz', 'FizzBuzz',
      'Fizz', 'Buzz', 'FizzBuzz',
      '1', '2', '4',
      'FizzBuzz', 'FizzBuzz', 'FizzBuzz'
    ])
  })

  test('Fizzbuzz on single node k-ary tree', () => {
    expect(single.fizzBuzz().traverse()).toEqual(['Fizz'])
  })

  test('Fizzbuzz on empty k-ary tree', () => {
    expect(empty.fizzBuzz().traverse()).toEqual([]);
  })
});

