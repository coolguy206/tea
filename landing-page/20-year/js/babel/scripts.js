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
//# sourceMappingURL=scripts.js.map
