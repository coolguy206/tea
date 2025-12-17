
// import {
//   inview
// } from './inview.js';
import Glide from '@glidejs/glide'

$(document).ready(function () {

  // $('.bottoms-slider.all').css('opacity', 1);

  //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
  if ($('.bottoms-slider.all li').length >= 5) {
    // console.log(Glide);
    new Glide('.bottoms-slider.all .glide', {
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

    // $('.bottoms-slider.all').hide();

  } else {
    //? BOUGHT ITEMS ARE LESS THAN 5 HIDE SCROLL ARROWS AND ADD CLASS WIDTH-300
    $('.bottoms-slider.all div[data-glide-el="controls"]').hide();
    $('.bottoms-slider.all ul').addClass('width-300');
  }

  // inview('.bottoms-slider.all');

});