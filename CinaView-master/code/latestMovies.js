const UTIL = require("./lib/util");
const CONTENT = require("./content");
const GET_REMOTE = require('./lib/getRemoteContent.js');
const GET_TOKEN  = require('./lib/getToken.js');
const printer = require('./lib/printer.js');
// GetContent
exports.function = function (searchTerm) {
  //You can replace with a call to a web api - make sure you map api response to content model
   var content = CONTENT
   var result = GET_REMOTE.getLatestMovies();

  printer.printThis(result);
  // List of movie objects

  var tempMovie = {}

    tempMovie = {
      id: result.id,
      title: result.title,
      rating: result.vote_average,
      vote_count: result.vote_count,
      image: 'http://image.tmdb.org/t/p/w300//' + result.poster_path,
      overview: result.overview,
      release: result.release_date
    }
    // Add a random dad image
    //var dadImages = ['images/dad1.png', 'images/dad2.png', 'images/dad3.png'];
    //var image = dadImages[Math.floor(dadImages.length * Math.random())]
   return (tempMovie);

    //pick a random content
    if (content.length) {
      var index = Math.floor(content.length * Math.random())
      chosenContent = content[index]
    }
  }


