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

    if(url !== '/'){
        $('.the-promo').show();
    }

    $('.the-promo .see-details').fancybox();

    $('.close-fancy').click(function(e) {
        // e.preventDefault();
        $.fancybox.close();
    });

});