(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var grid1 = [{
  name: 'c01.gif',
  id: '#20S12310_aegean_waves',
  alt: 'aegean waves',
  onPage: false
}, {
  name: 'c02.jpg',
  id: '#20S12310_sun_tile_-_dusty_coral',
  alt: 'Sun tile',
  onPage: false
}, {
  name: 'c03.gif',
  id: '#20S32504_spring_citrus',
  alt: 'spring citrus',
  onPage: false
}, {
  name: 'c04.jpg',
  id: '#20M22132_parakeets_-_desert_sage',
  alt: 'parakeets',
  onPage: false
}, {
  name: 'c05.gif',
  id: '#20M22137_crocodiles',
  alt: 'crocodiles of the nile',
  onPage: false
}, {
  name: 'c06.jpg',
  id: '#20S12605_watermelons',
  alt: 'watermelon',
  onPage: false
}];

var addContent = function addContent(arr) {
  $.each(arr, function (i, val) {
    // console.log(val.name, val.id);
    var elem = "\n        <div id=\"".concat(val.alt, "\" class=\"thumb-grid item\">\n            <img src=\"/mas_assets/media/tea_collection/landing-pages/wallshoppe/2020/0506/v0/").concat(val.name, "\" alt=\"").concat(val.alt, "\">\n        </div>");
    var theElem = $(val.id)[0];

    if (theElem !== undefined) {
      if (val.onPage !== true) {
        if (val.name == 'c01.gif' || val.name == 'c05.gif') {
          $(val.id).before(elem);
          val.onPage = true; // console.log(val.alt);
          // console.log(val.onPage);
        } else {
          $(val.id).after(elem);
          val.onPage = true; // console.log(val.alt);
          // console.log(val.onPage);
        }
      } else {// console.log(`${val.name} already on page`);
        }
    } else {// console.log(`${val.name} not on page yet`);
      }
  });
};

$(document).ready(function () {
  $('.main-title').hide();
  addContent(grid1);
});
$(document).scroll(function () {
  // console.log('scrolling');
  addContent(grid1);
});


},{}]},{},[1]);
