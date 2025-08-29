(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = function (dept, cat) {
  //? function to return cat if dept is baby

  //? if baby girl or baby boy and category is dresses, tops, bottoms, swim, sweater + outerwear, pajamas change to match sheet because it does not match the measuring-tips.js array of objects
  if (dept == "baby girl") {
    if (cat == "dresses, tops, bottoms, swim, sweater + outerwear, pajamas") {
      cat = "dresses,tops,tees + shirts,bodysuits,bottoms,swim,sweater + outerwear,pajamas";
    }
  } else if (dept == "baby boy") {
    if (cat == "tees + shirts, bottoms, swim, sweater + outerwear, pajamas") {
      cat = "dresses,tops,tees + shirts,bodysuits,bottoms,swim,sweater + outerwear,pajamas";
    }
  }
  return cat;
};

},{}]},{},[1]);
