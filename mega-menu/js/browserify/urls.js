(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urls = void 0;
var urls = exports.urls = {
  promo: {
    promo: "/new-arrivals",
    swim: "/swimwear",
    girl: "/girls-clothes",
    boy: "/boys-clothes",
    baby: {
      girl: "/baby-girl-clothes",
      boy: "/baby-boy-clothes",
      newborn: "/newborn-clothing"
    },
    toddler: {
      girl: "/toddler-girls-clothes",
      boy: "/toddler-boys-clothes"
    },
    "new": {
      girl: "/girls-clothing/new-arrivals",
      boy: "/boys-clothing/new-arrivals",
      baby: {
        girl: "/baby-girl-clothes/new-arrivals",
        boy: "/baby-boy-clothes/new-arrivals",
        newborn: "/newborn-clothes/favorites/new-arrivals"
      },
      toddler: {
        girl: "/toddler-girls-clothes/favorites/new-arrivals",
        boy: "/toddler-boys-clothes/favorites/new-arrivals"
      }
    },
    thePromo: {
      girl: "/girls-pajamas-sleepwear",
      boy: "/boys-pajamas-sleepwear",
      baby: {
        girl: "/baby-girl-pajamas",
        boy: "/baby-boy-pajamas",
        newborn: "/newborn-clothing"
      },
      toddler: {
        girl: "/toddler-girls-clothes/pajamas",
        boy: "/toddler-boys-clothes/pajamas"
      }
    },
    select: {
      promo: "/select-styles",
      family: "/select-styles/family",
      girl: "/girls-clothing/favorites/limited-time-sale",
      boy: "/boys-clothing/favorites/limited-time-sale",
      baby: {
        girl: "/baby-girl-clothes/favorites/limited-time-sale",
        boy: "/baby-boy-clothes/favorites/limited-time-sale",
        newborn: "/newborn-clothing/favorites/limited-time-sale",
        newborn2: "/select-styles/newborn"
      },
      toddler: {
        girl: "/select-styles/toddler-girls-clothes/favorites/limited-time-sale",
        boy: "/select-styles/toddler-boys-clothes/favorites/limited-time-sale"
      }
    },
    sale: {
      promo: "/clothing-sale",
      girl: "/sale/girls-clothing/view-all ",
      boy: "/sale/boys-clothing/view-all",
      baby: {
        girl: "/sale/baby-girl-clothes/view-all",
        boy: "/sale/baby-boy-clothes/view-all",
        newborn: "/sale/newborn-clothing/view-all"
      },
      toddler: {
        girl: "/sale/toddler-girls-clothing/view-all",
        boy: "/sale/toddler-boys-clothing/view-all"
      }
    },
    clearance: {
      promo: "/sale/clearance",
      girl: "/sale/girls-clothing/clearance",
      boy: "/sale/boys-clothing/clearance",
      baby: {
        girl: "/sale/baby-girl-clothes/clearance",
        boy: "/sale/baby-boy-clothes/clearance",
        newborn: "/sale/newborn-clothing/clearance"
      },
      toddler: {
        girl: "/sale/toddler-girls-clothing/clearance",
        boy: "/sale/toddler-boys-clothing/clearance"
      }
    },
    warehouse: {
      promo: "/warehousesale",
      girl: "/warehousesale-girls",
      boy: "/warehousesale-boys",
      baby: {
        girl: "/warehousesale-baby-girl",
        boy: "/warehousesale-baby-boy",
        newborn: "/warehousesale-newborn"
      },
      toddler: {
        girl: "/warehousesale-toddler-girls",
        boy: "/warehousesale-toddler-boys"
      }
    },
    blackFriday: {
      girl: "/black-friday/girl",
      boy: "/black-friday/boy",
      baby: {
        girl: "/black-friday/baby-girl",
        boy: "/black-friday/baby-boy",
        newborn: "/newborn-clothing"
      },
      toddler: {
        girl: "/black-friday/toddler-girl",
        boy: "/black-friday/toddler-boy"
      }
    }
  }
};

},{}]},{},[1]);
