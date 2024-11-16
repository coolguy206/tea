
import {
  inview
} from './inview.js';
import {
  tracking
} from './tracking.js';
import Glide from '@glidejs/glide'



$(document).ajaxComplete(function (event, xhr, options) {
  // console.log(event,xhr,options)
  // ajaxCount = ajaxCount + 1;
  // console.log(ajaxCount);

  // if (ajaxCount == 2) {
    $('.hp .shop-slideshow').append($('.bf-slider.dresses'));
    $('.hp .shop-slideshow2').append($('.bf-slider.leggings'));
    $('.hp .shop-slideshow3').append($('.bf-slider.rompers'));
    $('.hp .white-out').fadeOut();

    // var dressesImg1 = `<li><a href="/black-friday/shop-all/dresses "><img src="/mas_assets/media/tea_collection/promos/black-friday/2024/1120/hp/v0/Dresses-01.jpg"></a></li>`;

    // var dressesImg2 = `<li><a href="/black-friday/shop-all/dresses "><img src="/mas_assets/media/tea_collection/promos/black-friday/2024/1120/hp/v0/Dresses-02.jpg"></a></li>`;

    // $('.bf-slider.dresses .lgw-thumb.glide__slide--active').before(dressesImg1);
    // $('.bf-slider.dresses .lgw-thumb.glide__slide--active').next().next().next().next().before(dressesImg2);

    // $('.the-sliders').clone().appendTo('.hp .shop-slideshow')
    // $('.the-sliders').show();
    // $('.the-sliders').css('opacity', 1);
  // }
});

$(document).ready(function () {

  // if (window.innerWidth < 431) {
  //   $(`.hp .promo1`).insertBefore(`.hp .c1`);
  // }

  // 23:59:59

  //? COUNTDOWN.JS
  // $("#countdown span").countdown("2024/07/07 23:59:59", function (event) {
  //   $(this).text(
  //     event.strftime('%-D days %H:%M:%S')
  //     // event.strftime('%-D %H:%M:%S')
  //   );
  // });

  // $('.hp .shop-slideshow').append($('.the-sliders'));
  // $('.the-sliders').clone().appendTo('.hp .shop-slideshow')
  // $('.the-sliders').show();
  // $('.the-sliders').css('opacity', 1);

  // new Glide('.c1 .glide', {
  //   type: 'carousel',
  //   autoplay: 4000,
  //   animationDuration: 1000,
  //   perView: 1,
  //   hoverpause: true,
  //   gap: 0,
  //   // swipeThreshold: false,
  //   // dragThreshold: false,
  // }).mount();

  // new Glide('.c2 .glide', {
  //   type: 'carousel',
  //   autoplay: 4000,
  //   animationDuration: 1000,
  //   perView: 1,
  //   hoverpause: true,
  //   gap: 0
  // }).mount();

  // new Glide('.shop-slideshow .glide', {
  //   type: 'carousel',
  //   // autoplay: 4000,
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


  inview('.hp .promo1-skinny, .hp .promo1, .hp .promo2, .hp .promo3, .hp .promos-2-cell, .hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .c8, .hp .graphics, .hp .refer-friend, .hp .rewear, .hp .shop-slideshow, .hp .shop-slideshow2, .hp .shop-slideshow3, .hp .why-tea');

  for (var i = 1; i < 9; i++) {
    tracking('.hp .c' + i + ' a', 'c' + i);
  }

  tracking('.hp .shop-slideshow a', 'shop-slideshow');
  tracking('.hp .promo1 a', 'promo1');

  var a = $('.hp a');
  $(a).each(function (i, val) {
    var img = $(val).find('img');
    // console.log(img);
    if (img.length !== 0) {
      // var theClass = $(val).next().find('h2').text().replace(/ /g, '-').toLowerCase();
      if ($(img).attr('alt') !== undefined) {
        var theClass = 'img ' + $(img).attr('alt').replace(/ /g, '-').toLowerCase();
        // console.log(theClass);
        var oldClass = $(val).attr('class');
        if (oldClass !== undefined) {
          theClass = `${oldClass} ${theClass}`;
          // console.log(theClass);
          $(val).attr('class', theClass);
        } else {
          $(val).attr('class', theClass);
        }
      }
    }
  });

  // $('img[usemap]').rwdImageMaps();

});