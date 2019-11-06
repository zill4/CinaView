const UTIL = require("./lib/util");
const CONTENT = require("./content");
const GET_REMOTE = require('./lib/getRemoteContent.js');
const GET_TOKEN  = require('./lib/getToken.js');
const printer = require('./lib/printer.js');
// GetContent
exports.function = function (id) {
  //You can replace with a call to a web api - make sure you map api response to content model
  var content = CONTENT
  var result = GET_REMOTE.getPerson(id);
  // List of movie objects
  // The movie object
  var person = {}

    // Add each movie to the list of movies.
    person = {
      id: result.id,
      name: result.name,
      birthday: result.birthday,
      deathday: result.deathday,
      image: 'http://image.tmdb.org/t/p/w400//' + result.profile_path,
      biography: result.biography   
    }
   return (person);
  }


