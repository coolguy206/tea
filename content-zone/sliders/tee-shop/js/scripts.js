
// import {
//   inview
// } from './inview.js';
import Glide from '@glidejs/glide'

$(document).ready(function () {

  // $('tee-shop-slider').css('opacity', 1);

  //? IF BOUGHT ITEMS ARE MORE THAN 5 EXECUTE SLIDER
  if ($('.tee-shop-slider li').length >= 5) {
    // console.log(Glide);
    new Glide('.tee-shop-slider .glide', {
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

    // $('tee-shop-slider').hide();

  } else {
    //? BOUGHT ITEMS ARE LESS THAN 5 HIDE SCROLL ARROWS AND ADD CLASS WIDTH-300
    $('tee-shop-slider div[data-glide-el="controls"]').hide();
    $('tee-shop-slider ul').addClass('width-300');
  }

  // inview('tee-shop-slider');

});