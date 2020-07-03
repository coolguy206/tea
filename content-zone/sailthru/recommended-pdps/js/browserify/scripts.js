(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
  //popular vs trending
  var id = '8286a49c-84e0-11ea-91cc-002590d1a41a'; // console.log(id);
  //viewed vs purchased
  // var id = `134796ac-8591-11ea-b811-002590d1a41a`;

  Sailthru.init({
    customerId: '856bfba3e6c8f69c9faad446ffedbce0',
    isCustom: true
  });
  Sailthru.personalize({
    sections: [{
      id: id
    }],
    vars: {},
    onSuccess: function onSuccess(data) {
      //console.log(data);
      var jsonArr = JSON.parse(data[id].json); // console.log(typeof jsonArr);
      // console.log(jsonArr);

      $.each(jsonArr, function (i, val) {
        var url = val.url;
        var img = val.image;
        var price = val.price;
        price = price / 100;
        price = price.toFixed(2);
        var title = val.title;
        console.log(url, img, price, title);

        if (url !== undefined && url.indexOf('teashowroom') == -1 && url.indexOf('sandbox.') == -1) {
          console.log('tea pdp');

          if (img !== undefined && price !== undefined && title !== undefined) {
            var elem = "\n            <li>\n              <a href=\"".concat(url, "\">\n                <img src=\"").concat(img, "\" alt=\"").concat(title, "\">\n              </a>\n              <h3>\n                <a href=\"").concat(url, "\">").concat(title, "</a>\n              </h3>\n              <p>\n                <span class=\"sale_price\">$").concat(price, "</span>\n              </p>\n            </li>");
            $('.sailthru-list').append(elem);
          }
        }
      });
      $('.sailthru-list').bxSlider({
        minSlides: 1,
        maxSlides: 4,
        slideWidth: 300,
        moveSlides: 1,
        controls: true,
        nextText: '<span class="fas fa-chevron-right"></span>',
        prevText: '<span class="fas fa-chevron-left"></span>',
        pager: false
      });
    },
    onError: function onError(err) {
      console.log(err);
    }
  });
});


},{}]},{},[1]);
