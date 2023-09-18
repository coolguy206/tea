"use strict";

var _inview = require("./inview.js");

$(document).ready(function () {
  (0, _inview.inview)('.bubble');
  var ls = "230911-promo";
  var url = window.location.href;

  if (url.indexOf('?') !== -1) {
    url = url.split('?')[1];
    url = url.split('&');
    var str = "utm_campaign=".concat(ls);
    url.map(function (val, i) {
      console.log(val, i);

      if (val == str) {
        localStorage.setItem(ls, "true");
        console.log("localstorage set");
      }
    });
  }

  var bubble = localStorage.getItem(ls);

  if (bubble) {
    console.log("found localstorage ".concat(ls));
    $(".bubble").css("display", "block");
  }

  var theUrl = window.location.pathname;

  switch (theUrl) {
    case "/warehousesale":
    case "/warehousesale-girl":
    case "/warehousesale-boy":
    case "/warehousesale-baby-girl":
    case "/warehousesale-baby-boy":
      $(".bubble").css("display", "none");
      break;
  }
});
//# sourceMappingURL=scripts.js.map
