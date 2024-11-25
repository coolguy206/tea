
// import {
//   inview
// } from './inview.js';
import Glide from '@glidejs/glide'

$(document).ready(function () {

  // $('.cm-slider.layers').css('opacity', 1);

  //? MOVE IMG AFTER 5 PDP
  $($(`.cm-slider.layers .lgw-thumb`)[6]).before($('.cm-slider.layers .img-2'));

  //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
  
  if ($('.cm-slider.layers li').length >= 5 || window.innerWidth < 431) {
    new Glide('.cm-slider.layers .glide', {
      type: 'carousel',
      // autoplay: 4000,
      animationDuration: 500,
      perView: 5,
      hoverpause: true,
      gap: 0,
      bound: true,
      rewind: false,
      breakpoints: {
        821: {
          perView: 3,
          perSwipe: '|',
        },
        431: {
          perView: 2,
          perSwipe: '|',
        },
      }
    }).mount();

    //  $('.cm-slider.layers').hide();

  } else {
    //? BOUGHT ITEMS ARE LESS THAN 5 HIDE SCROLL ARROWS AND ADD CLASS WIDTH-300
    $('.cm-slider.layers div[data-glide-el="controls"]').hide();
    $('.cm-slider.layers ul').addClass('width-300');
  }
  

  // inview('.cm-slider.layers');

});