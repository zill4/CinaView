exports.getMovies = getMovies

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