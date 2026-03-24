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
    case '/baby-tees-tops':
      //code here
      makeCtas(_urls.urls[0].baby);
      break;
    case '/toddler-tees-tops':
      //code here
      makeCtas(_urls.urls[1].toddler);
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
  baby: [{
    text: 'Baby Girl',
    url: '/baby-tees-tops?gender%5B%5D=girl&gender%5B%5D=baby%20girl&store_price%5B%5D='
  }, {
    text: 'Baby Boy',
    url: '/baby-tees-tops?gender%5B%5D=boy&gender%5B%5D=baby%20boy&store_price%5B%5D='
  }]
}, {
  toddler: [{
    text: 'Toddler Girl',
    url: '/toddler-tees-tops?gender%5B%5D=girl&gender%5B%5D=baby%20girl&store_price%5B%5D='
  }, {
    text: 'Toddler Boy',
    url: '/toddler-tees-tops?gender%5B%5D=boy&gender%5B%5D=baby%20boy&store_price%5B%5D='
  }]
}];

},{}]},{},[1]);
