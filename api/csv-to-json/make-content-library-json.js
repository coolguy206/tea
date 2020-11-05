var json = require('./json/urls.json');
const writeJsonFile = require('write-json-file');

var arr = [];

json.forEach(function(val, i) {
  // console.log(val['Item URL'])
  var obj = {
    "url": val['Item URL']
  }
  arr.push(obj);
});

// console.log(arr);

writeJsonFile('json/content-library.json', arr);