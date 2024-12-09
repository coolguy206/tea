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

  //? COUNTDOWN.JS
  // $(".the-promo.countdown-promo #countdown span").countdown("2024/11/29 23:59:59", function (event) {
  //   $(this).text(
  //     event.strftime('%-DD %HH %MM %SS')
  // event.strftime('%-D %H:%M:%S')
  //   );
  // });

  var url = window.location.pathname;

  // if (url !== '/') {
  //   $('.promos').show();
  //   $('.free-shipping-150').show();
  // }

  if (url == '/') {
    // $('.header-banner').css('max-width', '100%');
    // $('.promos')[0].style.display = 'none'
    $('.promos .the-promo span.details, .promos .the-promo span > a.details').hide();
    // $('.promos .the-promo.promo1').show();
    // $('.promos .the-promo.promo3').show();
    // $('.promos .the-promo.promo2').remove();

    // $('.promos-wrap').bxSlider({
    //   auto: true,
    //   autoHover: true,
    //   mode: 'fade',
    //   controls: false,
    //   pager: false,
    //   // pause: 2500,

    //   onSliderLoad: function () {
    //     $('.promos.promo1, .promos.promo3').show();
    //   }
    // });

    if (window.innerWidth < 431) {
      // $(`.promos .the-promo`).css('height', '46px');
      // $(`.promos .the-promo span.third, .promos .the-promo span > a.third`).hide()
    }
  } else {
    //? NOT HOME PAGE
    // $('.promos .the-promo.promo1').remove();
    // $('.promos .the-promo.promo3').show();
    // $('.promos .the-promo.promo2').show();

    if (window.innerWidth < 431) {
      $(".promos .the-promo").css('height', '100px');
    }
  }

  //? CLONE .PROMOS AND APPEND TO HEADER.SITE-HEADER
  if ($('header.site-header .promos').length == 0) {
    // console.log(`cloning .promos`);
    $('header.site-header').prepend($('.promos').clone());

    //? CLONE COUNTDOWN AND ADD UNDER BANNER FOR BLACK FRIDAY
    // $('header.site-header .promos').after($('.the-promo.countdown-promo').clone());
  } else {
    // console.log(`.promos already cloned`);
  }
  $('.the-promo .see-details').fancybox({
    helpers: {
      overlay: null
    }
  });
  $('.close-fancy, .fancybox-close-small').on('click', function (e) {
    e.preventDefault();
    // console.log(`fancy closed clicked`);
    $.fancybox.close();
    $('.fancybox-container').hide();
  });
  $('.promos-wrap').bxSlider({
    auto: true,
    autoHover: true,
    mode: 'fade',
    controls: false,
    pager: false,
    // pause: 8000,
    touchEnabled: false,
    onSliderLoad: function onSliderLoad() {
      $('.promos.promo1, .promos.promo2').show();
    }
  });
});
//# sourceMappingURL=scripts.js.map
