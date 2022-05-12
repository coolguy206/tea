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
        var src = $(val).attr('data-src'); // console.log(src);

        if (src) {
          $(val).attr('src', src);
        }

        $(val).removeAttr('data-src');
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
  var findArticle = function findArticle(id) {
    var articles = $('.article-wrap .article');

    for (var i = 0; i < articles.length; i++) {
      var articleId = $(articles[i]).attr('id'); // console.log(`articleId`);
      // console.log(articleId);

      if (id == articleId) {
        $('.content-wrap').fadeOut(function () {
          window.scrollTo(0, 0);
        });
        $(articles[i]).fadeIn();
      }
    }
  };

  (0, _inview.inview)('.content-wrap .articles article, .article main .c1, .article main .c2, .article main .c3, .article main .c4, .article footer .c1, .article footer .c2, .article footer .c3');
  var url = window.location.hash;

  if (url !== "") {
    var urlId = url.split('#')[1]; // console.log(urlId);

    findArticle(urlId);
  }

  $('.back').on('click', function (e) {
    e.preventDefault();
    $('.article').fadeOut(function () {
      window.scrollTo(0, 0);
    });
    $('.content-wrap').fadeIn();
  });
  $('.content-wrap .articles article a').on('click', function (e) {
    var listId = $(this).closest('article').attr('id'); // console.log(`listId`);
    // console.log(listId);

    if (listId !== 'none') {
      e.preventDefault();
      findArticle(listId);
    }
  });
});


},{"./inview.js":1}]},{},[2]);
