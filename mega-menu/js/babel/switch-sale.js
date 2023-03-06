"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchSale = void 0;

var _urls = require("./urls.js");

var switchSale = function switchSale(href) {
  var promo1 = href;
  var promo2 = href;
  var clearance = href;

  switch (href) {
    case '/sale/girls-clothing/view-all':
      promo1 = _urls.urls.promo.promo; // promo1 = urls.promo.girl;

      promo2 = _urls.urls.promo.sale.girl;
      clearance = _urls.urls.promo.clearance.girl; // $('.promo1-url').show();

      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();
      // $('.promo2-url').show();
      // $('.clearance-url').hide();

      break;

    case '/sale/boys-clothing/view-all':
      promo1 = _urls.urls.promo.promo; // promo1 = urls.promo.boy;

      promo2 = _urls.urls.promo.sale.boy;
      clearance = _urls.urls.promo.clearance.boy; // $('.promo1-url').show();

      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();
      // $('.promo2-url').show();
      // $('.clearance-url').hide();

      break;

    case '/sale/baby-girl-clothes/view-all':
      promo1 = _urls.urls.promo.promo; // promo1 = urls.promo.baby.girl;

      promo2 = _urls.urls.promo.sale.baby.girl;
      clearance = _urls.urls.promo.clearance.baby.girl; // $('.promo1-url').show();

      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();
      // $('.promo2-url').show();
      // $('.clearance-url').hide();

      break;

    case '/sale/baby-boy-clothes/view-all':
      promo1 = _urls.urls.promo.promo; // promo1 = urls.promo.baby.boy;

      promo2 = _urls.urls.promo.sale.baby.boy;
      clearance = _urls.urls.promo.clearance.baby.boy; // $('.promo1-url').show();

      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/toddler-girls-clothing/view-all':
      promo1 = _urls.urls.promo.promo; // promo1 = urls.promo.toddler.girl;

      promo2 = _urls.urls.promo.sale.toddler.girl;
      clearance = _urls.urls.promo.clearance.toddler.girl; // $('.promo1-url').show();

      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/toddler-boys-clothing/view-all':
      promo1 = _urls.urls.promo.promo; // promo1 = urls.promo.toddler.boy;

      promo2 = _urls.urls.promo.sale.toddler.boy;
      clearance = _urls.urls.promo.clearance.toddler.boy; // $('.promo1-url').show();

      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();
      // $('.promo2-url').hide();
      // $('.clearance-url').hide();

      break;

    case '/sale/newborn-clothing/view-all':
      promo1 = _urls.urls.promo.promo; // promo1 = urls.promo.baby.newborn;

      promo2 = _urls.urls.promo.sale.baby.newborn;
      clearance = _urls.urls.promo.clearance.baby.newborn; // $('.promo1-url').show();

      $('.promo1-url, .promo2-url, .clearance-url').show(); // $('.promo1-url').hide();
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

exports.switchSale = switchSale;
//# sourceMappingURL=switch-sale.js.map
