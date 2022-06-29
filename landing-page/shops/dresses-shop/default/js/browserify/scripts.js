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
  (0, _alt.alt)('.dresses .c1 img', 'kids in pattern dresses');
  (0, _alt.alt)('.dresses .c2 .first img', 'girl in flower twirl dress');
  (0, _alt.alt)('.dresses .c2 .second img', 'girl in fish graphic empire dress');
  (0, _alt.alt)('.dresses .c2 .third img', 'girl in floral graphic wrap neck dress');
  (0, _alt.alt)('.dresses .clothes .first img', 't-shirt dress');
  (0, _alt.alt)('.dresses .clothes .second img', 'a-line dress');
  (0, _alt.alt)('.dresses .clothes .third img', 'midi dress');
  (0, _alt.alt)('.dresses .clothes .fourth img', 'rompers & jumpsuits');
  (0, _alt.alt)('.dresses .c3 .first img', 'girl in stripe graphic short sleeve dress');
  (0, _alt.alt)('.dresses .c3 .second img', 'girl in flower graphic play dress');
  (0, _alt.alt)('.dresses .c3 .third img', 'girl in special occasion dress');
  (0, _alt.alt)('.dresses .c4 .first img', 'girl in floral graphic long sleeve dress');
  (0, _alt.alt)('.dresses .c4 .second img', 'girl leggings');
  (0, _alt.alt)('.dresses .c5 .first img', 'girl leggings');
  (0, _alt.alt)('.dresses .graphics .first img', 'floral prints');
  (0, _alt.alt)('.dresses .graphics .second img', 'animal prints');
  (0, _alt.alt)('.dresses .graphics .third img', 'fruit prints');
  (0, _alt.alt)('.dresses .graphics .fourth img', 'rainbow & stars prints');
  (0, _inview.inview)('.dresses .c1, .dresses .c2, .dresses .c3, .dresses .c4, .dresses .c5, .dresses .c6, .dresses .c7, .dresses .clothes, .dresses .graphics, .dresses .dress-type');
});


},{"./alt.js":1,"./inview.js":2}]},{},[3]);
