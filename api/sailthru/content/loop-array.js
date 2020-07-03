var fs = require('fs');
var keys = require('./api.js')
var request = require('request');
var md5 = require('md5');
var content = require('./content-library.json');
var ajaxPost = require('./ajaxPost.js');
var makeTxt = require('./makeTxt.js');
// console.log(typeof ajaxPost.ajaxPost);

var showroomCount = 0;
var sandboxCount = 0;
var teaCount = 0;
var pdpCount = 0;

var json = "";
var arr = [];

//********************** INSTRUCTIONS ***************************
// 1.COMMENT OUT ONE SECTION AT A TIME AND RUN THE SCRIPT, SO YOU MIGHT RUN THE SCRIPT 3 TIMES
// 2.GO TO POSTMAN AND RUN SAILTHRU JOB DELETE
// 3.IN POSTMAN RUN SAILTHRU JOB GET TO SEE IF THE DELETE JOB FINISHED


//GET CONTENT TO CHANGE START AND EXPIRATION DATE
content.content.forEach(function(val, i) {
  // console.log(val.url);

  //teashowroom
  if (val.url.indexOf('teashowroom') !== -1) {
    // console.log(val.url);
    showroomCount += 1;
    var date = "1977-08-14";
    var obj = `{"url": "${val.url}", "date": "${date}", "expire_date": "${date}"}`;
    arr.push(obj);
  }

  //sandbox
  if (val.url.indexOf('sandbox.') !== -1) {
    // console.log(val.url);
    sandboxCount += 1;
    var date = "1977-08-14";
    // var obj = `{"url": "${val.url}", "date": "${date}", "expire_date": "${date}"}\n`;
    var obj = `{"url": "${val.url}", "date": "${date}", "expire_date": "${date}"}`;
    // console.log(obj);
    // json += obj;
    arr.push(obj);
  }

  //not pdp pages
  // if (val.url.indexOf('teacollection.com/product') == -1) {
  //   // console.log(val.url);
  //   teaCount += 1;
  //   var date = "1977-08-14";
  //   var obj = `{"url": "${val.url}", "date": "${date}", "expire_date": "${date}"}`;
  //   arr.push(obj);
  // }

  //everything else
  // if(val.url.indexOf('teacollection.com/product') !== -1){
  //   // console.log(val.url);
  //   pdpCount += 1;
  // }

});

// console.log(arr.length);
//
//MAKE AJAX CALL TO CHANGE START AND EXPIRATION DATE
arr.forEach(function(val, i) {
  // console.log(typeof `${val}`);
  var str = `${keys.keys.secret}${keys.keys.api_key}json${val}`;
  // console.log(typeof str);
  var sig = md5(str);
  // console.log(typeof sig);

  var options = {
    'method': 'POST',
    'url': 'https://api.sailthru.com/content',
    'headers': {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {
      'api_key': keys.keys.api_key,
      'sig': `${sig}`,
      'format': 'json',
      'json': `${val}`
    }
  };

  // console.log(options);
  ajaxPost.ajaxPost(options);
});


//CONSOLE.LOGS
var total = showroomCount + sandboxCount + teaCount;
console.log(`
  showroom count: ${showroomCount}
  sandbox count: ${sandboxCount}
  not pdp pages on tea count: ${teaCount}
  total to delete count: ${total}

  actual pdp count for recommendations: ${pdpCount}
  `);