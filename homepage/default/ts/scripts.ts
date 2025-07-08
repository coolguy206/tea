import { inview } from './inview';
import { tracking } from './tracking';
// import Glide from '@glidejs/glide';
import * as Glide from '@glidejs/glide';

declare const $: any;

declare global {
  interface Window {
    // Add any custom properties if needed
  }
}

$(document).ajaxComplete(function (event: JQuery.Event, xhr: JQuery.jqXHR, options: any) {
  $('.hp .shop-slideshow').append($('.best-sellers'));
  $('.hp .white-out').fadeOut();
  $('.the-sliders').hide();
});

$(document).ready(function () {
  $('.c2-slideshow ul').bxSlider({
    auto: true,
    autoHover: true,
    mode: 'fade',
    controls: false,
    pager: false,
    touchEnabled: false,
    pause: 2500,
    onSliderLoad: function () {
      // $('.promos.promo1, .promos.promo2, .promos.promo3').show();
    }
  });

  inview('.hp .promo1-skinny, .hp .promo2-skinny, .hp .promo1, .hp .promo2, .hp .promo3, .hp .promos-2-cell, .hp .c1, .hp .c2, .hp .c2-slideshow, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .c8, .hp .graphics, .hp .refer-friend, .hp .rewear, .hp .shop-slideshow, .hp .shop-slideshow2, .hp .shop-slideshow3, .hp .why-tea');

  for (let i = 1; i < 9; i++) {
    tracking('.hp .c' + i + ' a', 'c' + i);
  }

  tracking('.hp .shop-slideshow a', 'shop-slideshow');
  tracking('.hp .shop-slideshow2 a', 'shop-slideshow2');
  tracking('.hp .promo1 a', 'promo1');

  const a = $('.hp a');
  $(a).each(function (i: number, val: HTMLElement) {
    const img = $(val).find('img');
    if (img.length !== 0) {
      // ...existing code...
    }
  });
});
