"use strict";

var _alt = require("./alt.js");

var _inview = require("./inview.js");

var _glide = _interopRequireDefault(require("@glidejs/glide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

$(document).ready(function () {
  (0, _alt.alt)('.content-wrap .c1 img', 'family of girls in special occasion clothes');
  (0, _alt.alt)('.content-wrap .c2 .first img', 'girls in special occasion dresses');
  (0, _alt.alt)('.content-wrap .c2 .second a[data-num="1"] img', 'girl in purple special occasion dresses');
  (0, _alt.alt)('.content-wrap .c2 .second a[data-num="2"] img', 'girl in blue special occasion dresses');
  (0, _alt.alt)('.content-wrap .c2 .second a[data-num="3"] img', 'girl in floral special occasion dresses');
  (0, _alt.alt)('.content-wrap .c2 .second a[data-num="4"] img', 'girl in floral special occasion dresses');
  (0, _alt.alt)('.content-wrap .c3 img', 'boys in special occasion clothes');
  (0, _alt.alt)('.content-wrap .c4 .first img', 'baby girl in floral special occasion dress');
  (0, _alt.alt)('.content-wrap .c4 .second a[data-num="1"] img', 'baby girl in floral special occasion dress');
  (0, _alt.alt)('.content-wrap .c4 .second a[data-num="2"] img', 'baby girl in floral special occasion dress');
  (0, _alt.alt)('.content-wrap .c4 .second a[data-num="3"] img', 'baby girl in floral special occasion dress');
  (0, _alt.alt)('.content-wrap .c4 .second a[data-num="4"] img', 'baby girl in purple special occasion dress');
  (0, _alt.alt)('.content-wrap .c5 img', 'baby boys in special occasion clothes');
  (0, _alt.alt)('.content-wrap .c6 ul li a[data-num="1"] img', 'family in special occasion clothes');
  (0, _alt.alt)('.content-wrap .c6 ul li a[data-num="2"] img', 'family in special occasion clothes');
  (0, _alt.alt)('.content-wrap .c6 ul li a[data-num="3"] img', 'family in special occasion clothes');
  (0, _alt.alt)('.content-wrap .c6 ul li a[data-num="4"] img', 'family in special occasion clothes');
  (0, _inview.inview)('.content-wrap .c1, .content-wrap .c2, .content-wrap .c3, .content-wrap .c4, .content-wrap .c5, .content-wrap .c6, .content-wrap .clothes, .content-wrap .slideshow-1, .content-wrap .slideshow-2, .content-wrap .slideshow-3');
  new _glide["default"]('.slideshow-1 .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 2000,
    perView: 2,
    hoverpause: true,
    gap: 0,
    breakpoints: {
      428: {
        perView: 1
      }
    }
  }).mount();
  new _glide["default"]('.slideshow-2 .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 2000,
    perView: 2,
    hoverpause: true,
    gap: 0,
    breakpoints: {
      428: {
        perView: 1
      }
    }
  }).mount();
  new _glide["default"]('.slideshow-3 .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 2000,
    perView: 2,
    hoverpause: true,
    gap: 0,
    breakpoints: {
      428: {
        perView: 1
      }
    }
  }).mount();
});
//# sourceMappingURL=scripts.js.map
