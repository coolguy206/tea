jQuery(document).ready(function () {

  //? change the aria-label for the promos
  let aria = $('.the-promo')

  aria.map((i, val) => {
    var str = $(val).find('.span-wrap').text();
    str = str.replace(/\n/g, '');
    str = str.replace(/  /g, '');
    // console.log(str);
    $(val).attr('aria-label', str);
  })

  const url = window.location.pathname;

  if (url == '/') {
    //? HOME PAGE
    // $('.header-banner').css('max-width', '100%');
    // $('.promos')[0].style.display = 'none'
    $('.promos .the-promo span.details, .promos .the-promo span > a.details').hide();
    // $('.promos').hide();
    $('.promos .the-promo.promo1').remove();
    // $('.promos .the-promo.promo3').show();
    // $('.promos .the-promo.promo2').remove();


    //? CLONE .PROMOS AND APPEND TO HEADER.SITE-HEADER
    // if ($('header.site-header .promos').length == 0) {
    // console.log(`cloning .promos`);
    // $('header.site-header').prepend($('.promos.not-countdown').clone());

    // }

    //? MOBILE
    if (window.innerWidth < 431) {
      // $(`.promos .the-promo`).css('height', '46px');
      // $(`.promos .the-promo span.third, .promos .the-promo span > a.third`).hide()
      $('.promos .the-promo.promo1').hide();
    }

  } else {
    //? NOT HOME PAGE
    // $('.promos .the-promo.promo1').remove();
    // $('.promos .the-promo.promo3').show();
    // $('.promos .the-promo.promo2').show();

    //? CLONE .PROMOS AND APPEND TO HEADER.SITE-HEADER
    // if ($('header.site-header .promos').length == 0) {
    //   // console.log(`cloning .promos`);
    // $('header.site-header').prepend($('.promos.not-countdown').clone());

    // }

    //? MOBILE
    if (window.innerWidth < 431) {
      $(`.promos .the-promo`).css('height', '100px');
    }

  }

  //? CLONE .PROMOS AND APPEND TO HEADER.SITE-HEADER
  if ($('header.site-header .promos').length == 0) {
    // console.log(`cloning .promos`);
    $('header.site-header').prepend($('.promos').clone());
  }


  $('body').on('click', '.the-promo .see-details', function (e) {
    e.preventDefault();
    var windowSize = window.innerWidth;
    // console.log(windowSize);
    var href = $(this).attr('href');

    if (windowSize < 431) {
      // console.log(`mobile add class`);

      $(href).addClass('activate');

    } else {
      // console.log(`desktop use fancybox`);
      // $('.the-promo .see-details').fancybox({
      //   helpers: {
      //     overlay: null
      //   }
      // });

      //? make overlay div
      var overlay = `<div class="fine-print-overlay"></div>`;

      //? make clone of fine print and add class fine-print-overlay-details
      var clone = $(href).clone().addClass('fine-print-overlay-details');

      //? add the elements just under the body
      $('body').prepend(clone);
      $('body').prepend(overlay);

    }
  });

  $('body').on('click', '.close-fancy, .fine-print-overlay', function (e) {
    e.preventDefault();

    var windowSize = window.innerWidth;
    // console.log(windowSize);
    if (windowSize < 431) {
      // console.log(`mobile remove class`);
      $('.details-promo').removeClass('activate');

    } else {
      // console.log(`desktop use fancybox`);
      // $.fancybox.close();
      // $('.fancybox-container').hide()

      //?remove the elements
      $('.fine-print-overlay, .fine-print-overlay-details').remove();
    }
    // console.log(`fancy closed clicked`);

  });

  $('.promos-wrap').bxSlider({
    auto: true,
    autoHover: true,
    mode: 'fade',
    controls: false,
    pager: false,
    pause: 2000,
    touchEnabled: false,

    onSliderLoad: function () {
      $('.promos.promo1, .promos.promo2, .promos.promo3').show();
    }
  });

});