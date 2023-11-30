"use strict";

jQuery(document).ready(function () {
  /*
      const first = $('.the-promo').find('.span-wrap').clone();
      const shopNow = $('.the-promo').find('.shop-now').clone();
      // $('.hp-promo div').append(first, shopNow);
      $('.hp-promo div').append(shopNow);
        const url = window.location.pathname;
        if(url == '/'){
          $('.hp-promo').show();
          $('.hp').before($('.hp-promo'));
      } else {
          $('.the-promo').show();
      }
    */
  var url = window.location.pathname; // if (url !== '/') {
  //   $('.promos').show();
  //   $('.free-shipping-150').show();
  // }

  if (url == '/') {// $('.header-banner').css('max-width', '100%');
    // $('.free-shipping-150').css('position', 'relative');
    // $('.free-shipping-150').show();
    // $('.promos .the-promo.promo1').css('background', '#E493CD');
    // $('.promos .the-promo.promo1 span.first, .promos .the-promo.promo1 span.third').css('color', '#373A49');
  } //? CLONE .PROMOS AND APPEND TO HEADER.SITE-HEADER


  if ($('header.site-header .promos').length == 0) {
    console.log("cloning .promos");
    $('header.site-header').prepend($('.promos').clone());
  } else {
    console.log(".promos already cloned");
  }

  $('.the-promo .see-details').fancybox({
    helpers: {
      overlay: null
    }
  });
  $('.close-fancy').click(function (e) {
    // e.preventDefault();
    $.fancybox.close();
  });
  $('.promos-wrap').bxSlider({
    auto: true,
    autoHover: true,
    mode: 'fade',
    controls: false,
    pager: false,
    pause: 2500 // onSliderLoad:function(){
    //     $('.promos.promo2, .promos.promo3').show();
    // }

  });
});
//# sourceMappingURL=scripts.js.map
