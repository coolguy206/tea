(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
  var content = [{
    pink: 'GREECE',
    blue: 'METAdrasi',
    url: 'https://blog.teacollection.com/2020/01/18/let-kids-be-kids-meet-magda-of-metadrasi/'
  }, {
    pink: 'BAJA, MEXICO',
    blue: 'Door of Faith Orphanage',
    url: 'https://blog.teacollection.com/2019/12/05/giving-tuesday-giving-back-for-good/'
  }, {
    pink: 'SaN FRANCISCO, CALIFORNIA',
    blue: 'Homeless Prenatal Program',
    url: 'https://blog.teacollection.com/2019/11/06/tea-donates-12000-units-to-the-homeless-prenatal-program/'
  }, {
    pink: 'NEPAL',
    blue: 'LITTLE SISTERS FUND',
    url: 'https://blog.teacollection.com/little-sisters-fund'
  }, {
    pink: 'NORTH AMERICA',
    blue: 'RAICES',
    url: 'https://www.facebook.com/teacollection/posts/10160612162615327'
  }, {
    pink: 'ITALY',
    blue: 'Citizens FC tournament',
    url: 'https://blog.teacollection.com/category/citizens-fc/'
  }, {
    pink: 'HAITI',
    blue: 'SAKALA',
    url: 'https://blog.teacollection.com/sakala-gfc'
  }, {
    pink: 'PERU',
    blue: 'Asociación Civil Los Pioneros',
    url: 'https://blog.teacollection.com/los-pioneros'
  }, {
    pink: 'INDIA',
    blue: 'Gram Bharati Samiti',
    url: 'https://blog.teacollection.com/gfc-gbs'
  }];
  var theContent = '';
  var baseUrl = '/mas_assets/media/tea_collection/landing-pages/give-back/2020/0116/v0/';
  $.each(content, function (i, val) {
    var num = i + 1;
    var elem = "\n    <div>\n\t\t  <a href=\"".concat(val.url, "\" target=\"_blank\">\n        <img src=\"").concat(baseUrl, "c3-").concat(num, ".png\" alt=\"").concat(val.blue, "\">\n\t\t    <span>").concat(val.pink, "</span>\n\t\t    <h3>").concat(val.blue, "</h3>\n      </a>\n\t\t</div>");
    theContent = theContent + elem;
  });
  $('.values-wrap .c3').append(theContent);
});


},{}]},{},[1]);
