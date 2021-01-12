var fs = require('fs');
var keys = require('./../api.js')
var apiKey = keys.keys.api_key,
  apiSecret = keys.keys.secret,
  sailthru = require('sailthru-client').createSailthruClient(apiKey, apiSecret);
var json = require('./../content-library.json');

var arr = json;

// console.log(arr[0].tags);

// var inventory;
// arr.forEach(function(val, i) {
// console.log(`
//   index: ${i}
//   vars: ${val}
//   `);
// });


var data = ``;
arr.forEach(function(val, i) {
  var obj;
  obj = `{"url": "${val.url}", "tags": [] }\n`
  data = data + obj;

});

// console.log(data);

fs.writeFile('../content_update.txt', data, function(err, data) {
  if (err) throw new Error(err);
  console.log('successfully made file');
});
