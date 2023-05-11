const movies = require('./movies');
const { sortByTitle, sortByYear, compare } = require('./comparison');

describe('Sorters', () => {
  it('can sort movies by year', () => {
    const result = sortByTitle(movies);
    console.log(result);
    expect(result.map((m) => m.title)).toEqual([
      'The Dark Knight',
      'Forrest Gump',
      'The Godfather',
      'The Goodfellas',
      'Inception',
      'The Lord of the Rings: The Fellowship of the Ring',
      'The Matrix',
      'Pulp Fiction',
      'The Shawshank Redemption',
      'Star Wars: Episode IV - A New Hope'
    ]);
  });

  it('can sort movies by title', () => {
    const movies = sortByYear(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      'Beetlejuice',
      'City of God',
      'The Cotton Club',
      'Crocodile Dundee',
      'The Intouchables',
      'Memento',
      'Ratatouille',
      'The Shawshank Redemption',
      'Stardust',
      'Valkyrie',
    ]);
  });
});