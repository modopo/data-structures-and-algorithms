'use strict'

const insertShift = require('./insert-shift')

describe('Testing an odd length array', () => {
  test('Should return an array with 1000 in the middle of array', () => {
    expect(insertShift([1, 2, 3], 1000))
      .toEqual([1, 2, 1000, 3]);
  });
});

describe('Testing an even length array', () => {
  test('Should return an array with 1000 in the middle of array', () => {
    expect(insertShift([1, 2, 3, 4], 1000))
      .toEqual([1, 2, 1000, 3, 4]);
  });
});

describe('Testing reversing an empty array', () => {
  test('Should return an array with 1000 in the middle of array', () => {
    expect(insertShift([], 1000)).toEqual([1000]);
  });
});