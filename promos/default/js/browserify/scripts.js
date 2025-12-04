(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

jQuery(document).ready(function () {
  //? change the aria-label for the promos
  var aria = $('.the-promo');
  aria.map(function (i, val) {
    var str = $(val).find('.span-wrap').text();
    str = str.replace(/\n/g, '');
    str = str.replace(/  /g, '');
    // console.log(str);
    $(val).attr('aria-label', str);
  });
  var url = window.location.pathname;
  if (url == '/') {
    //? HOME PAGE
    // $('.header-banner').css('max-width', '100%');
    // $('.promos')[0].style.display = 'none'
    $('.promos .the-promo span.details, .promos .the-promo span > a.details').hide();
    // $('.promos .the-promo.promo1').show();
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
      $(".promos .the-promo").css('height', '100px');
    }
  }

  //? CLONE .PROMOS AND APPEND TO HEADER.SITE-HEADER
  if ($('header.site-header .promos').length == 0) {
    // console.log(`cloning .promos`);
    $('header.site-header').prepend($('.promos').clone());
  }
  $('body').on('click', '.the-promo .see-details', function () {
    var windowSize = window.innerWidth;
    // console.log(windowSize);

    if (windowSize < 431) {
      // console.log(`mobile add class`);
      $('.details-promo').addClass('activate');
    } else {
      // console.log(`desktop use fancybox`);
      // $('.the-promo .see-details').fancybox({
      //   helpers: {
      //     overlay: null
      //   }
      // });

      //? make overlay div
      var overlay = "<div class=\"fine-print-overlay\"></div>";

      //? make clone of fine print and add class fine-print-overlay-details
      var clone = $('.details-promo').clone().addClass('fine-print-overlay-details');

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
    onSliderLoad: function onSliderLoad() {
      $('.promos.promo1, .promos.promo2, .promos.promo3').show();
    }
  });
});

},{}]},{},[1]);
