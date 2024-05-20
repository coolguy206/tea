import {
  switchNewArrivals
} from './switch-new-arrivals.js';
import {
  switchSale
} from './switch-sale.js';
import {
  inview
} from './inview.js';

$(document).ready(function() {

  // $('.menu .swimwear').text('$15 Swim');

  inview('.mega-img-container, .mega-img-bf');

  $('.dept-girl').hover(function() {
    // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
    // $('.promo2-url').show();
    // $('.promo1-url, .promo2-url, .clearance-url').show();
    //  $('.promo1-url.girl').show();
    //  $('.promo1-url').show();
     $('.promo3-url').show();
    // $('.promo1-url').hide();
    // $('.promo2-url').hide();
    // $('.clearance-url').hide();
  }, function() {
    // $('.promo2-url').hide();
    $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  });

  $('.dept-boy').hover(function() {
    // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
    // $('.promo2-url').show();
    // $('.promo1-url, .promo2-url, .clearance-url').show();
    // $('.promo1-url.boy').show();
    // $('.promo1-url').show();
    $('.promo3-url').show();
    // $('.promo1-url').hide();
    // $('.promo2-url').hide();
    // $('.clearance-url').hide();
  }, function() {
    // $('.promo2-url').hide();
    $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  });

  $('.dept-sale').hover(function() {
    // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
    // $('.promo1-url').show();
      // $('.promo2-url').show();
    $('.promo3-url').show();
    // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').show();
    // $('.promo1-url.girl').show();
    // $('.promo2-url.girl').show();
    // $('.promo1-url').hide();
    // $('.promo2-url').hide();
    // $('.clearance-url').hide();
  }, function() {
    // $('.promo1-url').hide();
    $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  });

  $('.dept-swim').hover(function() {
    // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
    // $('.promo1-url.swim').show();
    // $('.promo2-url').show();
    // $('.promo1-url, .promo2-url, .clearance-url').show();
    // $('.promo1-url.girl').show();
    // $('.promo1-url').hide();
    // $('.promo2-url').hide();
    // $('.clearance-url').hide();
  }, function() {
    // $('.promo1-url').hide();
    $('.promo1-url, .promo2-url, .clearance-url').hide();
  });



  $('.dept-baby').hover(function() {
    // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
    // $('.promo1-url').show();
    //  $('.promo2-url').show();
    $('.promo3-url').show();
    // $('.promo1-url, .promo2-url, .clearance-url').show();
    // $('.promo1-url.baby-girl').show();
    // $('.promo1-url').hide();
    // $('.promo2-url').hide();
    // $('.clearance-url').hide();
  }, function() {
    // $('.promo1-url').hide();
    $('.promo1-url, .promo2-url, .clearance-url').hide();
  });



  $('.site-nav-submenu .bar>div').hover(function() {
    var href = $(this).find('a').first().attr('href');
    // console.log(href);

    $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();

    if (href.indexOf('sale') == -1) {
      switchNewArrivals(href);
    } else {
      switchSale(href);
    }

  }, function() {

  });

});