var fs = require('fs');
var keys = require('./../api.js')
var apiKey = keys.api_key,
  apiSecret = keys.secret,
  sailthru = require('sailthru-client').createSailthruClient(apiKey, apiSecret);
var json = require('./../content-library.json');

var arr = json;

// console.log(typeof arr[0].vars.inventory);

// var inventory;
// arr.forEach(function(val, i) {
// console.log(`
//   index: ${i}
//   vars: ${val.vars}
//   `);
// });


var data = ``;
arr.forEach(function(val, i) {
  var obj;
  if (val.vars !== undefined) {
    // console.log(val.vars.inventory);
    if (val.vars.sku !== undefined) {
      obj = `{"url": "${val.url}", "keys": {"sku": "${val.vars.sku}"} }\n`
      data = data + obj;

    }
  }
});

// console.log(data);

fs.writeFile('../content_update.txt', data, function(err, data) {
  if (err) throw new Error(err);
  console.log('successfully made file');
});