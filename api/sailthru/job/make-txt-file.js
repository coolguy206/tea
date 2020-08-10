var fs = require('fs');
var content = require('./../content-library.json');

var contentUpdate = ``;

//GET CONTENT TO CHANGE START AND EXPIRATION DATE
content.content.forEach(function(val, i) {
  // console.log(val);

  //create .txt file for content_update JOB
  var thisJSON = `{"url": "${val.url}", "spider": 1}\n`;
  contentUpdate = contentUpdate + thisJSON;

});

// console.log(contentUpdate);

//make file
var fileName = `../content_update.txt`;
fs.writeFile(fileName, contentUpdate, function(err, data) {
  if (err) throw new Error(err);
  console.log(`successfully made file ${fileName}`);

});