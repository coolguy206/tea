import { switchNewArrivals } from './switch-new-arrivals';
import { switchSale } from './switch-sale';
import { inview } from './inview';

declare const $: any;

$(document).ready(function () {
  inview('.mega-img-container, .mega-img-bf');

  $('.dept-girl').hover(function () {
    $('.promo1-url').show();
    $('.promo2-url').show();
  }, function () {
    $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  });

  $('.dept-boy').hover(function () {
    $('.promo1-url').show();
    $('.promo2-url').show();
  }, function () {
    $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  });

  $('.dept-sale').hover(function () {
    // ...existing code...
  }, function () {
    // ...existing code...
  });
});
