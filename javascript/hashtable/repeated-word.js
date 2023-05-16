const HashTable = require('./hashtable');

function repeatedWords(input) {
  let arr = input.split(' ');
  let result = '';
  const table = new HashTable(arr.length);
  
  arr.forEach(word => {
    if(table.get(word)) {
      result = word;
    } else {
      table.set(word, true);
    }
  })

  return result;
}

module.exports = repeatedWords;