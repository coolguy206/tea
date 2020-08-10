var fs = require('fs');
var keys = require('./../api.js')
var request = require('request');
var md5 = require('md5');

var fileName = `content_update.txt`;
var filePath = `/c/Users/david.thanphilom/desktop/work/tea/api/sailthru/${fileName}`;
var json = `{"job": "content_update", "file": "${filePath}"}`;
var str = `${keys.keys.secret}${keys.keys.api_key}json${json}`;
// console.log(str);
var sig = md5(str);
// console.log(sig);
var options = {
  'method': 'POST',
  'url': 'https://api.sailthru.com/job',
  'headers': {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  formData: {
    'api_key': `${keys.keys.api_key}`,
    'sig': `${sig}`,
    'format': 'json',
    'json': `${json}`
  }
};
console.log(options);
request(options, function(error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});