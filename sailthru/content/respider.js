var json = require('./../content-library.json');
var fs = require('fs');

// console.log(json);
var data = ``;

json.forEach(function(val, i) {
  // console.log(val.inventory);
  var obj = `{ "url": "${val.url}", "spider": 1 }\n`;
  data = data + obj;
});

// console.log(data);

fs.writeFile('../content_update.txt', data, function(err, data) {
  if (err) throw new Error(err);
  console.log('successfully made file');
});