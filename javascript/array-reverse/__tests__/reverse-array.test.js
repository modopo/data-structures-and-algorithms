'use strict'

const reverseArray = require('../reverse-array')

describe('Testing reversing an odd length array', () => {
  test('Should return an array with the elements reversed', () => {
    expect(reverseArray([1, 2, 3, 4, 5, 6, 7]))
      .toEqual([1, 2, 3, 4, 5, 6, 7].reverse());
  });
});

describe('Testing reversing an even length array', () => {
  test('Should return an array with the elements reversed', () => {
    expect(reverseArray([1, 2, 3, 4, 5, 6]))
      .toEqual([1, 2, 3, 4, 5, 6].reverse());
  });
});

describe('Testing reversing an empty array', () => {
  test('Should return an array with the elements reversed', () => {
    expect(reverseArray([])).toEqual([].reverse());
  });
});

describe('Testing reversing an array with differnt types of elements', () => {
  test('Should return an array with the elements reversed', () => {
    expect(reverseArray([1, 2, 3, 'a', 5, 6, 7]))
      .toEqual([1, 2, 3, 'a', 5, 6, 7].reverse());
  });
});

