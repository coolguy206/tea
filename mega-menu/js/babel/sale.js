"use strict";

var _switchNewArrivals = require("./switch-new-arrivals.js");
var _switchSale = require("./switch-sale.js");
var _inview = require("./inview.js");
$(document).ready(function () {
  // $('.menu .swimwear').text('$15 Swim');

  (0, _inview.inview)('.mega-img-container, .mega-img-bf');
  $('.dept-girl').hover(function () {
    // $('.promo1-url, .promo2-url, .clearance-url').show();
    // $('.promo1-url').hide();
    $('.promo1-url.girl').show();
    // $('.promo1-url').show();
    // $('.promo2-url').show();
    //  $('.promo3-url').show();
    //  $('.clearance-url').show();
    // $('.promo2-url').hide();
    // $('.clearance-url').hide();
    // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  }, function () {
    // $('.promo2-url').hide();
    $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  });
  $('.dept-boy').hover(function () {
    // $('.promo1-url, .promo2-url, .clearance-url').show();
    // $('.promo1-url').hide();
    $('.promo1-url.boy').show();
    // $('.promo1-url').show();
    // $('.promo2-url').show();
    // $('.promo3-url').show();
    // $('.clearance-url').show();
    // $('.promo2-url').hide();
    // $('.clearance-url').hide();
    // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  }, function () {
    // $('.promo2-url').hide();
    $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  });
  $('.dept-sale').hover(function () {
    // $('.promo1-url').show();
    $('.promo1-url.girl').show();
    // $('.promo2-url').show();
    // $('.promo3-url').show();
    // $('.clearance-url').show();
    // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').show();
    // $('.promo1-url.girl').show();
    // $('.promo2-url.girl').show();
    // $('.promo1-url').hide();
    // $('.promo2-url').hide();
    // $('.clearance-url').hide();
    // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  }, function () {
    // $('.promo1-url').hide();
    $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  });
  $('.dept-swim').hover(function () {
    // $('.promo1-url.swim').show();
    // $('.promo1-url').show();
    // $('.promo2-url').show();
    // $('.promo3-url').show();
    // $('.clearance-url').show();
    // $('.promo1-url, .promo2-url, .clearance-url').show();
    $('.promo1-url.girl').show();
    // $('.promo1-url').hide();
    // $('.promo2-url').hide();
    // $('.clearance-url').hide();
    // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  }, function () {
    // $('.promo1-url').hide();
    $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  });
  $('.dept-baby').hover(function () {
    // $('.promo1-url').show();
    //  $('.promo2-url').show();
    // $('.promo3-url').show();
    // $('.clearance-url').show();
    // $('.promo1-url, .promo2-url, .clearance-url').show();
    // $('.promo1-url').hide();
    $('.promo1-url.baby-girl').show();
    // $('.promo1-url.baby-boy').show();
    // $('.promo2-url').hide();
    // $('.clearance-url').hide();
    // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  }, function () {
    // $('.promo1-url').hide();
    $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
  });
  $('.site-nav-submenu .bar>div').hover(function () {
    var href = $(this).find('a').first().attr('href');
    // console.log(href);

    $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').hide();
    if (href.indexOf('sale') == -1) {
      (0, _switchNewArrivals.switchNewArrivals)(href);
    } else {
      (0, _switchSale.switchSale)(href);
    }
  }, function () {});
});
//# sourceMappingURL=sale.js.map
