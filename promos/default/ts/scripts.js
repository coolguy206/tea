"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
$(document).ready(() => {
    const url = window.location.pathname;
    if (url == '/') {
        if ($('.promos .the-promo span.details, .promos .the-promo span > a.details').length) {
            $('.promos .the-promo span.details, .promos .the-promo span > a.details').hide();
        }
        if (window.innerWidth < 431) {
        }
    }
    else {
        if (window.innerWidth < 431 && $('.promos .the-promo').length) {
            $('.promos .the-promo').css('height', '100px');
        }
    }
    if ($('header.site-header .promos').length === 0 && $('.promos').length) {
        $('header.site-header').prepend($('.promos').clone());
    }
    else {
    }
    if ($('.the-promo .see-details').length && typeof $('.the-promo .see-details').fancybox === 'function') {
        $('.the-promo .see-details').fancybox({
            helpers: {
                overlay: null
            },
        });
    }
    if ($('.close-fancy, .fancybox-close-small').length) {
        $('.close-fancy, .fancybox-close-small').on('click', function (e) {
            var _a;
            e.preventDefault();
            if (typeof ((_a = $.fancybox) === null || _a === void 0 ? void 0 : _a.close) === 'function') {
                $.fancybox.close();
            }
            $('.fancybox-container').hide();
        });
    }
    $('.promos-wrap').bxSlider({
        auto: true,
        autoHover: true,
        mode: 'fade',
        controls: false,
        pager: false,
        touchEnabled: false,
        onSliderLoad: function () {
            $('.promos.promo1, .promos.promo2, .promos.promo3').show();
        }
    });
});
//# sourceMappingURL=scripts.js.map