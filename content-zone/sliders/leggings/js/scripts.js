
import {
  inview
} from './inview.js';
import Glide from '@glidejs/glide'

$(document).ready(function () {

  $('.leggings').css('opacity', 1);

  //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
  if ($('.leggings li').length >= 5 || window.innerWidth < 431) {
    new Glide('.leggings .glide', {
      type: 'slider',
      // autoplay: 4000,
      animationDuration: 500,
      perView: 4,
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
          perView: 1,
          perSwipe: '|',
        },
      }
    }).mount();
  } else {
    //? BOUGHT ITEMS ARE LESS THAN 5 HIDE SCROLL ARROWS AND ADD CLASS WIDTH-300
    $('.leggings div[data-glide-el="controls"]').hide();
    $('.leggings ul').addClass('width-300');
  }

  inview('.leggings');

});