
import { inview } from './inview.js';
// import { countdown } from './countdown.js';
import { tracking } from './tracking.js';
import Glide from '@glidejs/glide'


$(document).ajaxComplete(function (event, xhr, options) {
  // console.log(event,xhr,options)

  //? MAKE A CLONE BECAUSE IF YOU MOVE THE ORIGINAL AND THE PAGE RELOADS IT WILL BE GONE
  var theClone = $('.bottoms-slider.all').clone();

  //? ONLY EXECUTE IF THE HP DOES NOT HAVE THE SLIDER
  var sliderCount = $('.hp .bottoms-slider.all').length;
  if (sliderCount == 0) {
    $('.hp .shop-slideshow-3').append(theClone);
  }

  new Glide('.hp .bottoms-slider.all .glide', {
    type: 'slider',
    // autoplay: 4000,
    animationDuration: 500,
    perView: 5,
    hoverpause: true,
    gap: 0,
    bound: true,
    rewind: false,
    breakpoints: {
      // 821: {
      //   perView: 4,
      //   perSwipe: '|',
      // },
      431: {
        perView: 2,
        perSwipe: '|',
      },
    }
  }).mount();

  //? HIDE ALL THE SLIDERS
  $('.bottoms-slider.all').hide()
  //? ONLY SHOW THE SLIDER IN THE HP ELEM
  $('.hp .bottoms-slider.all').show()


  //? MAKE A CLONE BECAUSE IF YOU MOVE THE ORIGINAL AND THE PAGE RELOADS IT WILL BE GONE
  var theClone2 = $('.tee-shop-slider.all').clone();

  //? ONLY EXECUTE IF THE HP DOES NOT HAVE THE SLIDER
  var sliderCount2 = $('.hp .tee-shop-slider.all').length;
  if (sliderCount2 == 0) {
    $('.hp .shop-slideshow-2').append(theClone2);
  }

  new Glide('.hp .tee-shop-slider.all .glide', {
    type: 'slider',
    // autoplay: 4000,
    animationDuration: 500,
    perView: 5,
    hoverpause: true,
    gap: 0,
    bound: true,
    rewind: false,
    breakpoints: {
      // 821: {
      //   perView: 4,
      //   perSwipe: '|',
      // },
      431: {
        perView: 2,
        perSwipe: '|',
      },
    }
  }).mount();

  //? HIDE ALL THE SLIDERS
  $('.tee-shop-slider.all').hide()
  //? ONLY SHOW THE SLIDER IN THE HP ELEM
  $('.hp .tee-shop-slider.all').show()
  // $('.hp .tee-shop-slider.all').css('opacity', '1');


  //? MAKE A CLONE BECAUSE IF YOU MOVE THE ORIGINAL AND THE PAGE RELOADS IT WILL BE GONE
  var theClone3 = $('.clothing-sale-slider.all').clone();

  //? ONLY EXECUTE IF THE HP DOES NOT HAVE THE SLIDER
  var sliderCount3 = $('.hp .clothing-sale-slider.all').length;
  if (sliderCount3 == 0) {
    $('.hp .shop-slideshow').append(theClone3);
  }

  new Glide('.hp .clothing-sale-slider.all .glide', {
    type: 'slider',
    // autoplay: 4000,
    animationDuration: 500,
    perView: 5,
    hoverpause: true,
    gap: 0,
    bound: true,
    rewind: false,
    breakpoints: {
      // 821: {
      //   perView: 4,
      //   perSwipe: '|',
      // },
      431: {
        perView: 2,
        perSwipe: '|',
      },
    }
  }).mount();

  //? HIDE ALL THE SLIDERS
  $('.clothing-sale-slider.all').hide()
  //? ONLY SHOW THE SLIDER IN THE HP ELEM
  $('.hp .clothing-sale-slider.all').show()


  $('.hp .white-out').fadeOut();
  // $('.the-sliders').hide();

});

$(document).ready(function () {

  // if (window.innerWidth < 431) {
  //   $(`.hp .promo1`).insertBefore(`.hp .c1`);
  // }

  //? COUNTDOWN.JS
  // countdown('2025/12/02 23:59:59');


  // new Glide('.c1 .glide', {
  //   type: 'carousel',
  //   autoplay: 4000,
  //   animationDuration: 1000,
  //   perView: 1,
  //   hoverpause: true,
  //   gap: 0,
  //   // swipeThreshold: false,
  //   dragThreshold: false,
  // }).mount();


  // new Glide('.c2 .glide', {
  //   type: 'carousel',
  //   autoplay: 4000,
  //   animationDuration: 1000,
  //   perView: 1,
  //   hoverpause: true,
  //   gap: 0
  // }).mount();


  // $('.c2-slideshow ul').bxSlider({
  //   auto: true,
  //   autoHover: true,
  //   mode: 'fade',
  //   controls: false,
  //   pager: false,
  //   // pause: 8000,
  //   touchEnabled: false,
  //   pause: 1500,

  //   onSliderLoad: function () {
  //     // $('.promos.promo1, .promos.promo2, .promos.promo3').show();
  //   }
  // });


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


  inview('.hp .promo1-skinny, .hp .promo2-skinny, .hp .promo1, .hp .promo2, .hp .promo3, .hp .promos-2-cell, .hp .c1, .hp .c2, .hp .c2-slideshow, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .c8, .hp .graphics, .hp .refer-friend, .hp .rewear, .hp .shop-slideshow, .hp .shop-slideshow2, .hp .shop-slideshow3, .hp .why-tea');

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


});