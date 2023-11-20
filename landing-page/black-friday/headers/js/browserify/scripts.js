(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inview = void 0;

var inview = function inview(elem) {
  // console.log(`from inview.js`);
  $(elem).on('inview', function (event, isInView) {
    if (isInView) {
      // element is now visible in the viewport
      // console.log('in view');
      var imgs = $(this).find('img'); // let width = $(window).width();
      // console.log(imgs);
      // console.log(width);

      $.each(imgs, function (i, val) {
        var src = $(val).attr('data-set'); // console.log(src);

        if (src) {
          $(val).attr('src', src);
        }

        $(val).removeAttr('data-set');
      });
      $(this).css('visibility', 'visible');
    }
  });
}; // module.exports = function(elem) {
//   // console.log(`from inview.js`);
//   $(elem).on('inview', function(event, isInView) {
//     if (isInView) {
//       // element is now visible in the viewport
//       // console.log('in view');
//       let imgs = $(this).find('img');
//       // let width = $(window).width();
//       // console.log(imgs);
//       // console.log(width);
//       $.each(imgs, function(i, val) {
//         let src = $(val).attr('data-src');
//         // console.log(src);
//         if (src) {
//           $(val).attr('src', src);
//         }
//         $(val).removeAttr('data-src');
//       });
//     }
//   });
// };


exports.inview = inview;


},{}],2:[function(require,module,exports){
"use strict";

var _inview = require("./inview.js");

$(document).ready(function () {
  //expand sidebar
  $('.shops h2').addClass('open');
  $('.shops .links').css('display', 'block');
  $('.shops h2 span').attr('class', 'fas fa-minus');
  (0, _inview.inview)('.container-black-friday');
  var url = window.location.pathname; //? ADD BLACK FRIDAY TO THE TITLE

  var title = $('.main-title').text();

  if (title !== "Black Friday" || title !== "Shop All Black Friday") {
    var cat = url.split('/')[2];
    var price = url.split('/')[3];

    if (cat !== undefined) {
      switch (cat) {
        case "girl":
        case "boy":
        case "baby-girl":
        case "baby-boy":
        case "toddler-girl":
        case "toddler-boy":
        case "newborn":
          if (cat.indexOf('-') !== -1) {
            cat = cat.replace(/-/, ' ');
          }

          if (price == undefined) {
            title = "".concat(title, " Black Friday");
          } else {
            title = "".concat(title, " ").concat(cat, " Black Friday");
          }

          break;

        default:
          title = "".concat(title, " Black Friday");
          break;
      }
    }

    $('.main-title').text(title);
  }

  var bfClass = url.replace(/\//g, '-').replace('-', '');
  $('.container-black-friday').addClass(bfClass); //? ADD 50% OFF NEWBORN TO DESKTOP SIDE NAV BECAUSE NEWBORN NOT IN BLACK FRIDAY CATEGORIES...

  if (url !== "/newborn-clothing" || url !== "/newborn-clothes/shop-by-category/rompers" || url !== "/newborn-dresses" || url !== "/newborn-clothes/shop-by-category/outfits" || url !== "/newborn-clothes/newborn-accessories" || url !== "/newborn-clothes/newborn-tops-and-bottoms") {
    $($('.category-page .nav .side-nav ul li .links ul')[0]).append('<li><a href="/newborn-clothing" title="50% Off Newborn">50% Off Newborn</a></li>'); //? CHANGE THE COLOR OF THE SIDE NAV DROPDOWN

    $('.category-page .nav .side-nav ul li h2.open')[0].style.color = '#D05F9A';
  }
});


},{"./inview.js":1}]},{},[2]);
