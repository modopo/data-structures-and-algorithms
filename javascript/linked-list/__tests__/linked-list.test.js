'use strict';

// Require our linked list implementation
const { LinkedList, ziplists } = require('../index');

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
  });
});

describe("Tests for zipping two linked list", () => {
  let list1 = new LinkedList;
  let list2 = new LinkedList;
  list1.append(1);
  list1.append(3);
  list1.append(5);
  list2.append(2);
  list2.append(4);
  list2.append(6);

  test('Return alternating linked list from two list', () => {
    let result = ziplists(list1, list2);

    expect(result.traverse()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL')
  })

  test('Return alternating linked list with list1 is shorter than list2', () => {
    list1.head = null;
    list2.head = null;
    list1.append(1);
    list1.append(3);
    list2.append(2);
    list2.append(4);
    list2.append(5);
    let result = ziplists(list1, list2)

    expect(result.traverse()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> NULL')
  });

  test('Return alternating linked list with list1 longer than list2', () => {
    list1.head = null;
    list2.head = null;
    list1.append(1);
    list1.append(3);
    list1.append(5);
    list2.append(2);
    list2.append(4);
    let result = ziplists(list1, list2)

    expect(result.traverse()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> NULL')
  })
});