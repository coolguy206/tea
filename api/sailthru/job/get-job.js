var keys = require('./../api.js')
var request = require('request');
var md5 = require('md5');

// ****************** CHANGE THE JOB_ID ******************
var job_id = ``;
var json = `{"job_id": ${job_id}}`;
var str = `${keys.keys.secret}${keys.keys.api_key}json${json}`;
var sig = md5(str);
var options = {
  'method': 'GET',
  'url': `https://api.sailthru.com/job?api_key=${keys.keys.api_key}&sig=${sig}&format=json&json=${json}`,
  'headers': {},
  formData: {}
};
request(options, function(error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});