var fs = require('fs');
var keys = require('./api.js')
var apiKey = keys.keys.api_key,
  apiSecret = keys.keys.secret,
  sailthru = require('sailthru-client').createSailthruClient(apiKey, apiSecret);

sailthru.apiGet('content', {
  "items": 20000
}, function(err, response) {
  // handle response
  var data = JSON.stringify(response.content);
  console.log(typeof data);

  fs.writeFile('content-library.json', data, function(err, data) {
    if (err) throw new Error(err);
    console.log('successfully made file');
  });
});