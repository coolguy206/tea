
import {
  inview
} from './inview.js';
import Glide from '@glidejs/glide'


$(document).ready(function () {

  inview('.content-wrap .c1, .content-wrap .c2, .content-wrap .c3, .content-wrap .c4, .content-wrap .c5, .content-wrap .c6, .content-wrap .clothes, .content-wrap .slideshow-1, .content-wrap .slideshow-2, .content-wrap .slideshow-3');

  new Glide('.slideshow-1 .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 2000,
    perView: 5,
    hoverpause: true,
    gap: 0,
    breakpoints: {
      430: {
        perView: 2
      }
    }
  }).mount();

  new Glide('.slideshow-2 .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 2000,
    perView: 5,
    hoverpause: true,
    gap: 0,
    breakpoints: {
      430: {
        perView: 2
      }
    }
  }).mount();

  new Glide('.slideshow-3 .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 2000,
    perView: 5,
    hoverpause: true,
    gap: 0,
    breakpoints: {
      430: {
        perView: 2
      }
    }
  }).mount();

});