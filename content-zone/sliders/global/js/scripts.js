
// import {
//   inview
// } from './inview.js';
import Glide from '@glidejs/glide'

$(document).ready(function () {

  // $('.new-arrivals-slider.all').css('opacity', 1);

  //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
  if ($('.new-arrivals-slider.all li').length >= 5) {
    // console.log(Glide);
    new Glide('.new-arrivals-slider.all .glide', {
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
        //   perView: 4,
        //   perSwipe: '|',
        // },
        431: {
          perView: 2,
          perSwipe: '|',
        },
      }
    }).mount();

    // $('.new-arrivals-slider.all').hide();

  } else {
    //? BOUGHT ITEMS ARE LESS THAN 5 HIDE SCROLL ARROWS AND ADD CLASS WIDTH-300
    $('.new-arrivals-slider.all div[data-glide-el="controls"]').hide();
    $('.new-arrivals-slider.all ul').addClass('width-300');
  }

  // inview('.new-arrivals-slider.all');

});