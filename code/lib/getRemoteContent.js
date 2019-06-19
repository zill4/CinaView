exports.getMovies = getMovies
exports.getMovieDetails = getMovieDetails
exports.getCredits = getCredits
exports.getPerson = getPerson
exports.getMovieByActor = getMovieByActor
exports.getPopularMovies = getPopularMovies
exports.getTopRatedMovies = getTopRatedMovies
exports.getLatestMovies = getLatestMovies
exports.getUpcomingMovies = getUpcomingMovies

var http = require('http')
var console = require('console')
function getMovies(name) {
  // Simple example of calling an API for a fact/joke
  // This is a free and open web service - please do not abuse it. See https://icanhazdadjoke.com/ for more information
  // Note Bixby HTTP API is asynchronous - no need for a promise or callback
  var response = http.getUrl('https://api.themoviedb.org/3/search/movie?api_key=d2da9e63fecca2ff58dbbf5cff2f4c51&language=en-US&query=' + name + '&page=1&include_adult=false', {
    format: 'json',
  });
  
  return response;
}
  function getMovieDetails(name) {
  // Simple example of calling an API for a fact/joke
  // This is a free and open web service - please do not abuse it. See https://icanhazdadjoke.com/ for more information
  // Note Bixby HTTP API is asynchronous - no need for a promise or callback
  var response = http.getUrl('https://api.themoviedb.org/3/movie/' + name + '?language=en-US&api_key=d2da9e63fecca2ff58dbbf5cff2f4c51', {
    format: 'json',
  });
  return response;
}

  function getCredits(name) {
  // Simple example of calling an API for a fact/joke
  // This is a free and open web service - please do not abuse it. See https://icanhazdadjoke.com/ for more information
  // Note Bixby HTTP API is asynchronous - no need for a promise or callback
  var response = http.getUrl('https://api.themoviedb.org/3/movie/'+ name + '/credits?api_key=d2da9e63fecca2ff58dbbf5cff2f4c51', {
    format: 'json',
  });
  return response;
}
  function getPerson(name) {
  // Simple example of calling an API for a fact/joke
  // This is a free and open web service - please do not abuse it. See https://icanhazdadjoke.com/ for more information
  // Note Bixby HTTP API is asynchronous - no need for a promise or callback
  var response = http.getUrl('https://api.themoviedb.org/3/person/' + name + '?language=en-US&api_key=d2da9e63fecca2ff58dbbf5cff2f4c51', {
    format: 'json',
  });
  return(response)
  }
  function getMovieByActor(name) {
  // Simple example of calling an API for a fact/joke
  // This is a free and open web service - please do not abuse it. See https://icanhazdadjoke.com/ for more information
  // Note Bixby HTTP API is asynchronous - no need for a promise or callback
  var response = http.getUrl('https://api.themoviedb.org/3/person/' + name + '/movie_credits?language=en-US&api_key=d2da9e63fecca2ff58dbbf5cff2f4c51', {
    format: 'json',
  });
  return(response)
  }
  function getPopularMovies() {
  // Simple example of calling an API for a fact/joke
  // This is a free and open web service - please do not abuse it. See https://icanhazdadjoke.com/ for more information
  // Note Bixby HTTP API is asynchronous - no need for a promise or callback
  var response = http.getUrl('https://api.themoviedb.org/3/movie/popular?api_key=d2da9e63fecca2ff58dbbf5cff2f4c51&language=en-US&page=1', {
    format: 'json',
  });
  return(response)
  }

  function getTopRatedMovies() {
  // Simple example of calling an API for a fact/joke
  // This is a free and open web service - please do not abuse it. See https://icanhazdadjoke.com/ for more information
  // Note Bixby HTTP API is asynchronous - no need for a promise or callback
  var response = http.getUrl('https://api.themoviedb.org/3/movie/top_rated?api_key=d2da9e63fecca2ff58dbbf5cff2f4c51&language=en-US&page=1', {
    format: 'json',
  });
  return(response)
  }
 function getLatestMovies() {
  // Simple example of calling an API for a fact/joke
  // This is a free and open web service - please do not abuse it. See https://icanhazdadjoke.com/ for more information
  // Note Bixby HTTP API is asynchronous - no need for a promise or callback
  var response = http.getUrl('https://api.themoviedb.org/3/movie/latest?api_key=d2da9e63fecca2ff58dbbf5cff2f4c51&language=en-US&adult=false', {
    format: 'json',
  });
  return(response)
  }

 function getUpcomingMovies() {
  // Simple example of calling an API for a fact/joke
  // This is a free and open web service - please do not abuse it. See https://icanhazdadjoke.com/ for more information
  // Note Bixby HTTP API is asynchronous - no need for a promise or callback
  var response = http.getUrl('https://api.themoviedb.org/3/movie/upcoming?api_key=d2da9e63fecca2ff58dbbf5cff2f4c51&language=en-US&page=1', {
    format: 'json',
  });
  return(response)
  }