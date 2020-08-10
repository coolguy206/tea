var fs = require('fs');
var keys = require('./../api.js')
var request = require('request');
var md5 = require('md5');
var content = require('./../content-library.json');

var arr = [];

//GET CONTENT TO CHANGE START AND EXPIRATION DATE
content.content.forEach(function(val, i) {
  // console.log(val);

  //******** CHANGE THIS TO WHAT YOU WANT DELETED ********
  if (val.url.indexOf('teashowroom') !== -1) {
    // console.log(val.url);
    var date = "1977-08-14";
    var obj = `{"url": "${val.url}", "date": "${date}", "expire_date": "${date}"}`;
    arr.push(obj);
  }

});

// console.log(arr);

// MAKE AJAX CALL TO CHANGE START AND EXPIRATION DATE
var count = 0;
var arrLength = arr.length;
var contentPost = function(arr, count, arrLength) {
  console.log(`count: ${count}, arrLength: ${arrLength}`);
  if (count < arrLength) {
    var json = arr[count];
    var str = `${keys.keys.secret}${keys.keys.api_key}json${json}`;
    var sig = md5(str);
    // var encode = encodeURIComponent(elem)
    var options = {
      'method': 'POST',
      'url': 'https://api.sailthru.com/content',
      'headers': {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: {
        'api_key': keys.keys.api_key,
        'sig': sig,
        'format': 'json',
        'json': arr[count]
      }
    };
    console.log(options);
    request(options, function(error, response) {
      if (error) throw new Error(error);
      console.log(response.body);

      count = count + 1;
      contentPost(arr, count, arrLength);
    });
  } else {
    console.log(`all done! count: ${count}, arrLength: ${arrLength} `);
  }

}

contentPost(arr, count, arrLength);