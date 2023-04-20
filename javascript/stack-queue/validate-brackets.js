'use strict';

const Stack = require('./stack');

function validateBrackets(input) {
  let stack = new Stack();
  for (let char of input) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    }

    if (char === ')') {
      if (stack.pop() !== '(') {
        return false;
      }
    } else if (char === ']') {
      if (stack.pop() !== '[') {
        return false;
      }
    } else if (char === '}') {
      if (stack.pop() !== '{') {
        return false;
      }
    }
  }

  if (stack.top !== null) {
    return false;
  }

  return true;
}

module.exports = validateBrackets;