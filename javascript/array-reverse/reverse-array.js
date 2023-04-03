'use strict'

function reverseArray (arr) {
  for (let start = 0, end = arr.length - 1; start < end; start++, end--) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
  }

  return arr;
}

module.exports = reverseArray;