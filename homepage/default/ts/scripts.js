"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inview_1 = require("./inview");
const tracking_1 = require("./tracking");
$(document).ajaxComplete(function (event, xhr, options) {
    $('.hp .shop-slideshow').append($('.best-sellers'));
    $('.hp .white-out').fadeOut();
    $('.the-sliders').hide();
});
$(document).ready(function () {
    $('.c2-slideshow ul').bxSlider({
        auto: true,
        autoHover: true,
        mode: 'fade',
        controls: false,
        pager: false,
        touchEnabled: false,
        pause: 2500,
        onSliderLoad: function () {
        }
    });
    (0, inview_1.inview)('.hp .promo1-skinny, .hp .promo2-skinny, .hp .promo1, .hp .promo2, .hp .promo3, .hp .promos-2-cell, .hp .c1, .hp .c2, .hp .c2-slideshow, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .c8, .hp .graphics, .hp .refer-friend, .hp .rewear, .hp .shop-slideshow, .hp .shop-slideshow2, .hp .shop-slideshow3, .hp .why-tea');
    for (let i = 1; i < 9; i++) {
        (0, tracking_1.tracking)('.hp .c' + i + ' a', 'c' + i);
    }
    (0, tracking_1.tracking)('.hp .shop-slideshow a', 'shop-slideshow');
    (0, tracking_1.tracking)('.hp .shop-slideshow2 a', 'shop-slideshow2');
    (0, tracking_1.tracking)('.hp .promo1 a', 'promo1');
    const a = $('.hp a');
    $(a).each(function (i, val) {
        const img = $(val).find('img');
        if (img.length !== 0) {
        }
    });
});
//# sourceMappingURL=scripts.js.map