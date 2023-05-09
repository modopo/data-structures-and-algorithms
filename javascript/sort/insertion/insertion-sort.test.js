const insertionSort = require('./insertion-sort');

describe('Testing insertion sort', () => {
  test('Unsorted array test', () => {
    expect(insertionSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42]);
  })

  test('Reverse-sorted array test', () => {
    expect(insertionSort([20, 18, 12, 8, 5, -2])).toEqual([-2, 5, 8, 12, 18, 20]);
  })

  test('few unique array test', () => {
    expect(insertionSort([5, 12, 7, 5, 5, 7])).toEqual([5, 5, 5, 7, 7, 12]);
  })

  test('nearly-sorted array test', () => {
    expect(insertionSort([2, 3, 5, 7, 13, 11])).toEqual([2, 3, 5, 7, 11, 13]);
  })
})
