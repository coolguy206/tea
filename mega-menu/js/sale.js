import {
  switchNewArrivals
} from './switch-new-arrivals.js';
import {
  switchSale
} from './switch-sale.js';

$(document).ready(function() {

  // $('.menu .swimwear').text('$15 Swim');

  $('.dept-girl, .dept-baby').hover(function() {
    $('.promo1-url, .promo2-url').show();
    $('.promo2-url').hide();
  }, function() {

  });

  $('.dept-sale').hover(function() {
    $('.promo1-url, .promo2-url').show();
  }, function() {

  });

  $('.dept-boy').hover(function() {
    $('.promo2-url').show();
    $('.promo1-url').hide();
  }, function() {

  });

  // $('.dept-boy').hover(function() {
  //   $('.promo1-url').hide();
  // }, function() {
  //
  // });

  $('.site-nav-submenu .bar>div').hover(function() {
    var href = $(this).find('a').first().attr('href');
    // console.log(href);

    $('.promo1-url, .promo2-url').hide();

    switchNewArrivals(href);
    switchSale(href);

  }, function() {

  });

});