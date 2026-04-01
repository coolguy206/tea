(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    case '/girls-swimsuits-swimwear':
      //code here
      makeCtas(_urls.urls[0].girl);
      break;
    case '/boys-swimwear':
      //code here
      makeCtas(_urls.urls[1].boy);
      break;
    case '/baby-swimwear':
      //code here
      makeCtas(_urls.urls[2].baby);
      break;
    case '/toddler-swimwear':
      //code here
      makeCtas(_urls.urls[3].toddler);
      break;
  }
  ;
});

},{"./urls":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urls = void 0;
var urls = exports.urls = [{
  girl: [{
    text: 'One Pieces',
    url: '/girls-swimsuits-swimwear?store_price%5B%5D=&swimwear_type%5B%5D=One%20Pieces'
  }, {
    text: 'Two Pieces',
    url: '/girls-swimsuits-swimwear?store_price%5B%5D=&swimwear_type%5B%5D=Two%20Pieces'
  }, {
    text: 'Rashguards',
    url: '/girls-swimsuits-swimwear?store_price%5B%5D=&swimwear_type%5B%5D=Rash%20Guards'
  }]
}, {
  boy: [{
    text: 'Rashguards',
    url: '/boys-swimwear?store_price%5B%5D=&swimwear_type%5B%5D=Rash%20Guards&swimwear_type%5B%5D=One%20Pieces'
  }, {
    text: 'Swim Trunks',
    url: '/boys-swimwear?store_price%5B%5D=&swimwear_type%5B%5D=Swim%20Trunks'
  }, {
    text: 'Sets',
    url: '/boys-swimwear?store_price%5B%5D=&swimwear_type%5B%5D=Two%20Pieces'
  }]
}, {
  baby: [{
    text: 'Baby Girl',
    url: '/baby-swimwear?gender%5B%5D=baby%20girl'
  }, {
    text: 'Baby Boy',
    url: '/baby-swimwear?gender%5B%5D=baby%20boy'
  }]
}, {
  toddler: [{
    text: 'Toddler Girl',
    url: '/toddler-swimwear?gender%5B%5D=girl&gender%5B%5D=baby%20girl&store_price%5B%5D='
  }, {
    text: 'Toddler Boy',
    url: '/toddler-swimwear?gender%5B%5D=boy&gender%5B%5D=baby%20boy&store_price%5B%5D='
  }]
}];

},{}]},{},[1]);
