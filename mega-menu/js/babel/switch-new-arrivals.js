"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchNewArrivals = void 0;
var _urls = require("./urls.js");
var _promoVars = require("./promo-vars.js");
var switchNewArrivals = exports.switchNewArrivals = function switchNewArrivals(href) {
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
    case '/girls-clothes':
      promo1 = _urls.urls.promo.thePromo.girl;
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
      break;
    case '/boys-clothes':
      promo1 = _urls.urls.promo.thePromo.boy;
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
      break;
    case '/baby-clothes':
      promo1 = _urls.urls.promo.thePromo.baby.baby;
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
      break;

    // case '/baby-girl-clothes/new-arrivals':
    //   promo1 =urls.promo.new.baby.girl;
    //   promo2 = urls.promo.select.baby.girl;
    //   promo3 = urls.promo.sale.baby.girl;
    //   clearance = urls.promo.clearance.baby.girl;

    //   if (promoVars.showPromo1) {
    //     if (promoVars.babyGirl !== ``) {
    //       $(promoVars.babyGirl).show();
    //     } else {
    //       $(promoVars.promo1Elem).show();
    //     }
    //   }

    //   if (promoVars.showPromo2) {
    //     $(promoVars.promo2Elem).show();
    //   }

    //   if (promoVars.showPromo3) {
    //     $(promoVars.promo3Elem).show();
    //   }

    //   break;

    // case '/baby-boy-clothes/new-arrivals':
    //   promo1 =urls.promo.new.baby.boy;
    //   promo2 = urls.promo.select.baby.boy;
    //   promo3 = urls.promo.sale.baby.boy;
    //   clearance = urls.promo.clearance.baby.boy;

    //   if (promoVars.showPromo1) {
    //     if (promoVars.babyBoy !== ``) {
    //       $(promoVars.babyBoy).show();
    //     } else {
    //       $(promoVars.promo1Elem).show();
    //     }
    //   }

    //   if (promoVars.showPromo2) {
    //     $(promoVars.promo2Elem).show();
    //   }

    //   if (promoVars.showPromo3) {
    //     $(promoVars.promo3Elem).show();
    //   }

    //   break;

    case '/toddler-clothes':
      promo1 = _urls.urls.promo.thePromo.toddler.toddler;
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
      break;

    // case '/toddler-girls-clothes/favorites/new-arrivals':
    //   promo1 =urls.promo.new.toddler.girl;
    //   promo2 = urls.promo.select.toddler.girl;
    //   promo3 = urls.promo.sale.toddler.girl;
    //   clearance = urls.promo.clearance.toddler.girl;

    //   if (promoVars.showPromo1) {
    //     if (promoVars.toddlerGirl !== ``) {
    //       $(promoVars.toddlerGirl).show();
    //     } else {
    //       $(promoVars.promo1Elem).show();
    //     }
    //   }

    //   if (promoVars.showPromo2) {
    //     $(promoVars.promo2Elem).show();
    //   }

    //   if (promoVars.showPromo3) {
    //     $(promoVars.promo3Elem).show();
    //   }

    //   break;

    // case '/toddler-boys-clothes/favorites/new-arrivals':
    //   promo1 =urls.promo.new.toddler.boy;
    //   promo2 = urls.promo.select.toddler.boy;
    //   promo3 = urls.promo.sale.toddler.boy;
    //   clearance = urls.promo.clearance.toddler.boy;

    //   if (promoVars.showPromo1) {
    //     if (promoVars.toddlerBoy !== ``) {
    //       $(promoVars.toddlerBoy).show();
    //     } else {
    //       $(promoVars.promo1Elem).show();
    //     }
    //   }

    //   if (promoVars.showPromo2) {
    //     $(promoVars.promo2Elem).show();
    //   }

    //   if (promoVars.showPromo3) {
    //     $(promoVars.promo3Elem).show();
    //   }

    //   break;

    case '/newborn-clothes/favorites/new-arrivals':
    case '/newborn-clothes/':
      // promo1 =urls.promo.new.baby.newborn;
      promo1 = _urls.urls.promo.thePromo.promo;
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
      break;

    // case '/swim-shop':
    //   promo1 =urls.promo.new.select.swim;
    //   promo1 =urls.promo.new.promo;
    //   promo2 = urls.promo.select.promo;
    //   promo3 = urls.promo.sale.promo;
    //   clearance = urls.promo.clearance.girl;

    //   if (promoVars.showPromo1) {
    //     if (promoVars.swim !== ``) {
    //       $(promoVars.swim).show();
    //     } else {
    //       $(promoVars.promo1Elem).show();
    //     }
    //   }

    //   if (promoVars.showPromo1) {
    //     $(promoVars.promo1Elem).show();
    //   }

    //   if (promoVars.showPromo2) {
    //     $(promoVars.promo2Elem).show();
    //   }

    //   if (promoVars.showPromo3) {
    //     $(promoVars.promo3Elem).show();
    //   }

    //   break;

    case '/print-shop':
      promo1 = _urls.urls.promo.thePromo.promo.promo;
      promo2 = _urls.urls.promo.select.promo;
      promo3 = _urls.urls.promo.sale.promo;
      clearance = _urls.urls.promo.clearance.girl;

      // if (promoVars.showPromo1) {
      //   if (promoVars.swim !== ``) {
      //     $(promoVars.swim).show();
      //   } else {
      //     $(promoVars.promo1Elem).show();
      //   }
      // }

      if (_promoVars.promoVars.showPromo1) {
        $(_promoVars.promoVars.promo1Elem).show();
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }
      break;
    case '/sibling-shop':
      promo1 = _urls.urls.promo.thePromo.family;
      promo2 = _urls.urls.promo.select.promo;
      promo3 = _urls.urls.promo.sale.promo;
      clearance = _urls.urls.promo.clearance.girl;

      // if (promoVars.showPromo1) {
      //   if (promoVars.swim !== ``) {
      //     $(promoVars.swim).show();
      //   } else {
      //     $(promoVars.promo1Elem).show();
      //   }
      // }

      if (_promoVars.promoVars.showPromo1) {
        $(_promoVars.promoVars.promo1Elem).show();
      }
      if (_promoVars.promoVars.showPromo2) {
        $(_promoVars.promoVars.promo2Elem).show();
      }
      if (_promoVars.promoVars.showPromo3) {
        $(_promoVars.promoVars.promo3Elem).show();
      }
      break;

    // case '/dresses':
    //   // promo1 =  urls.promo.select.swim;
    //   promo1 =urls.promo.new.promo;
    //   promo2 = urls.promo.select.promo;
    //   promo3 = urls.promo.sale.promo;
    //   clearance = urls.promo.clearance.girl;

    //   if (promoVars.showPromo1) {
    //     if (promoVars.dress !== ``) {
    //       $(promoVars.dress).show();
    //     } else {
    //       $(promoVars.promo1Elem).show();
    //     }
    //   }

    //   if (promoVars.showPromo2) {
    //     $(promoVars.promo2Elem).show();
    //   }

    //   if (promoVars.showPromo3) {
    //     $(promoVars.promo3Elem).show();
    //   }

    //   break;

    case '/new-arrivals':
      promo1 = _urls.urls.promo.thePromo.promo.promo;
      promo2 = _urls.urls.promo.select.promo;
      promo3 = _urls.urls.promo.sale.promo;
      clearance = _urls.urls.promo.clearance.girl;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars["new"] !== "") {
          $(_promoVars.promoVars["new"]).show();
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
      break;
    case '/gift-and-save-shop':
    case '/':
      promo1 = _urls.urls.promo.thePromo.promo.promo;
      promo2 = _urls.urls.promo.select.promo;
      promo3 = _urls.urls.promo.sale.promo;
      clearance = _urls.urls.promo.clearance.girl;
      if (_promoVars.promoVars.showPromo1) {
        if (_promoVars.promoVars["new"] !== "") {
          $(_promoVars.promoVars["new"]).show();
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
      break;
    default:
      break;
  }
  $('.promo1-url').attr('href', promo1);
  $('.promo2-url').attr('href', promo2);
  $('.promo3-url').attr('href', promo3);
  // $('.promo3-url').attr('href', promo1);
  $('.clearance-url').attr('href', clearance);
};
