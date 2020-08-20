var keys = require('./../api.js')
var apiKey = keys.keys.api_key,
  apiSecret = keys.keys.secret,
  sailthru = require('sailthru-client').createSailthruClient(apiKey, apiSecret);
var json = require('./../content-library.json');

// sailthru.apiPost('job', {
//   "job": "content_update",
//   "file": "./content_update.txt"
// }, ['file'], function(err, response) {
//   // handle response
//   console.log(response);
// });

sailthru.getJobStatus('5f3ef6a08c598b1d48357033', function(err, response) {
  // handle response
  console.log(response);
});