var fs = require('fs');
var keys = require('./../api.js')
var apiKey = keys.keys.api_key,
  apiSecret = keys.keys.secret,
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

const date = "1977-08-14";
var data = ``;
arr.forEach(function(val, i) {
  //teashowroom
  // if (val.url.indexOf('teashowroom') !== -1) {
  //   // console.log(val.url);
  //   var obj = `{"url": "${val.url}", "date": "${date}", "expire_date": "${date}"}\n`;
  //   data = data + obj;
  // }
  // if (val.url.indexOf('sandbox.') !== -1) {
  //   // console.log(val.url);
  //   var obj = `{"url": "${val.url}", "date": "${date}", "expire_date": "${date}"}\n`;
  //   data = data + obj;
  // }

  console.log(val);
  //console.log(val.date, val.tags)
  var tagsLength = val.tags;
  tagsLength = tagsLength.length;
  //console.log(val.date, tagsLength, val.tags);
  // if (tagsLength == 0) {
  //   var obj = `{"url": "${val.url}", "date": "${date}", "expire_date": "${date}"}\n`;
  //   data = data + obj;
  // }


});

// console.log(data);

// fs.writeFile('../content_update.txt', data, function(err, data) {
//   if (err) throw new Error(err);
//   console.log('successfully made file');
// });