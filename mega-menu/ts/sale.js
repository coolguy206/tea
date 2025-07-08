"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inview_1 = require("./inview");
$(document).ready(function () {
    (0, inview_1.inview)('.mega-img-container, .mega-img-bf');
    $('.dept-girl').hover(function () {
        $('.promo1-url').show();
        $('.promo2-url').show();
    }, function () {
        $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
    });
    $('.dept-boy').hover(function () {
        $('.promo1-url').show();
        $('.promo2-url').show();
    }, function () {
        $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
    });
    $('.dept-sale').hover(function () {
    }, function () {
    });
});
//# sourceMappingURL=sale.js.map