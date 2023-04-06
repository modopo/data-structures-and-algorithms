'use strict'

function binarySearch(arr, value) {
  let low = 0;
  let middle = 0;
  let high = arr.length - 1;
  let index = -1;

  while (low <= high) {
    middle = Math.floor((low + high) / 2);
    if (value === arr[middle]) {
      index = middle;
      high = -1;
    } else if (value > arr[middle]) {
      low = middle + 1;
    } else if (value < arr[middle]) {
      high = middle - 1;
    }
  }

  return index;
}

module.exports = binarySearch;