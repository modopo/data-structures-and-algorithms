class HashTable {
  constructor(size) {
    this.size = size;
    this.table = {};
  }

  // hash function to create hash code 
  hashKey(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i) * (i + 1);
    }

    return (hash * 599) % this.size;
  }

  // set method to add key value pair in hash table
  set(key, value) {
    let index = this.hashKey(key);

    if (!this.table.hasOwnProperty(index))
      this.table[index] = {};

    this.table[index][key] = value;
  }

  // get method to fetch value using key
  get(key) {
    let index = this.hashKey(key);

    if (!this.table.hasOwnProperty(index))
      return undefined;

    return this.table[index][key];
  }

  // has method to check if key already exist
  has(key) {
    let index = this.hashKey(key);

    if (!this.table.hasOwnProperty(index))
      return false;

    return this.table[index].hasOwnProperty(key);
  }

  // keys method to return all the keys of hash table
  keys() {
    let keys = [];

    for (let index in this.table) {
      for (let key in this.table[index]) {
        keys.push(key);
      }
    }

    return keys;
  }
}

module.exports = HashTable;