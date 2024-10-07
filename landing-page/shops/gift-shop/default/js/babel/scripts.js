"use strict";

var _inview = require("./inview.js");
var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
$(document).ready(function () {
  new _glide["default"]('.shop-slideshow .glide', {
    type: 'carousel',
    // autoplay: 500,
    animationDuration: 500,
    perView: 5,
    hoverpause: true,
    gap: 0,
    breakpoints: {
      431: {
        perView: 2,
        perSwipe: '|'
      }
    }
  }).mount();
  new _glide["default"]('.shop-slideshow-2 .glide', {
    type: 'carousel',
    // autoplay: 500,
    animationDuration: 500,
    perView: 5,
    hoverpause: true,
    gap: 0,
    breakpoints: {
      431: {
        perView: 2,
        perSwipe: '|'
      }
    }
  }).mount();
  (0, _inview.inview)('.content-wrap .c1, .content-wrap .c2, .content-wrap .c3, .content-wrap .c4, .content-wrap .c5, .content-wrap .c6, .content-wrap .c7, .content-wrap .c8, .content-wrap .shop-slideshow-2, .content-wrap .shop-slideshow');
});
//# sourceMappingURL=scripts.js.map
