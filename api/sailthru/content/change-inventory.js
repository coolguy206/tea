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


var data = ``;
arr.forEach(function(val, i) {
  var inventory = ``;
  var obj;
  if (val.vars !== undefined) {
    if (val.vars.inventory !== undefined) {
      if (val.vars.inventory !== "") {
        inventory = Number(val.vars.inventory);
      } else if (val.vars.inventory == NaN) {
        inventory = val.vars.inventory;
      } else {
        inventory = 0;
        obj = `{"url": "${val.url}", "inventory": ${inventory}, "spider": 1}\n`
        data = data + obj;
      }
    }
  }
});

// console.log(data);

fs.writeFile('../content_update.txt', data, function(err, data) {
  if (err) throw new Error(err);
  console.log('successfully made file');
});

/* udpate content library inventory */
// var count = 0;
//
// var loop = function(arr, count) {
//   var length = arr.length;
//
//   var inventory;
//
//   if (arr[count].vars !== undefined) {
//     if (arr[count].vars.inventory !== undefined) {
//       if (arr[count].vars.inventory !== "") {
//         inventory = Number(arr[count].vars.inventory);
//       } else if (arr[count].vars.inventory == NaN) {
//         inventory = arr[count].vars.inventory;
//       } else {
//         inventory = 0;
//       }
//       console.log(`inventory: ${inventory}`);
//
//       sailthru.apiPost('content', {
//         "url": arr[count].url,
//         "inventory": inventory,
//         "spider": 1
//       }, function(err, response) {
//         // handle response
//         console.log(response);
//
//         if (count < length) {
//           console.log(`
//             not done...
//             count: ${count}
//             length: ${length};
//             `);
//           count = count + 1;
//           loop(arr, count);
//         } else {
//           console.log(`
//             all done!!!
//             count: ${count}
//             length: ${length};
//             `)
//         }
//       });
//
//     }
//   }

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

// }

// loop(arr, count);