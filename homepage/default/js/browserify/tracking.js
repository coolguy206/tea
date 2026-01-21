(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tracking = exports.addAltClass = void 0;
var tracking = exports.tracking = function tracking(elem, id) {
  // console.log(`from tracking.js`);
  var a = $(elem);
  $.each(a, function (j, val) {
    $(val).addClass('hp-url').attr({
      'data-page': 'home page',
      'id': id
    });
  });
};
var addAltClass = exports.addAltClass = function addAltClass() {
  var a = $('.hp a');
  $(a).each(function (i, val) {
    var img = $(val).find('img');
    // console.log(img);
    if (img.length !== 0) {
      // var theClass = $(val).next().find('h2').text().replace(/ /g, '-').toLowerCase();
      if ($(img).attr('alt') !== undefined) {
        var theClass = 'img ' + $(img).attr('alt').replace(/ /g, '-').toLowerCase();
        // console.log(theClass);
        var oldClass = $(val).attr('class');
        if (oldClass !== undefined) {
          theClass = "".concat(oldClass, " ").concat(theClass);
          // console.log(theClass);
          $(val).attr('class', theClass);
        } else {
          $(val).attr('class', theClass);
        }
      }
    }
  });
};

// module.exports = function(elem, id) {
//   // console.log(`from tracking.js`);
//   let a = $(elem);
//   $.each(a, function(j, val) {
//     $(val).addClass('hp-url').attr({
//       'data-page': 'home page',
//       'id': id
//     });
//   });
// };

},{}]},{},[1]);
