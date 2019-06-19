const UTIL = require("./lib/util");
const CONTENT = require("./content");
const GET_REMOTE = require('./lib/getRemoteContent.js');
const GET_TOKEN  = require('./lib/getToken.js');
const printer = require('./lib/printer.js');
// GetContent
exports.function = function (id) {
  //You can replace with a call to a web api - make sure you map api response to content model
  var content = CONTENT
  var result = GET_REMOTE.getMovieByActor(id);
  // List of movie objects
 var castM = []
  // The movie object
  var cast = {}
  
  result.cast.forEach(function(element) {
    // Add each movie to the list of movies.
    cast = {
      id: element.id,
      title: element.title,
      character: element.character,
      image: 'http://image.tmdb.org/t/p/w400//' + element.poster_path,
      overview: element.overview,
      rating: element.vote_average,
      vote_count: element.vote_count
    }
    castM.push(cast);
});
   return (castM);
}


