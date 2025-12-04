"use strict";

//? CODE REFRENCE FOR BLACK FRIDAY PROMO MANAGEMENT

//? BLACK FRIDAY ADD CLASS IF NEEDED
$('.promos .the-promo').addClass('bf');

//? BLACK FRIDAY HIDE PROMOS AND SHOW COUNTDON IF NEEDED
$('.promos').css('display', 'none');
$('.promos.countdown').css('display', 'block');

//   //? CLONE COUNTDOWN AND ADD UNDER BANNER FOR BLACK FRIDAY
$('header.site-header .promos').after($('.the-promo.countdown-promo').clone());
$('header.site-header').prepend($('.promos.countdown').clone());
