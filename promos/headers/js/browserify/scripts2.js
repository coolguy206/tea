(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inview = void 0;
var inview = exports.inview = function inview(elem) {
  // console.log(`from inview.js`);
  $(elem).on('inview', function (event, isInView) {
    if (isInView) {
      // element is now visible in the viewport
      // console.log('in view');
      var imgs = $(this).find('img');
      // let width = $(window).width();
      // console.log(imgs);
      // console.log(width);
      $.each(imgs, function (i, val) {
        var src = $(val).attr('data-set');
        // console.log(src);
        if (src) {
          $(val).attr('src', src);
        }
        $(val).removeAttr('data-set');
      });
      $(this).css('visibility', 'visible');
    }
  });
};

// module.exports = function(elem) {
//   // console.log(`from inview.js`);
//   $(elem).on('inview', function(event, isInView) {
//     if (isInView) {
//       // element is now visible in the viewport
//       // console.log('in view');
//       let imgs = $(this).find('img');
//       // let width = $(window).width();
//       // console.log(imgs);
//       // console.log(width);
//       $.each(imgs, function(i, val) {
//         let src = $(val).attr('data-src');
//         // console.log(src);
//         if (src) {
//           $(val).attr('src', src);
//         }
//         $(val).removeAttr('data-src');
//       });
//     }
//   });
// };


},{}],2:[function(require,module,exports){
"use strict";

var _inview = require("./inview.js");
$(document).ready(function () {
  (0, _inview.inview)('.container-promo-header');
  var a = $('.container-promo-header a');
  a.map(function (i, val) {
    //console.log(val);
    $(val).addClass('sale-category-header');
  });
  var links = $('.category-page .nav .side-nav ul li .links ul li a');
  links.map(function (i, val) {
    // console.log($(val).text());
    var str = $(val).text();
    if (str == "Warehouse Sale: Up to 75% Off ") {
      $(val).hide();
    }
  });
});


},{"./inview.js":1}]},{},[2]);
