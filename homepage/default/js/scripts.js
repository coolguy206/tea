
import { inview } from './inview.js';
// import { countdown } from './countdown.js';
import { cloneExecuteSlider } from './clone-execute-slider.js';
import { tracking, addAltClass } from './tracking.js';
// import Glide from '@glidejs/glide'


$(document).ajaxComplete(function (event, xhr, options) {
  // console.log(event,xhr,options)

  cloneExecuteSlider('.new-arrivals-slider.all', '.shop-slideshow');

  cloneExecuteSlider('.the-swim-slider', '.shop-slideshow-2');

  // cloneExecuteSlider('.select-styles.all', '.shop-slideshow-3');

  $('.hp .white-out').fadeOut();
  // $('.the-sliders').hide();

});

$(document).ready(function () {

  // if (window.innerWidth < 431) {
  //   $(`.hp .promo1`).insertBefore(`.hp .c1`);
  // }


  //? COUNTDOWN.JS
  // countdown('2026/01/20 23:59:59');


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

  
  addAltClass();

});