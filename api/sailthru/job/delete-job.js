var keys = require('./../api.js')
var request = require('request');
var md5 = require('md5');

var json = `{"job": "delete_content", "type": "expired", "start_date": "1977-08-14", "end_date": "1977-08-14"}`;
var str = `${keys.keys.secret}${keys.keys.api_key}json${json}`;
var sig = md5(str);
var options = {
  'method': 'POST',
  'url': 'https://api.sailthru.com/job',
  'headers': {},
  formData: {
    'api_key': keys.keys.api_key,
    'sig': sig,
    'format': 'json',
    'json': json
  }
};
request(options, function(error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});