(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// var dpSrc = null;
//
// var dpAlt = null;
//function to call from flex field
// var addCell = function(src, alt) {
//   console.log('add the content cell');
//   var swimCells = [{
//       num: 4,
//       alt: 'beautiful handmade original patterns',
//       ext: '.gif'
//     },
//     {
//       num: 12,
//       alt: 'girl',
//       ext: '.png'
//     },
//     {
//       num: 17,
//       alt: 'boy',
//       ext: '.png'
//     },
//     {
//       num: 22,
//       alt: 'baby girl',
//       ext: '.png'
//     },
//     {
//       num: 30,
//       alt: 'baby boy',
//       ext: '.png'
//     },
//   ];
//
//   //remove all the content cells
//   $('#infinite section.content-cell, #infinite div.content-cell').remove();
//
//   $.each(swimCells, function(i, val) {
//     var elem;
//     //desktop
//     if ($(window).width() > 737) {
//       elem = '<section class="item content-cell"><img src="https://www.teacollection.com/mas_assets/media/tea_collection/landing-pages/swimwear/2019/0404/v2/s-' + val.num + val.ext + '" alt="' + val.alt +
//         '" style="max-width:100%;"></section>';
//       $('#infinite section.item').eq(val.num - 1).before(elem);
//     }
//     //mobile
//     else {
//       elem = '<div class="single-item-box content-cell"><img src="https://www.teacollection.com/mas_assets/media/tea_collection/landing-pages/swimwear/2019/0404/v2/s-' + val.num + val.ext + '" alt="' + val.alt +
//         '" style="max-width:100%;"></div>';
//       $('#infinite div.single-item-box').eq(val.num - 1).before(elem);
//     }
//
//   });
//
//   include "../../../../global/dev/js/scripts.js"
//
// };
$(document).ready(function () {
  //add tracking code
  $("a, area").attr("data-page", "warehouse landing page"); // jQuery('img[usemap]').rwdImageMaps();

  var alt = "48 hours only! wareshouse sale buy 15+ pay $10 buy 10+ pay $11 buy 9 or less pay $12";
  $(".warehouse-container img").attr("alt", alt); //
  // var leftNav = $('.dept-swimwear section');
  //
  // $.each(leftNav, function(i, val) {
  //   var a = $(val).find('a').text();
  //   switch (a) {
  //     case 'Tween':
  //       $(val).find('a').attr('href', '/tween-girls-clothing/category/swimwear');
  //       break;
  //     case 'Girl':
  //       $(val).find('a').attr('href', '/girls-swimwear');
  //       break;
  //     case 'Boy':
  //       $(val).find('a').attr('href', '/boys-swimwear');
  //       break;
  //     case 'Baby Girl':
  //       $(val).find('a').attr('href', '/baby-girl-swimwear');
  //       break;
  //     case 'Baby Boy':
  //       $(val).find('a').attr('href', '/baby-boy-swimwear');
  //       break;
  //   }
  // });
});


},{}]},{},[1]);
