"use strict";

//? CODE REFRENCE FOR PUTTING PROMO IN FOOTER ON MOBILE AND SHOW ON SCROLL

//? on mobile clone the promo & put in the footer. when scroll show it
$('.the-banner-footer-container').prepend($('.promos').clone());
$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();
  // console.log(scrollTop);

  if (scrollTop > 216) {
    $('.the-banner-footer-container .promos').addClass('show-the-banner');
  } else {
    $('.the-banner-footer-container .promos').removeClass('show-the-banner');
  }
});
