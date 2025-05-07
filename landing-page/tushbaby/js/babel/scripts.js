"use strict";

var _inview = require("./inview.js");
var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
$(document).ready(function () {
  console.log('ready');
  (0, _inview.inview)('.the-wrap .c1, .the-wrap .c2, .the-wrap .c3, .the-wrap .c4, .the-wrap .c5, .the-wrap .c6, .the-wrap .shop-slideshow');
  new _glide["default"]('.c3 .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 1000,
    perView: 1,
    hoverpause: true,
    gap: 0
    // swipeThreshold: false,
    // dragThreshold: false,
  }).mount();
  new _glide["default"]('.c4 .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 1000,
    perView: 1,
    hoverpause: true,
    gap: 0
    // swipeThreshold: false,
    // dragThreshold: false,
  }).mount();
  new _glide["default"]('.shop-slideshow .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 500,
    perView: 5,
    hoverpause: true,
    gap: 0,
    bound: true,
    rewind: false,
    breakpoints: {
      821: {
        perView: 4,
        perSwipe: '|'
      },
      431: {
        perView: 2,
        perSwipe: '|'
      }
    }
  }).mount();
});
