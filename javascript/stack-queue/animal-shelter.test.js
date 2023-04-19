'use strict';

const { AnimalShelter, Animal } = require('./animal-shelter.js');

const shelter = new AnimalShelter;
const cat = new Animal('cat', 'cat1');
const cat2 = new Animal('cat', 'cat2');
const dog = new Animal('dog', 'dog1');
const dog2 = new Animal('dog', 'dog2');


describe("Testing animal shelter", () => {
  test("Enqueueing cat into shelter", () => {
    shelter.enqueue(cat);

    expect(shelter.rear.value.species).toEqual('cat');
  });

  test("Enqueueing more into shelter", () => {
    shelter.enqueue(cat2);
    shelter.enqueue(dog);
    shelter.enqueue(dog2);

    expect(shelter.rear.value.species).toEqual('dog');
  });

  test("Dequeue cat2", () => {
    let result = shelter.dequeue('cat');

    console.log(result);

    expect(shelter.rear.value.species).toEqual('dog');
    expect(shelter.front.value.name).toEqual('cat2');
    expect(result).toEqual('cat');
  });

  test("Dequeue all", () => {
    shelter.dequeue('dog');
    shelter.dequeue('cat');
    shelter.dequeue('dog');

    expect(shelter.front).toEqual(null);
  })
});