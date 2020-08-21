var keys = require('./../api.js')
var apiKey = keys.keys.api_key,
  apiSecret = keys.keys.secret,
  sailthru = require('sailthru-client').createSailthruClient(apiKey, apiSecret);

sailthru.apiPost('job', {
  "job": "content_update",
  "file": "./../content_update.txt"
}, ['file'], function(err, response) {
  // handle response
  console.log(response);
});