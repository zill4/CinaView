exports.getToken = getToken

var http = require('http')
var console = require('console');
function getToken() {
  // Simple example of calling an API for a fact/joke
  // This is a free and open web service - please do not abuse it. See https://icanhazdadjoke.com/ for more information
  // Note Bixby HTTP API is asynchronous - no need for a promise or callback
  var data = {
        "grant_type": "client_credentials",
        "client_id": "r9OlNMTOjKJHGGxu1cqTFZlo3O4eKhy0A66fnBzjemI3FHrTRQ",
        "client_secret": "smGlsk5SXOQOceGTV6S7LF4FAjCoEp4chbcT6vDv"
  }
  var response = http.postUrl('https://api.petfinder.com/v2/oauth2/token', data);
  var token = JSON.parse(response);
  return token.access_token;
}
