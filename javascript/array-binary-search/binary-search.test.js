'use strict'

const binarySearch = require('./binary-search')

describe('Testing a sorted array with value inside', () => {
  test('Should return an index of value', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 4))
      .toEqual(3);
  });
});

describe('Testing a sorted array with value not inside', () => {
  test('Should return an array with 1000 in the middle of array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 10))
      .toEqual(-1);
  });
});

describe('Testing an empty array', () => {
  test('Should return -1', () => {
    expect(binarySearch([], 1000)).toEqual(-1);
  });
});