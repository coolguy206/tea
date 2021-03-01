var keys = require('./../api.js')
var apiKey = keys.keys.api_key,
  apiSecret = keys.keys.secret,
  sailthru = require('sailthru-client').createSailthruClient(apiKey, apiSecret);

//change job_id
var job_id = `6010a8a51de1664b8c20b667`;

//check on job getJobStatus
sailthru.getJobStatus(job_id, function(err, response) {
  // handle response
  console.log(response);
});