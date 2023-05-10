const mergeSort = require('./merge-sort');

describe('Testing insertion sort', () => {
  test('Unsorted array test', () => {

    console.log(mergeSort([8, 4, 23, 42, 16, 15]))
    expect(mergeSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42]);
  })

  test('Reverse-sorted array test', () => {
    expect(mergeSort([20, 18, 12, 8, 5, -2])).toEqual([-2, 5, 8, 12, 18, 20]);
  })

  test('few unique array test', () => {
    expect(mergeSort([5, 12, 7, 5, 5, 7])).toEqual([5, 5, 5, 7, 7, 12]);
  })

  test('nearly-sorted array test', () => {
    expect(mergeSort([2, 3, 5, 7, 13, 11])).toEqual([2, 3, 5, 7, 11, 13]);
  })
})
