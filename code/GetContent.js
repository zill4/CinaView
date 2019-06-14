const UTIL = require("./lib/util");
const CONTENT = require("./content");
const GET_REMOTE = require('./lib/getRemoteContent.js');
const GET_TOKEN  = require('./lib/getToken.js');
const printer = require('./lib/printer.js');
// GetContent
exports.function = function (searchTerm) {
  //You can replace with a call to a web api - make sure you map api response to content model
  var content = CONTENT
    var movies = GET_REMOTE.getMovies(searchTerm);
    printer.printThis(movies);
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


