var fs = require('fs');
var keys = require('./api.js')
var apiKey = keys.api_key,
  apiSecret = keys.secret,
  sailthru = require('sailthru-client').createSailthruClient(apiKey, apiSecret);

sailthru.apiGet('content', {
  // "items": 18000
}, function(err, response) {
  // handle response
  // console.log(response);
  var data = JSON.stringify(response);
  console.log(data);

  fs.writeFile('content-library.json', data, function(err, data) {
    if (err) throw new Error(err);
    console.log('successfully made file');
  });
});