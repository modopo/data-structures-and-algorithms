'use strict'

const validateBrackets = require('./validate-brackets');

describe('Testing validate bracket function', () => {
  test('Testing basic single completed brackets', () => {
    expect(validateBrackets('[]')).toEqual(true);
    expect(validateBrackets('{}')).toEqual(true);
    expect(validateBrackets('()')).toEqual(true);
  });

  test('Testing nested brackets', () => {
    expect(validateBrackets('[[[]]]')).toEqual(true);
    expect(validateBrackets('[{()}]')).toEqual(true);
    expect(validateBrackets('([{([[[]]])}])')).toEqual(true);
  })

  test('Testing incomplete nested brackets', () => {
    expect(validateBrackets('[{{{)}}]')).toEqual(false);
    expect(validateBrackets('[')).toEqual(false);
    expect(validateBrackets('((()))]')).toEqual(false);
  })

  test('Testing with extra chars with completed bracket pairs', () => {
    expect(validateBrackets('[testing]')).toEqual(true);
    expect(validateBrackets('[adf(dferg[d{fg}])]')).toEqual(true);
    expect(validateBrackets('{}[[]]test[()][]{}')).toEqual(true);
  })
});