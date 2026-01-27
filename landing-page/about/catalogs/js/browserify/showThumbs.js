(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = {
  key: 'tl93eh3m2g89gui0dbgo374otpywg8sv',
  secret: 'juixcxy7dri2nn0lwa6rh3eclyt39wkr'
};

},{}],2:[function(require,module,exports){
"use strict";

var vars = require('./vars.js');
module.exports = function () {
  var thumbs = $('.navigation-catalog ul li');
  $(thumbs).each(function (i, val) {
    var url = $(val).attr('data-name');
    url = vars.issu + url;
    url = encodeURIComponent(url);
    $.get("https://issuu.com/oembed?url=".concat(url, "&format=json"), function (data) {
      // console.log(data);
      $(val).prepend("<img src=\"".concat(data.thumbnail_url, "\" alt=\"").concat(data.title, "\"/>"));
    });
  });
};

},{"./vars.js":3}],3:[function(require,module,exports){
"use strict";

var key = require('./key.js');
module.exports = {
  baseUrl: "https://api.issuu.com/1_0",
  access: "access=public",
  a1: function a1() {
    return this.access.replace(/=/g, '');
  },
  action: "action=issuu.documents.list",
  a2: function a2() {
    return this.action.replace(/=/g, '');
  },
  format: "format=json",
  f: function f() {
    return this.format.replace(/=/g, '');
  },
  pageSize: "pageSize=",
  p: function p() {
    return this.pageSize.replace(/=/g, '');
  },
  issu: "https://issuu.com/teacollection/docs/"
};

},{"./key.js":1}]},{},[2]);
