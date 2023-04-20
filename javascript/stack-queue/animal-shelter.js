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
    if (!this.front) {
      return null;
    }

    let removed = null;

    if (this.front.value.species === pref) {
      removed = this.front;
      this.front = this.front.next;
      if (this.front === null) {
        this.rear === null;
      }
      return removed.value.species;
    }

    let current = this.front;

    while (current.next) {
      if (current.next.value.species === pref) {
        removed = current.next;
        current.next = current.next.next;
        return removed.value.species;
      }
      current = current.next;
    }

    return removed;
  }
}

module.exports = {
  Animal,
  AnimalShelter
}