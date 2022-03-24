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

  // var url = val.url;
  //
  // if (url.indexOf('https://www.teacollection.com/product/20m13306/embroidered-tassel-trim-dress.html') !== -1) {
  //   console.log(`
  //     url: ${val.url}
  //     inventory: ${val.vars.inventory}
  //     `);
  // }

  // console.log(Number(val.vars.inventory));

  var inventory = 0;
  var obj;

  if (val.vars !== undefined) {
    // console.log(val.vars.inventory);
    if (val.vars.inventory !== undefined) {

      if (val.vars.inventory !== "") {
        inventory = Number(val.vars.inventory);
        obj = `{"url": "${val.url}", "inventory": ${inventory} }\n`
        data = data + obj;
      } else {
        obj = `{"url": "${val.url}", "inventory": ${inventory} }\n`
        data = data + obj;
      }

    } else {
      obj = `{"url": "${val.url}", "inventory": ${inventory} }\n`
      data = data + obj;
    }
  } else {
    obj = `{"url": "${val.url}", "inventory": ${inventory} }\n`
    data = data + obj;
  }
});

// console.log(arr.length);
// console.log(data);

fs.writeFile('../content_update.txt', data, function(err, data) {
  if (err) throw new Error(err);
  console.log('successfully made file');
});