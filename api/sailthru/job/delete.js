var keys = require('./../api.js')
var apiKey = keys.keys.api_key,
  apiSecret = keys.keys.secret,
  sailthru = require('sailthru-client').createSailthruClient(apiKey, apiSecret);

var options = {
  "job": "delete_content",
  "type": "expired",
  "start_date": "1977-08-14",
  "end_date": "1977-08-14"
}
sailthru.apiPost('job', options, function(err, response) {
  // handle response
  console.log(response);
});