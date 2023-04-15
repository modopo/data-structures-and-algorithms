'use strict';

const Queue = require('./queue');

const queue = new Queue;

describe("Testing basic methods for queues", () => {
  test("Enqueueing 1 into the queue", () => {
    queue.enqueue(1);

    expect(queue.rear.value).toEqual(1);
    expect(queue.front.value).toEqual(1);
  });

  test("Enqueueing more into queue", () => {
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);

    expect(queue.rear.value).toEqual(5);
    expect(queue.front.value).toEqual(1);
  });

  test("Dequeueing 1 off the queue", () => {
    
    expect(queue.dequeue()).toEqual(1);
  })

  test("Peek at queue", () => {
    expect(queue.peek()).toEqual(2)
  });

  test("Dequeue the entire queue", () => {
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    console.log(queue);
    expect(queue.isEmpty()).toEqual(true);
  });

  test('Instiatiate an empty queue', () => {
    queue.enqueue(1);

    expect(queue.peek()).toEqual(1);
  })

  test('Dequeue an empty queue to throw error', () => {
    queue.dequeue();
    console.log(queue);
    queue.dequeue();
    
    expect(queue.dequeue()).toEqual('TypeError');
  })
});