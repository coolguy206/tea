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

  var links = $('.category-page .nav .side-nav ul li .links ul li a');
  links.map((i, val) => {
    console.log($(val).text());
    var str = $(val).text();
    if (str == `Warehouse Sale: Up to 75% Off `) {
      $(val).hide();
    }
  })
});