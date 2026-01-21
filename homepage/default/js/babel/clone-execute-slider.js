"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloneExecuteSlider = void 0;
var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var cloneExecuteSlider = exports.cloneExecuteSlider = function cloneExecuteSlider(elem, slider) {
  //? MAKE A CLONE BECAUSE IF YOU MOVE THE ORIGINAL AND THE PAGE RELOADS IT WILL BE GONE
  var theClone = $(elem).clone();

  //? ONLY EXECUTE IF THE HP DOES NOT HAVE THE SLIDER
  var sliderCount = $('.hp ' + elem).length;
  if (sliderCount == 0) {
    $('.hp ' + slider).append(theClone);
  }
  new _glide["default"]('.hp ' + elem + ' .glide', {
    type: 'slider',
    // autoplay: 4000,
    animationDuration: 500,
    perView: 5,
    hoverpause: true,
    gap: 0,
    bound: true,
    rewind: false,
    breakpoints: {
      // 821: {
      //   perView: 4,
      //   perSwipe: '|',
      // },
      431: {
        perView: 2,
        perSwipe: '|'
      }
    }
  }).mount();

  //? HIDE ALL THE SLIDERS
  $(elem).hide();
  //? ONLY SHOW THE SLIDER IN THE HP ELEM
  $('.hp ' + elem).show();
};
