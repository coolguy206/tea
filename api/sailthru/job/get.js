var keys = require('./../api.js')
var apiKey = keys.keys.api_key,
  apiSecret = keys.keys.secret,
  sailthru = require('sailthru-client').createSailthruClient(apiKey, apiSecret);

//change job_id
var job_id = `5f45b3fe5d925c72a70fddf8`;

//check on job getJobStatus
sailthru.getJobStatus(job_id, function(err, response) {
  // handle response
  console.log(response);
});