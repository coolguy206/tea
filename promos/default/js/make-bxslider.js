import '../../../../node_modules/bxslider/dist/jquery.bxslider.min.js'

export const makeBxSlider = function (elem) {
  // console.log(`execute makeBxSlider`);
  $(elem).bxSlider({
    auto: true,
    autoHover: true,
    mode: 'fade',
    controls: false,
    pager: false,
    touchEnabled: false,
    pause: 4000,

    //? 1. Check once when the slider first appears
    onSliderLoad: function () {
      manageSliderTabindex(this);
    },

    //? 2. Check every time a transition (fade) finishes
    onSlideAfter: function ($slideElement, oldIndex, newIndex) {
      manageSliderTabindex(this);
    }
  });

  function manageSliderTabindex(sliderInstance) {
    //? bxSlider adds aria-hidden="true" to inactive slides automatically.
    //? We find all links/buttons inside those hidden slides and set tabindex="-1".

    let $promoSlides = $('.promos-wrap .the-promo');
    $promoSlides.each(function () {
      const isHidden = $(this).attr('aria-hidden') === 'true';
      $(this).find('a').attr('tabindex', isHidden ? '-1' : '0');
    });

  }

};
