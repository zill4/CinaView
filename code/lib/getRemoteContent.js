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
  var response = http.getUrl('https://api.themoviedb.org/3/search/movie?api_key=&language=en-US&query=' + name + '&page=1&include_adult=false', {
    format: 'json',
  });
  
  return response;
}
  function getMovieDetails(name) {
  var response = http.getUrl('https://api.themoviedb.org/3/movie/' + name + '?language=en-US&api_key=', {
    format: 'json',
  });
  return response;
}

  function getCredits(name) {
  var response = http.getUrl('https://api.themoviedb.org/3/movie/'+ name + '/credits?api_key=', {
    format: 'json',
  });
  return response;
}
  function getPerson(name) {
  var response = http.getUrl('https://api.themoviedb.org/3/person/' + name + '?language=en-US&api_key=', {
    format: 'json',
  });
  return(response)
  }
  function getMovieByActor(name) {
  var response = http.getUrl('https://api.themoviedb.org/3/person/' + name + '/movie_credits?language=en-US&api_key=', {
    format: 'json',
  });
  return(response)
  }
  function getPopularMovies() {
  var response = http.getUrl('https://api.themoviedb.org/3/movie/popular?api_key=&language=en-US&page=1', {
    format: 'json',
  });
  return(response)
  }

  function getTopRatedMovies() {
  var response = http.getUrl('https://api.themoviedb.org/3/movie/top_rated?api_key=&language=en-US&page=1', {
    format: 'json',
  });
  return(response)
  }
 function getLatestMovies() {
  var response = http.getUrl('https://api.themoviedb.org/3/movie/latest?api_key=&language=en-US&adult=false', {
    format: 'json',
  });
  return(response)
  }

 function getUpcomingMovies() {
  var response = http.getUrl('https://api.themoviedb.org/3/movie/upcoming?api_key=&language=en-US&page=1', {
    format: 'json',
  });
  return(response)
  }