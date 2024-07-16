
import {
  inview
} from './inview.js';
import Glide from '@glidejs/glide'


$(document).ready(function () {

  new Glide('.shop-slideshow .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 2000,
    perView: 5,
    hoverpause: true,
    gap: 0,
     breakpoints: {
      431: {
        perView: 2,
        perSwipe: '|',
      },
    }
  }).mount()

  new Glide('.shop-slideshow-2 .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 2000,
    perView: 5,
    hoverpause: true,
    gap: 0,
     breakpoints: {
      431: {
        perView: 2,
        perSwipe: '|',
      },
    }
  }).mount()

  inview('.bts .c1, .bts .c2, .bts .c3, .bts .c4, .bts .c5, .bts .c6, .bts .c7, .bts .clothes, .bts .graphics, .bts .shop-slideshow, .bts .shop-slideshow-2');

});