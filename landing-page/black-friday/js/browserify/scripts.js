(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeLinks = void 0;

var makeLinks = function makeLinks(arr, baseURL, cat) {
  // console.log(cat);
  var theURLs = "";
  $.each(arr, function (i, val) {
    var thisURL = "";
    var num = i + 1;
    var color = "";

    if (cat == undefined) {
      thisURL = "/".concat(baseURL, "/").concat(val);
      theURLs = "".concat(theURLs, " <a class=\"cta-border cta").concat(num, "\" href=\"").concat(thisURL, "\"><span>shop</span> $").concat(val, "</a> ");
    } else if (cat !== '10' && cat !== '12' && cat !== '15' && cat !== '20') {
      thisURL = "/".concat(baseURL, "/").concat(cat, "/").concat(val);
      theURLs = "".concat(theURLs, " <a class=\"cta-border cta").concat(num, "\" href=\"").concat(thisURL, "\"><span>shop</span> $").concat(val, "</a> ");
    } else {
      thisURL = "/".concat(baseURL, "/").concat(val.url, "/").concat(cat);
      theURLs = "".concat(theURLs, " <a class=\"cta-border cta-").concat(val.url, "\" href=\"").concat(thisURL, "\"><span>shop</span> ").concat(val.text, "</a> ");
    }
  });
  $('.container-black-friday div').append(theURLs);
  var length = $('.container-black-friday div a').length;
  var lastNum = length + 1;
  $('.container-black-friday div').addClass('cta-length-' + lastNum);
  var text = "";

  switch (cat) {
    case 'girl':
      text = 'girl';
      break;

    case 'boy':
      text = 'boy';
      break;

    case 'tween':
      text = 'tween';
      break;

    case 'baby-girl':
      text = 'baby girl';
      break;

    case 'baby-boy':
      text = 'baby boy';
      break;

    case 'toddler-girl':
      text = 'toddler girl';
      break;

    case 'toddler-boy':
      text = 'toddler boy';
      break;
  } // console.log(`text: ${text}`);
  // $('.container-black-friday div').append(`<a class="cta-border cta-${last} last" href="/${baseURL}/${cat}">shop ${text}</a>`);


  if (cat == undefined) {
    $('.container-black-friday div').append("<a class=\"cta-border cta-last cta-".concat(cat, "\" href=\"/").concat(baseURL, "\"><span>shop</span> all</a>"));
  } else if (cat !== '10' && cat !== '12' && cat !== '15' && cat !== '20') {
    $('.container-black-friday div').append("<a class=\"cta-border cta-last cta-".concat(cat, "\" href=\"/").concat(baseURL, "/").concat(cat, "\"><span>shop</span> ").concat(text, "</a>"));
  }
};

exports.makeLinks = makeLinks;


},{}],2:[function(require,module,exports){
"use strict";

var _urls = require("./urls");

var _makeLinks = require("./makeLinks");

$(document).ready(function () {
  $('.shops h2').addClass('open');
  $('.shops .links').css('display', 'block');
  $('.shops h2 span').attr('class', 'fas fa-minus');
  var li = $('.category-page .nav .side-nav ul li .links ul li');
  $.each(li, function (i, val) {
    switch (i) {
      case 1:
      case 2:
      case 3:
      case 4:
        $(val).css('margin-left', '20px');
        break;
    }
  }); // console.log(urls);

  var url = window.location.pathname;
  var number = 0;

  switch (url) {
    case '/black-friday':
    case '/black-friday/10':
    case '/black-friday/12':
    case '/black-friday/15':
    case '/black-friday/20':
      number = 4;
      break;

    case '/black-friday/girl/10':
      number = 2;
      break;

    default:
      number = 3;
      break;
  } //collapse size sidebar


  if ($('.category-page .nav .side-nav ul li h2')[number] !== undefined) {
    $('.category-page .nav .side-nav ul li h2')[number].classList.remove('open');
    $('.category-page .nav .side-nav ul li h2 span')[number - 1].className = 'fas fa-plus';
    $('.category-page .nav .side-nav ul li .facets')[number - 2].style.display = 'none';
  }

  url = url.split('/');
  var baseURL = url[1];
  var cat = url[2]; // console.log(baseURL, cat);

  switch (cat) {
    case '10':
    case '12':
    case '15':
    case '20':
      var titleText = $('.main-title').text();
      titleText = titleText.split(' '); // console.log(titleText);
      // console.log(`should be top level nav`);

      titleText = "".concat(titleText[0], " black friday styles"); // console.log(titleText);

      $('.main-title').text(titleText);
      break;

    case 'girl':
    case 'boy':
    case 'tween':
      var titleText = $('.main-title').text();
      titleText = titleText.split(' '); // console.log(titleText);

      if (titleText.length < 3) {
        if (titleText[1] == undefined) {
          // console.log(`undefined, should be top level nav`);
          titleText = "".concat(titleText[0], " black friday styles"); // console.log(titleText);
        } else {
          // console.log(`subnav`)
          titleText = "".concat(titleText[0], " ").concat(cat, " ").concat(titleText[1]); // console.log(titleText);
        }

        $('.main-title').text(titleText);
      }

      break;

    case 'baby-girl':
    case 'baby-boy':
    case 'toddler-girl':
    case 'toddler-boy':
      var titleText = $('.main-title').text();
      titleText = titleText.split(' '); // console.log(titleText);

      if (titleText.length < 3) {
        if (titleText[0] == 'Baby' || titleText[0] == 'Toddler') {
          // console.log(`undefined, should be top level nav`);
          titleText = "".concat(titleText[0], " ").concat(titleText[1], " <br class=\"mobile\"> black friday styles"); // console.log(titleText);
        } else {
          // console.log(`subnav`)
          var thisCat = cat;
          thisCat = thisCat.replace(/-/g, ' ');
          titleText = "".concat(titleText[0], " ").concat(thisCat, " ").concat(titleText[1]); // console.log(titleText);
        }

        $('.main-title').html(titleText);
      }

      break;
  }

  ;

  switch (cat) {
    case '10':
      (0, _makeLinks.makeLinks)(_urls.urls.num10, baseURL, cat);
      break;

    case '12':
      (0, _makeLinks.makeLinks)(_urls.urls.num12, baseURL, cat);
      break;

    case '15':
      (0, _makeLinks.makeLinks)(_urls.urls.num15, baseURL, cat);
      break;

    case '20':
      (0, _makeLinks.makeLinks)(_urls.urls.num20, baseURL, cat);
      break;

    case undefined:
      (0, _makeLinks.makeLinks)(_urls.urls.numUndefined, baseURL, cat);
      break;

    case 'girl':
      (0, _makeLinks.makeLinks)(_urls.urls.girl, baseURL, cat);
      break;

    case 'boy':
      (0, _makeLinks.makeLinks)(_urls.urls.boy, baseURL, cat);
      break;

    case 'tween':
      (0, _makeLinks.makeLinks)(_urls.urls.tween, baseURL, cat);
      break;

    case 'baby-girl':
      (0, _makeLinks.makeLinks)(_urls.urls.baby.girl, baseURL, cat);
      break;

    case 'baby-boy':
      (0, _makeLinks.makeLinks)(_urls.urls.baby.boy, baseURL, cat);
      break;

    case 'newborn':
      (0, _makeLinks.makeLinks)(_urls.urls.baby.newborn, baseURL, cat);
      break;

    case 'toddler-girl':
      (0, _makeLinks.makeLinks)(_urls.urls.toddler.girl, baseURL, cat);
      break;

    case 'toddler-boy':
      (0, _makeLinks.makeLinks)(_urls.urls.toddler.boy, baseURL, cat);
      break;
  }

  ; // $('.site-content-bg-wrapper').prepend($('.container-black-friday'));
  // $('.da-rennab .container-black-friday').remove();

  $('.category-page .nav .side-nav ul li h2.open')[0].style.color = '#FF1744'; // $('.container-black-friday')[0].remove()
});


},{"./makeLinks":1,"./urls":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urls = void 0;
var urls = {
  num10: [{
    url: 'girl',
    text: 'girl'
  }, {
    url: 'boy',
    text: 'boy'
  }, {
    url: 'baby-girl',
    text: 'baby girl'
  }, {
    url: 'baby-boy',
    text: 'baby boy'
  }],
  num12: [{
    url: 'girl',
    text: 'girl'
  }, {
    url: 'boy',
    text: 'boy'
  }, {
    url: 'baby-girl',
    text: 'baby girl'
  }, {
    url: 'baby-boy',
    text: 'baby boy'
  }],
  num15: [{
    url: 'girl',
    text: 'girl'
  }, {
    url: 'boy',
    text: 'boy'
  }, {
    url: 'tween',
    text: 'tween'
  }, {
    url: 'baby-girl',
    text: 'baby girl'
  }, {
    url: 'baby-boy',
    text: 'baby boy'
  }],
  num20: [{
    url: 'girl',
    text: 'girl'
  }, {
    url: 'tween',
    text: 'tween'
  }, {
    url: 'baby-girl',
    text: 'baby girl'
  }],
  numUndefined: [10, 12, 15, 20],
  girl: [10, 12, 15, 20],
  boy: [10, 12, 15],
  tween: [15, 20],
  baby: {
    girl: [10, 12, 15, 20],
    boy: [10, 12, 15] // newborn: [12, 15]

  },
  toddler: {
    girl: [10, 12, 15, 20],
    boy: [10, 12, 15]
  }
};
exports.urls = urls;


},{}]},{},[2]);
