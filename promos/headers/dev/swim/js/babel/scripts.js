"use strict";

var _urls = require("./urls");
$(document).ready(function () {
  // console.log(urls);

  var href = window.location.pathname;
  var elem = "";
  var makeCtas = function makeCtas(arr) {
    arr.map(function (val, i) {
      // console.log(val.text);
      // console.log(val.url);
      elem = "<a href=\"".concat(val.url, "\" class=\"\">\n                  <div class=\"the-cta\">\n                    <span class=\"cta-border a\">").concat(val.text, "</span>\n                  </div>\n                </a>");
      $(".container-promo-header .the-content.select-styles").append(elem);
    });
  };
  switch (href) {
    case '/swimwear':
      //code here
      makeCtas(_urls.urls[0]["default"]);
      break;
    case '/girls-swimsuits-swimwear':
      //code here
      makeCtas(_urls.urls[1].girl);
      break;
    case '/boys-swimwear':
      //code here
      makeCtas(_urls.urls[2].boy);
      break;
    case '/baby-swimwear':
      //code here
      makeCtas(_urls.urls[3].baby);
      break;
    case '/toddler-swimwear':
      //code here
      makeCtas(_urls.urls[4].toddler);
      break;
  }
  ;
});
