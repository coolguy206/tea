"use strict";

var _inview = require("./inview.js");
var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
$(document).ready(function () {
  (0, _inview.inview)('.content-wrap .c1, .content-wrap .c2, .content-wrap .c3, .content-wrap .c4, .content-wrap .c5, .content-wrap .c6, .content-wrap .clothes, .content-wrap .slideshow-1, .content-wrap .slideshow-2, .content-wrap .slideshow-3, .content-wrap .slideshow-4');
  new _glide["default"]('.slideshow-1 .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 2000,
    perView: 5,
    hoverpause: true,
    gap: 0,
    breakpoints: {
      430: {
        perView: 2
      }
    }
  }).mount();
  new _glide["default"]('.slideshow-2 .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 2000,
    perView: 5,
    hoverpause: true,
    gap: 0,
    breakpoints: {
      430: {
        perView: 2
      }
    }
  }).mount();
  new _glide["default"]('.slideshow-3 .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 2000,
    perView: 5,
    hoverpause: true,
    gap: 0,
    breakpoints: {
      430: {
        perView: 2
      }
    }
  }).mount();
  new _glide["default"]('.slideshow-4 .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 2000,
    perView: 5,
    hoverpause: true,
    gap: 0,
    breakpoints: {
      430: {
        perView: 2
      }
    }
  }).mount();
});
//# sourceMappingURL=scripts.js.map
