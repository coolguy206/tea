(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urls = void 0;
var urls = {
  promo1: {
    Promo: "/pajamas",
    girl: "/girls-pajamas-sleepwear",
    boy: "/boys-pajamas-sleepwear",
    baby: {
      girl: "/baby-girl-pajamas",
      boy: "/baby-boy-pajamas",
      newborn: "/newborn-clothing/favorites/limited-time-sale"
    },
    toddler: {
      girl: "/toddler-girls-clothes/pajamas",
      boy: "/toddler-boys-clothes/pajamas"
    },
    sale: {
      girl: "/sale/girls-clothing/",
      boy: "/sale/boys-clothing/",
      baby: {
        girl: "/sale/baby-girl-clothes/",
        boy: "/sale/baby-boy-clothes/",
        newborn: "/sale/newborn-clothing/view-all"
      },
      toddler: {
        girl: "/sale/toddler-girls-clothing/",
        boy: "/sale/toddler-boys-clothing/"
      }
    }
  },
  promo2: {
    girl: "/flashsale-girls",
    boy: "/flashsale-boys",
    baby: {
      girl: "/flashsale-baby-girl",
      boy: "/flashsale-baby-boy",
      newborn: "/flashsale-newborn"
    },
    toddler: {
      girl: "/flashsale-toddler-girls",
      boy: "/flashsale-toddler-boys"
    }
  }
};
exports.urls = urls;


},{}]},{},[1]);
