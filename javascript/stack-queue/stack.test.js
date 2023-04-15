'use strict';

const Stack = require('./stack');

const stack = new Stack;

describe('Test basic stack methods', () => {
  test('Push one into stack', () => {
    stack.push(1);

    expect(stack.peek()).toEqual(1);
  })

  test('Push a few more into stack', () => {
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    expect(stack.peek()).toEqual(5);
  })

  test('Pop 1 off the stack', () => {
    expect(stack.pop()).toEqual(5);
  })

  test('Pop all off the stack', () => {
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.top).toEqual(null);
  });

  test('Peek into stack', () => {
    stack.push(1);

    expect(stack.peek()).toEqual(1);
  });

  test("Re-instantiate a stack", () => {
    stack.pop();
    stack.push(10);

    expect(stack.peek()).toEqual(10);
  })

  test("Pop an empty stack to throw error", () => {
    stack.pop();
    stack.pop();

    expect(stack.pop()).toEqual('TypeError');
  })
})