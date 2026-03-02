import '../../../../node_modules/bxslider/dist/jquery.bxslider.min.js'

export const makeBxSlider = function (elem) {

  $(elem).bxSlider({
    auto: true,
    autoHover: true,
    mode: 'fade',
    controls: false,
    pager: false,
    // pause: 8000,
    touchEnabled: false,
    pause: 2000,

    onSliderLoad: function () {
      // $('.promos.promo1, .promos.promo2, .promos.promo3').show();
    }
  });

};
