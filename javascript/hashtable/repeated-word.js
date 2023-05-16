const HashTable = require('./hashtable');

function repeatedWords(input) {
  const punctuations = ['.', ',', ';', ':', '!', '?', '-', '_', '"', "'", '(', ')', '[', ']', '{', '}', '/'];
  let arr = input.split(' ');
  const table = new HashTable(arr.length);
  let result = '';
 
  
  arr.some(word => {
    word = word.toLowerCase().split('').reduce((accum, char) => {
      if (!punctuations.includes(char)) {
        accum += char;
      }
      return accum
    }, '');

    if(table.get(word)) {
      result = word;
      return true;
    } else {
      table.set(word, true);
    }
  })

  return result;
}

module.exports = repeatedWords;