'use strict'

function insertShift (arr, value) {

  let front = [], back = [];
  let middle = Math.floor((arr.length - 1) / 2)

  for (let i = 0; i <= middle; i++) {
    front[i] = arr[i];
  }

  front[middle + 1] = value;

  for (let i = 0; i < arr.length - (middle + 1); i++) {
    back[i] = arr[i + middle + 1]
  }

  return [...front, ...back];

}

module.exports = insertShift;