import {
  alt
} from './alt.js';
import {
  inview
} from './inview.js';
import Glide from '@glidejs/glide'


$(document).ready(function () {




  alt('.content-wrap .c1 img', 'family of girls in special occasion clothes');
  alt('.content-wrap .c2 .first img', 'girls in special occasion dresses');
  alt('.content-wrap .c2 .second a[data-num="1"] img', 'girl in purple special occasion dresses');
  alt('.content-wrap .c2 .second a[data-num="2"] img', 'girl in blue special occasion dresses');
  alt('.content-wrap .c2 .second a[data-num="3"] img', 'girl in floral special occasion dresses');
  alt('.content-wrap .c2 .second a[data-num="4"] img', 'girl in floral special occasion dresses');
  alt('.content-wrap .c3 img', 'boys in special occasion clothes');
  alt('.content-wrap .c4 .first img', 'baby girl in floral special occasion dress');
  alt('.content-wrap .c4 .second a[data-num="1"] img', 'baby girl in floral special occasion dress');
  alt('.content-wrap .c4 .second a[data-num="2"] img', 'baby girl in floral special occasion dress');
  alt('.content-wrap .c4 .second a[data-num="3"] img', 'baby girl in floral special occasion dress');
  alt('.content-wrap .c4 .second a[data-num="4"] img', 'baby girl in purple special occasion dress');
  alt('.content-wrap .c5 img', 'baby boys in special occasion clothes');
  alt('.content-wrap .c6 ul li a[data-num="1"] img', 'family in special occasion clothes');
  alt('.content-wrap .c6 ul li a[data-num="2"] img', 'family in special occasion clothes');
  alt('.content-wrap .c6 ul li a[data-num="3"] img', 'family in special occasion clothes');
  alt('.content-wrap .c6 ul li a[data-num="4"] img', 'family in special occasion clothes');


  inview('.content-wrap .c1, .content-wrap .c2, .content-wrap .c3, .content-wrap .c4, .content-wrap .c5, .content-wrap .c6, .content-wrap .clothes, .content-wrap .slideshow-1, .content-wrap .slideshow-2, .content-wrap .slideshow-3');

  new Glide('.slideshow-1 .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 2000,
    perView: 2,
    hoverpause: true,
    gap: 0,
    breakpoints: {
      428: {
        perView: 1
      }
    }
  }).mount();

  new Glide('.slideshow-2 .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 2000,
    perView: 2,
    hoverpause: true,
    gap: 0,
    breakpoints: {
      428: {
        perView: 1
      }
    }
  }).mount();

  new Glide('.slideshow-3 .glide', {
    type: 'carousel',
    // autoplay: 4000,
    animationDuration: 2000,
    perView: 2,
    hoverpause: true,
    gap: 0,
    breakpoints: {
      428: {
        perView: 1
      }
    }
  }).mount();

});