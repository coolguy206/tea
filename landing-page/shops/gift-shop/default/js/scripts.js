import {
  inview
} from './inview.js';
import Glide from '@glidejs/glide'

$(document).ready(function () {

  new Glide('.shop-slideshow .glide', {
    type: 'carousel',
    // autoplay: 500,
    animationDuration: 500,
    perView: 5,
    hoverpause: true,
    gap: 0,
    breakpoints: {
      431: {
        perView: 2,
        perSwipe: '|',
      },
    }
  }).mount();

  inview('.content-wrap .c1, .content-wrap .c2, .content-wrap .c3, .content-wrap .c4, .content-wrap .c5, .content-wrap .c6, .content-wrap .c7, .content-wrap .c8');

});