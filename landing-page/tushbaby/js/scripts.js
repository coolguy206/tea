import {
  inview
} from './inview.js';

import Glide from '@glidejs/glide'

$(document).ready(function () {

  console.log('ready');

  inview('.the-wrap .c1, .the-wrap .c2, .the-wrap .c3, .the-wrap .c4, .the-wrap .c5, .the-wrap .c6, .the-wrap .shop-slideshow');

  new Glide('.c3 .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 1000,
    perView: 1,
    hoverpause: true,
    gap: 0,
    // swipeThreshold: false,
    // dragThreshold: false,
  }).mount();

  new Glide('.c4 .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 1000,
    perView: 1,
    hoverpause: true,
    gap: 0,
    // swipeThreshold: false,
    // dragThreshold: false,
  }).mount();

  new Glide('.shop-slideshow .glide', {
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
        perView: 4,
        perSwipe: '|',
      },
      431: {
        perView: 2,
        perSwipe: '|',
      },
    }
  }).mount();


  


}); 
