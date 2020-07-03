"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchNewArrivals = void 0;

var _urls = require("./urls.js");

var switchNewArrivals = function switchNewArrivals(href) {
  var promo1 = href;
  var promo2 = href;

  switch (href) {
    case '/girls-clothing/new-arrivals':
      promo1 = _urls.urls.promo1.sale.girl;
      promo2 = _urls.urls.promo2.girl;
      $('.promo1-url, .promo2-url').show();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    case '/boys-clothing/new-arrivals':
      promo1 = _urls.urls.promo1.sale.boy;
      promo2 = _urls.urls.promo2.boy;
      $('.promo1-url, .promo2-url').show();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    case '/baby-girl-clothes/new-arrivals':
      promo1 = _urls.urls.promo1.sale.baby.girl;
      promo2 = _urls.urls.promo2.baby.girl;
      $('.promo1-url, .promo2-url').show();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    case '/baby-boy-clothes/new-arrivals':
      promo1 = _urls.urls.promo1.sale.baby.boy;
      promo2 = _urls.urls.promo2.baby.boy;
      $('.promo1-url, .promo2-url').show();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    case '/toddler-girls-clothes/favorites/new-arrivals':
      promo1 = _urls.urls.promo1.sale.toddler.girl;
      promo2 = _urls.urls.promo2.toddler.girl;
      $('.promo1-url, .promo2-url').show();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    case '/toddler-boys-clothes/favorites/new-arrivals':
      promo1 = _urls.urls.promo1.sale.toddler.boy;
      promo2 = _urls.urls.promo2.toddler.boy;
      $('.promo1-url, .promo2-url').show();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    case '/newborn-clothes/favorites/new-arrivals':
    case '/newborn-clothes/':
      promo1 = _urls.urls.promo1.sale.baby.newborn;
      promo2 = _urls.urls.promo2.baby.newborn;
      $('.promo1-url').show();
      $('.promo2-url').hide();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    case '/tween-girls-clothing/favorites/new-arrivals':
      promo1 = _urls.urls.promo1.sale.tween;
      promo2 = _urls.urls.promo2.tween;
      $('.promo1-url, .promo2-url').show();
      $('.promo1-url').attr('href', promo1);
      $('.promo2-url').attr('href', promo2);
      break;

    default:
      break;
  }
};

exports.switchNewArrivals = switchNewArrivals;
//# sourceMappingURL=switch-new-arrivals.js.map
