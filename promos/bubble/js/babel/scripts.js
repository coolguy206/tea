"use strict";

var _inview = require("./inview.js");

$(document).ready(function () {
  (0, _inview.inview)('.bubble');
  var url = window.location.href;

  if (url.indexOf('?') !== -1) {
    url = url.split('?')[1];
    url = url.split('&');
    url.map(function (val, i) {
      console.log(val, i);

      if (val == "utm_campaign=babywarehousebubble") {
        localStorage.setItem("bubble", "true");
        console.log("localstorage set");
      }
    });
  }

  var bubble = localStorage.getItem("bubble");

  if (bubble) {
    console.log("found localstorage bubble");
    $(".bubble").css("display", "block");
  }

  var theUrl = window.location.pathname;

  switch (theUrl) {
    case "/baby-warehouse-sale":
    case "/newborn-warehouse-sale":
    case "/baby-girl-warehouse-sale":
    case "/baby-boy-warehouse-sale":
    case "/toddler-warehouse-sale":
      $(".bubble").css("display", "none");
      break;
  }
});
//# sourceMappingURL=scripts.js.map
