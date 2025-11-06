"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchSale = void 0;
var _urls = require("./urls.js");
var _promoVars = require("./promo-vars.js");
// import { promoVars } from './promo-sale-vars.js';

var switchSale = exports.switchSale = function switchSale(href) {
  var promo1 = href;
  var promo2 = href;
  var promo3 = href;
  var clearance = href;
  var showPromo1 = _promoVars.promoVars.showPromo1,
    showPromo2 = _promoVars.promoVars.showPromo2,
    showPromo3 = _promoVars.promoVars.showPromo3,
    promo1Elem = _promoVars.promoVars.promo1Elem,
    promo2Elem = _promoVars.promoVars.promo2Elem,
    promo3Elem = _promoVars.promoVars.promo3Elem,
    girl = _promoVars.promoVars.girl,
    boy = _promoVars.promoVars.boy,
    babyGirl = _promoVars.promoVars.babyGirl,
    babyBoy = _promoVars.promoVars.babyBoy,
    toddlerGirl = _promoVars.promoVars.toddlerGirl,
    toddlerBoy = _promoVars.promoVars.toddlerBoy,
    newborn = _promoVars.promoVars.newborn,
    showNewborn = _promoVars.promoVars.showNewborn,
    swim = _promoVars.promoVars.swim,
    dress = _promoVars.promoVars.dress;
  switch (href) {
    case '/sale/girls-clothing/view-all':
      promo1 = _urls.urls.promo.girl;
      promo2 = _urls.urls.promo.select.girl;
      promo3 = _urls.urls.promo.sale.girl;
      clearance = _urls.urls.promo.clearance.girl;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.girl !== "") {
          $(_promoVars.promoVars.girl).show();
        } else {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.girl').show();
      // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    case '/sale/boys-clothing/view-all':
      promo1 = _urls.urls.promo.boy;
      promo2 = _urls.urls.promo.select.boy;
      promo3 = _urls.urls.promo.sale.boy;
      clearance = _urls.urls.promo.clearance.boy;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.boy !== "") {
          $(_promoVars.promoVars.boy).show();
        } else {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.boy').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    case '/sale/baby-girl-clothes/view-all':
      promo1 = _urls.urls.promo.baby.girl;
      promo2 = _urls.urls.promo.select.baby.girl;
      promo3 = _urls.urls.promo.sale.baby.girl;
      clearance = _urls.urls.promo.clearance.baby.girl;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.babyGirl !== "") {
          $(_promoVars.promoVars.babyGirl).show();
        } else {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.baby-girl').show();
      // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    case '/sale/baby-boy-clothes/view-all':
      promo1 = _urls.urls.promo.baby.boy;
      promo2 = _urls.urls.promo.select.baby.boy;
      promo3 = _urls.urls.promo.sale.baby.boy;
      clearance = _urls.urls.promo.clearance.baby.boy;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.babyBoy !== "") {
          $(_promoVars.promoVars.babyBoy).show();
        } else {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.baby-boy').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    case '/sale/toddler-girls-clothing/view-all':
      promo1 = _urls.urls.promo.toddler.girl;
      promo2 = _urls.urls.promo.select.toddler.girl;
      promo3 = _urls.urls.promo.sale.toddler.girl;
      clearance = _urls.urls.promo.clearance.toddler.girl;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.toddlerGirl !== "") {
          $(_promoVars.promoVars.toddlerGirl).show();
        } else {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.toddler-girl').show();
      // $('.promo1-url, .promo2-url, .promo3-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    case '/sale/toddler-boys-clothing/view-all':
      promo1 = _urls.urls.promo.toddler.boy;
      promo2 = _urls.urls.promo.select.toddler.boy;
      promo3 = _urls.urls.promo.sale.toddler.boy;
      clearance = _urls.urls.promo.clearance.toddler.boy;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.toddlerBoy !== "") {
          $(_promoVars.promoVars.toddlerBoy).show();
        } else {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      // $('.promo2-url.toddler-boy').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    case '/sale/newborn-clothing/view-all':
      promo1 = _urls.urls.promo.baby.newborn;
      promo2 = _urls.urls.promo.select.baby.newborn;
      promo3 = _urls.urls.promo.sale.baby.newborn;
      clearance = _urls.urls.promo.clearance.baby.newborn;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars.newborn !== "") {
          $(_promoVars.promoVars.newborn).show();
        } else if (_promoVars.promoVars.showNewborn) {
          $(_promoVars.promoVars.promo1Elem).show();
        }
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }

      // $('.promo3-url').show();
      // $('.clearance-url').show();
      //  $('.promo2-url.newborn').show();
      // $('.promo1-url, .promo2-url, .clearance-url').show();
      // $('.clearance-url').hide();

      break;
    default:
      break;
  }
  $('.promo1-url').attr('href', promo1);
  $('.promo2-url').attr('href', promo2);
  $('.promo3-url').attr('href', promo3);
  $('.clearance-url').attr('href', clearance);
};
