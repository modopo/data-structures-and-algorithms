function Movie(title, year, genres) {
  this.title = title;
  this.year = year;
  this.genres = genres;
}

// Create an array of 10 Movie objects
const movies = [
  new Movie("The Godfather", 1972, ["Crime", "Drama"]),
  new Movie("The Shawshank Redemption", 1994, ["Drama"]),
  new Movie("The Dark Knight", 2008, ["Action", "Crime", "Drama"]),
  new Movie("Pulp Fiction", 1994, ["Crime", "Drama"]),
  new Movie("The Lord of the Rings, The Fellowship of the Ring", 2001, ["Action", "Adventure", "Drama"]),
  new Movie("Forrest Gump", 1994, ["Drama", "Romance"]),
  new Movie("Inception", 2010, ["Action", "Adventure", "Sci-Fi"]),
  new Movie("The Matrix", 1999, ["Action", "Sci-Fi"]),
  new Movie("Star Wars: Episode IV, A New Hope", 1977, ["Action", "Adventure", "Fantasy"]),
  new Movie("Goodfellas", 1990, ["Crime", "Drama"]),
];

module.exports = movies;