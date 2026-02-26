
import {
  inview
} from './inview.js';
import Glide from '@glidejs/glide'

$(document).ready(function () {

  $('.spain-edit').css('opacity', 1);

  $($(`.spain-edit .lgw-thumb`)[6]).before($('.spain-edit .img-2'));

  //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
  if ($('.spain-edit li').length >= 5 || window.innerWidth < 431) {
    new Glide('.spain-edit .glide', {
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
    $('.spain-edit div[data-glide-el="controls"]').hide();
    $('.spain-edit ul').addClass('width-300');
  }

  inview('.spain-edit');

});