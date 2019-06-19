const UTIL = require("./lib/util");
const CONTENT = require("./content");
const GET_REMOTE = require('./lib/getRemoteContent.js');
const GET_TOKEN  = require('./lib/getToken.js');
const printer = require('./lib/printer.js');
// GetContent
exports.function = function (searchTerm) {
  //You can replace with a call to a web api - make sure you map api response to content model
   var content = CONTENT
   var result = GET_REMOTE.getTopRatedMovies();


  printer.printThis(result);
  // List of movie objects
  var movies = []
  // The movie object
  var tempMovie = {}

  result.results.forEach(function(element) {
    // Add each movie to the list of movies.
    tempMovie = {
      id: element.id,
      title: element.title,
      rating: element.vote_average,
      vote_count: element.vote_count,
      image: 'http://image.tmdb.org/t/p/300//' + element.poster_path,
      overview: element.overview,
      release: element.release_date
    }
    movies.push(tempMovie);
});
    // Add a random dad image
    //var dadImages = ['images/dad1.png', 'images/dad2.png', 'images/dad3.png'];
    //var image = dadImages[Math.floor(dadImages.length * Math.random())]
   return (movies);

    //pick a random content
    if (content.length) {
      var index = Math.floor(content.length * Math.random())
      chosenContent = content[index]
    }
  }


