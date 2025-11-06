"use strict";

var _inview = require("./inview.js");
$(document).ready(function () {
  //expand sidebar
  // $('.shops h2').addClass('open');
  // $('.shops .links').css('display', 'block');
  // $('.shops h2 span').attr('class', 'fas fa-minus');

  (0, _inview.inview)('.container-black-friday');
  var url = window.location.pathname;

  //? CHANGE THE COLOR OF THE SIDE NAV DROPDOWN
  $('.category-page .nav .side-nav ul li h2.open')[0].style.color = '#D05F9A';

  /*
  //? ADD BLACK FRIDAY TO THE TITLE
  var title = $('.main-title').text();
  if (title !== `Black Friday` || title !== `Shop All Black Friday`) {
    var cat = url.split('/')[2];
    var price = url.split('/')[3];
    if (cat !== undefined) {
      switch (cat) {
        case `girl`:
        case `boy`:
        case `baby-girl`:
        case `baby-boy`:
        case `toddler-girl`:
        case `toddler-boy`:
        case `newborn`:
            if (cat.indexOf('-') !== -1) {
            cat = cat.replace(/-/, ' ');
          }
            if (price == undefined) {
            title = `${title} Black Friday`;
          } else {
            title = `${title} ${cat} Black Friday`;
          }
            break;
        default:
          title = `${title} Black Friday`;
          break;
      }
    }
    $('.main-title').text(title);
  }
  */

  var bfClass = url.replace(/\//g, '-').replace('-', '');
  $('.container-black-friday').addClass(bfClass);

  /*
  //? ADD 50% OFF NEWBORN TO DESKTOP SIDE NAV BECAUSE NEWBORN NOT IN BLACK FRIDAY CATEGORIES...
  if (url !== `/newborn-clothing` || url !== `/newborn-clothes/shop-by-category/rompers` || url !== `/newborn-dresses` || url !== `/newborn-clothes/shop-by-category/outfits` || url !== `/newborn-clothes/newborn-accessories` || url !== `/newborn-clothes/newborn-tops-and-bottoms`) {
      $($('.category-page .nav .side-nav ul li .links ul')[0]).append('<li><a href="/newborn-clothing" title="50% Off Newborn">50% Off Newborn</a></li>');
      //? CHANGE THE COLOR OF THE SIDE NAV DROPDOWN
    $('.category-page .nav .side-nav ul li h2.open')[0].style.color = '#D05F9A';
    }
  */
});
