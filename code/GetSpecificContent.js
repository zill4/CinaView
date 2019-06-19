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
  // List of movie objects
  // The movie object
  var tempMovie = {}

    // Add each movie to the list of movies.
    tempMovie = {
      id: result.id,
      title: result.title,
      rating: result.vote_average,
      vote_count: result.vote_count,
      image: 'http://image.tmdb.org/t/p/w400//' + result.poster_path,
      overview: result.overview,
      release: result.release_date
    }
   return (tempMovie);
  }


