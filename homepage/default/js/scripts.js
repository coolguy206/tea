
import {
  inview
} from './inview.js';
import {
  tracking
} from './tracking.js';
import Glide from '@glidejs/glide'

$(document).ajaxComplete(function (event, xhr, options) {
  // console.log(event,xhr,options)

  $('.hp .shop-slideshow').append($('.the-sliders'));
  // $('.hp .shop-slideshow2').append($('.the-swim-slider'));
  // $('.hp .shop-slideshow3').append($('.leggings.sliders'));
  $('.hp .white-out').fadeOut();

});

$(document).ready(function () {

  // if (window.innerWidth < 431) {
  //   $(`.hp .promo1`).insertBefore(`.hp .c1`);
  // }

  //? COUNTDOWN.JS
  $("#countdown span").countdown("2025/06/22 23:59:59", function (event) {
    $(this).text(
      // event.strftime('%-DD %HH %MM %SS');
      event.strftime('%-D Days %H Hrs %M Mins')
    );
  });

  new Glide('.c1 .glide', {
    type: 'carousel',
    autoplay: 4000,
    animationDuration: 1000,
    perView: 1,
    hoverpause: true,
    gap: 0,
    // swipeThreshold: false,
    dragThreshold: false,
  }).mount();

  // new Glide('.c2 .glide', {
  //   type: 'carousel',
  //   autoplay: 4000,
  //   animationDuration: 1000,
  //   perView: 1,
  //   hoverpause: true,
  //   gap: 0
  // }).mount();

  $('.c2 ul').bxSlider({
    auto: true,
    autoHover: true,
    mode: 'fade',
    controls: false,
    pager: false,
    // pause: 8000,
    touchEnabled: false,
    pause: 2500,

    onSliderLoad: function () {
      // $('.promos.promo1, .promos.promo2, .promos.promo3').show();
    }
  });

  // new Glide('.c6 .glide', {
  //   type: 'carousel',
  //   autoplay: 4000,
  //   animationDuration: 2000,
  //   perView: 1,
  //   hoverpause: true,
  //   gap: 0
  // }).mount()

  // $('.furoshiki .see-details').fancybox({
  //   helpers: {
  //     overlay: null
  //   }
  // });

  inview('.hp .promo1-skinny, .hp .promo2-skinny, .hp .promo1, .hp .promo2, .hp .promo3, .hp .promos-2-cell, .hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .c8, .hp .graphics, .hp .refer-friend, .hp .rewear, .hp .shop-slideshow, .hp .shop-slideshow2, .hp .shop-slideshow3, .hp .why-tea');

  for (var i = 1; i < 9; i++) {
    tracking('.hp .c' + i + ' a', 'c' + i);
  }

  tracking('.hp .shop-slideshow a', 'shop-slideshow');
  tracking('.hp .shop-slideshow2 a', 'shop-slideshow2');
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