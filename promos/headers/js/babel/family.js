"use strict";

var _inview = require("./inview.js");
$(document).ready(function () {
  (0, _inview.inview)('.container-promo-header');
  var url = window.location.pathname;
  var title = "";
  switch (url) {
    case "/family-outfitting/swim":
      title = "Family Swim";
      break;
    case "/family-outfitting/adult":
      title = "Adult Styles";
      break;
    case "/sibling-shop":
      title = "Sibling Shop";
      break;
  }
  $('.container-promo-header h1').text(title);
});
//# sourceMappingURL=family.js.map
