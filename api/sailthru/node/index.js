var keys = require('./../api.js')
var apiKey = keys.keys.api_key,
  apiSecret = keys.keys.secret,
  sailthru = require('sailthru-client').createSailthruClient(apiKey, apiSecret);
var json = require('./../content-library.json');

// sailthru.apiPost('job', {
//   "job": "content_update", "file": "content_update.txt"
// }, function(err, response) {
//   // handle response
//   console.log(response);
// });


var arr = json.content;

// console.log(typeof arr[0].vars.inventory);

// var inventory;
// arr.forEach(function(val, i) {
// console.log(`
//   index: ${i}
//   vars: ${val.vars}
//   `);
// });


/* udpate content library inventory */
var count = 0;

var loop = function(arr, count) {
  var length = arr.length;

  var inventory;

  if (arr[count].vars !== undefined) {
    if (arr[count].vars.inventory !== undefined) {
      if (arr[count].vars.inventory !== "") {
        inventory = Number(arr[count].vars.inventory);
      } else if (arr[count].vars.inventory == NaN) {
        inventory = arr[count].vars.inventory;
      } else {
        inventory = 0;
      }
      console.log(`inventory: ${inventory}`);

      sailthru.apiPost('content', {
        "url": arr[count].url,
        "inventory": inventory,
        "spider": 1
      }, function(err, response) {
        // handle response
        console.log(response);

        if (count < length) {
          console.log(`
            not done...
            count: ${count}
            length: ${length};
            `);
          count = count + 1;
          loop(arr, count);
        } else {
          console.log(`
            all done!!!
            count: ${count}
            length: ${length};
            `)
        }
      });

    }
  }

  /* respider content library */
  // sailthru.apiPost('content', {
  //   "url": arr[count].url,
  //   "inventory": inventory,
  //   "spider": 1
  // }, function(err, response) {
  //   // handle response
  //   console.log(response);
  //   console.log(`
  //     not done...
  //     count: ${count}
  //     length: ${length};
  //     `);
  //   if (count < length) {
  //     count = count + 1;
  //     loop(arr, count);
  //   } else {
  //     console.log(`
  //       all done!!!
  //       count: ${count}
  //       length: ${length};
  //       `)
  //   }
  // });

}

loop(arr, count);