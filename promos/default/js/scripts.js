jQuery(document).ready(function() {
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

  const url = window.location.pathname;

  // if (url !== '/') {
  //   $('.promos').show();
  //   $('.free-shipping-150').show();
  // }

  // if (url == '/') {
  //   $('.header-banner').css('max-width', '100%');
  //   $('.free-shipping-150').css('position', 'relative');
  //   $('.free-shipping-150').show();
  // }

  //? CLONE .PROMOS AND APPEND TO HEADER.SITE-HEADER
  if($('header.site-header .promos').length == 0) {
    console.log(`cloning .promos`);
    $('header.site-header').prepend($('.promos').clone());
  } else {
    console.log(`.promos already cloned`);
  }
  

  $('.the-promo .see-details').fancybox({
    helpers: {
      overlay: null
    }
  });

  $('.close-fancy').click(function(e) {
    // e.preventDefault();
    $.fancybox.close();

  });

  $('.promos-wrap').bxSlider({
      auto: true,
      autoHover: true,
      mode: 'fade',
      controls: false,
      pager: false,
      pause: 2500,
      // onSliderLoad:function(){
      //     $('.promos.promo2, .promos.promo3').show();
      // }
  });

});