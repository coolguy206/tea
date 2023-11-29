
import {
  inview
} from './inview.js';
import {
  tracking
} from './tracking.js';
import Glide from '@glidejs/glide'

$(document).ready(function () {

  //? COUNTDOWN.JS
  // $("#countdown span").countdown("2023/11/27 23:59:59", function (event) {
  //   $(this).text(
  //     event.strftime('%-D days %H:%M:%S')
  //   );
  // });

  new Glide('.c1 .glide', {
    type: 'carousel',
    autoplay: 4000,
    animationDuration: 1000,
    perView: 1,
    hoverpause: true,
    gap: 0,
  }).mount();

  new Glide('.shop-slideshow .glide', {
    type: 'carousel',
    // autoplay: 500,
    animationDuration: 500,
    perView: 5,
    hoverpause: true,
    gap: 0,
    breakpoints: {
      431: {
        perView: 2,
        perSwipe: '|',
      },
    }
  }).mount();

  // new Glide('.shop-slideshow2 .glide', {
  //   type: 'carousel',
  //   // autoplay: 500,
  //   animationDuration: 500,
  //   perView: 5,
  //   hoverpause: true,
  //   gap: 0,
  //   breakpoints: {
  //     431: {
  //       perView: 2,
  //       perSwipe: '|',
  //     },
  //   }
  // }).mount();

  // new Glide('.shop-slideshow3 .glide', {
  //   type: 'carousel',
  //   // autoplay: 500,
  //   animationDuration: 500,
  //   perView: 5,
  //   hoverpause: true,
  //   gap: 0,
  //   breakpoints: {
  //     431: {
  //       perView: 2,
  //       perSwipe: '|',
  //     },
  //   }
  // }).mount();

  new Glide('.c2 .glide', {
    type: 'carousel',
    autoplay: 4000,
    animationDuration: 1000,
    perView: 1,
    hoverpause: true,
    gap: 0
  }).mount();

  // new Glide('.c6 .glide', {
  //   type: 'carousel',
  //   autoplay: 4000,
  //   animationDuration: 2000,
  //   perView: 1,
  //   hoverpause: true,
  //   gap: 0
  // }).mount()

  // var imgs = $('.memorial-day-shop').find('img');
  // imgs.map(function (i, val) {
  //   var href = $(val).closest('span').attr('data-href');
  //   $(val).addClass('memorial-day').attr('data-href', href);
  //   $(val).next().addClass('memorial-day').attr('data-alt', $(val).attr('alt')).attr('data-href', href);
  // });

  // $('.furoshiki .see-details').fancybox({
  //   helpers: {
  //     overlay: null
  //   }
  // });


  inview('.hp .promo1, .hp .promo2, .hp .promo3, .hp .promos-2-cell, .hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .graphics, .hp .refer-friend, .hp .rewear, .hp .shop-slideshow, .hp .shop-slideshow2, .hp .shop-slideshow3, .hp .why-tea');

  for (var i = 1; i < 8; i++) {
    tracking('.hp .c' + i + ' a', 'c' + i);
  }

  // $('img[usemap]').rwdImageMaps();

});