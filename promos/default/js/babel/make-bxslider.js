"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeBxSlider = void 0;
require("../../../../node_modules/bxslider/dist/jquery.bxslider.min.js");
var makeBxSlider = exports.makeBxSlider = function makeBxSlider(elem) {
  $(elem).bxSlider({
    auto: true,
    autoHover: true,
    mode: 'fade',
    controls: false,
    pager: false,
    // pause: 8000,
    touchEnabled: false,
    pause: 2000,
    onSliderLoad: function onSliderLoad() {
      // $('.promos.promo1, .promos.promo2, .promos.promo3').show();
    }
  });
};
