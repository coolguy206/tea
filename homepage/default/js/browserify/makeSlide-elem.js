(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var elem = function elem(url, imgSrc, onModel, title, color, price, sizesStr, sizesArr, redText) {
  var str = "\n<div>\n    <div class=\"the-model\" style=\"background-image:url(".concat(onModel, ")\">\n        <!--<img src=\"").concat(onModel, "\" alt=\"").concat(title, "\">-->\n    </div>\n    <div class=\"thumb-grid item\">\n        <span class=\"img\">\n            <a href=\"").concat(url, "\"\n                data-hash=\"\">\n                <img class=\"image\" src=\"").concat(imgSrc, "\"\n              alt=\"").concat(title, "\" width=\"500\" height=\"500\">\n            </a>\n            <span\n                data-href=\"").concat(url, "\"\n                data-color=\"").concat(color, "\" class=\"js-qv \">Quick View</span>\n        </span>\n        <div class=\"thumb-content\">\n            <a class=\"name\"\n                href=\"").concat(url, "\"\n                data-hash=\"\">\n                <span class=\"model\">").concat(title, "</span>\n            </a>\n\n            <div class=\"price-wrap\">\n                <div class=\"price\">\n                    <span id=\"store_price\" class=\"price\">$").concat(price, "</span>\n                </div>\n            </div>\n\n            <p class=\"size\">\n                <span class=\"thumb-sizes\" title=\"").concat(sizesStr, "\">\n                    Sizes ").concat(sizesArr[0], " to ").concat(sizesArr[sizesArr.length - 1], "\n                </span>\n            </p>\n            ").concat(redText, "\n\n        </div>\n    </div>\n</div>\n");
  return str;
};
exports.elem = elem;


},{}]},{},[1]);
