
import {
  inview
} from './inview.js';
import Glide from '@glidejs/glide'

$(document).ready(function () {

  // $('.the-dresses-slider').css('opacity', 1);

  // $($(`.dresses .lgw-thumb`)[6]).before($('.dresses .img-2'));

  //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
  if ($('.the-dresses-slider li').length >= 5 || window.innerWidth < 431) {
    new Glide('.the-dresses-slider .glide', {
      type: 'carousel',
      // autoplay: 4000,
      animationDuration: 500,
      perView: 5,
      hoverpause: true,
      gap: 0,
      bound: true,
      rewind: false,
      breakpoints: {
        // 821: {
        //   perView: 3,
        //   perSwipe: '|',
        // },
        431: {
          perView: 2,
          perSwipe: '|',
        },
      }
    }).mount();
  } else {
    //? BOUGHT ITEMS ARE LESS THAN 5 HIDE SCROLL ARROWS AND ADD CLASS WIDTH-300
    $('.the-dresses-slider div[data-glide-el="controls"]').hide();
    $('.the-dresses-slider ul').addClass('width-300');
  }

  inview('.the-dresses-slider');

});