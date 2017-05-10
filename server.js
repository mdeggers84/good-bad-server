var http = require('http');

var goodPORT = 7000;
var badPORT = 7500;

var goodArr = ['You have beautiful eyes!', 'You have a greate sense of humor!', 'I love your shirt, where did you get it?',
  'I like your dog...'];
var badArr = ['Umm... would you like a piece of chewing gum...your breath stinks.', 'You might want to get a new hair stylist...'];

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleGoodRequest(request, response) {
  var num = getRandomIntInclusive(0, goodArr.length - 1);
  response.end(goodArr[num]);
  // response.end('test1');
}

function handleBadRequest(request, response) {
  var num = getRandomIntInclusive(0, badArr.length - 1);
  response.end(badArr[num]);
  // response.end('test2');
}

var goodServer = http.createServer(handleGoodRequest);
var badServer = http.createServer(handleBadRequest);

goodServer.listen(goodPORT, function () {
  console.log('Server listening on port: ', goodPORT);
});

badServer.listen(badPORT, function () {
  console.log('Server listening on http://localhost:%s', badPORT);
});
