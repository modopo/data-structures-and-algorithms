'use strict';

function leftJoin(synonyms, antonyms) {
  const result = {};

  for (let key in synonyms) {
    result[key] = [synonyms[key], antonyms[key] || null];
  }

  return result;
}