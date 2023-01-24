import {
  inview
} from './inview.js';

$(document).ready(function () {
  inview('.container-promo-header');
  var a = $('.container-promo-header a');
  a.map((i, val) => {
    //console.log(val);
    $(val).addClass('sale-category-header')
  })
});