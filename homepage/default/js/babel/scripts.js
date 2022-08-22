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
  (0, _alt.alt)('.hp .promo1 img', 'the stock up event get up to 25% off sitewide');
  (0, _alt.alt)('.hp .promo2 img', 'one day only $5 flash sale');
  (0, _alt.alt)('.hp .c1 img', 'girl in pineapple graphic outfit');
  (0, _alt.alt)('.hp .c2 .first img', 'family at the pool');
  (0, _alt.alt)('.hp .c2 .second img', 'kids in special occasion clothes');
  (0, _alt.alt)('.hp .c2 .third img', 'baby girl in holiday outfit');
  (0, _alt.alt)('.hp .c3 .first img', 'baby girl in monkey graphic romper');
  (0, _alt.alt)('.hp .c3 .second img', 'baby boy in jungle graphic tee');
  (0, _alt.alt)('.hp .c3 .second img', 'baby girl in orange slices graphic dress');
  (0, _alt.alt)('.hp .c4 .first img', 'girl in banana graphic dress');
  (0, _alt.alt)('.hp .c4 .second img', 'kids in animal graphic clothes');
  (0, _alt.alt)('.hp .c4 .third img', 'girl in butterfly graphic dress');
  (0, _alt.alt)('.hp .hello-kitty img', 'girl in Hello Kitty x TEA clothes');
  (0, _alt.alt)('.hp .c5 .first img', 'girl in ice cream graphic PJs'); // alt('.hp .c5 .first img', 'kids in shark and whale graphic PJs');

  (0, _alt.alt)('.hp .c5 .second img', 'girl in floral graphic dress');
  (0, _alt.alt)('.hp .c5 .third img', 'baby in floral romper');
  (0, _alt.alt)('.hp .c5 .fourth img', 'baby in flower and rabbit pjs');
  (0, _alt.alt)('.hp .c6 .first img', 'baby in fish and jelly fish outfit');
  (0, _alt.alt)('.hp .c6 .second img', 'girls in striped dress and top');
  (0, _alt.alt)('.hp .c7 .first img', 'tea rewear');
  (0, _alt.alt)('.hp .c7 .second img', 'floral graphic');
  (0, _alt.alt)('.hp .c7 .third img', 'learn how #teagivesback');
  (0, _alt.alt)('.hp .c7 .fourth img', 'girl in floral graphic dress');
  (0, _alt.alt)('.hp .swim img', 'watermelon graphic swimwear');
  (0, _inview.inview)('.hp .promo1, .hp .promo2, .hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .swim, .hp .graphics, .hp .new-arrivals, .hp .refer-friend, .hp .rewear, .hp .year-20, .hp .give-back, .hp .hello-kitty');

  for (var i = 1; i < 8; i++) {
    (0, _tracking.tracking)('.hp .c' + i + ' a', 'c' + i);
  } // $('img[usemap]').rwdImageMaps();

});
//# sourceMappingURL=scripts.js.map
