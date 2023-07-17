"use strict";

var _alt = require("./alt.js");

var _inview = require("./inview.js");

var _tracking = require("./tracking.js");

var _glide = _interopRequireDefault(require("@glidejs/glide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const addAlt = require('./alt.js');
// const inview = require('./inview.js');
// const addTracking = require('./tracking.js');
$(document).ready(function () {
  new _glide["default"]('.c1 .glide', {
    type: 'carousel',
    autoplay: 4000,
    animationDuration: 2000,
    perView: 1,
    hoverpause: true,
    gap: 0
  }).mount();
  new _glide["default"]('.shop-slideshow .glide', {
    type: 'carousel',
    autoplay: 4000,
    animationDuration: 2000,
    perView: 5,
    hoverpause: true,
    gap: 0,
    breakpoints: {
      431: {
        perView: 1
      }
    }
  }).mount();
  new _glide["default"]('.c2 .glide', {
    type: 'carousel',
    autoplay: 4000,
    animationDuration: 2000,
    perView: 1,
    hoverpause: true,
    gap: 0
  }).mount(); // new Glide('.c6 .glide', {
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
  (0, _inview.inview)('.hp .promo1, .hp .promo2, .hp .promos-2-cell, .hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .graphics, .hp .refer-friend, .hp .rewear, .hp .shop-slideshow, .hp .why-tea');

  for (var i = 1; i < 8; i++) {
    (0, _tracking.tracking)('.hp .c' + i + ' a', 'c' + i);
  } // $('img[usemap]').rwdImageMaps();

});
//# sourceMappingURL=scripts.js.map
