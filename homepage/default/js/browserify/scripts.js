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
        var src = $(val).attr('data-set'); // console.log(src);

        if (src) {
          $(val).attr('src', src);
        }

        $(val).removeAttr('data-set');
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

var _tracking = require("./tracking.js");

// const addAlt = require('./alt.js');
// const inview = require('./inview.js');
// const addTracking = require('./tracking.js');
// import Glide from '@glidejs/glide'
$(document).ready(function () {
  // new Glide('.c1 .glide', {
  //   type: 'carousel',
  //   autoplay: 4000,
  //   animationDuration: 2000,
  //   perView: 1,
  //   hoverpause: true,
  //   gap: 0
  // }).mount()
  // new Glide('.memorial-day-shop .glide', {
  //   type: 'carousel',
  //   autoplay: 4000,
  //   animationDuration: 2000,
  //   perView: 5,
  //   hoverpause: true,
  //   gap: 0,
  //   breakpoints: {
  //     430: {
  //       perView: 2
  //     },
  //   }
  // }).mount()
  // new Glide('.c6 .glide', {
  //   type: 'carousel',
  //   autoplay: 4000,
  //   animationDuration: 2000,
  //   perView: 1,
  //   hoverpause: true,
  //   gap: 0
  // }).mount()
  // var imgs = $('.memorial-day-shop').find('img');
  // imgs.map(function (i, val) {
  //   var href = $(val).closest('span').attr('data-href');
  //   $(val).addClass('memorial-day').attr('data-href', href);
  //   $(val).next().addClass('memorial-day').attr('data-alt', $(val).attr('alt')).attr('data-href', href);
  // });
  // $('.furoshiki .see-details').fancybox({
  //   helpers: {
  //     overlay: null
  //   }
  // });
  (0, _alt.alt)('.hp .promo1 img', 'take 25% off sitewide + extra 30% off all sale shop nows');
  (0, _alt.alt)('.hp .promo2 img', '');
  (0, _alt.alt)('.hp .c1 .content-1 img', 'girl in swimwear');
  (0, _alt.alt)('.hp .c1 .content-2 img', 'kids in swimwear');
  (0, _alt.alt)('.hp .c1 .content-3 img', 'girls in dresses');
  (0, _alt.alt)('.hp .c2 .first img', 'Boy in graphic tee');
  (0, _alt.alt)('.hp .c2 .second img', 'girl in graphic dress');
  (0, _alt.alt)('.hp .c2 .third img', 'baby girl in holiday outfit');
  (0, _alt.alt)('.hp .c3 .first img', 'baby girl in graphic romper');
  (0, _alt.alt)('.hp .c3 .second img', 'graphic of t-rex');
  (0, _alt.alt)('.hp .c3 .third img', 'girl in graphic jogger');
  (0, _alt.alt)('.hp .c4 .first img', 'girls in graphic jogger');
  (0, _alt.alt)('.hp .c4 .second img', 'baby girl in graphic best seller');
  (0, _alt.alt)('.hp .c4 .third img', 'boy in graphic pjs');
  (0, _alt.alt)('.hp .hello-kitty .first img', 'girl in Hello Kitty x TEA clothes');
  (0, _alt.alt)('.hp .hello-kitty .second img', 'siblings in Happy Together');
  (0, _alt.alt)('.hp .c5 .first img', 'sweaters in Cozy Time'); // alt('.hp .c5 .first img', 'kids in shark and whale graphic PJs');

  (0, _alt.alt)('.hp .c5 .second img', 'boy in graphic pjs');
  (0, _alt.alt)('.hp .c5 .third img', 'girl in graphic dress');
  (0, _alt.alt)('.hp .c5 .fourth img', 'baby in flower and rabbit pjs');
  (0, _alt.alt)('.hp .c6 .content-1 img', 'baby in graphic oneies');
  (0, _alt.alt)('.hp .c6 .content-2 img', 'girl in swimwear');
  (0, _alt.alt)('.hp .c6 .content-3 img', 'girl in dress');
  (0, _alt.alt)('.hp .c7 .first img', 'tea rewear');
  (0, _alt.alt)('.hp .c7 .second img', 'clothes in make an origami bat');
  (0, _alt.alt)('.hp .c7 .third img', 'learn how #teagivesback');
  (0, _alt.alt)('.hp .c7 .fourth img', 'follow us on instagram');
  (0, _alt.alt)('.hp .swim img', 'watermelon graphic swimwear');
  (0, _inview.inview)('.hp .promo1, .hp .promo2, .hp .promos-2-cell, .hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .graphics, .hp .refer-friend, .hp .rewear, .hp .memorial-day-shop');

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
