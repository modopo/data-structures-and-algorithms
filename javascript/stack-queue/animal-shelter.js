class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(animal) {
    const newNode = new Node(animal);
    
    if (this.front === null) {
      this.front = newNode;
      this.rear = newNode;
    }

    this.rear.next = newNode;
    this.rear = newNode;
  }

  dequeue(pref) {
    let current = this.front;

    if (pref !== 'cat' || pref !== 'dog') {
      return null;
    }

    if (this.front.value.name === pref) {
      current.next = this.front;
      return current.value;
    }

    while (current.next !== null) {
      if (current.next.value.name === pref) {
        current.next = current.next.next;
        return this.front.
      }
    }

  }  
}