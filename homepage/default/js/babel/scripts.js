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
  (0, _alt.alt)('.hp .promo1 img', 'end of season sale take up to 70% off sale items');
  (0, _alt.alt)('.hp .promo2 img', 'one day only $5 flash sale');
  (0, _alt.alt)('.hp .c1 img', 'kids in Japanese inspired clothes');
  (0, _alt.alt)('.hp .c2 .first img', 'family at the pool');
  (0, _alt.alt)('.hp .c2 .second img', 'baby in outfit');
  (0, _alt.alt)('.hp .c2 .third img', 'baby girl in holiday outfit');
  (0, _alt.alt)('.hp .c3 .first img', 'baby girl in romper');
  (0, _alt.alt)('.hp .c3 .second img', 'baby boy in outfit');
  (0, _alt.alt)('.hp .c3 .second img', 'baby girl in dress');
  (0, _alt.alt)('.hp .c4 .first img', 'girl in dress');
  (0, _alt.alt)('.hp .c4 .second img', 'girls in outfits');
  (0, _alt.alt)('.hp .c4 .third img', 'boys in outfits');
  (0, _alt.alt)('.hp .hello-kitty img', 'girl in Hello Kitty x TEA clothes');
  (0, _alt.alt)('.hp .c5 .first img', 'kids in PJs'); // alt('.hp .c5 .first img', 'kids in shark and whale graphic PJs');

  (0, _alt.alt)('.hp .c5 .second img', 'girl in graphic dress');
  (0, _alt.alt)('.hp .c5 .third img', 'baby in romper');
  (0, _alt.alt)('.hp .c5 .fourth img', 'baby in flower and rabbit pjs');
  (0, _alt.alt)('.hp .c6 .first img', 'baby in fish and jelly fish outfit');
  (0, _alt.alt)('.hp .c6 .second img', 'kids in Japnaese inspired clothes');
  (0, _alt.alt)('.hp .c7 .first img', 'tea rewear');
  (0, _alt.alt)('.hp .c7 .second img', 'kids in Japnaese inspired clothes');
  (0, _alt.alt)('.hp .c7 .third img', 'learn how #teagivesback');
  (0, _alt.alt)('.hp .c7 .fourth img', 'girl in panda outfit');
  (0, _alt.alt)('.hp .swim img', 'watermelon graphic swimwear');
  (0, _inview.inview)('.hp .promo1, .hp .promo2, .hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .swim, .hp .graphics, .hp .new-arrivals, .hp .refer-friend, .hp .rewear, .hp .year-20, .hp .give-back, .hp .hello-kitty');

  for (var i = 1; i < 8; i++) {
    (0, _tracking.tracking)('.hp .c' + i + ' a', 'c' + i);
  } // $('img[usemap]').rwdImageMaps();

});
//# sourceMappingURL=scripts.js.map
