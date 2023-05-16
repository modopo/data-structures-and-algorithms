const repeatedWords = require("./repeated-word")

describe('Tests for repeated word function using hashtables', () =>{
  test('Basic text test', () => {
    let sample = "Once upon a time, there was a brave princess who...";

    expect(repeatedWords(sample)).toEqual('a');
  })
})