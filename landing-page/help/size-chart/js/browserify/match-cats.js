(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = function (urlDept, urlCat) {
  //? function to match the category to the sheets category

  //? this will set the correct cats to match the sheets based on the receieved url params
  //? for example: selectedDept=baby girl&selectedCat=swim
  if (urlDept == "girl") {
    switch (urlCat) {
      case "dresses":
      case "tops":
      case "bottoms":
        $('.size-chart-container select.category').val("tops,dresses,bottoms");
        break;
      default:
        $('.size-chart-container select.category').val(urlCat);
        break;
    }
  } else if (urlDept == "boy") {
    switch (urlCat) {
      case "tees + shirts":
      case "bottoms":
        $('.size-chart-container select.category').val("tees + shirts,bottoms");
        break;
      default:
        $('.size-chart-container select.category').val(urlCat);
        break;
    }
  } else if (urlDept == "baby girl") {
    switch (urlCat) {
      case "dresses":
      case "tops":
      case "bottoms":
      case "swim":
      case "sweater + outerwear":
      case "pajamas":
        $('.size-chart-container select.category').val("dresses, tops, bottoms, swim, sweater + outerwear, pajamas");
        break;
      default:
        $('.size-chart-container select.category').val(urlCat);
        break;
    }
  } else if (urlDept == "baby boy") {
    switch (urlCat) {
      case "tees + shirts":
      case "bottoms":
      case "swim":
      case "sweater + outerwear":
      case "pajamas":
        $('.size-chart-container select.category').val("tees + shirts, bottoms, swim, sweater + outerwear, pajamas");
        break;
      default:
        $('.size-chart-container select.category').val(urlCat);
        break;
    }
  } else if (urlDept == "newborn") {
    switch (urlCat) {
      case "all categories":
        $('.size-chart-container select.category').val("all categories, Booties, Bibs, hats");
        break;
      default:
        $('.size-chart-container select.category').val(urlCat);
        break;
    }
  } else if (urlDept == "women") {
    switch (urlCat) {
      case "swim":
      case "pajamas":
      case "dresses":
      case "tops":
        $('.size-chart-container select.category').val("swim,pajamas,dresses,tops");
        break;
      default:
        $('.size-chart-container select.category').val(urlCat);
        break;
    }
  } else {
    $('.size-chart-container select.category').val(urlCat);
  }
};

},{}]},{},[1]);
