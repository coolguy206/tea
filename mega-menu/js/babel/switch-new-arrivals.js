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
      // promo1 = urls.promo1.babyPromo;
      promo1 = _urls.urls.promo1.girl;
      promo2 = _urls.urls.promo2.girl;
      clearance = _urls.urls.promo2.girl;
      $('.promo1-url').show(); // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/boys-clothing/new-arrivals':
      // promo1 = urls.promo1.babyPromo;
      promo1 = _urls.urls.promo1.boy;
      promo2 = _urls.urls.promo2.boy;
      clearance = _urls.urls.promo2.boy;
      $('.promo1-url').show(); // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/baby-girl-clothes/new-arrivals':
      promo1 = _urls.urls.promo1.baby.girl;
      promo2 = _urls.urls.promo2.baby.girl;
      clearance = _urls.urls.promo2.baby.girl;
      $('.promo1-url').show(); // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/baby-boy-clothes/new-arrivals':
      promo1 = _urls.urls.promo1.baby.boy;
      promo2 = _urls.urls.promo2.baby.boy;
      clearance = _urls.urls.promo2.baby.boy;
      $('.promo1-url').show(); // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/toddler-girls-clothes/favorites/new-arrivals':
      // promo1 = urls.promo1.babyPromo;
      promo1 = _urls.urls.promo1.toddler.girl;
      promo2 = _urls.urls.promo2.toddler.girl;
      clearance = _urls.urls.promo2.toddler.girl;
      $('.promo1-url').show(); // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/toddler-boys-clothes/favorites/new-arrivals':
      // promo1 = urls.promo1.babyPromo;
      promo1 = _urls.urls.promo1.toddler.boy;
      promo2 = _urls.urls.promo2.toddler.boy;
      clearance = _urls.urls.promo2.toddler.boy;
      $('.promo1-url').show(); // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/newborn-clothes/favorites/new-arrivals':
    case '/newborn-clothes/':
      promo1 = _urls.urls.promo1.baby.newborn;
      promo2 = _urls.urls.promo2.baby.newborn;
      clearance = _urls.urls.promo2.baby.newborn; // $('.promo1-url').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/tween-girls-clothing/favorites/new-arrivals':
      promo1 = _urls.urls.promo1.tween;
      promo2 = _urls.urls.promo1.tween;
      clearance = _urls.urls.promo2.tween;
      $('.promo1-url, .promo2-url, .clearance-url').show();
      $('.promo1-url').hide();
      $('.promo2-url').hide();
      $('.clearance-url').hide();
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
