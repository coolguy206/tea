var keys = require('./../api.js')
var apiKey = keys.keys.api_key,
  apiSecret = keys.keys.secret,
  sailthru = require('sailthru-client').createSailthruClient(apiKey, apiSecret);

sailthru.apiPost('job', {
  "job": "content_update", "file": "content_update.txt"
}, function(err, response) {
  // handle response
  console.log(response);
});

// sailthru.apiPost('content', {
//   "url": "https://www.teashowroom.com/product/20m82307/hi-lo-tank-dress.html", "spider": 1
// }, function(err, response) {
//   // handle response
//   console.log(response);
// });
