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

var _tracking = require("./tracking.js");

// const addAlt = require('./alt.js');
// const inview = require('./inview.js');
// const addTracking = require('./tracking.js');
$(document).ready(function () {
  (0, _alt.alt)('.hp .c1 img', 'girl in rainbow ice cream cone graphic dress');
  (0, _alt.alt)('.hp .c2 .first img', 'kids in special occasion clothes');
  (0, _alt.alt)('.hp .c2 .second img', 'family in PJs');
  (0, _alt.alt)('.hp .c2 .third img', 'baby girl in holiday outfit');
  (0, _alt.alt)('.hp .c3 .first img', 'baby in floral romper');
  (0, _alt.alt)('.hp .c3 .second img', 'baby girl in jelly fish dress');
  (0, _alt.alt)('.hp .c3 .second img', 'baby boy in shark romper');
  (0, _alt.alt)('.hp .c4 .first img', 'girl in poka dot dress');
  (0, _alt.alt)('.hp .c4 .second img', 'boy in pelican shirt');
  (0, _alt.alt)('.hp .c4 .third img', 'girl in floral thumb_loop');
  (0, _alt.alt)('.hp .c5 .first img', 'siblings in stripes');
  (0, _alt.alt)('.hp .c5 .second img', 'girl in cherry print outfit');
  (0, _alt.alt)('.hp .c5 .third img', 'baby in apple romper');
  (0, _alt.alt)('.hp .c5 .fourth img', 'baby in flower and rabbit pjs');
  (0, _alt.alt)('.hp .c6 .first img', 'baby in fish and jelly fish outfit');
  (0, _alt.alt)('.hp .c6 .second img', 'girls in striped dress and top');
  (0, _alt.alt)('.hp .c7 .first img', 'happy mom & son');
  (0, _alt.alt)('.hp .c7 .second img', 'learn how #teagivesback');
  (0, _alt.alt)('.hp .c7 .third img', 'girl in watermelon outfit');
  (0, _alt.alt)('.hp .swim img', 'watermelon graphic swimwear');
  (0, _inview.inview)('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .swim, .hp .graphics');

  for (var i = 1; i < 8; i++) {
    (0, _tracking.tracking)('.hp .c' + i + ' a', 'c' + i);
  } // $('img[usemap]').rwdImageMaps();

});


},{"./alt.js":1,"./inview.js":2,"./tracking.js":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tracking = void 0;

var tracking = function tracking(elem, id) {
  // console.log(`from tracking.js`);
  var a = $(elem);
  $.each(a, function (j, val) {
    $(val).addClass('hp-url').attr({
      'data-page': 'home page',
      'id': id
    });
  });
}; // module.exports = function(elem, id) {
//   // console.log(`from tracking.js`);
//   let a = $(elem);
//   $.each(a, function(j, val) {
//     $(val).addClass('hp-url').attr({
//       'data-page': 'home page',
//       'id': id
//     });
//   });
// };


exports.tracking = tracking;


},{}]},{},[3]);
