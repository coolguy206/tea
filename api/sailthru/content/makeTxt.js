var fs = require('fs');

module.exports.makeTxt = function(json) {
  // write the file and make the AJAX request
  fs.writeFile('content-update.txt', json, function(err, data) {
    if (err) throw new Error(err);
    console.log('successfully made file');

  });
};