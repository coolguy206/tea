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
  new _glide["default"]('.glide', {
    type: 'carousel' //autoplay: 2000,

  }).mount();
  (0, _alt.alt)('.hp .promo1 img', 'the dressy event 30% off special occasion');
  (0, _alt.alt)('.hp .promo2 img', 'one day only $5 flash sale');
  (0, _alt.alt)('.hp .c1 img', 'kids in cuddly sherpa jackets');
  (0, _alt.alt)('.hp .c2 .first img', 'Baby Essentials');
  (0, _alt.alt)('.hp .c2 .second img', 'baby in outfit');
  (0, _alt.alt)('.hp .c2 .third img', 'baby girl in holiday outfit');
  (0, _alt.alt)('.hp .c3 .first img', 'baby girl in Party & Play');
  (0, _alt.alt)('.hp .c3 .second img', 'baby boy in romper');
  (0, _alt.alt)('.hp .c3 .third img', 'baby boy in Cute & Cuddly');
  (0, _alt.alt)('.hp .c4 .first img', 'girls in Twirl Famous');
  (0, _alt.alt)('.hp .c4 .second img', 'girl in Mix, Match, Relax');
  (0, _alt.alt)('.hp .c4 .third img', 'boy in Winning Combos');
  (0, _alt.alt)('.hp .hello-kitty .first img', 'girl in Hello Kitty x TEA clothes');
  (0, _alt.alt)('.hp .hello-kitty .second img', 'siblings in Happy Together');
  (0, _alt.alt)('.hp .c5 .first img', 'sweaters in Cozy Time'); // alt('.hp .c5 .first img', 'kids in shark and whale graphic PJs');

  (0, _alt.alt)('.hp .c5 .second img', 'baby girl in graphic dress');
  (0, _alt.alt)('.hp .c5 .third img', 'girl in graphic dress');
  (0, _alt.alt)('.hp .c5 .fourth img', 'baby in flower and rabbit pjs');
  (0, _alt.alt)('.hp .c6 .first img', 'girls in Light Up with Love');
  (0, _alt.alt)('.hp .c6 .second img', 'family in Slumber Party');
  (0, _alt.alt)('.hp .c7 .first img', 'tea rewear');
  (0, _alt.alt)('.hp .c7 .second img', 'clothes in make an origami bat');
  (0, _alt.alt)('.hp .c7 .third img', 'learn how #teagivesback');
  (0, _alt.alt)('.hp .c7 .fourth img', 'follow us on instagram');
  (0, _alt.alt)('.hp .swim img', 'watermelon graphic swimwear');
  (0, _inview.inview)('.hp .promo1, .hp .promo2, .hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .swim, .hp .graphics, .hp .new-arrivals, .hp .refer-friend, .hp .rewear, .hp .year-20, .hp .give-back, .hp .gift-guide, .hp .hello-kitty, .hp .hello-kitty-full');

  for (var i = 1; i < 8; i++) {
    (0, _tracking.tracking)('.hp .c' + i + ' a', 'c' + i);
  } // $('img[usemap]').rwdImageMaps();

});
//# sourceMappingURL=scripts.js.map
