"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchNewArrivals = void 0;

var _urls = require("./urls.js");

var switchNewArrivals = function switchNewArrivals(href) {
  var promo1 = href;
  var promo2 = href;
  var clearance = href;

  switch (href) {
    case '/girls-clothing/new-arrivals':
      // promo1 = urls.promo.blackFriday.promo;
      promo1 = _urls.urls.promo.blackFriday.girl;
      promo2 = _urls.urls.promo.blackFriday.girl;
      clearance = _urls.urls.promo.clearance.girl; // $('.promo1-url.girl').show();

      $('.promo1-url').show(); // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();

      $('.promo2-url').hide(); // $('.clearance-url').hide();

      break;

    case '/boys-clothing/new-arrivals':
      // promo1 = urls.promo.blackFriday.promo;
      promo1 = _urls.urls.promo.blackFriday.boy;
      promo2 = _urls.urls.promo.blackFriday.boy;
      clearance = _urls.urls.promo.clearance.boy; // $('.promo1-url.boy').show();

      $('.promo1-url').show(); // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();

      $('.promo2-url').hide(); // $('.clearance-url').hide();

      break;

    case '/baby-girl-clothes/new-arrivals':
      // promo1 = urls.promo.blackFriday.promo;
      promo1 = _urls.urls.promo.blackFriday.baby.girl;
      promo2 = _urls.urls.promo.blackFriday.baby.girl;
      clearance = _urls.urls.promo.clearance.baby.girl; // $('.promo1-url.baby-girl').show();

      $('.promo1-url').show(); // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();

      $('.promo2-url').hide(); // $('.clearance-url').hide();

      break;

    case '/baby-boy-clothes/new-arrivals':
      // promo1 = urls.promo.blackFriday.promo;
      promo1 = _urls.urls.promo.blackFriday.baby.boy;
      promo2 = _urls.urls.promo.blackFriday.baby.boy;
      clearance = _urls.urls.promo.clearance.baby.boy; // $('.promo1-url.baby-boy').show();

      $('.promo1-url').show(); // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();

      $('.promo2-url').hide(); // $('.clearance-url').hide();

      break;

    case '/toddler-girls-clothes/favorites/new-arrivals':
      // promo1 = urls.promo.blackFriday.promo;
      promo1 = _urls.urls.promo.blackFriday.toddler.girl;
      promo2 = _urls.urls.promo.blackFriday.toddler.girl;
      clearance = _urls.urls.promo.clearance.toddler.girl; // $('.promo1-url.toddler-girl').show();

      $('.promo1-url').show(); // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();

      $('.promo2-url').hide(); // $('.clearance-url').hide();

      break;

    case '/toddler-boys-clothes/favorites/new-arrivals':
      // promo1 = urls.promo.blackFriday.promo;
      promo1 = _urls.urls.promo.blackFriday.toddler.boy;
      promo2 = _urls.urls.promo.blackFriday.toddler.boy;
      clearance = _urls.urls.promo.clearance.toddler.boy; // $('.promo1-url.toddler-boy').show();

      $('.promo1-url').show(); // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();

      $('.promo2-url').hide(); // $('.clearance-url').hide();

      break;

    case '/newborn-clothes/favorites/new-arrivals':
    case '/newborn-clothes/':
      // promo1 = urls.promo.blackFriday.promo;
      promo1 = _urls.urls.promo.blackFriday.baby.newborn;
      promo2 = _urls.urls.promo.blackFriday.baby.newborn;
      clearance = _urls.urls.promo.clearance.baby.newborn; // $('.promo1-url.newborn').show();

      $('.promo1-url').show(); // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();

      $('.promo2-url').hide(); // $('.clearance-url').hide();

      break;

    case '/swim-shop':
      promo1 = _urls.urls.promo.swim; // promo1 = urls.promo.blackFriday.girl;

      promo2 = _urls.urls.promo.blackFriday.girl;
      clearance = _urls.urls.promo.clearance.girl; // $('.promo1-url.swim').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    default:
      break;
  }

  $('.promo1-url').attr('href', promo1);
  $('.promo2-url').attr('href', promo2);
  $('.promo3-url').attr('href', promo1);
  $('.clearance-url').attr('href', clearance);
};

exports.switchNewArrivals = switchNewArrivals;
//# sourceMappingURL=switch-new-arrivals.js.map
