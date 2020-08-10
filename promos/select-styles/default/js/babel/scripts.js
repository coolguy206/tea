"use strict";

jQuery(document).ready(function () {
  /*
      const first = $('.the-promo').find('.span-wrap').clone();
      const shopNow = $('.the-promo').find('.shop-now').clone();
      // $('.hp-promo div').append(first, shopNow);
      $('.hp-promo div').append(shopNow);
       const url = window.location.pathname;
       if(url == '/'){
          $('.hp-promo').show();
          $('.hp').before($('.hp-promo'));
      } else {
          $('.the-promo').show();
      }
      
  */
  var url = window.location.pathname;

  if (url !== '/') {
    $('.promos').show();
  }

  $('.the-promo .see-details').fancybox({
    helpers: {
      overlay: null
    }
  });
  $('.close-fancy').click(function (e) {
    // e.preventDefault();
    $.fancybox.close();
  }); // $('.promos-wrap').bxSlider({
  //     auto: true,
  //     autoHover: true,
  //     mode: 'fade',
  //     onSliderLoad:function(){
  //         $('.promos.promo2, .promos.promo3').show();
  //     }
  // });
});
//# sourceMappingURL=scripts.js.map
