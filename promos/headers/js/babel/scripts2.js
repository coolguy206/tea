"use strict";

var _inview = require("./inview.js");

$(document).ready(function () {
  (0, _inview.inview)('.container-promo-header');
  var a = $('.container-promo-header a');
  a.map(function (i, val) {
    //console.log(val);
    $(val).addClass('sale-category-header');
  });
});
//# sourceMappingURL=scripts2.js.map
