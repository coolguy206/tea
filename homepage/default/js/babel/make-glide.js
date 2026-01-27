"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGlide = void 0;
var _glide = _interopRequireDefault(require("@glidejs/glide"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var makeGlide = exports.makeGlide = function makeGlide(elem) {
  new _glide["default"](elem, {
    type: 'carousel',
    autoplay: 4000,
    animationDuration: 1000,
    perView: 1,
    hoverpause: true,
    gap: 0,
    // swipeThreshold: false,
    dragThreshold: false
  }).mount();
};
