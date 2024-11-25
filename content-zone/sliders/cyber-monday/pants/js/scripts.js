
// import {
//   inview
// } from './inview.js';
import Glide from '@glidejs/glide'

$(document).ready(function () {

  // $('.cm-slider.pants').css('opacity', 1);

  //? MOVE IMG AFTER 5 PDP
  $($(`.cm-slider.pants .lgw-thumb`)[6]).before($('.cm-slider.pants .img-2'));

  //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
  
  if ($('.cm-slider.pants li').length >= 5 || window.innerWidth < 431) {
    new Glide('.cm-slider.pants .glide', {
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

    //  $('.cm-slider.pants').hide();

  } else {
    //? BOUGHT ITEMS ARE LESS THAN 5 HIDE SCROLL ARROWS AND ADD CLASS WIDTH-300
    $('.cm-slider.pants div[data-glide-el="controls"]').hide();
    $('.cm-slider.pants ul').addClass('width-300');
  }
    
  // inview('.cm-slider.pants');

});