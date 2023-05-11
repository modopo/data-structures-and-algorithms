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

      if (title1[0] === 'The' || title1[0] === 'A' || title1[0] === 'An') {
        title1.splice(0, 1)
      }
      if (title2[0] === 'The' || title2[0] === "A" || title2[0] === 'An') {
        title2.splice(0, 1);
      }

      // console.log('TITLE1', title1);
      // console.log('TITLE2', title2);
      if (title2 < title1) {
        const temp = movieArr[i];
        movieArr[i] = movieArr[j];
        movieArr[j] = temp;
      }
    }
  }
  return movieArr;
}

module.exports = {
  sortByYear,
  sortByTitle,
  compare
}