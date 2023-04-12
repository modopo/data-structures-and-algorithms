'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

const list = new LinkedList;

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  test('Make new linked list', () => {
    let newList = new LinkedList;
    expect(list.head).toEqual(null);
  });

  test('Adding a single node to empty linked list', () => {
    list.append(4);
    expect(list.current.value).toEqual(4);
    expect(list.head.value).toEqual(4);
  });

  test('Adding to multiple nodes to the end', () => {
    list.append(3);
    list.append(2);
    expect(list.current.value).toEqual(2);
  });

  test('Head is pointing to the first node', () => {
    expect(list.head.value).toEqual(4);
  });

  test('Includes the value in the linked list', () => {
    expect(list.includes(3)).toEqual(true);
  });

  test('The value not included in the linked list', () => {
    expect(list.includes(10)).toEqual(false);
  });

  test('Logging all the value with ->', () => {
    expect(list.traverse()).toEqual('{ 4 } -> { 3 } -> { 2 } -> NULL')
  })  
});

describe("Tests for inserting", () => {
    
  test('Inserting before a value', () => {
    list.insertBefore(3, 1000);

    expect(list.traverse()).toEqual('{ 4 } -> { 1000 } -> { 3 } -> { 2 } -> NULL')
  })

  test('Insering after a value', () => {
    list.insertAfter(1000, 50);

    expect(list.traverse()).toEqual('{ 4 } -> { 1000 } -> { 50 } -> { 3 } -> { 2 } -> NULL')
  })
})

describe("Tests for kth from the end", () => {
  test('Return the value kth from the end', () => {
    let result = list.kthFromEnd(2);

    expect(result).toEqual(50);
  });

  test('Return the value kth from the end, where k is greater than the length of the list', () => {

    expect(() => list.kthFromEnd(10)).toThrow(TypeError);
  });

  test('Return the value kth from the end, where kth is the length of the list', () => {
    let result = list.kthFromEnd(4);

    expect(result).toEqual(4);
  });

  test('Return the value kth from the end, when list is length of 1', () => {
    let anotherList = new LinkedList;

    anotherList.append(1);
    let result = anotherList.kthFromEnd(0);

    expect(result).toEqual(1);
  })
})