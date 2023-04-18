'use strict';

const PsuedoQueue = require('./pseudo-queue');

const psuedoQueue = new PsuedoQueue;

describe("Testing basic methods for pseudo-queue", () => {
  test("Enqueueing 1 into the pseudo-queue", () => {
    psuedoQueue.enqueue(1);

    expect(psuedoQueue.enqueueStack.peek().value).toEqual(1);
  });

  test("Enqueueing more into pseudo-queue", () => {
    psuedoQueue.enqueue(2);
    psuedoQueue.enqueue(3);
    psuedoQueue.enqueue(4);
    psuedoQueue.enqueue(5);

    expect(psuedoQueue.enqueueStack.peek().value).toEqual(5);
  });

  test("Dequeueing 1 off the pseudo-queue", () => {
    
    expect(psuedoQueue.dequeue().value).toEqual(1);
  })

  test("Dequeueing 2 off the pseudo-queue", () => {
    psuedoQueue.dequeue();
    console.log(psuedoQueue);
    expect(psuedoQueue.dequeue().value).toEqual(3);
  })

  test("Dequeue the entire pseudo-queue", () => {
    psuedoQueue.dequeue();
    psuedoQueue.dequeue();

    console.log(psuedoQueue);
    expect(psuedoQueue.enqueueStack.isEmtpy()).toEqual(true);
  });
});