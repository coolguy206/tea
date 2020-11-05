var json = require('./json/output.json');
let converter = require('json-2-csv');
const fs = require('fs');

converter.json2csv(json, function(err, csv) {
  if (err) throw err;
  // console.log(csv);
  var fileName = `output/output.csv`;
  fs.writeFile(fileName, csv, 'utf8', function(err) {
    if (err) {
      console.log(`Some error occured - ${fileName} either not saved or corrupted file saved.`);
    } else {
      console.log(`successfully created ${fileName}`);
    }
  });
});