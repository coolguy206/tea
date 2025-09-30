(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = function (cat, dept) {
  //? function to set categories to match sheets

  if (cat == 'hoodies' || cat == 'tops') {
    if (dept == 'girl' || dept == 'baby girl') {
      cat = 'tops';
    } else if (dept == 'boy' || dept == 'baby boy') {
      cat = 'tees + shirts';
    }
  } else if (cat == 'dresses') {
    cat = 'dresses';
  } else if (cat == 'leggings' || cat == 'pants' || cat == 'skirts' || cat == 'bottoms') {
    cat = 'bottoms';
  } else if (cat == 'swimwear') {
    cat = 'swim';
  } else if (cat == 'outerwear' || cat == 'sweaters') {
    cat = 'sweater + outerwear';
  } else if (cat == 'sleepwear') {
    cat = 'pajamas';
  } else if (cat == 'accessories' || cat == 'shoes') {
    cat = 'shoes + accessories';
  } else {
    if (dept == 'girl') {
      // console.log('its girl defaults');
      cat = 'dresses';
    } else if (dept == 'boy') {
      // console.log('its boy defaults');
      cat = 'tees + shirts';
    } else if (dept == 'baby girl' || dept == 'baby boy') {
      // console.log('its baby girl & baby boy defaults');
      cat = 'rompers';
    }

    // console.log('results ',cat);
  }
  return cat;
};

},{}]},{},[1]);
