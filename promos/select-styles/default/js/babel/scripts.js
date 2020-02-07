"use strict";

jQuery(document).ready(function () {
  var first = $('.the-promo').find('.span-wrap').clone();
  var shopNow = $('.the-promo').find('.shop-now').clone();
  $('.hp-promo div').append(first, shopNow);
  var url = window.location.pathname;

  if (url == '/') {
    $('.hp-promo').show();
    $('.hp').before($('.hp-promo'));
  } else {
    $('.the-promo').show();
  }

  $('.the-promo .see-details').fancybox();
  $('.close-fancy').click(function (e) {
    // e.preventDefault();
    $.fancybox.close();
  });
});
//# sourceMappingURL=scripts.js.map
