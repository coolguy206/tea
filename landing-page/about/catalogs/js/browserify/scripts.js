(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// const showCatalog = require('./showCatalog.js');

//   RUN NODE ISSUU.JS FIRST!!!!

$(document).ready(function () {
  //load the first catalog
  var firstThumb = $('.navigation-catalog ul li:first-of-type').attr('data-name');
  var firstDesc = $('.navigation-catalog ul li:first-of-type').attr('data-desc');
  var firstTitle = $('.navigation-catalog ul li:first-of-type').attr('data-title');
  var iframe = "<div style=\"position:relative;padding-top:max(60%,326px);height:0;width:100%\"><iframe allow=\"clipboard-write\" sandbox=\"allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms\" allowfullscreen=\"true\" style=\"position:absolute;border:none;width:100%;height:100%;left:0;right:0;top:0;bottom:0;\" src=\"https://e.issuu.com/embed.html?d=".concat(firstThumb, "&hideIssuuLogo=true&showOtherPublicationsAsSuggestions=true&u=teacollection\"></iframe></div>");

  // showCatalog(firstThumb, 1000, firstDesc);
  $('.navigation-catalog .iframe').append(iframe);
  var elem = "<h2>".concat(firstTitle, "</h2><p>").concat(firstDesc, "</p>");
  $('.navigation-catalog .info').append(elem);
  $('.loading').hide();

  //click thumb change the flipbook
  $('.navigation-catalog ul li').click(function () {
    // console.log('li clicked');

    var name = $(this).attr('data-name');
    var desc = $(this).attr('data-desc');
    var title = $(this).attr('data-title');
    var iframe = "<div style=\"position:relative;padding-top:max(60%,326px);height:0;width:100%\"><iframe allow=\"clipboard-write\" sandbox=\"allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms\" allowfullscreen=\"true\" style=\"position:absolute;border:none;width:100%;height:100%;left:0;right:0;top:0;bottom:0;\" src=\"https://e.issuu.com/embed.html?d=".concat(name, "&hideIssuuLogo=true&showOtherPublicationsAsSuggestions=true&u=teacollection\"></iframe></div>");
    var elem = "<h2>".concat(title, "</h2><p>").concat(desc, "</p>");

    // $('#flipBook').children().remove();
    $('.navigation-catalog .iframe').children().remove();
    $('.navigation-catalog .info').children().remove();
    $('.loading').show();
    $('.navigation-catalog .info').append(elem);
    $('.navigation-catalog .iframe').append(iframe);
    $('.loading').hide();

    // showCatalog(name, 1000, desc);

    window.scrollTo(0, 140);
  });
});


},{}]},{},[1]);
