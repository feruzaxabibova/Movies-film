var elMoviesList = $_('.movies');
var elMoviesTemplate = $_('#movies-card-template').content;

elMoviesList.innerHTML = '';

var renderMovies = function (movie) {
  var elNewMovie = elMoviesTemplate.cloneNode(true);

  elNewMovie.querySelector('.js-title').textContent = movie.Title;
  elNewMovie.querySelector('.js-year').textContent = `Year: ${movie.movie_year}`;
  elNewMovie.querySelector('.js-categories').textContent = movie.Categories.split('|').join(', ');
  elNewMovie.querySelector('.js-link').textContent = `Watch trailer`;
  elNewMovie.querySelector('.js-link').href = `https://www.youtube.com/watch?v = ${movie.ytid}`;

  return elNewMovie;
};

movies.forEach(function (movie) {
  elMoviesList.appendChild(renderMovies(movie));
});