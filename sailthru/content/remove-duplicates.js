var fs = require('fs');
var keys = require('./../api.js')
var apiKey = keys.api_key,
  apiSecret = keys.secret,
  sailthru = require('sailthru-client').createSailthruClient(apiKey, apiSecret);
var json = require('./../content-library.json');

var arr = json;

// console.log(arr[0]);

arr.forEach((val, i) => {
  // console.log(val.sku);
  if (val.sku == undefined) {
    // console.log(val.url);
    var url = val.url;
    if (url.indexOf('#') == -1) {
      console.log(url);
    }
  }
});

// console.log(arr.length);
// console.log(data.length);

// fs.writeFile('../content_update.txt', data, function(err, data) {
//   if (err) throw new Error(err);
//   console.log('successfully made file');
// });