"use strict";

var _urls = require("./urls");
$(document).ready(function () {
  var href = window.location.pathname;

  // Map each route to its corresponding index and key inside your exported urls array
  var routeMap = {
    '/swimwear': _urls.urls[0]["default"],
    '/girls-swimsuits-swimwear': _urls.urls[1].girl,
    '/boys-swimwear': _urls.urls[2].boy,
    '/baby-swimwear': _urls.urls[3].baby,
    '/toddler-swimwear': _urls.urls[4].toddler
  };
  var makeCtas = function makeCtas(arr) {
    if (!arr) return;
    arr.forEach(function (val) {
      var lowerText = val.text.toLowerCase().trim();
      var targetWords = ['girl', 'boy', 'baby', 'toddler', 'family'];
      var displayText = targetWords.includes(lowerText) ? "Shop ".concat(val.text) : val.text;
      var elem = "<a href=\"".concat(val.url, "\" class=\"\">\n                    <div class=\"the-cta\">\n                      <span class=\"cta-border a\">").concat(displayText, "</span>\n                    </div>\n                  </a>");
      $(".container-promo-header .the-content.select-styles").append(elem);
    });
  };

  // Dynamically passes the correct array using the adjusted routeMap
  makeCtas(routeMap[href]);
});
