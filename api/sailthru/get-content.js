var keys = require('./api.js')
var request = require('request');
var fs = require('fs');

// console.log(keys);

var options = {
  'method': 'GET',
  'url': `https://api.sailthru.com/content?api_key=${keys.keys.api_key}&sig=706482ff29dbf2e4f21fca98c3c5d1aa&format=json&json={\n"items": 20000\n}`,
  'headers': {}
};
request(options, function(error, response) {
  if (error) throw new Error(error);
  // console.log(response.body);
  // console.log(typeof response.body);

  //make file
  fs.writeFile('content-library.json', response.body, function(err, data) {
    if (err) throw new Error(err);
    console.log('successfully made file');
  })
});