'use strict';

const movies = require('./movies');
const mergeSort = require('../merge/merge-sort');

function compare(a, b) {
  if (a === b) {
    return 0;
  } else if (a > b) {
    return 1;
  } else if (b > a) {
    return -1
  }
}

function sortByYear(movieArr) {
  for (let i = 0; i < movieArr.length; i++) {
    for (let j = i + 1; j < movieArr.length; j++) {
      if (movieArr[j]['year'] < movieArr[i]['year']) {
        const temp = movieArr[i];
        movieArr[i] = movieArr[j];
        movieArr[j] = temp;
      }
    }
  }
  return movieArr;
}

function sortByTitle(movieArr) {
  for (let i = 0; i < movieArr.length; i++) {
    for (let j = 1 + 1; j < movieArr.length; j++) {
      let title1 = movieArr[i]['title'].split(' ');
      let title2 = movieArr[j]['title'].split(' ');

      if (title1[0].includes)
    }
  }
}