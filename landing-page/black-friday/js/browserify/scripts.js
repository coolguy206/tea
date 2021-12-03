(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
  //expand sidebar
  $('.shops h2').addClass('open');
  $('.shops .links').css('display', 'block');
  $('.shops h2 span').attr('class', 'fas fa-minus');
  var url = window.location.pathname;
  var bfClass = url.replace(/\//g, '-').replace('-', '');
  $('.container-black-friday').addClass(bfClass);
  var subCats = "";
  var theCtas = "";

  if (url == '/black-friday') {
    //banner ctas
    subCats = $('.category-page .nav .side-nav ul li .links ul li a');
    $.each(subCats, function (i, val) {
      var thisURL = "";
      var num = "";
      var href = $(val).attr('href');
      var str = $(val).text();

      switch (str) {
        case "Girl":
          num = 1;
          break;

        case "Boy":
          num = 2;
          break;

        case "Baby Girl":
          num = 3;
          break;

        case "Baby Boy":
          num = 4;
          break;

        case "Newborn":
          num = 5;
          break;
      } // console.log(str);


      if (str !== "$10 Styles" && str !== "$12 Styles" && str !== "$15 Styles" && str !== "$18 Styles" && str !== "$20 Styles" && str !== "Toddler Girl" && str !== "Toddler Boy" && str !== "Shop All Black Friday") {
        theCtas = "".concat(theCtas, " <a class=\"cta-border cta").concat(num, "\" href=\"").concat(href, "\"><span>shop</span> ").concat(str, "</a> ");
      }
    });

    if ($('.category-page .nav .side-nav ul li .links ul li a').length == 8) {
      console.log('only exec once'); //add subcats to sidebar

      var theHTML = "<ul class=\"sub\">\n      <li class=\"\">\n        <a href=\"/black-friday/10\" title=\"$10 Styles\">$10 Styles</a>\n      </li>\n      <li class=\"\">\n        <a href=\"/black-friday/12\" title=\"$12 Styles\">$12 Styles</a>\n      </li>\n      <li class=\"\">\n        <a href=\"/black-friday/15\" title=\"$15 Styles\">$15 Styles</a>\n      </li>\n      <li class=\"\">\n        <a href=\"/black-friday/18\" title=\"$18 Styles\">$18 Styles</a>\n      </li>\n      <li class=\"\">\n        <a href=\"/black-friday/20\" title=\"$20 Styles\">$20 Styles</a>\n      </li>\n    </ul>";
      $($('.category-page .nav .side-nav ul li .links ul li a')[0]).after(theHTML);
    }
  } else if (url == '/black-friday/10' || url == '/black-friday/12' || url == '/black-friday/15' || url == '/black-friday/18' || url == '/black-friday/20' || url == '/black-friday/shop-all') {
    //banner ctas
    subCats = $('.category-page .nav .side-nav ul li .links ul li a');
    $.each(subCats, function (i, val) {
      var thisURL = "";
      var num = "";
      var href = $(val).attr('href');
      var str = $(val).text();

      switch (str) {
        case "Girl":
          num = 1;
          break;

        case "Boy":
          num = 2;
          break;

        case "Baby Girl":
          num = 3;
          break;

        case "Baby Boy":
          num = 4;
          break;

        case "Newborn":
          num = 5;
          break;
      } // console.log(str);


      if (str !== "$10 Styles" && str !== "$12 Styles" && str !== "$15 Styles" && str !== "$18 Styles" && str !== "$20 Styles" && str !== "Toddler Girl" && str !== "Toddler Boy" && str !== "Shop All Black Friday") {
        theCtas = "".concat(theCtas, " <a class=\"cta-border cta").concat(num, "\" href=\"").concat(href, "\"><span>shop</span> ").concat(str, "</a> ");
      }
    });
  } else {
    //banner ctas
    subCats = $('.category-page .nav .side-nav ul li .links ul li a.active + ul li a');
    $.each(subCats, function (i, val) {
      var thisURL = "";
      var num = i + 1;
      var color = "";
      var href = $(val).attr('href');
      var str = $(val).text();
      str = str.replace(/Styles/g, '').replace(/ /g, '');
      str = str.replace(/Girl/g, '').replace(/Boy/g, '').replace(/Baby/g, '').replace(/Newborn/g, '').replace(/Toddler/g, ''); // console.log(str);

      if (str == "ShopAll") {
        theCtas = "".concat(theCtas, " <a class=\"cta-border cta").concat(num, "\" href=\"").concat(href, "\">shop all</a> ");
      } else if (str !== "$20") {
        theCtas = "".concat(theCtas, " <a class=\"cta-border cta").concat(num, "\" href=\"").concat(href, "\">shop ").concat(str, "</a> ");
      }
    });
  }

  $('.container-black-friday div').append(theCtas); // $('.site-content-bg-wrapper').prepend($('.container-black-friday'));
  // $('.da-rennab .container-black-friday').remove();

  $('.category-page .nav .side-nav ul li h2.open')[0].style.color = '#FF1744'; // $('.container-black-friday')[0].remove()
});


},{}]},{},[1]);
