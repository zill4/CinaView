const UTIL = require("./lib/util");
const CONTENT = require("./content");
const GET_REMOTE = require('./lib/getRemoteContent.js');
const GET_TOKEN  = require('./lib/getToken.js');
const printer = require('./lib/printer.js');
// GetContent
exports.function = function (id) {
  //You can replace with a call to a web api - make sure you map api response to content model
  var content = CONTENT
  var result = GET_REMOTE.getMovieDetails(id);
  var personResult = GET_REMOTE.getCredits(id);
  // List of movie objects
  // The movie object
  var tempMovie = {}
  var castM = []
  // The movie object
  var cast = {}
  
    // Add each movie to the list of movies.
    personResult.cast.forEach(function(element) {
    // Add each movie to the list of movies.
    cast = {
      id: element.id,
      name: element.name,
      character: element.character,
      image: 'http://image.tmdb.org/t/p/w400//' + element.profile_path,
    }
    castM.push(cast);
});
    tempMovie = {
      id: result.id,
      title: result.title,
      rating: result.vote_average,
      vote_count: result.vote_count,
      image: 'http://image.tmdb.org/t/p/w400//' + result.poster_path,
      overview: result.overview,
      release: result.release_date,
      person: castM
    }
   return (tempMovie);
  }


