(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alt = void 0;

var alt = function alt(elem, _alt) {
  // console.log(`from alt.js`);
  var img = $(elem);
  $.each(img, function (i, val) {
    $(val).attr('alt', _alt);
  });
}; // module.exports = function(elem, alt) {
//   // console.log(`from alt.js`);
//   let img = $(elem);
//   $.each(img, function(i, val) {
//     $(val).attr('alt', alt);
//   });
// };


exports.alt = alt;


},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inview = void 0;

var inview = function inview(elem) {
  // console.log(`from inview.js`);
  $(elem).on('inview', function (event, isInView) {
    if (isInView) {
      // element is now visible in the viewport
      // console.log('in view');
      var imgs = $(this).find('img'); // let width = $(window).width();
      // console.log(imgs);
      // console.log(width);

      $.each(imgs, function (i, val) {
        var src = $(val).attr('data-src'); // console.log(src);

        if (src) {
          $(val).attr('src', src);
        }

        $(val).removeAttr('data-src');
      });
      $(this).css('visibility', 'visible');
    }
  });
}; // module.exports = function(elem) {
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


exports.inview = inview;


},{}],3:[function(require,module,exports){
"use strict";

var _alt = require("./alt.js");

var _inview = require("./inview.js");

$(document).ready(function () {
  (0, _alt.alt)('.content-wrap .c1 > a img', 'babies');
  (0, _alt.alt)('.content-wrap .c1 .the-content img', 'rainbow');
  (0, _alt.alt)('.content-wrap .c2 a[data-num="1"] img', 'rainbow romper');
  (0, _alt.alt)('.content-wrap .c2 a[data-num="2"] img', 'newborn graphic outfit');
  (0, _alt.alt)('.content-wrap .c2 a[data-num="3"] img', 'newborn graphic hats');
  (0, _alt.alt)('.content-wrap .c2 a[data-num="4"] img', 'newborn graphic sets');
  (0, _alt.alt)('.content-wrap .c3 .cell1 img', 'baby in graphic outfit');
  (0, _alt.alt)('.content-wrap .c3 .cell2 img', 'baby in rainbow graphic romper');
  (0, _alt.alt)('.content-wrap .c3 .cell3 img', 'baby in strawberry graphic outfit');
  (0, _alt.alt)('.content-wrap .c3 .cell4 img', 'baby in flower graphic dress');
  (0, _alt.alt)('.content-wrap .c4 > a img', 'graphic baby outfits');
  (0, _alt.alt)('.content-wrap .c4 .the-content img', 'flower');
  (0, _inview.inview)('.content-wrap .c1, .content-wrap .c2, .content-wrap .c3, .content-wrap .c4, .content-wrap .c5, .content-wrap .c6, .content-wrap .c7, .content-wrap .c8, .content-wrap .c9');
});


},{"./alt.js":1,"./inview.js":2}]},{},[3]);
