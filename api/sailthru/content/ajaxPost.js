var request = require('request');
var count = require('./count.js');

module.exports.ajaxPost = function(options) {

  request(options, function(error, response) {
    if (error) {
      throw new Error(error);
      return false;
    }
    console.log(response.body);
    count.count += 1;
    console.log(count.count);
  });

};

// exports.ajaxPost = ajaxPost;